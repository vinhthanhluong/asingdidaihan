export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });


    // if ($('.achi-video').length) {


    //     var player = new YouTubeToHtml5({
    //         selector: '.youtube-video',
    //         attribute: 'data-yt',
    //         withAudio: true,
    //         autoload: false, // Disable loading videos on init, `.load()` method is required.

    //     });

    //     // Add loading class to video element
    //     player.addAction('api.before', function (element) {
    //         element.classList.add('is-loading');
    //     });

    //     // Remove loading class after API HTTP request completes.
    //     player.addAction('api.after', function (element) {
    //         element.classList.remove('is-loading');
    //     });

    //     // Now we can load videos.
    //     player.load();

    // }


    // if ($('.achi-video').length) {
    //     const player = new Plyr(document.querySelectorAll('.videoasd'), {
    //         // autoplay: 'true',
    //         autopause: 'false',
    //     });

    // }

    if ($('.achi-video').length) {
        var player = $('.youtube-video').mediaelementplayer({
            success: function (mediaElement, domObject) {
                
            },
        });
    }

   
     

        
   

  









}