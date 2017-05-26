function main() {

    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    }


    $('#enrichment').click(function (event) {
        event.preventDefault();
        $('#goHere').scrollView();
    });

    $('#home').click(function (event) {
        event.preventDefault();
        $('#goHome').scrollView();
    });

    $('#home').click(function (event) {
        event.preventDefault();
        $('#goHome').scrollView();
    });

    $('#sports').click(function (event) {
        event.preventDefault();
        $('#goSports').scrollView();
    });

    $('#about').click(function (event) {
        event.preventDefault();
        $('#goAbout').scrollView();
    });

    $('.submenu').hide();
    $('.MoreButton').click(function () {
        $('.MoreButton').show();
        $('.submenu').slideToggle();
        $(this).toggleClass('active');
    });
}

$(document).ready(main);





