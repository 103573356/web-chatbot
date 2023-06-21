"use strict";
const errNameEmpty = "Xin điền tên vào chỗ trống.";
const errPhoneEmpty = "Xin điền số điện thoại vào chỗ trống.";
const errEmailEmpty = "Xin điền email vào chỗ trống.";
const errAddressEmpty = "Xin điền địa chỉ vào chỗ trống.";
const errEmailInvalid = "Email không hợp lệ.";
const errPhoneInvalid = "Số điện thoại không hợp lệ.";

// Document on ready
$(() => {
    $("#submitBtn").click(() => {
        // Validate
        let valid = true;
        $("#name").removeClass("is-invalid");
        $("#phone").removeClass("is-invalid");
        $("#email").removeClass("is-invalid");
        $("#address").removeClass("is-invalid");

        let phonePattern = /^0\d{9}$/;
        let emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

        let name = $("#name").val();
        if (name === "") {
            valid = false;
            $("#name").addClass("is-invalid");
            $("#nameFeedback").text(errNameEmpty);
        }

        let phone = $("#phone").val();
        if (phone === "") {
            valid = false;
            $("#phone").addClass("is-invalid");
            $("#phoneFeedback").text(errPhoneEmpty);
        } else if (!phonePattern.test(phone)) {
            valid = false;
            $("#phone").addClass("is-invalid");
            $("#phoneFeedback").text(errPhoneInvalid);
        }

        let email = $("#email").val();
        if (email === "") {
            valid = false;
            $("#email").addClass("is-invalid");
            $("#emailFeedback").text(errEmailEmpty);
        } else if (!emailPattern.test(email)) {
            valid = false;
            $("#email").addClass("is-invalid");
            $("#emailFeedback").text(errEmailInvalid);
        }

        let address = $("#address").val();
        if (address === "") {
            valid = false;
            $("#address").addClass("is-invalid");
            $("#addressFeedback").text(errAddressEmpty);
        }

        // Return if failed to validate form
        if (!valid)
            return;

        // Submit form to Google Sheet
        let action = "https://script.google.com/macros/s/AKfycby7QPqjcpl6m6bFFFsMuqnBdXm6FIlm-N1wDmXt1QbDXdAnbtrzH6nvNvLwuiIFzgwBFA/exec";
        $.post(action, $("#popupForm").serialize(), (data, status, xhr) => {
        });
        
        // Close form modal and open alert modal
        $("#popupFormModal").modal("toggle");
        $("#alertModal").modal("toggle");
    });
});