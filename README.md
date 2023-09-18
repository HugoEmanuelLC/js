# <h1 style="text-align: center;">JAVASCRIPT</h1>

Javascript est un langage de programmation qui peut être exécuté par le navigateur.

Javascript est le SEUL langage de programmation pouvant être exécuté par le navigateur.

HTML et CSS sont lus et interprétés par le navigateur, mais ils ne sont pas un langage de programmation (qui contient des opérations et des exécutions logiques).

HTML et CSS sont du contenu statique que nous livrons à un navigateur. Javascript est le seul moyen dont nous disposons pour modifier la page de manière dynamique sans modifier les fichiers HTML et CSS d'origine.

### No async or defer :

![](./no-async-or-defer.png)

### async :

![](./async.png)

### defer :

![](./defer.png)

### Nombres :

```js
let myNumber = 79;
typeof myNumber; // Returns number

2 ** 2; // (2 by the power of 2) Returns 4

Math.round(8.15); // Return 8
Math.round(8.76); // Returns 9

Math.floor(8.9); // Returns 8
Math.ceil(3.1); // Returns 4

// toFixed
let myNumber = 5.379453;
myNumber.toFixed(2); // Returns 5.37
```

##### convertir une chaîne en nombre :

```js
// parseFloat
let myString = "4.786";
parseFloat(myString); // Returns 4.786 (the number, not the string)

// ParseInt
parseInt(myString); // Returns 4
```

##### Et vice versa :
```js
let num = 54;
num.toString(); // Returns "54" (the string, not the number)
```

### Null and Undefined :

***Undefined*** 
- signifie que la variable a été déclarée, mais que sa valeur n'a pas été attribuée.

### logical operator :

- **AND &&**
- **OR ||**
- **NOT !**

### falsy and thruty values :

Certaines valeurs, dans une comparaison, sont toujours considérées comme fausses. Ceux-ci sont :

- la valeur **false**
- une chaîne **vide ""**
- **undefined**
- **null**
- **NaN** (Pas un numéro)
- le nombre **0**

    > Toute autre valeur est considérée **truthy**

### Comparison :

Tha main comparison operators are :

- more than `>`
- less than `<`
- equals to `==` (independent of data type. So `4 == "4"` is true.)
- strictly equals to `===` (dependant of data type. So `4 === "4"` is false)
- not equal to `!=`
- strictly not equals to `!==`
- more than or equal to `>=`
- less than or equal to `<=`
- strictly more than or equal to `>==`
- strictly less than or equal to `<==`

### Conditions :

```js
// IF, ELSE IF, ELSE
if(condition1){
    //code
}else if(condition2){
    //code
}else{
    //code
}

// Normal IF ELSE :
if (laundry === "dirty") {
  cleanLaundry();
} else {
  watchTv();
}

// With ternary operator :
laundry === "dirty" ? cleanLaundry() : watchTv();

//Swith :
let variable = "valeur2";
switch (variable) {
    case "valeur1":
        //code
        break;
    case "valeur2":
        //code
        break;
    default:
        //code
        break;
}

//OU ex :
let today = new Date().toLocaleString('default', {weekday: 'short'});
switch (true) {
    case today === 'Mon':
        //code
        break;
    case today === 'Tue':
        //code
        break;
    case today === 'Wed':
        //code
        break;
    case today === 'Thu':
        //code
        break;
    case today === 'Fri':
        //code
        break;
    case today === 'Sat':
        //code
        break;
    case today === 'Sun':
        //code
        break;
    default:
        //code
        break;
}
```

##### Control Flow :

![](./control-flow.png)

### Loops (boucles) :

```js
//for :
for(){}

//do/while :
while(){}

do{}while()

//for in :

//for of :
```

### Functions :

```js
const name = prompt("What is your name?");
alert(`Welcome ${name}!`);
```