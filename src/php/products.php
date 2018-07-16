<?php
    include "./init.php";
    @$pid = $_REQUEST["pid"];
    @$kind = $_REQUEST['kind'];
    if($pid){
        $sql = "SELECT * FROM products WHERE pid='$pid'";
        $result = mysqli_query($connect,$sql);
        $response = array(); 
        while($row = mysqli_fetch_assoc($result)){
            $response[] = $row;
        }
    }else{
        $sql = "SELECT kid FROM kind WHERE kname='$kind'";
        $result = mysqli_query($connect,$sql);
        $kindid = mysqli_fetch_assoc($result);
        print_r($kindid);
        $sql = "SELECT * FROM products WHERE kindid='$kindid'";
        $result = mysqli_query($connect,$sql);
        $response = array(); 
        while($row = mysqli_fetch_assoc($result)){
            $response[] = $row;
        }
    }
?>