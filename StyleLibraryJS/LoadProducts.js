<script type="text/javascript" language="javascript" src="/SiteAssets/jquery.SPServices-0.7.2.min.js"></script>
<script>
var lctid="";
var web = "";
var LabelUpdateWorkflows = "";
var Products = "";
var Products_lstguid = "";
function GetProductDetails()
{
	GetLICD();
	if(lctid!="")
	{
	  var clientContext = new SP.ClientContext.get_current();
	  web = clientContext.get_web();
	 // var site = clientContext.get_site();
	  clientContext.load(web);
	 // alert("Site url: " + site.get_url());
	  
	LabelUpdateWorkflows =web.get_lists().getByTitle("Label Update Workflows");
	Products = web.get_lists().getByTitle("Products");
	clientContext.load(Products);
	  var Query = new SP.CamlQuery();
	  Query.set_viewXml('<view><Query><Where><Eq><FieldRef Name="Title"/><Value Type="Text">'+lctid+'</Value></Eq></Where></Query></view>');
	  
	  collItems = LabelUpdateWorkflows.getItems(Query);	
	  clientContext.load(collItems, 'Include(Product,ID)');
	 // alert("Site url: " + web.get_url());
	  clientContext.executeQueryAsync(Function.createDelegate(this,load_ProductDetails_onSuccess), Function.createDelegate(this,load_ProductDetails_onFailure)); 
	}
   
}

function load_ProductDetails_onSuccess(sender, args) 
{
	var ProductValues="";
	//alert("Site url: " + web.get_serverRelativeUrl());
	//alert("list guid: " + Products.get_id());
	Products_lstguid = Products.get_id();
	var arrProductValues= [];
	var arrProductIDValues= [];
	
	var listItemEnumerator = collItems.getEnumerator();
        while (listItemEnumerator.moveNext()) {
			
            var oListItem = listItemEnumerator.get_current();
			if(oListItem.get_item('Product').get_lookupValue()!=null&&oListItem.get_item('Product').get_lookupValue()!="")
			{
				if(CheckForDuplicate(arrProductIDValues,oListItem.get_item('Product').get_lookupId())==false)
				{
					arrProductIDValues.push(oListItem.get_item('Product').get_lookupId());
					arrProductValues.push(oListItem.get_item('Product').get_lookupValue());
				}
				//else
				//{
					//arrProductIDValues.push(oListItem.get_item('Product').get_lookupId());
					//arrProductValues.push(oListItem.get_item('Product').get_lookupValue());
				//}
				
			}
            
			
        }
		

	for(var i=0;i<arrProductIDValues.length;i++)
	{
		//alert(arrProductIDValues[i]);
		
		//var onclick="OpenPopUpPage('/_layouts/listform.aspx?PageType=4&ListId={F43438CD-AFFE-472B-B693-A6756890E9B5}&ID="+arrProductIDValues[i]+"&RootFolder=*', RefreshPage); return false;";
		var onclick="OpenPopUpPage('/_layouts/listform.aspx?PageType=4&ListId={"+Products_lstguid+"}&ID="+arrProductIDValues[i]+"&RootFolder=*', RefreshPage); return false;";
		//var href="http://fcrdappsdev02:1984/_layouts/listform.aspx?PageType=4&ListId={F43438CD-AFFE-472B-B693-A6756890E9B5}&ID="+arrProductIDValues[i]+"&RootFolder=*";
		ProductValues+='<a onclick="'+onclick+'" >'+arrProductValues[i]+'</a>'+'; ';
	}
	
	if(ProductValues!="")
	{
		document.getElementById("ProductValue").innerHTML=ProductValues.substring(0,ProductValues.lastIndexOf(";"));
	}
		
	$(".welcome-content").hide();
	//$("#ctl00_MSO_ContentDiv").show();	

}

function CheckForDuplicate(arrProductIDValues,IDvalue)
{
	var status=false;
	
	for(var i=0;i<arrProductIDValues.length;i++)
	{
		if(arrProductIDValues[i]==IDvalue)
		{
			status=true;
			break;
		}
	}
	if(status==true)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function load_ProductDetails_onFailure(sender, args) 
{
	alert('Request failed. ' + args.get_message());
}

function GetLICD()
{
	if(document.URL.indexOf("?")!=-1)
	{
		var params = document.URL.split("?")[1].split("&");
		for (var i = 0; i < params.length; i = i + 1) {
        var param = params[i].split("=");
        switch (param[0]) {
            case "LCTID":
                lctid = decodeURIComponent(param[1]);
                break;
        }
    }
	}
}
$(document).ready(function (){
	ExecuteOrDelayUntilScriptLoaded(GetProductDetails, "sp.js"); 
});
</script>