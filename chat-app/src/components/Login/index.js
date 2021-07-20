import React from 'react';
import { Row, Col, Button, Typography } from 'antd';


const { Title } = Typography;


export default function Login() {
    return (
        <div>
            <Row justify='center' style={{ height: 800, marginTop: 50 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center', color: 'red' }} Level={3}>Chat App ReactJs</Title>
                    <Button style={{ width: '100%', marginBottom: 20 }}>
                        Login by Google
                    </Button>
                    <Button style={{ width: '100%', }}>
                        Login by Facebook
                    </Button>
                    <h3 style={{ textAlign: 'center', marginTop: 20 }}>Design by Ho Huy Hoang from HoleTex</h3>
                </Col>
            </Row>
        </div >
    )
}
