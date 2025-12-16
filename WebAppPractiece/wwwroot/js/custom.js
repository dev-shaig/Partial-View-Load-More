let loadMore = document.querySelector('.btn-load-more');

loadMore.addEventListener('click', function () {
    let htmlProductCount = document.querySelectorAll(".load-products .product").length
    let dbProductCount = document.querySelector(".load-products .product-count").value

    fetch(`/Home/LoadMore?${htmlProductCount}`)
        .then(response => response.text())
        .then(data => {
            let container = document.querySelector('.load-products');
            container.innerHTML += data;;

            htmlProductCount = document.querySelectorAll(".load-products .product").length

            if (htmlProductCount == dbProductCount)
            {
                this.style.display = 'none';
            }
        })
        .catch(error => console.error('Error:', error));
});