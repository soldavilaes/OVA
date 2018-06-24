/*$(function () {
    $('#itemObjetivos').click(function(){
        $('#content').load('views/inicio.html');
    });
});*/
$(document).ready(function(e){
	$('#itemObjetivos').on('click', function(){
		$('#content').load('views/inicio.html')
	});
});
$(document).ready(function(e){
	$('#itemActividad').on('click', function(){
		$('#content').load('views/jsLanguaje.html')
	});
});
$(document).ready(function(e){
	$('#itemTema1').on('click', function(){
		$('#content').load('views/cssLanguaje.html')
	});
});


