document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("background-video");

    // If video element exists
    if (video) {
        console.log("Video element found."); // Check if the video element is found

        // Play the video and listen for time updates
        video.play();
        video.addEventListener("timeupdate", function() {
            // If the video has reached the end, pause it
            if (video.currentTime === video.duration) {
                console.log("Video ended."); // Log message to indicate video has ended
                video.pause();
            }
        });
    } else {
        console.error("Video element not found."); // Log an error if the video element is not found
    }
});
