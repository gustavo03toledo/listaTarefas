// Obtém referências para os elementos HTML
var textInput = document.getElementById("task_name");
var addButton = document.getElementById("add_button");
var list = document.getElementById("list");

// Adiciona evento de clique ao botão de adicionar
addButton.addEventListener("click", addNewTask);

// Adiciona evento de pressionar Enter no campo de texto
textInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addNewTask();
    }
});

function addNewTask() {
    var text = textInput.value.trim(); // Remove espaços em branco no início e no fim

    if (text.length === 0) {
        alert('A tarefa deve ter um ou mais caracteres');
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    const textElement = document.createTextNode(text);

    // Cria um checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    // Adiciona um ouvinte de evento para marcar/desmarcar o item
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(textElement);
    list.appendChild(listItem);

    // Limpa a caixa de texto
    textInput.value = "";
}