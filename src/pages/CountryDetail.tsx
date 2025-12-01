import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { ApiDetailCountry } from "../types/types";

const DETAIL_API_BASE =
  "https://restcountries.com/v3.1/name";

export default function CountryDetail() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const [country, setCountry] = useState<ApiDetailCountry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    async function fetchCountryDetail() {
      try {
        setIsLoading(true);
        setError(null);

        const res = await fetch(
          `${DETAIL_API_BASE}/${encodeURIComponent(
            name
          )}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch country details");
        }

        const data: ApiDetailCountry[] = await res.json();
        setCountry(data[0]);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCountryDetail();
  }, [name]);

  if (isLoading) return <p>Loading country...</p>;
  if (error) return <p>❌ {error}</p>;
  if (!country) return <p>No country data found.</p>;

  const {
    flags,
    name: countryName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  const nativeName =
    countryName.nativeName &&
    Object.values(countryName.nativeName)[0]?.common;

  const currencyNames = currencies
    ? Object.values(currencies)
        .map((c) => c.name)
        .join(", ")
    : "N/A";

  const languageNames = languages
    ? Object.values(languages).join(", ")
    : "N/A";

  return (
    <main className="mainContainer">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <article className="country-detail">
        <img
          src={flags.png}
          alt={`${countryName.common} flag`}
          className="country-detail-flag"
        />

        <div className="country-detail-info">
          <h2 className="country-name">{countryName.common}</h2>

          <div className="country-detail-columns">
            <div>
              <p className="entry-text">
                <strong>Native Name: </strong>
                {nativeName || countryName.common}
              </p>
              <p className="entry-text">
                <strong>Population: </strong>
                {population.toLocaleString()}
              </p>
              <p className="entry-text">
                <strong>Region: </strong>
                {region}
              </p>
              <p className="entry-text">
                <strong>Sub Region: </strong>
                {subregion || "N/A"}
              </p>
              <p className="entry-text">
                <strong>Capital: </strong>
                {capital && capital.length ? capital[0] : "N/A"}
              </p>
            </div>

            <div>
              <p className="entry-text">
                <strong>Top Level Domain: </strong>
                {tld && tld.length ? tld.join(", ") : "N/A"}
              </p>
              <p className="entry-text">
                <strong>Currencies: </strong>
                {currencyNames}
              </p>
              <p className="entry-text">
                <strong>Languages: </strong>
                {languageNames}
              </p>
            </div>
          </div>

          <div className="country-detail-borders">
            <strong>Border Countries: </strong>
            {borders && borders.length ? (
              borders.map((border) => (
                <span key={border} className="border-pill">
                  {border}
                </span>
              ))
            ) : (
              <span>No borders</span>
            )}
          </div>
        </div>
      </article>
    </main>
  );
}