const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

const BASE_URL = 'https://api.tvmaze.com';


async function fetchShows(searchText) {
    try {
        const res = await axios.get(`${BASE_URL}/search/shows?q=${searchText}`);
        for (const item of res.data) {
            if (item.show.image) {
                const image = document.createElement('img');
                image.style.margin = '10px';

                image.setAttribute('src', item.show.image.medium);
                resultDiv.append(image);
            }
        }
    }
    catch (e) {
        console.log('something went wrong');
    }
}

function removeResults() {
    while (resultDiv.firstChild) {
        resultDiv.firstChild.remove();
    }
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchText = form.elements[0].value;
    removeResults();
    fetchShows(searchText);
    form.elements[0].value = "";
})