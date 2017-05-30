
+function ($) {
	'use strict';

	//Google Map
	var latitudeVinkuran = $('#google-map').data('latitude');
	var longitudeVinkuran = $('#google-map').data('longitude');
	var latitudeShop = $('#google-map-shop').data('latitude');
	var longitudeShop = $('#google-map-shop').data('longitude');
	
	function initialize_map() {
		var myLatlng = new google.maps.LatLng(latitudeVinkuran,longitudeVinkuran);
		var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: myLatlng
		};
		var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});
		var contentString = '<div id="infoWindowContent">'+
            //'<div id="siteNotice">'+
            //'</div>'+
            //'<h1 id="firstHeading" class="firstHeading">Dolija - Extra Virgin Olive Oil</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Dolija - Extra Virgin Olive Oil</b></p>' +
			'<p>Centar 21, Vinkuran</p>' +
			'<p>52100 Pula</p>' +
			'<p>Croatia</p>' +
            '<p><a href="https://www.google.com/maps/place/Dolija+-+Extra+Virgin+Olive+Oil/@44.834674,13.86658,18z/data=!4m5!3m4!1s0x0:0xb18c7b1dbb546bdb!8m2!3d44.834662!4d13.867121?hl=en-US">' +
			'View on Google Maps</a></p>'+
            '</div>'+
            '</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
	}
	google.maps.event.addDomListener(window, 'load', initialize_map);

	function initialize_map_shop() {
		var myLatlng = new google.maps.LatLng(latitudeShop,longitudeShop);
		var mapOptions = {
			zoom: 15,
			scrollwheel: false,
			center: myLatlng
		};
		var map = new google.maps.Map(document.getElementById('google-map-shop'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});
		var contentString = '<div id="infoWindowContent">'+
            '<div id="bodyContent">'+
            '<p><b>Dolija - Extra Virgin Olive Oil Shop</b></p>' +
			'<p>Narodni trg 3</p>' +
			'<p>52100 Pula</p>' +
			'<p>Croatia</p>' +
            '<p><a href="https://www.google.hr/maps/place/Dolija+Shop+Extra+Virgin+Olive+Oil/@44.8667156,13.8480431,18.5z/data=!4m5!3m4!1s0x477cd321b5de8127:0x77303e5dda2fdbcc!8m2!3d44.8667632!4d13.8487043">' +
			'View on Google Maps</a></p>'+
            '</div>'+
            '</div>';
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
	}
	google.maps.event.addDomListener(window, 'load', initialize_map_shop);
	
	// when clicking on vise/manje button
	$('.expandable a').click(function() {
	alert('expanding');
	});

}(jQuery);