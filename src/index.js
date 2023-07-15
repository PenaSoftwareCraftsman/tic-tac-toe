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

    this.marks = (board, position) => {

       let positionOne = position[0]
       let positionTwo = position[1]

       board[positionOne][positionTwo] = this.name;

        return board;
    };
}

module.exports = {
    Player,
    createBoard
}