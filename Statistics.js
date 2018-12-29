class Statistics {
    constructor() {
        this.winGames = 0;
        this.loosGames = 0;
        this.totalGames = 0;
    }
    changeStats(result) {
        this.totalGames++;
        if (result) {
            this.winGames++;
        } else {
            this.loosGames++
        }
    }
}