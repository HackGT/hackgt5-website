// Change nav color on scroll
var lastSection = -1;
var navbar = document.getElementsByClassName('navbar')[0];
var navItems = document.getElementById('nav');
var logo = document.getElementById('svg-icon');
document.addEventListener('scroll', function(event){
    if(window.scrollY == 0){
        navbar.style.backgroundColor = 'transparent';
        logo.style.height = '70px';
        lastSection = -1;
        return;
    }
    logo.style.height = '1.5em';

    /* Recalculating section positions within event callback rather than once on load
       just in case an asset loads and changes a section position
    */

    var navBottom = navbar.getBoundingClientRect().bottom;
    var sections = document.getElementsByTagName('section');

    for(var i = sections.length - 1; i >= 0; i--){
        var sectionTop = sections[i].getBoundingClientRect().top;
        if(navBottom > sectionTop){
            if(lastSection != i){
                if(sections[i].classList.contains('dark-text')){
                    navItems.classList.add('dark-text');
                    navItems.classList.remove('light-text');
                }else{
                    navItems.classList.add('light-text');
                    navItems.classList.remove('dark-text');
                }

                var bgcolor = window.getComputedStyle(sections[i]).backgroundColor.match(/[.?\d]+/g);
                // When no bg is set or the alpha is 0, use a white bg in this case
                if(!bgcolor || bgcolor[3] == 0){
                    bgcolor = ['255', '255', '255', '1'];
                }
                var navBg = 'rgba(' + bgcolor[0] + ', ' + bgcolor[1] + ', ' + bgcolor[2] + ', 1)';
                navbar.style.backgroundColor = navBg;

                lastSection = i;
            }
            break;
        }
    }
});

var navLinks = navItems.getElementsByTagName('a');
for(var i = 0; i < navLinks.length; i++){    
    navLinks[i].onclick = function(event){
        var sectionId = this.href.substr(this.href.indexOf('#') + 1);
        if(scrollToDataAnchor(sectionId)){
            return false; // prevent default link action
        }
    }
}

if(window.location.hash){
    var sectionId = window.location.hash.substr(window.location.hash.indexOf('#') + 1);
    scrollToDataAnchor(sectionId);
}

function scrollToDataAnchor(value){
    var section = document.querySelector("section[data-anchor='" + value + "']");
    if(section){
        var scrollPosition = section.getBoundingClientRect().top + window.scrollY;
        window.scroll({top: scrollPosition, behavior: 'smooth'});
        return true;
    }

    return false;
}

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
