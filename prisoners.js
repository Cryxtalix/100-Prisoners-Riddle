function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let boxes = []

let generateBoxes = () => {
    let prisonerList = []
    let boxes = [];
    for (let i = 1; i < 101; i++) {
        prisonerList.push(i);
    }
    for(let i = 0; i < 100; i++) {
        let int = getRndInteger(0, 99 - i)
        boxes.push(prisonerList[int])
        prisonerList.splice(int, 1)
    }
    return boxes
}

let search = (target, newNum, attempts) => {
    if(boxes[newNum - 1] == target && attempts < 51) {
        return true;
    }
    if (attempts > 50) {
        return false
    }
    attempts += 1;
    newNum = boxes[newNum - 1]
    return search(target, newNum, attempts)
}

//One experiement
let prisonerExperiment = () => {
    boxes = []
    boxes = generateBoxes()
    for(let i = 1; i < 101; i++) {
        if (search(i, i, 1) == false) {
            return false;
        }
    }
    return true;
}

//multiple experiments
let multiExperiments = (noOfAttempts) => {
    let success = 0;
    for(let i = 1; i < noOfAttempts; i++) {
        if (prisonerExperiment() == true) {
            success += 1
        }
    }
    return (success / noOfAttempts)
}

console.log(multiExperiments(10000))