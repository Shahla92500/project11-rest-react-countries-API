import type {Country} from "../types/data"
import { type ApiDetailCountry } from "../types/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface CountryDetailProps {
  country: Country;
}

const DETAIL_API_BASE = "https://restcountries.com/v3.1/name";

export default function CountryDetail({ country }: CountryDetailProps){
  // console.log(CountryCardProps)
  const {
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country;
   const currencyNames = currencies.map((c) => c.name).join(", ");
  const languageNames = languages.map((l) => l.name).join(", ");

  return (
    <article className="country-detail">
      <img
        src={flags.png}
        alt={`${name} flag`}
        className="country-detail-flag"
      />

      <div className="country-detail-info">
        <h2 className="country-name">{name}</h2>

        <div className="country-detail-columns">
          <div>
            <p className="entry-text">
              <strong>Native Name: </strong>
              {nativeName}
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
              {subregion}
            </p>
            <p className="entry-text">
              <strong>Capital: </strong>
              {capital}
            </p>
          </div>

          <div>
            <p className="entry-text">
              <strong>Top Level Domain: </strong>
              {topLevelDomain.join(", ")}
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
          {borders.map((border) => (
            <span key={border} className="border-pill">
              {border}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}