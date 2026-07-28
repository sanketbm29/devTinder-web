import axios from "axios";
import { BASE_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../Utils/feedSlice";

function UserCard({ user }) {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };
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
            onClick={() => handleSendRequest("ignored", _id)}
            style={{ backgroundColor: "blue", width: "15%" }}
          >
            Ignore
          </button>
          <button
            className="btn"
            onClick={() => handleSendRequest("interested", _id)}
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
