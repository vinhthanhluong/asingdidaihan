export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });


    $('.achi-text').on('click', function () {
        var myPlayer = document.getElementById('youtube');
        myPlayer.stopVideo();
    });

    if ($('.achi-video').length) {
        var player = new YouTubeToHtml5({
            selector: '.youtube-video',
            attribute: 'data-yt',
            autoload: true,
            withAudio: true,
        });

        player.load();

        player.addAction('.achi-video', function (element) {
            element.classList.add('is-loading');
        });
    }




}