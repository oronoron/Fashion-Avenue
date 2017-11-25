$(document).ready(function(){
  $(window).scroll(function() {
  	if($(document).scrollTop() > 800) {
    	$('#navhome').addClass('opaque');
    }
    else {
    $('#navhome').removeClass('opaque');
    }
  });
  
  
  });



function initMap() {
   
    var uluru = {lat: 51.5128529, lng: -0.1399381999999605};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var map = new google.maps.Marker({
      position: uluru,
      map: map

    });
  }