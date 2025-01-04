let toggler = document.getElementById('switcher');

toggler.addEventListener("click",()=>{
toggler.checked === true ? document.body.style.background = "black" : document.body.style.background = "white"
}
)