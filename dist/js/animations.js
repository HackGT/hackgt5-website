// Change nav color on scroll

var lastSection = -1;
document.addEventListener('scroll', function(event){
    /* Recalculating section positions within event callback rather than once on load
       just in case an asset loads and changes a section position */
    var navBottom = document.getElementById('nav').getBoundingClientRect().bottom;
    var sections = document.getElementsByTagName('section');

    for(var i = sections.length - 1; i >= 0; i--){
        var sectionTop = sections[i].getBoundingClientRect().top;
        if(navBottom > sectionTop){
            if(lastSection != i){
                if(sections[i].classList.contains('dark-text')){
                    document.getElementById('nav').classList.add('dark-text');
                }else{
                    document.getElementById('nav').classList.remove('dark-text');
                }

                var color = window.getComputedStyle(sections[i]).backgroundColor.match(/[.?\d]+/g);
                if(color[3] == 0){
                    color = ['255', '255', '255', '1'];
                }
                var navBg = 'rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1)';
                document.getElementsByClassName('navbar')[0].style.backgroundColor = navBg;

                lastSection = i;
            }
            break;
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
        document.querySelector('div.track-option h3.active-track').classList.remove('active-track');

        var track = option.dataset.track;
        document.getElementById(track).classList.add('show');
        document.querySelector(`.${track} h3`).classList.add('active-track');
    }
});
