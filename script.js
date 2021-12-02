
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

                let house = $(`<div><h2>Hogwarts House: ${elem.house}</h2></div>`).addClass('house-card')
                $(house).appendTo(resultCard)

                let ancestry = $(`<div><h3>Wizarding Lineage: ${elem.ancestry.toUpperCase()}</h3></div>`).addClass('ancestry-card')
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

async function gryffindorButton (){
   // research promises  
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    const gryffindors =data.filter( (person) => {
    return person.house === "Gryffindor"
    })
    console.log(gryffindors)
}
    document.getElementById('gLogo').addEventListener('click', gryffindorButton)


 
async function slytherinButton (){
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    const slytherin =data.filter( (person) => {
    return person.house === "Slytherin"
    })
    console.log(slytherin)
 }
    document.getElementById('sLogo').addEventListener('click', slytherinButton)


async function HufflepuffButton (){
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    const hufflepuff =data.filter( (person) => {
    return person.house === "Hufflepuff"
    })
    console.log(hufflepuff)
}
    document.getElementById('hLogo').addEventListener('click', HufflepuffButton)


async function ravenclawButton (){
    const response = await fetch('http://hp-api.herokuapp.com/api/characters')
    const data = await response.json()
    const ravenclaw =data.filter( (person) => {
    return person.house === "Ravenclaw"
    })
    console.log(ravenclaw)
 }
    document.getElementById('rLogo').addEventListener('click', ravenclawButton)




