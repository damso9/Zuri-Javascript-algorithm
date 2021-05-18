let convertFahrToCelsius = (f) => {
    if(typeof f == 'number') {

    let celsius = ((f - 32) * (5/9));
    return (celsius.toFixed(4))

    }
    else if (typeof f =='object') {
        if(Array.isArray(f)) {
            console.log('this is an array');
            
            return  `${f} is not a valid number but an Array`
        } else {
            const a = f;
            console.log('this is an object');
            output = `${JSON.stringify(f)} is not a valid number but a ${typeof f}.`
            return  output
        }
        

    }
    else if (typeof f == 'string'){
  
            console.log('')
            let fNumber = Number(f);
            // let celsius = ((fNumber - 32) * (5/9));

            if(isNaN(fNumber)) {
                console.log("this is not a number")
                return (`${f} is not a valid number but a ${typeof f}.`)
            } else {
                let celsius = ((fNumber - 32) * (5/9));
                return (celsius.toFixed(4))
            }
    } else {
        console.log('failure');
    


}
}
// check for type
// if type is number perform operation directly
// if type can be converted to number perform operation directly
// if numner cannot be converted print out 
// number cannot be converted to a valid number
// let fun = (f) => {
//     if(typeof f == 'number') {

//     let celsius = ((f - 32) * (5/9));
//     console.log(celsius);
//     console.log("function1")

//     }
//     else if (typeof f =='object') {
//         if(Array.isArray(f)) {
//             console.log('this is an array');
            
//             return  `${f} is not a valid number but an Array`
//         } else {
//             const a = f;
//             console.log('this is an object');
//             output = `${JSON.stringify(f)} is not a valid number but a ${typeof f}.`
//             return  output
//         }
        

//     }
//     else if (typeof f == 'string'){
  
//             console.log('')
//             let fNumber = Number(f);
//             // let celsius = ((fNumber - 32) * (5/9));
//             console.log(fNumber)
//             console.log(typeof fNumber)

//             if(isNaN(fNumber)) {
//                 console.log("this is not a number")
//                 return (`${f} is not a valid number but a ${typeof f}.`)
//             } else {
//                 let celsius = ((fNumber - 32) * (5/9));
//                 console.log(celsius +" c");
//                 return (celsius)
//             }
    
//         // if ( !fNumber ) {
//         //     console.log("cannot be converted");

   
//         // } else {
//         //     console.log('celsius');
//         // }
//     } else {
//         console.log('failure');
    


// }
// }
// check for type
// if type is number perform operation directly
// if type can be converted to number perform operation directly
// if numner cannot be converted print out 
// number cannot be converted to a valid number