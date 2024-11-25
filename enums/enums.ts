// way1 just normal values
// enum seatChoice {
//     AISLE ,
//     MIDDLE,
//     WINDOW
// }

// way2  we can assign numbers in any order
// enum seatChoice {
//     AISLE=21 ,
//     MIDDLE=23,
//     WINDOW=43
// }

// way3  we can assign string values 
//  enum seatChoice {
//     AISLE="aisle" ,
//     MIDDLE="middle",
//     WINDOW="window"
// }

// way 4 use const to avoaid unnecessay code 

 const enum seatChoice {
    AISLE="aisle" ,
    MIDDLE="middle",
    WINDOW="window"
}

const seatUser = seatChoice.AISLE;
console.log(seatUser);

export{}