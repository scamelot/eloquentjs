class Vec {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    plus(vector) {
        this.x += vector.x
        this.y += vector.y
        return this
    }
    minus(vector) {
        this.x -= vector.x
        this.y -= vector.y
        return this
    }
    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2)
    }
}
let myVec = new Vec(1,2)
let otherVec = new Vec(2,3)


console.log(myVec)

console.log(myVec.minus(otherVec))
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5