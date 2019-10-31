(() => {
    // $('.projects').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // });
    
    // $('.teams').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1
    // });
    
    // const projects = document.querySelectorAll('.project');
    
    // projects.forEach((project) => {
    //     const defaultStyle = project.style.cssText;
    
    //     project.addEventListener('mouseover', function () {
    //         const defaultStyle = project.style.backgroundImage.split('), u');
    //         const overlay = defaultStyle[0].replace(/255/g, '0') + ')';
    //         const background = 'u' + defaultStyle[1];
    
    //         project.querySelector('.project__title').style.color = '#fff';
    
    //         project.style.cssText = `background-image: ${overlay}, ${background}`;
    //     });
    
    //     project.addEventListener('mouseleave', function () {
    //         project.style.cssText = defaultStyle;
    //         project.querySelector('.project__title').style.color = '#000';
    //     });
    // });
    
    // const teams = document.querySelector('.teams');
    // const teamModal = document.querySelector('.team-modal');
    // const teamModalTitle = document.querySelector('.team-modal__title');
    // const teamModalAboutMe = document.querySelector('.team-modal__aboutme');
    // const teamCloseIcon = document.querySelector('.team-modal__close');
    // const teamCloseIconForm = document.querySelector('.team-modal__form-close');
    // const teamModalEmail = document.querySelector('#teamModalEmail');
    // const teamModalFormWrapper = document.querySelector('.team-modal__form-wrapper');
    
    // teams.addEventListener('click', (event) => {
    //     if (event.target.parentElement.classList.contains('team')) {
    //         teamModalStyle = teamModal.style.backgroundImage.split('), u');
    
    //         const name = event.target.parentElement.querySelector('.team__name').textContent;
    //         const aboutMe = event.target.parentElement.dataset.aboutmeTeamModal;
    //         const backgroundUrl = event.target.parentElement.dataset.bgTeamModal;
    //         const background = `url('${backgroundUrl}');`;
    //         const overlay = teamModalStyle[0] + '),';
    
    //         teamModal.classList.add('active');
    //         teamModalTitle.textContent = name;
    //         teamModalAboutMe.textContent = aboutMe;
    //         teamModal.style.cssText = `background-image: ${overlay} ${background}`;
    //     }
    // });
    
    // teamCloseIcon.addEventListener('click', () => {
    //     teamModal.classList.remove('active');
    // });
    
    // teamCloseIconForm.addEventListener('click', () => {
    //     teamModalFormWrapper.classList.remove('active');
    // });
    
    // teamModalEmail.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     teamModalFormWrapper.classList.add('active');
    // });

    const mainHeader = document.querySelector('header.main-header');
    const menuLinks = document.querySelectorAll('.main-nav .menu-list .menu-list__item a');

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
        } else {
            mainHeader.classList.remove('fixed');
        }
    })
})();