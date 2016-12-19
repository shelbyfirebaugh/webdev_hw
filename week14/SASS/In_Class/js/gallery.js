$(function(){
	var index = 0;
	var counter = $("div.img-wrapper > img").length -1;
	var imgWidth = $("div.img-wrapper > img")[0].width;
	var imgBuffer = 5; //px to space btwn images

	console.log(counter);
	console.log(imgWidth);

	//add navigation dots with index as a class dynamically
	for(var i=0; i<=counter; i++){
		$("#navigation-dots").append('<span class='+i'></span>');
	}

	$("#navigation-dots > span").click("click", function(event){
		//get index from class
		index = parseInt($(this).attr('class'));
		console.log(index);
	});




});