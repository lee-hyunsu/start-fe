const url = `https://dapi.kakao.com/v2/search/web?query=#query&page=#page`

const $docs = document.querySelector('#docs');
const $query = document.querySelector('#query');
const $searchButton = document.querySelector('#searchButton');
const $moreButton = document.querySelector('.moreButton');

let page = 1;

function getFetch(url, callback) {
    const headers = {
        Authorization: `KakaoAK 973ef701a4e5f945ca3c5d02ab1d7d3d`
    };

    fetch(url, {headers})
      .then((response) => response.json())
      .then((data) => callback(data));
}

function search() {
    const query = $query.value;
    const searchUrl = url.replace('#query', query).replace('#page', page);
    // url = url.replace('#query', query);

    getFetch(searchUrl, (data) => {
        const { documents } = data;
        // const documents = data.documents;
        // console.log(documents);

        const docs = documents.map((document) => {
        // console.log(document);
            return document.contents;
        });

        // console.log(docs);

        $docs.innerHTML = docs.join('<hr>');
    });
}

$searchButton.addEventListener('click', search);

$moreButton.addEventListener('click', (function () {
    page++;
    
    search();
    
}));

$query.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    search();
});