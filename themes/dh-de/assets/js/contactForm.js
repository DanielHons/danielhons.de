const INVALID_CLASS = "is-invalid";

function submitToAPI(e) {
    if (e !== undefined) {
        e.preventDefault();
    }

    var isValid = true;

    let Namere = /[A-Za-z]{1}[A-Za-z]/;
    let mobilere = /[0-9,-]{8}/;
    let reemail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;


    let nameInput = $("#formInputName");
    let phoneInput = $("#formInputPhone");
    let emailInput = $("#formInputEmail");
    let companyInput = $("#formInputCompany")
    let messageInput = $("#formMessage")

    let cTypeSelected = $('input[name=cType]:checked').val();
    let rqAction = $('input[name=rqAction]:checked').val();

    // Validation
    isValid = setValidationMaker($("#cTypeGroup"), cTypeSelected === undefined) && isValid
    isValid = setValidationMaker($("#rqActionGroup"), rqAction === undefined) && isValid
    isValid = setValidationMaker(nameInput, !Namere.test(nameInput.val())) && isValid
    isValid = setValidationMaker(emailInput, emailInput.val() === "" || !reemail.test(emailInput.val())) && isValid
    isValid = setValidationMaker(messageInput, messageInput.val() === "") && isValid
    // Only required for action "CALL_BACK
    isValid = setValidationMaker(phoneInput, rqAction === "CALL_BACK" && !mobilere.test(phoneInput.val())) && isValid
    // Only required for business contacts
    isValid = setValidationMaker(companyInput, cTypeSelected !== "PrivateCustomer" && !mobilere.test(phoneInput.val())) && isValid
    if (!isValid) {
        return;
    }

    const data = {
        name: nameInput.val(),
        company: companyInput.val(),
        phone: phoneInput.val(),
        email: emailInput.val(),
        message: messageInput.val(),
        rqAction: rqAction,
        contactType: cTypeSelected
    };

    $.ajax({
        type: "POST",
        url: contactFormEndpoint,
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message
            alert("Ihre Nachricht wurde erfolgreich versendet. Vielen Dank.");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function () {
            // show an error message
            alert("Ups - da ist was schief gelaufen.");
        }
    });
}


function setValidationMaker(element, isInvalid) {
    if (isInvalid) {
        element.addClass(INVALID_CLASS)
    } else {
        element.removeClass(INVALID_CLASS)
    }
    return !isInvalid
}


function updateDisplayedHints() {
    let cType = $('input[name=cType]:checked').val();
    console.log(cType)
    let hintPrivate = $("#hintPrivate");
    let hintRecruiter = $("#hintRecruiter");
    switch (cType) {
        case "Recruiter":
            hintPrivate.hide()
            hintRecruiter.show()
            break;
        case "PrivateCustomer":
            hintPrivate.show()
            hintRecruiter.hide()
            break;
        default:
            hintPrivate.hide()
            hintRecruiter.hide()
    }
}

