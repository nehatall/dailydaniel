// Positive Statements Array
var inspirationalquote = [
    "You're amazing!",
    "You make me smile every day.",
    "I'm lucky to have you in my life.",
    // Other positive statements...
];

// Function to display random positive statement
function displayInspirationalQuote() {
    const randomIndex = Math.floor(Math.random() * inspirationalquote.length);
    document.getElementById('inspirationalquote').innerText = inspirationalquote[randomIndex];
}

// Function to display random space image
// Function to fetch a random image from the folder in the GitHub repository
function fetchRandomImage() {
    // URL to the folder containing the images in your GitHub repository
    const folderUrl = 'https://api.github.com/repos/nehatall/dailydaniel/contents/spaceImages/spaceImages';

    // Fetch the list of files in the folder
    fetch(folderUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the filenames from the response data
            const imageFiles = data.map(file => file.name);

            // Select a random filename from the list
            const randomIndex = Math.floor(Math.random() * imageFiles.length);
            const randomImage = imageFiles[randomIndex];

            // Construct the URL to the randomly selected image
            const imageUrl = `https://raw.githubusercontent.com/nehatall/dailydaniel/main/spaceImages/spaceImages/${randomImage}`;

            // Set the source of the image element in your HTML to the constructed URL
            document.getElementById('spaceImages').src = imageUrl;
        })
        .catch(error => {
            console.error('Error fetching random image:', error);
        });
}


// Function to play random song
//<script>index.html</script>; "script" isn't actually javascript, though this might be a placeholder you put in the html file to indicate where you want to put the actual function so like idk what you want to do with this



// Call the functions on page load
window.onload = function () {
    displayInspirationalQuote(); // Corrected the function name (was originally mispelled)
    fetchRandomImage();
    displayRandomSong(); // this hasn't been defined yet
};
