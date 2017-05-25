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

    $('.submenu').hide();
    $('.MoreButton').click(function () {
        $('.MoreButton').show();
        $('.submenu').slideToggle();
        $(this).toggleClass('active');
    });
}

$(document).ready(main);





