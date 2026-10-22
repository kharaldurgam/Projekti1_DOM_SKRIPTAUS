const todoList = document.getElementById('todo-list');
const input = document.getElementById('todo-input');
const submitBtn = document.querySelector('button[type="submit"]');
const filterBtns = document.querySelectorAll('.filter-btn');
const errormsg = document.getElementById('errormsg');

//function to add a new todo item to the list
function addTodo() {
    todoList.innerHTML += `
      <li class="todo-item">
        <div class="todo-item-content">
            <input type="checkbox" class="todo-checkbox">
            <span class="todo-text">${input.value}</span>
        </div>
        <button class="delete-btn" aria-label="Delete task">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </li>
    `;
}
//Dom
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim() !== '') {
        addTodo();
        input.value = ''; 
    
        if (errormsg) {
        }
        input.classList.remove('error');
    } else {
        alert("Please write something first!");
        if (errormsg) {
            errormsg.textContent = "Please write something first!";
            errormsg.style.color = "red";
        }
        input.classList.add('error');
    }
});

todoList.addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-btn');
    if (deleteBtn) {
        const todoItem = deleteBtn.closest('.todo-item');
        todoItem.remove();
    }
});

todoList.addEventListener('click', (e) => {
    const checkbox = e.target.closest('.todo-checkbox');
    if (checkbox) {
        const todoItem = checkbox.closest('.todo-item');
        todoItem.classList.toggle('completed', checkbox.checked);
    }
});

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
