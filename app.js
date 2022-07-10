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

let enteredNum = 0;

const onNumBtn = (num) => {
  enteredNum = enteredNum * 10 + Number(num);
  disp2.innerHTML = enteredNum; 
};

const onClearBtn = () => {
    enteredNum = 0;
    disp2.innerHTML = 0;
    disp1.innerHTML = "";
};

const onDeleteBtn = () => {
    enteredNum = Math.trunc(enteredNum / 10);
    disp2.innerHTML = enteredNum;
};

const onPercentBtn = () => {
    enteredNum /= 100;
    disp2.innerHTML = enteredNum;
};

const onOpBtn = (op) => {
    disp1.innerHTML = `${disp2.innerHTML}${op}`
    disp2.innerHTML = 0;
    enteredNum = 0;
};


acBtn.addEventListener("click", onClearBtn);
delBtn.addEventListener("click", onDeleteBtn);
percentBtn.addEventListener("click", onPercentBtn);
// divBtn.addEventListener("click", onOpBtn);
// mulBtn.addEventListener("click", onOpBtn);
// subBtn.addEventListener("click", onOpBtn);
addBtn.addEventListener("click", onOpBtn.bind(this, "+"));
// decBtn.addEventListener("click", onOpBtn);
// eqBtn.addEventListener("click", onEqBtn);
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
