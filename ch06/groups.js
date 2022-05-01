class Group {
    constructor(arr) {
        this.array = Group.from(arr)
        this.currentIndex = 0
    }
    static from(arr) {
        this.array = []
        arr.forEach(val => {
            if (!this.array.includes(val)) {
                this.array.push(val)
            }
        })
        return this.array
    }
    add(value) {
        if (this.array.includes(value)) return false
        else {
            this.array.push(value)
        }
    }
    delete(value) {
        if (this.array.includes(value)) return this.array.splice(this.array.indexOf(value), 1)
        else return false
    }
    has(value) {
        if (this.array.includes(value)) return true
        else return false
    }
    next() {
        this.currentIndex++
        if (this.currentIndex == this.array.length) this.currentIndex = 0
        return array[currentIndex]
    }
}
let group = new Group([10,10,10,10,20]);
console.log(group)
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(30);
console.log(group.has(10));
// → false

console.log(Group.from([1,2,3]))
for (let value of Group.from(['a','a','a','b','c'])) {
    console.log(value)
}