class ReserveField extends Field {
    constructor(id, width, length, isActive, sprinklers, surface) {
        super(id, width, length, isActive, sprinklers);
        this._surface = surface;
    }

    get surface() { 
        return this._surface;
    }
}