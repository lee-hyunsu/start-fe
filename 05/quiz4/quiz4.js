function Mousedown(event){
    dragOn = true;
    pos_x = event.clientX - box.offsetLeft;
    pos_y = event.clientY - box.offsetTop;
  }

  function MoveDrag(event){
    if(dragOn){  
    move_x = event.clientX - pos_x;
    move_y = event.clientY - pos_y;

    box.style.left = move_x +'px';
    box.style.top = move_y +'px';
    }
  }
  function MouseUp(){
    dragOn = false;
  }

  var box = document.getElementById('box');
  var dragOn = false;
  var pos_x ,pos_y;
  var move_x ,move_y;

  box.addEventListener('mousedown', Mousedown);
  box.addEventListener('mousemove', MoveDrag);
  box.addEventListener('mouseup', MouseUp);