// Add Todo
$('input').keypress(function (e) {
    if (e.which === 13) { //if u pressed enter key
        const todoText = $(this).val();
        $('#list').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
        $(this).val("");
    }
});


// Mark todo as completed
$('#list').on('click','li',function () {
    console.log('clicked');
    $(this).toggleClass('completed');
});

// Delete Todo

$('#list').on('click', 'span', function (event) {
    event.stopPropagation(); //This is to stop event bubbling
    $(this).parent().fadeOut(function () {
        $(this).remove();
    });
});

$('#plus').click(function () {
    $('input').fadeToggle();
})

