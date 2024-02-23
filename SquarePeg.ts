class SquarePeg {
    constructor(value: number) {
        this.width = value;
    }
    getWidth(): number {
        return this.width;
    }
    private width: number;
}