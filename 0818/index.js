import { data as items } from "./data.js";

document.addEventListener("DOMContentLoaded", function() {
    let inputOne = document.getElementById("input1");
    let inputOneCopy = document.getElementById("input1copy");
    let sentenceOne = document.getElementById("s1");
    let sentenceTwo = document.getElementById("s2");
    let confirmBtn = document.getElementById("confirm");
    let sentenceFour = document.getElementById("s4");
    let sentenceThree = document.getElementById("s3");
    const grassBtn=document.getElementById("grassButton")
    let form = document.getElementById("empowermentForm");

    // Hide sentenceTwo and sentenceFour initially
    sentenceTwo.style.display = "none";
    sentenceFour.style.display = "none";
    sentenceThree.style.display="none";
    confirmBtn.style.display="none"

    // Show sentenceTwo after 1 second
    
        grassBtn.addEventListener("click",function(){

            setTimeout(function() {
                sentenceTwo.style.display = "block";
                
            }, 2000);
                })




//here
  
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        let typedWord = inputOne.value;
        inputOneCopy.textContent = typedWord;
        sentenceThree.style.display="block";
        confirmBtn.style.display="block"
        confirmBtn.addEventListener("click",function(){
            sentenceFour.style.display = "block";
        });
        
    
    });

    // empowerForm.addEventListener('click', function(event) {
    //     const addButton = event.target.tagName==('BUTTON');
    //     if (addButton) {
    //         empowerForm.style.display="block";
    //     }
    // });

    // grassBtn.addEventListener("click",function(){
    //     empowerForm.style.display="block";
    // })
    document.getElementById('feed').addEventListener('click', function(event) {
        const addButton = event.target.tagName==('BUTTON');
        if (addButton) {
            form.style.display="block";
        }
    });

  });


  function getFeedHtml(){
    
    let feedHtml=``
    
    items.forEach(function(item){

        feedHtml+=`
       <img id ="${item.id}" class="icon" src="images/${item.id}.png">
        <button id="${item.id}Button" class="btn">${item.id}</button> 
        
        `
    })
    return feedHtml
}

/* <div class="item-class">
<p id="s1" class="flash-animation">${item.id}</p>
<p id="s2" style="display: none;" class="flash-animation">I am worthy because I am <input type="text" id="input1">.</p>
<p id="s3" style="display: none;" class="flash-animation">Sometimes I fail to be <span id="input1copy"></span>, will you still love me?</p>
<button id="confirm" class="btn" style="display: none;">YES</button>
<p id="s4" style="display: none;" class="flash-animation">Thank you. I love you too.</p>
<img id ="${item.id}-pic" class="pic" src="images/${item.id}.png">
</div> */

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render();