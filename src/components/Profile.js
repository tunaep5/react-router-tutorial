import React from "react";

const data = {
  apple: {
    name: "사과",
    description: "나는야 빨간색 아삭아삭 사과",
  },
  orange: {
    name: "오렌지",
    description: "나는야 주황색 새콤달콤 오렌지",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
