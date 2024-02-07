// page variables for checking pages if they are true on page 
const userHeader = document.querySelector('#yes_user');
const header = document.querySelector('#no_user');
const faqPage = document.querySelector('.faq_page');
const career = document.querySelector('.career_page');
const sliderBlock = document.querySelector('.s1');
const sliderBlockFavorites = document.querySelector('.s2');
const chooseBlock = document.querySelector('#choose_block');
const hoverBlock = document.querySelector('#hover_block');
const favBlock = document.querySelector('#fav_block');
const discountedSlider = document.querySelector('#s3');
const galleryBox = document.querySelector('#gallery');
const productSlider = document.querySelector('#s4');
const orderBlock = document.querySelector('#order_block');
const paymentBlock = document.querySelector('#payment_block');

// global element vars
let searchInput = document.querySelector('.search_input');
let searchBtn = document.querySelector('.search_btn');
const tabButtons = document.querySelectorAll('.tab_buttons');
const tabContentBoxs = document.querySelectorAll('.tabs_box');
let squareBlock = document.querySelector('.square_block');
let navMenu = document.querySelector('.nav_mobile_menu');
let burger_ = document.querySelector('.burger_');
let navBottomMenu = document.querySelector('.nav_bottom_menu');

let modalItem = document.querySelector('#modal_item');
// global functions for dinamyc 
function removeActiveClassOnTabs(array1, array2) {
  array1.forEach(function (tabContent) {
    tabContent.classList.remove('show_tabs');
  });
  array2.forEach(function (tabButtons) {
    tabButtons.classList.remove('tab_btn_act');
  });
}

function selectTabs(button) {
  let id = button.getAttribute('id');
  removeActiveClassOnTabs(tabContentBoxs, tabButtons);
  let tabContent = document.querySelector(`#${id}_content`);
  tabContent.classList.add('show_tabs');
  button.classList.add('tab_btn_act');
}

function outsideClick(e, modalContent) {
  if (e.target == modalContent) {
    modalContent.classList.remove('show_');
  }
}

function renderModalHTML(template, modalContent) {
  modalContent.innerHTML = template;
}

function resetHTML(modalContent) {
  modalContent.innerHTML = '';
}

function openSearch() {
  let searchButtons = document.querySelectorAll('.search_btn');
  searchButtons.forEach(function (searchButton) {
    searchButton.addEventListener('click', function (e) {
      console.log(searchButton);
      let searchInput = searchButton.previousElementSibling;
      searchInput.classList.toggle('search_act');
      searchButton.classList.toggle('search_icon_color');
    });
  });
  // searchBtn.addEventListener('click', function () {
  //   searchInput.classList.toggle('search_act');
  //   searchBtn.classList.toggle('search_icon_color');
  // });
}

function searchItemsFunc() {
  let inpBlock = document.querySelector('#input_block');
  inpBlock.addEventListener('keyup', function (e) {
    if (inpBlock.value.toLowerCase().length > 0) {
      document.querySelector('.search_box').classList.add('show_');
    } else {
      document.querySelector('.search_box').classList.remove('show_');
    }
  });
}

function openModal() {
  let closeButton = document.querySelector('.close_button');
  let forgotBtn = document.querySelector('#forgot_btn');
  let modalItem_ = document.querySelector('#modal_item_');
  let closeButton_ = document.querySelector('.close_button_');
  let backButton = document.querySelector('.back_btn');
  let sbmBtn = document.querySelectorAll('.submit_btn');
  tabButtons.forEach(function (tabButtons) {
    tabButtons.addEventListener('click', function () {
      selectTabs(tabButtons);
    });
  });
  modalItem.classList.add('show_');
  closeButton.addEventListener('click', function () {
    modalItem.classList.remove('show_')
  });
  forgotBtn.addEventListener('click', function () {
    modalItem_.classList.add('show_');
    modalItem.classList.remove('show_');
    modalItem_.querySelector('.psw_forg').classList.add('show_tabs');
    modalItem_.querySelector('#tab1').classList.add('tab_btn_act');
  });

  closeButton_.addEventListener('click', function () {
    modalItem_.classList.remove('show_')
  });
  //outside click
  window.addEventListener('click', function (e) {
    outsideClick(e, modalItem);
  });
  backButton.addEventListener('click', function () {
    modalItem_.classList.remove('show_');
    modalItem.classList.add('show_');
  });

  function getPevModal(elem) {
    let prevModal = modalItem_.previousElementSibling;
    prevModal.querySelector(`${elem}`).classList.add('tab_btn_act');
    modalItem_.classList.remove('show_');
    prevModal.classList.add('show_');
  }
  // sing
  modalItem_.querySelector('#tab1').addEventListener('click', function () {
    getPevModal('#tab1');
  });
  //reg
  modalItem_.querySelector('#tab2').addEventListener('click', function () {
    getPevModal('#tab2');
  });
}

// if statements for checking pages wich page is active on document
if (userHeader) {
  let userBlock = document.querySelector('.user_block');
  let dropdown = document.querySelector('.dropdown');
  let arrowDown = document.querySelector('.drop_chevron');
  let dropDownMenu = document.querySelector('.dropdown-menu');

  openSearch();
  searchItemsFunc();
  userBlock.addEventListener('click', function () {
    dropdown.classList.toggle('drop_down_active');
    arrowDown.classList.toggle('chevron_rotate');
    dropdown.classList.toggle('show_');
    dropDownMenu.classList.toggle('show_');
    console.log(arrowDown);
    arrowDown.parentElement.parentElement.parentElement.classList.add('show_');
  });
}
if (header) {
  let mobileUserButton = document.querySelector('#mobile_modal_btn');
  let modalButton = document.querySelector('#modal_btn');
  openSearch();
  searchItemsFunc();
  modalButton.addEventListener('click', function () {
    openModal();
  });
  mobileUserButton.addEventListener('click', function () {
    modalButton.click();
  });

  document.querySelector('#auth_').addEventListener('submit', function (e) {
    e.preventDefault();

    let user_email = document.querySelector('#user_email');
    let user_pass = document.querySelector('#user_pass');

    if (user_email.value.trim() === '') {
      user_email.nextElementSibling.classList.add('show_');
      user_email.style.borderColor = 'red';
      return false;
    } else {
      user_email.nextElementSibling.classList.remove('show_');
      user_email.style.borderColor = '#f2f2f2';
    }

    if (user_pass.value.trim() === '') {
      user_pass.nextElementSibling.classList.add('show_');
      user_pass.style.borderColor = 'red';
      return false;
    } else {
      user_pass.nextElementSibling.classList.remove('show_');
      user_pass.style.borderColor = '#f2f2f2';
    }
    modalItem.classList.remove('show_');
  });

  document.querySelector('#reg_').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('test 1')
    let userRegEmail = document.querySelector('#user_reg_email');
    let userFullName = document.querySelector('#user_full_name');
    let userPhone = document.querySelector('#user_phone');
    let userPassword = document.querySelector('#user_password');
    let userConfirmPassword = document.querySelector('#user_confirm_password');

    if (userRegEmail.value.trim() === '') {
      console.log('test 2')
      console.log(userRegEmail);
      userRegEmail.nextElementSibling.classList.add('show_');
      userRegEmail.style.borderColor = 'red';
      return false;
    } else {
      userRegEmail.nextElementSibling.classList.remove('show_');
      userRegEmail.style.borderColor = '#f2f2f2';
    }

    if (userFullName.value.trim() === '') {
      userFullName.nextElementSibling.classList.add('show_');
      userFullName.style.borderColor = 'red';
      return false;
    } else {
      userFullName.nextElementSibling.classList.remove('show_');
      userFullName.style.borderColor = '#f2f2f2';
    }

    if (userPhone.value.trim() === '') {
      userPhone.nextElementSibling.classList.add('show_');
      userPhone.style.borderColor = 'red';
      return false;
    } else {
      userPhone.nextElementSibling.classList.remove('show_');
      userPhone.style.borderColor = '#f2f2f2';
    }

    if (userPassword.value.trim() === '') {
      userPassword.nextElementSibling.classList.add('show_');
      userPassword.style.borderColor = 'red';
      return false;
    } else {
      userPassword.nextElementSibling.classList.remove('show_');
      userPassword.style.borderColor = '#f2f2f2';
    }

    if (userConfirmPassword.value.trim() === '') {
      userConfirmPassword.nextElementSibling.classList.add('show_');
      userConfirmPassword.style.borderColor = 'red';
      return false;
    } else {
      userConfirmPassword.nextElementSibling.classList.remove('show_');
      userConfirmPassword.style.borderColor = '#f2f2f2';
    }
    modalItem.classList.remove('show_');
  });
};

if (faqPage) {
  let faq_blocks = document.querySelectorAll('.faq_box_block');

  faq_blocks.forEach(function (faqBlock) {
    faqBlock.addEventListener('click', function (e) {
      e.preventDefault();
      let colapsed = faqBlock.getAttribute('collapes');
      let childContent = faqBlock.querySelector('.collapes_content');
      let childHeight = childContent.scrollHeight;
      let targetIcon = faqBlock.querySelector('.more-less');
      let faqTitle = faqBlock.querySelector('.panel-title');
      if (colapsed === 'false') {
        childContent.style.height = `${childHeight}px`;
        childContent.style.opacity = `1`;
        faqBlock.setAttribute('collapes', 'true');
      } else {
        childContent.style.height = `${0}px`;
        childContent.style.opacity = `0`;
        childContent.style.paddingTop = `0px`;
        faqBlock.setAttribute('collapes', 'false');
      }
    });
  });
  window.addEventListener('click', function (e) {
    faq_blocks.forEach(function (faqBlock) {
      if (e.target.classList.contains('faq_page')) {

        let childContent = faqBlock.querySelector('.collapes_content');
        childContent.style.height = `${0}px`;
        childContent.style.opacity = `0`;
        childContent.style.paddingTop = `0px`;
        faqBlock.setAttribute('collapes', 'false');
      }
    });
  });
}
// global document or window eventlisteners
document.addEventListener('click', function (e) {
  let target = e.target;
  if (!target.parentElement.classList.contains('search_btn') && !target.getAttribute('data-isNeeded')) {
    searchInput.classList.remove('search_act');
    searchBtn.classList.remove('search_icon_color');
    document.querySelector('.search_box').classList.remove('show_');
  }
  if (document.querySelector('.dropdown-toggle')) {
    if (!target.classList.contains('dropdown-toggle')) {
      document.querySelector('.dropdown').classList.remove('drop_down_active');
      document.querySelector('.drop_chevron').classList.remove('chevron_rotate');
      document.querySelector('.dropdown').classList.remove('show_');
      document.querySelector('.dropdown-menu ').classList.remove('show_');
    }
  }
  if (!target.parentElement.getAttribute('data-close')) {
    navMenu.classList.remove('nav_act');
    document.body.classList.remove('overflow_hidden');
    navBottomMenu.classList.remove('nav_bottom_act');
  }
});
if (career) {
  let modalContentItems = document.querySelectorAll('.send_modal_content');
  let openModalButtons = document.querySelectorAll('.modal_open');
  openModalButtons.forEach(function (openModalButton) {
    openModalButton.addEventListener('click', function () {
      let target = openModalButton.parentElement;
      let targetedModal = target.querySelector('.send_modal_content');
      let close = target.querySelector('.close_');
      let sendCV = target.querySelector('.submit_cv');
      targetedModal.classList.add('show_');
      close.addEventListener('click', function () {
        targetedModal.classList.remove('show_');
      });
      sendCV.addEventListener('click', function () {
        targetedModal.classList.remove('show_');
      });
    });
  });
  window.addEventListener('click', function (e) {
    modalContentItems.forEach(function (modal) {
      if (e.target == modal) {
        modal.classList.remove('show_');
      }
    });
  });
}

if (sliderBlock) {
  var swiper = new Swiper('.s1', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }
  });
}
if (sliderBlockFavorites) {
  var swiper = new Swiper('.s2', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
}
if (chooseBlock) {
  const favStars = document.querySelectorAll('.fav_star_');
  const addCard = document.querySelectorAll('.bg_cart');

  favStars.forEach(function (star) {
    star.addEventListener('click', function () {
      let borderedStar = star.querySelector('.grey_star');
      let yellowStar = star.querySelector('.yellow_star');
      if (!borderedStar) return;
      if (!yellowStar) return;
      borderedStar.classList.toggle('hide_');
      yellowStar.classList.toggle('show_');
    });
  });

  addCard.forEach(function (item) {
    item.addEventListener('click', function () {
      let addItems = item.querySelector('.add_cart');
      let addProduct = item.querySelector('.added_');
      addProduct.classList.add('show_');
      addItems.classList.add('hide_');
    })
  })
}
if (favBlock) {
  const favStars = document.querySelectorAll('.fav_star_');
  const addCard = document.querySelectorAll('.bg_cart');

  favStars.forEach(function (star) {
    star.addEventListener('click', function () {
      let borderedStar = star.querySelector('.grey_star');
      let yellowStar = star.querySelector('.yellow_star');
      if (!borderedStar) return;
      if (!yellowStar) return;
      borderedStar.classList.toggle('hide_');
      yellowStar.classList.toggle('show_');
      if (!borderedStar.classList.contains('hide_')) {
        star.parentElement.parentElement.parentElement.remove();
      };
    });
  });
}


squareBlock.addEventListener('click', (e) => {
  if (navBottomMenu.classList.contains('nav_bottom_act')) {
    navBottomMenu.classList.remove('nav_bottom_act');
    navMenu.classList.toggle('nav_act');
    document.body.classList.toggle('overflow_hidden');
  } else {
    navMenu.classList.toggle('nav_act');
    document.body.classList.toggle('overflow_hidden');
  }
});
burger_.addEventListener('click', (e) => {
  navBottomMenu.classList.toggle('nav_bottom_act');
});


const codeCheck = document.querySelectorAll('.pass_input');
const verifyBtn = document.querySelector('.verify_btn')
const pinCodeSize = 4;

if (codeCheck) {
  codeCheck.forEach(function (check) {
    check.addEventListener('keyup', function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (check.value.length === pinCodeSize) {
        verifyBtn.innerHTML = 'Verified';
      }
    });
  });
}

if (hoverBlock) {
  let categoryBox = document.querySelectorAll('.choose_category_box');

  function collapseCities(targetBlock) {
    let target = targetBlock.parentElement.parentElement;
    let selectCategory = target.querySelector('.chose_category_');
    let dropDownBox = target.querySelector('.drop_down');
    let infoLiElems = target.querySelectorAll('.info_li');
    let arrow = target.querySelector('.arrow_down');
    // let saveButton = target.querySelector('.save_btn');
    dropDownBox.classList.toggle('show_');
    // saveButton.classList.toggle('hide_btn');
    arrow.classList.toggle('arrow_up');
    infoLiElems.forEach(function (liElement) {
      liElement.addEventListener('click', function (e) {
        let name = liElement.querySelector('.category_select').innerText;
        let template = `
                        <div class="category_">${name}</div>
                    `;
        selectCategory.innerHTML = template;
        dropDownBox.classList.remove('show_');
        arrow.classList.remove('arrow_up');
      });
    });
  }
  if (categoryBox) {
    categoryBox.forEach(function (addressInp) {
      addressInp.addEventListener('click', function () {
        collapseCities(addressInp)
      })
    })
  }

  function increment(event) {
    let target = event.target;
    let numInput = target.parentElement.parentElement.parentElement.querySelector('.product_num_input');

    numInput.value = Number(numInput.value) + 1;
  }

  function decrement(event) {
    let target = event.target;
    let numInput = target.parentElement.parentElement.parentElement.querySelector('.product_num_input');
    if (numInput.value <= 1) {
      return false;
    }
    numInput.value = Number(numInput.value) - 1;
  }
  document.querySelectorAll('.up').forEach(function (button) {
    button.addEventListener('click', function (event) {
      increment(event)
    });
  });
  document.querySelectorAll('.down').forEach(function (button) {
    button.addEventListener('click', function (event) {
      decrement(event)
    });
  });
  
  let product_info_ = document.querySelectorAll('.product_info_');
  for (let i = 0; i < product_info_.length; i++) {
    const element = product_info_[i];
    if (element.querySelector('.product_items_')) {
      let rect = element.querySelector('.product_items_').getBoundingClientRect();
      console.log(rect);
      if (rect.left - rect.width > element.clientWidth) {
        element.querySelector('.product_items_').style.right = 0;
        element.querySelector('.product_items_').style.left = 'unset';
        element.querySelector('.product_items_').classList.add('rg_direction');
      }
    }
  }
}
if (discountedSlider) {
  var swiper = new Swiper('.s3', {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });
}
if (galleryBox) {
  const smallImgs = document.querySelectorAll('.small_img');
  const mainImg = document.querySelector('.main_img');

  function removeAct() {
    smallImgs.forEach(function (item) {
      item.parentElement.classList.remove('img_act');
    });
  }
  const gallery = (item) => {
    item.addEventListener('click', (e) => {
      let imgLocation = e.target.getAttribute('src');
      mainImg.style.backgroundImage = `url(${imgLocation})`;
      // mainImg.src = imgLocation
      removeAct();
      item.parentElement.classList.add('img_act');
    });
  }
  smallImgs.forEach(item => {
    gallery(item);
  });
}
if (productSlider) {
  var swiper = new Swiper('.s4', {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    clickable: true,
    breakpoints: {
      480: {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        direction: 'horizontal',
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      767: {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        direction: 'horizontal',
        spaceBetween: 20,
      }
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },

  });
  $(window).on("resize orientationchange", function () {
    var ww = document.documentElement.clientWidth;
    $el = $(swiper.$el);
    if (ww <= 991) $el.removeClass("swiper-container-vertical").addClass("swiper-container-horizontal");
    else $el.removeClass("swiper-container-horizontal").addClass("swiper-container-vertical");
    swiper.update();
  });
}
if (orderBlock) {
  let faqBlocks = document.querySelectorAll('.faq_box_block_');

  faqBlocks.forEach(function (faqBlock) {
    faqBlock.addEventListener('click', function (e) {
      e.preventDefault();
      let collapsed = faqBlock.getAttribute('collapes');
      let childContentBox = faqBlock.querySelector('.collapes_content_');
      let childHeight = childContentBox.scrollHeight;
      let targetIcon = faqBlock.querySelector('.more-less');
      let faqTitle = faqBlock.querySelector('.panel-title');
      if (collapsed === 'false') {
        childContentBox.style.height = `${childHeight}px`;
        childContentBox.style.opacity = `1`;
        // childContentBox.style.paddingTop = `20px`;
        faqBlock.setAttribute('collapes', 'true');
        targetIcon.className = 'more-less fas fa-chevron-up';
      } else {
        childContentBox.style.height = `${0}px`;
        childContentBox.style.opacity = `0`;
        childContentBox.style.paddingTop = `0px`;
        faqBlock.setAttribute('collapes', 'false');
        targetIcon.className = 'more-less fas fa-chevron-down';
      }
    });
  });
  window.addEventListener('click', function (e) {
    faqBlocks.forEach(function (faqBlock) {
      if (e.target.classList.contains('faq_page')) {
        let childContentBox = faqBlock.querySelector('.collapes_content');
        childContentBox.style.height = `${0}px`;
        childContentBox.style.opacity = `0`;
        childContentBox.style.paddingTop = `0px`;
        faqBlock.setAttribute('collapes', 'false');
      }
    });
  });
  document.querySelectorAll('.order_btn').forEach(function (btns) {
    btns.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  });
  document.querySelectorAll('.order-content-block').forEach(function (orders) {
    orders.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  let modalContentItems = document.querySelectorAll('.send_modal_content');
  let openModalButtons = document.querySelectorAll('.modal_open');
  openModalButtons.forEach(function (openModalButton) {
    openModalButton.addEventListener('click', function () {
      let target = openModalButton.parentElement;
      let targetedModal = target.querySelector('.send_modal_content');
      // let close = target.querySelector('.close_');
      let cancelOrder = target.querySelector('.cancel_order');
      let sendOrder = target.querySelector('.submit_order');
      targetedModal.classList.add('show_');
      // close.addEventListener('click', function () {
      //     targetedModal.classList.remove('show_');
      // });
      sendOrder.addEventListener('click', function () {
        targetedModal.classList.remove('show_');
      });
      cancelOrder.addEventListener('click', function () {
        targetedModal.classList.remove('show_');
      });
    });
  });
  window.addEventListener('click', function (e) {
    modalContentItems.forEach(function (modal) {
      if (e.target == modal) {
        modal.classList.remove('show_');
      }
    });
  });
}

if(paymentBlock){
  window.addEventListener('DOMContentLoaded', function () {
            let addressForm = document.querySelector('#address_form');
            let inputValue = addressForm.querySelector('input').value;
            let saveBtn = document.querySelector('.save_btn');
            let counter = 2;
            let inpCity = document.querySelector('.city');
            let inpStreet = document.querySelector('.street');
            let inpPhone = document.querySelector('.phone');
            const addAddressBtn = document.querySelector('.address_btn');
            const addInputs = document.querySelector('.add_inputs');

            addAddressBtn.addEventListener('click', function () {
                addInputs.classList.add('show_');

            });
            document.querySelector('.save_btn').addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                addNewAddress();
            });

            function addNewAddress() {
                if (inpCity.value.trim() === '') {
                    return;
                }
                if (inpStreet.value.trim() === '') {
                    return;
                }
                if (inpPhone.value.trim() === '') {
                    return;
                }
                let div = document.createElement('div');
                div.classList.add('shipping_box');
                div.innerHTML = `
                    <input type="radio" id='radio${counter}' name="radio-group" checked="">
                    <label for='radio${counter}' class="shipping_label">
                        <p>${inpCity.value}</p>
                        <p>${inpStreet.value}</p>
                        <p>${inpPhone.value}</p>
                    </label>
                `;
                addressForm.appendChild(div);
                addInputs.classList.remove('show_')
                inpCity.value = '';
                inpStreet.value = '';
                inpPhone.value = '';
                counter++;
            }
        })
}
