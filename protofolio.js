document.addEventListener('DOMContentLoaded', function() {
    const words = ["Programmer", "UX/UI Designer", "Web Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 200;
    const typingElement = document.getElementById('typing-text');
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // حالة المسح
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // حالة الكتابة
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 200;
        }

        // التحقق من اكتمال الكلمة
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // انتظر ثانيتين قبل البدء في المسح
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // الانتقال للكلمة التالية
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // انتظر نصف ثانية قبل البدء في الكتابة
        }

        setTimeout(type, typingSpeed);
    }

    // بدء التأثير
    type();
});