var total = 0;

$(document).ready(function(){

	$('#genTotal').text('Total Clicks: ' +total);	

	$('#container').on('click', '#genButton', function(){
 		addButtons();

	});
	
deleteButton();

changeButton();

});

function addButtons (){
	
	total++
	$('#genTotal').text('Total Clicks: ' +total);


	$("#container").append("<div class='btnGroup'></div>");
		var $el = $("#container").children().last();
		$el.append('<button class="changeButton">CHANGE</button>');
		$el.append('<button class="deleteButton">DELETE '+ total+'</button>');
		
}

function deleteButton () {

	$('#container').on('click', '.deleteButton', function(){
		$(this).closest('.btnGroup').remove();

		total--
	$('#genTotal').text('Total Clicks: ' +total);
});
}

function changeButton () {
	$('#container').on('click', '.changeButton', function(){
	$('body').toggleClass('bkgdColor2');
	});
}
