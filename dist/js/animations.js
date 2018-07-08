new fullpage('#fullpage', {
    autoScrolling:true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    anchors: ['splash', 'event', 'tracks', 'schedule', 'faq', 'registration', 'about', 'sponsors'],
    menu: '#nav',
    onLeave: function(origin, destination, direction) {
        if (destination.index === 2 || destination.index === 4 || destination.index === 6) {
            document.getElementById('scroll-nav').classList.add('dark-text');
            document.getElementById('nav').classList.add('dark-text');
            document.querySelectorAll('#social-media path').forEach(function(elem) {
                elem.setAttribute('fill', '#0c0c51');
            });
        }

        if (destination.index === 1 || destination.index === 3 || destination.index === 5 || destination.index === 7) {
            document.getElementById('scroll-nav').classList.remove('dark-text');
            document.getElementById('nav').classList.remove('dark-text');
            document.querySelectorAll('#social-media path').forEach(function(elem) {
                elem.setAttribute('fill', '#fff');
            })
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