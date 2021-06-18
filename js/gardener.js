class Gardener {
    constructor(name, department, employeedId, availableField) {
        this._name = name;
        this._department = department;
        this._employeedId = employeedId;
        this._availableField = availableField;
    }

    get name() {
        return this._name;
    }
    get department() {
        return this._department;
    }
    get employeedId() {
        return this._employeedId;
    }
    set availableField(field) {
        this._availableField = field;
    }
    get availableField() {
        return this._availableField;
    }
    onWatering(state) {
        this._availableField.triggerSprinklers(state);
    }
}