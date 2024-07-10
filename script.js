document.getElementById('ctrl').addEventListener('click', () => {
    alert('Press CTRL and hold, then click ok');
});

document.getElementById('shift').addEventListener('click', () => {
    alert('Press SHIFT and hold, then click ok');
});

document.getElementById('delete').addEventListener('click', () => {
    alert('while holding the previous keys, Press DELETE, now we can clear cache and cookies');
});

document.getElementById('iphone-guide').addEventListener('click', () => {
    window.location.href = 'iphone-guide.html';
});

document.getElementById('android-guide').addEventListener('click', () => {
    window.location.href = 'android-guide.html';
});