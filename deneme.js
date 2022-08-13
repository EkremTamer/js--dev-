// V1 = 80;
// t1 = 4;
// x1 = V1 * t1;

// console.log(x1);

// V2 = 65;
// t2 = 6;
// x2 = V2 * t2;
// console.log(x2);

// function alınanYol (t,V){
//     var x = t * V;
//     return console.log(x);
// }
// alınanYol(8,50);
// alınanYol(7,33);


// function kareAlma (a){
//     var x = a * a;
//     return console.log(x);
// }
// kareAlma(17);

// function çiftTek (b){
//     if (b % 2 == 0){
//         return console.log(b+" " + "çift sayıdır.");
//     }
//     else{
//         return console.log(b+" "+ "tek sayıdır.");
//     }
// }
// çiftTek(24);
// çiftTek(25);

// function kokBulma(a,b,c){
//     var delta = b**2 - 4 * a * c
//     var x1 = (-b - delta ** .5) / (2 * a)
//     var x2 = (-b + delta ** .5) / (2 * a)
//     return console.log("birinci kök :"+ x1 +" " + "ikinci kök:"+ x2)
// }
// kokBulma(1 , 4 , 2)

/*function alınanYol (t,V,fn){
     var x = t * V;
     return fn(x);
 }

function sum10(param1){
    return (param1 + 10)
}
console.log(sum10(20))
console.log(alınanYol(2,4,sum10))
*/
// document.write("selam arkadaşlar ben ekrem :)")

// function sample(){
//     var x = 37;
//     console.log(x);
// }
// sample()
// // console.log(x); // x üstte local de olduğundan dolayı hata veriri.
// function selamla(isim){
//     return console.log("selamlar sana efendimiz"+" "+isim)
// }
// selamla("ekrem")

// var yariCap = prompt("lütfen yarıçapı giriniz")
// function CemberCevresi(yariCap){
//     var cevre = parseInt(yariCap * 2 * Math.PI);
//     alert("dairenin çevresi:"+" "+cevre)
// }
// console.log(CemberCevresi(yariCap))

// var vize = prompt("lütfen vize notunuzu giriniz")
// var final = prompt("lütfen final notunuzu giriniz")
// function notHesaplama(vize,final){
//     notOrtalaması = (vize * 4 / 10) + (final * 6 / 10)
//     if ( notOrtalaması >= 80 ){
//         alert("tebrikler AA aldınız. Puanınız:" + " "+ notOrtalaması);
//     }
//     else if(notOrtalaması >= 50 && notOrtalaması < 80){
//         alert("CC aldınız. Puanınız:" + " "+ notOrtalaması);
//     }
//     else{
//         alert("Maalesef kaldınız.Puanınız:" + " "+ notOrtalaması);
//     }
// }
// notHesaplama(vize,final)
//                     faktöriyal
// function faktoryal(x){
//     var faktorial = 1;
//     var i = 1
//     while(i<=x){
//         faktorial = i * faktorial
//         i++
//     }
//     if (x==0){
//         return console.log(1);
//     }
//     console.log(faktorial);
// }
// faktoryal(4)

// function faktoriyal(x){
//     var i = 1
//     var carpım = 1

//     for (i; i <= x; i++){
//         carpım *= i;
//     }
//     if (x == 0){
//         console.log(1);
//     }
//     console.log(carpım);
// }
// faktoriyal(5)

//                               ARRAY                  //

// var names = ["ekrem","tamer","gozutok"]
// console.log(names);

// var namess = new Array('ekrem','tamer','gozutok',20);
// console.log(namess);

// names.push('yazılım')
// console.log(names);
// names.unshift('erkek');
// console.log(names);
// names.pop();
// console.log(names);
// names.shift();
// console.log(names);
// console.log(names.indexOf('tamer')); 
// console.log(names);

// var myArray = [4,7,5,2] , toplam = 0 , carpim = 1 ;

// for(var i= 0; i < myArray.length ; i++){
//     toplam += myArray[i];
//     carpim *=  myArray[i]
// }
// console.log("toplam:" +" "+toplam + "\n"+ "çarpım: "+" "+carpim);

// var player1 = {
//     isim : "christian",
//     soyisim : "ronalde",
//     yaş : 34,
//     takım : "real madrid",
//     childs:['mahmut','ayşe']
// }

// document.write(player1)
// console.log(player1);
// player1.isim='lionel'
// console.log(player1);
//                         object
// var library = [
//     {
//         title:"Kafes",
//         author:"Josh Malerman",
//         status:true
//     },
//     {
//         title:"Fahrenheit 451",
//         author:"Ray Bradbury",
//         status:true
//     },
//     {
//         title:"Son Kuşlar",
//         author:"Sait Faik Abasıyanık",
//         status:false
//     }];

//     for(var i = 0; i<library.length; i++){

//         var book = library[i].title + "\n Yazarı:"+" "+ library[i].author+"\n"
//         if (library[i].status){
//             console.log(book+" "+"kitap okundu.");
//         }
//         else{
//             console.log(book + " " + "kitap okunmadı.");
//         }
//    }

// var i = 0;
// var images = ['http://lorempixel.com/400/200/abstract/0'
// , 'http://lorempixel.com/400/200/abstract/1','http://lorempixel.com/400/200/abstract/2']

// var duration = 1000;

// function slideImg(){
//     document.slide.src = images[i]

//     if ( i < images.length - 1){
//         i++;
//     }
//     else{
//         i=0
//     }

//     setTimeout("sildeImg()", duration);
// }

// window.onload = slideImg;


// var myEmail = document.getElementById("email");
// myEmail.innerText = "mail adresiniz:"
// myEmail.textContent = "mail'iniz"

const body = document.querySelector("body");
const button = document.getElementById("btn");
const colors = ["#8F0FFF","#4B0082","lightblue","green","yellow","orange","red","white"];

button.addEventListener("click",colorChanger);

let counter = 0;
function colorChanger(){
    if(counter == 8){
        counter = 0;
    };
    const result = colors[counter];
    counter++;
    console.log(counter);
    body.style.backgroundColor = result;
};


