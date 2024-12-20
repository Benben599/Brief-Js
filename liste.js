let taskList = document.getElementById("taskList");

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value

    if (taskText === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    // Bouton Modifier
    let editButton = document.createElement("button");
    editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"></ion-icon>';
    editButton.onclick = function () {
        editTask(li);
    };

    // Bouton Supprimer
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
    deleteButton.onclick = function () {
        deleteTask(li);
    };

    // Ajouter les boutons à l'élément <li>
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // Ajouter la tâche à la liste
    taskList.appendChild(li);

    // Réinitialiser le champ de saisie
    taskInput.value = "";
}

function editTask(task) {
    let taskTextElement = task.firstChild; // Premier nœud enfant, correspondant au texte
    let taskText = taskTextElement.textContent;

    // Demander un nouveau texte à l'utilisateur
    let newTaskText = prompt("Modifier la tâche :", taskText);

    if (newTaskText === null || newTaskText.trim() === "") {
        return; // Ne rien faire si Annuler est cliqué ou si aucun texte valide n'est entré
    }

    taskTextElement.textContent = newTaskText.trim(); // Mise à jour du texte avec trim()
}

function deleteTask(task) {
    taskList.removeChild(task);
}
