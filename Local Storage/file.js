let input = document.querySelector(".input");
let submit =  document.querySelector(".addButton");
let tasksDiv = document.querySelector(".tasks");

//empty array to store data
let arrayOfTasks = [];

//check tasks in local storage

if(localStorage.getItem("tasks")){
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

//triger data from local storage 
getDataFromLocalStorage();

// add task 
submit.onclick = function() {
    if(input.value !== ""){
        addTaskToArray(input.value);
        input.value = "";
    }
}

// click on task element 
tasksDiv.addEventListener("click" ,(e) =>{
    if(e.target.classList.contains("delete")){
        // remove element from page
        e.target.parentElement.remove();
        
    }
    if(e.target.classList.contains("tasks")){
        e.target.classList.toggle("done")
    }
});


function addTaskToArray(taskText){
    const task ={
        id: Date.now(),
        title : taskText,
        finish  : false,
    };

    //push tasks to array'
    arrayOfTasks.push(task);

    addElementsToPage(arrayOfTasks);

    //add task to local storage
    addDataToLocalStorageFrom(arrayOfTasks);

}

function addElementsToPage(arrayOfTasks){
    tasksDiv.innerHTML = "";
    //looping in array
    arrayOfTasks.forEach(task => {
        //create main div
        let span = document.createElement("span");
        span.className = "task-box";
        //check if task is done 
        if(task.completed){
            div.className = "finish"
        }
        span.setAttribute ("data-id" ,task.id);
        span.appendChild(document.createTextNode(task.title));
        
        // create delete button
        /////////////////////////////////////////////////////////////////////////////////// there is a bug here
        let span1 = document.createElement("span");
        span1.className= "delete";
        span1.appendChild(document.createTextNode("delete"));
        //append button to main div
        span.appendChild(span1);
//////////////////////////////////////////////////////////////////////////////////////////////// done doesn't work
        //create done button 
        let span2 = document.createElement("span");
        span2.className = "done";
        span2.appendChild(document.createTextNode("done"));
        span.appendChild(span2);

        //display task in div container
        tasksDiv.appendChild(span);
    });
}

function addDataToLocalStorageFrom(arrayOfTasks){
    window.localStorage.setItem("tasks" , JSON.stringify(arrayOfTasks));
}
function getDataFromLocalStorage(){
    let data = window.localStorage.getItem("tasks")
    if(data){
        let tasks = JSON.parse(data);
        addElementsToPage(tasks)
    } 
}