(async function() {
    const sensor1 = new Sensor('1001', 'humidity');
    const sensor2 = new Sensor('1002', 'humidity');
    const sensorsArr = [sensor1, sensor2];

    const sprinkler1 = new Sprinkler('001', 220, 80, sensorsArr);
    const sprinkler2 = new Sprinkler('002', 220, 80, sensorsArr);
    const sprinklersArr = [sprinkler1, sprinkler2];

    const mainField = new Field('1', 100, 200, sprinklersArr);
    const reserveField = new ReserveField('21', 80, 180, sprinklersArr, 'grass');
    const headGardener = new Gardener('Bob', 'staff', '100', mainField);
    const sunSensor = new Sensor('1000', 'sun');
    const additionalSprinkler = new Sprinkler('010', 220, 80, sensorsArr);

    console.log(mainField);
    console.log(reserveField);
    console.log(headGardener);
    console.log(sunSensor);
    console.log(additionalSprinkler);

    headGardener.onWatering(true);
    mainField.addSprinkler(additionalSprinkler);

    mainField.getSquareAsync(square => {
        console.log(square);
        reserveField.getSquareAsync(square => {
            console.log(square);
        })
    });

    const testPromise = mainField.getSquareByPromise();
    testPromise.then(sq => {
        console.log(sq*2);
        
        return sq;
    })
    .then(sqr => console.log(sqr*3));
    
    
    
    async function getSquare() {
        return testPromise;
    };

    try {
        const square = await testPromise;
        console.log(square);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();