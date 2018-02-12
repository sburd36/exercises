import React, { Component } from 'react';
import './App.css';
import * as itunes from "./itunes";
import TrackCard from "./TrackCard";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            q: "",
            tracks: []
        }
    }
    handleSubmit(evt) {
        evt.preventDefault();
        console.log("searching for %s", this.state.q);
        fetch(itunes.SEARCH_API + this.state.q)
            .then(itunes.handleResponse)
            .then(data => this.setState({
                tracks: data.results, 
                fetchError: undefined
            }))
            .catch(err => this.setState({fetchError: err}));
    }
    render() {
        return (
            <div>
                <header className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1><span role="img" aria-label="musical notes icon">🎵</span> Search iTunes</h1>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="container">
                            <form onSubmit={evt => this.handleSubmit(evt)}>
                                <input type="text"
                                    className="form-control"
                                    placeholder="what do you want to listen to?"
                                    value={this.state.q}
                                    onInput={evt => this.setState({q: evt.target.value})}
                                    />
                            </form>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            {
                                this.state.fetchError ? 
                                    <div className="alert alert-danger">{this.state.fetchError.message}</div> :
                                    undefined
                            }
                            <div className="results">
                               {
                                   this.state.tracks.map(t => <TrackCard key={t.trackId} track={t} />)
                               }
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default App;
