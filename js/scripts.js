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
        const teams = document.querySelector('.teams');
        const teamModal = document.querySelector('.team-modal');
        const teamModalTitle = document.querySelector('.team-modal__title');
        const teamModalAboutMe = document.querySelector('.team-modal__aboutme');
        const teamCloseIcon = document.querySelector('.team-modal__close');
        const teamCloseIconForm = document.querySelector('.team-modal__form-close');
        const teamModalEmail = document.querySelector('#teamModalEmail');
        const teamModalFormWrapper = document.querySelector('.team-modal__form-wrapper');
        
        teams.addEventListener('click', (event) => {
            if (event.target.parentElement.classList.contains('team')) {
                teamModalStyle = teamModal.style.backgroundImage.split('), u');
        
                const name = event.target.parentElement.querySelector('.team__name').textContent;
                const aboutMe = event.target.parentElement.dataset.aboutmeTeamModal;
                const backgroundUrl = event.target.parentElement.dataset.bgTeamModal;
                const background = `url('${backgroundUrl}');`;
                const overlay = teamModalStyle[0] + '),';
        
                teamModal.classList.add('active');
                teamModalTitle.textContent = name;
                teamModalAboutMe.textContent = aboutMe;
                teamModal.style.cssText = `background-image: ${overlay} ${background}`;

                mainHeader.classList.remove('fixed');
            }
        });
        
        teamCloseIcon.addEventListener('click', () => {
            teamModal.classList.remove('active');
            mainHeader.classList.add('fixed');
        });
        
        teamCloseIconForm.addEventListener('click', () => {
            teamModalFormWrapper.classList.remove('active');
        });
        
        teamModalEmail.addEventListener('click', (event) => {
            event.preventDefault();
            teamModalFormWrapper.classList.add('active');
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

        let trackRelativeNavbar;
        window.addEventListener('scroll', (event) => {
            console.log(trackRelativeNavbar);

            if (window.pageYOffset < 80) {
                if (trackRelativeNavbar) {
                    mainHeader.classList.add('relative', 'bg');
                }
            }

            if (window.pageYOffset >= 80) {
                mainHeader.classList.add('fixed');

                if (mainHeader.classList.contains('relative', 'bg')) {
                    mainHeader.classList.remove('relative', 'bg');
                    trackRelativeNavbar = true;
                }
                
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

    try {
        const mobileMenu = document.querySelector('.menu-mobile');
        const mobileMenuToggle = document.querySelector('.main-nav__toggle');
        const menuMobileClose = document.querySelector('.menu-mobile__close');

        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('active');
        });

        menuMobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    } catch (error) {}

    try {
        const search = document.querySelector('.search');
        const searchPopup = document.querySelector('.search-popup');
        const searchPopupWrapper = document.querySelector('.search-popup__wrapper');

        search.addEventListener('click', () => {
            searchPopup.classList.add('active');
        });

        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('search-popup__wrapper')) {
                searchPopup.classList.remove('active');
            }
        });
    } catch (error) {}
})();