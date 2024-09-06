const search = document.querySelector('#search');
const searchtwo = document.querySelector('#search2');
const searchItem = document.querySelector('.search');
const searchSorch = document.querySelector('.search-item');

const inputBox = document.querySelector('#input-search');
const inputno = "";

search.onclick = () =>{
    searchItem.classList.toggle('active');
    searchSorch.classList.toggle('active');
    search.classList.toggle('active');
    searchtwo.classList.toggle('active');
};
searchSorch.onclick = () =>{
    searchItem.classList.remove('active');
    searchSorch.classList.remove('active');
    search.classList.remove('active');  
    searchtwo.classList.remove('active');
    inputBox.value = inputno;
}

window.onscroll = () =>{
    searchItem.classList.remove('active');
    searchSorch.classList.remove('active');
    search.classList.remove('active');
    searchtwo.classList.remove('active');
    inputBox.value = inputno;
}

const nav = document.querySelector('#nav');
const ul = document.querySelectorAll('#li');

nav.addEventListener('wheel', (e) => {
    e.preventDefault();
    nav.scrollLeft += e.deltaY;
});