# RandomQuotes-Javascript

RANDOM QUOTE GENERATOR

HTML Structure:

Created an HTML structure with a heading, a  container for the quote display, an input field, and buttons.

CSS Styling:
Set basic styling for the heading, quote text, input field, and buttons.
Created a container for the quote display using the .quote-display-container class, setting padding, border-radius, and positioning properties to center it on the page.
Added a background image to the body using the background-image property and set animation to create a sliding effect.
Used the @keyframes rule to define the animation for the background image sliding effect.
Centered the content vertically and horizontally on the page using flexbox properties on the <body> element.
Aligned the input field and buttons horizontally using flexbox properties on the .input-container and .btn-container classes.
Adjusted the font style, size, and color of the quote text using the .quote class.
Styled the buttons with background color, text color, padding, and hover effect.
Added a background wave effect using the .wave class.

JavaScript Functionality:
Created a JavaScript function to handle the random quote generation and display.
Stored an array of quotes in the JavaScript code.
Implemented the logic to randomly select a quote from the array and display it on the page.
Enabled the user to input their own quotes and store them in local storage.
Displayed a random quote when the page is loaded or refreshed.
Added event listeners to the buttons to trigger the random quote generation and saving user quotes.

Overall Functionality:
The web page displays a random quote each time the page is loaded or refreshed.
The user can input their own quotes, which are saved in the local storage.
The user can click a button to generate and display a random quote.
The design is visually appealing, with a centered layout, background image, and styling for the quote text, input field, and buttons.

During the development of the project, I encountered several challenges that required careful consideration and problem-solving. Here's a summary of the challenges I faced:

CSS Styling and Layout:
Aligning elements vertically and horizontally on the page: Initially, it was a challenge to center the elements both vertically and horizontally. I overcame this challenge by using flexbox properties on the <body> element to achieve the desired layout.
Background image positioning and animation: Achieving the sliding background image effect required adjusting the background-position and background-size properties in the CSS code.

User Input and Local Storage:
Implementing user input for quotes: Allowing users to input their own quotes and dynamically updating the quote display was a challenge. To overcome this, I captured user input using JavaScript and updated the quote array accordingly.
Storing quotes in local storage: Persisting user input quotes even when the page was refreshed or reopened required utilizing the browser's local storage to store and retrieve the quotes.

JavaScript Functionality:
Random quote generation: Implementing the logic to randomly select a quote from the array and display it on the page presented a challenge. I overcame this by utilizing JavaScript's Math.random() function and manipulating the DOM to update the quote text.
Handling button clicks and events: It was necessary to add event listeners to the buttons and trigger the appropriate actions when they were clicked. I resolved this by using JavaScript's addEventListener() method to listen for button clicks and execute the desired functions.

Overall Design and Usability:
Creating an appealing and user-friendly design: Ensuring the web page had an attractive design and an easy-to-use interface required careful consideration of the CSS styling, font selection, and button placement. I made multiple adjustments to the design to meet the desired visual and usability requirements.
