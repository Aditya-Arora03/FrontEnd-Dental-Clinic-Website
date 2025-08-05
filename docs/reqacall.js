$(document).ready(function () {
    $("#callbackForm").on("submit", function (e) {
        e.preventDefault();
        const fullName = $("#fullName").val();
        const phoneNumber = $("#phoneNumber").val();
        const email = $("#email").val();
        const callbackTime = $("#callbackTime").val();
        const urgency = $("#urgency").val();
        const reason = $("#reason").val();
        const comments = $("#comments").val();

        alert('Thank you, ' + fullName + '! Your callback request has been submitted. Our Executive Assistant from Dr. YAM\'s Clinic will contact you shortly.');


        $(this).trigger("reset");
    });
});
