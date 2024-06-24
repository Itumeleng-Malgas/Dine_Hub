import WithSuspense from '@/components/WithSuspense'
import PasswordResetComponent from '@/components/auth/PasswordReset'
import React from 'react'

const PasswordResetPage = () => {
  return (
    <WithSuspense children={<PasswordResetComponent/>} />
  )
}

export default PasswordResetPage