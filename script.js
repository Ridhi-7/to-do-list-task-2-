function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button class="delete">Delete</button>
    `;

    li.querySelector("span").addEventListener("click", function(){
        this.classList.toggle("completed");
    });

    li.querySelector(".delete").addEventListener("click", function(){
        li.remove();
    });

    document.getElementById("taskList").appendChild(li);

    input.value="";
}