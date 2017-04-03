# About Me


## Javascript
There were a few design decisions I agonized before getting this up and running. The primary one was what Javascript I could implement in a meaningful period of time, to which I settled for a bit of DOM manipulation. Using the Date object, paired with `.getMonth`, `.getDate`, and `.getFullYear`, and converted them to a string using `.toString`. Following that, the resulting string is inserted into the document via `.textContent`. I had originally wanted to use `.innerHTML`, however the MDN detailed that it leaves a vulnerability to cross site scripting attacks. While I don't forsee any attacks happening any time in the future, security should always be prioritized. The end result is the date the user accessed the site displayed in the footer.

## CSS
Within the CSS, fonts used are Abel for anchors, Cinzel for headers, and Times New Roman for general content. I'm personally rethinking Abel however, as I'm not keen on the appearance of a sans-serif font next to a serif one. The background is a 2.3 kb tiling pattern, courtesy of Subtle Patterns.

## HTML
With my HTML, there's nothing particularly fancy to be found here. The ```<main>``` contains three divs, each with an ID identifying their content. The anchors on the ```<nav>``` could be used to auto scroll to these, but there isn't enough content at this time for such a feature to be visibly useful. The most time consuming part of this assignment was on writing up content to fill out the webpage, as I actually had the HTML, CSS, and Javascript finished some time before the content.
