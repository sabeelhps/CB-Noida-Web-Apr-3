// Add Todo
$('input').keypress(function (e) {
    if (e.which === 13) {
        const todoText = $(this).val();
        $('#list').append(`<li>${todoText}</li>`);
        $(this).val("");
    }
});


// Mark todo as completed
$('#list').on('click','li',function () {
    console.log('clicked');
    $(this).toggleClass('completed');
});