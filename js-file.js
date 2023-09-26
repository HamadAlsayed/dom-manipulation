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

const newDiv = document.createElement('div')
newDiv.style.border = '3px solid black'
newDiv.style.backgroundColor = 'pink'
container.appendChild(newDiv)

const header1 = document.createElement('h1')
header1.textContent = 'I\'m in a div'

const para2 = document.createElement('p')
para2.textContent = 'ME TOO!'

newDiv.appendChild(header1)
newDiv.appendChild(para2)

container.appendChild(newDiv)

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})