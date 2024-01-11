function toggleOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display="flex";
    overlay.classList.toggle('active');
  }
  function toggleOverlayOff() {
    var overlay = document.getElementById('overlay');
    overlay.style.display="none";
    overlay.classList.remove('active');
  }
  function fun(){
    let menusimbol=document.getElementById("menusimbol");
    menusimbol.style.display="none";
    let menunone=document.getElementById("menunone");
    menunone.style.display="block";
    let menu=document.getElementById("menu");
    menu.style.display="grid";
  }
  function fun1(){
    let menusimbol=document.getElementById("menusimbol");
    menusimbol.style.display="block";
    let menunone=document.getElementById("menunone");
    menunone.style.display="none";
    let menu=document.getElementById("menu");
    menu.style.display="none";
  }
let slider;
const imageWidth = 500;
let currentPosition = 0;

function moveLeft() {
    currentPosition += imageWidth;
    if (currentPosition > 0) {
        currentPosition = -((4 - 1) * imageWidth);
    }
    updateSliderPosition();
}

function moveRight() {
    currentPosition -= imageWidth;
    if (currentPosition < -((4 - 1) * imageWidth)) {
        currentPosition = 0;
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    slider.style.transform = `translateX(${currentPosition}px)`;
}

document.addEventListener("DOMContentLoaded", function() {
    slider = document.getElementById('image-slider');
});
function add(){
  let value=document.getElementById("value");
  value.innerHTML=parseInt(value.innerHTML)+1;
}
function remove(){
  let value=document.getElementById("value");
  let c=parseInt(value.innerHTML);
  if(c>0){value.innerHTML=c-1;} 
}
function addCart() {
  let value=document.getElementById("value");
  // let no=document.getElementById("no");
  // no.innerHTML=parseInt(value.innerHTML);
  let result=document.getElementById("result");
  result.innerHTML= parseInt(value.innerHTML)+"  $"+(parseInt(value.innerHTML)*125)+".00";
}
function itemRemove() {
  let item=document.getElementById("item") ;
  item.style.display="none";
  let result=document.getElementById("result");
  result.innerHTML="";
  let empty=document.getElementById("empty");
  empty.style.display="block";
}
function cart(){
  const cart=document.getElementById("cart");
  console.log(cart.style.display);
  if(cart.style.display==""){
    cart.style.display="grid";
    let result=document.getElementById("result");
    let empty=document.getElementById("empty");
    if(result.innerHTML!=""){
      empty.style.display="";
      let item=document.getElementById("item") ;
      item.style.display="grid";
    }
  }else{
    cart.style.display="";
  }
}