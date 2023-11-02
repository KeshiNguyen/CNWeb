<?php
require 'vendor/autoload.php';
//composer require chillerlan/php-qrcode

use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $mssv = $_POST['mssv'];
    $vaccine = $_POST['vaccine'];

    $data = "Họ tên: $name\nMSSV: $mssv\nSố mũi vaccine COVID: $vaccine";

    $options = new QROptions([
        'outputType' => QRCode::OUTPUT_IMAGE_PNG,
        'eccLevel' => QRCode::ECC_L,
    ]);

    $qrcode = new QRCode($options);
    $qrcode->render($data);
}
