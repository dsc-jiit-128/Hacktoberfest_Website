<?php
 function check_if_added_to_cart($items_id) {
     $con= mysqli_connect("localhost","root","","ecommerce")or die(mysqli_error($con));
     $user_id = $_SESSION['id'];
     $query = "SELECT * FROM users_items WHERE items_id='$items_id' AND user_id ='$user_id' and status='Added to cart'";
     $result = mysqli_query($con, $query) or die(mysqli_error($con));
    
    if (mysqli_num_rows($result) >= 1) {
        return 1;
    } else {
        return 0;
    }
}

?>
    