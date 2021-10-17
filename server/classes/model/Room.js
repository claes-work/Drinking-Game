class Room {

    constructor (
        host,
        inGame,
        playersArray,
    ) {
        this.roomCode       = this.createRoomCode();
        this.host           = host;
        this.inGame         = inGame;
        this.playersArray   = [];
        this.playerCount    = playersArray.length;
        this.availableCards = [];
        this.colorArray     = [
            'red',
            'blue',
            'yellow',
            'green',
            'violet',
        ];
    }

    /**
     * Create a random room code that is four characters long
     * @returns {string}
     */
    createRoomCode() {
        let result      = '';
        let chars       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charsLength = chars.length;
        for ( let i = 0; i < 4; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * 4));
        }
        return result;
    }

    /**
     * Push a new player to the players array
     * @param playerObject
     */
    addPlayer(playerObject) {
        let stringify = JSON.stringify(playerObject)
        this.playersArray.push(JSON.parse(stringify))
    }

    /**
     * Return a random color from the colorArray and unset it afterwards, so that no other player can get this color
     * @returns {string}
     */
    assignColor() {
        let colorIndex = Math.floor(Math.random() * this.colorArray.length)
        let color = this.colorArray[colorIndex];
        (colorIndex > -1)
            ? this.colorArray.splice(colorIndex, 1)
            : 'error'
        return color;
    }
}
module.exports = Room;
