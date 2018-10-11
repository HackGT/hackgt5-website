var dayTitles = document.querySelectorAll(".day-container > div");
for (var i = 0; i < dayTitles.length; i++) {
    dayTitles[i].addEventListener("click", showDay);
}

function showDay(e) {
    for (var i = 0; i < dayTitles.length; i++) {
        dayTitles[i].classList.remove("selected");
    }
    e.target.classList.add("selected");

    var days = document.querySelectorAll(".event-container > .day");
    for (var i = 0; i < days.length; i++) {
        if (days[i].id === e.target.dataset.dayId) {
            days[i].classList.add("show");
        }
        else {
            days[i].classList.remove("show");
        }
    }
}
