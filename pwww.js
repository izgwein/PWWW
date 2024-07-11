window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 490) {
    navbar.classList.add("sticky");
  } else if (window.pageYOffset < 490){
    navbar.classList.remove("sticky");
  }
}

/* login */
var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* player*/

var music = document.getElementById("music");
var play = document.getElementById("play");

function Play(){
  if(music.paused){
    music.play();
  }
  else{
    music.pause();
  }
}

/*addplace*/

/*
if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
} else{
  ready();
}

function ready(){
  var remove = document.getElementsByClassName('fa-trash');
  const.log(remove);
  for (var i = 0; i < remove.length; i++){
    var button = remove[i];
    button.addEventListener('click', remove);
  }
}

function remove(event){
  var clicked = event.target;
  clicked.parentElement.remove();
}

var add = document.getElementsByClassName('fa-plus')
for (var i = 0; i < add.length; i++){
  var button = add[i];
  button.addEventListener('click', addclicked);
}

function addclicked(event){
  var button = event.target
  var plus = button.parentElement
  var title = plus.getElementsByClassName('h3')[0].innerText
  console.log(title);
}
*/

/*

var addPlaceId = 0;
function addPlace(place){
  addPlaceId += 1;
  var selectedPlace = document.createElement('div');
  selectedPlace.classList.add('placeImg');
  selectedPlace.setAttribute('id', addPlaceId);
  var img = document.createElement('img');
  img.setAttribute('src', place.children[0].currentSrc);
  var savedPlaces = documents.getElementById('h3');
  selectedPlace.append(img);
  savedPlaces.append(selectedPlace);
}

/*swiper */

var swiper = new Swiper(".slide-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*popup*/

let popup = document.getElementById("popup"); 

function openPopup(){
  popup.classList.add("open-popup");
}

function openPopup(){
  popup.classList.remove("open-popup");
}

