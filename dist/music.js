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
        name: "Valder Fields",
        artist: 'Tamas Wells',
        url: 'http://music.163.com/song/media/outer/url?id=2001320.mp3',
        cover: 'http://p1.music.126.net/XbQhfWII58akaVQ6_xECEw==/6635552673830427.jpg?param=130y130',
      },
      {
        name: "All Falls Down",
        artist: 'Alan Walker / Noah Cyrus / Digital Farm Animals',
        url: 'http://music.163.com/song/media/outer/url?id=515453363.mp3',
        cover: 'http://p1.music.126.net/rTb28CZeLWxIRuSlJWkPLQ==/18850027346628137.jpg?param=130y130',
      },
      {
        name: "Illusionary Daytime",
        artist: 'Shirfine',
        url: 'http://music.163.com/song/media/outer/url?id=28907016.mp3',
        cover: 'http://p2.music.126.net/8xNVCemkSNQptEyNw1PHKg==/8914840278033758.jpg?param=130y130',
      },
      {
        name: "Asphyxia",
        artist: '逆时针向',
        url: 'http://music.163.com/song/media/outer/url?id=454035505.mp3',
        cover: 'http://p1.music.126.net/FRIgNtiwVBjHDIlhgnzGew==/109951163869607960.jpg?param=130y130',
      },
      {
        name: "Sakura Tears",
        artist: 'Nigel Silin',
        url: 'http://music.163.com/song/media/outer/url?id=509313150.mp3',
        cover: 'http://p2.music.126.net/p-7pKS_S86OJo8cHcDNKFw==/109951163922821064.jpg?param=130y130',
      },
      {
        name: "大鱼",
        artist: '周深',
        url: 'http://music.163.com/song/media/outer/url?id=413812448.mp3',
        cover: 'http://p2.music.126.net/aiPQXP8mdLovQSrKsM3hMQ==/1416170985079958.jpg?param=130y130',
      },
      {
        name: "Rain after Summer",
        artist: '羽肿',
        url: 'http://music.163.com/song/media/outer/url?id=430685732.mp3',
        cover: 'http://p1.music.126.net/5BLwaGxULPLXWhhnIzD2CQ==/109951163413015911.jpg?param=130y130',
      },
      {
        name: "Monsters",
        artist: 'Katie Sky',
        url: 'http://music.163.com/song/media/outer/url?id=28481189.mp3',
        cover: 'http://p2.music.126.net/YPh291Jw4Lzy7x1iT_Aw5A==/109951163510035145.jpg?param=130y130',
      },
      {
        name: "My Soul",
        artist: 'July',
        url: 'http://music.163.com/song/media/outer/url?id=5308028.mp3',
        cover: 'http://p1.music.126.net/NFl1s5Hl3E37dCaFIDHfNw==/727876697598920.jpg?param=130y130',
      },
      {
        name: "Hall of Fame",
        artist: 'The Script / will.i.am',
        url: 'http://music.163.com/song/media/outer/url?id=19542337.mp3',
        cover: 'http://p2.music.126.net/s4CT1dVikwYFxtxOvrp4GA==/6638851209069793.jpg?param=130y130',
      },
      {
        name: "Hello",
        artist: 'Adele',
        url: 'http://music.163.com/song/media/outer/url?id=35847388.mp3',
        cover: 'http://p2.music.126.net/PrO7oPvnjvH4xdujdGbf2w==/1407374890649284.jpg?param=130y130',
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