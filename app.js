const collection = document.querySelector (".collection")
const formModal = document.querySelector(".form_modal") 
//const modalForm = document.querySelector(".modal_Form") 
const nimadir = document.querySelector(".irem")

function addClass(){
    collection.classList.toggle("show")
}
function showForm(){
    formModal.classList.toggle("show_form")
}
function addLeft() {
    nimadir.classList.toggle("shiw")
}