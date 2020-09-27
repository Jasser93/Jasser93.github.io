
//	Lab: AJAX & JSON
//	Student: Jasser Dhaouadi
//	Student ID: 610099 

$(function() {
    $("#retrieve").click(updatePage);
});

function updatePage() {
    var userID = $("#userID").val();

     $.ajax("https://jsonplaceholder.typicode.com/users/"+userID)
	        .done(displayUserInfo)
			.fail(ajaxFailure);
	
    $.ajax("https://jsonplaceholder.typicode.com/posts", {
		"type": "get",
		"data": {
        	"userId": userID
		}
    }).done(displayUserPosts)
	  .fail(ajaxFailure);
}

function displayUserInfo(data) {

    var userInfo = "";
	var address = JSON.stringify(data.address);
	
	userInfo += "user Name: " + data.name + "<br>";
	userInfo += "Email: " + data.email + "<br>";
	userInfo += "Address: " + address + "<br>";
	

    $("#userInfo").html(userInfo);
    
}

function displayUserPosts(data) {

    var postList = [];

    var dataListLength = data.length;
    for (let i = 0; i < dataListLength; i++) {
        postList.push("Post title: "+ data[i].title + '<br>' +"Post body: " + data[i].body + '<br><br>');
    }
    postList = postList.toString();
    console.log(postList);
    $("#posts").html(postList);
    
}





function ajaxFailure(xhr, status, exception) {
  console.log(xhr, status, exception);
}