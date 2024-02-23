const hole = new RoundHole(5);
const roundPeg = new RoundPeg(5);
console.log(hole.fits(roundPeg));

const small_sqpeg = new SquarePeg(5);
const large_sqpeg = new SquarePeg(10);
const small_sqpeg_adapter = new SquarePegAdaptor(small_sqpeg)
const large_sqpeg_adapter = new SquarePegAdaptor(large_sqpeg)
console.log(hole.fits(small_sqpeg_adapter)); // true
console.log(hole.fits(large_sqpeg_adapter)); // false