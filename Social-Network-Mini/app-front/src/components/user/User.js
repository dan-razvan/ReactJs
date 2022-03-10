import { useEffect, useState } from 'react'

// constructor
const User = ({ userData: { avatar, nickname, lastOnline } }) => {
  const [online, setOnline] = useState()
  const [viewMode, setViewMode] = useState('detailed')
  // const onClickHandler = () => setViewMode
  useEffect(() => {
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
