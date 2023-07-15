const { createBoard } = require("./../src/index");

describe('Board', () => {

    it('Should return a true, when a board is created successfully', () => {
       let board = createBoard();

        expect(board).toBeDefined(); 
    });
    
});