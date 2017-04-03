var historyModule = (function () {
    var _xWins = 0;
    var _oWins = 0;
    var _ties = 0;

    var _xWon = function () {
        _xWins++;
    }

    var _oWon = function () {
        _oWins++;
    }

    var _wasDraw = function () {
        _ties++;
    }

    var _getTimesXWon = function () {
        return _xWins;
    }

    var _getTimesOWon = function () {
        return _oWins;
    }

    var _getTimesWasDraw = function () {
        return _ties;
    }

    return {
        xWon: _xWon,
        oWon: _oWon,
        wasDraw: _wasDraw,
        getTimesXWon: _getTimesXWon,
        getTimesOWon: _getTimesOWon,
        getTimesWasDraw: _getTimesWasDraw
    }
})();