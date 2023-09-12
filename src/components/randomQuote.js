import React from "react";
import './index.css';

function randomImages(){

let container = document.querySelector('.container');
let outer_container = document.querySelector('.outer-container');
let inner_container = document.querySelector('.inner-container');
let layer_container = document.querySelector('.layer-container');
let main_container = document.querySelector('.main-container');
let final_container = document.querySelector('.final-container');
let quote_container = document.querySelector('.quote-container');

let first = Math.floor(Math.random() * 500);
let second = 500

let result =  `https://random.imagecdn.app/${first}/${second}`
console.log(result)

    container.style.backgroundImage = `url(https://random.imagecdn.app/${first}/${second})`;
    outer_container.style.backgroundImage = `url(https://random.imagecdn.app/${first}/${second})`;
    inner_container.backgroundImage = `url(https://random.imagecdn.app/${first}/${second})`;
    layer_container.backgroundImage = `url(https://random.imagecdn.app/${first}/${second})`;
    main_container.style.backgroundImage = `url(https://random.imagecdn.app/${first}/${second})`;
    final_container.style.backgroundImage = `url(https://random.imagecdn.app/${first}/${second})`;
    quote_container.style.backgroundImage = `url(https://random.imagecdn.app/${first}/${second})`;

    
let cross  = document.querySelector('#none');
cross.addEventListener('click', crossFunction,  false);

function crossFunction(){
    container.style.backgroundImage = 'none'
    cross.style.display = 'none'
    block.style.color = "#000"
}

let block  = document.querySelector('#block');
block.addEventListener('click', wideFunction,  false);

function wideFunction(){
    container.style.backgroundImage = `url(https://random.imagecdn.app/${first}/${second})`;
    cross.style.display = 'block'
    block.style.color = "#fff"
}

}


function quote(){
    const url = "https://api.quotable.io/random";
    fetch(url)
    .then((data) => data.json())
    .then((item) =>{
        let author = document.getElementById('author');
        let content = document.getElementById('content');

        content.innerText = item.content;
        author.innerText = item.author;
    })
}

function RandomQuote(){
    requestAnimationFrame(randomImages)
    return(
        
    <div className="container">
    <i className="fa fa-plus"  id="block"></i>
    <i className="fa fa-close" id="none"></i>
    <div className="outer-container">
        <div className="inner-container">
            
            <div className="layer-container">
                
                <div className="main-container">
                    
                    <div className="final-container">
                        
                        <div className="quote-container">
                            <h4 id="content">...</h4>
                            <p id="author">...</p>
                            <button onClick={quote}>Change Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default RandomQuote;