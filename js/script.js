function formValidate(str, id) {
    if (str.length == 0) {
        message("This field cannnot blank", id);
        return;
    }
    else if (str.length < 8 && str.length > 0 && id == "password") {
        message("Password cannot less then 8 letter", id);
    }
    else if (str.length != 4 && id == "postcode") {
        message("Post Code cannot less then 4 letter", id);
    }
    else {
        x = document.getElementById('text' + id);
        x.remove();
    }


}
function message(mess, id) {
    try {
        x = document.getElementById('text' + id);
        x.remove();
    } catch {
    }
    var formfield = document.getElementById(id);
    formfield.outerHTML =
        '<div id="text' + id + '" class="text">' + mess + '</div>' + formfield.outerHTML;


}

function submitForm(form) {
    var url = form.attr("action");
    var formData = {};
    $(form).find("input[name]").each(function (index, node) {
        formData[node.name] = node.value;
    });
    $.post(url, formData).done(function (data) {
        alert(data);
    });
}


document.getElementsByName('add').forEach((item) => {
    item.onclick = () => {
        console.log(parseInt(document.getElementById('cart-total').innerHTML));
        let x = parseInt(document.getElementById('cart-total').innerHTML);
        x += 1;
        document.getElementById('cart-total').innerHTML = String(x);
    }
});