const products = document.querySelectorAll(".cart > div");

products.forEach(product => {
    const plus = product.querySelector(".plus");
    const minus = product.querySelector(".minus");
    const count = product.querySelector(".count");

    let quantity = 0;

    plus.addEventListener("click", () => {
        quantity++;
        count.textContent = quantity;
    });

    minus.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            count.textContent = quantity;
        }
    });
});