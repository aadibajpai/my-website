let systemThemeToggle = false;

function toggle() {
  // Initialising the toggle animation
  const themeButton = document.getElementById("unchecked");
  const buttonLabel = document.querySelector("#unchecked ~ label");
  const curtain = document.getElementById("darkthemecurtain");
  const svg5 = document.getElementsByClassName("st5");
  const svg3 = document.getElementsByClassName("st3");
  const svg4 = document.getElementsByClassName("st4");
  const toggleSize = buttonLabel.getBoundingClientRect();
  curtain.style.left = `${toggleSize.left}px`;
  buttonLabel.style.zIndex = "999";
  curtain.style.display = "block";
  themeButton.disabled = true;
  requestAnimationFrame(() => {
    if (themeButton.value === "Enable Light Mode") {
      if (!systemThemeToggle) {
        localStorage.setItem("mode", "light");
      }
      curtain.style.transform = "translate(-2px, -3px)";
      curtain.addEventListener("transitionend", () => {
        // After ripple animation
        themeButton.value = "Enable Dark Mode";
        document.body.style.backgroundColor = "#f5f5f5";
        document.getElementById("header").style.backgroundColor = "#f5f5f5";
        document.getElementById("spn").style.color = "rgba(33,33,33,0.8)";
        svg5.forEach((el) => {
          el.style.fill = "rgba(0, 0, 0, 0.1)";
        });
        svg3.forEach((el) => {
          el.style.fill = "#f5f5f5";
        });
        svg4.forEach((el) => {
          el.style.fill = "#757575";
        });
        requestAnimationFrame(() => {
          curtain.addEventListener("transitionend", () => {
            // Clean up after animation
            buttonLabel.style.zIndex = "";
            curtain.style.left = "";
            curtain.style.opacity = "";
            curtain.style.display = "";
            curtain.style.transform = "";
            curtain.style.background = "";
            themeButton.disabled = false;
          }, {
            once: true
          });
          // Fade out overlay
          curtain.style.opacity = "0";
        });
      }, {
        once: true
      });
      requestAnimationFrame(() => {
        // Start the ripple animation
        const diameter = Math.sqrt(
          (window.innerWidth - toggleSize.left) ** 2 +
          (window.innerHeight - toggleSize.top) ** 2
        );
        const scale = diameter / 13;
        curtain.style.transform = `scale(${scale}) translate(${-19 / scale}px, ${-3 / scale}px)`;
        curtain.style.opacity = "1";
      });
    } else {
      if (!systemThemeToggle) {
        localStorage.setItem("mode", "dark");
      }
      curtain.style.transform = "translate(19px, -3px)";
      curtain.style.background = "rgb(32, 33, 36)";
      curtain.addEventListener("transitionend", () => {
        // After ripple animation
        themeButton.value = "Enable Light Mode";
        document.body.style.backgroundColor = "#202124";
        document.getElementById("header").style.backgroundColor = "#202124";
        document.getElementById("spn").style.color = "whitesmoke";
        svg5.forEach((el) => {
          el.style.fill = "rgba(255, 255, 255, 0.1)";
        });
        svg3.forEach((el) => {
          el.style.fill = "#212121";
        });
        svg4.forEach((el) => {
          el.style.fill = "#dfe0e4";
        });
        requestAnimationFrame(() => {
          curtain.addEventListener("transitionend", () => {
            // Clean up after animation
            buttonLabel.style.zIndex = "";
            curtain.style.left = "";
            curtain.style.opacity = "";
            curtain.style.display = "";
            curtain.style.transform = "";
            curtain.style.background = "";
            themeButton.disabled = false;
          }, {
            once: true
          });
          // Fade out overlay
          curtain.style.opacity = "0";
        });
      }, {
        once: true
      });
      requestAnimationFrame(() => {
        // Start the ripple animation
        const diameter = Math.sqrt(
          (window.innerWidth - toggleSize.left) ** 2 +
          (window.innerHeight - toggleSize.top) ** 2
        );
        const scale = diameter / 13;
        curtain.style.transform = `scale(${scale}) translate(${-2 / scale}px, ${-3 / scale}px)`;
        curtain.style.opacity = "1";
      });
    }
  });
  systemThemeToggle = false;
}

function checkMode() {
  let mode = localStorage.getItem("mode");
  // If user hasn't made a choice, use default theme
  if (mode === null) {
    // Check if system dark mode is on, otherwise use dark
    mode = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    // Don't save this as user preference
    systemThemeToggle = true;
  }
  if (mode === "light") {
    document.getElementById("unchecked").click();
  }
}

window.addEventListener("load", () => {
  checkMode();
  const checkbox = document.querySelector(".cbx");
  checkbox.addEventListener("click", () => toggle());
});
