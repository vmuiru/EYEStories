// Constants and Variables
const API_KEY = '89194dedd2cd4815893a2c41dbd7adcb'; //CONFIG.newsAPIKey
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us&apikey=';

//cached element references
const $title = $('#title');
const $author = $('#author');
const $image = $('#image');
const $form = $('form');
const $input = $('input[type="text"]');

let userInput; 

// event listeners 
$form.on('submit', handleGetData);

// functions
function handleGetData(event) {
    event.preventDefault();

     userInput = $input.val();

    $.ajax(BASE_URL +`q=${userInput}&` + `units=&appid=`+ API_KEY)
    .then(function(data) {
        console.log('DATA: ', data);

        render(data);
    }, function(error) {
        console.log('Error: ', error);
    });
}


function render(data) {
    $title.text('Title: ' + data.title);
    $author.text('Author: ' + data.author);
    // $feelsLike.text('Feels Like: ' + data.main.feels_like);
    // $currentWeather.text('Current Weather: ' + data.weather[0].description);
};

// $currentWeather.grep(data.weather[0].description, funcition('cloud')) {
// render('<img src="/.img/yang-yang-HqprR1VEDjw-unsplash.jpg">'); 
// };


// if($currentWeather.text === 'scattered clouds') {
//     render('<img src="/.img/yang-yang-HqprR1VEDjw-unsplash.jpg">');
// }

