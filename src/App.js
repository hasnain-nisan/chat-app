import React from 'react'
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'

import {ChanelListContainer, ChanelContainer} from './compnents'

const apiKey = "w3xf234h9c3x"
const client = StreamChat.getInstance(apiKey)

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChanelListContainer
        
        />
        <ChanelContainer

        />
      </Chat>      
    </div>
  )
}

export default App
