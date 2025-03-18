const monthCode = {
  jan: 1,
  feb: 4,
  mar: 4,
  apr: 0,
  may: 2,
  jun: 5,
  jul: 0,
  aug: 3,
  sep: 6,
  oct: 1,
  nov: 4,
  dec: 6,
};

const yearCode = {
  1600: 0,
  1700: 5,
  1800: 3,
  1900: 1,
  2000: 0,
};

const dayCode = {
  fri: 0,
  sat: 1,
  sun: 2,
  mon: 3,
  tue: 4,
  wed: 5,
  thu: 6,
};

let [day, month, year] = "30/07/2024".split("/");
// let date = new Date(year, month - 1, day).toDateString();

let date = (1 + 1 + 0 + 24 + 12)%7

console.log({
  monthCode,
  dayCode,
  yearCode,
  date,
});
