const searchBox = document.getElementById('search-box');





async function getData(searchText) {
    try {
        const res = await fetch(`http://localhost:3000/search?q=${searchText}`);
        const data = await res.json();
        console.log(data);
    }
    catch (e) {
        console.log('Cannot fetch the orders');
        console.log(e);
    }
}



searchBox.addEventListener('keypress', () => {
    const searchText = searchBox.value;
    getData(searchText);
});