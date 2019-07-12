var topics=['dove','parrot','red robbin'];

    for(var i=0; i<topics.length;i++){
        var dynamicBtn = $("<button>");
        dynamicBtn.addClass('dynamicBtn');
        dynamicBtn.attr('data-name',topics[i]);
        dynamicBtn.text(topics[i]);
        $("#btnDiv").append(dynamicBtn);
    }
   



 
//    $("#cat-button").on("click", function() {

   
//     var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

 
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // })

    //   .then(function(response) {

     
    //     var imageUrl = response.data.image_original_url;

    //     var catImage = $("<img>");

        
    //     catImage.attr("src", imageUrl);
    //     catImage.attr("alt", "cat image");

     
    //     $("#images").prepend(catImage);
    //   });

    //   $(".gif").on("click", function() {
    //     var state = $(this).attr("data-state");
       
    //     if (state === "still") {
    //       $(this).attr("src", $(this).attr("data-animate"));
    //       $(this).attr("data-state", "animate");
    //     } else {
    //       $(this).attr("src", $(this).attr("data-still"));
    //       $(this).attr("data-state", "still");
    //     }
