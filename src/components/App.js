import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null};
    
    componentDidMount() {
        // create the standard search term that appears on screen when opening the app
        this.onTermSubmit('Reactjs')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('search', {
            // it is called 'q' because that is what the youtube api documentation specifically told us to call it. You'll get an error if you write 'query' or something like that.
            params: { q: term
            }
        });

        // make sure to update both items and the video player when searching on things
        this.setState({
            videos: response.data.items,
        selectedVideo: response.data.items[0]});
    };
    
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})
    }
    render() {
        return (
            // ui conatiner is the ui css that makes some margin to both left and right, making the searchbar centered
            // Det er vigtigt at VideoDetail har 'video' og 
            // VideoList har 'videos', da computeren ikke kan finde ud af det
            // hvis vi skriver forskellige kommandoer i noget, der kun har ét formål
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideoList 
                        onVideoSelect={this.onVideoSelect} 
                        videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default App;