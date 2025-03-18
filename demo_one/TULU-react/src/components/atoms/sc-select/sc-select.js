class SelectBox {
  init() {
    let x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "sc-select":*/
    x = document.getElementsByClassName('sc-select-custom');
    l = x.length;
    for (i = 0; i < l; i++) {
      let hideCls = x[i].querySelector('.sc-select__select-items--hide');
      if (!hideCls) {
        //True if 'sc-select__select-items--hide' class not added yet
        selElmnt = x[i].querySelectorAll('.sc-select-custom select')[0];
        ll = selElmnt.length;
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement('DIV');
        a.setAttribute('class', 'sc-select__selected');
        a.setAttribute('tabindex', '0');
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement('DIV');
        b.setAttribute('class', 'sc-select__select-items sc-select__select-items--hide');
        for (j = 1; j < ll; j++) {
          /*for each option in the original select element,
      create a new DIV that will act as an option item:*/
          c = document.createElement('DIV');
          c.setAttribute('class', 'sc-select__options');
          c.setAttribute('tabindex', '0');
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener('click', function(event) {
            selectOption(event);
          });
          c.addEventListener('keyup', function(event) {
            if (event.keyCode == 13) {
              selectOption(event);
            }
            if (event.keyCode == 9) {
              event.stopPropagation();
            }
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener('click', function(event) {
          toggleDropdown(event);
        });
        a.addEventListener('keyup', function(event) {
          if (event.keyCode == 13) {
            toggleDropdown(event);
          }
        });
      }
    }
    function toggleDropdown(evt) {
      /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
      evt.stopPropagation();
      let elem = evt.target.closest('.sc-select__selected');
      closeAllSelect(elem);
      elem.nextSibling.classList.toggle('sc-select__select-items--hide');
      elem.nextSibling.classList.add('sc-select__select-items--collapsed');
      setTimeout(function() {
        elem.nextSibling.classList.remove('sc-select__select-items--collapsed');
      }, 300);
      elem.classList.toggle('sc-select__arrow');
    }
    function selectOption(evt) {
      /*when an item is clicked, update the original select box,
          and the selected item:*/
      let elem = evt.target.closest('.sc-select__options');
      let y, i, k, s, h, sl, yl, p;
      s = elem.parentNode.parentNode.getElementsByTagName('select')[0];
      sl = s.length;
      p = elem.parentNode;
      h = p.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == elem.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = '';
          setTimeout(function() {
            h.innerHTML = elem.innerHTML;
          }, 300);
          y = elem.parentNode.getElementsByClassName('sc-select__options--selected');
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].classList.remove('sc-select__options--selected');
          }
          elem.setAttribute('class', 'sc-select__options sc-select__options--selected');
          break;
        }
      }
      h.click();
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
    except the current select box:*/
      let x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName('sc-select__select-items');
      y = document.getElementsByClassName('sc-select__selected');
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove('sc-select__arrow');
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add('sc-select__select-items--hide');
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
    document.addEventListener('click', closeAllSelect);
    document.addEventListener('keyup', function(event) {
      if (event.keyCode == 9) {
        closeAllSelect();
      }
    });
  }
}

const instance = new SelectBox();
instance.init();

export default instance;
