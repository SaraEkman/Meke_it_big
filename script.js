let input = document.querySelector('input');
const btn = document.querySelector('button');
// let storLe = "";

btn.addEventListener("click", function () {
    let storLe = "";
    console.log(input.value.toUpperCase());
    storLe = input.value.toUpperCase();
    input.value = storLe;    
});


