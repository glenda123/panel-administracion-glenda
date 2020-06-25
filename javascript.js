function openAccordion(id) {
    var itemsSlider = document.getElementsByClassName('slider-item')
    var accordion = document.getElementById(id);
    for(var index=0;index< itemsSlider.length;index++){
       if(itemsSlider[index] != accordion) {
           itemsSlider[index].classList.remove('show')
       }
    }
    accordion.classList.toggle('show')
   }