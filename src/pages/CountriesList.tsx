import { useEffect, useState } from "react";

import { type ApiCountry } from "../types/types";
import {Link} from "react-router-dom"

const API_URL =
  "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags";

export default function CountriesList() {
  const [countries, setCountries] = useState<ApiCountry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchCountry, setSearchCountry] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");


  useEffect(() => {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await res.json();
        setCountries(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCountries();
  }, []);

  if (isLoading) return <p>Loading countries...</p>;
  if (error) return <p> {error}</p>;
  
 // unique region list
   const regions = Array.from(
    new Set(countries.map((c) => c.region).filter(Boolean))
  );
//  filter & search by search on country name
  const filteredCountries = countries.filter((country) =>{
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(searchCountry.toLowerCase())
    const matchesRegion = regionFilter === "All" || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });
  return (
    <main >
      {/* search bar */}
      <section className="controls">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a country..."
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
        />
              {/* Filter section */}
        <select
          className="region-select"
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
        >
          <option value="All">Filter by Region</option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </section>

      {/* main sextion  */}
      <section className="countries-grid">
        {filteredCountries.map((country) => (
          <Link
            key={country.name.common}
            to={`/country/${encodeURIComponent(country.name.common)}`}
            className="country-card-link"
          >
            <article className="country-card">
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="country-flag"
              />
              <div className="country-body">
                <h2 className="country-name">{country.name.common}</h2>
                <p>
                  <strong>Population: </strong>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region: </strong>
                  {country.region}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {country.capital ? country.capital[0] : "N/A"}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
