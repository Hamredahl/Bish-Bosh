const bish = document.querySelector("#bish");
const bosh = document.querySelector("#bosh");
const limit = document.querySelector("#limit");

const btn = document.querySelector("#btnRun");
const output = document.querySelector("#outputDiv");

btn.addEventListener("click", bishBosh);

function bishBosh() {
  let outputString = "";
  for (let i = 1; i <= limit.value; i++) {
    let out = i;
    if (i % bish.value === 0) {
      out = 'Bish';
      if (i % bosh.value === 0) {
        out += '-Bosh';
      }
    } else if (i % bosh.value === 0) {
      out = 'Bosh';
    }
    outputString += out;
    if (i < limit.value) {
      outputString += ', ';
    }
  }
  output.innerHTML = outputString;
};
