// JScript source code
var hiddenIntervalTimer = 2 * 1000;
var hiddenInputs = new Array();
var hiddenTimerStarted = false;


//Function for retrieving values from querystring
function GetQueryParam(parameter) {
    var p = escape(unescape(parameter));
    var regex = new RegExp("[?&]" + p + "(?:=([^&]*))?", "i");
    var match = regex.exec(window.location.search);
    var value = null;
    if (match != null) {
        value = match[1];
    }
    return value;
}



function PopulateDropdown() {

    var opt = GetQueryParam("ReasonForChange");

    if (opt == 'CCDS' || opt == 'Other') {

        NWF$(document).ready(function () { NWF$("#" + reasonChange); });
        var argumentReasonChangeVal = "#" + reasonChange + " option[value = '" + opt + "']";
        NWF$(argumentReasonChangeVal).attr("selected", "selected");
    }

    if (opt == 'HA') {
        NWF$(document).ready(function () { NWF$("#" + reasonChange); });
        var argumentReasonChangeVal = "#" + reasonChange + " option[value = 'HA Request']";
        NWF$(argumentReasonChangeVal).attr("selected", "selected");
    }

    NWF$(".reasonChangeClass").css('display', 'none');

    if (opt == 'CCDS') {
        NWF$(".HAOtherpanel").css('display', 'none');
        NWF$(".HAbuttonPanel").css('display', 'none');
        NWF$(".HAHeaderPanel").css('display', 'none');
        NWF$(".OtherHeaderPanel").css('display', 'none');
        NWF$(".OtherbuttonPanel").css('display', 'none');
        NWF$(".antiBlurPanel").css('display', 'none');
    }

    if (opt == 'HA') {
        NWF$(".CCDSpanel").css('display', 'none');
        NWF$(".CCDSHeaderPanel").css('display', 'none');
        NWF$(".CCDSbuttonPanel").css('display', 'none');
        NWF$(".OtherHeaderPanel").css('display', 'none');
        NWF$(".OtherbuttonPanel").css('display', 'none');
        NWF$(".antiBlurPanel").css('display', 'none');
        NWF$(".OtherRequestDatePanel").css('display', 'none');
    }

    if (opt == 'Other') {
        NWF$(".CCDSpanel").css('display', 'none');
        NWF$(".CCDSHeaderPanel").css('display', 'none');
        NWF$(".CCDSbuttonPanel").css('display', 'none');
        NWF$(".HAHeaderPanel").css('display', 'none');
        NWF$(".HAbuttonPanel").css('display', 'none');
        NWF$(".antiBlurPanel").css('display', 'none');
        NWF$(".HARequestDatePanel").css('display', 'none');
    }

}



function EnableConditionControlOnView(controlWithConditionName) {
    var controlWithCondition = NWF$("#" + controlWithConditionName)[0];
    NWF$(controlWithCondition).find("span").removeAttr("disabled");
    NWF$(controlWithCondition).find("input").removeAttr("disabled");
    NWF$(controlWithCondition).removeAttr("disabled");
}

function DisplayControlConditionally(controlToConditionalDisplayClass, controlWithConditionName, displayCondition) {
    if (controlToConditionalDisplayClass != "" && controlWithConditionName != "") {
        var controlWithCondition = NWF$("#" + controlWithConditionName)[0];

        var displayControl = ShouldDisplayControl(controlWithCondition, displayCondition)

        var controlToConditionalDisplay = NWF$("." + controlToConditionalDisplayClass + ".nf-filler-control");

        if (!displayControl) ConditionalDisplayOfControl(controlToConditionalDisplay, displayControl);
        BindConditionalControls(controlToConditionalDisplay, controlWithCondition, displayCondition);
    }
}

function ConditionalDisplayOfControl(controlToConditionalDisplay, displayControl) {

    var controlToConditionalDisplayTop = 0;
    var heightIncrease = 0;
    var hasChanged = false;
    if (displayControl) {
        hasChanged = !controlToConditionalDisplay.is(":visible");
        controlToConditionalDisplay.show();
        controlToConditionalDisplayTop = parseInt(controlToConditionalDisplay.css("top")) - 1;
        heightIncrease = parseInt(controlToConditionalDisplay.css("height"));
    } else {
        hasChanged = controlToConditionalDisplay.is(":visible");
        controlToConditionalDisplayTop = parseInt(controlToConditionalDisplay.css("top")) + parseInt(controlToConditionalDisplay.css("height")) - 1;
        heightIncrease = -parseInt(controlToConditionalDisplay.css("height"));
        controlToConditionalDisplay.hide();
    }
    if (hasChanged) {
        NWF.Utilities.RepositionAndResizeOtherControls(controlToConditionalDisplay, controlToConditionalDisplayTop, heightIncrease);
    }
}

function ShouldDisplayControl(controlWithCondition, displayCondition) {
    var controlValue = null;

    if ((controlWithCondition.type == "radio" || controlWithCondition.type == "checkbox") && typeof (controlWithCondition.checked) != undefined) {
        controlValue = controlWithCondition.checked;
    }
    else if (controlWithCondition.value != undefined) {
        controlValue = controlWithCondition.value;
    }
    else if (NWF$(NWF$(controlWithCondition).find("input:checked")).val() != undefined) {
        controlValue = NWF$(NWF$(controlWithCondition).find("input:checked")).val();
    }

    var displayControl = true;

    if (typeof displayCondition == "function") {
        displayControl = displayCondition(controlValue);
    } else {
        displayControl = controlValue == displayCondition;
    }

    return displayControl;
}

function BindConditionalControls(controlToConditionalDisplay, controlWithCondition, displayCondition) {
    if (controlWithCondition.type == "hidden") {
        hiddenInputs[hiddenInputs.length] = [controlWithCondition, displayCondition, controlToConditionalDisplay, ""];

        if (!hiddenTimerStarted) {
            setTimeout('hiddenInputTimer()', hiddenIntervalTimer);
            hiddenTimerStarted = true;
        }
    } else {

        NWF$(controlWithCondition).bind({
            change: function (event) {

                var displayControl = ShouldDisplayControl(this, displayCondition)

                ConditionalDisplayOfControl(controlToConditionalDisplay, displayControl);
            }
        });
    }
}

function hiddenInputTimer() {
    for (var i = 0; i < hiddenInputs.length; i++) {
        var current = hiddenInputs[i];
        var controlWithCondition = current[0];
        var displayCondition = current[1];
        var controlToConditionalDisplay = current[2];
        var previousValue = current[3];

        if (controlWithCondition.value != previousValue) {
            var displayControl = ShouldDisplayControl(controlWithCondition, displayCondition)

            ConditionalDisplayOfControl(controlToConditionalDisplay, displayControl);
            hiddenInputs[i][3] = controlWithCondition.value;
        }
    }

    setTimeout('hiddenInputTimer()', hiddenIntervalTimer);
}
