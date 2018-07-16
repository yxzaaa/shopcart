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
        $id = $kindid["kid"];
        $sql = "SELECT * FROM products WHERE kindid='$id'";
        $result = mysqli_query($connect,$sql);
        $response = array(); 
        while($row = mysqli_fetch_assoc($result)){
            $response[] = $row;
        }
    }
    echo json_encode($response);
?>