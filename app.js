const allBtns = document.querySelectorAll(".btn");
const disp1 = document.getElementById("disp1");
const disp2 = document.getElementById("disp2");
const acBtn = allBtns[0];
const delBtn = allBtns[1];
const percentBtn = allBtns[2];
const divBtn = allBtns[3];
const _7Btn = allBtns[4];
const _8Btn = allBtns[5];
const _9Btn = allBtns[6];
const mulBtn = allBtns[7];
const _4Btn = allBtns[8];
const _5Btn = allBtns[9];
const _6Btn = allBtns[10];
const subBtn = allBtns[11];
const _1Btn = allBtns[12];
const _2Btn = allBtns[13];
const _3Btn = allBtns[14];
const addBtn = allBtns[15];
const _0Btn = allBtns[16];
const decBtn = allBtns[17];
const eqBtn = allBtns[18];

let enteredNum = "";
let currTotal = "";

const onNumBtn = (input) => {
  enteredNum += input;
  disp2.innerHTML = enteredNum;
};

const onDecBtn = (input) => {
  if (!enteredNum.includes(".")) {
    enteredNum += ".";
    disp2.innerHTML = enteredNum;
  }
};

const onOpBtn = (op) => {
  if (disp2.innerHTML && disp1.innerHTML) {
    enteredNum = +parseFloat(disp2.innerHTML).toFixed(2);
    currTotal = +parseFloat(disp1.innerHTML.slice(0, -1)).toFixed(2);
    const prevOp = disp1.innerHTML.slice(-1);
    switch (prevOp) {
      case "+":
        currTotal += enteredNum;
        break;
      case "-":
        currTotal -= enteredNum;
        break;
      case "*":
        currTotal *= enteredNum;
        break;
      case "/":
        currTotal /= enteredNum;
        break;
    }
    currTotal = String(+parseFloat(currTotal).toFixed(2)) + op;
    disp1.innerHTML = currTotal;
    enteredNum = "";
    disp2.innerHTML = enteredNum;
  } else if (disp2.innerHTML && !disp1.innerHTML) {
    enteredNum += op;
    currTotal = enteredNum;
    disp1.innerHTML = currTotal;
    enteredNum = "";
    disp2.innerHTML = enteredNum;
  }
};

const onEqBtn = () => {
  if (disp1.innerHTML && disp2.innerHTML) {
    enteredNum = +parseFloat(disp2.innerHTML).toFixed(2);
    currTotal = +parseFloat(disp1.innerHTML.slice(0, -1)).toFixed(2);
    const prevOp = disp1.innerHTML.slice(-1);
    switch (prevOp) {
      case "+":
        enteredNum += currTotal;
        break;
      case "-":
        enteredNum -= currTotal;
        enteredNum *= -1;
        break;
      case "*":
        enteredNum *= currTotal;
        break;
      case "/":
        enteredNum /= currTotal;
        enteredNum = enteredNum ** -1;
        break;
    }
    enteredNum = String(+parseFloat(enteredNum).toFixed(2));
    disp2.innerHTML = enteredNum;
    currTotal = "";
    disp1.innerHTML = currTotal;
  } else if (disp1.innerHTML && !disp2.innerHTML) {
    currTotal = disp1.innerHTML.slice(0, -1);
    enteredNum = currTotal;
    disp2.innerHTML = enteredNum;
    currTotal = "";
    disp1.innerHTML = currTotal;
  }
};

const onClearBtn = () => {
  enteredNum = "";
  currTotal = "";
  disp1.innerHTML = currTotal;
  disp2.innerHTML = enteredNum;
};



acBtn.addEventListener("click", onClearBtn);
// delBtn.addEventListener("click", onDeleteBtn);
// percentBtn.addEventListener("click", onPercentBtn);
divBtn.addEventListener("click", onOpBtn.bind(this, "/"));
mulBtn.addEventListener("click", onOpBtn.bind(this, "*"));
subBtn.addEventListener("click", onOpBtn.bind(this, "-"));
addBtn.addEventListener("click", onOpBtn.bind(this, "+"));
decBtn.addEventListener("click", onDecBtn);
eqBtn.addEventListener("click", onEqBtn);
_0Btn.addEventListener("click", onNumBtn.bind(this, "0"));
_1Btn.addEventListener("click", onNumBtn.bind(this, "1"));
_2Btn.addEventListener("click", onNumBtn.bind(this, "2"));
_3Btn.addEventListener("click", onNumBtn.bind(this, "3"));
_4Btn.addEventListener("click", onNumBtn.bind(this, "4"));
_5Btn.addEventListener("click", onNumBtn.bind(this, "5"));
_6Btn.addEventListener("click", onNumBtn.bind(this, "6"));
_7Btn.addEventListener("click", onNumBtn.bind(this, "7"));
_8Btn.addEventListener("click", onNumBtn.bind(this, "8"));
_9Btn.addEventListener("click", onNumBtn.bind(this, "9"));
