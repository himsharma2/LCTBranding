<%@ Page Language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=14.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c"
    meta:progid="SharePoint.WebPartPage.Document" %>


<%@ Register TagPrefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls"
    Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages"
    Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls"
    Assembly="Microsoft.SharePoint.Publishing, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation"
    Assembly="Microsoft.SharePoint.Publishing, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:content contentplaceholderid="PlaceHolderPageTitle" runat="server">
	<SharePointWebControls:FieldValue id="PageTitle" FieldName="Title" runat="server"/>
</asp:content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitleInTitleArea" runat="server">
	<asp:ScriptManagerProxy runat="server" id="ScriptManagerProxy">
	</asp:ScriptManagerProxy>
	<SharePointWebControls:VersionedPlaceHolder UIVersion="3" runat="server">
		<ContentTemplate>
			<WebPartPages:WebPartZone runat="server" Title="loc:TitleBar" ID="TitleBar" AllowLayoutChange="false" AllowPersonalization="false"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
		</ContentTemplate>
	</SharePointWebControls:VersionedPlaceHolder>
	<SharePointWebControls:UIVersionedContent UIVersion="4" runat="server">
		<ContentTemplate>
			<SharePointWebControls:FieldValue FieldName="Title" runat="server" />
		</ContentTemplate>
	</SharePointWebControls:UIVersionedContent>
</asp:Content>
<asp:content contentplaceholderid="PlaceHolderMain" runat="server">

<WebPartPages:SPProxyWebPartManager runat="server" id="spproxywebpartmanager"></WebPartPages:SPProxyWebPartManager>



<script src='<asp:Literal runat="server" Text="<% $SPUrl:~site/SiteAssets/jquery.SPServices-0.7.2.min.js%>" />'></script>
<script src='<asp:Literal runat="server" Text="<% $SPUrl:~site/SiteAssets/LCTScripts/QuarterlySubscriptionReminder.js%>" />'></script>
<script src='<asp:Literal runat="server" Text="<% $SPUrl:~site/SiteAssets/LCTScripts/HomePageLayout.js%>" />'></script>

<link href='<asp:Literal runat="server" Text="<% $SPUrl:~site/SiteAssets/LCTCSS/jquery-ui.css%>" />' rel="stylesheet" type="text/css" />
<link href='<asp:Literal runat="server" Text="<% $SPUrl:~site/SiteAssets/LCTCSS/LCT_Styles.css%>" />' rel="stylesheet" type="text/css" />

<div id="TopNavTabs" style="display:none;">
	<ul class="headernavigation">
		<li id="MM"><a class="TabHeading1" id="MMTab" href="#tabs-1">Major 
		Markets</a></li>
		<li id="ROW"><a class="TabHeading1" id="ROWTab" href="#tabs-2">ROW</a></li>
	</ul>
	
	<div id="tabs-1" class="MainTabBody">
		<a href="#" class="LeftSlideTag" id="LeftSlideMajorMarkets"></a>
		<div id="MMLeftSlidePanel" class="LeftNavigationZone">
			<div class="LeftSection1 LeftSection">
				<WebPartPages:WebPartZone id="CCDSInitiate" runat="server" title="CCDS Initiate"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="LeftSection2 LeftSection">
				<WebPartPages:WebPartZone id="CCDSUpdate" runat="server" title="CCDS Update"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="LeftSection3 LeftSection">
				<WebPartPages:WebPartZone id="HAOtherInitiate" runat="server" title="HAOther Initiate"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="LeftSection4 LeftSection">
				<WebPartPages:WebPartZone id="HAUpdate" runat="server" title="HA Update"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="LeftSection5 LeftSection">
				<WebPartPages:WebPartZone id="OtherUpdate" runat="server" title="Other Update"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="LeftSection6 LeftSection">
				<WebPartPages:WebPartZone id="MMView" runat="server" title="MajorMarket View"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="LeftSection7 LeftSection">
			    <WebPartPages:WebPartZone id="MMSearch" runat="server" title="MajorMarket Search"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</div>
			<div class="LeftSection8 LeftSection">			
			    <WebPartPages:WebPartZone id="MMReports" runat="server" title="MajorMarket Reports"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>			
			</div>
			<div class="LeftSection9 LeftSection">			
			    <WebPartPages:WebPartZone id="Admin" runat="server" title="Admin"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>			
			</div>
		</div>
		<div class="maininnertabs">
			<div class="tabinnerdiv">
				<div class="my-web-part-tabs" style="display:none">
					<WebPartPages:WebPartZone id="tabzone1" runat="server" title="Top Zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
				</div>
			</div>
			<div class="tabinnerdiv">
				<div class="my-web-part-tabs" style="display:none">
					<WebPartPages:WebPartZone id="tabzone2" runat="server" title="Bottom Zone"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
				</div>
			</div>
		</div>
	</div>
	
	<div id="tabs-2" class="MainTabBody">
		<a href="#" class="LeftSlideTag" id="LeftSlideROW"></a>
		<div id="ROWLeftSlidePanel" class="LeftNavigationZone">
			<div class="LeftSection7 LeftSection">				
			    <WebPartPages:WebPartZone id="ROWView" runat="server" title="ROW View"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>				
			</div>
			<div class="LeftSection8 LeftSection">				
			    <WebPartPages:WebPartZone id="ROWSearch" runat="server" title="ROW Search"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>				
			</div>
			<div class="LeftSection9 LeftSection">				
			    <WebPartPages:WebPartZone id="ROWReports" runat="server" title="ROW Reports"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>				
			</div>
		</div>

		<div class="maininnertabs">
			<div class="tabinnerdiv">
				<div class="my-web-part-tabs" style="display:none">
					<WebPartPages:WebPartZone id="tabzone3" runat="server" title="Top Zone1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
				</div>
			</div>
			<div class="tabinnerdiv">
				<div class="my-web-part-tabs" style="display:none">
					<WebPartPages:WebPartZone id="tabzone4" runat="server" title="Bottom Zone1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
				</div>
			</div>
		</div>
		
	</div>

</div>



<table cellpadding="0" cellspacing="6" width="100%" class="splashLinkFrame">
		<tr>
			<td width="15%" valign="top" class="splashLinkArea">
						<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="BottomLeftZone" FrameType="TitleBarOnly"
							Title="<%$Resources:cms,WebPartZoneTitle_BottomLeft%>" Orientation="Vertical"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</td>
			<td width="80%" valign="top" class="splashLinkArea">
				<WebPartPages:WebPartZone runat="server" AllowPersonalization="false" ID="BottomRightZone" FrameType="TitleBarOnly"
					Title="<%$Resources:cms,WebPartZoneTitle_BottomRight%>" Orientation="Vertical"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
			</td>
		</tr>
	</table>


</asp:content>