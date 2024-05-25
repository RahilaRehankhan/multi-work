console.log('hey');
let age = 23
let gender = 'girl'
let grade = 'A'
if (age < 20 && gender === 'girl' && (grade === 'A' || grade === 'A-one')) {
    alert('ok');
}
else if (age < 20 || gender !== 'girl' && grade === 'A') {
    alert('fine')
}
else {
    alert(' not ok')
}/*
let age = 23
 let gender = 'girl'
 let grade = 'A'

 if (gender === 'girl') {
     if(age < 20) {
         alert('ok');
     }
 }
 else if (age < 20 || gender !== 'girl' && grade === 'A') {
     alert('fine')
 }
 else {
     alert('not ok')
 }/*

 const fever = false;
const Test = true;
const age = true;

if (fever) {
    if (Test) {
        if (age) {
            alert('tablet')
       }
        alert('maleria')
    }
    else {
        alert(' fever')
    }
}
else {
   alert('no issue...')
}*/