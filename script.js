const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list"); 

form.addEventListener("submit" , function(e) {
    e.preventDefault();

    const taskText = input.Value.trimm()
    
    if (taskText === "") return

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("chage", () => {
        li.classList.toggle("done", checkbox.checked)
    }); 

    const span = document.createElement("span");
    span.textContent = taskText; 
    span.style.flex = "1"

    const deleteBtn = document.createElement("button"); 
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click",() => li.remove()); 

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li)
    input.value = "";

})