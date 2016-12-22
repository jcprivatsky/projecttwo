$(document).ready(function() {

	// All Image options are in the following array
	var images = ['n1.png', 'n2.png', 'n3.png', 'n4.png', 'n5.png'];

        var x = Math.floor(Math.random() * images.length);
        $('#video1').css({'background-image': 'url(images/' + images[x] + ')'});

	// 
	$('#video1').mouseenter(function(){
		var x = Math.floor(Math.random() * images.length);
        $('#video1').css({'background-image': 'url(images/' + images[x] + ')'});
   });

	var photos = ['s1.png', 's2.png', 's3.png', 's4.png', 's5.png'];

        var x = Math.floor(Math.random() * photos.length);
        $('#video2').css({'background-image': 'url(images/' + photos[x] + ')'});

	// 
	$('#video2').mouseenter(function(){
		var x = Math.floor(Math.random() * photos.length);
        $('#video2').css({'background-image': 'url(images/' + photos[x] + ')'});
   });



});