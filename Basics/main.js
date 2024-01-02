/*
Event Delegation:
It allows users to append a single event listener to a parent element
that adds it to all of its present and future descendants that match a selector
*/

const list_items = document.getElementById("list-items")
const btn = document.getElementById("btn")
const form = document.getElementById('todo_form')
const delete_btn = document.getElementById("delete")
const edit_btn = document.getElementById("edit")

btn.addEventListener('click', handleInput)
list_items.addEventListener('click',handle_delete_edit)


function handleInput(e){
    e.preventDefault()
    const todo_value = document.getElementById('todo').value
    if(todo_value.trim()){
        if(true){}
        //creating the elements
        let li = document.createElement("li")
        let text = document.createElement('p')
        let buttons_section = document.createElement('section')
        buttons_section.setAttribute("id",'buttons')
        text.innerText = todo_value
        let delete_button = document.createElement('button')
        delete_button.setAttribute('id','delete')
        delete_button.setAttribute('class','delete')
        delete_button.innerText = "Delete"
        let edit_button = document.createElement('button')
        edit_button.innerText = "Edit"
        edit_button.setAttribute('id','edit')
        edit_button.setAttribute('class','edit')

        //appending the elements
        buttons_section.append(edit_button)
        buttons_section.append(delete_button)
        li.append(text)
        li.append(buttons_section)
        list_items.append(li)

        form.reset()
    }
}

function handle_delete_edit(e){
    if(e.target.classList.contains('edit')){
        handleEdit(e.target)
    }
    else if(e.target.classList.contains('delete')){
        handleDelete(e.target)
    }
}

function handleDelete(element){
    let parent_element = element.parentElement.parentElement
    parent_element.remove()
}
function handleEdit(element){
    let parent_element = element.parentElement.parentElement.firstChild
    const todo = document.getElementById('todo')
    todo.value = parent_element.innerText
    let p  = document.createElement('p')
    p.innerText = todo.value
    parent_element.replaceWith(p)
}