var gameModule = (function () {

    //deklaracja graczy
    var player_O = 'O';
    var player_X = 'X';
    //pierwsza runde zaczyna kolko
    var activePlayer = player_O;
    //jesli nikt nie kliknie przycisku change player w kolejnej rundzie to domyslnie gre zaczyna kolko
    var nextTurnActivePlayer = player_O;
    //poczatek nowej rundy
    var newTurn = true;
    //informacja o tym, czy punkty w danej rundzie zostały dodane
    var pointsAddedIntThisTurn = false;
    //liczba komorek na planszy
    var _boardSize = 9;
    var turnNumber = 1;


    //informacja o zmianie gracza rozpoczynajacego kolejna runde
    var _start = function () {
        var infoActivePlayer = document.getElementById("activePlayer");
        infoActivePlayer.innerText = player_O;
        var infoActivePlayerNextTurn = document.getElementById("activePlayerNextTurn");
        infoActivePlayerNextTurn.innerText = player_O;
    }

    //zmiana gracza w trakcie rundy, po kazdym kliknieciu
    var _changePlayer = function () {
        if (activePlayer == 'O') {
            activePlayer = player_X;
            var infoActivePlayer = document.getElementById("activePlayer");
            infoActivePlayer.innerText = player_X;
        } else if (activePlayer == 'X') {
            activePlayer = player_O;
            var infoActivePlayer = document.getElementById("activePlayer");
            infoActivePlayer.innerText = player_O;
        }
        return activePlayer;
    }

    //zmiana gracza w następnej rundzie
    var _changePlayerNextTurn = function () {
        if (nextTurnActivePlayer == 'O') {
            nextTurnActivePlayer = player_X;
            //ustawianie w tabelce informacji
            var infoActivePlayerNextTurn = document.getElementById("activePlayerNextTurn");
            infoActivePlayerNextTurn.innerText = player_X;
        } else if (nextTurnActivePlayer == 'X') {
            nextTurnActivePlayer = player_O;
            var infoActivePlayerNextTurn = document.getElementById("activePlayerNextTurn");
            infoActivePlayerNextTurn.innerText = player_O;
        }
    }


    //rysuje konkretny znak na komorce, jesli komórka jest pusta, a gra jeszcze sie nie skończyła
    var _draw = function _draw(cell) {

        if (winnerCheckerModule.isGameFinished() == true) {
            alert('Gra skonczona!');
        } else if (cell.innerText != '') {
            alert('Nie mozna postawic tutaj znaku!');
        } else {
            cell.innerText = activePlayer;
            _changePlayer();
            //koloruj znaczniki X i O
            coloringSymbols();
        }

        //po postawieniu znaku sprawdz czy gra jest skonczona
        if (winnerCheckerModule.isGameFinished() == true && pointsAddedIntThisTurn == false) {
            if (winnerCheckerModule.isNoWinner() == true) {
                alert('Remis!');
                //console.log("dodaje Punkty remisowe!!!");
                //wywoluje funkcje modulu history
                historyModule.wasDraw();
                //dodaje do wyswietlanej na stronie tabeli
                document.getElementById('draw_sum').innerText = historyModule.getTimesWasDraw();

                //dodanie historii gry
                document.getElementById('sum_line').insertAdjacentHTML('afterend', '<tr >' +
                    '<th class="statistic">Turn: ' + turnNumber + '</th>' +
                    '<th class="statistic"></th>' +
                    '<th class="statistic"></th>' +
                    '<th class="statistic">X</th>' +
                    '</tr >');
                turnNumber++;

            }
            if (winnerCheckerModule.getWinner() != false) {
                var winner = winnerCheckerModule.getWinner();
                alert('Wygral: ' + winner);
                //console.log("dodaje Punkty wygranemu!!!");
                //wywoluje funkcje modulu history
                if (winner == player_O) {
                    historyModule.oWon();
                    //dodaje do wyswietlanej na stronie tabeli
                    document.getElementById('player_O_sum').innerText = historyModule.getTimesOWon();

                    //dodanie historii gry
                    document.getElementById('sum_line').insertAdjacentHTML('afterend', '<tr >' +
                        '<th class="statistic">Turn: ' + turnNumber + '</th>' +
                        '<th class="statistic"></th>' +
                        '<th class="statistic">X</th>' +
                        '<th class="statistic"></th>' +
                        '</tr >');
                    turnNumber++;
                } else if (winner == player_X) {
                    historyModule.xWon();
                    //dodaje do wyswietlanej na stronie tabeli
                    document.getElementById('player_X_sum').innerText = historyModule.getTimesXWon();

                    //dodanie historii gry
                    document.getElementById('sum_line').insertAdjacentHTML('afterend', '<tr >' +
                        '<th class="statistic">Turn: ' + turnNumber + '</th>' +
                        '<th class="statistic">X</th>' +
                        '<th class="statistic"></th>' +
                        '<th class="statistic"></th>' +
                        '</tr >');
                    turnNumber++;
                }
            }

            pointsAddedIntThisTurn = true;

        }


    }

    var coloringSymbols = function () {
        for (var i = 1; i <= _boardSize; i++) {
            var colorCell = document.getElementById(i);
            if (colorCell.innerText == 'X') {
                colorCell.className = 'x_color';
            } else if (colorCell.innerText == 'O') {
                colorCell.className = 'o_color'
            }
        }
    }


    //resetowanie gry
    var _reset = function () {
        pointsAddedIntThisTurn = false;
        //zmiana aktualnie rozgrywającego gracza na
        activePlayer = nextTurnActivePlayer;

        for (var i = 1; i <= _boardSize; i++) {
            var resetCell = document.getElementById(i);
            resetCell.innerText = '';
        }

        if (activePlayer == 'O') {
            var infoActivePlayer = document.getElementById("activePlayer");
            infoActivePlayer.innerText = player_O;
        } else if (activePlayer == 'X') {
            var infoActivePlayer = document.getElementById("activePlayer");
            infoActivePlayer.innerText = player_X;
        }
    }


    return {
        start: _start,
        changePlayer: _changePlayer,
        draw: _draw,
        reset: _reset,
        changePlayerNextTurn: _changePlayerNextTurn,
        boardSize: _boardSize
    }

})();