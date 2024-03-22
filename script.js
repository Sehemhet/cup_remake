// Красный цвет поля брака в ОТЧЕТАХ
document.addEventListener("DOMContentLoaded", function() {
    var items = document.querySelectorAll('#id_report_post .id_report_post_item');
    items.forEach(function(item) {
        var actionText = item.querySelector('.id_report_post_item_action').textContent.trim(); // Получаем текстовое содержимое элемента и удаляем пробелы по краям
        if (actionText === 'Брак') { // Проверяем текстовое содержимое на совпадение с "Брак"
            item.style.color = 'var(--c6)'; // Применяем стиль к элементу
        }
    });
});


// Функция для скрытия всех элементов списка ОТЧЕТА
function hideAllItems(listId) {
    let listItems = document.querySelectorAll(`#${listId} .id_report_post_item`);
    listItems.forEach(item => {
        item.style.display = 'none';
    });
}

// Функция для поиска значений в полях и сравнения с введенным текстом ОТЧЕТА
function searchValue(inputId, fieldClass, listId) {
    let searchText = document.getElementById(inputId).value.trim().toLowerCase(); // Получение введенного текста и приведение его к нижнему регистру
    console.log('Поисковый запрос:', searchText); // Вывод запроса в консоль
    hideAllItems(listId); // Скрыть все элементы списка перед началом поиска

    let items = document.querySelectorAll(`#${listId} .${fieldClass}`); // Выбор всех элементов, с которыми будем сравнивать
    items.forEach(item => { // Перебор всех элементов для сравнения
        let fieldValue = item.textContent.trim().toLowerCase(); // Получение текстового содержимого элемента и приведение его к нижнему регистру
        let listItem = item.closest('.id_report_post_item'); // Находим родительский элемент li для текущего элемента

        if (fieldValue.includes(searchText)) { // Проверка на совпадение текста
            console.log('Совпадение найдено:', fieldValue); // Вывод совпадения в консоль
            listItem.style.display = 'flex'; // Показать элемент списка
        }
    });
}


//универсальная функци поиска по списку
function liveSearch(elementId, searchText) {
    let input = searchText.toUpperCase();
    let listItems = document.querySelectorAll(`#${elementId} .list_item`);

    listItems.forEach(item => {
        let textValue = item.innerText || item.textContent; // Поменял местами
        let shouldBeVisible = textValue.toUpperCase().includes(input);

        if (shouldBeVisible) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}



//if < 2000 * == red

function redCount() {
    // Выбираем все элементы, которые могут содержать числовое значение
    var allItems = document.querySelectorAll('.list_stock *');

    // Перебираем каждый элемент на странице
    allItems.forEach(function(item) {
        // Получаем текстовое содержимое элемента
        var textContent = item.textContent.trim();
        // Проверяем, является ли содержимое числом и меньше ли оно 2000
        if (!isNaN(textContent) && parseInt(textContent) < 2000) {
            // Если условие выполняется, применяем красный цвет
            item.style.color = 'red';
        }
    });
}

// Вызываем функцию после загрузки страницы для первичной настройки стилей
document.addEventListener('DOMContentLoaded', redCount);


// переключатель табов
document.addEventListener("DOMContentLoaded", function() {
    // Показать первый таб при загрузке страницы
    showTab('tab_1');

    // Получить первую кнопку и добавить класс btn_tab_active
    var firstButton = document.querySelector('.btn_tab');
    if (firstButton) {
        firstButton.classList.add('btn_tab_active');
    }
});


function showTab(tabId, button) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tabs__block');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');

    // Убрать класс у всех кнопок
    var buttons = document.querySelectorAll('.btn_tab');
    buttons.forEach(function(btn) {
        btn.classList.remove('btn_tab_active');
    });

    // Добавить класс активной кнопке
    if (button) {
        button.classList.add('btn_tab_active');
    }
}

//функция отображения реального времени
document.addEventListener('DOMContentLoaded', function() {
    // Функция для обновления даты и времени
    function updateDateTime() {
        // Получаем текущую дату и время
        var currentDateTime = new Date();

        // Форматируем дату и время по вашим предпочтениям
        var formattedDateTime = currentDateTime.toLocaleString(); // Например, "01/29/2024, 10:30:00 AM"

        // Обновляем содержимое тега <h6> с отформатированной датой и временем
        document.getElementById('currentDateTime').textContent = formattedDateTime;
    }

    // Обновляем дату и время при загрузке страницы
    updateDateTime();

    // Затем устанавливаем интервал для обновления даты и времени каждую секунду (или другой период)
    setInterval(updateDateTime, 1000); // Обновляем каждую секунду
});


window.addEventListener('DOMContentLoaded', function () {
    alignWidths('id_report_filter_tiem');
    alignWidths('id_report_post_column');
});

function alignWidths(className) {
    var items = document.querySelectorAll('.' + className);
    var maxWidth = 0;

    items.forEach(function (item) {
        var itemWidth = item.getBoundingClientRect().width;
        maxWidth = Math.max(maxWidth, itemWidth);
    });

    items.forEach(function (item) {
        item.style.width = maxWidth + 'px';
    });
}



function addNumber(fieldName, counterName) {
    // Получаем значение поля
    var fieldValue = document.getElementsByName(fieldName)[0].value;
    // Получаем элемент счетчика
    var counterField = document.getElementsByName(counterName)[0];

    // Проверяем, не пустое ли поле
    if (fieldValue !== '') {
        // Если поле не пустое, делаем счетчик обязательным
        counterField.required = true;
    } else {
        // Если поле пустое, удаляем обязательность счетчика
        counterField.required = false;
    }
}
