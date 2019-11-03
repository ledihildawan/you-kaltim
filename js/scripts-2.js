(() => {
    $('.projects').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    
    $('.teams').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.featured-articles__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
    
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

    // const mainHeader = document.querySelector('header.main-header');
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

            logoImage.src = "http://127.0.0.1:5500/images/logo%20(2).png";
            document.querySelector('.search').style.backgroundImage = 'url(\'http://127.0.0.1:5500/images/search-icon-green.svg\')';
        } else {
            mainHeader.classList.remove('fixed');
            logoImage.src = "http://127.0.0.1:5500/images/logo%20(3).png";
            document.querySelector('.search').setAttribute('style', '');
        }
    });

    const mobileMenu = document.querySelector('.menu-mobile');
    const mobileMenuToggle = document.querySelector('.main-nav__toggle');

    mobileMenuToggle.addEventListener('click', function () {
        console.log('fsfaskfhasjfhjdsk');
        mobileMenu.classList.add('active');
    });
})();