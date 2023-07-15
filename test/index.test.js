const { createBoard } = require("./../src/index");

describe('Board', () => {
    let board = createBoard();

    expect(board).toBeDefined();
});