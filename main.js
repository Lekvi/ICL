$(document).ready(function(){
    $('.call-form').fancybox();
})   

console.log(data);
$('.form').submit(function(e){
    
    e.preventDefault(); // Отключение перезагрузки страницы после нажатия submit 

    let id = $("input[name='id']").val();
    let name = $("input[name='name']").val();
    let cost = $("input[name='cost']").val();
    let quantity = $("input[name='quantity']").val();
    
    $('.content__table tr:last').after(`<tr><td>${id}</td><td>${name}</td><td>${cost}</td><td>${quantity}</td><td class='delete'></td></tr>`); // Добавление данных из input в новую строку

    $('.delete').click(function(){
        $(this).closest('tr').remove();
    })

    function closeModal() {
        $(".fancybox-close-small").click();
    }
    setTimeout(closeModal, 200); // Мини костыль для закрытия модального, после добавления строки
    
});


var data = [
    {Идентификатор: 1, Название: 'iPhone 5' , Стоимость: 400, Количество: 5},
    ['Идентификатор', 'Название' , 'Стоимость', 'Количество'],
    [1, 'iPhone 5', '400', 5 ],
    [2, 'XBOX', '500', 7]
]

// Временные наработки
 
    
// let Inputdata = $('.form').serializeArray();
// test = []
// $(Inputdata).each(function(i, field){
// test[field.name] = field.value;
// });

// console.log(test)

// data = [...data, ...test] // Пытаемся!! Дополняем исходный массив новыми данными

// console.log(data)