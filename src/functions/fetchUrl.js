
const fetchDrinks = async function(url, searchTerm) {
  try {
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message, ' sorry something went wrong...')
  }
}


export default fetchDrinks;
