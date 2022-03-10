import { useEffect, useState } from 'react'

// constructor
const User = ({ userData: { avatar, nickname, lastOnline }, viewMode }) => {
  const [online, setOnline] = useState()
  const [display, setViewMode] = useState(viewMode)
  // const onClickHandler = () => setViewMode
  useEffect(() => {
    if (display === 'compact') {
      setOnline(false)
    }
    if (display === 'detailed') {
      setOnline(true)
    }
  }, [display])

  return (
    <div className="User">
      {display === 'compact' ? (
        <div>
          <img src={avatar} alt="avatar" style={{ width: '80px' }} />
          <button className="button" onClick={() => setViewMode('detailed')}>
            Show More
          </button>
        </div>
      ) : (
        <div>
          <img src={avatar} alt="avatar" />
          <h2>{nickname}</h2>
          <p>{lastOnline}</p>
          <button className="button" onClick={() => setViewMode('compact')}>
            Show Less
          </button>
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
