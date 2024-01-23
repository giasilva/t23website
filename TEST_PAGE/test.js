
function print(str) {
    output = document.getElementById("output");
    output.innerText += str + ", ";
}

function prim() {
    inp = document.getElementById("code_input");
    uppTill = parseInt(inp.value);

    for (nummer = 2; nummer < uppTill + 1; nummer++) {
        prim = true
        for (nummer2 = 2; nummer2 < nummer; nummer2++) {
            if (nummer % nummer2 == 0) {
                prim = false;
                break;
            }
        }
        if (prim == true) {
            print(nummer)
        }
    }
}


function run() {
    prim();
}
