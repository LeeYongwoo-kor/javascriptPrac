function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getBts() {
  await delay(1000);
  return "Dynamite";
}

async function getTwice() {
  await delay(2000);
  return "TT";
}

function pickAllIdols() {
  return Promise.all([getBts(), getTwice()]).then((idol) => idol);
}
pickAllIdols().then(console.log);

function pickOnlyOne() {
  return Promise.race([getBts(), getTwice()]);
}
pickOnlyOne().then(console.log);
