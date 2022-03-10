console.log("success");
//주석테스트
var name1 = "leehyunsu";
console.log(name1);

var isMan = "true";
var isMan1 = true;

console.log(isMan);
console.log(isMan1);

function log(str){
    console.log(str);
}

log("Hello");

//Objects

var img = {};
img.width = 100;
img.height = 200;

console.log(img);

//Array

var arr = [1, 2, 3, 4, 5];
console.log(arr);

//연산자
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(name1 + "Hello");

//객체

var me = {
    age: 26,
    name: "이현수",
    area: 'jeju',
    hobby: ['js', 'html'],

    sayHello: function(){
        console.log("hello");
    }
  };