const searchNavCon = document.getElementById('search-nav-con');
let showSearchNavCon = false;
// console.log(searchNavCon.children[0]);


function showHideSearchNavCon() {
    if (showSearchNavCon === false) {
        searchNavCon.style.display = 'block';
        searchNavCon.style.animationName = 'grow';
        showSearchNavCon = true;
    }
    else {
        searchNavCon.style.animationName = 'shrink';
        setTimeout(() => {
             searchNavCon.style.display = 'none';
        }, 700);
        showSearchNavCon = false;
    }
}