<?php
$error_message = "";
$name = "";
$email = "";
$comment = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];
    if (empty($name) || ctype_space($name)) {
        $error_message .= "Họ tên không được bỏ trống và không được chỉ chứa dấu cách.<br>";
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error_message .= "Email không hợp lệ.<br>";
    }



    if (empty($error_message)) {
        $success_message = "Bình luận của bạn đã được ghi nhận.";
        $name = "";
        $email = "";
        $comment = "";
    }
    if (!empty($error_message)) {
        echo "<div style='color: red;'>$error_message</div>";
    }

    if (isset($success_message)) {
        echo "<div style='color: green;'>$success_message</div>";
    }
}
