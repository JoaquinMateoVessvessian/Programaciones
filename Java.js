document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let count = 0;

    document.getElementById('add-btn').addEventListener('click', () => {
        count += 1;
        counterElement.textContent = count;
    });

    document.getElementById('subtract-btn').addEventListener('click', () => {
        count -= 1;
        counterElement.textContent = count;
    });
});