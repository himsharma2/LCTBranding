/*var ntxDateArrs = [];
var createdByDT = "";
var ModifiedByDT = "";
var createdByDTArrs = [];
var ModifiedByDTArrs = [];
var createdByDate = "";
var ModifiedByDate = "";
var FcreatedByDate = "";
var createdBy = "";
var FModifiedByDate = "";
var ModifiedBy = "";*/
$('#hdnFlag').val("0");
var IndexOfHeaders = [];
var urlhref = window.location.href;


$(document).ready(function () {
    $('.s4-titletable .s4-titlelogo img').attr('src', '/SiteAssets/LogoImage/gileadLogo.png');
    $('.welcome-content .ms-rtestate-field > div.ms-rtestate-read.ms-rte-wpbox:last').addClass('height10px');

    // if (urlhref.toLowerCase().indexOf("/label-change-id-details.aspx") > -1) {

        // RunDateFormatscriptforLabelChangeViewPage();
    // } else if (urlhref.toLowerCase().indexOf("/forms/") > -1 || urlhref.toLowerCase().indexOf("/lists/") > -1) {
        // if ($("table.ms-listviewtable").length > 0) {
            // GetViewHeaderIndexes();
        // }
        // if (IndexOfHeaders.length > 0) {
            // RemoveTimeWithIndexes();
        // }
    // } else if (urlhref.toLowerCase().indexOf("/pages/default.aspx") > -1) {
        // setInterval(function () {
            // FormatDateShowing();
            // ChangeHomePageDateFormats();
        // }, 3000);
        // $(window).focus(function () {
            // FormatDateShowing();
            // ChangeHomePageDateFormats();
        // });
        // $('div#TopNavTabs').show();
    // } else {
        // setTimeout(FormatDateShowing, 500);
        // setTimeout(FormatDateShowing, 1000);
        // setTimeout(FormatDateShowing, 2000);
    // }
    if (urlhref.toLowerCase().indexOf("dispform.aspx") >= 0) {
        RunDispFormCode();
    }
    AddDisableClass();
    // TrimTimeForNintexForms();

});

function RunDispFormCode() {
    // code added to modify the date format along with time starts
    $('.imageicon').css('display', 'none');
    $('.fixmultilineheight .ms-rtestate-field').css('height', '93px');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/SiteAssets/LCTScripts/jquery-ui.js';
    $("#FormFillerPanel").append(script);
    // $('.DateTimeInitiated .nf-filler-control-border .nf-filler-control-inner').each(function () {
        // var data = $(this).text().match(/(\d{2})\/(\d{2})\/(\d{4})/);
        // if (data != null) {
            // var date = new Date(data[3], data[2] - 1, data[1]);
            // var newDateFormat = $.datepicker.formatDate('dd-M-yy', new Date(date));
            // var formnewDateFormat = newDateFormat.toString();
            // $(this).html(formnewDateFormat + "<br>");
        // }
    // });
    // code added to modify the date format along with time ends
}

function FormatDateShowing() {
    $('.ms-vb2 nobr').each(function () {
        var dateFormat = $(this).text();
        if (dateFormat != "") {
            var newd = new Date(dateFormat);
            var Hour = newd.getHours();
            var Min = (newd.getMinutes() < 10 ? '0' : '') + newd.getMinutes();
            if (Hour != null) {
                var ampm = dateFormat.slice(-2);
                timeprt = Hour.toString() + ":" + Min.toString() + " " + ampm.toString();
                var data = dateFormat.match(/(\d{2})\/(\d{2})\/(\d{4})/);
                if (data != null) {
                    var date = new Date(data[3], data[2] - 1, data[1]);
                    var homepagedateformate = $.datepicker.formatDate('dd-M-yy', new Date(date));
                    var formnewDateFormat = homepagedateformate.toString() + " " + timeprt;
                    $(this).html(formnewDateFormat + "<br>");
                }
            } else {
                var data = dateFormat.match(/(\d{2})\/(\d{2})\/(\d{4})/);
                if (data != null) {
                    var date = new Date(data[3], data[2] - 1, data[1]);
                    var homepagedateformate = $.datepicker.formatDate('dd-M-yy', new Date(date));
                    var formnewDateFormat = homepagedateformate.toString();
                    $(this).html(formnewDateFormat + "<br>");
                }
            }
        }
    });
    //var urlhref = window.location.href;
}
function FormatDateValue(curDate) {
    var val = "";
    var newd = new Date(curDate);
    var Hour = newd.getHours();
    var Min = (newd.getMinutes() < 10 ? '0' : '') + newd.getMinutes();
    if (Hour != null) {
        var ampm = curDate.slice(-2);
        timeprt = Hour.toString() + ":" + Min.toString() + " " + ampm.toString();
        var data = curDate.match(/(\d{2})\/(\d{2})\/(\d{4})/);
        if (data != null) {
            var date = new Date(data[3], data[2] - 1, data[1]);
            var homepagedateformate = $.datepicker.formatDate('dd-M-yy', new Date(date));
            var formnewDateFormat = homepagedateformate.toString() + " " + timeprt;
            val = formnewDateFormat;
        }
    } else {
        var data = curDate.match(/(\d{2})\/(\d{2})\/(\d{4})/);
        if (data != null) {
            var date = new Date(data[3], data[2] - 1, data[1]);
            var homepagedateformate = $.datepicker.formatDate('dd-M-yy', new Date(date));
            var formnewDateFormat = homepagedateformate.toString();
            val = formnewDateFormat;
        }
    }
    return val;
}
function GetDateOnly(curDate) {
    var val = "";
    var newd = new Date(curDate);
    var data = curDate.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (data != null) {
        var date = new Date(data[3], data[2] - 1, data[1]);
        var homepagedateformate = $.datepicker.formatDate('dd-M-yy', new Date(date));
        var formnewDateFormat = homepagedateformate.toString();
        val = formnewDateFormat;
        if (val.indexOf(" ") > -1) {
            val = val.split(" ")[0];
        }
    }
    return val;
}
function RunDateFormatscriptforLabelChangeViewPage() {
    var timeprt = "";
    //var DateTimeInitiated = $('#DateTimeInitiated').text();
    /*if (DateTimeInitiated != "") {
    var newd = new Date(DateTimeInitiated);
    var Hour = newd.getHours();
    var Min = (newd.getMinutes() < 10 ? '0' : '') + newd.getMinutes();
    var ampm = DateTimeInitiated.slice(-2);
    timeprt = Hour.toString() + ":" + Min.toString() + " " + ampm.toString();
    var data = DateTimeInitiated.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    if (data != null) {
    var date = new Date(data[3], data[2] - 1, data[1]);
    var newDateFormat = $.datepicker.formatDate('dd-M-yy', new Date(date));
    var formnewDateFormat = newDateFormat.toString() + " " + timeprt;
    $('#DateTimeInitiated').html(formnewDateFormat + "<br>");
    }
    }*/
    $('.ms-vb2 nobr').each(function () {
        var d = $(this).text();
        if (d != '' && d != 'undefined') {
            d = GetDateOnly(d);
            if (d.indexOf(" ") > -1) {
                var val = d.split(" ")[0];
                $(this).html(val);
            } else {
                $(this).html(d);
            }
        }
    });
    $('div.welcome').show();

}
function changeDateFormat(dateFormat) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '/SiteAssets/LCTScripts/jquery-ui.js';
    $(".nf-form-footer").append(script);
    var formnewDateFormat = "";
    if (dateFormat != "") {
        var data = dateFormat.match(/(\d{2})\/(\d{2})\/(\d{4})/);
        if (data != null) {
            var date = new Date(data[3], data[2] - 1, data[1]);
            var homepagedateformate = $.datepicker.formatDate('dd-M-yy', new Date(date));
            formnewDateFormat = homepagedateformate.toString();
        }
    }
    return formnewDateFormat;
}
/* Add disable class to Disabled Controls or readonly controls. */
function AddDisableClass() {
    $('input[type=text]').each(function () {
        if ($(this).attr('disabled') || $(this).attr('readOnly')) {
            $(this).addClass('disableControl');
        }
    });
    $('.nf-section select').each(function () {
        if ($(this).attr('disabled')) {
            $(this).addClass('disableControl');
        }
    });
    $('.nf-section textarea').each(function () {
        if ($(this).attr('disabled') || $(this).attr('readOnly')) {
            $(this).addClass('disableControl');
        }
    });
    $('.hasDatepicker').each(function () {
        if ($(this).attr('disabled') && $(this).next().attr('disabled')) {
            $(this).addClass('disableControl');
        }
        if ($(this).attr('readOnly') && !($(this).next().attr('disabled'))) {
            $(this).removeClass('disableControl');
        }
    });
    $(document).click(function (event) {
        $('input[type=text]').each(function () {
            if ($(this).attr('disabled') || $(this).attr('readOnly')) {
                $(this).addClass('disableControl');
            } else {
                $(this).removeClass('disableControl');
            }
        });
        $('.nf-section select').each(function () {
            if ($(this).attr('disabled')) {
                $(this).addClass('disableControl');
            } else {
                $(this).removeClass('disableControl');
            }
        });
        $('.nf-section textarea').each(function () {
            if ($(this).attr('disabled') || $(this).attr('readOnly')) {
                $(this).addClass('disableControl');
            } else {
                $(this).removeClass('disableControl');
            }
        });
        $('.hasDatepicker').each(function () {
            if ($(this).attr('disabled') && $(this).next().attr('disabled')) {
                $(this).addClass('disableControl');
            }
            if ($(this).attr('readOnly') && !($(this).next().attr('disabled'))) {
                $(this).removeClass('disableControl');
            }
        });
    });
}
function TrimTimeForNintexForms() {
    var j = 0;
    $('.nf-form-footer td.ms-descriptiontext > span').each(function () {
        var NintextDate = $(this).text();
        ntxDateArrs[j++] = NintextDate;
        if (j == 2) {
            createdBy = $(this);
        }
        if (j == 3) {
            ModifiedBy = $(this);
        }
    });
    for (var i = 1; i < ntxDateArrs.length; i++) {
        if (i == 1) {
            createdByDT = ntxDateArrs[i];
        } else {
            ModifiedByDT = ntxDateArrs[i];
        }
    }
    createdByDTArrs = createdByDT.split(" ");
    for (var c = 0; c < createdByDTArrs.length; c++) {
        if (c == 2) {
            createdByDate = createdByDTArrs[c];
        }
    }
    ModifiedByDTArrs = ModifiedByDT.split(" ");
    for (var d = 0; d < ModifiedByDTArrs.length; d++) {
        if (d == 3) {
            ModifiedByDate = ModifiedByDTArrs[d];
        }
    }
    var newCreatedBy = changeDateFormat(createdByDate);
    var newModifiedBy = changeDateFormat(ModifiedByDate);
    if (newCreatedBy != "") {
        for (var e = 0; e < createdByDTArrs.length; e++) {
            if (e == 2) {
                createdByDTArrs[e] = newCreatedBy;
            }
            FcreatedByDate = FcreatedByDate + " " + createdByDTArrs[e].toString();
        }
        createdBy.html(FcreatedByDate + "<br>");
    }
    if (newModifiedBy != "") {
        for (var f = 0; f < ModifiedByDTArrs.length; f++) {
            if (f == 3) {
                ModifiedByDTArrs[f] = newModifiedBy;
            }
            FModifiedByDate = FModifiedByDate + " " + ModifiedByDTArrs[f].toString();
        }
        ModifiedBy.html(FModifiedByDate + "<br>");
    }
}
function GetViewHeaderIndexes() {
    while (IndexOfHeaders.length > 0) {
        IndexOfHeaders.pop();
    }
    $("table.ms-listviewtable th div.ms-vh-div[FieldType='DateTime'] ").each(function () {
        if ($(this).attr('name') != "DateTimeInitiated") {
            IndexOfHeaders.push($(this).closest('th').index());
        }
    });
}
function RemoveTimeWithIndexes() {

    if ($('.ms-vb2 nobr').length > 0) {
        $('.ms-vb2 nobr').each(function () {
            var d = $(this).text();
            if (d != '' && d != 'undefined') {
                if ($.inArray($(this).closest('td').index(), IndexOfHeaders) > -1) {
                    var val = GetDateOnly(d);
                    if (val.indexOf(" ") > -1) {
                        val = val.split(" ")[0];
                    }
                    $(this).html(val);
                } else {
                    var val = "";
                    if (d.indexOf(" ") > -1) {
                        val = FormatDateValue(d);
                        $(this).html(val);
                    } else {
                        val = GetDateOnly(d);
                        $(this).html(val);
                    }
                }
            }
        });
    }
    else {
        showTimeFormatforGroupViews();
        setInterval(showTimeFormatforGroupViews, 1000);
        $("tr#group0").on('click change', function () {
            setTimeout(showTimeFormatforGroupViews, 1000);
        });
    }
}

function showTimeFormatforGroupViews() {

    if ($('tbody:visible[id^="tbod"]').length > 0) {
        $('tbody:visible[id^="tbod"]').each(function () {
            $(this).find('td nobr').each(function () {
                var d = $(this).text();
                if (d != '' && d != 'undefined') {
                    if ($.inArray($(this).closest('td').index(), IndexOfHeaders) > -1) {
                        var val = GetDateOnly(d);
                        if (typeof val != 'undefined' && val != "") {
                            if (val.indexOf(" ") > -1) {
                                val = val.split(" ")[0];
                            }
                            $(this).html(val);
                        }
                    } else {
                        var val = "";
                        if (d.indexOf(" ") > -1) {
                            val = FormatDateValue(d);
                            if (typeof val != 'undefined' && val != "")
                                $(this).html(val);
                        } else {
                            val = GetDateOnly(d);
                            if (typeof val != 'undefined' && val != "")
                                $(this).html(val);
                        }
                    }
                }
            });
        });
    }
    else {
        $('td nobr').each(function () {
            var d = $(this).text();
            if (d != '' && d != 'undefined') {
                if ($.inArray($(this).closest('td').index(), IndexOfHeaders) > -1) {
                    var val = GetDateOnly(d);
                    if (typeof val != 'undefined' && val != "") {
                        if (val.indexOf(" ") > -1) {
                            val = val.split(" ")[0];
                        }
                        $(this).html(val);
                    }
                } else {
                    var val = "";
                    if (d.indexOf(" ") > -1) {
                        val = FormatDateValue(d);
                        if (typeof val != 'undefined' && val != "")
                            $(this).html(val);
                    } else {
                        val = GetDateOnly(d);
                        if (typeof val != 'undefined' && val != "")
                            $(this).html(val);
                    }
                }
            }
        });
    }
}

function ChangeHomePageDateFormats() {
    $(".tabinnerdiv ul li span").each(function () {
        var t = $(this).text();
        if (t.indexOf("All In Progress") == -1 && t.indexOf("ROW Country Assignment") == -1) {
            $(this).closest('.tabinnerdiv').find('.ms-vb2 nobr').each(function () {
                var d = $(this).text();
                if (d != '' && d != 'undefined') {
                    if (d.indexOf(" ") > -1) {
                        var val = d.split(" ")[0];
                        $(this).html(val);
                    }
                }
            });
        }
    });
}


