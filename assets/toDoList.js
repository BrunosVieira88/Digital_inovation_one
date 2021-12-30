const formulario = document.getElementById("formulario");
console.log(formulario);
const tarefas = document.getElementById("lista_tarefas");
console.log(tarefas);

formulario.onsubmit = function (e){
    e.preventDefault();
    let entrada = document.getElementById("tarefa");
    console.log(entrada.value);
    if(entrada.value == ""){
        alert("Voce nao digitou uma tarefa!");
    }else{
  
        addDiv(entrada.value);
        formulario.reset(); 
    }

};

function addDiv(description){
    const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

    
	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);
    newTask.setAttribute('class','esquerda');

    taskLabel.setAttribute('class','esquerda');
	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('tamanho');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	tarefas.appendChild(taskContainer);

}