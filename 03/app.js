// console.log("03");
// var isMan = true;

// if('test'){
//     console.log('test');
// }

/*--------------참조타입--------------*/
//object
// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

//Array
// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x : 1};
// var b = a;
// b.x = 2;
// console.log(a, b);

//Function
//call by value
// function byValue(count) {
//     count = count + 2;
// }

// var count = 3;
// byValue(count);
// console.log(count); //3

//call by reference
// function byReference(count) {
//     count.push('2');
// }

// var count = ['1'];
// byReference(count);
// console.log(count); // ["1","2"]

/*--------------if문--------------*/
// var isMan = true;
// var gender = '';
// if (isMan) {
//     // 표현식이 true일경우 블럭 코드 실행
//     gender = '남자';
// } else {
//     gender = '여자'
// }


// function log(str){
//     console.log(str);
// }

// var result = log("hello");

// var isDelete = confirm("삭제하시겠습니까?");
// if(isDelete){
//     //.....
// }

// function test() {
//     console.log('test()');
// }
  
// var id = setTimeout(test, 1000); //1초후 1번실행
  
// var id = setInterval(test, 1000); //1초마다 계속 실행


// function a(){
//     console.log("a");
//     function b(){}
// }

// // 익명 즉시실행함수, 스코프 보호
// (function(){
//     var a = 1;
//     console.log(a);
// })();

/*--------------표현식--------------*/

// var name = 'FE';
// var age = 28;
// var play = function() {};
// var data = { company: 'kakao' };
// var fruits = ['사과', '바나나'];


/*--------------정규표현식--------------*/

// var text = 'abc def ghi jkl abc def'; // 대상 문자열
// var testReg = /abc/; // 찾을 문자열
// var result = testReg.test(text);

// console.log(result); // true


/*--------------CRUD 함수화--------------*/
//Create
var todos = ['운동'];
var todo = '게임';

function create(todo){
    todos.push(todo);
    console.log(todos)
}

create();

//Read
function read(todos, todo){
    todos.forEach(function(todo){
         console.log(todo);
    })
}

read(todos, todo);
//update

function update(todos, updateTodo){
    var updateIndex = todos.findIndex(function(todo){
        return todo === updateTodo
    });
    console.log(updateIndex);
}

update(todos, todo);
//delete
function delete1(todos, deleteTodo){
    var deleteIndex = todos.findIndex(function(todo) {
        return todo === deleteTodo;
      });
      todos.splice(deleteIndex, 1);
      console.log(todos); 
}

delete1(todos, todo);