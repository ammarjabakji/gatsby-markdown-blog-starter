import React from 'react'
import { Follow } from 'react-twitter-widgets'


const UserInfo = ({ config, expanded }) => (
  <>
    <Follow
      username={config.userTwitter}
      options={{ count: expanded ? true : "none" }}
    />
    <p>
    Here is some text about the author
    </p>
  </>

)

export default UserInfo;