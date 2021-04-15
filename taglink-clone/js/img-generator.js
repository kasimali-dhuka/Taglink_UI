$(document).ready(function(){
    
    var imgArr = [
        '1.jpg',
        '2.png',
        '3.jpg',
        '4.jpeg',
        '5.png',
        '6.jpeg',
        '7.jpeg',
        '8.png',
        '9.jpeg',
        '10.jpg'
    ];

    var random_num = Math.floor(Math.random() * imgArr.length);

    var result_img = imgArr[random_num];

    $("body").css("background-image", `url(images/background/${result_img})`);

});