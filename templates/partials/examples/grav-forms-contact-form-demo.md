---
title: 'Contact Form'
form:
    name: contact-form
    fields:
        -
            name: firstname
            placeholder: First Name
            label: false
            type: text
            wrapper_classes: col-xs-12 col-sm-6
            classes: form-control
            customicon: fa-user
            validate:
                required: true
        -
            name: lastname
            placeholder: Last Name
            label: false
            type: text
            wrapper_classes: col-xs-12 col-sm-6
            classes: form-control
            customicon: fa-address-card
            validate:
                required: true
        -
            name: email
            placeholder: Email
            label: false
            type: email
            wrapper_classes: col-xs-12
            classes: form-control
            customicon: fa-envelope
            validate:
                required: true
        -
            name: message
            placeholder: 'Message for me'
            label: false
            type: textarea
            wrapper_classes: col-xs-12
            classes: form-control
            customicon: fa-comment
            rows: 4
            validate:
                required: true
                message: 'Tell me something...'

# -----------
#   NOTES:  |
# -----------
#   *   always add 'classes: form-control' to each input/field
#   *   control responsive field width using wrapper_classes & bootstrap grid classes
#   *   all field-types should be properly styled, but I rely on your implementations to test & report any broken styling via Github issue
# ------------------------------------------------------------------------------------------
#   COMPLETE FORM FIELD REFERENCE: https://learn.getgrav.org/forms/forms/fields-available   |
# ------------------------------------------------------------------------------------------
    buttons:
        -
            type: submit
            value: Submit
        -
            type: reset
            value: Reset
    process:
        -
            save:
                fileprefix: contact-
                dateformat: Ymd-His-u
                extension: yaml
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            redirect: 'home#contact/?form=contact&status=success'
# -----------
#   NOTES:  |
# -----------
#   *   the form processing code shown above does 2 things:
#       1. saves the form results in the file system under /user/data/FORM-NAME/filename.txt
#       2. redirects back to the contact section of home page & gives parameters which can be used to trigger a SweetAlert using JS (or any other JS functions)
#           - to implement the SweetAlert copy & paste the contents of templates/partials/examples/sweetalert-demo.js to the homepage's JS editor field & update as appropriate (you may want to add error handling as well)
#   ---------------------------------------------------------------------------------------------
#   GRAV FORM PROCESSING GUIDE: https://learn.getgrav.org/forms/forms/reference-form-actions    |
#   ---------------------------------------------------------------------------------------------

---

