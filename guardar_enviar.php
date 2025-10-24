<?php
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$data = json_decode(file_get_contents("php://input"), true);

$nombre = $data['nombre'];
$email = $data['email'];
$pdfBase64 = $data['pdf'];

// Quitar encabezado "data:application/pdf;base64,"
$pdfData = explode(',', $pdfBase64)[1];
$pdfContent = base64_decode($pdfData);

// Guardar archivo en el servidor (opcional)
$rutaArchivo = "C:/xampp/htdocs/Certificado_$nombre.pdf";
file_put_contents($rutaArchivo, $pdfContent);

// Enviar email con adjunto
$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "eps.region.9.instagram@gmail.com";
    $mail->Password = "wrofrjhnecpvppup"; // clave de aplicación
    $mail->SMTPSecure = "tls";
    $mail->Port = 587;

    $mail->setFrom("eps.region.9.instagram@gmail.com", "Proyecto EPS");
    $mail->addAddress($email, $nombre);
    $mail->Subject = "Tu Certificado del Quiz Interdisciplinario";
    $mail->Body = "Hola $nombre,\n\nAdjunto tu certificado del Quiz Interdisciplinario. ¡Felicitaciones!";
    $mail->addAttachment($rutaArchivo);

    $mail->send();
    echo "✅ Certificado enviado correctamente a $email";
} catch (Exception $e) {
    echo "❌ Error al enviar: {$mail->ErrorInfo}";
}
?>

