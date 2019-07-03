const filter = (...args) => {//... used as rest Opertor
    return args.filter(el => el === 9); //el element uses inline which checks for element el =1 (=== checks for type and value equality)
}

console.log(filter(7, 8, 9));

const filterNumbers = (...args) => {//... used as rest Opertor
    return args.filter(el => el === 'nine'); //el element uses inline which checks for element el =1 (=== checks for type and value equality)
}

console.log(filterNumbers('seven', 'eight', 'nine'));