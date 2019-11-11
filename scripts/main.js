$(document).ready(function () {
    $('.call-form').fancybox();
})

let data = [
    ['Идентификатор', 'Название', 'Стоимость', 'Количество'],
    [1, 'iPhone 5', '400', 5],
    [2, 'XBOX', '500', 7]
]

console.log(data);

// Закрытие модального окна после отправки даных формы
function closeModal() {
    $.fancybox.close()
}
// Очистка данных формы
function clearFields() {
    $('.form').find("input[type=text], textarea").val("")
}

$('.form').submit(function (e) {

    e.preventDefault(); // Отключение перезагрузки страницы после нажатия submit 

    let id = $("input[name='id']").val();
    let name = $("input[name='name']").val();
    let cost = $("input[name='cost']").val();
    let quantity = $("input[name='quantity']").val();

    $('.content__table tr:last').after(`<tr><td>${id}</td><td>${name}</td><td>${cost}</td><td>${quantity}</td><td class='delete'></td></tr>`); // Добавление данных из input в новую строку

    // Удаление ближайшего ряда в таблице и в переменной по клику на иконку
    $('.delete').click(function () {
        rowIndex = ($(this).closest('tr').index()+1);
        $(this).closest('tr').remove();
        data.splice(rowIndex, 1);
        console.log(data);
    })

    // Сбор данных и полей формы и организация их в массив вида name=value
    let Inputdata = $('.form').serializeArray();
    test = []
    $(Inputdata).each(function (i, field) {
        test[i] = field.value;
        // if(Number.isInteger(field.value)){
        //     test[i] = (field.value).toString()
        // } else {
        //     test[i] = +field.value
        // }

    });

    // console.log(test) // Вывод форматированного массива данных из формы

    data.push(test); //  Дополняем исходный массив новыми данными

    console.log(data)

    setTimeout(closeModal, 200)
    clearFields()
    
});

