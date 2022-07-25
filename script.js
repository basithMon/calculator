function buttonclick(val) {
    document.getElementById("output").value += val;
}
function clearButton() {
    document.getElementById("output").value = ""
    document.getElementById("ansa").value = ""

}
function answerKey() {
    var text = document.getElementById("output").value
    var result = eval(text)
    document.getElementById("ansa").value = result
}