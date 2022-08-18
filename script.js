//List (Task1)
class Composition {
    constructor(author, song) {
        this.author = author;
        this.song = song;
    }
    getInfo() {
        return `Composition info: ${this.author}, song: ${this.song}`
    }
}

const playlist = [
    ["LED ZEPPELIN", " LIVE IN NEW YORK"],
    ["QUEEN", " BOHEMIAN RHAPSODY"],
    ["LYNYRD SKYNYRD", " FREE BIRD"],
    ["DEEP PURPLE", " SMOKE ON THE WATER"],
    ["JIMI HENDRIX", " ALL ALONG THE WATCHTOWER"],
    ["AC/DC", " BACK IN BLACK"],
    ["QUEEN", " WE WILL ROCK YOU"],
    ["METALLICA", " ENTER SANDMAN"]
]

const wholePlaylist = [];
const library = document.getElementById('library');

playlist.forEach(function (element) {
    wholePlaylist.push('<li>' + element + '</li>');

})
library.innerHTML = wholePlaylist.join('');

//Modal (Task2)
const modal = document.getElementById("myModal");
const btn = document.getElementById("openBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Modal's content

document.addEventListener('DOMContentLoaded', () => {
    const src = [
        ["LED ZEPPELIN", " LIVE IN NEW YORK", "https://ia802802.us.archive.org/8/items/ledzeppelinliveinnewyorknyjuly29th1973_202002/Led%20Zeppelin%20-%20Live%20in%20New%20York%2C%20NY%20%28July%2029th%2C%201973%29.mp3", "https://ia600309.us.archive.org/20/items/JeffAustinLedZeppelinposter/Led_Zeppelin1.jpg"],
        ["QUEEN", " BOHEMIAN RHAPSODY", "https://ia804504.us.archive.org/14/items/S0_10/Bohemian%20Rhapsody%20-%20Queen%20%28w%20lyrics%29.mp3", "https://ia802805.us.archive.org/33/items/QueenQueenII/queenfreddiemercurye_queenii_9ky3.png"],
        ["LYNYRD SKYNYRD", " FREE BIRD", "https://ia902806.us.archive.org/2/items/cd_freebird-the-movie_lynyrd-skynyrd/disc1/13.%20Lynyrd%20Skynyrd%20-%20Free%20Bird_sample.mp3", "https://ia802806.us.archive.org/2/items/cd_freebird-the-movie_lynyrd-skynyrd/cd_freebird-the-movie_lynyrd-skynyrd_itemimage.png"],
        ["DEEP PURPLE", " SMOKE ON THE WATER", "https://ia801001.us.archive.org/12/items/podcast_behind-mystery-riff-with-c_deep-purple-smoke-on-the-water_1000383031620/podcast_behind-mystery-riff-with-c_deep-purple-smoke-on-the-water_1000383031620.mp3", "https://ia801001.us.archive.org/12/items/podcast_behind-mystery-riff-with-c_deep-purple-smoke-on-the-water_1000383031620/podcast_behind-mystery-riff-with-c_deep-purple-smoke-on-the-water_1000383031620_itemimage.png"],
        ["JIMI HENDRIX", " ALL ALONG THE WATCHTOWER", "https://ia800109.us.archive.org/8/items/cd_experience-hendrix-the-best-of-jimi-hendri_jimi-hendrix-the-jimi-hendrix-experience/disc1/05.%20The%20Jimi%20Hendrix%20Experience%20-%20All%20Along%20the%20Watchtower_sample.mp3", "https://ia800109.us.archive.org/8/items/cd_experience-hendrix-the-best-of-jimi-hendri_jimi-hendrix-the-jimi-hendrix-experience/cd_experience-hendrix-the-best-of-jimi-hendri_jimi-hendrix-the-jimi-hendrix-experience_itemimage.png"],
        ["AC/DC", " BACK IN BLACK", "https://ia601401.us.archive.org/0/items/acdc-back-in-black_202206/06%20-%20Back%20In%20Black.mp3", "https://ia801401.us.archive.org/0/items/acdc-back-in-black_202206/folder.jpg"],
        ["QUEEN", " WE WILL ROCK YOU", "https://ia800101.us.archive.org/24/items/cd_legends-we-will-rock-you_various-artists-aerosmith-bee-gees-bob-mar/disc1/11.%20Queen%20-%20We%20Will%20Rock%20You_sample.mp3", "https://ia800101.us.archive.org/24/items/cd_legends-we-will-rock-you_various-artists-aerosmith-bee-gees-bob-mar/cd_legends-we-will-rock-you_various-artists-aerosmith-bee-gees-bob-mar_itemimage.png"],
        ["METALLICA", " ENTER SANDMAN", "https://ia802907.us.archive.org/27/items/cd_metallica_metallica_0/disc1/01.%20Metallica%20-%20Enter%20Sandman_sample.mp3", "https://ia902907.us.archive.org/27/items/cd_metallica_metallica_0/cd_metallica_metallica_0_itemimage.png"]
    ];

    //разобрать

    for (x = 0; x < src.length; x++) {
        const s = src[x];
        const number = parseInt(x) + 1;
        const artist = document.createTextNode(number + ": " + s[0]);
        const track_name = document.createTextNode(s[1]);

        const listItem = document.createElement('div');
        const artist_text = document.createElement('h3');
        const track_text = document.createElement('p');

        artist_text.appendChild(artist);
        track_text.appendChild(track_name);

        listItem.appendChild(artist_text);
        listItem.appendChild(track_text);

        listItem.classList.add('item');
        listItem.dataset.index = x;

        document.getElementById('list').appendChild(listItem);
    };

    displayTrack(0);

    const listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
        el.onclick = () => {
            displayTrack(el.dataset.index);
        };
    });

    function displayTrack(x) {
        const active = document.querySelector('.is-active');
        if (active) {
            active.classList.remove('is-active');
        };
        const el = document.getElementById('list').children[x];
        el.classList.add('is-active');
        const s = src[x],
            artist = s[0],
            track = s[1],
            audio = s[2],
            img = s[3],
            number = parseInt(x) + 1;
        document.getElementById('title').innerText = number + ": " + artist;
        document.getElementById('song-title').innerHTML = track;
        const albumArt = document.getElementById('art');
        albumArt.src = img;
        albumArt.alt = artist + " " + track;
        document.getElementById('audio').src = audio;
    };
});