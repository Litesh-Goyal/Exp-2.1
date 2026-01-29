const textarea = document.getElementById('messageInput');
const counter = document.getElementById('counter');
const maxLength = 1000;

textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    
    // Counter text update karo
    counter.innerText = `${currentLength}/${maxLength}`;

    // Reactive UI Logic: Check if limit is reached
    if (currentLength >= maxLength) {
        counter.classList.add('limit-reached');
        textarea.classList.add('error-border');
    } else {
        counter.classList.remove('limit-reached');
        textarea.classList.remove('error-border');
    }
});
