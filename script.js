let ar = [5, 3, 2, 4, 4, 3];
rev(ar);
function rev(ar) {
    let revarray = [];
    for (let i = ar.length - 1, j = 0; i >= 0; i--, j++) {
        revarray[j] = ar[i];
    }
    console.log(revarray)
}
//////////////////////////////////////////////////////////////
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0)
        console.log(i + "is even");
    else if (i % 2 == 1)
        console.log(i + "is odd");
}
///////////////////////////////////////////////////
let str = "orange";
revstring(str);
function revstring(a) {
    console.log(a);
    let arr = a.split("");

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;

            }

        }
        console.log(arr[i]);
    }
    console.log(arr.join(""));
}
//////////////////////////////////////////////////////////

let num = prompt("Enter Number");
let s2 = "";

for (let i = 0; i < num.length; i++) {
    if (+num[i] % 2 == 0 && +num[i + 1] % 2 == 0) {
        s2 += num[i] + "-";
    }
    else if (+num[i] % 2 == 0 && +num[i + 1] % 2 != 0)
        s2 += num[i];

    else
        s2 += num[i];
}

console.log(s2);

/////////////////////////////////////////////////////////////
function AgeChecker(age) {
    return age >= 18 ? "The user is Adult" : "The user is Minor";
}

console.log(AgeChecker(20));
console.log(AgeChecker(15));