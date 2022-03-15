const pages = [];
Array.from({ length: 10 }, (_, index) => index + 1).forEach(page => {
  pages.push(console.log(page));
});

const arr = [1, 2, 3, 4, 5];

const arrArg = arr.map(el => el ** 2);
console.log(arrArg);

const funcArr = () => {
  const sad = arr.map(el => el ** 3);
  return console.log(sad);
};
funcArr();
