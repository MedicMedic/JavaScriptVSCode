// task.js

function addTask() 
{
    const newTaskInput = document.getElementById('new-task');
    const tasksContainer = document.getElementById('tasks');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') 
    {
        const taskItem = document.createElement('div');

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;
        taskItem.appendChild(taskTextElement);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () 
        {
            const updatedTaskText = prompt('Edit task:', taskTextElement.textContent);
            if (updatedTaskText !== null) 
            {
                taskTextElement.textContent = updatedTaskText;
            }
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function () 
        {
            tasksContainer.removeChild(taskItem);
        };

        taskItem.appendChild(editButton);
        taskItem.appendChild(removeButton);
        tasksContainer.appendChild(taskItem);
        newTaskInput.value = '';
    }
}


function randomizeTask() 
{
    const tasksContainer = document.getElementById('tasks');
    const taskItems = Array.from(tasksContainer.children);

    const taskTexts = taskItems.map(item => item.textContent.replace('Edit', '').replace('Remove', '').trim());

    if (taskTexts.length > 0) 
    {
        const randomIndex = Math.floor(Math.random() * taskTexts.length);
        alert('Random Task: ' + taskTexts[randomIndex]);
    } 
    else 
    {
        alert('No tasks to randomize. Add some tasks first!');
    }
}
