function AutoMute() {}

AutoMute.prototype.run = function(player) {
    if(!player.muted) {
        player.muted = true 
    }
}

export default AutoMute
