import { Component } from 'react';

class Music extends Component {
    state = {
        audio: null,
        isPlaying: false,
    };

    playPause = () => {
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            this.state.audio.pause();
        } else {
            const soundtrack = require('../../src/assets/music/music.mp3');
            const audio = new Audio(soundtrack);
            this.setState({ audio }, () => {
                this.state.audio.play();
            });
        }

        this.setState({ isPlaying: !isPlaying });
    };

    render() {

        return (
            <div>

                {/* Button to call our main function */}
                <a
                    style={{ cursor: 'pointer'}}
                    className='nav-link'
                    onClick={this.playPause}>
                    Toggle Soundtrack
                </a>
                        {/* Show state of song on website */}
                        {/* <p>
                            {this.state.isPlaying ?
                                "Song is Playing" :
                                "Song is Paused"}
                        </p> */}
            </div>
        );
    };
}

export default Music;
