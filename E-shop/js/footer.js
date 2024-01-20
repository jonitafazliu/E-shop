const createFooter=()=>{
    let footer= document.querySelector('footer');
    footer.innerHTML=` <div class="footer-content">
    <img src="img/burberry-clothing-vector-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Women</li>
            <li><a href="#" class="footer-link">T-shirts</a></li>
            <li><a href="#" class="footer-link">Sweatshirts</a></li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Jeans</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Deserunt, iure voluptatum? Odio, alias quasi ipsam explicabo quos laudantium cum,
     nulla hic, delectus quia necessitatibus optio perspiciatis officiis accusamus deserunt dolore.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quam numquam sequi non saepe incidunt
     voluptate quis possimus accusamus omnis ea excepturi expedita aliquid aperiam voluptates, ab eum mollitia amet.</p>
     <p class="info">Support emils- help@clothing.com, customersupport!clothing.com</p>
     <p class="info">Telephone- 180 00 00 001, 180 00 00 002</p>
     <div class="footer-social-container">
         <div>
             <a href="#" class="social-link">terms & services</a>
             <a href="#" class="social-link">Privacy page</a>
         </div>
         <div>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
     </div>
     <p class="footer-credit">Clothing, Best Apparels online store</p>

    `;
}
createFooter();