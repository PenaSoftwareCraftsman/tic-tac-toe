const createBoard = () => {
    let board = [
        [undefined,undefined,undefined],
        [undefined,undefined,undefined],
        [undefined,undefined,undefined],
    ]

    return board;
}

function Player() {
    this.name = "X"

    this.changeTurn = () => {
        this.name = this.name == "X" ? "O" : 'X';
    }
}

module.exports = {
    Player,
    createBoard
}