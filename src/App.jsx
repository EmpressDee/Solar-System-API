import react from "react"
import "./App.css";
import getImage from "./services/imagesApi"
import SearchPlanet from "./components/SearchPlanet"




export default function App() {
  return (
    <>
    <h1>Solar System Search</h1>
    <SearchPlanet />
    </>
  ) 
}

