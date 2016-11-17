var sb = document.getElementById("sb");

// TweenMax.to(sb, 3, {left:800, top:300});

TweenMax.to(sb, 3,
	{
		x: 800,
		y: -500,
		rotation: 720,
		scale: 0.5,
		ease: Elastic.easeOut
	}, 0.5);

TweenMax.staggerTo(".bb", 1,
	{
		y: 500,
		rotation: 360,
		delay: 0,
		ease: Bounce.easeOut
	}, 0.5);

TweenMax.to(".bb, #sb", 1,
	{
		opacity: 0,
		delay: 5,
		onComplete: imDone
	});

function imDone(){
	alert("i'm done!!11!!11!1");
};