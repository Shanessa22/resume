
// <!-- 外接YT -->
$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");

    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })
});
// <!-- 外接YT -->

// totop function
$('.gotop').click(function() {
	$('html,body').scrollTop({
        top: 0
    }, 800)
})
