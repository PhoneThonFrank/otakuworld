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
    // console.log(keyword);
    
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
            results[i].children[0].style.animationName = 'grow';
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

const popularComicAuthors = [
  "Alan Moore",
  "Grant Morrison",
  "Neil Gaiman",
  "Stan Lee",
  "Frank Miller",
  "Brian K. Vaughan",
  "Jonathan Hickman",
  "Geoff Johns",
  "Ed Brubaker",
  "Jack Kirby",
  "Mark Waid",
  "J. Michael Straczynski",
  "Greg Rucka",
  "Scott Snyder",
  "Rick Remender",
  "Robert Kirkman",
  "Jim Starlin",
  "Jeff Lemire",
  "Garth Ennis",
  "Mark Millar",
  "Warren Ellis",
  "Art Spiegelman",
  "David Lloyd",
  "Donny Cates",
  "Marjorie Liu"
];


const popularComicArtists = [
  "Jack Kirby",
  "Steve Ditko",
  "Frank Miller",
  "Neal Adams",
  "George Pérez",
  "Alex Ross",
  "Jim Lee",
  "Mike Mignola",
  "Bill Sienkiewicz",
  "John Byrne",
  "David Mazzucchelli",
  "Carl Barks",
  "Will Eisner",
  "Todd McFarlane",
  "Brian Bolland",
  "Art Adams",
  "Bernie Wrightson",
  "Dave Sim",
  "Joe Shuster",
  "Mark Bagley",
  "Amanda Conner",
  "Chris Bachalo",
  "Russ Braun",
  "Erik Larsen"
];


function showModal(content) {
    console.log(content.children[2].children[1].innerHTML);
    const title = content.children[2].children[0].children[0].innerHTML;
    const author = popularComicAuthors[Math.floor(Math.random() * popularComicAuthors.length)];
    const artist = popularComicArtists[Math.floor(Math.random() * popularComicArtists.length)];
    const chapters = Math.floor(Math.random() * 100) + 1;
    const rating = Math.floor(Math.random()*5)+1;

    const comic = {
        title: title,
        author: author,
        artist: artist,
        status: "Completed",
        chapters: chapters,
        rating: rating,
        genres: content.children[2].children[1].innerHTML,
        description: `<b>${title}</b> is a good ${content.children[2].children[1].innerHTML} comic by ${author}. The art is beautifully made by ${artist}. It has ${chapters} chapters in total. It has got an average rating of ${rating} out of 5. Enjoy reading ${title}!`,
        coverImage: content.children[1].children[0].src,
        bannerImage: content.children[1].children[0].src,
    }
    // openModal(1);

    // // Define comics data
    // let comicsData = [
    //     {
    //         "id": 1,
    //         "title": content.children[2].children[0].children[0].innerHTML,
    //         "author": "Anonymous",
    //         "artist": "Unknown",
    //         "status": "Completed",
    //         "chapters": Math.floor(Math.random() * 100) + 1,
    //         "rating": '3',
    //         "genres": content.children[2].children[1].innerHTML,
    //         // "genres": ["Test", "Demo", "Sample"],
    //         // "genres": "Test",
    //         "description": content.children[0].innerHTML,
    //         "coverImage": '',
    //         "bannerImage": ""
    //     },
    // ];



    // generateModalContent(comicsData);

    const myLovelyModal = new bootstrap.Modal(document.getElementById('comicModal'));

    document.getElementById('myLovelyModalBody').innerHTML   = `<div class="relative">
                    <!-- Banner Image -->
                    <div class="relative h-48 bg-gradient-to-r from-primary to-orange-400">
                        <img 
                            src="${comic.bannerImage}" 
                            alt="${comic.title} banner" 
                            class="w-full h-full object-cover opacity-60"
                            loading="lazy"
                        />
                        <button 
                            data-bs-dismiss="modal" 
                            class="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                            <i class="fas fa-times text-gray-600"></i>
                        </button>
                    </div>

                    <!-- Content -->
                    <div class="p-6 max-h-[calc(90vh-12rem)] overflow-y-auto scrollbar-thin">
                        <div class="flex flex-col md:flex-row gap-6 mb-6">
                            <!-- Cover Image -->
                            <div class="flex-shrink-0">
                                <img 
                                    src="${comic.coverImage}" 
                                    alt="${comic.title} cover" 
                                    class="w-48 h-64 object-cover rounded-xl shadow-lg"
                                    loading="lazy"
                                />
                            </div>

                            <!-- Info -->
                            <div class="flex-1">
                                <div class="flex items-start justify-between mb-4">
                                    <div>
                                        <h2 class="text-3xl font-bold text-gray-800 mb-2">${comic.title}</h2>
                                        <p class="text-gray-600 mb-1">by ${comic.author}</p>
                                        <p class="text-gray-600">Art by ${comic.artist}</p>
                                    </div>
                                    <div class="text-right">
                                        <div class="flex items-center space-x-1 mb-2">
                                            <i class="fas fa-star text-yellow-400"></i>
                                            <span class="text-lg font-semibold">${comic.rating}</span>
                                        </div>
                                        <span class="inline-block px-3 py-1 rounded-full text-sm font-medium ${
                                            comic.status === 'Ongoing' ? 'bg-primary text-white' : 'bg-green-500 text-white'
                                        }">
                                            ${comic.status}
                                        </span>
                                    </div>
                                </div>

                                <!-- Stats -->
                                <div class="grid grid-cols-2 gap-4 mb-6">
                                    <div class="bg-gray-50 rounded-lg p-4 text-center">
                                        <div class="text-2xl font-bold text-orange-600">${comic.chapters}</div>
                                        <div class="text-sm text-gray-600">Chapters</div>
                                    </div>
                                    <div class="bg-gray-50 rounded-lg p-4 text-center">
                                        <div class="text-2xl font-bold text-orange-600">${Math.floor(comic.rating * 100)}K</div>
                                        <div class="text-sm text-gray-600">Readers</div>
                                    </div>
                                </div>

                                <!-- Genres -->
                                <div class="mb-6">
                                    <h3 class="text-lg font-semibold text-gray-800 mb-3">Genres</h3>
                                        ${comic.genres}
                                </div>

                                <!-- Action Buttons -->
                                <div class="flex gap-3">
                                    <button class="flex-1 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                        <i class="fas fa-play mr-2"></i>Start Reading
                                    </button>
                                    <button class="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                                        <i class="far fa-bookmark text-gray-600"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Description -->
                        <div class="mb-6">
                            <h3 class="text-xl font-semibold text-gray-800 mb-3">Description</h3>
                            <p class="text-gray-600 leading-relaxed">${comic.description}</p>
                        </div>

                        <!-- Chapters Preview -->
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800 mb-4">Latest Chapters</h3>
                            <div class="space-y-2">
                                ${Array.from({ length: 5 }, (_, i) => `
                                    <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                        <div>
                                            <span class="font-medium text-gray-800">Chapter ${comic.chapters - i}</span>
                                            <span class="text-sm text-gray-500 ml-2">2 days ago</span>
                                        </div>
                                        <div class="flex items-center space-x-4">
                                            <span class="text-sm text-gray-500">15.2K views</span>
                                            <i class="fas fa-lock text-gray-400"></i>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;

    myLovelyModal.show();
}

// let comicsData = [
//     {
//         "id": 1,
//         "title": '',
//         "author": "",
//         "artist": "",
//         "status": "",
//         "chapters": '',
//         "rating": '',
//         "genres": "",
//         "description": "",
//         "coverImage": "",
//         "bannerImage": ""
//     },
// ];



// // Function to open modal
// function openModal(comicId) {
//     const comic = comicsData.find(item => item.id === comicId);
//     if (!comic) return;

//     const modalContent = document.getElementById('modalContent');
//     modalContent.innerHTML = generateModalContent(comic);

//     const modal = document.getElementById('comicModal');
//     modal.classList.remove('hidden');
//     document.body.style.overflow = 'hidden';
// }

// // Function to close modal
// function closeModal() {
//     const modal = document.getElementById('comicModal');
//     modal.classList.add('hidden');
//     document.body.style.overflow = 'auto';
// }

// // Function to generate modal content
// function generateModalContent(comic) {
//     return `
//                 <div class="relative">
//                     <!-- Banner Image -->
//                     <div class="relative h-48 bg-gradient-to-r from-primary to-orange-400">
//                         <img 
//                             src="${comic.bannerImage}" 
//                             alt="${comic.title} banner" 
//                             class="w-full h-full object-cover opacity-60"
//                             loading="lazy"
//                         />
//                         <button 
//                             onclick="closeModal()" 
//                             class="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
//                         >
//                             <i class="fas fa-times text-gray-600"></i>
//                         </button>
//                     </div>

//                     <!-- Content -->
//                     <div class="p-6 max-h-[calc(90vh-12rem)] overflow-y-auto scrollbar-thin">
//                         <div class="flex flex-col md:flex-row gap-6 mb-6">
//                             <!-- Cover Image -->
//                             <div class="flex-shrink-0">
//                                 <img 
//                                     src="${comic.coverImage}" 
//                                     alt="${comic.title} cover" 
//                                     class="w-48 h-64 object-cover rounded-xl shadow-lg"
//                                     loading="lazy"
//                                 />
//                             </div>

//                             <!-- Info -->
//                             <div class="flex-1">
//                                 <div class="flex items-start justify-between mb-4">
//                                     <div>
//                                         <h2 class="text-3xl font-bold text-gray-800 mb-2">${comic.title}</h2>
//                                         <p class="text-gray-600 mb-1">by ${comic.author}</p>
//                                         <p class="text-gray-600">Art by ${comic.artist}</p>
//                                     </div>
//                                     <div class="text-right">
//                                         <div class="flex items-center space-x-1 mb-2">
//                                             <i class="fas fa-star text-yellow-400"></i>
//                                             <span class="text-lg font-semibold">${comic.rating}</span>
//                                         </div>
//                                         <span class="inline-block px-3 py-1 rounded-full text-sm font-medium ${comic.status === 'Ongoing' ? 'bg-primary text-white' : 'bg-green-500 text-white'
//         }">
//                                             ${comic.status}
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <!-- Stats -->
//                                 <div class="grid grid-cols-2 gap-4 mb-6">
//                                     <div class="bg-gray-50 rounded-lg p-4 text-center">
//                                         <div class="text-2xl font-bold text-primary">${comic.chapters}</div>
//                                         <div class="text-sm text-gray-600">Chapters</div>
//                                     </div>
//                                     <div class="bg-gray-50 rounded-lg p-4 text-center">
//                                         <div class="text-2xl font-bold text-primary">${Math.floor(comic.rating * 100)}K</div>
//                                         <div class="text-sm text-gray-600">Readers</div>
//                                     </div>
//                                 </div>

//                            <div class="mb-6">
//                                     <h3 class="text-lg font-semibold text-gray-800 mb-3">Genres</h3>
//                                     <div class="flex flex-wrap gap-2">
                                      
//                                             <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
//                                                 ${comic.genres}
//                                             </span>
                                 
//                                     </div>
//                                 </div>

//                                 <!-- Action Buttons -->
//                                 <div class="flex gap-3">
//                                     <button class="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
//                                         <i class="fas fa-play mr-2"></i>Start Reading
//                                     </button>
//                                     <button class="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
//                                         <i class="far fa-bookmark text-gray-600"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         <!-- Description -->
//                         <div class="mb-6">
//                             <h3 class="text-xl font-semibold text-gray-800 mb-3">Synopsis</h3>
//                             <p class="text-gray-600 leading-relaxed">${comic.description}</p>
//                         </div>

//                         <!-- Chapters Preview -->
//                         <div>
//                             <h3 class="text-xl font-semibold text-gray-800 mb-4">Latest Chapters</h3>
//                             <div class="space-y-2">
//                                 ${Array.from({ length: 5 }, (_, i) => `
//                                     <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
//                                         <div>
//                                             <span class="font-medium text-gray-800">Chapter ${comic.chapters - i}</span>
//                                             <span class="text-sm text-gray-500 ml-2">2 days ago</span>
//                                         </div>
//                                         <div class="flex items-center space-x-4">
//                                             <span class="text-sm text-gray-500">15.2K views</span>
//                                             <i class="fas fa-lock text-gray-400"></i>
//                                         </div>
//                                     </div>
//                                 `).join('')}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
// }

// // Close modal when clicking outside content
// document.getElementById('comicModal').addEventListener('click', function (e) {
//     if (e.target === this) {
//         closeModal();
//     }
// });

// // Close modal with Escape key
// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape') {
//         closeModal();
//     }
// });

