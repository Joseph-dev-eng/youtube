       function choose(){
            alert("Welcome to Star,thank for visting.");
        }
var pics = [
    "img/photo_2020-04-11_08-45-24.jpg",
"img/book.jpg",
"img/sun.jpg",
"img/man reading.jpg",
"img/girl sit.jpg"
];
var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
    if (counter===5){
        counter = 0;
    }
    img.src =pics[counter]
    counter = counter + 1;
});