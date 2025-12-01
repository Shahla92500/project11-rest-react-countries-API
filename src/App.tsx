
import Header from "./components/Header"
// import CountryCard from "./pages/CountryCard"
import data, {type Country} from "./types/data"
import CountryDetail from "./pages/CountryDetail"
import CountriesList from "./pages/CountriesList"
// import CountryList from "./pages/CountryList"
import './App.css'

export default function App() {

  // const countryElements = data.map((element: Country)=> {
  //   return (
  //     <>
  //     <CountryCard
  //       key={element.name}
  //       img ={element.flags.png ?? element.flags ?? ""}
  //       name={element.name}
  //       region={element.region}
  //       population={element.population}
  //       capital={element.capital}
  //     />
  //     </>
  //   )
  // })
//====

//   const Belgium: Country | undefined = data.find(
//     (country) => country.name === "Belgium"
//   );

//   if (!Belgium) {
//     // safety fallback in case the name changes
//     return (
//       <>
//         <Header />
//         <main className="mainContainer">
//           <p>Country not found.</p>
//         </main>
//       </>
//     );
//   }

// //=======
  return (
    <>
      <Header/>
     {/* later navbar(search bar + filter) go here */}
      <main className="mainContainer"> 
        {/* <section className="countries-grid">{countryElements}</section> */}
                {/* <CountryDetail country={Belgium} /> */}
        <CountriesList />
      </main>
    </>
  )
}



