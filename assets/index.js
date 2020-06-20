import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoMute from './plugins/AutoMute.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoMute()] });

const buttonPlay = document.getElementById('play');
buttonPlay.onclick = () => player.togglePlay();
const buttonSound = document.getElementById('sound');
buttonSound.onclick = () => player.toggleSound();