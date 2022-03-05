// Main User Module
// FUNCTIONAL COMPONENT

// User Component:
// * user data
// * view modes: compact, detailed
const User = ({ userData: { avatar, nickname, lastOnline }, viewMode }) => {
  if (viewMode === 'detailed') {
    return (
      <div className="User">
        <img src={avatar} />
        <h2>{nickname}</h2>
        <p>{lastOnline}</p>
      </div>
    )
  } else if (viewMode === 'compact') {
    return (
      <div className="User">
        <img src={avatar} width="80px" />
      </div>
    )
  }
}

export default User
