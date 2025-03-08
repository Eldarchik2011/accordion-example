let accitems = document.querySelectorAll('.accordion-item')
let accordion = document.querySelector('.accordion')

accordion.addEventListener('click', (event)=>{
    let elemtarget = event.target;
    for(let item of accitems) {
        
item.classList.remove('active')
    }
    // method closest возвращает родителя с указанным классом
    elemtarget.closest('.accordion-item').classList.add('active')
})