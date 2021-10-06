<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$form = $_POST['form'];
$subscribe = $_POST['subscribe'];

// Формирование самого письма
if ($form == 'thankyou') {
    $title = "Best Tour Plan";
    $body = "
    <h2>New email</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br><br>
    <b>Email:</b> $email<br><br>
    <b>Message:</b><br>$message
    ";
} elseif ($form == 'subscription') {
    $title = "New subscription to the Best Tour Plan";
    $body = "
    <h2>New subscription</h2>
    <b>email:</b> $subscribe<br>
    ";
}


$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'tavik997@gmail.com'; // Логин на почте
    $mail->Password   = '0663137696'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('tavik997@gmail.com', 'марк руб'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('wiking1317@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата

if ($form == 'thankyou') {
    header('Location: thankyou.html');
} elseif ($form == 'subscription') {
    header('Location: subscription.html');
}
