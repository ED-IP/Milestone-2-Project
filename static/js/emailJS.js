function sendEmail(requestForm) {
    emailjs.send("service_yavk8t6", "template_3d8n1ip", {
            "from_name": requestForm.name.value,
            "lastname": requestForm.lname.value,
            "from_email": requestForm.email.value,
            "information_request": requestForm.information.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },

            function (error) {
                console.log("FAILED", error);
            });
    return false;
}