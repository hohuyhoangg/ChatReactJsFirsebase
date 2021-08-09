import { Button, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../Context/AuthProvider';
import { auth } from '../../firebase/config';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);

    .username {
        color: white;
        margin-left: 5px;
    }
`;

export default function UserInfor() {
    const { user: {
        displayName,
        photoURL
    } } = React.useContext(AuthContext);
    return (
        <WrapperStyled>
            <div>
                <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
                <Typography.Text className="username">{displayName}</Typography.Text>
            </div>
            <Button
                ghost
                onClick={() => auth.signOut()}>
                Đăng xuất
            </Button>
        </WrapperStyled>
    );
}
