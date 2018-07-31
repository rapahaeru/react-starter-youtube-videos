import React, { Component } from 'react';
import _ from 'lodash';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBFG654RaS61PWUaHmHRcsJMk-RhBxP0aQ';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videos: [],
            selectedVideo: null
         }
         this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });
        })
   }


   render() {

    const ON_VIDEO_SEARCH = _.debounce((term) => this.videoSearch(term), 300);

        return (
            <div className='search-bar'>
                <SearchBar onSearchChangeTerm={ON_VIDEO_SEARCH} />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} videos={ this.state.videos } />
            </div> );

    }
}



ReactDom.render(
(<App />)
, document.querySelector('.container'));


