let inputString = document.querySelector('#new-task');
let incompleteUL = document.querySelector('.items');
let completeUL = document.querySelector('.completeditems');
let form = document.querySelector('form');


function createNewLi(taskName){
  let newLi = document.createElement('li');
  let checkbox = document.createElement('input');
  let label = document.createElement('label');

  label.innerText = taskName;
  checkbox.type = 'checkbox';

  newLi.appendChild(checkbox);
  newLi.appendChild(label);

  return newLi;

}


function addTask(event){
  event.preventDefault();
  let newLi = createNewLi(inputString.value);
  incompleteUL.appendChild(newLi);
  inputString = "";
  conenctboxwithlabel(newLi, completetask);
}


function completetask(){
  let newLi = this.parentNode;
  let checkbox = newLi.querySelector('input[type = "checkbox"]');
  checkbox.remove();

  let deletebtn = document.createElement('button');
  deletebtn.className ='delete';
  deletebtn.innerText ='Delete';
  newLi.appendChild(deletebtn);
  completeUL.appendChild(newLi);

  connectbuttonwithlabel(newLi, deleteTask);
}


function conenctboxwithlabel(newLi, boxchecked){
  let checkbox = newLi.querySelector('input = [type="checkbox"]');
  checkbox.onchange = boxchecked;
}


function conenctboxwithlabel(newLi, butttonclicked){
  let button = newLi.querySelector('.delete');
  button.onclick = butttonclicked;
}



function deleteTask(){
  let newLi = this.parentNode;
  let uL = this.parentNode;
  uL.removeChild(newLi);
}





form.addEventListener('submit', addTask);



















// ends of js
