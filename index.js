
function distanceFromHqInBlocks(number) {
    if (number < 42) {
        return (42 - number);
    }
    else {

        return (number - 42);
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(y, x) {
    if (y > x) {
        return ((y - x) * 264);
    }
    else
        return ((x - y) * 264);
}


function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance<= 400) {
        return 0;
    }
    if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance >= 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }
}