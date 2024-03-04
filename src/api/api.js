export const api = async (id) => {
   const resp = await fetch(`https://swapi.dev/api/people/${id}`);
   return await resp.json();
}