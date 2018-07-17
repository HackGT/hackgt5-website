new fullpage('#fullpage', {
    autoScrolling:true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    anchors: ['splash', 'event', 'paths', 'schedule', 'faq', 'registration', 'about', 'sponsors'],
    menu: '#nav',
    scrollOverflow: true,
    onLeave: function(origin, destination, direction) {
        var dark_text_pages = [2, 4, 6];
        if (dark_text_pages.indexOf(destination.index) != -1) {
            document.getElementById('nav').classList.add('dark-text');
            document.querySelectorAll('#social-media path').forEach(function(elem) {
                elem.classList.add('dark-text');
            });
            document.querySelectorAll('#svg-icon *').forEach(function(elem) {
                elem.classList.add('dark-text');
            });
        } else {
            document.getElementById('nav').classList.remove('dark-text');
            document.querySelectorAll('#social-media path').forEach(function(elem) {
                elem.classList.remove('dark-text');
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


// tracks
document.querySelectorAll('div.track-option').forEach(function(option) {
    option.onclick = function() {
        document.querySelector('div.track.show').classList.remove('show');
        var divToShow = option.dataset.track;
        document.getElementById(divToShow).classList.add('show');
    }
});

// turn on/off scroll animations
var media = window.matchMedia('(max-height: 600px), only screen and (max-width: 1002px)');
media.addListener(adjustScroll);
adjustScroll(media);

function adjustScroll(media) {
    if (media.matches) {
        fullpage_api.setAutoScrolling(false);
    } else {
        fullpage_api.setAutoScrolling(true);
    }
}
