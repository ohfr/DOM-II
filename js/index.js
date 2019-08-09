// Your code goes here

const DOM = {
    nav: document.querySelectorAll('a'),
    image: document.querySelectorAll('img'),
    intro: document.querySelector('.intro'),
    h2: document.querySelector('h2'),
    body: document.querySelector('body'),
}


DOM.nav.forEach(cur => {
    cur.addEventListener('mouseover', () => {
        cur.style.color = 'blue';
    })
    cur.addEventListener('click', () => {
        cur.style.color = 'black';
        cur.preventDefault();
    })
})


DOM.image.forEach(cur => {
    cur.addEventListener('mouseover', () => {
        cur.style.border = '2px solid black';
    })
    cur.addEventListener('mouseleave', () => {
        cur.style.border = "";
    })
    cur.addEventListener('drag', () => cur.style.borderRadius = '50%');
    cur.addEventListener('dragend', () => cur.style.borderRadius = '');
})

DOM.intro.addEventListener('dblclick', e => {
    e.currentTarget.style.background = 'gray';
});

DOM.h2.addEventListener('dblclick', e => {
    e.currentTarget.style.color = 'magenta';
    e.stopPropagation();
});

window.addEventListener('resize', () => DOM.h2.style.background = 'lightgray');

document.addEventListener('keydown', () => DOM.body.style.background = 'lightgray');
document.addEventListener('keyup', () => DOM.body.style.background = "");

document.addEventListener('wheel', () => DOM.h2.style.border = '2px solid black')

