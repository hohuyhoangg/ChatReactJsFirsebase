import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/service';


const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

export default function Login() {

    const handleFbLogin = async () => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                phone: user.phoneNumber,
                keywords: generateKeywords(user.displayName),
            });
        }
    };


    return (
        <div>
            <Row justify='center' style={{ height: 800, marginTop: 50 }}>
                <Col span={8}>
                    <Title style={{ textAlign: 'center', color: 'red' }} level={3}>Chat App ReactJs</Title>
                    <Button style={{ width: '100%', marginBottom: 20 }}>
                        Login by Google
                    </Button>
                    <Button style={{ width: '100%' }} onClick={handleFbLogin}>
                        Login by Facebook
                    </Button>
                    <h3 style={{ textAlign: 'center', marginTop: 20 }}>Design by Ho Huy Hoang from HoleTex</h3>
                </Col>
            </Row>
        </div >
    )
}
