/*(A1 or A2 or A3 or A4) and
(B1 or B2 or C2 or D2) and
(C1 or C2 or C3 or C4)*/
function out() {
    var form = document.f1;
    var output = "";
    var values = [
        [form.aName.value, form.a1.value, form.a2.value, form.a3.value, form.a4.value],
        [form.bName.value, form.b1.value, form.b2.value, form.b3.value, form.b4.value],
        [form.cName.value, form.c1.value, form.c2.value, form.c3.value, form.c4.value]
    ];

    var outputParts = [];

    for (var i = 0; i < values.length; i++) {
        var groupTerms = values[i]
            .map(function (s) { return s.trim(); })
            .filter(function (s) { return s.length >= 3; }); // Minimum 3 letters

        if (groupTerms.length > 0) {
            outputParts.push("(" + groupTerms.join(" OR ") + ")");
        }
    }

    if (outputParts.length === 0) {
        alert("You must enter at least one term of 3 or more characters.");
    } else {
        form.outbox.value = outputParts.join(" and ");
    }
}
