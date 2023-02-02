//reviews data
const flowers=[//must use coma to seperate each of data.
{
    id:1,
    name:"Buttercup",
    img:"https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Buttercup-min.jpg",
    text:"Buttercups feature single or loosely clustered flowers with yellow petals and green foliage. Buttercups usually flower in the spring, but you can sometimes find flowers throughout the summer."
},
{
    id:2,
    name:"Camellia",
    img:"https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Camellia-min.jpg",
    text:"Camellia flowers are large and showy with a rose-like appearance in colors ranging from white to pink, red, and yellow. Camellias are known to symbolize love, affection, and admiration.",
},
{
    id:3,
    name:"Forget Me Not",
    img:"https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Forget-Me-Not-min.jpg",
    text:"Forget me nots are always recognizable by their deep blue petals contrasted with a bright yellow center. They have bright green foliage, which contrasts nicely with their blue blooms.",
},
{
    id:4,
    name:"Jasmine",
    img:"https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Jasmine-min.jpg",
    text:"Jasmine grows as a climbing vine and produces tubular, waxy-white flowers and oval, shiny leaves. The flowers emit a rich, sweet, and sensual fragrance that’s used in perfumes across the globe.",
},
{
    id:5,
    name:"Delphinium",
    img:"https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Delphinium-min.jpg",
    text:"Delphiniums are known for their large spikes of colorful flowers in shades of blue,white and purple. They’re more challenging to grow than other types of flowers because they don’t like hot, dry weather."
},
{
    id:6,
    name:"Gardenia",
    img:"https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Gardenia-min.jpg",
    text:"Notable for their wax-like appearance and oval-shaped leaves, gardenia flowers range from pale yellow to creamy white. Gardenias are also known for their sweet scent.",
},
{
    id:7,
    name:" Orchid",
    img:"https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Orchids-min.jpg",
    text:"Orchid flowers include several features, including three petals, three sepals, and a single lip that extends, which is known as a labellum. Orchids also have a waxy tube-like structure in the center of the flower called a column.",
},{
    id:8,
    name:"Tulip",
    img:"https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Tulips-min.jpg",
    text:"Tulips have ruffled petals with streaks of colors and are available in a variety of colors including pink, red, yellow, orange, purple, and white. There are a wide variety of types of tulips, and they are often cultivated to achieve different characteristics.",
}
];

//select items
const img=document.getElementById("fimg");
const flowername=document.getElementById("name");
const intro=document.getElementById("intro");
//set button
const prevbtn=document.querySelector(".prevbtn");
const nextbtn=document.querySelector(".nextbtn");
const randombtn=document.querySelector(".randombtn");

//set starting item
let current=0;
window.addEventListener("DOMContentLoaded", function(){
    firstpage(current);
});
//load initial item
function firstpage(review){
    const first=flowers[review];
    img.src=first.img;
    flowername.textContent=first.name;
    intro.textContent=first.text;
}
//shoe next flower
nextbtn.addEventListener("click", function(){
    current++;
    if(current>flowers.length-1){//when reaching the last data,it can continue to display the first data
        current=0;
    }
    firstpage(current);
});
//shoe previous flower
prevbtn.addEventListener("click", function(){
    current--;
    if(current<0){
        current=flowers.length-1;
    }
    firstpage(current);
});
//show random flower
randombtn.addEventListener("click", function(){
    firstpage(randomflower());
});
function randomflower(){
    return Math.floor(Math.random()*4);
}