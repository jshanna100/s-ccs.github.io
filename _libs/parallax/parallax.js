window.onscroll = function(){parallax()}

function parallax() {
    document.getElementById('title-image').setAttribute('style', `background-position-y: ${document.documentElement.scrollTop * 0.4}px`)
}