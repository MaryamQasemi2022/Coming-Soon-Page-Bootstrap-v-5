import CounterDown from "./CounterDown.js";
import SwitchTheme from "./SwitchTheme.js";

const CounterDownObject = new CounterDown();
const SwitchThemeObject = new SwitchTheme();

class Load {
  loading = () => {
    // SwitchTheme
    if (window.localStorage.getItem("theme") === "dark") {
      SwitchThemeObject.htmlElm.classList.add("dark");
      SwitchThemeObject.formCheckInput.style.transitionDuration = "0s";
      SwitchThemeObject.formCheckInput.checked = true;
    }

    // counterDown
    if (localStorage.getItem("distance")) {
      let distance = localStorage.getItem("distance");
      CounterDownObject.start(distance);
    } else {
      localStorage.setItem("distance", CounterDownObject.distance);
      CounterDownObject.start(CounterDownObject.distance);
    }
  };
}

const loadObject = new Load();
window.loadObject = loadObject;
