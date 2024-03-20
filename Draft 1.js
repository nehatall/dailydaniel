// Positive Statements Array
var inspirationalquote = [
    "You're amazing!",
    "You make me smile every day.",
    "I'm lucky to have you in my life.",
    "Somewhere, something incredible is waiting to be known. (Carl Sagan)",
    "The cosmos is all that ever was or ever will be. (Carl Sagan)",
    "Our planet is a precious and fragile thing. It is the only home we know, the only place where human life has been found so far in the vast universe. (Carl Sagan)",
    "Imagination will often carry us to worlds that science has not yet discovered. (Carl Sagan)",
    "The universe is a symphony of electromagnetic radiation. (Carl Sagan)",
    "I don't want to believe in conspiracies, but it's hard not to. (Carl Sagan)",
    "We are a way for the cosmos to know itself. (Carl Sagan)",
    "Somewhere, something incredible is waiting to be known. (Carl Sagan)", 
    "The more we know about the universe, the more fascinating it seems. (Carl Sagan)",
    "I have a fascination with the human ability to tell stories. (Carl Sagan)",
    "We are made of star-stuff. (Carl Sagan)",
    "A billion worlds out there, perhaps many with life. (Carl Sagan)",
    "My favorite thing about the universe is that it exists. (Carl Sagan)",
    "The universe seems awfully big to think that we're all alone. (Carl Sagan)",
    "We proceed by trial and error. We are all amateurs. (Carl Sagan)",
    "For small creatures such as we, the vastness is bearable only through love. (Carl Sagan)",
    "I think it's important for young girls to see role models in fields that they might traditionally think are closed off to them. (Sally Ride)",
    "Space exploration is a way to unite the world. (Sally Ride)",
    "The things that we're learning in space have a real impact on us here on Earth. (Sally Ride)",
    "The things that you learn and the experiences that you have will eventually come together somehow to form a very interesting life path. (Sally Ride)",
    "If you can dream it, you can do it. (Sally Ride)",
    "Space exploration is a challenge, but it's a challenge that's worth taking. (Sally Ride)",
    "The most important thing is not to stop questioning. Curiosity has its own reason for existing. (Sally Ride)",
    "We can't solve problems by using the same kind of thinking we used when we created them. (Sally Ride)",
    "The sky is not the limit. It's just the beginning. (Sally Ride)",
    "We are all citizens of the universe, and we have a responsibility to take care of it. (Sally Ride)",
    "The future of humanity is in space. (Sally Ride)",
    "We need to be reaching for the stars, not just for our own sake, but for the sake of all humanity. (Sally Ride)",
    "There is so much to learn and discover in the universe, and we've only just begun. (Sally Ride)",
    "Never limit yourself because of others' limitations. (Mae Jemison)",
    "The difference between ordinary and extraordinary is that little extra. (Mae Jemison)",
    "Science is not about collecting facts, it's about finding a way to understand the world. (Mae Jemison)",
    "Don't let anyone tell you that you cannot do something. (Mae Jemison)",
    "It's important to believe in yourself and your dreams. (Mae Jemison)",
    "We need to be working together to solve the problems of the world. (Mae Jemison)",
    "Science is a way of thinking, a way of approaching the world. (Mae Jemison)",
    "The universe is a vast and amazing place. (Mae Jemison)",
    "The Earth is a beautiful and infinite tapestry of life, and we must protect every thread. (David Attenborough)",  
    "No single creature is more important than another. All play a part in the intricate balance of life.(David Attenborough)", 
    "We have a moral responsibility to deal with the mess we have created. (David Attenborough)",
    "The natural world is not a series of freak shows. It is a story of exquisite complexity and beauty. (David Attenborough)",
    "The greatest threat to our planet is the belief that someone else will fix it. (David Attenborough)",
    "Across the continents, the creatures of the Earth are in a desperate fight for survival. (David Attenborough)",
    "In the animal kingdom, the only way to get ahead is to get along. (David Attenborough)",
    "The intelligence of some of these creatures is simply beyond our imagination.(David Attenborough)",
    "The natural world is not something we can ignore. We are part of it, and it is part of us. (David Attenborough)",
    "The wealth of the world lies not in material possessions, but in the living world. (David Attenborough)",
    "We are a privileged species, living on an amazing planet. It's time we started acting like it. (David Attenborough)",
    "Despite the destruction, there is still hope. We can change. We can make a difference. (David Attenborough)",
    "The future of life on Earth depends on our ability to coexist with nature, not dominate it. (David Attenborough)",
    "The more we learn about the natural world, the more we appreciate its wonders. (David Attenborough)",
    "Nature never gives up on life. (David Attenborough)",
    "The creativity of life is its most astonishing characteristic.(David Attenborough)",
    "The natural world is a constant source of inspiration. (David Attenborough)",
    "We have the power to change the course of history. Let's use it wisely. (David Attenborough)",
    "The wonder of life never ceases to amaze me. (David Attenborough)",
    "There is still so much to learn about the natural world. The adventure continues. (David Attenborough)",
    "It's not an adventure until something goes wrong. (Yvon Chouinard)",
    "True adventure begins when everything goes wrong. (Yvon Chouinard)",
    "The hardest thing in the world is to simplify your life; it's so easy to make it complex. (Yvon Chouinard)",
    "How you climb a mountain is more important than reaching the top. (Yvon Chouinard)",
    "Fear of the unknown is the greatest fear of all. (Yvon Chouinard)",
    "There's no difference between a pessimist who says, 'Oh it's hopeless, so don't bother doing anything,' and an optimist who says, 'Don't bother doing anything, it's going to turn out fine anyways.' Either way, nothing happens. (Yvon Chouinard)",
    "To do good, you actually have to do something. (Yvon Chouinard)",
    "The revolution starts at the bottom. (Yvon Chouinard)",
    "I drive old cars, all my Patagonia clothes are years and years old, I hardly have anything new. I try to lead a very simple life. I am not a consumer of anything. And I much prefer sleeping on somebody's floor than in a motel room. (Yvon Chouinard)",
    "Profit is what happens when you do everything else right. (Yvon Chouinard)",
    "The word adventure has gotten overused. For me, when everything goes wrong – that's when adventure starts. (Yvon Chouinard)",
    "Real adventure is defined best as a journey from which you may not come back alive, and certainly not as the same person. (Yvon Chouinard)",
];

// Function to display random positive statement
function displayInspirationalQuote() {
    const randomIndex = Math.floor(Math.random() * inspirationalquote.length);
    document.getElementById('inspirationalquote').innerText = inspirationalquote[randomIndex];
}

// Function to display random space image
/ Function to fetch a random image from the folder in the GitHub repository
function fetchRandomImage() {
    // URL to the folder containing the images in your GitHub repository
    const folderUrl = 'https://api.github.com/repos/nehatall/dailydaniel/contents/spaceImages';
    
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
            const imageUrl = `https://raw.githubusercontent.com/nehatall/dailydaniel/main/spaceImages/${randomImage}`;
            
            // Set the source of the image element in your HTML to the constructed URL
            document.getElementById('spaceImages').src = imageUrl;
        })
        .catch(error => {
            console.error('Error fetching random image:', error);
        });
}

// Function to play random song
<script>index.html</script>;



// Call the functions on page load
window.onload = function () {
    displayinspirationalquote();
    fetchRandomImage();
    displayRandomSong();
};
