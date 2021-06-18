class Sensor {
    constructor(id, type) {
        this._id = id;
        this._type = type;
    }

    get id() {
        return this._id;
    }
    get type() {
        return this._type;
    }
    get sensitivity() {
        return randomInteger(1, 5);
    }
}
