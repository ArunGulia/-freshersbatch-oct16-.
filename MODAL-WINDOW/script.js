'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//fn to open modal 
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//fn to close modal 
const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


//loops over the node list for each show model
//adding event handler with the click functionality 
for(let i=0; i<btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click',openModal);

 //close btn 
btnCloseModal.addEventListener('click', closeModel);
//close the popup if pressed on the overlay
overlay.addEventListener('click', closeModel);

//close the popup if pressed on the escape key
document.addEventListener('keydown', function(e){
    //console.log(e.key);
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModel();
        }
    }
    
 });