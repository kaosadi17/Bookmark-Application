//submit button listner
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;
	var bookmark = {
		name: siteName,
		url : siteUrl
	}
	console.log(bookmark)

	if(localStorage.getItem('bookmarks') === null){
		var bookmarks = [];
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
	}
	else{
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		bookmarks.push(bookmark);
		localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
	}

	e.preventDefault();
}

function fetchBookmarks(){
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}