import User from './components/user/User'
import { useState } from 'react'

const App = () => {
  const [display, setDisplay] = useState('detailed')

  // const onClickHandler = () => {
  //   if (display === 'compact') {
  //     setDisplay('detailed')
  //     setButton('show less')
  //   }
  //   if (display === 'detailed') {
  //     setDisplay('compact')
  //     setButton('show more')
  //   }
  // }
  return (
    <div className="App">
      <User
        onClickHandler={setDisplay}
        viewMode={display}
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
