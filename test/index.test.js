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
    
    it('Should be "O" when the player turn is changed and the player "X" turn pass', () => {
        let player = new Player();
        player.changeTurn();

        expect(player.name).toBe("O");
    });

    it('Should be "X" when the player turn is changed and the player "O" turn pass', () => {
        let player = new Player();
        player.name = "O";
        player.changeTurn();

        expect(player.name).toBe("X");
    });

    it('Should be "X" on the first cell (first column and first row) on the board when player "X" marks(0,0)', () => {
        let board = createBoard();
        let boardMock = [
            ["X",undefined,undefined],
            [undefined,undefined,undefined],
            [undefined,undefined,undefined],
        ]
        let player = new Player();
        
        board = player.marks(board, [0,0]);

        expect(board).toEqual(boardMock);
    });

    it('Should return all board positions when checks board empty cells', () => {
        let board = createBoard();

        let boardEmptyCellsMock = [[0, 0], [0, 1],[0, 2],[1, 0], [1, 1],[1, 2], [3, 0], [3, 1], [3, 2]];

        expect(board.checkEmptyCells()).toEqual(boardEmptyCellsMock);
    });
});