new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
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