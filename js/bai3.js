function sosanh() {
    var boxA = document.getElementById('boxA').value;
    var boxB = document.getElementById('boxB').value;

    var boxARadio = document.getElementById('A');
    var equalRadio = document.getElementById('Bang');
    var boxBRadio = document.getElementById('B');

    if (boxA.length > boxB.length) {
        boxARadio.checked = true;
        equalRadio.checked = false;
        boxBRadio.checked = false;
    } else if (boxA.length < boxB.length) {
        boxARadio.checked = false;
        equalRadio.checked = false;
        boxBRadio.checked = true;
    } else {
        boxARadio.checked = false;
        equalRadio.checked = true;
        boxBRadio.checked = false;
    }
}