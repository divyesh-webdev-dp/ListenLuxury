AOS.init();

$(document).on("click","#mobile-menu-btn",function(){
    if($("#mobile-menu").hasClass("hidden")){
        $("#mobile-menu").removeClass("hidden");
        // $("#mobile-menu").attr("data-aos","fade-down");
    }else{
        $("#mobile-menu").addClass("hidden"); 
    }
});
$(document).ready(function() {
    $("#owl-main").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoHeight : false
    });
});