class Field {
    constructor(id, width, length, sprinklers) {
        this._id = id;
        this._width = width;
        this._length = length;
        this._sprinklers = sprinklers;
    }

    get id() {
        return this._id;
    }
    get width() {
        return this._width;
    }
    get length() {
        return this._length;
    }
    get square() {
        return this._width * this._length;
    }
    getSquareAsync(callback) {
        setTimeout(() => {
           const square = this._width * this._length;
            callback(square);
        }, 5000);
    }
    getSquareByPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const square = this._width * this._length;
                resolve(square);
            }, 5000)
        })
    }
    addSprinkler(sprinkler) {
        this._sprinklers.push(sprinkler);
    }
    removeSprinkler(id) {
        this._sprinklers = this._sprinklers.filter(sprinkler => sprinkler.id !== id);
    }
    get sprinklers() {
        return this._sprinklers;
    }
    triggerSprinklers(state) {
        console.log(this._sprinklers);
        this._sprinklers.forEach(sprinkler => sprinkler.onOff(state));
    }
}
