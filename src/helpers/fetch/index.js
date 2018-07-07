export const fetchStarWarsData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const info = await response.json();
      return info;
    } 
  } catch ( error ) {
    throw new Error(`${error.message}`);
  }
};
