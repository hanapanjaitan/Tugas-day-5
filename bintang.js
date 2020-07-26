// PPT FUNDAMENTAL DAY 4
// Solve it #16
// var x=''
// for(i=0;i<5;i++){
//     for(j=0;j<=i;j++){ // looping di dalem yg dikerjain duluan
//         x+='*'
//     }
//     console.log('baris ke ', i)
//     x+='\n'
// }
// console.log(x)

// Solve it #17
// var x=''
// for(i=0;i<5;i++){
//     for(j=i;j<5;j++){ // looping di dalem yg dikerjain duluan
//         x+='*'
//     }
//     x+='\n'
// }
// console.log(x)

// Solve it 19
// var a = ''
// for(i=0;i<10;i++){
//     for(j=i;j<10;j++){ // banyak --> kecil
//         a += '  '
//     }
//     for(k=0;k<i+1;k++){ // kecil --> banyak
//         a += '* '
//     }
//     for(l=1;l<i+1;l++){ // kecil --> banyak
//         a += '* '
//     }
//     a+='\n'
// }
// console.log(a)

// Solve it 20
// var a = ''
// for(i=0;i<10;i++){
//     for(j=0;j<i;j++){
//         a += '  '
//     }
//     for(k=i;k<10;k++){ 
//         a += '* '
//     }
//     for(l=i+1;l<10;l++){ 
//         a += '* '
//     }
//     a+='\n'
// }
// console.log(a)

// Solve it 21
var a = ''
for(i=0;i<10;i++){
    if(i<5) {
        for(j=i;j<5;j++){ // banyak --> kecil
            a += '  '
        }
        for(k=0;k<i+1;k++){ // kecil --> banyak
            a += '* '
        }
        for(l=1;l<i+1;l++){ // kecil --> banyak
            a += '* '
        }
    }else{ // i = 5
        for(j=4;j<i;j++){
            a += '  '
        }
        for(k=i;k<10;k++){ 
            a += '* '
        }
        for(l=i+1;l<10;l++){ 
            a += '* '
        }
    }
    a+='\n'
}
console.log(a)

// finish