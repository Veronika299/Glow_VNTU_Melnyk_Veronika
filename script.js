// Додаємо обробник події для кнопок "Order Now"
const orderButtons = document.querySelectorAll('.order-button');

orderButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Змінюємо стиль кнопки при натисканні
        this.style.transform = "scale(1.1)"; // Збільшуємо кнопку
        this.style.transition = "transform 0.2s"; // Анімація

        // Додаємо сповіщення
        alert("Дякуємо за замовлення!");

        // Повертаємо кнопку до початкового розміру
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 300); // Повертаємо через 300 мс
    });
});