/*(A1 or A2 or A3 or A4) and
(B1 or B2 or C2 or D2) and
(C1 or C2 or C3 or C4)*/
function out() {
    var output = "";
    var first = true;
    var firstsub = true;
    var values = [
        [document.f1.aName.value, document.f1.a1.value, document.f1.a2.value, document.f1.a3.value, document.f1.a4.value],
        [document.f1.bName.value, document.f1.b1.value, document.f1.b2.value, document.f1.b3.value, document.f1.b4.value],
        [document.f1.cName.value, document.f1.c1.value, document.f1.c2.value, document.f1.c3.value, document.f1.c4.value]
    ];
    for (var i = 0; i < values.length; i++) {
        firstsub = true;
        for (var j = 0; j < values[i].length; j++) {
            if (notEmpty(values[i][j])) {
                if (first) {
                    if (firstsub) {
                        output += "(";
                        firstsub = false;
                    } else {
                        output += " OR ";
                    }
                } else {
                    if (firstsub) {
                        output += " and (";
                        firstsub = false;
                    } else {
                        output += " OR ";
                    }
                }
                output += values[i][j];
            }
        }
        if (!firstsub) {
            output += ")";
            if (first) first = false;
        }
    }
    if (output.length < 2) alert("You must enter at least one term");
    else document.f1.outbox.value = output;
}

function notEmpty(aStr) {
    if (aStr == "") return false;
    if (aStr == null || aStr == undefined) return false;
    for (var k = 0; k < aStr.length; k++) {
        if (aStr.charAt(k) != " ") return true;
    }
    return false;
}
