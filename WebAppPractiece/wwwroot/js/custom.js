let loadMore = document.querySelector('.btn-load-more');

loadMore.addEventListener('click', function () {
    let loadedCount = document.querySelectorAll(".load-products .product").length;
    let totalCount = parseInt(
        document.querySelector(".load-products .product-count").value
    );

    fetch(`/Home/LoadMore?skip=${loadedCount}`)
        .then(res => res.text())
        .then(data => {

            if (data.trim() === "") {
                this.style.display = 'none';
                return;
            }

            document.querySelector('.load-products')
                .insertAdjacentHTML("beforeend", data);

            loadedCount = document.querySelectorAll(".load-products .product").length;

            if (loadedCount >= totalCount) {
                this.style.display = 'none';
            }
        })
        .catch(err => console.error(err));
});

