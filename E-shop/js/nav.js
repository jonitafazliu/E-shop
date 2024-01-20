const createNav=()=>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML=`
    <div class="nav">
            <img src="img/burberry-clothing-vector-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, products">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="img/User-Account-PNG-Transparent-Image.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="women.html" class="link">Women</a></li>
            <li class="link-item"><a href="men.html" class="link">Men</a></li>
            <li class="link-item"><a href="kids.html" class="link">Kids</a></li>
            <li class="link-item"><a href="home.html" class="link">Accessories</a></li>

        </ul>
    `;
}
createNav();
