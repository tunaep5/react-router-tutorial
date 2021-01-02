import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞의 ?를 생략하기 위함
  });
  const showDetail = query.detail === 'true';

  return (
    <div>
      <h1>About</h1>
      <p>This is an example for react router.</p>
      {showDetail && <p>detail 값을 true로 설정했습니다.</p>}
    </div>
  );
};

export default About;
