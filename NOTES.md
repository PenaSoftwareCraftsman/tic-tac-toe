# Cenários TDD 
1 – Criação do tabuleiro:  
Game Board Creation...

Board Created.

The game will start with player X 

2 – Player X ganhou na linha vertical 
Player X: 

PLAYER X WON!
 
3 – Player O ganhou na linha horizontal  
Player O: 

PLAYER O WON! 

4 – Player X ganhou com uma linha diagonal 
Player X: 

PLAYER X WON! 

5 – Jogo termina com um empate  
Player X: 

GAME ENDS WITH A DRAW!

# Domains

- Tabuleiro: Tabuleiro montado com um espaco 3x3 que os jogadores podem adicionar "x" ou "o" as casas
- Jogador: 2 jogadores jogam, o jogador x e o jogador y;
- Game: Cada jogador pode preencher uma casa do tabuleiro em seu turno com o objetivo de de completar uma horizontal, uma vertical ou diagonal

-Empate: Não há mais opcões de casa para os jogadores, e ainda não há um vencedor

Mensagens:

Para vitória:
PLAYER X WON!

Para empate:
GAME ENDS WITH A DRAW!

**Label**  
✅ done 🚧 WIP ❌ ERROR

TODO:

# Pomodoro 1 🍅:

- README and Notes ✅
- Domains Search ✅

- Testing and falling "createBoard"
    - Should return a true, when a board is created successfully 🚧