import Swal from "sweetalert2";

const btnConfirmColor = "#010F6D";
const btnCancelColor = "rgb(196,196,196)";

export function showSweetSuccessModal(titleModal, messageModal) {
    return(
        Swal.fire({
            title: titleModal,
            text: messageModal,
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: btnConfirmColor,
            timer: 3000,
            timerProgressBar: true
        })
    )
}

export function showSweetErrorModal(titleModal, messageModal) {
    return(
        Swal.fire({
            title: titleModal,
            text: messageModal,
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: btnConfirmColor,
            timer: 3000,
            timerProgressBar: true
        })
    )
}