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

function updateChatBotLanguage() {
    const chatElements = document.querySelectorAll("[data-translate-chat]");
    chatElements.forEach((element) => {
        const key = element.getAttribute("data-translate-chat");
        if (translations[currentLang] && translations[currentLang][key]) {
            element.innerHTML = translations[currentLang][key];
        }
    });

    // تحديث الردود في الشات
    responses = translations[currentLang].chat_responses;
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



document.addEventListener("DOMContentLoaded", function () {
    const chatBody = document.getElementById("chatBody");
    const chatInput = document.getElementById("chatInput");
    const sendChat = document.getElementById("sendChat");

    
    // تحميل البيانات من ملف JSON
    fetch('/translate.json') // اسم الملف هنا
        .then(response => response.json())
        .then(data => {
            translations = data; // تعيين البيانات المحملة
        })
        .catch(error => {
            console.error("Error loading the translation file:", error);
        });

    sendChat.addEventListener("click", function () {
        const userMessage = chatInput.value.toLowerCase().trim();
        if (userMessage === "") return;

        chatBody.innerHTML += `<div class='userMessage'>${chatInput.value}</div>`;

        setTimeout(() => {
            if (translations[currentLang] && translations[currentLang].response[userMessage]) {
                chatBody.innerHTML += `<div class='botMessage'>${translations[currentLang].response[userMessage]}</div>`;
            } else {
                chatBody.innerHTML += `<div class='botMessage'>${translations[currentLang].default_response}</div>`;
            }
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);

        chatInput.value = "";
    });
});

