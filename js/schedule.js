function showDay(day) {
    document.querySelectorAll("div.day-container > div").forEach(function(item, index) {
        item.classList.remove("selected");
    });
    document.getSelection().anchorNode.parentElement.classList.add("selected");
    var dayElem = document.getElementById(day);
    document.querySelectorAll(".day.show").forEach(function(item, index) {
        item.classList.remove("show");
    });

    dayElem.classList.add("show");
}