export default class Search {
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
