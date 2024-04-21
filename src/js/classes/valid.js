export default class Valid {
  valid(ccn) {
    const ccnS = ccn.toString();
    let sum = 0;
    const parity = ccnS.length % 2;
    for (let i = 0; i < ccnS.length; i += 1) {
      let digit = Number(ccnS[i]);
      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return Number(sum % 10) === 0;
  }

  checkingValid() {
    this.input = document.querySelector(".input");
    this.btn = document.querySelector(".submit");
    this.valTrue = document.querySelector(".result_item_true");
    this.valFalse = document.querySelector(".result_item_false");
    this.btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (this.valid(this.input.value)) {
        this.valTrue.classList.add("active_result_true");
      } else {
        this.valFalse.classList.add("active_result_false");
      }
    });
  }
}
