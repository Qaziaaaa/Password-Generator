
let input = document.getElementById('inputBox').value
let btn = document.getElementById('btn')
function randomPassGenerator() {
    let words = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXWXYZ~!#$%^&*()_+{}:<>?/'
    randPass = ''
    for (let i = 0; i < Math.floor(Math.random() * (50 - 8 + 1)) + 8; i++) {
        let rand = Math.floor(Math.random() * words.length)
        randPass += words[rand]
    }
    document.getElementById('inputBox').value = randPass
}
btn.addEventListener('click', randomPassGenerator)

// Add copy functionality
document.getElementById('copyIcon').addEventListener('click', function () {
    const inputBox = document.getElementById('inputBox');
    inputBox.select();
    document.execCommand('copy');

    // Show feedback
    const copyIcon = this.querySelector('.copy-icon');
    copyIcon.classList.remove('fa-copy');
    copyIcon.classList.add('fa-check');

    setTimeout(() => {
        copyIcon.classList.remove('fa-check');
        copyIcon.classList.add('fa-copy');
    }, 1000);
});