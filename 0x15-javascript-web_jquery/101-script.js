// 101-script.js

// Wait for the DOM content to be fully loaded before manipulating it
$(document).ready(function () {
  // Function to add a new <li> element to the list
  $('#add_item').click(function () {
    // Create a new <li> element with the text "Item"
    var newItem = $('<li>').text('Item');

    // Append the new <li> element to the UL.my_list
    $('ul.my_list').append(newItem);
  });

  // Function to remove the last <li> element from the list
  $('#remove_item').click(function () {
    // Select the last <li> element and remove it from the list
    $('ul.my_list li:last-child').remove();
  });

  // Function to clear all <li> elements from the list
  $('#clear_list').click(function () {
    // Remove all <li> elements from the UL.my_list
    $('ul.my_list').empty();
  });
});
