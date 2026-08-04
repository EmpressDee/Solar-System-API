import {useState} from "react";
import { getPlanetFacts } from "../services/factsApi";
import  getImage  from "../services/imagesApi";

function SearchPlanet() {
    const [searchTerm, setSearchTerm] = useState("");
    const [facts, setFacts] = useState(null);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
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

// gets first image or null
const imageUrl = image?.collection?.items?.[0]?.links?.[0]?.href ?? null;

   return (
    <div className="planet-search">
<form onSubmit={handleSearch}>
        <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Search</button>
    </form>
    {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {facts && <h2>{facts.englishName}</h2>}

    </div>
    
    
    
   );


}

export default SearchPlanet;