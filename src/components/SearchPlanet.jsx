import {useState} from "react";
import { getPlanetFacts } from "../services/factsApi";
import { getImage } from "../services/imagesApi";

function SearchPlanet() {
    const [searchTerm, setSearchTerm] = useState("");
    const [facts, setFacts] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);x
    const [error, setError] = useState(null);

    async function handleSearch(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const [factsData, imageData] = await Promise.all([
        getPlanetFacts(searchTerm),
        getImage(searchTerm),
      ]);

      setFacts(factsData);
      setImage(imageData);
    } catch (err) {
      setError("Unable to find that planet. Try search again");
    } finally { 
      setLoading(false);
    }
  }
}