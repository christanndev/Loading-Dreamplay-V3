


const loading = new Vue({
    el: ".Loading-Base",

    data: {
        builded: true,
        zoom: 1,
        music: null,
    },

    mounted() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
        window.addEventListener('message', this.handler);
        window.addEventListener("keydown", this.onKey);

        this.music = new Audio('song.mp3'); // Specify the correct path to your music file
        this.music.play().catch(e => {
            // Handle the error if the music can't play without user interaction
            console.error("Audio play failed:", e);
        });
    },

    methods: {
        async post(url, data = {}) {
            try {
              const response = await fetch(`https://${GetParentResourceName()}/${url}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
              });
          
              if (response.ok) {
                return await response.json();
              } else {
                throw new Error(`${response.status}`);
              }
            } catch (error) {
              return null;
            }
        },

        handleResize() {
            var zoomCountOne = $(window).width() / 1920;
            var zoomCountTwo = $(window).height() / 1080;

            if (zoomCountOne < zoomCountTwo) this.zoom = zoomCountOne;
            else this.zoom = zoomCountTwo;
        },
        handler: function(event) {
            const data = event.data;
            switch (data.type) {
               
            }
        },
        onKey(event) {
            if (event.code === "Space") {
                // Check if the music is not null
                if (this.music) {
                    if (this.music.paused) {
                        // If the music is paused, play it
                        this.music.play().catch(e => {
                            console.error("Audio play failed:", e);
                        });
                    } else {
                        // If the music is playing, pause it
                        this.music.pause();
                    }
                }
            }
        },
    }
})