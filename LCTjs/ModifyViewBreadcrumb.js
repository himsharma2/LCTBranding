<script type="text/javascript">
jQuery(document).ready(function(){
	$('.s4-titletext a').each(function(i){
		if(i == 1)
		{	try
			{
				var pageUrl = window.location.href;
				if(pageUrl.indexOf('All%20InProgress%20CCDS%20Updates.aspx') != -1)
				{
//					$(this).text("All In Progress CCDS Label Updates");
					$(this).contents().unwrap(); 
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("All In Progress CCDS Label Updates");
					return false;
				}
				else if(pageUrl.indexOf('All%20In%20Progress%20CCDS%20Updates%20for%20ROW.aspx') != -1)
				{
                    if($(this).text() != "HOME")
                    {
					    //$(this).text("All In Progress CCDS Label Updates-ROW");
					    $(this).contents().unwrap(); 
                        $('#ExtraTitle').attr('style','display:inline-block;'); 
                        $('#ExtraTitle').html("All In Progress CCDS Label Updates-ROW");
                    }
					return false;
				}
				else if(pageUrl.indexOf('All%20In%20Progress%20CCDS%20Updates%20for%20ROW%20Country%20Assignment.aspx') != -1)
				{
					//$(this).text("All In Progress CCDS Updates ROW Country Assignment");
					$(this).contents().unwrap(); 
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("All In Progress CCDS Updates ROW Country Assignment"); 
					return false;
				}
				else if(pageUrl.indexOf('My%20Groups%20All%20In%20progress%20Label%20Changes%20Approval%20Tasks%20for%20ROW.aspx') != -1)
				{
					//$(this).text("My Group's In Progress Label Changes Approval Tasks-ROW");
					$(this).contents().unwrap(); 
					$(this).next().text(" ")
					$(this).next().contents().unwrap(); 
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("My Group's In Progress Label Changes Approval Tasks-ROW");
					return false;
				}
				else if(pageUrl.indexOf('All%20InProgress%20CCDS%20Updates.aspx') != -1)
				{
					//$(this).text("All In Progress CCDS Label Updates");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("All In Progress CCDS Label Updates");
					return false;
				}
				else if(pageUrl.indexOf('All%20In%20Progress%20HA%20Requests%20and%20Other%20Updates.aspx') != -1)
				{
					//$(this).text("All In Progress HA Requests and Other Updates");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("All In Progress HA Requests and Other Updates");
					return false;
				}
				else if(pageUrl.indexOf('My%20Groups%20All%20In%20progress%20Label%20Changes%20Approval%20Tasks.aspx') != -1)
				{
					//$(this).text("My Group's In Progress Label Changes Approval Tasks");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("My Group's In Progress Label Changes Approval Task");
					return false;
				}
				else if(pageUrl.indexOf('My%20Groups%20All%20In%20progress%20Label%20Changes%20Implementation%20Tasks.aspx') != -1)
				{
					//$(this).text("My Group's In Progress Label Changes Implementation");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("My Group's In Progress Label Changes Implementation");
					return false;
				}
				else if(pageUrl.indexOf('My%20Groups%20All%20In%20progress%20Label%20Changes%20Implementation%20TasksManufacturing.aspx') != -1)
				{
					//$(this).text("My Group's In Progress Label Change Updates Implementation Tasks-MFG");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("My Group's In Progress Label Change Updates Implementation Tasks-MFG");
					return false;
				}
				else if(pageUrl.indexOf('All%20CCDS%20Updates.aspx') != -1)
				{
					//$(this).text("All CCDS Updates");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("All CCDS Updates");
					return false;
			
				}
				else if(pageUrl.indexOf('All%20HA%20Request%20and%20Other%20Updates.aspx') != -1)
				{
					//$(this).text("All HA Request and Other Updates");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("All HA Request and Other Updates");
					return false;
				}
				else if(pageUrl.indexOf('All%20CCDS%20Updates%20for%20ROW.aspx') != -1)
				{
					//$(this).text("All ROW Updates");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("All ROW Updates");
					return false;
				}
                else if(pageUrl.indexOf('Manage%20All%20Implementation%20Tasks.aspx') != -1)
				{
					//$(this).text("Manage All Implementation Tasks");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("Manage All Implementation Tasks");
					return false;
				}
                else if(pageUrl.indexOf('Manage%20All%20Label%20Change%20Updates.aspx') != -1)
				{
//					$(this).text("Manage All Label Change Updates");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("Manage All Label Change Update");
					return false;
				}
				else if(pageUrl.indexOf('Manage%20All%20Approval%20Tasks.aspx') != -1)
				{
//					$(this).text("Manage All Approval Tasks");
					$(this).contents().unwrap();  
                    $('#ExtraTitle').attr('style','display:inline-block;'); 
                    $('#ExtraTitle').html("Manage All Approval Tasks");
					return false;
				}
			}
			catch(e)
			{		
			}
		}
	});
});
//_spBodyOnLoadFunctionNames.push("ModifyBreadcrumb");
</script>
