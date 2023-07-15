const { createBoard } = require("./../src/index");

describe('Board', () => {

    it('Should return a true, when a board is created successfully', () => {
       let board = createBoard();

        expect(board).toBeDefined(); 
    });

    it('Each board should have 3 columns', () => {
        let board = createBoard();

        expect(board.length).toBe(3); 
    });
    
});