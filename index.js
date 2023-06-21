"use strict";

 // Document on ready
 $(() => {
    $("#submitBtn").click(() => {
        // Submit form to Google Sheet
        let action = "https://script.google.com/macros/s/AKfycby7QPqjcpl6m6bFFFsMuqnBdXm6FIlm-N1wDmXt1QbDXdAnbtrzH6nvNvLwuiIFzgwBFA/exec";
        $.post(action, $("#popupForm").serialize(), (data, status, xhr) => {
        });
    });
});