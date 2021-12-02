
search()
function search (){
    let characters 


$.get('http://hp-api.herokuapp.com/api/characters', function(data) {
       characters = data;    
console.log(characters)
} )
   
    $('#search').on( 'click', function(){
      
        let input = $('input[type=text][name=search]').val()
        
            input = input.toLowerCase()
            
            console.log(input)

             characters.forEach(function (elem, index) {
                    if(input === elem.name.toLowerCase()){

                    
                let resultCard = $('<span>').addClass('result-card')
                $(resultCard).appendTo('#searchResults')

                let cardTitle = $('<h1></h1>').addClass('card-title').text(`${elem.name}`)
                $(cardTitle).appendTo(resultCard)
                    
                if(elem.image === ''){
                    let image = $(`<img></img>`).addClass('image-card').attr('src', 'https://i.pinimg.com/474x/f2/34/ba/f234babd59e0ab095063c0f38727a1f8.jpg')
                    $(image).appendTo(resultCard)
                
                } else {
                let image = $(`<img></img>`).addClass('image-card').attr('src', elem.image)
                $(image).appendTo(resultCard)
                }

                let house = $(`<div><h2>House: ${elem.house}</h2></div>`).addClass('house-card')
                $(house).appendTo(resultCard)

                let ancestry = $(`<div><h3> Lineage: ${elem.ancestry.toUpperCase()}</h3></div>`).addClass('ancestry-card')
                $(ancestry).appendTo(resultCard)

                // let wood = elem.wand.wood
                // let core = elem.wand.core
                // let length= elem.wand.length

                // let wand= $(`<div><h4> Wand Made of:${wood} Core of: ${core} length of: ${length}</h4></div>`).addClass('wand-card')
                // $(wand).appendTo(resultCard)
                


                        


                    } 
            });

            
    })
}









gryffindorImage()

function gryffindorImage(){
    let gLogo = $('<img></img>').addClass('gLogo').attr('src','https://static.wikia.nocookie.net/pottermore/images/1/16/Gryffindor_crest.png/revision/latest/scale-to-width-down/217?cb=20111112232412')
    $(gLogo).appendTo('#gryffindor-div')

    let gButton = $('.gLogo').click(gryffindorButton) 
    $(gButton).appendTo('#gryffindor-div')
}

async function gryffindorButton (){
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    const gryffindors =data.filter( (person) => {
    return person.house === "Gryffindor"
    })
    const gElement = document.getElementById('gryffindor-div')
    const gArr = document.getElementsByClassName('gNames')
    
    if(gElement.children.length > 1){
        for(let i = 0; gArr.length; i ){
            gArr[i].remove()
        }
    }else{
        for(let i = 0; i < 10; i++){
            let gNames = $('<div></div>').addClass('gNames').text(gryffindors[i].name)
            $(gNames).appendTo('#gryffindor-div')
        }
    }
}
slytherinImage()
function slytherinImage(){
    let sLogo = $('<img></img>').addClass('sLogo').attr('src','https://www.nicepng.com/png/full/43-438820_slytherin-crest-slytherin-png.png')
    $(sLogo).appendTo('#slytherin-div')

    let gButton = $('.sLogo').click(slytherinButton) 
    $(gButton).appendTo('#slytherin-div')
}


async function slytherinButton (){
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    const slytherin =data.filter( (person) => {
    return person.house === "Slytherin"
    })
    const sElement = document.getElementById('slytherin-div')
    const sArr = document.getElementsByClassName('sNames')
    
    if(sElement.children.length > 1){
        for(let i = 0; sArr.length; i ){
            sArr[i].remove()
        }
    }else{
        for(let i = 0; i < 10; i++){
            let sNames = $('<div></div>').addClass('sNames').text(slytherin[i].name)
            $(sNames).appendTo('#slytherin-div')
        }
    }
 }
    
 hufflepuffImage()
 function hufflepuffImage(){
     let hLogo = $('<img></img>').addClass('hLogo').attr('src','https://static.wikia.nocookie.net/the-potters/images/5/5e/Hufflepuff_crest.png/revision/latest/scale-to-width-down/204?cb=20200616224259')
     $(hLogo).appendTo('#hufflepuff-div')
 
     let hButton = $('.hLogo').click(hufflepuffButton) 
     $(hButton).appendTo('#hufflepuff-div')
 }

async function hufflepuffButton (){
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    const hufflepuff =data.filter( (person) => {
    return person.house === "Hufflepuff"
    })
    const hElement = document.getElementById('hufflepuff-div')
    const hArr = document.getElementsByClassName('hNames')
    
    if(hElement.children.length > 1){
        for(let i = 0; hArr.length; i ){
            hArr[i].remove()
        }
    }else{
        for(let i = 0; i < 10; i++){
            let hNames = $('<div></div>').addClass('hNames').text(hufflepuff[i].name)
            $(hNames).appendTo('#hufflepuff-div')
        }
    }
}
    

ravenclawImage()
function ravenclawImage(){
    let rLogo = $('<img></img>').addClass('rLogo').attr('src','https://static.wikia.nocookie.net/pottermore/images/4/40/Ravenclaw_Crest_1.png/revision/latest/scale-to-width-down/826?cb=20140604194505')
    $(rLogo).appendTo('#ravenclaw-div')

    let rButton = $('.rLogo').click(ravenclawButton) 
    $(rButton).appendTo('#ravenclaw-div')
}

async function ravenclawButton (){
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    const ravenclaw =data.filter( (person) => {
    return person.house === "Ravenclaw"
    })
    
    const rElement = document.getElementById('ravenclaw-div')
    const rArr = document.getElementsByClassName('rNames')
    
    if(rElement.children.length > 1){
        for(let i = 0; rArr.length; i ){
            rArr[i].remove()
        }
    }else{
        for(let i = 0; i < 10; i++){
            let rNames = $('<div></div>').addClass('rNames').text(ravenclaw[i].name)
            $(rNames).appendTo('#ravenclaw-div')
        }
    }
 }
    




