$(document).ready(function () {

    var query;
    var comment;
    var reviewer;
    var reviewee;
    var id;

    $("#recipient-comment-search-submit").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        console.log("button click sucka");
        event.preventDefault();

        query = $("#recipient-search-for-comment").val().trim();
        console.log(query);
        $("#recipient-search-for-comment").val('');



        // Send the post request.
        $.get("/query/" + query, function (res) {
            if (res) {
                console.log("db response for recipient query is:", res);
                id = res.id;

                var queriedName = $(
                    "<div class='card' id='recipient-card' data-id='" + res.id + "'" + "style='width: 400px;'>" + "<div><img class='card-img-top' style='width: 150px' src='img/dummy.png' alt='profile pic'>" + "</img></div>" + "<div class='card-body'>" + "<h5 class='card-title'>" + id + " " + res.recipient_name + "</h5>" + "<textarea class='comment-input' id='recipient-comment-input' placeholder='Enter Comment Here'></textarea>" + "<input type class='commenter-name-input' id='recipient-commenter-name-input' placeholder='Enter Your Name Here Here'></input>" + "<button type='button' class='btn btn-primary' id='recipient-comment-submit'>Submit</button>"
                )

                $("#query-display").append(queriedName);

            } else {
                console.log("error");
            }

        })

    });



    $("#query-display").on("click", "#recipient-comment-submit", function (event) {
        event.preventDefault();

        comment = $("#recipient-comment-input").val().trim();
        reviewer = $("#recipient-commenter-name-input").val().trim();
        reviewee = $(".card").attr("data-id");

        var commentObj = {
            comment: comment,
            reviewer: reviewer,
            reviewee: reviewee
        }

        console.log("commentObj is:", commentObj);

        //put this stuff in obj and pass to .post
        console.log(comment);
        console.log("by", reviewer);

        $("#recipient-comment-input").val('');
        $("#recipient-commenter-name-input").val('');


        $.post("/comments", commentObj, function (res) {
            if (res) {
                console.log("db response for comment post is:", res);


            } else {
                console.log("error");
            }

        })

    })

}); //end doc ready fx