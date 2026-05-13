function UserCard({ user }) {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={user.photoUrl} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn"
            style={{ backgroundColor: "blue", width: "15%" }}
          >
            Ignore
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "hotpink", width: "20%" }}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
