var total = 0;

$(document).ready(function(){

	

$('#container').on('click', '#genButton', function(){
 addButtons();
});
	
deleteButton();

});

function addButtons (){
	
	total++
	$('#genTotal').text(total);


	$("#container").append("<div class='btnGroup'></div>");
		var $el = $("#container").children().last();
		$el.append('<button id="changeButton">CHANGE</button>');
		$el.append('<button id="deleteButton">DELETE</button>');
		
}

function deleteButton () {
	$('#container').on('click', '#deleteButton', function(){
		$(this).closest('.btnGroup').remove();
});
}
