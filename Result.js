class Result {
    constructor() {
        this.result = "";
    }
    gameResult(colors) {
        if (colors[0] === colors[1] && colors[1] === colors[2]) {
            this.result = true;
            return true;
        } else {
            this.result = false;
            return false
        }
    }

}