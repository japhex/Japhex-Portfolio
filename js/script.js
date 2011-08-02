$(document).ready(function() {
	initFlickrSource();
});

function initFlickrSource(){
	$.ajax({ 
		type: "GET", 
		url: "http://api.flickr.com/services/rest/?method=flickr.photos.search&text=music&per_page=30&format=json&api_key=fa115b5e0df4444decbaba5387d3acd1&jsoncallback=?", 
		dataType: "jsonp", 
		success: function(data){
			var len=data.photos.photo.length;
			for(var i=0; i<len; i++) {
				$('#header ul').append('<li><img class="flickr-image" src="http://farm' + data.photos.photo[i].farm + '.static.flickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '.jpg" /></li>')
			}				
		}
	});
	$.ajax({ 
		type: "GET", 
		url: "http://api.flickr.com/services/rest/?method=flickr.photos.search&text=graffiti&per_page=20&format=json&api_key=fa115b5e0df4444decbaba5387d3acd1&jsoncallback=?", 
		dataType: "jsonp", 
		success: function(data){
			var len=data.photos.photo.length;
			for(var i=0; i<len; i++) {
				$('#header ul').append('<li><img class="flickr-image" src="http://farm' + data.photos.photo[i].farm + '.static.flickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '.jpg" /></li>')
			}				
		}
	});		
	$.ajax({ 
		type: "GET", 
		url: "http://api.flickr.com/services/rest/?method=flickr.photos.search&text=metallica&per_page=20&format=json&api_key=fa115b5e0df4444decbaba5387d3acd1&jsoncallback=?", 
		dataType: "jsonp", 
		success: function(data){
			var len=data.photos.photo.length;
			for(var i=0; i<len; i++) {
				$('#header ul').append('<li><img class="flickr-image" src="http://farm' + data.photos.photo[i].farm + '.static.flickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '.jpg" /></li>')
			}				
		}
	});	
	$.ajax({ 
		type: "GET", 
		url: "http://api.flickr.com/services/rest/?method=flickr.photos.search&text=nature&per_page=20&format=json&api_key=fa115b5e0df4444decbaba5387d3acd1&jsoncallback=?", 
		dataType: "jsonp", 
		success: function(data){
			var len=data.photos.photo.length;
			for(var i=0; i<len; i++) {
				$('#header ul').append('<li><img class="flickr-image" src="http://farm' + data.photos.photo[i].farm + '.static.flickr.com/' + data.photos.photo[i].server + '/' + data.photos.photo[i].id + '_' + data.photos.photo[i].secret + '.jpg" /></li>')
			}				
		}
	});	
}