const addBtn = document.querySelector(".btn-add");
const editBtn = document.querySelector(".btn-edit");
const deleteBtn = document.querySelector(".btn-delete");
const inputValue= document.querySelector("input");

addBtn.addEventListener("click", addTodo);

function addTodo(e){
    e.preventDefault();
    if (inputValue.value !== "") {
        let cover = document.createElement("div");
        let para = document.createElement("p");
        let actionDiv = document.createElement("div");
        let edit = document.createElement("button");
        let del = document.createElement("button");
        
        para.textContent = inputValue.value;
        edit.textContent = "Edit Todo";
        del.textContent = "Delete Todo"
        
        cover.classList.add("cover")
        actionDiv.classList.add("actions")
        del.classList.add("btn");
        del.classList.add("btn-delete");
        edit.classList.add("btn", "btn-edit");
        
        cover.appendChild(para);
        cover.appendChild(actionDiv);
        actionDiv.appendChild(edit);
        actionDiv.appendChild(del);
        document.querySelector(".output").appendChild(cover);

        del.addEventListener("click", () => {
            if (confirm("are you sure you want to delete this todo")) {
                del.parentElement.parentElement.remove();

                let msg = document.createElement("div");
                msg.textContent = "Todo removed successfully";
                msg.classList.add("msg", "suc")

                document.querySelector(".err").appendChild(msg)

                setTimeout(() => msg.remove(), 3000);
            }
            else{
                let msg = document.createElement("div");
                msg.textContent = "Todo not removed";
                msg.classList.add("msg", "suc")

                document.querySelector(".err").appendChild(msg)

                setTimeout(() => msg.remove(), 3000);
            }
        })

        edit.addEventListener("click", () => {
            para.textContent = prompt("update todo");
        })
        inputValue.value = ""
    }
    else{
        let msg = document.createElement("div");
        msg.textContent = "Enter A Todo";
        msg.classList.add("msg", "error")

        document.querySelector(".err").appendChild(msg)

       setTimeout(() => msg.remove(), 3000);
    }
    
}
