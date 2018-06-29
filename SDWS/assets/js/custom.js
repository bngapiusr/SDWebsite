var $iframe = $('iframe'),
    $videoLink = $('.video-link'),
    playerTemplate = '<div class="player"><div class="player__video"><div class="video-filler"></div><button class="video-close">&times;</button><iframe class="video-iframe" src="{{iframevideo}}" frameborder="0" allowfullscreen></iframe></div><div/>';


$videoLink.on('click', function(e) {
    var localTemplate = '',
        videoWidth = parseInt($(this).data('width')),
        videoHeight = parseInt($(this).data('height')),
        videoAspect = (videoHeight / videoWidth) * 100,
        // elements
        $player = null,
        $video = null,
        $close = null,
        $iframe = null;

    e.preventDefault();

    localTemplate = playerTemplate.replace('{{iframevideo}}', $(this).prop('href'));

    $player = $(localTemplate);

    $player
        .find('.video-filler')
        .css('padding-top', videoAspect + '%');

    $close = $player
        .find('.video-close')
        .on('click', function() {
            $(this).off().closest('.player').hide().remove();
        });

    $player.appendTo('body').addClass('js--show-video');
});

$(document).ready(function() {

    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);



    // when the modal is opened autoplay it
    $('#myModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?rel=0&showinfo=0&modestbranding=1&autoplay=1");
    })


    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })




    // document ready
});
