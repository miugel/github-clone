import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 24px 0px;
    display: flex;
    justify-content: center;

    .user {
        width: 272px;
        margin-right: 40px;
        display: flex;
        flex-direction: column;
        
        .image-container {
            height: 272px;
            border: 1px solid lightgray;
            border-radius: 5px;

            img {
                height: 272px;
                width: 272px;
                border-radius: 5px;
            }
        }

        h2 {
            margin-top: 16px;
            font-size: 26px;
            font-weight: 600;
        }

        h3 {
            margin-bottom: 16px;
            font-size: 20px;
            font-weight: 400;
        }

        a button {
            height: 34px;
            width: 272px;
            margin-bottom: 16px;
            background: #EFF3F6;
            border: 1px solid lightgray;
            border-radius: 5px;
            outline: none;
            font-family: 'Quicksand', sans-serif;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        
            :hover {
                border: 1px solid gray;    
            }
        }

        .bio {
            margin-bottom: 4px;
            font-size: 14px;
            font-weight: 500;
        }

        .location-container {
            margin-bottom: 4px;
            display: flex;
            align-items: center;
            font-size: 14px;

            i {
                margin-right: 3px;
                color: gray;
            }

            p {
                font-weight: 500;
            }
        }

        .pro-container {
            display: flex;
            align-items: center;
            font-size: 12px;

            i {
                margin-right: 8px;
                color: gray;
            }

            p {
                padding: 3px 4px;
                background: #6F42C1;
                border-radius: 2px;
                font-weight: 500;
                color: white;
            }
        }
    }

    .followers {
        .follower-header {
            width: 101.69px;
            padding: 16px 8px;
            border-bottom: 2px solid #e36209;
            display: flex;
            align-items: center;
    
            h2 {
                margin-right: 3px;
                font-size: 14px;
                font-weight: 600;
            }
    
            p {
                padding: 2px 5px;
                background: lightgray;
                border-radius: 50%;
                font-size: 12px;
                font-weight: 500;
            }
        }
    
        .follower-container {
            width: 928px;
            padding: 24px 0px;
            border-top: 1px solid lightgray;
            display: flex;
            justify-content: space-between;
            
            div {
                display: flex;
            }
    
            div img {
                height: 50px;
                width: 50px;
                margin-right: 28px;
                border-radius: 3px;
            }
    
            div p {
                font-size: 16px;
            }
    
            a button {
                height: 28px;
                width: 57.72px;
                background: #EFF3F6;
                border: 1px solid lightgray;
                border-radius: 3px;
                outline: none;
                font-family: 'Quicksand', sans-serif;
                font-size: 12px;
                font-weight: 500;
                cursor: pointer;
    
                :hover {
                    border: 1px solid gray;    
                }
            }
        }
    }
`

const Card = props => {
    return (
        <Container>
            <div className='user'>
                <div className='image-container'>
                    <img src={props.userData.avatar_url} alt='avatar'></img>
                </div>
                <h2>{props.userData.name}</h2>
                <h3>{props.userData.login}</h3>
                <a href={props.userData.html_url} target='_blank'><button>Follow</button></a>
                <p className='bio'>{props.userData.bio}</p>
                <div className='location-container'>
                    <i className="fas fa-map-marker-alt"></i>
                    <p>{props.userData.location}</p>
                </div>
                <div className='pro-container'>
                    <i className="fas fa-star"></i>
                    <p>PRO</p>
                </div>
            </div>
            <div className='followers'>
                <div className='follower-header'>
                    <h2>Followers</h2>
                    <p>{props.followerData.length}</p>
                </div>
                {props.followerData.map((item, index) => {
                    return (
                        <div className='follower-container' key={index}>
                            <div>
                                <img src={item.avatar_url} alt='avatar'></img>
                                <p key={index}>{item.login}</p>
                            </div>
                            <a href={item.html_url} target='_blank'><button>Follow</button></a>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
    
};

export default Card;
