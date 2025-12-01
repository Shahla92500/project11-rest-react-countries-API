
interface CountryCardProps {
  img: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

export default function CountryCard({
    img,
    name,
    population,
    region,
    capital,
  }: CountryCardProps){
  // console.log(CountryCardProps)

  return (

      <article className="country-card">
        <img src={img} alt={`${name} flag`} className="country-flag"/>

        <div className="info-container">
            <h2 className="how to ">{name}</h2>
            <p className="entry-text">
              <strong>Population: </strong>
              {population.toLocaleString()}
            </p>
            <p className="entry-text">
              <strong>Region: </strong>
              {region}
            </p>
            <p className="entry-text">
              <strong>Capital: </strong>
              {capital}
            </p>
        </div>
      </article>

  );
  
}