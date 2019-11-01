(() => {
    try {
        $('.projects').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        });
    } catch (error) {}
    
    try {
        $('.teams').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });
    } catch (error) {}

    try {
        $('.featured-articles__list').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        });
    } catch (error) {}
    
    try {
        const projects = document.querySelectorAll('.project');
    
        projects.forEach((project) => {
            const defaultStyle = project.style.cssText;
        
            project.addEventListener('mouseover', function () {
                const defaultStyle = project.style.backgroundImage.split('), u');
                const overlay = defaultStyle[0].replace(/255/g, '0') + ')';
                const background = 'u' + defaultStyle[1];
        
                project.querySelector('.project__title').style.color = '#fff';
        
                project.style.cssText = `background-image: ${overlay}, ${background}`;
            });
        
            project.addEventListener('mouseleave', function () {
                project.style.cssText = defaultStyle;
                project.querySelector('.project__title').style.color = '#000';
            });
        });
    } catch (error) {}
    
    try {
        const mainHeader = document.querySelector('header.main-header');
        const menuLinks = document.querySelectorAll('.main-nav .menu-list .menu-list__item a');
        const logoImage = document.querySelector('.logo__image');

        menuLinks.forEach((menuLink) => {
            if (mainHeader.classList.contains('fixed')) {
                menuLink.addEventListener('mouseover', () => {
                    menuLink.closest('.main-nav').classList.add('fixed');
                });

                menuLink.addEventListener('mouseout', () => {
                    menuLink.closest('.main-nav').classList.remove('fixed');
                });
            } else {
                menuLink.addEventListener('mouseover', () => {
                    menuLink.closest('.main-nav').classList.add('hover');
                });

                menuLink.addEventListener('mouseout', () => {
                    menuLink.closest('.main-nav').classList.remove('hover');
                });
            }
        });

        window.addEventListener('scroll', (event) => {
            if (window.pageYOffset >= 80) {
                mainHeader.classList.add('fixed');
                
                menuLinks.forEach((menuLink) => {
                    menuLink.addEventListener('mouseover', () => {
                        menuLink.closest('.main-nav').classList.add('fixed');
                    });
            
                    menuLink.addEventListener('mouseout', () => {
                        menuLink.closest('.main-nav').classList.remove('fixed');
                    });
                });
    
                logoImage.src = "images/logo%20(2).png";
                document.querySelector('.search').style.backgroundImage = 'url(\'images/search-icon-green.svg\')';
            } else {
                mainHeader.classList.remove('fixed');
                logoImage.src = "images/logo%20(3).png";
                document.querySelector('.search').setAttribute('style', '');
            }
        });
    } catch (error) {}
})();