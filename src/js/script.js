/*------------------- Typewriter -----------------------*/
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 100 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 400;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

/* ------------------ Hamburger ------------------------*/

$('.menu-toggle').click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});

// find all links in mobile nav
// attach event listener
// when clicked remove "mobile-nav" class
// no more than 9 lines of code (no jquerz)
// hint: addEventListener

/* -------------------------- Contact form -------------------------------- */
(function ($) {

  var input = $('.validate-input .input100');


  $('.validate-form').on('submit',function(){
      var check = true;

      for(var i=0; i<input.length; i++) {
          if(validate(input[i]) == false){
              showValidate(input[i]);
              check=false;
          }
      }

      return check;
  });


  $('.validate-form .input100').each(function(){
      $(this).focus(function(){
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
  }

})(jQuery);

/*-------------------- CARD ------------------------*/

const height = (elem) => {

  return elem.getBoundingClientRect().height

}

const distance = (elemA, elemB, prop) => {

  const sizeA = elemA.getBoundingClientRect()[prop]
  const sizeB = elemB.getBoundingClientRect()[prop]

  return sizeB - sizeA

}

const factor = (elemA, elemB, prop) => {

  const sizeA = elemA.getBoundingClientRect()[prop]
  const sizeB = elemB.getBoundingClientRect()[prop]

  return sizeB / sizeA

}

// first find all cards
// then check if cards lenght exists
// then applz function
//console.log(document.querySelectorAll('.card'))

document.querySelectorAll('.card').forEach((elem) => {

  const head = elem.querySelector('.card__head')
  const image = elem.querySelector('.card__image')
  const author = elem.querySelector('.card__author')
  const body = elem.querySelector('.card__body')
  const foot = elem.querySelector('.card__foot')

  elem.onmouseenter = () => {

    elem.classList.add('hover')

    const imageScale = 1 + factor(head, body, 'height')
    image.style.transform = `scale(${ imageScale })`

    const bodyDistance = height(foot) * -1
    body.style.transform = `translateY(${ bodyDistance }px)`

    const authorDistance = distance(head, author, 'height')
    author.style.transform = `translateY(${ authorDistance }px)`

  }

  elem.onmouseleave = () => {

    elem.classList.remove('hover')

    image.style.transform = `none`
    body.style.transform = `none`
    author.style.transform = `none`

  }
})

