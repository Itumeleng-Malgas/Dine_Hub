"use client";
import { useState, useEffect } from 'react';
import { Button, Col, Layout, Row } from "antd";
import { headerFooterStyle, pageArt } from './_styles/common';
const { Header, Footer, Content, } = Layout;


export default function AuthLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const [headerStyle, setHeaderStyle] = useState<React.CSSProperties>(headerFooterStyle);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeaderStyle({ ...headerFooterStyle, backgroundColor: '#fff', zIndex: 20, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' });
      } else {
        setHeaderStyle(headerFooterStyle);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Layout style={{ minHeight: '100vh', background: "#fff" }}>
      <div style={pageArt} />
      <Header className="sticky top-0 flex justify-center md:justify-end" style={headerStyle}>
        <div className='text-4xl font-extrabold my-auto'>DH<span className="font-normal ml-1">DineHub.</span></div>
      </Header>
      <Content className="z-10 p-4 md:p-16 flex flex-col justify-center">
        <Row>
          <Col xs={24} md={12}></Col>
          <Col xs={24} md={12}>{children}</Col>
        </Row>
      </Content>
      <Footer className="flex justify-center text-sm md:text-lg" style={headerFooterStyle}>
        <Button type="link">About Us</Button>
        <Button type="link">Contact Us</Button>
      </Footer>
    </Layout>
  );
}
