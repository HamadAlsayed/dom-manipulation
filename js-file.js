// Create a new variable and select the #container div
const container = document.querySelector('#container');

// Create an element of tag div 
const content = document.createElement('div');
// Add 'content' to the class list
content.classList.add('content')
// Give 'content' text
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
