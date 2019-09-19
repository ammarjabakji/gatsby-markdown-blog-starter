import React from 'react'
import { Follow } from 'react-twitter-widgets'
import Image from 'gatsby-image'
import avatar from '../../content/images/avatar.jpg'


const UserInfo = ({ config, expanded }) => (
  <>


    <img
      src={config.userAvatar}
      alt={config.userName}
    />
    <p>
      Written by <strong>{config.userName}</strong> who lives and works in San
      Francisco building useful things.
      {` `}

      <Follow
      username={config.userTwitter}
      options={{ count: expanded ? true : "none" }}
      />
    </p>
  </>

)

export default UserInfo;