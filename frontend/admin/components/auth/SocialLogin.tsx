import { Button } from 'antd'
import React from 'react'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { TfiMicrosoft } from 'react-icons/tfi'

const SocialLogin = () => {
  return (
    <div className="flex">
        <Button  className="flex-1 mr-1">
            <div className="flex justify-center items-center">
                <FcGoogle size={18}/><span className="ml-1">Google</span>
            </div>
        </Button>
        <Button className="flex-1 mr-1">
            <div className="flex justify-center items-centerr">
                <FaApple size={18}/><span className="ml-1">Apple</span>
            </div>
        </Button>
        <Button className="flex-1 mr-1">
            <div className="flex justify-center items-center">
                <TfiMicrosoft size={18}/><span className="ml-1">Microsoft</span>
            </div>
        </Button>
    </div>
  )
}

export default SocialLogin