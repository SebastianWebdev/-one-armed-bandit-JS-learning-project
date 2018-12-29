class Panel {
    constructor(panel, colors = ['red', 'green', 'blue']) {
        this.panel = panel;
        this.colors = colors;
        this.color = "gray";
        this.changeDivColor();
    }
    randomColor() {
        let index = Math.floor(Math.random() * this.colors.length);
        this.color = this.colors[index];
        this.changeDivColor();
        return this.colors[index];
    }
    changeDivColor(color = this.color) {
        this.panel.style.backgroundColor = color;
    }
}