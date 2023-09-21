
//Demander au user de choisir ça tache

// new: to add a todo
// list: to see all the todos
// delete: to remove a specific todo
// quit: to exit de program


//infos::::::::
//delete:
//supression par l'id de la liste
//quit:
//sortir de la boucle



//Switch pour le choix du user



//La liste du user, exemple:
// ********* TODO LIST *********
// 1. Walk out the dog
// 2. Drink some milk
// 3. Learn JavaScript
// 4. Make exercises
// etc...



// alert("welcome to the game ! 8-D ")
let quit = false;
let userChoice;
let tabToDoList= []
let nbrItem = 1
let tampon = 0;

userChoice = prompt(`
    Chose your tasks:
        new: to add a todo
        list: to see all the todos
        delete: to remove a specific todo
        quit: to exit de program
`);

do {
    switch (userChoice) {
        case 'new':
            tabToDoList.push(prompt(`you can add your item`))
            userChoice = prompt(`
                Chose your tasks:
                    new: to add a todo
                    list: to see all the todos
                    delete: to remove a specific todo
                    quit: to exit de program
            `);
            break;

        case 'list':
            if (tabToDoList.length == 0) {
                alert('No items in the list')
            }else{
                let element = "";
                for (let i = 0; i < tabToDoList.length; i++) {
                    tampon = nbrItem + i;
                    element += ` \n ${tampon}. ${tabToDoList[i]} `;
                }
                alert("********* TODO LIST *********"+element)
            }
            userChoice = prompt(`
                Chose your tasks:
                    new: to add a todo
                    list: to see all the todos
                    delete: to remove a specific todo
                    quit: to exit de program
            `);
            break;

        case 'delete':
            let idNbr = Number;
            let element = "";
            for (let i = 0; i < tabToDoList.length; i++) {
                tampon = nbrItem + i;
                element += ` \n ${tampon}. ${tabToDoList[i]} `;
            }
            idNbr = prompt(`
                Indicate the element number to delete \n
                ********* TODO LIST *********
                ${element}
            `)
            
            if (Boolean(tabToDoList.find(ele => {
                return ele[idNbr]
            }))){
                tabToDoList.splice(idNbr, 1)
            }else{
                alert("element not found")
            }
            userChoice = prompt(`
                Chose your tasks:
                    new: to add a todo
                    list: to see all the todos
                    delete: to remove a specific todo
                    quit: to exit de program
            `);
            break;

        case 'quit':
            quit = true;
            break;

        default:
            alert('Sorry, but, incorrect indication !!')
            userChoice = prompt(`
                Chose your tasks:
                    new: to add a todo
                    list: to see all the todos
                    delete: to remove a specific todo
                    quit: to exit de program
            `);
            break;
    }
    console.log(tabToDoList)
} while (quit == false);

alert("Thank you and see you soon !!!")




