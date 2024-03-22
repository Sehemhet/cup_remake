jQuery(function($) {
    // Функция для отправки данных формы и установки значения скрытого поля action
    $('.form').submit(function(e) {
        e.preventDefault();

        // Собираем все данные формы
        let formData = $(this).serialize();

        // Отправляем данные на сервер методом AJAX
        $.post({
            url: 'обработчик.php', // Укажите путь к файлу-обработчику на сервере
            data: formData,
            success: function(res) {
                // Выводим ответ сервера в консоль для отладки
                console.log(res);
                // Если ответ сервера содержит дату и время, обновляем их на странице
                if (res.date && res.time) {
                    $('#currentDateTime').text(res.date + ' ' + res.time);
                }
            }
        });
    });

    // Обработчик для выбора типа действия (Піч, Напівфабрикат, Поклейка, Готове, Продано)
    $('.action-btn').click(function() {
        // Устанавливаем значение в скрытый инпут при клике на кнопку
        $('input[name="action"]').val($(this).attr('name'));
    });
});
