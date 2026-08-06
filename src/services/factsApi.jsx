const PLANET_FACTS_KEY = import.meta.VITE_SS_KEY;

export async function getPlanetFacts(planetName) {
  const res = await fetch(
    
    // `https://api.le-systeme-solaire.net/rest/bodies/${planetName.toLowerCase()}`,
    // { headers: { Authorization: `Bearer ${PLANET_FACTS_KEY}` } }
    //calling the proxy server instead of the api directly to fix cors issue
    `http://localhost:5000/api/planet/${planetName.toLowerCase()}`
  );
  if (!res.ok) throw new Error(`Solar System request failed: ${res.status}`);
  return res.json();
}