let total = 260

const  el = document.getElementById('calc')
// Toggle between 2 tabs

const personal = document.getElementById('personal')
personal.addEventListener('click', function() {
  if (personal.classList.contains('type_unchecked')) {
    personal.classList.toggle('type_checked')
    personal.classList.toggle('type_unchecked')
    total -= 60
    family.classList.remove('type_checked')
    family.classList.add('type_unchecked')
  }
})

const family = document.getElementById('family')
family.addEventListener('click', function () {
  if (family.classList.contains('type_unchecked')) {
    family.classList.toggle('type_checked')
    family.classList.toggle('type_unchecked')
    total += 60
    personal.classList.remove('type_checked')
    personal.classList.add('type_unchecked')
  }
})

// Studio Option

const studio = document.getElementById('studio')
studio.addEventListener('click', function () {
  if (studio.classList.contains('option_unchecked')) {
    total += 80
  }
  else {
    total -=80
  }
  studio.classList.toggle('option_checked')
  studio.classList.toggle('option_unchecked')
})

// Make Up Artist Option

const mua = document.getElementById('mua')
mua.addEventListener('click', function () {
  if (mua.classList.contains('option_unchecked')) {
    total += 100
  }
  else {
    total -=100
  }
  mua.classList.toggle('option_checked')
  mua.classList.toggle('option_unchecked')
})

// Hairdresser Option

const hair = document.getElementById('hair')
hair.addEventListener('click', function () {
  if (hair.classList.contains('option_unchecked')) {
    total += 100
  }
  else {
    total -=100
  }
  hair.classList.toggle('option_checked')
  hair.classList.toggle('option_unchecked')
})

// Style Option

const style = document.getElementById('style')
style.addEventListener('click', function () {
  if (style.classList.contains('option_unchecked')) {
    total += 300
  }
  else {
    total -=300
  }
  style.classList.toggle('option_checked')
  style.classList.toggle('option_unchecked')
})



const totalPrice = document.getElementById('totalPrice')

let changeTotal = function() {
  totalPrice.innerHTML = total + ' рублей.'
}


el.addEventListener('click', changeTotal)
