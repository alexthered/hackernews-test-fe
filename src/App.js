import './App.css'
import StoryList from './components/StoryList/StoryList'
import TopStory from './components/Story/TopStory'
import Button from './components/Button/Button'

import React from 'react'

let App = React.createClass({
    render() {
        return <div className="App">
            <Button />
            <p className="section-header">Life Time Top Story: </p>
            <TopStory />
            <p className="section-header">Current top 10 stories: </p>
            <StoryList />
        </div>
    }
})

export default App
