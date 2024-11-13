// one

// two
function strikeThrough(){
   const firstArgItem = document.querySelector('#arguments > li')
   firstArgItem.style.textDecoration = 'line-through'
}
strikeThrough()

// three
function attachURL(id, url){
   const element = document.querySelector(`#${id}`)
   element.src = url
}