// إخفاء شاشة التحميل بعد تحميل الصفحة
window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.getElementById("content");

  setTimeout(() => {
    loadingScreen.style.display = "none";
    content.classList.remove("hidden");
  }, 5000); // 3 ثواني لعرض شاشة التحميل
});

const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');

//Bootstrap model
  document.addEventListener('DOMContentLoaded', function () {
      setTimeout(() => {
          var offerModal = new bootstrap.Modal(document.getElementById('offerModal'));
          offerModal.show();
      }, 10000); 
  });

// Open menu
menuButton.addEventListener('click', () => {
    menu.classList.add('open');
});

// Close menu
closeButton.addEventListener('click', () => {
    menu.classList.remove('open');
});
function toggleDropdown(event) {
    event.preventDefault(); // لمنع الانتقال عند النقر على الرابط
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('show');
}

// إغلاق القائمة عند النقر في أي مكان خارجها
document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown.show').forEach(function (dropdown) {
            dropdown.classList.remove('show');
        });
    }
});
function toggleDarkMode() {
  const body = document.body;
  const darkIcon = document.getElementById('dark-mode-icon');
  const lightIcon = document.getElementById('light-mode-icon');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkIcon.style.display = 'none';
      lightIcon.style.display = 'inline';
  } else {
      localStorage.setItem('darkMode', 'disabled');
      darkIcon.style.display = 'inline';
      lightIcon.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      document.getElementById('dark-mode-icon').style.display = 'none';
      document.getElementById('light-mode-icon').style.display = 'inline';
  }
});

window.onscroll = function() {stickyFunction()};

var stickyNav = document.getElementById("stickyNav");
var stickyTop = stickyNav.offsetTop;

// تابع تحديد المسافة بناءً على حجم الشاشة
function getStickyTopOffset() {
    var screenWidth = window.innerWidth;

    // تحديد المسافة حسب مقاس الشاشة
    if (screenWidth >= 1200) {  // شاشات أكبر من أو تساوي 1200px (شاشات كبيرة)
        return 195;  // المسافة من الأعلى للشاشات الكبيرة
    } else if (screenWidth<=1200 && screenWidth >= 991) {  // شاشات بين 768px و 1199px
        return 190;  // المسافة من الأعلى للشاشات المتوسطة
    } 
    else if (screenWidth <= 991 && screenWidth >= 770) {  // شاشات بين 768px و 1199px
        return 170;  // المسافة من الأعلى للشاشات المتوسطة
    }else if (screenWidth <= 768 && screenWidth >= 490) {  // شاشات بين 768px و 1199px
        return 150;  // المسافة من الأعلى للشاشات المتوسطة
    } else {  // شاشات أصغر من 480px (الموبايل)
        return 100;  // المسافة من الأعلى للأجهزة المحمولة
    }
}

function stickyFunction() {
    var topOffset = getStickyTopOffset();  // احصل على المسافة بناءً على حجم الشاشة
    if (window.pageYOffset >= stickyTop) {
        stickyNav.style.position = "fixed";
        stickyNav.style.top = topOffset + "px";  // تعيين المسافة بناءً على الشاشة
    } else {
        stickyNav.style.position = "absolute";
        stickyNav.style.top = stickyTop + "px"; // المسافة الأصلية عند عدم الوصول
    }
}

const slider = document.querySelector('.filter-slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
  slider.scrollLeft -= 200; // تعديل قيمة الحركة حسب الحاجة
});

rightArrow.addEventListener('click', () => {
  slider.scrollLeft += 200; // تعديل قيمة الحركة حسب الحاجة
});

document.addEventListener("DOMContentLoaded", function () {
    const words = [
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Shoes",
        "Accessories",
        "Scarf",
        "Wristwatch",
        "Bag",
        "Hat"
    ];

    const outputElement = document.getElementById("typed-output");

    let currentIndex = 0; // مؤشر الكلمة الحالية
    let isAdding = true; // لتحديد إذا كنا نضيف كلمات أو نحذفها

    function updateList() {
        if (isAdding) {
            // إذا كنا في وضع الإضافة
            if (currentIndex < words.length) {
                const listItem = document.createElement("li");
                listItem.textContent = words[currentIndex];
                listItem.classList.add("visible"); // أضف تأثير الظهور
                outputElement.appendChild(listItem);
                currentIndex++;
            } else {
                isAdding = false; // ابدأ الحذف بعد إضافة جميع الكلمات
            }
        } else {
            // إذا كنا في وضع الحذف
            if (currentIndex > 0) {
                const items = outputElement.querySelectorAll("li");
                const lastItem = items[items.length - 1];
                lastItem.classList.remove("visible"); // تأثير الإخفاء
                setTimeout(() => lastItem.remove(), 500); // حذف العنصر بعد انتهاء تأثير الاختفاء
                currentIndex--;
            } else {
                isAdding = true; // ابدأ الإضافة مرة أخرى بعد الحذف
            }
        }
    
        // استدعاء التحديث التالي
        setTimeout(updateList, 1000); // التحكم في سرعة الإضافة والحذف
    }
    
    updateList();
});

// احصل على أزرار الفلاتر العلوية
const filterButtons = document.querySelectorAll('.filters li');

// احصل على جميع كروت المنتجات
const productCards = document.querySelectorAll('.products-grid .product-card');

// احصل على كل الشرائح في filter-slider
const filterSliderItems = document.querySelectorAll('.filter-slider .slider-card');

// دالة لتطبيق الفلترة
function filterProducts(filter) {
  // إذا كانت الفئة "All"، اعرض كل الكروت
  if (filter === "All") {
    productCards.forEach(card => {
      card.style.display = 'block'; // اعرض كل المنتجات
    });
  } else {
    // غير ذلك، قم بتصفية الكروت بناءً على الفئة
    productCards.forEach(card => {
      // احصل على النص الوصفي (alt) للصورة في الكرت
      const productCategory = card.querySelector('img').alt;

      // إذا تطابقت الفئة مع النص الوصفي، اعرض الكرت، وإلا قم بإخفائه
      if (productCategory.toLowerCase().includes(filter.toLowerCase())) {
        card.style.display = 'block'; // اعرض المنتج
      } else {
        card.style.display = 'none'; // أخفِ المنتج
      }
    });
  }
}

// أضف أحداث النقر للفلاتر العلوية
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.textContent.trim(); // احصل على الفئة المختارة
    filterProducts(filter); // قم بتطبيق الفلترة
  });
});

// أضف أحداث النقر للشرائح في filter-slider
filterSliderItems.forEach(slider => {
  slider.addEventListener('click', () => {
    const filter = slider.querySelector('p').textContent.trim(); // احصل على الفئة من الشريحة
    filterProducts(filter); // قم بتطبيق الفلترة
  });
});

// Variables
const addToCartButtons = document.querySelectorAll('.productbtn');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartDropdown = document.getElementById('cartDropdown');
const totalPriceElement = document.getElementById('totalPrice');
const closeCartButton = document.getElementById('closeCartButton'); // زر الإغلاق
let cart = [];
let totalPrice = 0;

// Add to Cart Functionality
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.getAttribute('data-product');
    const productPrice = parseFloat(button.getAttribute('data-price'));
    const productImage = button.getAttribute('data-image');

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.name === productName);

    if (!existingProduct) {
      // Add product to cart array
      cart.push({ name: productName, price: productPrice, image: productImage });

      // Update total price
      totalPrice += productPrice;

      // Update UI
      updateCartCount();
      updateCartDropdown();
    } else {
      alert('This product is already in the cart.');
    }
  });
});

// Update Cart Count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Update Cart Dropdown
function updateCartDropdown() {
  cartItems.innerHTML = ''; // Clear current items

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <span>$${item.price.toFixed(2)}</span>
      <button class="remove-btn" data-index="${index}"><i class="fa fa-close"></i></button>
    `;
    cartItems.appendChild(li);
  });

  // Attach event listeners for remove buttons
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const index = parseInt(button.getAttribute('data-index'), 10);
      removeProduct(index);
    });
  });

  // Update total price in the dropdown
  totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Remove Product
function removeProduct(index) {
  // Update total price
  totalPrice -= cart[index].price;

  // Remove product from cart
  cart.splice(index, 1);

  // Update UI
  updateCartCount();
  updateCartDropdown();
}

// Toggle Cart Dropdown
document.getElementById('myCartLink').addEventListener('click', (e) => {
  e.preventDefault();
  cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
});

// Close Cart Dropdown
closeCartButton.addEventListener('click', () => {
  cartDropdown.style.display = 'none';
});

let currentLang = 'en'; // اللغة الافتراضية هي الإنجليزية
let translations = {};  // متغير لتخزين الترجمات

// دالة لتحميل الترجمات من الملف JSON
async function loadTranslations() {
    try {
        const response = await fetch('/translate.json'); // ضع المسار الصحيح للملف JSON
        translations = await response.json(); // تحميل البيانات من JSON
        changeLanguage(currentLang); // تطبيق اللغة الافتراضية عند تحميل الترجمات
    } catch (error) {
        console.error("Error loading translations:", error);
    }
}

// دالة لتغيير اللغة
function changeLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  currentLang = lang;
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach((element) => {
      const translateKey = element.getAttribute('data-translate');
      if (translations[lang] && translations[lang][translateKey]) {
          element.innerHTML = translations[lang][translateKey];
      }
  });

  const languageToggle = document.querySelector('.languageToggle');
  languageToggle.innerHTML = translations[lang]["language"];
}

// تحميل اللغة المختارة من localStorage عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLang);
});


// إضافة حدث عند الضغط على الرابط لتغيير اللغة
document.querySelector('.languageToggle').addEventListener('click', (e) => { // هنا استخدمنا . للإشارة إلى الكلاس
    e.preventDefault();
    // التبديل بين اللغتين
    if (currentLang === 'en') {
        changeLanguage('ar');
    } else {
        changeLanguage('en');
    }
});

// تحميل الترجمات عند بدء الصفحة
loadTranslations();
