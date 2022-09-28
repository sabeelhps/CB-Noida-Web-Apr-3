const socket = io();


$('#chat-box').hide();

$('#send-btn').click(() => {
    const msgText = $('#inp').val();
    
    socket.emit('send-msg', {
        msg: msgText
    })

    $('#inp').val("");
});

socket.on('received-msg', (data) => {
     
    $('#chat').append(`<li class="border p-2 ms-0  rounded-pill mb-2"><span class="fw-bold">${data.username}</span> - <span>${data.msg}</span></li>`)
    $("#chat").scrollTop($("#chat").outerHeight());
});



$('#login-btn').click(() => {
    const username = $('#username').val();
    
    socket.emit('login', {
        username: username
    });

    $('#login').hide();
    $('#chat-box').show();

    $('#username').val("");
})

socket.on('all-clients', (data) => {
    $('.list-group').empty();
    const clients = JSON.parse(data.clients);
    for (let user in clients) {
        $('.list-group').append(`<li class="list-group-item">${clients[user]}</li>`)
    }
});

socket.on('new-client', (data) => {
    $('.list-group').empty();
    const clients = JSON.parse(data.clients);
    for (let user in clients) {
        $('.list-group').append(`<li class="list-group-item">${clients[user]}</li>`)
    }
});

