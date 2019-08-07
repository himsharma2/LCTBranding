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
	//alert(opt);
    //(input[NWF$(document).ready(function(){NWF$("#" + choice)})]).val(opt);
	//selectedIndex = opt
    //NWF$(document).ready(function(){NWF$("#" + choice).selectedIndex = opt;});
	//NWF$(document).ready(function(){NWF$("#" + choice);});
	//alert(choice);
	//var d="#"+choice+" option[value ='HA']";
    	//alert(d);
	//NWF$(d).attr("selected", "selected");



	//NWF$(document).ready(function(){NWF$("#" + test);});
	//alert(test);
	//var t="#"+test+" option[value ='c']";
    	//alert(t);
	//NWF$(t).attr("selected", "selected");

	//NWF$(document).ready(function(){NWF$("#" + lblst);});
	//alert(lblst);
	//var t1="#"+lblst+" option[value ='Complete']";
    	//alert(t1);
	//NWF$(t1).attr("selected", "selected");

	NWF$(document).ready(function(){NWF$("#" + Choice);});
	//alert(lblst);
	var t2="#"+Choice+" option[value = '"+opt+"']";
    	//alert(t2);
	NWF$(t2).attr("selected", "selected");
	
	//NWF$("#"+Choice).val('HA');
	//alert(Choice.val(opt));

    //alert(NWF$("#" + lblReasonChange).val(opt));

    NWF$(".reasonChange").css('display', 'none');
    NWF$(".panel3").css('display', 'none');
    if (opt == 'CCDS') {
       NWF$(".panel2").css('display', 'none');
       NWF$(".panel8").css('display', 'none');	
       NWF$(".panel11").css('display', 'none');
       
    }
    if (opt == 'HA' || opt == 'other') {
        NWF$(".panel1").css('display', 'none');
	NWF$(".panel9").css('display', 'none');
	NWF$(".panel10").css('display', 'none');
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

