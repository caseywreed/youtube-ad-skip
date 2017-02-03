//Every 500ms, check whether the browser's URL has changed or not
let urlChangeHandler = window.setInterval(checkUrlChange, 500)
let oldUrl= ""

function checkUrlChange(){
    //Continuously grab the window's URL
    let newUrl = document.URL
    if(newUrl !== oldUrl){
        // If it's different from the previous URL, check for an ad on the page
        checkForAd()
        .then(function (check) {
            if (check) {
                // If there was an ad playing on the page, skip it..
                skipAd()
                // Then replace the oldUrl with the new one and continu
                oldUrl = newUrl
            }
        })
        .catch(function (err) {
            console.error(err)
        })
    }
}

function checkForAd () {
    return new Promise(function (resolve, reject) {
        let adCheck = document.querySelector('.videoAdUi')
        resolve(adCheck)
    })
}

// Shoutout to Wes Bos for this slick line of code...
function skipAd () {
    document.querySelector('video').currentTime = document.querySelector('video').duration
}
