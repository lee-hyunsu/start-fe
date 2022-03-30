const elements = document.querySelector('.component');

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        let row = document.createElement('row');
        row.className = (i + j) % 2 == 1 ? "w" : "b"
        elements.appendChild(row);
    }
}

let blocks = document.querySelectorAll('.component > row');
let selected = null;
// const el = document.querySelectorAll('.component');
// el.addEventListener("click", )

for(var i = 0; i < 16; i++) {
    console.log(blocks[i]);
    blocks[i].addEventListener('click' , click)
}

// 클릭이벤트 함수
function click(e) 
{ 
    console.log(selected); //첫 번째 클릭시 null이고 그 다음클릭부터는 어떤 태그가 저장되는지 확인가능
    
    //selected에 값이 할당되었을때!
    if(selected != undefined){ 
        selected.style.backgroundColor = null; ''
        console.log('change!');
    }
    selected = e.target;
    e.target.style.backgroundColor = "red";
}
