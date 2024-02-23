class RoundHole {

    constructor(value: number) {
        this.radius = value;
    }

    getRadius(): number {
        return this.radius;
    }

    fits(peg: RoundPeg): boolean {
        return this.getRadius() >= peg.getRadius();
    }

    private radius: number;
};