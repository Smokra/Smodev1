document.addEventListener("DOMContentLoaded", () => {
  const revealerNav = window.revealer({
    revealElementSelector: ".nav-js",
    options: {
      anchorSelector: ".nav-btn-js"
    }
  });

  const actionBtn = document.querySelector(".nav-btn-js");
  actionBtn.addEventListener("click", () => {
    if (!revealerNav.isRevealed()) {
      revealerNav.reveal();
      actionBtn.setAttribute("data-open", true);
    } else {
      revealerNav.hide();
      actionBtn.setAttribute("data-open", false);
    }
  });
});

var button = document.getElementById("toggle-txt");
button.addEventListener(
  "click",
  function () {
    if (button.getAttribute("data-text-swap") == button.innerHTML) {
      button.innerHTML = button.getAttribute("data-text-original");
    } else {
      button.setAttribute("data-text-original", button.innerHTML);
      button.innerHTML = button.getAttribute("data-text-swap");
    }
  },
  false
);

/* ------------------ Hamburger ------------------------*/
function classToggle () {
  document.querySelector('.nav').classList.toggle('mobile-nav');
  this.classList.toggle('is-active');
}

document.querySelector('.menu-toggle').addEventListener('click', classToggle);

function removeMobileNav (){
  document.querySelector('.nav').classList.remove('mobile-nav');
}

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', removeMobileNav);
});


// find all links in mobile nav
// attach event listener
// when clicked remove "mobile-nav" class
// no more than 9 lines of code (no jquerz)
// hint: addEventListener

/* -------------------------- Contact form -------------------------------- */


(function ($) {

  var input = $('.validate-input .input');


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


  $('.validate-form .input').each(function(){
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
