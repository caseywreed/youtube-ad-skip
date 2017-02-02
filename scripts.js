const timer = setInterval(function () {
    let video = document.querySelector('video')
    if (video) {
        document.querySelector('video').currentTime = document.querySelector('video').duration
        clearInterval(timer)
    }
}, 500);
