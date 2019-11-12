$(document).ready(function () {
    $('.call-form').fancybox();
})

function sortTable(){
    
}

let data = [
    ['Идентификатор', 'Название', 'Стоимость', 'Количество'],
    [1, 'iPhone 5', '400', 5],

]
// Сортировка таблицы ( рабтает не совсем корректно)
$('.content__table').click(function(){
    let sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows);
})

// Закрытие модального окна после отправки даных формы
function closeModal() {
    $.fancybox.close()
}
// Очистка данных формы
function clearFields() {
    $('.form').find("input[type=text], textarea").val("")
}
// Сбор данных и полей формы и организация их в массив вида name=value
function addInfo() {
    let Inputdata = $('.form').serializeArray();
    test = []
    $(Inputdata).each(function (i, field) {
        test[i] = field.value;
        if (isNaN(field.value)) {
            test[i] = (field.value).toString()
        } else {
            test[i] = +field.value
        }
    });
    data.push(test); //  Дополняем исходный массив новыми данными
    console.log(data)
}
// Удаление элемента из массива
function deleteInfo(){
    data.splice(rowIndex, 1);
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
        rowIndex = ($(this).closest('tr').index());
        $(this).closest('tr').remove();
        deleteInfo()
        console.log(data)
    })

    addInfo()
    setTimeout(closeModal, 200)
    clearFields()

});
