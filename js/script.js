// Constants and Variables
const BASE_URL = 'https://proxify-news-api.herokuapp.com/api';

//cached element references
const $title = $('#title');
const $author = $('#author');
const $image = $('#image');
const $form = $('form');
const $input = $('input[type="text"]');

let userInput, publicationData;

// event listeners 
$form.on('submit', handleGetHeadlines);

// functions
function handleGetHeadlines(event) {
    event.preventDefault();

     userInput = $input.val();

    $.ajax(BASE_URL + '?category=' +userInput)
    .then(function(headlines) {
        publicationData = headlines.sources;
        render();

        render(headlines);
    }, function(error) {
        console.log('Error: ', error);
    });
}



function render() {
    const html = publicationData.map(function(article) {
        return`
            <h2>${article.name}</h2>
            <p>${article.description} <a href="</p>
        `
    })
    //${article.url}">Link to Article</a>

    //var result = str.link(article.url);
    // document.querySelector(article.description) {
    //     string.link(`<a href="${article.url}">Link to Article</a>`)};
    $('p').append(html);
    
    
};
// document.createEvent('MouseEvent');




// function render(fullStory) {
//     $publicationData.article.url({
//         src: publicationData.article.url,
//         alt: publicationData.article.name
//     });
// }



/*
visit eye stories.com
home page - top headlines images in us
12 photos from
  - hover to see article title and author
  -click to read full story

  search by author, source maybe date

*/