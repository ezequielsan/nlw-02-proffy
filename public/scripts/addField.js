// Procurar o botão
const buttonAddTime = document.querySelector("#add-time");

// quando clicar no botão
buttonAddTime.addEventListener('click', cloneField);

// Executar uma ação (Duplicar os campos)
function cloneField() {
  // duplicando campo
  const newFieldContainer = document.querySelector(".schedule-item")
  .cloneNode(true);
  // pegando campo onde será colocado o campo duplicado
  const scheduleItems = document.querySelector("#schedule-items");

  // limpando campos
  const fields = newFieldContainer.querySelectorAll("input").forEach(field => field.value = "");

  // colocando o campo duplicado no html
  scheduleItems.append(newFieldContainer);
}


