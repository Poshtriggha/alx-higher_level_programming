// 5-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Use jQuery to handle click event on the DIV#add_item
  $('#add_item').click(function () {
    // Create a new <li> element with the text "Item"
    var newItem = $('<li>').text('Item');

    // Append the new <li> element to the UL.my_list
    $('ul.my_list').append(newItem);
  });
});
