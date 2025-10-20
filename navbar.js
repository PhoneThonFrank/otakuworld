const searchNavCon = document.getElementById('search-nav-con');
const closeSearchNavBtn = document.getElementById('closeSearchNav');
let showSearchNavCon = false;

function showHideSearchNavCon() {
    if (!showSearchNavCon) {
        searchNavCon.style.display = 'block';
        searchNavCon.style.animationName = 'grow';
        showSearchNavCon = true;
        // Optional: prevent body scroll when nav opened on mobile
        document.body.style.overflow = 'hidden';
    } else {
        searchNavCon.style.animationName = 'shrink';
        setTimeout(() => {
            searchNavCon.style.display = 'none';
            document.body.style.overflow = '';
        }, 700);
        showSearchNavCon = false;
    }
}

// Close button for responsive search nav
if (closeSearchNavBtn) {
    closeSearchNavBtn.addEventListener('click', function() {
        showHideSearchNavCon();
    });
}

// Search box clear buttons logic (for all input IDs)
function setupClearButton(searchInputId, clearBtnId) {
    const searchInputEl = document.getElementById(searchInputId);
    const clearBtn = document.getElementById(clearBtnId);
    if (!searchInputEl || !clearBtn) return;
    clearBtn.addEventListener('click', function () {
        searchInputEl.value = '';
        searchInputEl.focus();
        clearBtn.style.opacity = '0';
        searchInput('');
    });
    searchInputEl.addEventListener('input', function () {
        clearBtn.style.opacity = searchInputEl.value.length > 0 ? '1' : '0';
    });
    // Initialize opacity
    clearBtn.style.opacity = searchInputEl.value.length > 0 ? '1' : '0';
}

document.addEventListener('DOMContentLoaded', function () {
    setupClearButton('search-lg-input', 'clearBtnForSearch');
    // If you have a different input/clearBtn in the #search-nav-con (give them unique IDs if needed)
    // setupClearButton('search-mobile-input', 'clearBtnForMobile');
});