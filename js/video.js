var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	var vid = document.querySelector(".video");
	vid.autoplay = false;
	vid.loop = false;
	vid.load();
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function(){
	//check if we need a condition for play. will we keep it able to keep changing volume or nah??
	// does volume info include whats printed on the slider and slider pos?? or just what vid volume is??
	var vid = document.querySelector(".video");
	vid.volume = document.querySelector("#slider").value;
	vid.play();
});

document.querySelector("#pause").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	if (!vid.paused) {
		vid.pause();
	}
});

document.querySelector("#slower").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	vid.playbackRate = vid.playbackRate * (9/10);
	console.log(vid.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	vid.playbackRate = vid.playbackRate * (10/9);
	console.log(vid.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	if (vid.ended) {
		vid.currentTime = 0;
	} else {
		vid.currentTime += vid.currentTime + 10;
	}

	console.log(vid.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	vid.muted = !vid.muted;
});

//document.querySelector("#slider").addEventListener("")