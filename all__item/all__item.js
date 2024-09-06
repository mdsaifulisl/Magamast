
// function searchItems() {
    
// };
// searchItems()

const searchBox = document.querySelector('#input-search').value.toUpperCase();
const boxItem = document.querySelectorAll('.item');
const pname = document.getElementsByTagName("h5");

console.log(typeof(boxItem));
for(var i = 0; i < pname.length; i++){
    let match = boxItem[i].innerHTML.toUpperCase().indexOf(searchBox) >= 0;

    
    if(match){
        boxItem[i].style.display = "";

    }else{
        boxItem[i].style.display = "none";

    };
};
