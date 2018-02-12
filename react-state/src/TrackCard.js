//TODO: implement a simple component that renders the track data
//salient track properties:
// .trackName = track name
// .artworkUrl100 = URL to track artwork
// .previewUrl = URL to audio preview
import React from "react";

export default class TrackCard extends React.Component {
    render() {
        return (
            <figure className="track">
                <img src={this.props.track.artworkUrl100} alt={this.props.track.trackName} />
                <figcaption>
                    {this.props.track.trackName}
                </figcaption>
            </figure>
        );
    }
}