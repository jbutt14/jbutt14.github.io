// Add an alert to your page
alert('hey, I am an alert')
// Change myh1 to "I Said Hey, What's Going On"
document.getElementById('myh1').textContent = "I Said Hey, What's Going On"
// Get the first element in the document with class="hey" and change background color
document.querySelector(".hey").style.backgroundColor = "green"
// Create a couple of elements 
let main_heading = document.createElement("h1");
let heading_text = document.createTextNode("Hello dynamic world!");
main_heading.appendChild(heading_text);
document.body.appendChild(main_heading);
// Create a new img with src imgs/sp.jpg
let x = document.createElement('img')
x.setAttribute("src", "imgs/sp.jpg")
document.body.appendChild(x)
// Connect a button
let button = document.getElementById("my-input-button")
// Get user input
button.onclick = function(e){
    let userInput = document.getElementById('new-thing').value
    console.log(userInput)
}


// all together

window.onload = function(){
    // setup button
    let button = document.getElementById("my-input-button")
   
    
    button.onclick = function(e){
        let newThingInput = document.getElementById('new-thing').value
        // create an alert
        //alert('hey')
        // create a couple of elements in an empty HTML page
        let main_heading = document.createElement("h1");
        let heading_text = document.createTextNode("Hello dynamic world!");
        main_heading.appendChild(heading_text);
        document.body.appendChild(main_heading);
        // Change myh1 to "I Said Hey, What's Going On"
        document.getElementById('myh1').textContent = "I Said Hey, What's Going On"
        // Get the first element in the document with class="hey" and change background color
        document.querySelector(".hey").style.backgroundColor = "green"
        // Create a new img with src imgs/sp.jpg
        let x = document.createElement('img')
        x.setAttribute("src", "imgs/sp.jpg")
        document.body.appendChild(x)
        // add text from form input 
        console.log(newThingInput)

    }
}

// jQuery 
// Add to you index.html
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>


// by class 
let $myH1 = $('.hey')
$myH1.css('color', 'red')

//  by id
let $button = $('#my-input-button')
$button.on('click', (e)=>{
    console.log('heyy')
})