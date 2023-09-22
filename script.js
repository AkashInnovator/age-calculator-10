const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector(".calc p");
input.max = new Date().toISOString().split("T")[0];
console.log(input.value);
btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please Select the Date");
  } else {
    let birthday = new Date(input.value);

    let b_date = birthday.getDate();
    let b_month = birthday.getMonth() + 1;
    let b_year = birthday.getFullYear();

    let c_year = new Date().getFullYear();
    let c_month = new Date().getMonth() + 1;
    let c_date = new Date().getDate();

    let y, m, d;
    y = c_year - b_year;
    if (c_month >= b_month) {
      m = c_month - b_month;
      // console.log(m);
    } else {
      y--;
      m = 12 + c_month - b_month;
    }
    if (c_date >= b_date) {
      d = c_date - b_date;
      // console.log(m);
    } else {
      m--;
      d = getdays(c_date, c_month) + c_date - b_date;
    }
    if (m < 0) {
      m = 11;
      y--;
    }
    p.innerHTML = `You are <span>${y} Year</span> <span>${m} Month</span> <span>${d} days</span> old`;
  }
});
function getdays(y, m) {
  return new Date(y, m, 0).getDate();
}
