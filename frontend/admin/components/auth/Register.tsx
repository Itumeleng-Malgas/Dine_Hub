"use client"
import React from "react";
import Link from 'next/link'

import { Layout, Typography, Button, Form, Input, Divider } from "antd";
import SocialLogin from "@/components/auth/SocialLogin";

const { Content } = Layout;
const { Title } = Typography;

const RegisterComponent = () => (
        <Content className="text-center">
            <Title>Register your restaurant</Title>
            <Typography.Paragraph>
                Your Restaurant. Our Platform. Unlimited Reach.
            </Typography.Paragraph>

            <Form layout="vertical">
                <Form.Item>
                    <Input placeholder="Restaurant Name" type="text" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Email" type="email" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Password" type="password" />
                </Form.Item>
                <Form.Item>
                    <Button className="w-full" type="primary">Create Account</Button>
                </Form.Item>
            </Form>
            <Typography.Paragraph>
                <span className="text-gray-800 text-xs md:text-sm md:text-gray-500 text-center py-4 text-balance">
                    By continuing, you agree to the DineHub terms of use, and the Privacy Notice. This site uses essential cookies. See our Cookie Notice for more information.
                </span>
            </Typography.Paragraph>
            <Typography.Paragraph>
                Already have an account?{" "}
                <Link href="/login" >Login</Link>
            </Typography.Paragraph>
            <Divider style={{ borderColor: '#BBBCBB' }}>or</Divider>
            <SocialLogin />
        </Content>
);

export default RegisterComponent;