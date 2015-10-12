//$('#signUp').on('submit',function(){
//	alert('in js');
//	$.ajax({
//		url: '',
//		type: 'POST',
//		dataType: 'json',
//		data: $('#signUp').serialize(),
//		success: function(data){
//			if(data.isValid){
//				alert('Sign Up successfull!');
//				return true;
//			}
//			else{
//				$('#signUp_username').popover({
//					html: true,
//					trigger: 'manual',
//					placement: 'right',
//					content: function() {
//					return $('#popover_signUp_username').html();
//					}
//				)};
//				$('#signUp_username').popover("show");
//				return false;
//			}
//		}
//	});
//
//});
//
//
//
//  <script type="text/javascript">
//
//  	google.load("jquery","1.4.2");
//
//  	google.setOnLoadCallback(function(){
//  		alert('iiiii');
//  		$('.nav a').click(function(){
//  			$('.nav a').removeClass('selected');
//  			$('this').addClass('selected');
//  		});
//  	});
//
//	$('#approveTransactions').click(function(){
//		$('#target').load('Approve_trans-Copy.html');
//	});
//  </script>