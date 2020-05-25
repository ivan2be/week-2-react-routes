import React from 'react'

import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title"> Dashboard </div>
      <Link to="/dashboard/profile/2b8db706-4439-47bc-a0b7-451e0a96e71a"> Go To Profile </Link>
      <Link to="/dashboard"> Go To Main </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard