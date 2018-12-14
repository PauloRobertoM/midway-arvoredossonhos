(function($, window) {
    $('#owl-sonho').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        nav:true,
        navText: ["<img src='assets/images/seta-left.png' />","<img src='assets/images/seta-right.png' />"],
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('#owl-apoio').owlCarousel({
        loop: true,
        autoplay: false,
        margin: 30,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:7
            }
        }
    });
    $("#btn-abrir").click(function(){
        $("#elemento-abrir").show("slow");
        $("#btn-abrir").hide("slow");
    });
    $("#btn-fechar").click(function(){
        $("#elemento-abrir").hide("slow");
        $("#btn-abrir").show("slow");
    });
})(jQuery, window);