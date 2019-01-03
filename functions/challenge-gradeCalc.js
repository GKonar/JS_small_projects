// GRADE - CALC

// let gradeCalc = function (studentScore, totalScore = 20) {
//     let percentScore = (studentScore / totalScore) * 100;

//     if (percentScore <= 59) {
//         console.log(`You got F (${percentScore}%)!`);
//     } else if (percentScore >= 60 && percentScore <= 69 ) {
//         console.log(`You got D (${percentScore}%)!`);
//     } else if (percentScore >= 70 && percentScore <= 79) {
//         console.log(`You got C (${percentScore}%)!`);
//     } else if (percentScore >= 80 && percentScore <= 89){
//         console.log(`You got B (${percentScore}%)!`);
//     } else {
//         console.log(`You got A (${percentScore}%)!`);
//     }

// }
const gradeCalc = function (studentScore, totalScore) {
    const percentScore = (studentScore / totalScore) * 100;

    if (typeof studentScore !== "number" || typeof totalScore !== "number") {
        throw Error('Value must be a number')
    }

    let gradeLetter = '';

    if (percentScore <= 59) {
        gradeLetter = 'F';
    } else if (percentScore <= 69) {
        gradeLetter = 'D';
    } else if (percentScore <= 79) {
        gradeLetter = 'C';
    } else if (percentScore <= 89){
        gradeLetter = 'B';
    } else {
        gradeLetter = 'A';
    }

    return console.log(`You got a ${gradeLetter} (${percentScore}%)`);
}

try {
    const result = gradeCalc(true, 4);
} catch (e) {
    console.log(e.message)
}