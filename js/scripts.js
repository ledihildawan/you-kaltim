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
            autoplay: true,
            autoplaySpeed: 6000,
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

        // teamModal.addEventListener('click', () => {
        //     teamModal.classList.remove('active');
        //     mainHeader.classList.add('fixed');
        // });

        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('team-modal')) {
                teamModal.classList.remove('active');
                mainHeader.classList.add('fixed');
            }
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

    // try {
    //     const mainHeader = document.querySelector('.main-header');
    //     const upcomingEvents = document.querySelector('.upcoming');
    //     const upcommingEventsModal = document.querySelector('.upcomming-events-modal');
    //     const upcommingEventsModalClose = document.querySelector('.upcomming-events-modal__close');
    //     const showMoreModalProject = document.querySelector('.upcomming-events-modal__showmore');
    //     const showMoreLabelModalProject = document.querySelector('.upcomming-events-modal__showmore span');
    //     const showMoreIconModalProject = document.querySelector('.upcomming-events-modal__showmore i');

    //     upcommingEventsModalClose.addEventListener('click', () => {
    //         upcommingEventsModal.classList.remove('active');
    //         mainHeader.classList.add('fixed');
    //     })

    //     upcomingEvents.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         mainHeader.classList.remove('fixed');
    //         upcommingEventsModal.classList.add('active');
    //     });

    //     document.body.addEventListener('click', (event) => {
    //         if (event.target.classList.contains('upcomming-events-modal')) {
    //             upcommingEventsModal.classList.remove('active');
    //             mainHeader.classList.add('fixed');
    //         }
    //     });

    //     showMoreModalProject.addEventListener('click', () => {
    //         showMoreModalProject.parentElement.classList.toggle('active');

    //         const active = showMoreModalProject.parentElement.classList.contains('active');

    //         if (active) {
    //             showMoreLabelModalProject.textContent = 'Less';
    //             showMoreIconModalProject.className = 'fas fa-chevron-up';
    //         } else {
    //             showMoreLabelModalProject.textContent = 'More';
    //             showMoreIconModalProject.className = 'fas fa-chevron-down';
    //         }
    //     });
    // } catch (error) {}

    try {
        var x, i, j, selElmnt, a, b, c;
        /* Look for any elements with the class "custom-select": */
        x = document.getElementsByClassName("custom-select");
        for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                    y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
        }

        function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
            arrNo.push(i)
            } else {
            y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
    } catch (error) {}

    try {
        const mainHeader = document.querySelector('.main-header');
        const upcomingEvents = document.querySelectorAll('.upcoming');
        const upcommingEventsModal = document.querySelector('.upcomming-events-modal');
        const upcommingEventsModalClose = document.querySelector('.upcomming-events-modal__close');
        const upcommingEventsModalTitle = document.querySelector('.upcomming-events-modal__title');
        const upcommingEventsModalPoster = document.querySelector('.upcomming-events-modal__poster img');
        const upcommingEventsModalDate = document.querySelector('.upcomming-events-modal__date span');
        const upcommingEventsModalLocation = document.querySelector('.upcomming-events-modal__location span');
        const upcommingEventsModalContent = document.querySelector('.upcomming-events-modal__content-inner');
        const showMoreModalProject = document.querySelector('.upcomming-events-modal__showmore');
        const showMoreLabelModalProject = document.querySelector('.upcomming-events-modal__showmore span');
        const showMoreIconModalProject = document.querySelector('.upcomming-events-modal__showmore i');

        upcommingEventsModalClose.addEventListener('click', () => {
            upcommingEventsModal.classList.remove('active');
            mainHeader.classList.add('fixed');
        })

        // upcomingEvents.addEventListener('click', (event) => {
        //     // event.preventDefault();
        //     mainHeader.classList.remove('fixed');
        //     upcommingEventsModal.classList.add('active');
        // });

        document.body.addEventListener('click', (event) => {
            if (event.target.classList.contains('upcomming-events-modal')) {
                upcommingEventsModal.classList.remove('active');
                mainHeader.classList.add('fixed');
            }

            if (event.target.classList.contains('upcomming')) {
                mainHeader.classList.remove('fixed');
                upcommingEventsModal.classList.add('active');

                upcommingEventsModalTitle.textContent = event.target.dataset.upcommingTitle;
                upcommingEventsModalDate.textContent = event.target.dataset.upcommingDate;
                upcommingEventsModalLocation.textContent = event.target.dataset.upcommingLocation;
                upcommingEventsModalPoster.src = event.target.dataset.upcommingPoster;
                upcommingEventsModalContent.innerHTML = decodeURIComponent(event.target.dataset.upcommingContent).replace(/[+]/g, ' ');
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