const socket = io();


const chatInp = document.getElementById('chat-inp');
const sendBtn = document.getElementById('send-btn');
const chatList = document.getElementById('chat-list');
const loginSection = document.getElementById('login-section');
const chatSection = document.getElementById('chat-section');
const loginBtn = document.getElementById('login-btn');
const loginInp = document.getElementById('login-inp');
const typingPanel = document.getElementById('typing-panel');

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

function debouncing(delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            socket.emit('typing-stopped');
        }, delay);
    }
}
const debounce = debouncing(1000);


chatInp.addEventListener('keypress', () => {
    socket.emit('typing');
    debounce();
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

socket.on('some-one-typing', (data) => {
    typingPanel.innerText = `${data.username} typing...`;
})

socket.on('typing-stopped-event', () => {
    typingPanel.innerText = "";
})