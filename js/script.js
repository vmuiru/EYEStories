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

    $.ajax(BASE_URL + '?category=' + userInput)
        .then(function (headlines) {
            publicationData = headlines.sources;
            render();

            render(headlines);
        }, function (error) {
            console.log('Error: ', error);
        });
}



function render() {
    const html = publicationData.map(function (article) {
        return `
            <h2>${article.name}</h2>
            <p>${article.description}</p>
        `
    })

    $('#articles-container').append(html);


};