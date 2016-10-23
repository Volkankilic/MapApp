$.validator.setDefaults({
    submitHandler: function (form) {
        form.submit();
    }
});

$().ready(function () {

    // validate signup form on keyup and submit
    $("#signupForm").validate({
        wrapper: "", debug: true,
        errorPlacement: function (label, elem) {
            label.addClass("control-label");
            elem.parent().parent().append(label);
        },

        highlight: function (element) {
            $(element).parent().parent().parent().addClass("has-danger");
        },
        unhighlight: function (element) {
            $(element).parent().parent().parent().removeClass("has-danger");
        },
        rules: {

            HEmail: {
                required: true,
                email: true
            },
            HParola: {
                required: true
            }
           
        },
        messages: {
            HEmail: "<b style='color:#218dea'>Email adresinizi giriniz</b>",
            HParola: "<b style='color:#218dea'>Parolanızı giriniz</b>",

        }
    });
});