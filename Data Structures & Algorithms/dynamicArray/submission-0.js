class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array();
        this.length = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.getSize() === this.getCapacity()) this.resize()
        this.array.push(n)
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.array.pop()
    }

    /**
     * @returns {void}
     */
    resize() {
        this.length*=2
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.array.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.length;
    }
}
