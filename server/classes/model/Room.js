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

        // TODO: test if the room code already exists in a room code object to ensure, that there are no rooms with the same name

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
}
module.exports = Room;
