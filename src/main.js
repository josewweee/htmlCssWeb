/* NAV BAR */
const toggleButton = document.querySelector('.toggle-button');
const navOptions = document.querySelector('.header-list--mobile');

toggleButton.addEventListener('click', (event) => {
    navOptions.style.display = navOptions.style.display === 'block' ? 'none' : 'block';
})


function scrollHandler(event){
    console.log(event[0].target.id)
    const allNavButtons = document.querySelectorAll('.header-list--item');
    allNavButtons.forEach( btn => {
        btn.classList.remove('active')
    });
    const navButton = document.querySelector(`#header-list--${event[0].target.id}`);
    navButton.classList.add('active');
    
}

const myIntersectionObserver = new IntersectionObserver(scrollHandler, {
    root: document.querySelector('body'),
    threshold: 0.7
});

const bannerSection = document.querySelector('#main-banner');
const servicesSection = document.querySelector('#services');
const aboutSection = document.querySelector('#about');
const teamSection = document.querySelector('#team');
const portfolioSection = document.querySelector('#portfolio');
const blogSection = document.querySelector('#blog');
const contactSection = document.querySelector('#contact');

myIntersectionObserver.observe(bannerSection);
myIntersectionObserver.observe(servicesSection);
myIntersectionObserver.observe(aboutSection);
myIntersectionObserver.observe(teamSection);
myIntersectionObserver.observe(portfolioSection);
myIntersectionObserver.observe(blogSection);
myIntersectionObserver.observe(contactSection);



/* END NAV BAR */
/* 




*/
/* QUESTIONS */
const accordionButton = document.querySelectorAll('.question-block-item');

//Open and close the accordion ( using 'for' and 'let' to avoid the clousure)
for(let i = 0; i < accordionButton.length; i++)
{
    accordionButton[i].addEventListener('click', () => {
        //switch the selected accordion content to scroll down ( margin + increace height)
        let accordionBlock = accordionButton[i].querySelector('.question-item--accordion');
        accordionBlock.style.marginTop = '2rem';
        accordionBlock.style.maxHeight = accordionBlock.scrollHeight + 'px';

        //scroll up ( no margin, no max height) the non selected ones
        accordionButton.forEach( (button, index) => {
            if(index !== i){
                let accordionBlockDi = button.querySelector('.question-item--accordion');
                accordionBlockDi.style.marginTop = '0';
                accordionBlockDi.style.maxHeight = '0';
            }
        })
    });
}

/* END QUESTIONS */


/* TESTIMONIAL */

const carouselAditionalMobileSlides = document.querySelectorAll('.carousel-aditional--mobile');
var ScreenWidth = window.matchMedia("(min-width: 577px)")
 //JS media query
function minWithHandler(width) {
    if (width.matches) {
        carouselAditionalMobileSlides.forEach( item => {
            item.classList.remove('carousel-item')
            item.hidden = true;
        });
    } else {
        carouselAditionalMobileSlides.forEach( item => {
            item.classList.add('carousel-item')
            item.hidden = false;
        });
    }
  }
  
// Call listener function at run time
  minWithHandler(ScreenWidth)
// Attach listener function on state changes
ScreenWidth.addListener(minWithHandler)

/* END TESTIMONIAL */