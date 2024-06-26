"use client"
import React from 'react';
import { Button, notification } from 'antd';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { TfiMicrosoft } from 'react-icons/tfi';
import { signIn } from 'next-auth/react';

const SocialLogin = () => {
  const handleSignIn = async (provider: string) => {
    try {
      const result = await signIn(provider, {
        callbackUrl: 'http://localhost:3000/admin',
      });

      // Check if there's an error in the result
      if (result?.error) {
        console.error(`Error signing in with ${provider}:`, result.error);
        openNotification(`Failed to sign in with ${provider}. Please try again.`);
      }
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error);
      openNotification(`Failed to sign in with ${provider}. Please try again.`);
    }
  };

  const openNotification = (message: string) => {
    notification.error({
      message: 'Sign In Error',
      description: message,
      duration: 5,
    });
  };

  return (
    <div className="flex">
      <Button onClick={() => handleSignIn('google')} className="flex-1 mr-1">
        <div className="flex justify-center items-center">
          <FcGoogle size={18} />
          <span className="ml-1">Google</span>
        </div>
      </Button>
      <Button onClick={() => handleSignIn('apple')} className="flex-1 mr-1">
        <div className="flex justify-center items-center">
          <FaApple size={18} />
          <span className="ml-1">Apple</span>
        </div>
      </Button>
      <Button onClick={() => handleSignIn('microsoft')} className="flex-1 mr-1">
        <div className="flex justify-center items-center">
          <TfiMicrosoft size={18} />
          <span className="ml-1">Microsoft</span>
        </div>
      </Button>
    </div>
  );
};

export default SocialLogin;