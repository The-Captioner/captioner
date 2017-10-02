// const Vision = require('@google-cloud/vision');

// // Instantiates a client
// const vision = Vision();

function previewFile() {
    var preview = document.querySelector('.bigImage'); //selects the query named img 
    var file = document.querySelector('input[type=file]').files[0]; //sames as here 
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    console.log(file);
    if (file) {
        var image = reader.readAsDataURL(file);
    }//reads the data as a URL 
    else {
        preview.src = "";
    }

} previewFile(); //calls the function named previewFile()

$('#container').append('<div id="question"><p><b>HOW WERE YOU FEELING WHEN THIS PICTURE WAS TAKEN?</b></p></div>');
$('#container').append('<div id="filters"></div>');

var text = ['CHILLIN LIKE A VILLAIN', 'NIHILIST', 'KANYE', 'BEYONCE', 'FRIENDS', 'BETTER HAVE MY MONEY', 'ESOTERIC', 'ARTSY FARTSY', 'DO YOU EVEN LIFT?', 'FOODIE', 'BAE STATUS'];
var idNames = ['chill', 'nihilist', 'kanye', 'beyonce', 'friends', 'baddie', 'esoteric', 'artsy', 'lift', 'foodie', 'bae']
var x = document.getElementById('filters');
for (var i in text) {
    var button = document.createElement('BUTTON');
    button.id = idNames[i];
    button.appendChild(document.createTextNode(text[i]));
    x.appendChild(button);
}

// for (var i = 1; i < idNames.length; i++){
//     document.getElementById(idNames[i]).className = "filterlink";
// }

// document.getElementById('chill').className = "filterlink filteractive";

var divMain = document.createElement("div");
divMain.id = 'main';
document.getElementById('container').appendChild(divMain);

// var divChill = document.createElement("div");
// divChill.id = 'chill';
// divChill.className = 'maindiv mainactive';
// document.getElementById('main').appendChild(divChill);


// var divNih = document.createElement("div");
// divNih.id = 'main-nihilist';
// divNih.className = 'maindiv';
// document.getElementById('main').appendChild(divNih);

// var divKanye = document.createElement("div");
// divKanye.id = 'main-kanye';
// divKanye.className = 'maindiv';
// document.getElementById('main').appendChild(divKanye);

// var divBeyonce = document.createElement("div");
// divBeyonce.id = 'main-beyonce';
// divBeyonce.className = 'maindiv';
// document.getElementById('main').appendChild(divBeyonce);

// var divFriends = document.createElement("div");
// divFriends.id = 'main-friends';
// divFriends.className = 'maindiv';
// document.getElementById('main').appendChild(divFriends);

// var divBaddie = document.createElement("div");
// divBaddie.id = 'main-baddie';
// divBaddie.className = 'maindiv';
// document.getElementById('main').appendChild(divBaddie);

// var divEsoteric = document.createElement("div");
// divEsoteric.id = 'main-esoteric';
// divEsoteric.className = 'maindiv';
// document.getElementById('main').appendChild(divEsoteric);

// var divArtsy = document.createElement("div");
// divArtsy.id = 'main-artsy';
// divArtsy.className = 'maindiv';
// document.getElementById('main').appendChild(divArtsy);

// var divLift = document.createElement("div");
// divLift.id = 'main-lift';
// divLift.className = 'maindiv';
// document.getElementById('main').appendChild(divLift);

// var divFoodie = document.createElement("div");
// divFoodie.id = 'main-foodie';
// divFoodie.className = 'maindiv';
// document.getElementById('main').appendChild(divFoodie);

// var divBae = document.createElement("div");
// divBae.id = 'main-Bae';
// divBae.className = 'maindiv';
// document.getElementById('main').appendChild(divBae);

//console.log(document.getElementsByClassName('maindiv'));
var array = Array.from(document.getElementsByTagName('button'));
// var temp = document.getElementById('chill');
var caps;
var curr = document.getElementById('main');

for (var i = 0; i < array.length; i++) {
    array[i].addEventListener('click', event => {
        //console.log('button press', event.target.id)
        // temp.className = 'maindiv';
        // curr.className = 'maindiv active';
        caps = window[event.target.id];
        
        randNum = Math.floor(Math.random()*(caps.length));
        var randCap = caps[randNum];
        var mybr = document.createElement('br');
        $('#caption').append(randCap);
        $('#caption').append(mybr);

    });
    //console.log(caps);
    ;
}



// The path to the local image file, e.g. "/path/to/image.png"
// const fileName = 'file:///Users/natashamboya/Documents/summer-academy-code/captioner/food-sample.jpg';

// // Performs property detection on the local file
// vision.imageProperties({ source: { filename: fileName } })
//   .then((results) => {
//     const properties = results[0].imagePropertiesAnnotation;
//     const colors = properties.dominantColors.colors;
//     colors.forEach((color) => console.log(color));
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });


/**
 * each button needs event listener that calls this function described below
 * button.addEventListener('click', callback )
 * before this callback function you need two variables to hold the ones that are currently displayed
 * function callback(event){} --> event.target gives where that event took place vra temp = event.target that gives button
 *  * so each button had a navlink class and each thing that you wanted displayed so like the words was a maindiv so e
 * each navlink has a navlink class and each maindiv has a maindiv class, but ONLY ONE also has a class of like "maindiv mainactive"
 * so when the button 
 * in css designate one class to be hidden and another to be displayed, 
 */


