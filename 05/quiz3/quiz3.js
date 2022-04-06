function Red(element){
    element.classList.add('red');
}

function Add_element(element){
    var element = document.createElement('div');
    element.classList.add('box');
    document.body.appendChild(element);
}

function Delete_element(element){
    element.remove();
}

function Add_value(element,value){
    element.innerHTML = value;
}

function DeleteAll_element(element){
    for(var i =0; i<element.length; i++){
        document.body.removeChild(element[i]);
    }
}

function Toggle(element){
    if(element.style.display !='none')
        element.style.display = 'none';
    else
        element.style.display = 'block';
}

function ImgPrint(element,elementname,src){
    if(!element){
        var element = document.createElement('div');
        element.classList.add(elementname);
        document.body.appendChild(element);
    }
    var img = document.createElement('img');
    img.setAttribute('src',src);
    element.appendChild(img);
}


document.querySelector('.add-red').addEventListener('click',function(event){
    var box = document.querySelector('.box');
    Red(box);
});

document.querySelector('.add-btn').addEventListener('click',function(event){
    var box = document.querySelector('.box');
    Add_element(box);
});

document.querySelector('.delete-btn').addEventListener('click',function(event){
    var box = document.querySelector('.box');
    Delete_element(box);
});

document.querySelector('.text-btn').addEventListener('click',function(event){
    var box = document.querySelector('.box');
    var value = document.querySelector('.txt').value;
    Add_value(box,value);
});

document.querySelector('.reset-btn').addEventListener('click',function(event){
    var boxes = document.querySelectorAll('.box');
    DeleteAll_element(boxes);
});

document.querySelector('.toggle-btn').addEventListener('click',function(event){
    var box = document.querySelector('.box');
    Toggle(box);
});

document.querySelector('.image-btn').addEventListener('click',function(event){
    var box = document.querySelector('.box');
    ImgPrint(box,'box','https://i.imgur.com/69NjYBH.png');
});