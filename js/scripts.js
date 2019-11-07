(() => {
    try {
        $('.projects').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // responsive: [
            //     {
            //         breakpoint: 1199,
            //         settings: {
            //             slidesToShow: 3
            //         }
            //     }
            // ]
        });
    } catch (error) {}
    
    try {
        $('.teams').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    } catch (error) {}

    try {
        $('.featured-articles__list').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            // autoplay: true,
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
        const teamModalWrapper = document.querySelector('.team-modal__wrapper');
        const teamCloseIcon = document.querySelector('.team-modal__close');
        const teamModalTitle = document.querySelector('.team-modal__title');
        const teamModalAboutMe = document.querySelector('.team-modal__aboutme');
        const teamModalLink = document.querySelector('.team-modal__link');
        // const teamCloseIconForm = document.querySelector('.team-modal__form-close');
        // const teamModalEmail = document.querySelector('#teamModalEmail');
        // const teamModalFormWrapper = document.querySelector('.team-modal__form-wrapper');
        
        teams.addEventListener('click', (event) => {
            if (event.target.parentElement.classList.contains('team')) {
                teamModalWrapperStyle = teamModalWrapper.style.backgroundImage.split('), u');
        
                const name = event.target.parentElement.querySelector('.team__name').textContent;
                const aboutMe = event.target.parentElement.dataset.aboutmeTeamModal;
                const backgroundUrl = event.target.parentElement.dataset.bgTeamModal;
                const background = `url('${backgroundUrl}');`;
                const overlay = teamModalWrapperStyle[0] + '),';
        
                teamModal.classList.add('active');
                teamModalTitle.textContent = name;
                teamModalAboutMe.textContent = aboutMe;
                teamModalWrapper.style.cssText = `background-image: ${overlay} ${background}`;
                teamModalLink.href = `mailto:${event.target.parentElement.dataset.email}`;

                mainHeader.classList.remove('fixed');
            }
        });
        
        teamCloseIcon.addEventListener('click', () => {
            teamModal.classList.remove('active');
            mainHeader.classList.add('fixed');
        });

        teamModal.addEventListener('click', () => {
            teamModal.classList.remove('active');
            mainHeader.classList.add('fixed');
        });
        
        // teamCloseIconForm.addEventListener('click', () => {
        //     teamModalFormWrapper.classList.remove('active');
        // });
        
        // teamModalEmail.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     teamModalFormWrapper.classList.add('active');
        // });
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

        // let trackRelativeNavbar;
        window.addEventListener('scroll', (event) => {
            // console.log(trackRelativeNavbar);

            // if (window.pageYOffset < 80) {
            //     if (trackRelativeNavbar) {
            //         mainHeader.classList.add('relative', 'bg');
            //     }
            // }

            if (window.pageYOffset >= 80) {
                mainHeader.classList.add('fixed');

                // if (mainHeader.classList.contains('relative', 'bg')) {
                //     mainHeader.classList.remove('relative', 'bg');
                //     trackRelativeNavbar = true;
                // }
                
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
        const mainHeader = document.querySelector('.main-header');
        const search = document.querySelector('.search');
        const searchForm = document.querySelector('.search__form');
        const searchInput = document.querySelector('.search__input');
        // const searchPopup = document.querySelector('.search-popup');
        // const searchPopupClose = document.querySelector('.search-popup__close');

        // searchPopupClose.addEventListener('click', () => {
            // searchPopup.classList.remove('active');
        // });

        search.addEventListener('mousemove', () => {
            // searchPopup.classList.add('active');
            document.querySelector('.search').style.backgroundImage = 'url(\'images/search-icon-green.svg\')';
            searchForm.classList.add('active');
            mainHeader.classList.add('bg');
            search.style.opacity = 1;
        });

        // searchInput.addEventListener('input', () => {
        //     search.style.opacity = 1;
        // });

        searchForm.addEventListener('mouseleave', () => {
            // searchPopup.classList.add('active');
            searchForm.classList.remove('active');
            mainHeader.classList.remove('bg');

            if (!(mainHeader.classList.contains('fixed'))) {
                search.removeAttribute('style');
            }
        });

        mainHeader.addEventListener('mouseleave', () => {
            if (mainHeader.classList.contains('bg')) {
                searchForm.classList.remove('active');
                mainHeader.classList.remove('bg');

                if (!(mainHeader.classList.contains('fixed'))) {
                    search.removeAttribute('style');
                }
            }
        });

        // document.body.addEventListener('click', (e) => {
        //     if (e.target.classList.contains('search-popup__wrapper')) {
        //         searchPopup.classList.remove('active');
        //     }
        // });
    } catch (error) {}

    // try {
    //     const upcommingEventsModal = document.querySelector('.upcomming-events-modal');

    //     upcommingEventsModal.addEventListener('mousemove', () => {
    //         upcommingEventsModal.style.scrollY = 'auto';
    //     })
    // } catch (error) {}

    // const upcommingEventsModal = document.querySelector('.upcomming-events-modal');

    //     upcommingEventsModal.addEventListener('mouseover', () => {
    //         upcommingEventsModal.style.overflowY = 'scroll';
    //     });

    try {
        const mainHeader = document.querySelector('.main-header');
        const upcomingEvents = document.querySelector('.upcoming');
        const upcommingEventsModal = document.querySelector('.upcomming-events-modal');
        const upcommingEventsModalClose = document.querySelector('.upcomming-events-modal__close');
        const showMoreModalProject = document.querySelector('.upcomming-events-modal__showmore');
        const showMoreLabelModalProject = document.querySelector('.upcomming-events-modal__showmore span');
        const showMoreIconModalProject = document.querySelector('.upcomming-events-modal__showmore i');

        upcommingEventsModalClose.addEventListener('click', () => {
            upcommingEventsModal.classList.remove('active');
            mainHeader.classList.add('fixed');
        })

        upcomingEvents.addEventListener('click', (event) => {
            event.preventDefault();
            mainHeader.classList.remove('fixed');
            upcommingEventsModal.classList.add('active');
        });

        document.body.addEventListener('click', (event) => {
            if (event.target.classList.contains('upcomming-events-modal')) {
                upcommingEventsModal.classList.remove('active');
                mainHeader.classList.add('fixed');
            }
        });

        showMoreModalProject.addEventListener('click', () => {
            showMoreModalProject.parentElement.classList.toggle('active');

            const active = showMoreModalProject.parentElement.classList.contains('active');

            if (active) {
                showMoreLabelModalProject.textContent = 'Less';
                showMoreIconModalProject.className = 'fas fa-chevron-up';
            } else {
                showMoreLabelModalProject.textContent = 'More';
                showMoreIconModalProject.className = 'fas fa-chevron-down';
            }
        });
    } catch (error) {}
})();