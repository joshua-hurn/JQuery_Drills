$(document).ready(function () {
    const input = $("#mytextBox");
    const btnSubmit = $("#btnSubmit");
    $('body').append('<div></div>');
    input.on("change paste keyup", function () {
        if (input.val().length > 0) {
            btnSubmit.attr('disabled', false);
        } else {
            btnSubmit.attr('disabled', true);
        }
    });
        
            });
        });

    });
});

   // btnSubmit.click(function (e) {
    //     e.preventDefault();
    //     let h2text = input.val();
    //     $('<h2>' + h2text + '</h2>').appendTo('div');
    //     $("h2").mouseover(function () {
    //         $('h2').css({
    //             "background-color": "green",
    //             "border-radius": "1em",