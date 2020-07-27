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

// FIBONACCI
var a = 0
for(i=0;i<=5;i++){
    for(j=1;j<i;j++){
        a += 1
    }
    a += '\n'
}

console.log(a)