const boardCard = document.querySelector('main');
const card = document.getElementsByClassName('card');
const btnAddTarefa = document.getElementById('addTarefa');
const tarefa = document.querySelector('#textoTarefa');


function addTarefa() {
    const textoTarefa = tarefa.value;
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `<div class="card-body">
                            <p>${textoTarefa}</p>
                            <button class="btn btn-success finalizar">Finalizar Tarefa</button>
                        </div>`;
    boardCard.appendChild(cardDiv);

    addEventFinalizarTarefa();
};

function addEventFinalizarTarefa() {
    const ListaDeBotoesFinalizar = document.querySelectorAll(".finalizar");

    ListaDeBotoesFinalizar.forEach(botao => {
        botao.onclick = (event) => {
            const cardAvo = event.target.parentNode.parentNode;
            cardAvo.remove();
        }
    })
}

btnAddTarefa.addEventListener("click", addTarefa);

//Desafio para a próxima aula: criar mais um card ao pressionar Enter
tarefa.addEventListener('keypress', function () {
    if (event.key == 'Enter') {
        addTarefa();
    }
})