var input = document.querySelector('#phone');
window.intlTelInput(input,{})

var input_footer = document.querySelector('#phone-footer')
window.intlTelInput(input_footer,{})

const primaryHeader = document.querySelector('.navbar')
const scrollWatcher = document.createElement('div')

scrollWatcher.setAttribute('data-scroll-watcher', '')
primaryHeader.before(scrollWatcher)

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
})

navObserver.observe(scrollWatcher)
