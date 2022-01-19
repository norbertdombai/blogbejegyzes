$(function() {

    


    $(window).on("torles", (event) => {
        console.log(event.detail.id);
        MyAjax.deleteAdat(apivegpont,event.detail.id);

    });


});