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

	e.preventDefault();
}