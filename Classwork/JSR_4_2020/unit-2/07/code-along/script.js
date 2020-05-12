// Change myh1 to "I Said Hey, What's Going On"

// Get the first element in the document with class="hey" and change background color

window.onload = function(){
    document.getElementById('myh1').textContent = 'I said hey hey whats going on'

    document.querySelector('.hey').style.backgroundColor = 'purple'

// Create a couple of elements 
    let main_heading = document.createElement('h1')
    let heading_txt = document.createTextNode("What's going on")
    
    main_heading.appendChild(heading_txt)
    document.body.appendChild(main_heading)

// Create a new img with src imgs/sp.jpg

// Connect a button
    let button = document.getElementById("my-input-button")

    button.addEventListener("click", function(){
    // Get user input
        let userInput = document.getElementById('new-thing')

        console.log(userInput.value)
    })

// window load feature

// jQuery 

// by class 
}