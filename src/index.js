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
}

module.exports = {
    Player,
    createBoard
}