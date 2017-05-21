import './App.css'
import StoryList from './components/StoryList/StoryList'
import Button from './components/Button/Button'

import React from 'react'

let App = React.createClass({
    render() {
        return <div className="App">
            <p className="section-header">Current top 10 stories: </p>
            <Button />
            <StoryList />
        </div>
    }
})

export default App
