
export default class Interface {
    
    constructor(){
        this.startJquery();
    }

    startJquery(){
        $(document).ready(function(){
            $(".owl-carousel").owlCarousel({
                items: 5,
                margin: 6,
                lazyLoad:true,
                loop:true,
                autoplay:true,
                autoplayTimeout: 2800,
                autoplayHoverPause:true
                
                /*
                When you start doing responsive things, you do it:
                    0 : {
                        option1 : value,
                        option2 : value,
                        ...
                    },
                    // breakpoint from 480 up
                    480 : {
                        option1 : value,
                        option2 : value,
                        ...
                    },
                    // breakpoint from 768 up
                    768 : {
                        option1 : value,
                        option2 : value,
                        ...
                    }
                */
            });
        });
    }
}