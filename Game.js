class Game {
    constructor(startWallet, mod) {
        this.mod = mod;
        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.panelA = new Panel(document.querySelector('.panelA'));
        this.panelB = new Panel(document.querySelector('.panelB'));
        this.panelC = new Panel(document.querySelector('.panelC'));
        this.wallet = new Wallet(startWallet, mod);
        this.result = new Result();
        this.stats = new Statistics();
        this.drawGame(this.mod);
        this.inputBid = document.getElementById("bid");
    }
    drawGame(mod) {
        const spanWallet = document.querySelector('.panel .wallet');
        const spanResult = document.querySelector(' .result');
        const spanGames_number = document.querySelector('.games_number');
        const spanLoose_games = document.querySelector('.loose_games');
        const spanWon_games = document.querySelector('.won_games');
        spanWallet.textContent = this.wallet.wallet;
        if (this.result.result) {
            spanResult.textContent = `Wygrałeś ${this.inputBid.value * mod}`
        } else if (!this.result.result && this.result.result !== "") spanResult.textContent = `przegrałeś ${this.inputBid.value}`
        spanGames_number.textContent = this.stats.totalGames;
        spanLoose_games.textContent = this.stats.loosGames;
        spanWon_games.textContent = this.stats.winGames;
    }
    startGame() {
        if (this.inputBid.value > this.wallet.wallet && this.wallet.wallet !== 0) {
            return alert(`masz za mało kasy, możesz postawić maks ${this.wallet.wallet}`)
        } else if (this.wallet.wallet == 0) return alert(`Koniec gry, nie masz już kasy`)
        this.panelA.randomColor();
        this.panelB.randomColor();
        this.panelC.randomColor();
        this.result.gameResult([this.panelA.color, this.panelB.color, this.panelC.color, ])
        this.wallet.changeWallet(this.inputBid.value, this.result.result)
        this.stats.changeStats(this.result.result)
        this.drawGame(this.mod);
    }
}