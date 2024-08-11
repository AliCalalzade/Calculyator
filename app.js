
let displayValue = ""
let oldValue = ""
let oldValue2 = ""
let input = document.getElementById("input")
let sign = null
let sign2 = null
let stuation = false



function elementClick(Val) {
    if (Val == "AC") {
        displayValue = ""
        oldValue = ""
        sign = null
        input.value = ""
    } else if (Val == "+/-") {
        // if (displayValue.charAt(0) !== "-") {
        //     displayValue = `-${displayValue}`
        // } else {
        //     displayValue = displayValue.slice(1, displayValue.length)
        // }
        if (displayValue.includes("-")) {
            displayValue = displayValue.slice(1, displayValue.length)
        } else {
            displayValue = `-${displayValue}`
        }
    } else if (Val == "%") {
        displayValue = displayValue / 100
    } else if (Val == ".") {
        if (!displayValue.includes(".")) {
            displayValue = `${displayValue}.`
        }
    }
    input.value = displayValue
}
function Numberclick(Val) {
    if (!stuation) {
        if (displayValue == "") {
            displayValue = String(Val)
        } else {
            displayValue += String(Val)

        }
    } else {
        displayValue = String(Val)

        stuation = false
    }
    input.value = displayValue
    // console.log(displayValue)
}

function transactionsCilick(Val) {
    if (oldValue == "") {
        oldValue = Number(displayValue)
    }
    if (Val !== "+" && Val !== "-" && Val !== "=") {
        oldValue2 = oldValue
        oldValue = Number(displayValue)
        sign2 = sign
        sign = null
    }
    if (sign == "+") {
        oldValue += Number(displayValue)
        displayValue = oldValue
    } else if (sign == "-") {
        oldValue -= Number(displayValue)
        displayValue = oldValue
    } else if (sign == "*") {
        oldValue *= Number(displayValue)
        if (oldValue2 != "") {
            if (sign2 == "+") {
                oldValue = oldValue2 + oldValue
            } else if (sign2 == "-") {
                oldValue = oldValue2 - oldValue
            }

        }
        displayValue = oldValue
    } else if (sign == "/") {
        oldValue /= Number(displayValue)
        if (oldValue2 != "") {
            if (sign2 == "+") {
                oldValue = oldValue2 + oldValue
            } else if (sign2 == "-") {
                oldValue = oldValue2 - oldValue
            }
            oldValue2 = ""
            sign2 = null
        }
        displayValue = oldValue
    }
    if (Val == "=") {
        displayValue = oldValue
    }
    stuation = true
    sign = Val
    console.log(oldValue)
    input.value = displayValue

}