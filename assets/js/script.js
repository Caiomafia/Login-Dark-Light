const mode =  document.querySelector("#mode_icon");

mode.addEventListener('click' ,() => {
    if(mode.classList.contains('mode_icon')){
        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')
    return
    }
  
   mode.classList.add('fa-moon');
   mode.classList.remove('fa-sun');


 });