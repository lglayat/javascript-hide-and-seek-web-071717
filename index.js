function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('.target')
}

function increaseRankBy(n){
  let list = document.querySelectorAll('.ranked-list li')
  for(let i in list){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div')
}
