class SwitchTheme {
  htmlElm = document.documentElement;
  formCheckInput = document.querySelector(".form-check-input.day-night");
  constructor() {
    this.formCheckInput.addEventListener("change", () => {
      this.htmlElm.classList.toggle("dark");
      this.formCheckInput.style.transitionDuration = "0.15s";

      if (this.htmlElm.classList.contains("dark")) {
        window.localStorage.setItem("theme", "dark");
      } else {
        window.localStorage.setItem("theme", "light");
      }
    });
  }
}
export default SwitchTheme;
