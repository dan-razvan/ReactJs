import { useEffect, useState } from 'react'

// constructor
const User = ({ userData: { avatar, nickname, lastOnline }, viewMode }) => {
  const [online, setOnline] = useState()

  useEffect(() => {
    // console.info('User component did mount or update')
    // setTimeout(() => {
    //   setOnline(!online)
    //   console.info(`The user is ${online ? 'online' : 'offline'}`)
    // }, 2000)
    if (viewMode === 'compact') {
      setOnline(false)
    }
    if (viewMode === 'detailed') {
      setOnline(true)
    }
  }, [viewMode])

  return (
    <div className="User">
      {viewMode === 'compact' ? (
        <div>
          <img src={avatar} alt="avatar" style={{ width: '80px' }} />
        </div>
      ) : (
        <div>
          <img src={avatar} alt="avatar" />
          <h2>{nickname}</h2>
          <p>{lastOnline}</p>
        </div>
      )}

      {/* DOM/JSX fragment depends on this variable*/}
      {online ? (
        <span style={{ color: 'green', fontSize: '40px' }}>◉</span>
      ) : (
        <span style={{ color: 'gray', fontSize: '40px' }}>◉</span>
      )}
    </div>
  )
}

export default User
