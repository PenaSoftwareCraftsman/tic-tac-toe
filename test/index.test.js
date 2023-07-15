const { Player, createBoard } = require("./../src/index");

describe('Board', () => {

    it('Should return a true, when a board is created successfully', () => {
       let board = createBoard();

        expect(board).toBeDefined(); 
    });

    it('Each board should have 3 columns', () => {
        let board = createBoard();

        expect(board.length).toBe(3); 
    });

    it('First Column must have 3 rows', () => {
        let board = createBoard();

        expect(board[0].length).toBe(3); 
    });
    
    it('Second Column must have 3 rows', () => {
        let board = createBoard();

        expect(board[1].length).toBe(3); 
    });

    it('Third Column must have 3 rows', () => {
        let board = createBoard();

        expect(board[2].length).toBe(3); 
    });
});

describe('Player', () => {

    it('Should start named "X"', () => {
        let player = new Player();
    
        expect(player.name).toBe("X");
    });

});