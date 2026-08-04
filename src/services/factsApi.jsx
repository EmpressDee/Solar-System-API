const PLANET_FACTS_KEY = import.meta.VITE_SS_KEY;

export async function getPlanetFacts(planetName) {
  const res = await fetch(
    `https://api.le-systeme-solaire.net/rest/bodies/${planetName.toLowerCase()}`,
    { headers: { Authorization: `Bearer ${SOLAR_KEY}` } }
  );
  if (!res.ok) throw new Error(`Solar System request failed: ${res.status}`);
  return res.json();
}