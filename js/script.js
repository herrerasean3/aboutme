//Stores the user's current day, month, and year when the site is loaded. convertDate merges the three different date variables into a single variable. displayDate then changes convertDate over to a string for neater insertion into a webpage.
var currentDate = new Date(), m = (currentDate.getMonth() + 1), d = currentDate.getDate(), y = currentDate.getFullYear(), convertDate = m + ' - ' + d + ' - ' + y, displayDate = convertDate.toString();


//Inserts the date string into the footer via the DOM. Uses textContent instead of innerHTML, as the MDN mentions the potential for cross site scripting attacks occuring with innerHTML.
document.getElementById('date').textContent = displayDate;