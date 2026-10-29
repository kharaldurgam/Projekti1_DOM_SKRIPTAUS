# Todo List App

A simple and user-friendly to-do list application created with HTML, CSS, and JavaScript. The app allows users to add tasks, mark them as done, delete them, and keep their to-do list. 
## Project Overview

This project was built to practice JavaScript and DOM manipulation. The goal was to create a functional to-do app with a clear interface, user input validation.

## Features

- Add new tasks
- Mark tasks as completed with a checkbox
- Remove tasks from the list
- View how many tasks remain unfinished
- Clean and simple user interface

## Tech Stack
- HTML
- CSS
- JavaScript

## Project Goals
- Build a working to-do application
- Practice JavaScript logic and DOM element handling
- Learn how to validate user input
- Create a simple and easy-to-use interface

## Development Plan

1. Create the HTML structure
2. Design the layout with CSS
3. Implement adding tasks
4. Add input validation
5. Test the application
6. Publish the project on GitHub Pages

## How It Works
The app includes:
- An input field for entering a new task
- An add button
- A list of tasks
- A checkbox for marking tasks as completed
- A delete button for removing tasks


## Usage
1. Open the app in a browser.
2. Type a task in the input field.
3. Click the add button.
4. Mark tasks as completed with the checkbox.
5. Delete tasks when they are no longer needed.

## Project Structure
```text

Projekti1_DOM_SKRIPTAUS/
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
```
#Linkit
Github-repositorio: https://github.com/kharaldurgam/Projekti1_DOM_SKRIPTAUS

Julkaistu sovellus: https://kharaldurgam.github.io/Projekti1_DOM_SKRIPTAUS/

Tekoälyä käytetään suodatintoiminnon toteuttamiseen.
```text
// Filter buttons 
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        const items = todoList.querySelectorAll('.todo-item');

        items.forEach(item => {
            const isCompleted = item.classList.contains('completed');
            if (filter === 'all') {
                item.style.display = 'flex';
            } else if (filter === 'active') {
                item.style.display = isCompleted ? 'none' : 'flex';
            } else if (filter === 'completed') {
                item.style.display = isCompleted ? 'flex' : 'none';
            }
        });
    });
});
```
