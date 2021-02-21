// Comment Component
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
      <img className="Avatar"
        src={props.author.avatarUrl}
        alt={props.author.name}
      />
      // Author object property
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
    // Text string property
    <div className="Comment-text">
    {props.text}
    </div>
    // Date date property
    <div className="Comment-date">
      {formatDate(props.date)}
    </div>
  </div>
  );
}
// Extract components from the Comment Component

// Avatar
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
// Now simplify Comment
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
    <div className="Comment-text">
    {props.text}
    </div>
    <div className="Comment-date">
      {formatDate(props.date)}
    </div>
  </div>
  );
}
// Extract a UserInfo component that renders an Avatar
// next to the user's name
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
      {props.user.name}
      </div>
    </div>
  );
}
// Futher simplify the Comment Component
function Comment(props) {
  return (
    <div className="Comment">
    <UserInfo user={props.author} />
    <div className="Comment-text">
    {props.text}
    </div>
    <div className="Comment-date">
  )
}
