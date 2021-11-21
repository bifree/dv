
    // ヘッダーメニュー
    $(function() {
        $('.hamburger').click(function() {
            $(this).toggleClass('active');
    
            if ($(this).hasClass('active')) {
                $('.globalnav_sp').addClass('active');
            } else {
                $('.globalnav_sp').removeClass('active');
            }
        });
        $('#btn_vision').click(function() {
            $('.globalnav_sp').removeClass('active');
            $('.hamburger').removeClass('active');
        });
    });      
    
    // スムーススクロール
    $(function(){
        $('a[href^="#"]').click(function(){
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            //ヘッダーの高さを取得
            var header = $('header').height();
            //ヘッダーの高さを引く
            var position = target.offset().top - header;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });           

    // ScrollReveal
        // ScrollReveal
        ScrollReveal().reveal('.ScrollAnimation',{ 
            delay: 100,
            duration: 1500, 
            viewFactor: 0.4,
            }
        );
        ScrollReveal().reveal('.ScrollAnimation-bottom',{ 
            delay: 100,
            duration: 1500, 
            origin: 'bottom', 
            distance: '30px',
            viewFactor: 0.4,
            }
        );
        ScrollReveal().reveal('.ScrollAnimation-left',{ 
            delay: 100,
            duration: 1500, 
            origin: 'left', 
            distance: '150px',
            viewFactor: 0.4,
            }
        );    
        ScrollReveal().reveal('.ScrollAnimation-right',{ 
            delay: 100,
            duration: 1500, 
            origin: 'right', 
            distance: '150px',
            viewFactor: 0.4,
            }
        );
