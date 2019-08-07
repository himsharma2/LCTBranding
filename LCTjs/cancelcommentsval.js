<script language="javascript">

$(document).ready(function () {
  
   var nMaxLength = 500;
    $(".txtCan").keydown(function (event) {
        LimitCharacters($(this));
    });
    $(".txtCan").keyup(function (event) {
        LimitCharacters($(this));
    });
    function LimitCharacters(txtDesc) {
        if (txtDesc.val().length > nMaxLength) {
            txtDesc.val(txtDesc.val().substring(0, nMaxLength));
        } 
  else
  {
    }
    } 
 
  $(".txtCan").bind('paste change keyup', function() 
 {
  var $self = $(this);            
        setTimeout( function()
   { 
                if($self.val().length > 500)
    {
     $self.val($self.val().substring(0,500));
    }
   },100);
 });
 
});
 </script>