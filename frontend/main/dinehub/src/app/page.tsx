"use client"
import { Layout, Input, Button, Row, Col, Dropdown } from 'antd';
import { EnvironmentOutlined, SearchOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';

import React from 'react';

import FooterComponent from '../components/Layout/Footer'



const { Header, Content, Footer } = Layout;
const { Search } = Input;


export default function Home() {
   

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <div style={{
                backgroundImage: 'url("mainpic.jpeg")',
                width: '100vw',
                height: '65vh',
                backgroundSize: 'cover',
                position: 'absolute',
                zIndex: 0,
                left: '2vw',
                top: '20vh',
                opacity: '90%'
            }} />
            <Header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'lightblue'
            }}>
               
            </Header>
            <Content style={{ padding: '50px', textAlign: 'center', zIndex: 10 }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1>From Casual Eats to Fine Dining: Reserve Your Perfect Spot!</h1>
                    <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                        <Col xs={24} md={8}>
                            <Input
                                size="large"
                                placeholder="Sandton"
                                prefix={<EnvironmentOutlined />}
                                style={{ width: '100%' }}
                            />
                        </Col>
                        <Col xs={24} md={16}>
                            <Search
                                size="large"
                                placeholder="Cuisine, restaurant name..."
                                enterButton={<Button type="primary" icon={<SearchOutlined />} />}
                                style={{ width: '100%' }}
                            />
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: '#41467e', color: 'white' }}>
                <FooterComponent/>
            </Footer>
        </Layout>
    );
}
