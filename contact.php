<?php
/**
 * TESSERACT — contact.php
 * Handles team application form submissions
 * Note: For Vercel deployment, use a PHP-capable host (e.g., Heroku, cPanel, VPS)
 * or replace with a serverless API route (api/contact.js for Next.js)
 */

// ── CORS & Headers ──
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ── Sanitize & Validate Input ──
function sanitize(string $input): string {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

function validateEmail(string $email): bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

$errors = [];

$fname   = sanitize($_POST['fname']   ?? '');
$lname   = sanitize($_POST['lname']   ?? '');
$email   = sanitize($_POST['email']   ?? '');
$sid     = sanitize($_POST['sid']     ?? '');
$role    = sanitize($_POST['role']    ?? '');
$message = sanitize($_POST['message'] ?? '');

// Required field validation
if (empty($fname))               $errors[] = 'First name is required.';
if (empty($lname))               $errors[] = 'Last name is required.';
if (empty($email))               $errors[] = 'Email is required.';
if (!validateEmail($email))      $errors[] = 'Please enter a valid email address.';
if (empty($sid))                 $errors[] = 'Student ID is required.';
if (empty($role))                $errors[] = 'Please select a role.';

// IITM Student ID format check (optional, adjust regex as needed)
if (!empty($sid) && !preg_match('/^\d{2}[a-zA-Z]\d{7,}$/', $sid)) {
    $errors[] = 'Student ID format appears invalid (e.g., 21f1XXXXXXX).';
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// ── Build Email ──
$fullName    = "$fname $lname";
$toEmail     = 'tesseract@iitm.ac.in';     // ← Change to your actual email
$fromEmail   = 'noreply@tesseractfun.com';  // ← Change to your domain
$subject     = "New Team Application — $fullName ($role)";

$roleLabels = [
    'frontend' => 'Frontend Developer',
    'backend'  => 'Backend Developer',
    'design'   => 'UI/UX Designer',
    'game'     => 'Game Designer',
    'content'  => 'Content & Strategy',
];

$roleName = $roleLabels[$role] ?? $role;

$body = <<<EOT
New Tesseract Team Application
================================

Name       : $fullName
Email      : $email
Student ID : $sid
Role       : $roleName

Message / Why Tesseract:
$message

---
Submitted: {$_SERVER['REQUEST_TIME']}
IP: {$_SERVER['REMOTE_ADDR']}
EOT;

$headers  = "From: $fromEmail\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

// ── Send Email ──
$sent = mail($toEmail, $subject, $body, $headers);

if ($sent) {
    // Send confirmation to applicant
    $confirmSubject = "Thanks for applying to Tesseract!";
    $confirmBody    = <<<EOT
Hi $fname,

Thanks for applying to join the Tesseract team! 🎉

We've received your application for the "$roleName" role and will review it shortly.
Expect to hear from us within 24 hours.

In the meantime, check out the platform at https://tesseractfun.netlify.app/

See you on the other side,
— The Tesseract Team
EOT;
    mail($email, $confirmSubject, $confirmBody, "From: $fromEmail\r\n");

    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Application submitted successfully!']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again.']);
}
?>
