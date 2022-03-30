var sharebutton = document.querySelector('[name="share"]');
var shareicon = document.querySelector('.fa-solid');
sharebutton.addEventListener('click', ShareButtonClick);

function ShareButtonClick() {
    sharebutton.classList.toggle('click');
    shareicon.classList.toggle('click');

    var sharebox = sharebutton.nextElementSibling;
    if (sharebox.style.display == "flex") {
        sharebox.style.display = "none";
    } else {
        sharebox.style.display = "flex";
    }
}