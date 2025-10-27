<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $destinatario = $_POST['emaildestino'];
    $archivo = $_FILES['archivo'];

    if (empty($destinatario) || $archivo['error'] !== UPLOAD_ERR_OK) {
        echo "Faltan datos o archivo inválido.";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP de Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'eps.region.9.instagram@gmail.com'; // 🔹 tu cuenta Gmail
        $mail->Password = 'wrofrjhnecpvppup'; // 🔹 ver abajo cómo se obtiene
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Datos del remitente y destinatario
        $mail->setFrom('eps.region.9.instagram@gmail.com', 'EPS Region 9');
        $mail->addAddress($destinatario);

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Envio del Certificado de participacion en el Quiz';
        $mail->Body = '<p>Este es tu Certificado con la puntuacion obtenida en el Quiz Interdisciplinario. Felicitaciones !!!!</p>';

        // Adjuntar archivo
        $mail->addAttachment($archivo['tmp_name'], $archivo['name']);

        $mail->send();
        echo "✅ El archivo fue enviado correctamente.";
        echo '<script>
            setTimeout(() => {
            window.location.href = "index.html";
            }, 3000);
            </script>';
    } catch (Exception $e) {
        echo "❌ Error: No se pudo enviar el correo. {$mail->ErrorInfo}";
    }
}

?>
