// Choose current station
const stations = document.querySelectorAll(".list__item");
const valueHolder = document.querySelector(".station__value");
const stationHolder = document.querySelector(".footer__text--station");

// current radio station highlight
const list = document.querySelector(".list");
const listItem = list.querySelectorAll(".list__item");

// On Off switch
const slider = document.querySelector(".slider");
const qualitySwitch = document.querySelector(".footer__text span");

// Choose current station
[...stations].map(e => {
    e.addEventListener("click", function() {
        valueHolder.textContent = this.innerText.slice(-6).trim();
        stationHolder.textContent = this.textContent
            .replace(/\d+/g, "")
            .replace(",", "");
    });
});

// Current radio station highlight
[...listItem].map(e => {
    e.addEventListener("click", function() {
        let current = document.querySelector(".list__item--active");

        current.className = current.className.replace(
            " list__item--active",
            " "
        );
        this.className += " list__item--active";
    });
});

// On Off switch
slider.addEventListener("click", function() {
    if (qualitySwitch.textContent.includes("(off)")) {
        qualitySwitch.textContent = "(on)";
    } else {
        qualitySwitch.textContent = "(off)";
    }
});
