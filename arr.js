const pages = [];
Array.from({ length: 10 }, (_, index) => index + 1).forEach(page => {
  pages.push(console.log(page));
});
