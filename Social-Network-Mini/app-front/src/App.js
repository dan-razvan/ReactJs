import User from './components/user/User'
import { useState } from 'react'

const App = () => {
  return (
    <div className="App">
      <User
        // viewMode={'detailed'}
        userData={{
          avatar: '/images/avatar1.png',
          nickname: 'John Doe',
          lastOnline: '04.03.2022 18:00:00',
        }}
      />
    </div>
  )
}

export default App
