function saveOptions(e) {
    e.preventDefault();
    browser.storage.local.set({
        blacklist: document.querySelector('#blacklist').value,
        quotestyle: document.querySelector('#quotestyle').checked,
        filterme: document.querySelector('#filterme').checked
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector('#blacklist').value = result.blacklist;
        document.querySelector('#quotestyle').checked = result.quotestyle;
        document.querySelector('#filterme').checked = result.filterme;
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var getting = browser.storage.local.get({
        blacklist: 'Comma separated list goes here',
        quotestyle: false,
        filterme: false
    });
    getting.then(setCurrentChoice, onError);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);