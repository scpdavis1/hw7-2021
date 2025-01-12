var video;

//might have to use load() after any change... double check that.
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	var vid = document.querySelector(".video");
	vid.load();
	vid.autoplay = false;
	vid.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	var volElt = document.querySelector("#volume");

	// if it is currently paused,
	if (vid.paused) {
		// Set volume of video and set the volume element information, then play video.
		vid.volume = document.querySelector("#slider").value/100;
		volElt.innerHTML = `${document.querySelector("#slider").value}%`;
		vid.play();
	}
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	if (!vid.paused) {
		vid.pause();
	}
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	vid.playbackRate = vid.playbackRate * (9/10);
	console.log("Slow down video");
	console.log(`Speed is ${vid.playbackRate}`);
});

document.querySelector("#faster").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	vid.playbackRate = vid.playbackRate * (10/9);
	console.log("Speed up video");
	console.log(`Speed is ${vid.playbackRate}`);
});

document.querySelector("#skip").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	// if it has already ended or the next iteration will be over the duration.
	if (vid.ended || vid.duration <= vid.currentTime+10) {
		// Then set current time to restart and then play the video.
		vid.currentTime = 0;
		vid.pause();
	} else {
		// else, it is not at the end and it will not skip to the end on next addition.
		vid.currentTime += 10;
	}

	console.log("skip ahead");
	console.log(`Video current time is ${vid.currentTime}`);
});

document.querySelector("#mute").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	vid.muted = !vid.muted;
	if (vid.muted) {
		console.log("mute");
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		console.log("unmute");
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	var vid = document.querySelector(".video");
	var slider = document.querySelector("#slider");
	var volElt = document.querySelector("#volume");
	
	var newVolume = slider.value;
	vid.volume = newVolume/100;
	volElt.innerHTML = `${newVolume}%`;
	console.log(`The current value is ${vid.volume}`);
	console.log(volElt.outerHTML);
});

document.querySelector("#vintage").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	vid.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	var vid = document.querySelector(".video");
	vid.classList.remove("oldSchool");
});


/* Questions for tomorrow: 
1. im confused where to use load() and exactly what it does?
2. do we need to remove event listeners at any point in this project?
3. does the video need to keep playing after skip ahead restarts the video?
4. I grabbed vid in each event listener, can I delete "var video;" or will that 
	mess up with the autograder?

TODO:
1. Fix the skip ahead button so that it doesnt stop at the end and goes back
   to the start. Not yet known if I need to make it play when it gets to end.


   fix play so volume info is updated.
   fix the skip so that it goes to front and keeps playing after gets to front.
*/ 
