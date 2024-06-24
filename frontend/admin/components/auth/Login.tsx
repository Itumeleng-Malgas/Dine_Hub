"use client"
import React from "react";
import Link from 'next/link'

import { Layout, Typography, Button, Form, Input, Divider, Checkbox } from "antd";
import SocialLogin from "@/components/auth/SocialLogin";
import { FaLock } from "react-icons/fa";

const { Content } = Layout;
const { Title } = Typography;

const LoginComponent = () => (
        <Content className="text-center">
            <Title>Restaurant Login</Title>
            <Typography.Paragraph>
                Your Restaurant. Our Platform. Unlimited Reach.
            </Typography.Paragraph>

            <Form layout="vertical">
                <Form.Item>
                    <Input placeholder="Email" type="email" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Password" type="password" />
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked"
                >
                <div className="flex justify-between">
                    <Checkbox>Remember me</Checkbox>
                    <Link href="/password">
                        <div className="flex items-center">
                            <FaLock /><span className="ml-1">Forgot password?</span>
                        </div>
                    </Link>
                </div>
                </Form.Item>
                <Form.Item>
                    <Button className="w-full" type="primary">Login</Button>
                </Form.Item>
            </Form>
            <Typography.Paragraph>
                Don&apos;t have an account?{" "}
                <Link href="/register">Register</Link>
            </Typography.Paragraph>
            <Divider style={{ borderColor: '#BBBCBB' }}>login with</Divider>
            <SocialLogin />
        </Content>
);

export default LoginComponent;