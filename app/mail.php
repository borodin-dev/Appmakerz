<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['surname'])) {$surname = $_POST['surname'];}
if (isset($_POST['mail'])) {$mail = $_POST['mail'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['companyName'])) {$companyName = $_POST['companyName'];}
if (isset($_POST['text'])) {$text = $_POST['text'];}

$to = "borodin.dev@gmail.com"; /*Укажите ваш адрес электронной почты*/
$subject = "Сообщение с сайта";
$message = "Фамилия и имя пославшего: ".$surname." " .$name."
    \n E-mail пославшего: ".$mail."
    \n Skype пославшего: ".$phone."
    \n Theme пославшего: ".$companyName."
    \n Текст письма: ".$text;
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers = 'From: Cайт-заглушка <'.$mail.'>';
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
{
echo json_encode(array('result' => 'Ваше сообщение успешно отправлено'));
}
else
{
echo json_encode(array('result' => 'Ошибка. Сообщение не отправлено!'));
}