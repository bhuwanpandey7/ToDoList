(() => {
    let firstLoad = true;

    // new task input box
    const newTaskInput = document.querySelector('#newTask');

    // add new task button
    const btnAddTask = document.querySelector('.btnAddTask');

    // addedTasks list box
    const addedTasks = document.querySelector('.addedTasks');
    addedTasks.innerHTML = NoTaskAdded;

    // btn Clear Tasks
    const btnClearTasks = document.querySelector('.btnClearTasks');

    // event listener to add new task
    btnAddTask.addEventListener('click', addTask);

    // add event listener to clear all tasks 
    btnClearTasks.addEventListener('click', clearTasks);

    // add event listener to remove individual task

    addedTasks.addEventListener('click', removeTask);

    // clear individual task event listener
    function removeTask(event) {
        if (event.target.parentElement.classList.contains('deleteTask')) {
            if (confirm('Are you sure you want ot remove this task?')) {
                event.target.parentElement.parentElement.remove();
            } else {
                return;
            }
        }
    }

    // clear all tasks event listener
    function clearTasks() {
        while (addedTasks.firstChild) {
            addedTasks.firstChild.remove();
        }
        addedTasks.className = 'noTask';
    }

    // add task event listener
    function addTask() {
        if (addedTasks.children.length === 1 && firstLoad) {
            addedTasks.firstChild.remove();
            firstLoad = false;
        }
        if (newTaskInput.value) {
            const liElem = document.createElement('li');
            liElem.appendChild(document.createTextNode(newTaskInput.value));
            const delLink = document.createElement('a');
            delLink.classList.add('deleteTask');
            delLink.innerHTML = '<i class="fa fa-trash-o float-right ml-8 text-danger"> </i>';
            liElem.appendChild(delLink);
            const hr = document.createElement('hr');
            liElem.appendChild(hr);
            addedTasks.appendChild(liElem);
            newTaskInput.value = '';
        } else {
            alert('Enter valid task name');
        }
    }
})();