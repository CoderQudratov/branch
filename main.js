let sign = document.getElementById('sign'),
    form1 = document.getElementById('form'),
    btn = document.getElementById('real'),
    input = document.getElementById('exampleInputPassword1');
function yuqqil(){
    form1.style.display = 'none'
}
sign.addEventListener('click', function(){
    form1.style.display = 'block'
})
sign.addEventListener('dblclick',function (){
    yuqqil()
})
btn.addEventListener('click', function(){
    form1.style.display = 'none'
})
function rang (){
    sign.style.color  = 'red'
}
rang()
function input1 (){
    console.log(input.appendChild)
}
input1()