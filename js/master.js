let backgroundOption =true; 
//check if there is color in local storege
let mainColors =localStorage.getItem("color_option");        //R20
console.log(mainColors)
if(mainColors !==null){
    document.documentElement.style.setProperty("--main--color", localStorage.getItem("color_option"))
    document.querySelectorAll(".colors-list li").forEach(element =>{
        element.classList.remove("active");
        //Add Active Class On Element with Data color ===local storge Item
        if(element.dataset.color===mainColors){

            //Add Active class
            element.classList.add("active")
        }
    })
}


//Toggle Spin class on Icon  , function that add class two time (first for icon)(second for window setting) on click
document.querySelector(".toggle-setting i").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}


//Switch Colors 
const colorsLi =document.querySelectorAll(".colors-list li")
colorsLi.forEach(li => {
    li.addEventListener("click", (e) =>{
        console.log(e.target.dataset.color)
        //set color in root
        document.documentElement.style.setProperty("--main--color", e.target.dataset.color)
        //set Color on local Storage
        localStorage.setItem("color_option" , e.target.dataset.color)        //R20
        //Remove Active Class From All li
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active")
        });
        //Add Active Class on Element i click
        e.target.classList.add("active");
    });
    
});



//anthoer idea for remove class from all element and add it to element i clicked
//Switch Random background option 
const RandomBackgroundEl =document.querySelectorAll(".random-backgrounds span")
//loop on all Spans
RandomBackgroundEl.forEach(span => {
        span.addEventListener("click", (e) =>{
        //Remove Active Class From All span
        e.target.parentElement.querySelectorAll(".active").forEach(element =>{
            element.classList.remove("active")
        });
        //Add Active Class on Element i click
        e.target.classList.add("active");
        if(e.target.dataset.background==="yes"){
            backgroundOption=true;
            randomizeImgs();
        }else{
            backgroundOption=false;
            clearInterval(backgroundInterval);
        }
    });
    
});







//last code 
/*
//Select Landing page Element ,,first idea
let landingPage=document.querySelector(".landing-page");
//Get Array imgs 
let imgsArray=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
setInterval(() => {
    let randomNumber =Math.floor(Math.random() * imgsArray.length);
    landingPage.style.backgroundImage='url("../imgs/'+imgsArray[randomNumber]+'")';
}, 1000);
*/
//end last code 



//ٌRandom Background Option 
//let backgroundOption =true;      رفعناه فوق 
let landingPage=document.querySelector(".landing-page");
let imgsArray=["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"]; 

//variable To Control the Interval
let backgroundInterval;





//Function To Randomize Imgs
function randomizeImgs(){
    if(backgroundOption===true){
        backgroundInterval=setInterval(() => {
        let randomNumber =Math.floor(Math.random() * imgsArray.length);
        landingPage.style.backgroundImage='url("../imgs/'+imgsArray[randomNumber]+'")';
        }, 2000);
    }
}
randomizeImgs();






