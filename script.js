window.addEventListener('load', motion);
headers = document.querySelectorAll('h2');
navigation = document.querySelector('.nav-list');
sections = document.querySelectorAll('.section');

function motion() {
    headers.forEach(item => {
        item.classList.add('_active');
    })

    sections.forEach(section => {
        section.classList.add('_active');
    })

    navigation.classList.add('_active');
}


function motionBack() {
    headers.forEach(item => {
        item.classList.remove('_active');
    })

    navigation.classList.remove('_active');
}

setTimeout(motionBack, 1000);
motionBack();

// навигация по странице

const navLinks = document.querySelectorAll('.nav-link');

if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', hiddenHeader)
    })
}


let i = 0;

function hiddenHeader(e) {
    let navLink = e.target;
    for (i = 0; i < navLinks.length; i++) {
        if (navLink == navLinks[i]) {
            console.log(i);
            console.log(headers[i]);
            headers.forEach(header => {
                if (header.classList.contains('colored')) {
                    header.classList.remove('colored')
                }
            });

            if (headers[i].classList.contains('colored')) {
                headers[i].classList.remove('colored')
            }
            else headers[i].classList.add('colored')
        }

    }
}



