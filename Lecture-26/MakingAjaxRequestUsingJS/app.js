const figure = document.querySelector('figure');


const req = new XMLHttpRequest();
req.onload = function () {
    const res = JSON.parse(this.responseText);

    const image = document.createElement('img');
    image.setAttribute('src', res.avatar_url);
    figure.append(image);

    const h2 = document.createElement('h2');
    h2.append(res.name);
    figure.append(h2);

}
req.onerror = function () {
    console.log(this);
}
req.open('GET', 'https://api.github.com/users/aman-mahajan0101');
req.send();



