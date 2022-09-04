const socket = io();


const chatInp = document.getElementById('chat-inp');
const sendBtn = document.getElementById('send-btn');
const chatList = document.getElementById('chat-list');
const loginSection = document.getElementById('login-section');
const chatSection = document.getElementById('chat-section');
const loginBtn = document.getElementById('login-btn');
const loginInp = document.getElementById('login-inp');

chatSection.classList.add('hide');


loginBtn.addEventListener('click', () => {
    const username = loginInp.value;
    if (username.trim().length <= 0) {
        return;
    }
    socket.emit('login', {
        username: username
    });
    loginSection.classList.add('hide');
    chatSection.classList.remove('hide');
})


sendBtn.addEventListener('click', () => {
    const msg = chatInp.value;
    socket.emit('send-msg', {
        message: msg
    })
    chatInp.value = "";
});

socket.on('received-msg', (data) => {
    const li = document.createElement('li');
    li.innerHTML = `${data.username} : ${data.message}`;
    li.setAttribute('class', 'list-group-item mb-2 rounded-pill');
    chatList.append(li);
})