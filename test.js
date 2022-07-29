async function fetchMoviesJSON() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const movies = await response.json();
  console.log(movies);
}

fetchMoviesJSON();
