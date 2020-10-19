<?php
        require 'common.php';
        include 'modal.php';
        ?>
<div class="navbar navbar-Default navbar-fixed-top">
   <div class="container">
      <div class="navbar-header">
         <button type="button" class="navbar-toggle" data-toggle="collapse" datatarget="#myNavbar">
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span>
         </button>
          <a class="navbar-brand" href="index.php"><strong>Mobile's Store</strong></a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
       <ul class="nav navbar-nav navbar-right">
           <?php
           if (isset($_SESSION['id'])) {
             ?>
             <li><a href = "cart.php"><span class = "glyphicon glyphicon-shopping-cart"></span> Cart </a></li>
             <li><a href = "setting.php"><span class = "glyphicon glyphicon-user"></span>Settings</a></li>
             <li><a href = "logout.php"><span class = "glyphicon glyphicon-log-out"></span> Logout</a></li>
             <li><a href="about_us.php"><span class="glyphicon glyphicon-th-list"></span>About Us</a></li>
             <li><a href="contact_us.php"><span class="glyphicon glyphicon-phone"></span>Contact Us</a></li> 
           <?php
           } else { ?>
             <li><a href="signup.php"><span class="glyphicon glyphicon-user"></span>Sign Up</a></li>
             <li><a href="#" data-toggle="modal" data-target="#loginmodal"><span class="glyphicon glyphicon-log-in"></span>Login</a></li>
             <li><a href="about_us.php"><span class="glyphicon glyphicon-th-list"></span>About Us</a></li>
             <li><a href="contact_us.php"><span class="glyphicon glyphicon-phone"></span>Contact Us</a></li>
           <?php
           }
            ?>
       </ul>
      </div>
    </div>
</div>