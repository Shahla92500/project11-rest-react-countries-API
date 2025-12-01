
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom";

import CountryDetail from "./pages/CountryDetail"
import CountriesList from "./pages/CountriesList"

import './App.css'

export default function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </>
  )
}



