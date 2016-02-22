$(document).ready(function () {

    //changes text size on click to make box larger

    $('.tweet-compose').on("click", function () {

        $('#tweet-controls').css('display', 'inline-block').css('float', 'right');

        // double .tweet-compose (text input) size on click

        $('.tweet-compose').css('height', '5em');

    });

    $('.char-count').keyup(function () {
        if ( < 140) {
            count--
        }
    })

});