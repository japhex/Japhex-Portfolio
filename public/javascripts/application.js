$(document).ready(function() {
	initFlickrSource();
	initCommentsWatermark();
	initCommentsWatermarkClick();
	initMyTwitter();
});

function initFlickrSource(){
	$.ajax({ 
		type: "GET", 
		url: "http://api.flickr.com/services/rest/?method=flickr.photos.search&size=t&text=music&per_page=30&format=json&api_key=fa115b5e0df4444decbaba5387d3acd1&jsoncallback=?", 
		dataType: "jsonp", 
		success: function(data){
			var len=data.photos.photo.length;
			for(var i=0; i<len; i++) {
				$('#header ul').append('<li><img class="flickr-image" src="http://farm' + data.photos.photo[i].farm + '.static.flickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '_t.jpg" /></li>')
			}				
		}
	});
	$.ajax({ 
		type: "GET", 
		url: "http://api.flickr.com/services/rest/?method=flickr.photos.search&size=t&text=graffiti&per_page=20&format=json&api_key=fa115b5e0df4444decbaba5387d3acd1&jsoncallback=?", 
		dataType: "jsonp", 
		success: function(data){
			var len=data.photos.photo.length;
			for(var i=0; i<len; i++) {
				$('#header ul').append('<li><img class="flickr-image" src="http://farm' + data.photos.photo[i].farm + '.static.flickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '_t.jpg" /></li>')
			}				
		}
	});		
	$.ajax({ 
		type: "GET", 
		url: "http://api.flickr.com/services/rest/?method=flickr.photos.search&size=t&text=red%20dead%20redemption&per_page=20&format=json&api_key=fa115b5e0df4444decbaba5387d3acd1&jsoncallback=?", 
		dataType: "jsonp", 
		success: function(data){
			var len=data.photos.photo.length;
			for(var i=0; i<len; i++) {
				$('#header ul').append('<li><img class="flickr-image" src="http://farm' + data.photos.photo[i].farm + '.static.flickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '_t.jpg" /></li>')
			}				
		}
	});	
	$.ajax({ 
		type: "GET", 
		url: "http://api.flickr.com/services/rest/?method=flickr.photos.search&size=t&text=nature&per_page=20&format=json&api_key=fa115b5e0df4444decbaba5387d3acd1&jsoncallback=?", 
		dataType: "jsonp", 
		success: function(data){
			var len=data.photos.photo.length;
			for(var i=0; i<len; i++) {
				$('#header ul').append('<li><img class="flickr-image" src="http://farm' + data.photos.photo[i].farm + '.static.flickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '_t.jpg" /></li>')
			}				
		}
	});	
}

function initCommentsWatermark(){
	$('#new-comment input, #new-comment textarea').each(function(){
		if ($(this).attr('type') == "submit" || $(this).hasClass('hascontent') || $(this).attr('alt') == "" || $(this).attr('type') == "hidden"){
		}
		else {
			var watermark = $(this).attr('alt');
			$(this).val(watermark);		
		}
	});	
}

function initCommentsWatermarkClick(){
	$('#new-comment input, #new-comment textarea').focus(function(){
		if ($(this).hasClass('hascontent') || $(this).attr('type') == "hidden"){
		}
		else {
			$(this).val("");
			$(this).addClass('hascontent');
		}
	});	
	$('#new-comment input, #new-comment textarea').blur(function(){
		if($(this).val() == ""){
			$(this).removeClass('hascontent');
			initCommentsWatermark();
		}
		else {
		}
		if ($('.hascontent').length > 3){
			$('#comment_submit').removeAttr('disabled').removeClass('invalid');
		}		
		else {
			$('#comment_submit').attr('disabled','disabled').addClass('invalid');			
		}
	});	
	$('#comment_submit').click(function(){
		var captcha = $('#captcha');
		var captchaValue = captcha.val();

		if (captchaValue == 'Bon Jovi' || captchaValue == 'bon jovi' || captchaValue == 'bon Jovi' || captchaValue == 'Bon jovi' || captchaValue == 'bonjovi' || captchaValue == 'Bonjovi') {
			captcha.removeClass('wrong-captcha');		
		}
		else {
			captcha.addClass('wrong-captcha');
			return false;			
		}
	});
}

function initMyTwitter(){
	$.ajax({ 
		type: "GET", 
		url: "http://api.twitter.com/1/users/show.json?screen_name=japhex", 
		dataType: "jsonp", 
		success: function(data){
			$('#twitter').text(data.status.text);
		}
	});	
}