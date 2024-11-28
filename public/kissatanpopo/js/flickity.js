var elem = document.querySelector('.main-carousel');

function initFlickity() {
  var options = {
    cellAlign: 'center',
    contain: true,
    autoPlay: true,
    wrapAround: true,
    pageDots :true
  };

  if (window.innerWidth <= 768) {
    options.cellAlign= 'center',
    options.autoPlay = false; 
    options.pageDots = false; 
    options.draggable = true; 
  }

  
  var flkty = new Flickity(elem, options);
}


initFlickity();



