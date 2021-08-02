import swal from "sweetalert";

export function Alert(title, msg, type, time = 5000) {
    swal({
        title: title,
        text: msg,
        icon: type,
        buttons: false,
        timer: time
    });
}
