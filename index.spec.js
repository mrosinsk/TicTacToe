describe('kolko_krzyzyk_winnerCheckerModule tests: ', function () {

    //PREPARE data for tests
    beforeEach(function () {
        var testBody = '<table class="board">' +
            '<tr>' +
            '<th class="cell" id="1" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="2" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="3" onclick="gameModule.draw(this);"></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="cell" id="4" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="5" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="6" onclick="gameModule.draw(this);"></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="cell" id="7" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="8" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="9" onclick="gameModule.draw(this);"></th>' +
            '</tr>' +
            '</table>' +

            '<table class="info">' +
            '<tr>' +
            '<th class="inf">Active player</th>' +
            '<th class="inf" id="activePlayer"></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="inf">Active player in next turn</th>' +
            '<th class="inf" id="activePlayerNextTurn"></th>' +
            '</tr>' +
            '</table>' +

            '<table class="statistics">' +
            ' <tr>' +
            '<th class="statistic">Number of turn</th>' +
            '<th class="statistic">Player X</th>' +
            '<th class="statistic">Player O</th>' +
            '<th class="statistic">Draw</th>' +
            '</tr>' +
            '<tr>' +
            '<th class="statistic">Sum</th>' +
            '<th class="statistic" id="player_X_sum"></th>' +
            '<th class="statistic" id="player_O_sum"></th>' +
            '<th class="statistic" id="draw_sum"></th>' +
            '</tr </table>';

        //insert prepared data to test HTML page
        document.body.insertAdjacentHTML('afterbegin', testBody);
        gameModule.start();
    });


    //TESTS for winnerCheckerModule
    it('check If Game IsNotFinished', function () {
        expect(winnerCheckerModule.isGameFinished()).toBe(false);
    });

    it('check If Game IsFinished', function () {
        for (i = 1; i <= 9; i++) {
            document.getElementById(i).innerText = "X";
        }
        expect(winnerCheckerModule.isGameFinished()).toBe(true);
    });

    it('check If IsNoWinner return false', function () {
        expect(winnerCheckerModule.isNoWinner()).toBe(false);
    });

    it('check If IsNoWinner return true', function () {
        document.getElementById(1).innerText = 'O';
        document.getElementById(2).innerText = 'O';
        document.getElementById(3).innerText = 'X';
        document.getElementById(4).innerText = 'X';
        document.getElementById(5).innerText = 'O';
        document.getElementById(6).innerText = 'O';
        document.getElementById(7).innerText = 'O';
        document.getElementById(8).innerText = 'X';
        document.getElementById(9).innerText = 'X';
        expect(winnerCheckerModule.isNoWinner()).toBe(true);
    });

    it('check if allCellsFilled return false', function () {
        document.getElementById(1).innerText = 'O';
        document.getElementById(2).innerText = 'O';
        document.getElementById(3).innerText = 'X';
        document.getElementById(4).innerText = 'X';
        document.getElementById(5).innerText = 'O';
        document.getElementById(6).innerText = '';
        document.getElementById(7).innerText = '';
        document.getElementById(8).innerText = '';
        document.getElementById(9).innerText = '';
        expect(winnerCheckerModule.publicOnlyForTest_allCellsFilled()).toBe(false);
    });

    it('check if allCellsFilled return true', function () {
        document.getElementById(1).innerText = 'O';
        document.getElementById(2).innerText = 'O';
        document.getElementById(3).innerText = 'X';
        document.getElementById(4).innerText = 'X';
        document.getElementById(5).innerText = 'O';
        document.getElementById(6).innerText = 'O';
        document.getElementById(7).innerText = 'O';
        document.getElementById(8).innerText = 'X';
        document.getElementById(9).innerText = 'X';
        expect(winnerCheckerModule.publicOnlyForTest_allCellsFilled()).toBe(true);
    });

    it('check if getWinner return false', function () {
        document.getElementById(1).innerText = 'O';
        document.getElementById(2).innerText = 'O';
        document.getElementById(3).innerText = 'X';
        document.getElementById(4).innerText = 'X';
        document.getElementById(5).innerText = 'O';
        document.getElementById(6).innerText = 'O';
        document.getElementById(7).innerText = 'O';
        document.getElementById(8).innerText = 'X';
        document.getElementById(9).innerText = 'X';
        expect(winnerCheckerModule.getWinner()).toBe(false);
    });

    it('check if getWinner return O', function () {
        document.getElementById(1).innerText = 'O';
        document.getElementById(2).innerText = 'O';
        document.getElementById(3).innerText = 'O';
        document.getElementById(4).innerText = 'X';
        document.getElementById(5).innerText = 'O';
        document.getElementById(6).innerText = 'O';
        document.getElementById(7).innerText = 'O';
        document.getElementById(8).innerText = 'X';
        document.getElementById(9).innerText = 'X';
        expect(winnerCheckerModule.getWinner()).toBe('O');
    });

    it('check if getWinner return X', function () {
        document.getElementById(1).innerText = 'X';
        document.getElementById(2).innerText = 'X';
        document.getElementById(3).innerText = 'X';
        document.getElementById(4).innerText = 'X';
        document.getElementById(5).innerText = 'O';
        document.getElementById(6).innerText = 'O';
        document.getElementById(7).innerText = 'O';
        document.getElementById(8).innerText = 'X';
        document.getElementById(9).innerText = 'X';
        expect(winnerCheckerModule.getWinner()).toBe('X');
    });
});



describe('kolko_krzyzyk_gameModule tests: ', function () {


    //PREPARE data for tests
    beforeEach(function () {
        var testBody = '<table class="board">' +
            '<tr>' +
            '<th class="cell" id="1" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="2" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="3" onclick="gameModule.draw(this);"></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="cell" id="4" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="5" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="6" onclick="gameModule.draw(this);"></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="cell" id="7" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="8" onclick="gameModule.draw(this);"></th>' +
            '<th class="cell" id="9" onclick="gameModule.draw(this);"></th>' +
            '</tr>' +
            '</table>' +

            '<table class="info">' +
            '<tr>' +
            '<th class="inf">Active player</th>' +
            '<th class="inf" id="activePlayer"></th>' +
            '</tr>' +
            '<tr>' +
            '<th class="inf">Active player in next turn</th>' +
            '<th class="inf" id="activePlayerNextTurn"></th>' +
            '</tr>' +
            '</table>' +

            '<table class="statistics">' +
            ' <tr>' +
            '<th class="statistic">Number of turn</th>' +
            '<th class="statistic">Player X</th>' +
            '<th class="statistic">Player O</th>' +
            '<th class="statistic">Draw</th>' +
            '</tr>' +
            '<tr  id="sum_line">' +
            '<th class="statistic">Sum</th>' +
            '<th class="statistic" id="player_X_sum"></th>' +
            '<th class="statistic" id="player_O_sum"></th>' +
            '<th class="statistic" id="draw_sum"></th>' +
            '</tr </table>';

        //insert prepared data to test HTML page
        document.body.insertAdjacentHTML('afterbegin', testBody);
        gameModule.start();
    });

    //TESTS
    it('check If start initialized', function () {
        var testActivePlayer = document.getElementById("activePlayer");
        var testActivePlayerNextTurn = document.getElementById("activePlayerNextTurn");
        expect(testActivePlayer.innerText).toBe('O');
        expect(testActivePlayerNextTurn.innerText).toBe('O');
    });

    it('test mocked draw', function () {
        //ustawianie danych na kopii planszy
        document.getElementById(1).innerText = 'O';
        document.getElementById(5).innerText = 'O';
        //pobieranie komórki z id = 9
        var cell = document.getElementById(9);

        //http://stackoverflow.com/questions/22654683/jasmin-mock-instance-of-a-class
        //mokuje metode getTimesOWon z modułu historyModule (historyModule.getTimesOWon) i ustawiam jej wartość na 999
        spyOn(historyModule, 'getTimesOWon').and.returnValue(999);

        //testuje metode draw odcieta od historyModule
        gameModule.draw(cell);
        var testPlayer_X_sum = document.getElementById("player_O_sum");
        expect(testPlayer_X_sum.innerText).toBe('999');
    });


});