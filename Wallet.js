class Wallet {
    constructor(wallet = 100, mod = 1, ) {
        this.wallet = wallet;
        this.mod = mod
    }
    changeWallet(bid, result) {
        if (bid > this.wallet) {
            return alert(`masz za mało kasy, możesz postawić maks ${this.wallet}`)
        }
        if (result) {
            this.wallet += bid * this.mod;
        } else {
            this.wallet -= bid;
        }
    }
}
// ta klasa będzie przechowywać zawartość portfela i będzie dodawać lub odejmować w zależności od wygranej.
// można ustalić wielkość portfela na początku oraz modyfikator, który jest mnożnikiem wygranej.