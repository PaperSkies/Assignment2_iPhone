const $ = (id) => document.getElementById(id)

/*
nunununununununununununununun
|    🎵  Music Player       |
nununununununununununununu*/


const player = document.getElementsByTagName('audio')[0]

player.controls = false



function PlayPause() {
	
	if (player.paused) {
		
		player.play()

	} else {
		
		player.pause()
	
	}

	swapIcon()
}




/*
nunununununununununununununu
|      ⏯  Play Button     |
nunununununununununununun*/


const playButton = $('play-button')

playButton.addEventListener('click', PlayPause)


const musicPlayer = $('music-player');

function swapIcon() {

	if (player.paused) {
		pauseButton.style.transform = 'scaleY(0)';
		// Wait for this ☝🏽 animation to finish (1000ms = 1s)
		// musicPlayer.appendChild(playButton);
		playButton.style.transform = 'scale(0)';
		setTimeout(() => {
			// musicPlayer.removeChild(pauseButton);
			playButton.style.transform = 'scale(1)';
		}, 500);
	} else {
		playButton.style.transform = 'scale(0)'
		// Wait for this ☝🏽 animation to finish (1000ms = 1s)
		// musicPlayer.appendChild(pauseButton);
		pauseButton.style.transform = 'scaleY(0)';
		setTimeout(() => {
			// musicPlayer.removeChild(playButton);
			pauseButton.style.transform = 'scaleY(1)';
		}, 500);
	}
}







/*
nunununununununununununununu
|      ⏸  Pause Button     |    //? I should really go to sleep but instead I'm making a pause button
nunununununununununununun*/


// Helper utility for making pause button
function stringToHTML(string) {
	const template = document.createElement('template');
	template.innerHTML = string.trim();
	return template.content.firstChild;
}

// helper utility for uppercase text
function toTitleCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}



const bar1 = stringToHTML(`<div style="width:10px; height:100%; background:white; border-radius:10px"/>`);//!               		  pew
const bar2 = stringToHTML('<div style="width:10px; height:100%; background:white; border-radius:10px"/>');//!                 		pew
const pauseButton = document.createElement('div');
pauseButton.style.justifyContent = 'space-around';
pauseButton.style.transform = 'scaleY(0)';
pauseButton.style.position = 'relative';
pauseButton.style.height = '40px';
pauseButton.style.display = 'flex';
pauseButton.style.zIndex = '9999';
pauseButton.style.width = '50px';
pauseButton.id = 'pause-button';
pauseButton.style.position = "absolute";
pauseButton.style.cursor = "pointer";
pauseButton.style.zIndex = "200";
pauseButton.style.transition = "1s";
pauseButton.style.margin = "auto";
pauseButton.style.left = "0";
pauseButton.style.right = "202px";
pauseButton.append(bar1);
pauseButton.append(bar2);
pauseButton.addEventListener('click', PlayPause);
musicPlayer.appendChild(pauseButton);


/*
nunununununununununununununu
|   🗃  Music Collection   |
nunununununununununununun*/


const cover = $("cover");
const title = $("song-title");

const musicSelection = ["datasphere", "daydream", "fold"];

let index = 0;


function changeSong(direction) {

	if (direction === "next") {
		index++
	} else {
		index--
	}

	if (index > musicSelection.length - 1) {
		index = 0;
	}

	if (index < 0) {
		index = musicSelection.length - 1;
	}

	updateCurrentSong(musicSelection[index]);
}



function updateCurrentSong(songTitle) {

	const isPlaying = !player.paused;

	if (isPlaying) {
		player.pause();
	}

	player.src = `audio/${songTitle}/${songTitle}.mp3`;
	cover.src = `audio/${songTitle}/${songTitle}.jpg`;
	title.innerText = toTitleCase(songTitle);

	if (isPlaying) {
		player.play();
	}
}

$("next-button").addEventListener("click", () => changeSong("next"));
$("previous-button").addEventListener("click", () => changeSong("previous"));
