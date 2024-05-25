document.addEventListener('DOMContentLoaded', function() {
    const taskTable = document.getElementById('taskTable');
    const addTaskForm = document.getElementById('addTaskForm');
    const getTaskForm = document.getElementById('getTaskForm');

    // Função para carregar e exibir as tarefas
    function loadTasks() {
        fetch('http://localhost:8080/api/tarefas')
            .then(response => response.json())
            .then(tasks => {
                taskTable.innerHTML = '<thead><tr><th>ID</th><th>Descrição</th><th>Concluída</th><th>Editar</th><th>Deletar</th><th>Atualizar Status</th></tr></thead><tbody></tbody>';
                tasks.forEach(task => {
                    const row = taskTable.insertRow();
                    row.innerHTML = `
                        <td>${task.id}</td>
                        <td><input type="text" value="${task.descricao}" id="description-${task.id}" readonly></td>
                        <td>${task.concluida ? 'Sim' : 'Não'}</td>
                        <td><button onclick="editTask(${task.id})">Editar</button></td>
                        <td><button onclick="deleteTask(${task.id})">Deletar</button></td>
                        <td><button onclick="updateTaskStatus(${task.id}, ${task.concluida})">${task.concluida ? 'Marcar como Não Concluída' : 'Marcar como Concluída'}</button></td>
                    `;
                });
            })
            .catch(error => console.error('Erro ao carregar tarefas:', error));
    }

    // Função para buscar tarefa por ID
    window.getTask = function(id) {
        fetch(`http://localhost:8080/api/tarefas/${id}`)
            .then(response => response.json())
            .then(task => {
                alert(`Tarefa selecionada: ID ${task.id}, Descrição: ${task.descricao}, Concluída: ${task.concluida ? 'Sim' : 'Não'}`);
            })
            .catch(error => console.error('Erro ao buscar tarefa por ID:', error));
    };

    // Função para deletar tarefa por ID
    window.deleteTask = function(id) {
        fetch(`http://localhost:8080/api/tarefas/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao deletar tarefa');
            }
            return response.json();
        })
        .then(() => {
            alert('Tarefa deletada com sucesso');
            loadTasks(); // Recarregar as tarefas após deletar
        })
        .catch(error => console.error('Erro ao deletar tarefa:', error));
    };

    // Função para editar tarefa
    window.editTask = function(id) {
        const descriptionField = document.getElementById(`description-${id}`);
        descriptionField.removeAttribute('readonly');
        descriptionField.focus();
        descriptionField.addEventListener('blur', function() {
            const updatedDescription = descriptionField.value;
            const data = { descricao: updatedDescription };

            fetch(`http://localhost:8080/api/tarefas/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao editar tarefa');
                }
                return response.json();
            })
            .then(() => {
                alert('Tarefa editada com sucesso');
                descriptionField.setAttribute('readonly', true);
                loadTasks(); // Recarregar as tarefas após editar
            })
            .catch(error => console.error('Erro ao editar tarefa:', error));
        });
    };

    // Função para atualizar status da tarefa
    window.updateTaskStatus = function(id, concluida) {
    const updatedStatus = !concluida;
    const data = { concluida: updatedStatus };

    fetch(`http://localhost:8080/api/tarefas/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao atualizar status da tarefa');
        }
        return response.json();
    })
    .then(() => {
        alert(`Status da tarefa atualizado com sucesso para ${updatedStatus ? 'Concluída' : 'Não Concluída'}`);
        loadTasks(); // Recarregar as tarefas após atualizar o status
    })
    .catch(error => console.error('Erro ao atualizar status da tarefa:', error));
};
    // Evento de envio do formulário para adicionar uma nova tarefa
    addTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const description = document.getElementById('description').value;
        const data = { descricao: description, concluida: false };

        fetch('http://localhost:8080/api/tarefas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao adicionar tarefa');
            }
            return response.json();
        })
        .then(() => {
            alert('Tarefa adicionada com sucesso');
            loadTasks(); // Recarregar as tarefas após adicionar uma nova
        })
        .catch(error => console.error('Erro ao adicionar tarefa:', error));
    });

    // Carregar as tarefas ao iniciar a página
    loadTasks();
});
