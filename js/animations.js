new fullpage('#fullpage', {
    autoScrolling:true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    anchors: ['splash', 'event', 'tracks', 'schedule', 'faq', 'registration', 'about', 'sponsors'],
    menu: '#nav',
    responsiveWidth: 767,
    responsiveHeight: 690,
    onLeave: function(origin, destination, direction) {
        var dark_text_pages = [2, 4, 6];
        if (dark_text_pages.indexOf(destination.index) != -1) {
            document.getElementById('scroll-nav').classList.add('dark-text');
            document.getElementById('nav').classList.add('dark-text');
            document.querySelectorAll('#social-media path').forEach(function(elem) {
                elem.setAttribute('fill', '#0c0c51');
            });
            document.querySelectorAll('#svg-icon *').forEach(function(elem) {
                elem.classList.add('dark-text');
            });
        } else {
            document.getElementById('scroll-nav').classList.remove('dark-text');
            document.getElementById('nav').classList.remove('dark-text');
            document.querySelectorAll('#social-media path').forEach(function(elem) {
                elem.setAttribute('fill', '#fff');
            });
            document.querySelectorAll('#svg-icon *').forEach(function(elem) {
                elem.classList.remove('dark-text');
            });
        }
    }
}); 

// for countdown
var startDate = new Date('2018-10-19T21:00:00-04:00');

var weeks = document.getElementById('weeks');
var days = document.getElementById('days');
var hours = document.getElementById('hours');

function updateDate() {
    var dateDelta = (startDate - Date.now()) / 1000;
    var hourDelta = dateDelta / (60 * 60);
    var dayDelta = hourDelta / 24;
    var weekDelta = dayDelta / 7;

    hourDelta %= 24;
    dayDelta %= 7;

    weeks.textContent = Math.floor(weekDelta);
    days.textContent = Math.floor(dayDelta);
    hours.textContent = Math.floor(hourDelta);
}

updateDate();
var secondsToHourMark = 3600 - ((Date.now() / 1000) % 3600);
setTimeout(function() {
    updateDate();
    setInterval(updateDate, 3600 * 1000);
}, Math.round(secondsToHourMark * 1000));

// scroll up/down with the rectangles on the side:
var up = document.getElementById('up');
up.onclick = function() {
    fullpage_api.moveSectionUp();
}

var down = document.getElementById('down');
down.onclick = function() {
    fullpage_api.moveSectionDown();
}

document.querySelectorAll('div.track-option').forEach(function(option) {
    option.onclick = function() {
        document.querySelector('div.track.show').classList.remove('show');
        var divToShow = option.dataset.track;
        document.getElementById(divToShow).classList.add('show');
    }
});