/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/classes/valid.js
class Valid {
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
    this.btn.addEventListener("click", e => {
      e.preventDefault();
      if (this.valid(this.input.value)) {
        this.valTrue.classList.add("active_result_true");
      } else {
        this.valFalse.classList.add("active_result_false");
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/classes/cardInput.js
class Search {
  inputValue() {
    this.input = document.querySelector(".input");
    this.card = document.querySelectorAll(".icon_card_img");
    this.input.addEventListener("input", () => {
      if (/^34|^37/.test(this.input.value)) {
        this.card[0].classList.add("active_americ_ex");
      }
      if (/^36|^55{1}/.test(this.input.value)) {
        this.card[1].classList.add("active_Diners");
      }
      if (/^((64[4-9])|65|6011|622[126-925])/.test(this.input.value)) {
        this.card[2].classList.add("active_Discover");
      }
      if (/^(35(2[8-9]|[3-8][0-9]))/.test(this.input.value)) {
        this.card[3].classList.add("active_JCB");
      }
      if (/^5[1-4]/.test(this.input.value)) {
        this.card[4].classList.add("active_master_card");
      }
      if (/^2{1}/.test(this.input.value)) {
        this.card[5].classList.add("active_mir");
      }
      if (/^4{1}/.test(this.input.value)) {
        this.card[6].classList.add("active_visa");
      }
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const valid = new Valid();
valid.checkingValid();
const search = new Search();
search.inputValue();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;