const ap = new APlayer({
    container: document.getElementById('aplayer'),
    theme: '#e9e9e9',
    fixed: true,
    mutex: true,
    autoplay: false,
    audio: [
	{
        name: "Dream It Possible",
        artist: 'Delacey',
        url: 'http://music.163.com/song/media/outer/url?id=38592976.mp3',
        cover: 'http://p1.music.126.net/Gfq_eVuq7lgilBf0w1g5dg==/109951163088676710.jpg?param=130y130',
      },
	  {
        name: "Wonderful U (Demo Version)",
        artist: 'AGA',
        url: 'http://music.163.com/song/media/outer/url?id=406475394.mp3',
        cover: 'http://p2.music.126.net/UIE3T_txKzd6e8PORxmpCQ==/109951163412959613.jpg?param=130y130',
      },
	  {
        name: "昨日青空",
        artist: '尤长靖',
        url: 'http://music.163.com/song/media/outer/url?id=1293951677.mp3',
        cover: 'http://p1.music.126.net/5BLwaGxULPLXWhhnIzD2CQ==/109951163413015911.jpg?param=130y130',
      },

    ]
});

const colorThief = new ColorThief();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        colorThief.getColorAsync(ap.list.audios[index].cover, function (color) {
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
        });
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});