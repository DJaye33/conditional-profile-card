const firstNameInput = document.getElementById('firstName');
const fistNameEl = document.getElementById('firstNameEl');
const lastNameInput = document.getElementById('lastName');
const lastNameEl = document.getElementById('lastNameEl');
const includeCover = document.querySelector('#include-cover');
const upperHalf = document.querySelector('#upper-half');
const socialPosition = document.querySelector('#social-position')
const socialLinks = document.querySelector('#social-links');

// console.log(socialLinks);

// ***** changes firstname on card on change *****//
firstNameInput.addEventListener('change', (event) => {
    fistNameEl.textContent = event.target.value;
})

// ***** changes last name on card on change ***** //
lastNameInput.addEventListener('change', (event) => {
    lastNameEl.textContent = event.target.value;
})

// ***** toggle background ***** //
includeCover.addEventListener('change', event => {
    if (event.target.value === 'true') {
        upperHalf.classList.add('toggle-background')
    }else if (event.target.value === 'false') {
        upperHalf.classList.remove('toggle-background')
    }
})

socialPosition.addEventListener('change', event => {
    const socialLink = socialLinks.classList;

    if (event.target.value === 'right') {
        socialLink.remove('left')
        socialLink.add('right')
    }
    else if (event.target.value === 'left') {
        socialLink.remove('right')
        socialLink.add('left');
    }
})
