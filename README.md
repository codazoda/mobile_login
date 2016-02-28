# Mobile Login Interface

This is a simple login page designed so that it can be put into the iOS App Store or the Android Market. It has an image and fields for username and password. In order to use this as a basis for an app that opens a WebView to your website just make the form POST to your existing login system.

The system has a few extras that make it okay to submit to the iOS App Store such as checking if the device is currently online and disabling the submit button with a warning if it is not.

## Customizing

- Put your own logo in image/logo.png
- Edit the title in index.html
- Edit the action in the form in index.html to point to your own website
- Edit the username field in index.html to match your systems requirements
- Edit the password field in index.html to match your systems requirements
- Edit the href for the forgot password link in index.html
- Put custom styles in css/styles.css
- Edit the config.xml to describe the app for Phonegap Build
- Add your website to the allow-internet area of the config.xml file