// 8-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to make an AJAX request to fetch movies data
  $.ajax({
    url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      // Select the HTML tag UL#list_movies
      var listMovies = $('#list_movies');

      // Loop through each movie and append its title to the list
      data.results.forEach(function (movie) {
        listMovies.append('<li>' + movie.title + '</li>');
      });
    },
    error: function (error) {
      console.error('Error fetching data:', error);
    }
  });
});
