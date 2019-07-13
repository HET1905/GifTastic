var topics = ['Flowers', 'parrot', 'Tree'];

function displayButton() {
    for (var i = 0; i < topics.length; i++) {
       
        var dynamicBtn = $("<button>");
        dynamicBtn.addClass('dynamicBtn');
        dynamicBtn.attr('data-name', topics[i]);
        dynamicBtn.text(topics[i]);
       
        $("#btnDiv").append(dynamicBtn);
    }
}
displayButton();

$("#btnDiv").on('click', '.dynamicBtn', function (e) {
    e.preventDefault();
    var queryParam = $(this).attr('data-name')
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RxnNW4PuvaqzjybzP2uuoQchC1dJ9wQW&q=" + queryParam + "&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var dynamicImgDiv = $("<div>");
        dynamicImgDiv.attr('id', 'dynamicImgDiv');
        dynamicImgDiv.addClass('imgDivClass');
        var imageUrl;
        var dynamicImage;
        var stillImageUrl;
        for (var i = 0; i < response.data.length; i++) {

            imageUrl = response.data[i].images.original.url;
            stillImageUrl = response.data[i].images.original_still.url;
            dynamicImage = $("<img>");
            dynamicImage.addClass('imgClass');
            dynamicImage.attr("src", imageUrl);
            dynamicImage.attr("alt", queryParam + "image");
            dynamicImage.attr('data-state', 'animate');
            dynamicImage.attr('data-still', stillImageUrl);
            dynamicImage.attr('data-animate', imageUrl);


            dynamicImgDiv.append(dynamicImage);
        }
        $("#imgDiv").prepend(dynamicImgDiv);

        $(".imgClass").on("click", function () {
            var state = $(this).attr("data-state");

            if (state === "animate") {
                $(this).attr("src", $(this).attr('data-still'));
                $(this).attr("data-state", "still");
            } else {
                $(this).attr("src", $(this).attr('data-animate'));
                $(this).attr("data-state", "animate");
            }
        });

    });
});

$("#btnSearch").on('click', function (e) {
    e.preventDefault();
    var txtEnter = $("#txtEnter").val().trim();
    topics.push(txtEnter);
    $('#btnDiv').empty();
    displayButton();
})