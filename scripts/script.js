new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "አዐትብ ገጽየ",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/yezewetertselot.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "ነኣኩተከ እግዚኦ",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/nakuteke.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "ኣቡነ ዘበሰማያት",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/abune.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "በሰላም ቅዱስ",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/beselame.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "ጸሎተ ሃይማኖት",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/tselotehaymanot.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "ቅዱስ ቅዱስ ቅዱስ",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/qedusqedus.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "እሰግድ",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/esegede.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "ስብሓት",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/sebehat.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "ሰላም ለኪ",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/selamleki.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "ጸሎተ እግዝእትነ",
          artist: "ጸሎት ዘዘወትር",
          cover: "img/teseote.png",
          source: "mp3/ቅዳሜ 1.mp4",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false
        },
        {
          name: "ተፈሲሒ ኦ ምልእተ ጸጋ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/2.png",
          source: "mp3/ቅዳሜ 2.mp4",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true
        },
        {
          name: "ከመ ከብካብ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/3.png",
          source: "mp3/ቅዳሜ 3.mp4",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "አንቲ ዉእቱ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/4.png",
          source: "mp3/ቅዳሜ 4.mp4",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "ኮንኪ ዳግሚተ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/5.png",
          source: "mp3/ቅዳሜ 5.mp4",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "አንቲ ዉእቱ ደብተራ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/6.png",
          source: "mp3/ቅዳሜ 6.mp4",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "ተሰመይኪ እመ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/7.png",
          source: "mp3/ቅዳሜ 7.mp4",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "አንቲ ዉእቱ ሰዋስዉ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/8.png",
          source: "mp3/ቅዳሜ 8.mp4",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "ናሁ እግዚእ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/9.png",
          source: "mp3/ቅዳሜ 9.mp4",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "ተፈሥሒ ኦ ምልእተ",
          artist: "ዘቀዳሚት ሰንበት",
          cover: "img/10.png",
          source: "mp3/ቅዳሜ 10.mp4",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "ተሰመይኪ ፍቅርተ",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/11.png",
          source: "mp3/እሁድ 1.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "ታቦት በወርቅ ልቡጥ",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/12.png",
          source: "mp3/እሁድ 2.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "መቅደስ ዘይኬልልዋ",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/13.png",
          source: "mp3/እሁድ 3.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "አንቲ ዉእቱ መሶበ ወርቅ",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/14.png",
          source: "mp3/እሁድ 4.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "እንቲ ዉእቱ ተቅዋም",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/15.png",
          source: "mp3/እሁድ 5.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "አንቲ ዉእቱ ማዕጠንት ዘወርቅ",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/16.png",
          source: "mp3/እሁድ 6.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "ተፈሥሒ ኦ ማርያም ርግብ ሠናይት",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/17.png",
          source: "mp3/እሁድ 7.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "በትረ አሮን",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/18.png",
          source: "mp3/እሁድ 8.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "ለኪ ይደሉ",
          artist: "ሰንበት ክርስቲያን ቅድስት",
          cover: "img/19.png",
          source: "mp3/እሁድ 9.m4a",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
