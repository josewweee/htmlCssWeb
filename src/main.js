/* NAV BAR */
const toggleButton = document.querySelector('.toggle-button');
const navOptions = document.querySelector('.header-list--mobile');

toggleButton.addEventListener('click', (event) => {
    navOptions.style.display = navOptions.style.display === 'block' ? 'none' : 'block';
})
/* END NAV BAR */
/* 




*/
/* QUESTIONS */
const accordionButton = document.querySelectorAll('.question-block-item');

for(let i = 0; i < accordionButton.length; i++)
{
    accordionButton[i].addEventListener('click', () => {
        let accordionBlock = accordionButton[i].querySelector('.question-item--accordion');
        if(accordionBlock.classList.contains('closed'))
        {
            accordionBlock.classList.remove('closed');
        }
        else
        {
            accordionBlock.classList.add('closed');
        }
    });
}

/* END QUESTIONS */


/* TESTIMONIAL */

/* END TESTIMONIAL */