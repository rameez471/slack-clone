import React from 'react';
import styled from 'styled-components';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { selectRoomId } from '../features/appSlice';
import { useSelector } from 'react-redux';
import ChatInput from './chatInput';

const Chat = () =>{

    const roomId = 1;

    return(
        <ChatContainer>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room-name</strong>
                    <StarBorderOutlinedIcon/>
                    </h4>
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </HeaderRight>
            </Header>
            <ChatMessages>
                {/* List of messages */}
            </ChatMessages>
            <ChatInput
                //Channel Name
                channelId = {roomId}
            />
        </ChatContainer>
    );
};

export default Chat;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    >h4{
        display: flex;
        text-transform:lowercase;
        margin-right: 10px;
    }
    
    >h4 > .MuiSvgIcon-root{
        margin-left: 10px;
        font-size: 18px;
    }

    >h4 > .MuiSvgIcon-root:hover{
        cursor: pointer;
    }
`;

const HeaderRight = styled.div`
    >p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    >p >.MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatMessages = styled.div`

`;
