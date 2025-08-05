$(document).ready(function () {
    $('#confirmBtn').on('click', function (e) {
        e.preventDefault();

        let isValid = true;

        $('.error-msg').remove();

        $('input:required, textarea:required, select:required').each(function () {
            if (!$(this).val()) {
                $(this).after('<div class="error-msg text-danger small">Required</div>');
                isValid = false;
            }
        });

        const radioGroups = ['time', 'doctor', 'appointment'];
        radioGroups.forEach(function (group) {
            const radios = $(`input[name="${group}"]`);
            if (radios.filter(':checked').length === 0) {
                if ($(`#${group}-msg`).length === 0) {
                    radios.last().closest('div').append(
                        `<div id="${group}-msg" class="error-msg text-danger small">Required</div>`
                    );
                }
                isValid = false;
            }
        });

        if (isValid) {
            $('form')[0].submit();
        }
    });
});

AOS.init();
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent POST request

        // Optionally, add your validation here

        // If validation passes, redirect to confirmation page
        window.location.href = 'submission.html';
    });
});
