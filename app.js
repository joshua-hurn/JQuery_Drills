$(document).ready(function () {
    const input = $("input")
    $("#btnSubmit").click(function () {
        alert(input.val())
        input.on('input', function () {
            
        })
    })
});