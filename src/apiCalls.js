export let getMovieData = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Oops, something went wrong!");
      } else {
        return response.json();
      }
    }
  );
};

export let getMovieDetails = (id) => {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Oops, something went wrong!");
    } else {
      return response.json();
    }
  });
};
