// Create a new variable and select the #container div
const container = document.querySelector('#container');

// Create an element of tag div 
const content = document.createElement('div');
// Add 'content' to the class list
content.classList.add('content');
// Give 'content' text
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I\'m red!';
container.appendChild(para);

const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = 'I\'m blue h3!';
container.appendChild(header3);