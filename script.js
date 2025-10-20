//  elements
const comicContainers = document.getElementsByClassName('comic-container');
const searchResultText = document.getElementById('searchResultText');
const carouselSection = document.getElementById('carousel-section');
const noResultCon = document.getElementById('no-result-con');
const clearBtnForSearch = document.getElementById('clearBtnForSearch');
const clearBtnForSearchMobile = document.getElementById('clearBtnForSearchMobile');
const searchLgInput = document.getElementById('search-lg-input');
const searchSmInput = document.getElementById('search-sm-input');

for (let i = 0; i < comicContainers.length; i++) {
    comicContainers[i].classList.add('d-none');
    comicContainers[i].classList.remove('d-block');
}

searchResultText.classList.add('d-none');
searchResultText.classList.remove('d-block');

function search(keyword) {
    searchResultText.innerHTML = `Search results for "${keyword}"`;

    searchResultText.classList.add('d-block');
    searchResultText.classList.remove('d-none');
    carouselSection.classList.add('d-none');
    carouselSection.classList.remove('d-block');

    keyword = keyword.toLowerCase().trim();
    const results = comicContainers;

    for (let i = 0; i < results.length; i++) {
        if (!results[i].innerHTML.toLowerCase().includes(keyword)) {
            results[i].classList.add('d-none');
            results[i].classList.remove('d-block');
        } else {
            results[i].classList.add('d-block');
            results[i].classList.remove('d-none');
        }
    }

    // For showing whether there is result or not
    let hidden = 0;
    for (let i = 0; i < comicContainers.length; i++) {
        if (comicContainers[i].classList.contains('d-none') === true) {
            hidden++;
        }
    }

    if (hidden === comicContainers.length) {
        noResultCon.classList.add('d-block');
        noResultCon.classList.remove('d-none');
    } else {
        noResultCon.classList.remove('d-block');
        noResultCon.classList.add('d-none');
    }
}

function searchInput(keyword) {
    if (keyword) {
        search(keyword);
        searchResultText.classList.add('d-block');
        searchResultText.classList.remove('d-none');
    } else {
        carouselSection.classList.add('d-block');
        carouselSection.classList.remove('d-none');

        for (let i = 0; i < comicContainers.length; i++) {
            comicContainers[i].classList.add('d-none');
            comicContainers[i].classList.remove('d-block');
        }

        searchResultText.classList.add('d-none');
        searchResultText.classList.remove('d-block');
        noResultCon.classList.remove('d-block');
        noResultCon.classList.add('d-none');
    }
}

function clear() {
    searchResultText.classList.add('d-none');
    searchResultText.classList.remove('d-block');

    if (searchLgInput) searchLgInput.value = '';
    if (searchSmInput) searchSmInput.value = '';

    carouselSection.classList.add('d-block');
    carouselSection.classList.remove('d-none');

    noResultCon.classList.remove('d-block');
    noResultCon.classList.add('d-none');

    for (let i = 0; i < comicContainers.length; i++) {
        comicContainers[i].classList.add('d-none');
        comicContainers[i].classList.remove('d-block');
    }
}

clearBtnForSearch.addEventListener('click', () => {
    clear();
});

clearBtnForSearchMobile.addEventListener('click', () => {
    clear();
});
