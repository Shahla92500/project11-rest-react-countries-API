//       import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
export default function CountryCard(props) {
  console.log(props)
//     const {code} = useParams()
//     const [country, setCountry] = useState(null);
//     const [border, setBorder] = useState([]);
//   useEffect(() => {
//     const fetchCountry = async () => {
//       const response = await fetch(
//         `https://restcountries.com/v3.1/alpha/${code}`
//       );
//       const data = await response.json();
//       console.log(data[0]);
//       setCountry(data[0]);
    //   const fetchBorder = await fetch(
    //     `https://restcountries.com/v3.1/name/${name}?fullText=true`
    //   )
    //   const borderData = await fetchBorder.json()
    //   setBorder(borderData)
    // try 2 ------------------------
    //   const fetchBorder = country.borders.map((border) => (
    //   fetch(
    //     `https://restcountries.com/v3.1/alpha/${border}`
    //   )
    //   .then((res => res.json()))
    //   .then((data => console.log(data)))
    //   ))
      // end of try 2 ----------------
  //   };
  //   fetchCountry();
  // }, [code]);
  // use another useEffect
//   useEffect(() => {
//     const fetchBorder = country.borders.map((border) => (
//       fetch(
//         `https://restcountries.com/v3.1/alpha/${border}`
//       )
//       .then((res => res.json()))
//       .then((data => console.log(data)))
//       ))
//       fetchBorder();
//   }, [country]);
//   if(!country) return <h2>Loading...</h2>
//   if(country) {
//     const fetchBorder = country.borders.map((border) => (
//       fetch(
//         `https://restcountries.com/v3.1/alpha/${border}`
//       )
//       .then((res => res.json()))
//       //.then((data => console.log(data)))
//       .then((res => console.log(res[0].name)))
//       //.then(setBorder(prevBorder => [...prevBorder, res]))
//       ))
//   }
  return (
//     <>
//       <Link to='/'>Back</Link>
//       <h2>{country.name.common}</h2>
//       <img src ={country.flags.png} />
//       <h3>Population: {country.population}</h3>
//       <h3>Region: {country.region}</h3>
//       <h3>Capital: {country.capital}</h3>
//       {country.borders && country.borders.map((country) => (
//         <h4>{country}</h4>
//       ) ) }
//     </>


// export default CountryCard;
  <div calssName="mainCardContainer">
    <article className="country-card">
        {/* <div className="main-image-container"> */}
            <img 
                src={props.src }
                alt="country flag" 
            />
 
        {/* </div> */}

        <div className="info-container">
            <span className="country"><h2 className="country-name">Country Name</h2></span>
            <li className="entry-text">{props.population}</li>
            <li className="entry-text">{props.region}</li>
            <li className="entry-text">{props.capital}:</li>
        </div>
    </article>
    </div>
    
  );
  
}