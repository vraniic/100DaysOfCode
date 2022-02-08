function tripleFive () {
    for (i = 0; i < 3; i++) {
        console.log('five')
    }
}

tripleFive()

// 
// 
// 
//  zadatak broj dva

console.log();
console.log('zadatak broj dva');
function lastLetter (text) {
    const array = text.split("")
    console.log(array[array.length - 1])

}

lastLetter('mateja')

lastLetter('otorinolaringologija')

// 
// 
// 
// zadatak broj tri

console.log();
console.log('zadatak broj tri');

function square (x) {
    let result = x*x
    console.log(result)
}

square(8)
square(3)

// 
// 
// 
// zadatak broj cetiri 

console.log();
console.log('zadatak broj cetiri');

function negate (x) {
    let result = x = -x
    console.log(result)
}

negate(3)

// 
// 
// 
// zadatak broj pet

console.log();
console.log('zadatak broj pet');

function toArray (a, b, c) {
    let  string = a + b + c
    let array = string.split('')
    console.log(array)
} 

toArray('a', 'b', 'c')

// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj sest');

startsWithA = (string) => {
    let array = string.split('')
    if (array[0] === 'a' || array[0] === 'A') {
        console.log('it starts with a or A')
    }
    else {
         console.log('this word doesnt start with a')
}
}

startsWithA('mateja')
startsWithA('aadnekdhfakjasdhjfkhsjakfh')

// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj sedam');

function excite (string) {
    console.log(`${string} !!!`)
}

excite('viktore')

// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj osam');

function sun (string) {
    let array = string.split('')
    for (let i = 0; i < array.length; i++) {
        if (array[i] + array[i+1] + array[i+2] === 'sun') {
            console.log('true')
            return
        }
        
    }
    console.log('false')
}
 sun('majka')
 sun('asunce')

// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj devet'); 

function tiny (x) {
    if (x < 1 && x > 0) {
        console.log('true')
    }
    else { console.log('false')
}
}

tiny(0.5)
tiny(0.6546)
tiny(5)

// 
// 
// 
// zadatak broj 1
//  

//  NE ZNAM DA URADIM OVO DOLE 


// console.log();
// console.log('zadatak broj 1');

// function getName({Name: x, age: y}) {
//     console.log()
// }

// getName({Name: 'luisa', age: 25})


// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj 2');

function letterCapitalize(string) {
    let pattern = / /g;
    let result = string.match(pattern) 
    console.log(result);

}


letterCapitalize('ja sam viktor')


// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj 3');

function primeNumbers(x) {
    if (x === 3) {
        console.log('true');
    }
    else if (x === 5) {
        console.log('true');
    }
    else if (x === 2) {
        console.log('true');
    }
    else if (x % 2 !== 0 &&
        x % 3 !== 0 &&
        x % 4 !== 0 &&
        x % 5 !== 0
        ) {
        console.log('true');
    }
    else {console.log('false')}
}

primeNumbers(2)
primeNumbers(3)
primeNumbers(5)
primeNumbers(12)
primeNumbers(4)

// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj 4');

const firstReverse = (string) => {
    let array = string.split('')
    array.reverse()
    
    console.log(array.join(''))
}


firstReverse('ecuVaGisupop')

// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj 4');

var palindrome = function(str) {
	for(var i=0; i<str.length/2; i++) {
		if(str[i] !== str[str.length-1-i]) {
			return false;
		}
	}
	return true;
}

palindrome('anavolimilovana')

// 
// 
// 
// zadatak broj sest

console.log();
console.log('zadatak broj 4');

function vowels (string) {
    let array = [] 
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a' || 
            string[i] === 'e' ||
            string[i] === 'i' ||
            string[i] === 'o' ||
            string[i] === 'u') {
                array.push(string[i])
            }
    }
    console.log(array)
}

vowels ('What lets in youth?')