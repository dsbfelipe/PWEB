// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addCategoryBtn = document.getElementById('add-category-btn');
    const categoryPopup = document.getElementById('category-popup');
    const cancelCategoryBtn = document.getElementById('cancel-category-btn');
    const saveCategoryBtn = document.getElementById('save-category-btn');

    const addTaskBtn = document.getElementById('add-task-btn');
    const taskPopup = document.getElementById('task-popup');
    const cancelTaskBtn = document.getElementById('cancel-task-btn');
    const saveTaskBtn = document.getElementById('save-task-btn');

    const categoryList = document.getElementById('category-list');
    const categoryTitle = document.getElementById('category-title');
    const categoryDescription = document.getElementById('category-description');
    const editCategoryBtn = document.getElementById('edit-category-btn');
    const deleteCategoryBtn = document.getElementById('delete-category-btn');
    const taskList = document.getElementById('task-list');

    let categories = JSON.parse(localStorage.getItem('categories')) || [];
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let selectedCategoryId = null;

    function openPopup(popup) {
        popup.style.display = 'block';
    }

    function closePopup(popup) {
        popup.style.display = 'none';
    }

    function resetCategoryPopup() {
        document.getElementById('category-emoji').value = '';
        document.getElementById('category-name').value = '';
        document.getElementById('category-description-input').value = '';
    }

    function resetTaskPopup() {
        document.getElementById('task-name').value = '';
        document.getElementById('task-description').value = '';
        document.getElementById('task-deadline').value = '';
        document.getElementById('task-important').checked = false;
    }

    addCategoryBtn.addEventListener('click', () => {
        resetCategoryPopup();
        openPopup(categoryPopup);
        saveCategoryBtn.dataset.action = 'create';
    });

    cancelCategoryBtn.addEventListener('click', () => closePopup(categoryPopup));
    cancelTaskBtn.addEventListener('click', () => closePopup(taskPopup));

    saveCategoryBtn.addEventListener('click', () => {
        const emoji = document.getElementById('category-emoji').value;
        const name = document.getElementById('category-name').value;
        const description = document.getElementById('category-description-input').value;
        const action = saveCategoryBtn.dataset.action;

        if (emoji && name && description) {
            if (action === 'create') {
                const newCategory = {
                    id: Date.now().toString(),
                    emoji,
                    name,
                    description
                };
                categories.push(newCategory);
            } else if (action === 'edit') {
                const categoryId = saveCategoryBtn.dataset.categoryId;
                const category = categories.find(cat => cat.id === categoryId);
                if (category) {
                    category.emoji = emoji;
                    category.name = name;
                    category.description = description;
                }
            }
            saveDataToLocalStorage();
            renderCategories();
            closePopup(categoryPopup);
        }
    });

    saveTaskBtn.addEventListener('click', () => {
        const name = document.getElementById('task-name').value;
        const description = document.getElementById('task-description').value;
        const deadline = document.getElementById('task-deadline').value;
        const important = document.getElementById('task-important').checked;
        const action = saveTaskBtn.dataset.action;

        if (name && deadline) {
            if (action === 'create') {
                const newTask = {
                    id: Date.now().toString(),
                    categoryId: selectedCategoryId,
                    name,
                    description,
                    deadline,
                    important
                };
                tasks.push(newTask);
            } else if (action === 'edit') {
                const taskId = saveTaskBtn.dataset.taskId;
                const task = tasks.find(tsk => tsk.id === taskId);
                if (task) {
                    task.name = name;
                    task.description = description;
                    task.deadline = deadline;
                    task.important = important;
                }
            }
            saveDataToLocalStorage();
            renderTasks(selectedCategoryId);
            closePopup(taskPopup);
        }
    });

    function renderCategories() {
        categoryList.innerHTML = '';
        categories.forEach(category => {
            const li = document.createElement('li');
            li.textContent = `${category.emoji} ${category.name}`;
            li.addEventListener('click', () => selectCategory(category.id));
            categoryList.appendChild(li);
        });
    }

    function selectCategory(id) {
        selectedCategoryId = id;
        const category = categories.find(cat => cat.id === id);
        if (category) {
            categoryTitle.textContent = category.name;
            categoryDescription.textContent = category.description;
            editCategoryBtn.style.display = 'inline-block';
            deleteCategoryBtn.style.display = 'inline-block';
            renderTasks(id);
        }
    }

    editCategoryBtn.addEventListener('click', () => {
        const category = categories.find(cat => cat.id === selectedCategoryId);
        if (category) {
            document.getElementById('category-emoji').value = category.emoji;
            document.getElementById('category-name').value = category.name;
            document.getElementById('category-description-input').value = category.description;
            openPopup(categoryPopup);
            saveCategoryBtn.dataset.action = 'edit';
            saveCategoryBtn.dataset.categoryId = selectedCategoryId;
        }
    });

    deleteCategoryBtn.addEventListener('click', () => {
        categories = categories.filter(cat => cat.id !== selectedCategoryId);
        tasks = tasks.filter(task => task.categoryId !== selectedCategoryId);
        selectedCategoryId = null;
        categoryTitle.textContent = 'Selecione uma Categoria';
        categoryDescription.textContent = '';
        editCategoryBtn.style.display = 'none';
        deleteCategoryBtn.style.display = 'none';
        saveDataToLocalStorage();
        renderCategories();
        renderTasks(null);
    });

    function renderTasks(categoryId) {
        taskList.innerHTML = '';
        if (!categoryId) return;
    
        const categoryTasks = tasks.filter(task => task.categoryId === categoryId);
        categoryTasks.forEach(task => {
            const li = document.createElement('li');
            const taskContent = document.createElement('div');
            const taskActions = document.createElement('div');
    
            li.className = 'task-item';
            taskContent.className = 'task-content';
            taskActions.className = 'task-actions';
    
            taskContent.innerHTML = `
                <input type="checkbox">
                <div class="task-details">
                    <div class="task-title">
                        <strong>${task.name}</strong>
                        ${task.important ? '<span class="important-tag">Importante</span>' : ''}
                    </div>
                    <div>${"Data limite: " + task.deadline}</div>
                </div>
            `;
    
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', () => {
                document.getElementById('task-name').value = task.name;
                document.getElementById('task-description').value = task.description;
                document.getElementById('task-deadline').value = task.deadline;
                document.getElementById('task-important').checked = task.important;
                openPopup(taskPopup);
                saveTaskBtn.dataset.action = 'edit';
                saveTaskBtn.dataset.taskId = task.id;
            });
    
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.addEventListener('click', () => {
                tasks = tasks.filter(tsk => tsk.id !== task.id);
                saveDataToLocalStorage();
                renderTasks(categoryId);
            });
    
            taskActions.appendChild(editButton);
            taskActions.appendChild(deleteButton);
    
            li.appendChild(taskContent);
            li.appendChild(taskActions);
            taskList.appendChild(li);
        });
    }

    function saveDataToLocalStorage() {
        localStorage.setItem('categories', JSON.stringify(categories));
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addTaskBtn.addEventListener('click', () => {
        if (selectedCategoryId) {
            resetTaskPopup();
            openPopup(taskPopup);
            saveTaskBtn.dataset.action = 'create';
        } else {
            alert('Selecione uma categoria primeiro.');
        }
    });

    renderCategories();
    if (categories.length > 0) {
        selectCategory(categories[0].id);
    }
});
