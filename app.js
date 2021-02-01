/* IMAGES 
https://images.unsplash.com/photo-1611494768537-2741629a5cec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=700&q=80

https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80

https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80

https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80

*/ 

// initialize all variables 
const imageInput = document.querySelector('input[name="imageurl"]'); 
const textTopInput = document.querySelector('input[name="texttop"]'); 
const textBottomInput = document.querySelector('input[name="textbottom"]'); 
const form = document.getElementById('meme-form'); 
const memeList = document.querySelector('.meme-list'); 

// initialize all functions
function createMeme(url) {
    // create element -> img
    const img = document.createElement('img'); 
    img.setAttribute('src', url); 
    img.classList.add('meme-img'); 
    // return img 
    return img
}

function topText(top) {
    // create element -> div
    const topDivText = document.createElement('div'); 
    topDivText.innerText = top; 
    topDivText.classList.add('text-top'); 
    // return topH3
    return topDivText; 
}

function bottomText(bottom) {
    // create element -> div
    const bottomDivText = document.createElement('div'); 
    bottomDivText.innerText = bottom; 
    bottomDivText.classList.add('text-bottom'); 
    // return bottomH3
    return bottomDivText; 
}

// eventListener on form('submit')
form.addEventListener('submit', function(e) {
    // console.log('submitted'); 

    // create element -> div 
    const newDiv = document.createElement('div'); 
    // class meme
    newDiv.classList.add('meme'); 

    // append newDiv to memeList 
    memeList.append(newDiv); 

    // initialize variable and call createMeme function and pass 3 arguments
    const newMeme = createMeme(imageInput.value); 
    const textTop = topText(textTopInput.value); 
    const textBottom = bottomText(textBottomInput.value); 

    // create element -> div
    const deleteDiv = document.createElement('div'); 
    // class text
    deleteDiv.classList.add('delete'); 
    // innerText 
    deleteDiv.innerText = 'X'; 

    // append newMeme to newDiv
    newDiv.appendChild(newMeme); 
    newDiv.appendChild(textTop); 
    newDiv.appendChild(textBottom); 
    newDiv.appendChild(deleteDiv); 

    // prevent default behavior
    e.preventDefault(); 

    // form reset
    form.reset(); 
}); 

// eventListener on section .meme('click'); target 
memeList.addEventListener('click', function(e) {
    // initialize lowercase variable target 
    const lowerCaseDivTag = e.target.tagName.toLowerCase(); 
    // if target is img 
    if(lowerCaseDivTag === 'div') {
        // remove 
        e.target.parentNode.remove(); 
    }
})

