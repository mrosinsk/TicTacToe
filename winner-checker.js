var winnerCheckerModule = (function () {
    //deklaracja planszy do gry 3x3
    var board = new Array(3);
    var rowSize = Math.sqrt(gameModule.boardSize);

    //wstawienie komorek do tablicy dwuwymiarowej
    var insertCellsIntoBoard = function () {
        var j = 1;
        for (var i = 0; i < rowSize; i++) {
            board[i] = new Array(3);
            for (var k = 0; k < rowSize; k++) {
                board[i][k] = document.getElementById(j).innerText;
                console.log(board[i][k]);
                j++;
            }
        }
    }

    //sprawdzenie czy wygralo kolko
    var _getWinner = function () {
        insertCellsIntoBoard();
        //sprawdzanie skosow
        if ((board[0][0] == 'X' || board[0][0] == 'O') && board[0][0] == board[1][1] && board[1][1] == board[2][2]) return board[0][0];
        if ((board[0][2] == 'X' || board[0][2] == 'O') && board[0][2] == board[1][1] && board[1][1] == board[2][0]) return board[0][2];
        for (var i = 0; i < rowSize; i++) {
            //sprawdzanie kolejnych kolumn
            if ((board[0][i] == 'X' || board[0][i] == 'O') && board[0][i] == board[1][i] && board[1][i] == board[2][i]) return board[0][i];
            //sprawdzanie kolejnych wierszy
            if ((board[i][0] == 'X' || board[i][0] == 'O') && board[i][0] == board[i][1] && board[i][1] == board[i][2]) return board[i][0];
        }
        return false;
    }

    //sprawdzenie czy wszystkie pola sa wypelnione
    var _allCellsFilled = function () {
        for (var i = 1; i <= gameModule.boardSize; i++) {
            var actualCell = document.getElementById(i);
            if (actualCell.innerText == '') {
                return false;
            }
        }
        return true;
    }

    //sprawdzanie czy gra skonczona
    var _isGameFinished = function () {
        if (_getWinner() != false || _allCellsFilled() == true) {
            return true;
        }
        return false;
    }

    //sprawdzenie czy remis/brak zwyciezcy
    var _isNoWinner = function () {
        if (_allCellsFilled() == true && _getWinner() == false) {
            return true;
        }
        return false;
    }

    return {
        getWinner: _getWinner,
        isGameFinished: _isGameFinished,
        isNoWinner: _isNoWinner,
        publicOnlyForTest_allCellsFilled: _allCellsFilled
    }


})();