class Sprinkler {
    constructor(id, power, capacity, sensors) {
        this._id = id;
        this._power = power;
        this._capacity = capacity;
        this._sensors = sensors;
    }
    
    get id() {
        return this._id;
    }
    get power() {
        return this._power;
    }
    set capacity(capacity) {
        this._capacity = capacity;
    }
    get capacity() {
        return this._capacity;
    }
    addSensor(sensor) {
        this._sensors.push(sensor);
    }
    removeSensor(id) {
        this._sensors = this._sensors.filter(sensor => sensor.id !== id);
    }
    get sensors() {
        return this._sensors;
    }
    onOff(state) {
        if (state === false) {
            this._capacity = 0;
            return;
        }

        const MIN_ENABLE_SENSITIVITY = 2;
        const MAX_ENABLE_SENSITIVITY = 4;
        const MIN_ENABLE_CAPACITY = 30;
        const AVERAGE_ENABLE_CAPACITY = 55;
        const MAX_ENABLE_CAPACITY = 80;

        const sprinklerSensorsSensitivity = this._sensors.map(sensor => sensor.sensitivity);
        const sensorsSensitivity = sprinklerSensorsSensitivity.reduce((sum, sensitivity) => sum + sensitivity, 0);
        const averageSensitivity = sensorsSensitivity / this._sensors.length;
        
        if (averageSensitivity >= MIN_ENABLE_SENSITIVITY && averageSensitivity <= MAX_ENABLE_SENSITIVITY) {
            this.capacity = AVERAGE_ENABLE_CAPACITY;
        } else if (averageSensitivity < MIN_ENABLE_SENSITIVITY) {
            this.capacity = MAX_ENABLE_CAPACITY;
        } else {
            this.capacity = MIN_ENABLE_CAPACITY;
        }
    };
}