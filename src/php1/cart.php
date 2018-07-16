<?php
    include "./init.php";
    @$pname = $_REQUEST["pname"];
    @$pavatar = $_REQUEST["pavatar"];
    @$price = $_REQUEST["price"];
    @$proid = $_REQUEST["proid"];
    @$count = $_REQUEST["count"];
    @$cid = $_REQUEST["cid"];
    @$kind = $_REQUEST["kind"];
    if($kind == "select"){
        $sql = "SELECT * FROM cart";
        $result = mysqli_query($connect,$sql);
        $response = array(); 
        while($row = mysqli_fetch_assoc($result)){
            $response[] = $row;
        }
    }else if($kind == "update"){
        $sql = "UPDATE cart SET count='$count' WHERE cid='$cid'";
        mysqli_query($connect,$sql);
        $row = mysqli_affected_rows($connect);
        $response = [
            'code'=>0,
            'resMsg'=>''
        ];
        if($row > 0){
            $response['code'] = 200;
            $response['resMsg'] = '修改成功';
        }else{
            $response['code'] = 400;
            $response['resMsg'] = '修改失败';
        }
    }else if ($kind == "insert"){
        $sql = "INSERT INTO cart VALUES (null,'$proid','$pname','$pavatar','$price','$count')";
        mysqli_query($connect,$sql);
        $row = mysqli_affected_rows($connect);
        $response = [
            'code'=>0,
            'resMsg'=>''
        ];
        if($row > 0){
            $response['code'] = 200;
            $response['resMsg'] = '添加成功';
        }else{
            $response['code'] = 400;
            $response['resMsg'] = '添加失败';
        }
    }else if($kind == "delete"){
        $sql = "DELETE FROM cart WHERE cid='$cid'";
        mysqli_query($connect,$sql);
        $row = mysqli_affected_rows($connect);
        $response = [
            'code'=>0,
            'resMsg'=>''
        ];
        if($row > 0){
            $response['code'] = 200;
            $response['resMsg'] = '删除成功';
        }else{
            $response['code'] = 400;
            $response['resMsg'] = '删除失败';
        }
    }
    echo json_encode($response);
?>