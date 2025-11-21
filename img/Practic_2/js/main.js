let offset=0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset=offset+1920;
    if(offset>7680){
        offset=0;
    }
    sliderLine.style.left=-offset+'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset=offset-1920;
    if(offset<0){
        offset=7700;
    }
    sliderLine.style.left=-offset+'px';
});

document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("mymodal").classList.add("open")
});

document.getElementById("btn-close").addEventListener("click", function() {
    document.getElementById("mymodal").classList.remove("open")
});

document.getElementById("open-modal_c").addEventListener("click", function() {
    document.getElementById("mymodal").classList.remove("open")
});

document.getElementById("open-modal_b").addEventListener("click", function() {
    document.getElementById("mymodal_b").classList.add("open")
});

document.getElementById("btn-close_b").addEventListener("click", function() {
    document.getElementById("mymodal_b").classList.remove("open")
});

document.getElementById("open-modal_c").addEventListener("click", function() {
    document.getElementById("mymodal_c").classList.add("open")
});

document.getElementById("btn-close_c").addEventListener("click", function() {
    document.getElementById("mymodal_c").classList.remove("open")
});

const icon =document.querySelector('.icon');
const search =document.querySelector('.search');
const clean =document.querySelector('.clean');

icon.onclick = function(){
search.classList.toggle('active');
};

clean.onclick=function(){
document.getElementById('mySearch').value = '';
}