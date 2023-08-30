let findDays = 6;
let findYear = 2023;

if (findYear % 4 == 0 && findYear % 100 !== 0 && findDays == 2) {
  console.log("its a leap year 29 days");
}
if (findYear % 400 == 0 && findDays == 2) {
  console.log("its leap year 29 days second step");
} else if (findDays == 4 || findDays == 6 || findDays == 9 || findDays == 11) {
  console.log("its has 30 days year");
} else {
  console.log("its has 31 days");
}
