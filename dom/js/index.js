//@ts-check
"use strict";

/**
 * @typedef Task
 * @property {string} title
 * @property {boolean} [done]
 */

/**
 * @typedef State
 * @property {Task[]} tasks
 */

/**
 * @type {State}
 */
let state = {
    tasks: [
        {title: "Learn the DOM"},
        {title: "Buy Dr Stearns a Tesla Roadster"}
    ]
};

let storedJSON = localStorage.getItem("tasks");
let storedTasks = JSON.parse(storedJSON);
state.tasks = storedTasks || state.tasks;

/**
 * Renders a single task as an <li>
 * @param {Task} task 
 * @returns {HTMLElement}
 */
function renderTask(task) {
    //TODO: create a new <li> for the task,
    //populate it, add a click event listener,
    //and return it
    let li = document.createElement("li");
    li.textContent = task.title;
    li.classList.add("clickable");
    if (task.done) {
        li.classList.add("done");
    }
    li.addEventListener("click", function() {
        task.done = !task.done;
        li.classList.toggle("done");
        saveTasks(state);
    });
    return li;
}

/**
 * Renders the application state to the page
 * @param {State} state 
 */
function render(state) {
    //TODO: clear the #tasks-ul element
    //and render each task, appending the
    //returned <li> to the <ul>
    let ul = document.querySelector("#tasks-ul");
    ul.textContent = "";
    for (let i = 0; i < state.tasks.length; i++) {
        ul.appendChild(renderTask(state.tasks[i]));
    }
}

function saveTasks(state) {
    let tasksJSON = JSON.stringify(state.tasks);
    localStorage.setItem("tasks", tasksJSON);    
}

//do an initial rendering
render(state);

//TODO: add event listener for the new task form 
//submit event that adds new tasks to the list
document.querySelector(".new-task-form")
    .addEventListener("submit", function(evt) {
        evt.preventDefault();
        let titleInput = this.querySelector("input");
        let title = titleInput.value;
        let task = {title: title};
        state.tasks.push(task);
        saveTasks(state);
        render(state);
        titleInput.value = "";
    });

//TODO: add event listener for the purge completed
//button click event that purges completed tasks
//from the list
document.querySelector(".purge-button")
    .addEventListener("click", function() {
        state.tasks = state.tasks.filter(function(task) {
            return !task.done;
        });
        saveTasks(state);
        render(state);
    });
