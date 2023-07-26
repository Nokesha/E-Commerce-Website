const createFooter = () =>{
    let footer=document.querySelector('footer');
    footer.innerHTML=`
    <div class="footer-content">
      <img src="img/light-logo.png" class="logo" alt="">
      <div class="footer-ul-container">
         <ul class="category">
           <li class="category-title">Men</li>
           <li><a href="#" class="footer-link">T-shirts</a></li>
           <li><a href="#" class="footer-link">Sweatshirts</a></li>
           <li><a href="#" class="footer-link">Shirts</a></li>
           <li><a href="#" class="footer-link">Jeans</a></li>
           <li><a href="#" class="footer-link">Trousers</a></li>
           <li><a href="#" class="footer-link">Shoes</a></li>
           <li><a href="#" class="footer-link">Casuals</a></li>
           <li><a href="#" class="footer-link">Formals</a></li>
           <li><a href="#" class="footer-link">Sports</a></li>
           <li><a href="#" class="footer-link">Watches</a></li>
         </ul>
         <ul class="category">
          <li class="category-title">Women</li>
          <li><a href="#" class="footer-link">T-shirts</a></li>
          <li><a href="#" class="footer-link">Sweatshirts</a></li>
          <li><a href="#" class="footer-link">Shirts</a></li>
          <li><a href="#" class="footer-link">Jeans</a></li>
          <li><a href="#" class="footer-link">Trousers</a></li>
          <li><a href="#" class="footer-link">Shoes</a></li>
          <li><a href="#" class="footer-link">Casuals</a></li>
          <li><a href="#" class="footer-link">Formals</a></li>
          <li><a href="#" class="footer-link">Sports</a></li>
          <li><a href="#" class="footer-link">Watches</a></li>
        </ul>
      </div>
    </div>
    <p class="footer-title">About Company</p>
    <p class="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, nulla? Iusto nobis, optio dolore ut libero deleniti totam, commodi necessitatibus nam quod officiis sapiente consequatur veniam, nesciunt minus! Corporis iusto repellendus dolores totam quis alias commodi, consectetur sed magni! Voluptas magnam sit obcaecati veritatis, molestiae temporibus nihil fuga tempora voluptatem.</p>
    <p class="info">support emails-help@clothing.com,customersupport@clothing.com</p>
    <p class="info">telephone-180 00 00 001,180 00 00 002</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">Terms & Services</a>
        <a href="#" class="social-link">Privacy Page</a>
      </div>
      <div>
        <a href="#" class="social-link">Instagram</a>
        <a href="#" class="social-link">Facebook</a>
        <a href="#" class="social-link">Twitter</a>
      </div>
    </div>
    <p class="footer-credit">Clothing,best apparels online store</p>
    `;
}
createFooter();