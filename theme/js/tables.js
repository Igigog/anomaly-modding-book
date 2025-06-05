function openTable(evt, tableId) {
  // Скрыть все таблицы
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  // Убрать активный класс у всех кнопок
  const tabButtons = document.getElementsByClassName("tab-button");
  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }
  // Показать выбранную таблицу и сделать кнопку активной
  document.getElementById(tableId).style.display = "block";
  evt.currentTarget.className += " active";
}