function tinh() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var msg = document.getElementById('msg');

    if (name === '' || age === '0' || weight === '' || height ==='' || gender === null) {
        alert('Please enter enough information');
    } else {
        if (isNaN(weight) || isNaN(height)) {
            alert('Weight and height must be numbers');
        } else {
            msg.innerHTML =    "Name: " + name + "<br>" +
                                "Gender: " + gender.value + "<br>" +
                                "Weight: " + weight + " kg<br>" +
                                "Height: " + height + " m<br>" +
                                "Age: " + age;
        }
    }
}