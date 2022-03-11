import { useEffect, useState } from 'react'
import Carousel from '../carousel/carousel'

// constructor
const User = ({ userData: { avatar, nickname, lastOnline }, viewMode }) => {
  const [online, setOnline] = useState()
  const [display, setViewMode] = useState(viewMode)

  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC927v3KL6U4GXYccs-1O3t2fk5Bh82AW7YS_YweJ2155piBfAGv8ALuUrscI6bUQ3Cqk&amp;usqp=CAU',
    'https://www.nicepng.com/png/detail/174-1748863_jack-bayley-avatar-vector-icon-boy.png',
    'https://www.blexar.com/avatar.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC927v3KL6U4GXYccs-1O3t2fk5Bh82AW7YS_YweJ2155piBfAGv8ALuUrscI6bUQ3Cqk&amp;usqp=CAU',
    'https://www.algaeservices.co.in/images/algaeservices_testimonial4.png',
    'https://www.blexar.com/avatar.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC927v3KL6U4GXYccs-1O3t2fk5Bh82AW7YS_YweJ2155piBfAGv8ALuUrscI6bUQ3Cqk&amp;usqp=CAU',
    'https://www.algaeservices.co.in/images/algaeservices_testimonial4.png',
  ]
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
          <Carousel images={images} />
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
