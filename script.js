
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

var user = {
    name: "",
};

var images = {
    1: Object.assign(new Image, {
        src: "http://i.stack.imgur.com/KUvWS.jpg"
      }),
      2: Object.assign(new Image, {
        src: "https://www.veggipedia.nl/assets/Uploads/Products/790c27918e/Jonagold-appel-fruit-veggipedia.jpg"
      }),
}
user.name = prompt("Please enter your name");
//console.log(images.img1)
//let state = {} -For extra options for the story, make it conditioned depending on state. For example: Covid=True? Then no entrance allowed.

function startGame() {
    showTextNode(1)
}
//Laat de tekst zien die nodig is en de opties die nodig zijn.
function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id ===
        textNodeIndex)
        textElement.innerText = textNode.text 
        while (optionButtonsElement.firstChild){
            optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        }
        // if (textNodes.img[textNodeIndex] = true){
        //     document.write('<div id="plaatje"><br><br><br><img src="'+[images.textNodeIndex.src]+'" height="100" width="200"/></div>') 
        // }
        textNode.options.forEach(option => {
            // Optie knoppen aanmaken voor de opties die in het object zitten (zie textNodes)
            if (showOption(option)) {
                const button = document.createElement('button')
                button.innerText = option.text
                button.classList.add('btn')
                button.addEventListener('click', () => selectOption(option)) //Starts selectoption functions
                optionButtonsElement.appendChild(button)
                
            }
        })
}

function showOption(option) {
    return option
}

function selectOption(option) {
        const nextTextNodeId = option.nextText
        if (nextTextNodeId <= 0) {
            return startGame()
        }
        showTextNode(nextTextNodeId)
       //Note2self Hier de remove element code (voor images)
}
//document.write('<div id="plaatje"><br><br><br><img src="'+[images.img1.src]+'" height="100" width="200"/></div>') 
const textNodes = [
    {
        id: 1,
        img: false, 
        text: 'The story starts with ' + [user.name] +  ' A first time adFemturer who finds a laptop in Valley of Silicones',
        options: [
            {
                text: [user.name] + ' Opens the laptop and tries to code herself',
                nextText: 2
            },
            {
                text: 'Seek advice from the Python you see wandering around',
                nextText: 3
            }
        ]
    }, 
    {
        id: 2,
        text: [user.name] + ' Gets an error something is wrong with the coding and is lacking information, she starts to be insecure about everything',
        options: [
            {
                text: 'Keep the faith alive, and gain more info and perspective',
                nextText: 4
            },
            {
                text: 'Assume that you know everthing and just keep trying to code',
                nextText: 5
            }
        ]
    },


    {
        id: 3,
        text: 'Python the FemTutor gives advice and tells about the many trials and tribulations to ' + [user.name] ,
        options: [
            {
                text: 'Agrees with the Python and goes for it',
                nextText: 6
            },
            {
                text: 'Too scared, too much self doubt and just to affraid to take advice and to trust the Python ',
                nextText: 7
            }
        ]
    },
    {
        id: 4,
        text: 'She becomes so good she makes code that is healing the world one code line at a time' ,
        options: [
            {
                text: 'Restart game',
                nextText: -1
            },
        ]
    },
    {
        id: 5,
        text: 'YOU DIED !!!! Death by your own code, death by biased data!!!!!!!!' ,
        options: [
            {
                text: 'Restart game',
                nextText: -1
            },
        ]
    },
    {
        id: 6,
        text: [user.name] + ' Has become the coding empresss and ruler of SillyCon Valley and 30 startups',
        options: [
            {
                text: 'Restart game',
                nextText: -1
            },
        ]
    },
    {
        id: 7,
        text: [user.name] + ' Becomes the biggest bug and destroys the thing you love most ALL CODE IN THE WORLD!!',
        options: [
            {
                text: 'Restart game',
                nextText: -1
            },
        ]
    },

]

startGame()






