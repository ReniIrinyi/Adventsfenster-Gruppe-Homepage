<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(array("error" => "All fields are required."));
        exit;
    }

    $to = "info@adventsfenster-bottenwil.com";
    $subject = "neue Anfrage";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    mail($to, $subject, $message, $headers);

    http_response_code(200);
    echo json_encode(array("message" => "Form submission successful."));
} else {
    http_response_code(405);
    echo json_encode(array("error" => "Method Not Allowed"));
}
?>