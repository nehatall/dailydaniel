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
 const SpotifyWebApi = require('spotify-web-api-node');
const request = require('request');

// Create an instance of SpotifyWebApi with your credentials
const spotifyApi = new SpotifyWebApi({
    clientId: '27d4f492e1854ed5b3fec033f1a26fdd',
    clientSecret: '25823a0399864b2e86adc643a7fc1b43'
});

// Define your client_id and client_secret
const client_id = '27d4f492e1854ed5b3fec033f1a26fdd';
const client_secret = '25823a0399864b2e86adc643a7fc1b43';

// Set up authorization options
const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

// Retrieve an access token using client credentials grant
request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        const token = body.access_token;
        // Set the access token for SpotifyWebApi
        spotifyApi.setAccessToken(token);

        // Get playlist tracks
        spotifyApi.getPlaylistTracks('Daniel').then(
            function(data) {
                // Extract an array of track objects from the playlist
                const tracks = data.body.items.map(item => item.track);

                // Select a random track
                const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

                // Display the random track information (title, artist, etc.)
                console.log('Random Track:', randomTrack);
            },
            function(err) {
                console.log('Error retrieving playlist tracks', err);
            }
        );
    } else {
        console.log('Error retrieving access token', error);
    }
});



// Call the functions on page load
window.onload = function () {
    displayInspirationalQuote(); // Corrected the function name (was originally mispelled)
    fetchRandomImage();
    displayRandomSong(); // this hasn't been defined yet
};
