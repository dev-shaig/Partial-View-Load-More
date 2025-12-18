let loadMore = document.querySelector('.btn-load-more');

loadMore.addEventListener('click', function () {
<<<<<<< HEAD
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
=======

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
>>>>>>> 740f8e9 (fix: correct product class mismatch to enable proper load more pagination)
