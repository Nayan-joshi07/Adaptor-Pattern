class SquarePegAdaptor extends RoundPeg {

    constructor(peg: SquarePeg) {
        super(5);
        this.squarePeg = peg;
    }
    // SquarePegAdaptor(peg : SquarePeg){
    //     this.squarePeg = peg;
    // }

    getRadius(): number {
        return this.squarePeg.getWidth() * Math.sqrt(2) / 2;
    }

    private squarePeg: SquarePeg;
}