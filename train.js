//            CALLBACK

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling",// 0 - 20
//     "to'gri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashini boshlang", // 30 - 40
//     "siz kuchli bolgan narsalarni qiling", //40 - 50
//     "yoshlarga investitsiya qiling ", // 50 - 60
//     "endi dam oling foydsasi yoq", // 60
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log("Passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("Javob:", data);
//     }
// });
// console.log("passed here 1");









//                 ASYNC

// async deb function define qilinadi va callback kerak emas. Agar error kerak bolsa biz uni throw qilishimiz kerak
// aysnc funtction ichida core module functionlar ishlamaydi like setTimeOut

// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolveInclude, reject) => {
//             setTimeout(() => {
//                 resolveInclude(list[5])
//             }, 5000);
//         });
//         //     setTimeout(function () {
//         //         return (null, list[5]);
//         //     }, 5000);
//     }
// }

// console.log("Passed here 0");

// maslahatBering(25)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch(err => {
//         console.log("Error:", err);
//     })
// console.log("Passed here 1"); 



//async/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(31);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();




// Masalani izohi
// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

function numOfRepeats(input, checking) {
    if (!input || !checking) return 0; // handle empty inputs

    const a = input.toLowerCase();
    const b = checking.toLowerCase();

    let count = 0;
    b.split("").forEach(letter => {
        if (letter === a) {
            count++;
        }
    });
    return count;
}
// Test example
console.log(`Number of occurances is: ${numOfRepeats("U", "Ronaldo says: SIUUUUUUUUUUUU ")}`); 