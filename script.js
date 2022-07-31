const boxes = document.querySelectorAll('.box')
boxes.forEach(box=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(response=>response.json()).then(data => box.style.background = `url('${data.message}') no-repeat center center/cover`)
})

window.addEventListener('scroll',showBox)

function showBox(){
    const trigger = window.innerHeight /5 * 3

    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop<trigger){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}