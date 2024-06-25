"use client"
import { Button } from 'antd'
import { signOut } from 'next-auth/react'
import React from 'react'

const AdminPage = () => {
  return (
    <><div>AdminPage</div>
    <Button danger type='primary' onClick={async () => await signOut()}>SignOut</Button></>
  )
}

export default AdminPage