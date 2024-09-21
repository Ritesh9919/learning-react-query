import { useQuery } from "react-query";
import axios from "axios";

const fetchUser = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchCourses = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

function DependedQuery({ email }) {
  const { data: users } = useQuery(["users", email], () => fetchUser(email));
  const channelId = users?.data.channelId;
  useQuery(["courses", channelId], () => fetchCourses(channelId), {
    enabled: !!channelId,
  });

  return <div>DependedQuery</div>;
}

export default DependedQuery;
