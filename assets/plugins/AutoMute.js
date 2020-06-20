function AutoMute() {}

AutoMute.prototype.run = function(stateSound) {
    stateSound.muted() 
}

export default AutoMute