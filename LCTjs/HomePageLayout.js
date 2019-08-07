   (function($) {
     
       $.fn.wpTabify = function() {

           var toReturn = false;
           if ($('.ms-WPAddButton').size() == 0) {
               toReturn = this.each(function(i) {
                   var idName = $(this).attr('id');
                   var tabList = $('<ul class="wpt-ui-tabs-nav"/>');
                   var panels = $('<div class="wpt-ui-tabs-wrapper"/>');

                   $(this).find('.s4-wpTopTable,td[id^="MSOZoneCell_"] > table').each(function(j) {
                       $(tabList).append('<li><a href="#ui-tab-panel' + idName + i + j + '"><span>' + $(this).find('h3.ms-WPTitle').text() + '</span></a></li>');
                       var thisPanel = $('<div id="ui-tab-panel' + idName + i + j + '" class="wpt-ui-tabs-panel"/>');
                       var panelContents = $(this).detach();
                       var t = $(panelContents).find('.ms-wpContentDivSpace');
                       $(thisPanel).append(t);
                       var webpartTitle = $(this).find('h3.ms-WPTitle').text().trim().toLowerCase();
                       //console.log(webpartTitle);
                       //ROW tab webparts
                       if (webpartTitle.indexOf("All In Progress CCDS Label Updates-ROW".toLowerCase()) == 0) {
                           $(thisPanel).append('<div class="viewalllink"><a id="ceWorkflowsCCDSRow" href="/Lists/LabelUpdateWorkflows/All%20In%20Progress%20CCDS%20Updates%20for%20ROW.aspx">View all items</a></div>');
                       } else if (webpartTitle.indexOf("ROW Country Assignment".toLowerCase()) == 0) {
                           $(thisPanel).append('<div class="viewalllink"><a id="ceWorkflowsCountry" href="/Lists/LabelUpdateWorkflows/All%20In%20Progress%20CCDS%20Updates%20for%20ROW%20Country%20Assignment.aspx">View all items</a></div>');
                       } else if (webpartTitle.indexOf("My Group's In Progress Label Changes Approval Tasks-ROW".toLowerCase()) == 0) {
                           $(thisPanel).append('<div class="viewalllink"><a id="ceApprovalRow" href="/Lists/LabelUpdateApprovalTasks/My%20Groups%20All%20In%20progress%20Label%20Changes%20Approval%20Tasks%20for%20ROW.aspx">View all items</a></div>');
                       } else if (webpartTitle.indexOf("All In Progress CCDS Label Updates".toLowerCase()) == 0) {
                           $(thisPanel).append('<div class="viewalllink"><a id="ceWorkflowsCCDS" href="/Lists/LabelUpdateWorkflows/All%20InProgress%20CCDS%20Updates.aspx">View all items</a></div>');
                       } else if (webpartTitle.indexOf("all in progress ha requests and other updates".trim().toLowerCase()) == 0) {
                           $(thisPanel).append('<div class="viewalllink"><a id="ceWorkflowsHA" href ="/Lists/LabelUpdateWorkflows/All%20In%20Progress%20HA%20Requests%20and%20Other%20Updates.aspx">View all items</a></div>');
                       } else if (webpartTitle.indexOf("My Group's In Progress Label Changes Approval Tasks".toLowerCase()) == 0) {
                           $(thisPanel).append('<div class="viewalllink"><a id="ceApproval" href="/Lists/LabelUpdateApprovalTasks/My%20Groups%20All%20In%20progress%20Label%20Changes%20Approval%20Tasks.aspx">View all items</a></div>');
                       } else if (webpartTitle.indexOf("My Group's In Progress Label Changes Implementation".toLowerCase()) == 0) {
                           $(thisPanel).append('<div class="viewalllink"><a id="ceImplementation" href="/Lists/LabelUpdateImplementationTasks/My%20Groups%20All%20In%20progress%20Label%20Changes%20Implementation%20Tasks.aspx">View all items</a></div>');
                       } else if (webpartTitle.indexOf("My Group's In Progress Label Change Updates Implementation Tasks-MFG".toLowerCase()) == 0) {
                           $(thisPanel).append('<div class="viewalllink"><a id="ceImplementationMFG" href="/Lists/LabelUpdateImplementationTasks/My%20Groups%20All%20In%20progress%20Label%20Changes%20Implementation%20TasksManufacturing.aspx">View all items</a></div>');
                       }

						


                       $(panels).append(thisPanel);
                   });

                   if ($(tabList).find('li').size() > 0) {
                       $(this).prepend(panels);
                       $(this).prepend(tabList);
                       $(this).tabs();
                   }

               });
           }
           $(this).show();
   

           return toReturn;
       };
       
       


   })(jQuery);

   function TabifyFnWrapper() {
       $('.my-web-part-tabs').wpTabify();

   }
   //_spBodyOnLoadFunctionNames.push("TabifyFnWrapper");

   $(document).ready(function() {
       TabifyFnWrapper();
       
       var webUrl=L_Menu_BaseUrl;

$('a[id^="ce"]').each(function(){

var url =webUrl+($(this).attr('href'));
$(this).attr('href', url)


});
   });




   $(function() {
       
   });



   $(function() {
       var pull = $('.LeftSlideTag');
       menu = $('.LeftNavigationZone');
       menuHeight = menu.height();

       $('.maininnertabs').css("margin-left", "280px");



       $(pull).on('click', function(e) {
           if ($('.LeftNavigationZone').css('display') == 'none') {
               $('.maininnertabs').animate({
                   marginLeft: '280px'
               }, 'fast');
               $('.LeftSlideTag').css("background", "url(/Style Library/Images/LCTImages/Left_nav_hide_icon.jpg) no-repeat");
               $('.ms-titlerowborder').css("display", "table");
               $('.ms-titlerowborder').css("width", "100%");
               $('#s4-bodyContainer').css("display", "table");

           } else {
               $('.maininnertabs').animate({
                   marginLeft: '30px'
               }, 'fast');
               $('.LeftSlideTag').css("background", "url(/Style Library/Images/LCTImages/Left_nav_show_icon.jpg) no-repeat");
               $('#s4-bodyContainer').css("display", "inherit");
               $('.ms-titlerowborder').css("width", "100%");

           }
           e.preventDefault();
           menu.slideToggle('fast');
       });
   });
   $(function () {
       //To check user belongs to ROW Country
       function CheckIfUserBelongToROWCountry() {
           //get built query
           var queryString = GetSPGroupsForLoginUserQuery();
           if (queryString != "") {
               var webURL = $().SPServices.SPGetCurrentSite();
               var rowCount = 0;
               var query = "<Query><Where><And><Eq><FieldRef Name='ROWCountry' /><Value Type='Boolean'>1</Value></Eq>" + queryString + "</And></Where></Query>";
               $().SPServices({
                   operation: "GetListItems",
                   async: false,
                   webURL: webURL,
                   listName: "Countries",
                   CAMLQuery: query,
                   CAMLViewFields: "<ViewFields><FieldRef Name='Country' /></ViewFields>",
                   completefunc: function (xData, Status) {
                       rowCount = $(xData.responseXML).SPFilterNode("rs:data").attr("ItemCount");
                   }
               });
               if (rowCount == 0) {
                   return false;
               } else {
                   return true;
               }
           }
       }


       //return query with login user SP group names
       function GetSPGroupsForLoginUserQuery() {
           var query = "";
           var orCount = 0;
           $().SPServices({
               operation: "GetGroupCollectionFromUser",
               userLoginName: $().SPServices.SPGetCurrentUser(),
               async: false,
               completefunc: function (xData, Status) {
                   //build query
                   if ($(xData.responseXML).find("Group").length > 0) {
                       if ($(xData.responseXML).find("Group").length == 1) {
                           query = "<Eq><FieldRef Name='CountryName' /><Value Type='Text'>" + $(xData.responseXML).find("Group")[0].getAttributeNode('Name').value + "</Value></Eq>";
                       }
                       else if ($(xData.responseXML).find("Group").length > 1) {

                           for (var i = 0; i < $(xData.responseXML).find("Group").length; i++) {
                               var gpName = $(xData.responseXML).find("Group")[i].getAttributeNode('Name').value;
                               if (i == $(xData.responseXML).find("Group").length - 1) {
                                   query = query + "<Eq><FieldRef Name='CountryName' /><Value Type='Text'>" + gpName + "</Value></Eq>";
                               }
                               else {
                                   query = query + "<Or>" + "<Eq><FieldRef Name='CountryName' /><Value Type='Text'>" + gpName + "</Value></Eq>";
                                   orCount++;
                               }
                           }
                           for (var i = 0; i < orCount; i++) {
                               query = query + "</Or>";
                           }
                       }
                   }
               }
           });
           return query;
       }
   var homePageUrl;
   if (_spPageContextInfo.webServerRelativeUrl == '/')
       homePageUrl = "/_vti_bin/listdata.svc/ConfigList?$select= Title,Value&$filter=Title eq 'ROWAccessGroup'";
   else
       homePageUrl = _spPageContextInfo.webServerRelativeUrl + "/_vti_bin/listdata.svc/ConfigList?$select= Title,Value&$filter=Title eq 'ROWAccessGroup'";

   $.ajax({
       url: homePageUrl,
       method: "GET",
       headers: {
           "accept": "application/json;odata=verbose"
       },
       success: function(data) {
           if (data.d.results) {
               $().SPServices({
                   operation: "GetGroupCollectionFromUser",
                   userLoginName: $().SPServices.SPGetCurrentUser(),
                   async: false,
                   completefunc: function(xData, Status) {
                       //Check for LCTAdmin
                       if ($(xData.responseXML).find("Group[Name='" + data.d.results[0].Value + "']").length == 1) {
                           //Show both Major Market & ROW
                           $("#TopNavTabs").tabs();
                           $("#TopNavTabs").show();
						   
						     if(!CheckIfUserBelongToROWCountry()&& !$(xData.responseXML).find("Group[Name='LCTSPAdmin']").length == 1)
							   if($('a.ui-tabs-anchor>span:contains("In Progress Label Changes Approval Tasks-ROW")').length== 1)
									$('a.ui-tabs-anchor>span:contains("In Progress Label Changes Approval Tasks-ROW")').closest('.tabinnerdiv').hide();
                       }
                       //Check for ROW Central to hide Major Market
                       else if ($(xData.responseXML).find("Group[Name='" + data.d.results[1].Value + "']").length == 1) {
                           $("#TopNavTabs").tabs();
                           $("#TopNavTabs").show();

                           $('#ROWTab').click();
                           $('#MM').hide();
                       }
                       //Check for ROW Regional Lead to hide Major Market
                       else if ($(xData.responseXML).find("Group[Name='" + data.d.results[2].Value + "']").length == 1) {
                           $("#TopNavTabs").tabs();
                           $("#TopNavTabs").show();

                           $('#ROWTab').click();
                           $('#MM').hide();
                       } 
                       //Check for LCTSPAdmin
                       else if ($(xData.responseXML).find("Group[Name='" + data.d.results[3].Value + "']").length == 1) {
                           //Show both Major Market & ROW
                           $("#TopNavTabs").tabs();
                           $("#TopNavTabs").show();
                       }
                       else {
                           //check if user belongs to ROW Country to display ROW Tab
                           if (CheckIfUserBelongToROWCountry()) {
                               $("#TopNavTabs").tabs();
                               $("#TopNavTabs").show();

                               $('#ROWTab').click();
                               $('#MM').hide();
                           } else {
                               //Display Major Market tab
                               $("#TopNavTabs").tabs();
                               $("#TopNavTabs").show();

                               $('#ROW').hide();
                           }
                       }

                   }
               });
           }
       },
       error: function(err) {
           alert('error:' + JSON.stringify(err));
       }
   });
});