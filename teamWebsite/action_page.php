<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $first = htmlspecialchars($_POST['firstname']);
    $last = htmlspecialchars($_POST['lastname']);
    $section = htmlspecialchars($_POST['section']);
    $notes = htmlspecialchars($_POST['subject']);

    $to = "your@email.com";   // CHANGE THIS
    $subject = "New Reservation Request";
    
    $message = "First Name: $first\n";
    $message .= "Last Name: $last\n";
    $message .= "Section: $section\n";
    $message .= "Notes:\n$notes\n";

    $headers = "From: noreply@yoursite.com";

    mail($to, $subject, $message, $headers);

    header("Location: thankyou.html");
    exit();
}
?>
