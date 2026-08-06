


export default async function getImage (searchTerm) {

  try {
    const res = await fetch(
      `https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`
    );

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch planet image:", err.message);
    throw err; 
  }
}
   
