/* UI pattern support functions */

/* Tabs */
$(document).ready(function () {
    $(".tab-content > a").hide();
    $(".tab-content > a:first").show();
    $(".tab-selector a:first").addClass("active");

    $(".tab-selector a").click(function (e) {
        e.preventDefault();
        $(".tab-selector a").removeClass("active");
        $(this).addClass("active");
        $(".tab-content > a").hide();
        var tab_id = $(this).attr("href");
        $(tab_id).show();
   });
});