<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #141414;
            color: #F0F0F0;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #fff;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #141414;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <p class="label">Name:</p>
                <p>{{ $formData['firstName'] }} {{ $formData['lastName'] }}</p>
            </div>
            <div class="field">
                <p class="label">Email:</p>
                <p>{{ $formData['email'] }}</p>
            </div>
            <div class="field">
                <p class="label">Phone:</p>
                <p>{{ $formData['phone'] }}</p>
            </div>
            <div class="field">
                <p class="label">Service Type:</p>
                <p>{{ $formData['serviceType'] }}</p>
            </div>
            <div class="field">
                <p class="label">Client Type:</p>
                <p>{{ $formData['clientType'] }}</p>
            </div>
            <div class="field">
                <p class="label">Message:</p>
                <p>{{ $formData['message'] }}</p>
            </div>
        </div>
    </div>
</body>
</html>
