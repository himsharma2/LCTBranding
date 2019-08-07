
$(document).ready(function ()
{	
	SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
		getCurUserMsgFlag();
	});
});

 var collListItems ;
 var currentUser = null;
 var web;
 var context;  
 var list;
 var viewXml;
 var query;
 

function getCurUserMsgFlag() {
	context = new SP.ClientContext.get_current();        
	web = context.get_web();
	currentUser = web.get_currentUser();    

	context.load(web);
	context.load(currentUser);
	list = web.get_lists().getByTitle('User Subscription Configuration');
	context.load(list);
	//query to get login user entry in User Subscription Configuration
	var query= new SP.CamlQuery();
	query.set_viewXml('<View><Query><Where><Eq><FieldRef Name=\'GileadUser\' LookupId=\'TRUE\' /><Value Type=\'Integer\'><UserID /></Value></Eq></Where></Query></View>'); 
	
	collListItems = list.getItems(query);
	context.load(collListItems);	
	
	context.executeQueryAsync(
	Function.createDelegate(this, this.getCurUserMsgFlagSucceeded), 
	Function.createDelegate(this, this.onFailureMethod));
}

function getCurUserMsgFlagSucceeded(sender, args) {
	
	var listItemInfo = '';
	var count = collListItems.get_count();
	//if login user has entry in User Subscription Configuration 
	if(count == 1)
	{
		var listItemEnumerator = collListItems.getEnumerator();
		while (listItemEnumerator.moveNext()) {
			var oListItem = listItemEnumerator.get_current();
			//redirect to Subscriber Alert page if Message Flag is not true
			if(!oListItem.get_item('MessageFlag'))
			{
				var destinLink = window.location.href.replace("default","SubscriberAlert");			
				window.location.replace(destinLink);
			}
			break;
		}
	}
	//if login user does not have entry in User Subscription Configuration
	else if(count == 0)
	{
		//make an entry in User Subscription Configuration for login user
		var newItem = new SP.ListItemCreationInformation();
		var oListItem1  = this.list.addItem(newItem);
		var user = this.currentUser.get_id()+';#'+this.currentUser.get_title();
		oListItem1.set_item('GileadUser',user);
		oListItem1.set_item('MessageFlag', '1');	
		
		oListItem1.update();
		this.context.load(oListItem1);
		
		context.executeQueryAsync(
		Function.createDelegate(this, this.onAddUpdateSuccessMethod), 
		Function.createDelegate(this, this.onAddUpdateFailureMethod));
	}	    
}

//on successfully adding record into User Subscription Config list and redirect to alert page
function onAddUpdateSuccessMethod(sender, args) {
    var destinLink = window.location.href.replace("default", "SubscriberAlert");
    window.location.replace(destinLink);
}

//if user does not have permission to add record into User Subscription Configuration display message
function onAddUpdateFailureMethod(sender, args) {
	alert('Please contact Administrator to configure User Subscription for you.');
}


function onSuccessMethod(sender, args)
 { 
	//do nothing
 }

//on failure display error details to user
function onFailureMethod(sender, args) {
	//alert('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
	alert('Error occured in User Subscription. Please contact Administrator.');

}

 