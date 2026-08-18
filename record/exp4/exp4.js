function changeContent() {
    let message = document.getElementById("message");

    message.innerHTML = "You clicked the button!";
    message.style.color = "red";
    message.style.fontWeight = "bold";

    document.body.style.backgroundColor = "#d4edda";
}