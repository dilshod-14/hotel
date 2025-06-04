function printNumbers() {
  let i = 1;
  const timer = setInterval(() => {
    console.log(i++);
    if (i > 5) clearInterval(timer);
  }, 1000);
}

printNumbers();
