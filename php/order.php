<?php

$headers = 'Content-type: text/plain; charset="utf-8"';

$uswername = $_POST['userName'];
$uswermail = $_POST['userMail'];
$uswerphone = $_POST['userPhone'];
$uswertelegram = $_POST['userTelegram'];

$headers = 'MiME-Version: 1.0 . "\r\n"';
$headers = 'Content-type: text/html; charset="utf-8"';

$to ='vvwarning@gmail.com';
$subject = 'Заявка с сайта';
$message = "
<html>
<table>
<tr>
<td>Имя</td>
<td>$userName</td>
</tr>
<tr>
<td>email</td>
<td>$userMail</td>
</tr>
<tr>
<td>Телефон</td>
<td>$userPhone</td>
</tr>
<tr>
<td>Телеграм</td>
<td>$userTelegram</td>
</tr>
</table>
</html>
";

//$to - кому
//$subject - тема письма
//$message - тело письма
//$headers - спец заголовок, не трогать
mail($to, $subject, $message, $headers);

echo 'отправка формы';
header("Location:/success.html")


?>
<!-- 
<script>
   window.location.href="success.html";
</script> -->