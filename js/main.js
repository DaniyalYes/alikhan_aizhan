$(window).on("load", function(){

    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow() {
        $(".slide").removeClass("active").eq(slideIndex).addClass("active")
        if(slideIndex == slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex++
        }
        setTimeout(slideShow, 5000)
    }
    slideShow();
})
$(document).ready(function(){

    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed")
        }
    })
})

// scrollIt

    $.scrollIt();

let map;

    DG.then(function () {
        map = DG.map('map', {
            center: [43.22466, 76.838578],
            zoom: 18
        });
        let myIcon = DG.icon({
            iconUrl: 'https://pngicon.ru/file/uploads/ikonka-geolokatsii.png',
            iconSize: [35, 45],
        });
        
        DG.marker([43.22466, 76.838578], {icon: myIcon}).addTo(map)
        .bindLabel('Мы тут!', { static: false });;
    });

