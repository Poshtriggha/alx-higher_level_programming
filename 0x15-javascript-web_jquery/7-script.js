// 7-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to make an AJAX request to fetch character data
  $.ajax({
    url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      // Extract the character name from the response data
      var characterName = data.name;

      // Display the character name in the HTML tag DIV#character
      $('#character').text(characterName);
    },
    error: function (error) {
      console.error('Error fetching data:', error);
    }
  });
});
