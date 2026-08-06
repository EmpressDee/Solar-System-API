import { useState } from "react";
import { getPlanetFacts } from "../services/factsApi";
import getImage from "../services/imagesApi";

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
      console.log(factsData);
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
      <form onSubmit={handleSearch} className="search-form">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a planet, moon, or galaxy"
          className="search-input"
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error">{error}</p>}

      {facts && (
        <div className="result-card">
          {imageUrl && (
            <img src={imageUrl} alt={searchTerm} className="planet-image" />
      )}

      <div>

    
        <div className="planet-facts"> 
        <h2>{facts.englishName}</h2>
    </div>
    </div>
    </div>

  )};
  </div>
)};

export default SearchPlanet;
