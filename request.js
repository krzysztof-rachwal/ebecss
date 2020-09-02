//1. On document Ready
$(document).ready(function () {
    //1.1 Enable/Disable active menu tabs
    $(".tab__link").click(function () {
        $(".tab__link").removeClass("tab--is-active")
        $(".tab__link").removeClass("active")
        $(this).addClass("tab--is-active")
    });

    // 1.2 Feedback - Success
    requestfeedback = localStorage.getItem("requestfeedback");

    if (requestfeedback === "true"){
        console.log("entrei")
        $('#success_message_text').text(' The Request was sent!');
        $('#success_message').removeClass('d-none').addClass('show');
        localStorage.clear()
        $("#success_message").fadeTo(1500, 1);
        setTimeout(function(){
            $("#success_message").fadeTo(1500, 0);
        },5000);
    }

});

//2. Feedback - Store local storage
function requestFeedback() {
    localStorage.setItem("requestfeedback","true");
}

$("#menuRequest").addClass("is-active")

