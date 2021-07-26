export default function SlideModule() {

    function slideCenter() {
        if (document.querySelector('.slide-center')) {
            const swiper = document.querySelector('.slide-center');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    // loop: true,
                    slidesPerView: 1,
                    spaceBetween: 30,

                    breakpoints: {
                        320: {
                            spaceBetween: 10,
                        },
                        768: {
                            spaceBetween: 20,
                        },
                        1200: {
                            spaceBetween: 30,

                        }
                    },

                    // onSlideChangeStart: function (swiper) {
                    //     $('.swiper-slide').find('.youtube-video').each(function () {
                    //         this.pause();
                    //     });
                    // },

                    // onSlideChangeEnd: function (swiper) {
                    //     $('.swiper-slide').find('.youtube-video').each(function () {
                    //         this.pause();
                    //     });
                    // },
                });
                swiper.slideTo(1);

                // var vid = document.getElementsByClassName("youtube-video");

                // function pauseVid() {
                //     vid.pause();
                // }

                // if ($('.achi-wrap').length) {
                //     swiper.on('slideChange', function () {
                //         console.log('slide changed');

                //         $('.youtube-video').pause();
                //         // pauseVid();
                //     });
                // }

                // console.log(pauseVid);



            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $('.slide-center').length && slideCenter();


    if (document.querySelector('#slideasd')) {
        const swiper = document.querySelector('#slideasd');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}