import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import Card from 'react-bootstrap/Card';
import { Context } from '../../context/Context';
import myImage from '../../assets/myimage.jpeg';

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)


    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={myImage} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello,Arthana</span></p>
                            <p className='help' >How can I help you today?</p>
                        </div>

                        <div className='d-flex cards' style={{ gap: '15px', height: '200px', cursor: 'pointer' }}>
                            <Card style={{ width: '18rem', backgroundColor: '#f0f4f9', position: 'relative' }}>
                                <Card.Body className='card-content'>
                                    <Card.Text className='card-text'>
                                        Explain the following code step by step in detail
                                    </Card.Text>
                                    <Card.Img className='card-img' src={assets.code_icon} style={{ width: '35px', borderRadius: '20px' }} />
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', backgroundColor: '#f0f4f9', position: 'relative' }}>
                                <Card.Body className='card-content'>
                                    <Card.Text className='card-text'>
                                        Teach me the concept of game theory in simple terms
                                    </Card.Text>
                                    <Card.Img className='card-img' src={assets.bulb_icon} style={{ width: '35px', borderRadius: '20px' }} />
                                </Card.Body>
                            </Card>



                            <Card style={{ width: '18rem', backgroundColor: '#f0f4f9', position: 'relative' }}>
                                <Card.Body className='card-content'>
                                    <Card.Text className='card-text'>
                                        Suggest some beautiful places to see on an upcoming road trip
                                    </Card.Text>
                                    <Card.Img className='card-img' src={assets.compass_icon} style={{ width: '35px', borderRadius: '20px' }} />
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem', backgroundColor: '#f0f4f9', position: 'relative' }} >
                                <Card.Body className='card-content'>
                                    <Card.Text className='card-text'>
                                        Outline a way to home routine:organizing my closet
                                    </Card.Text>
                                    <Card.Img className='card-img' src={assets.bulb_icon} style={{ width: '35px', borderRadius: '20px' }} />
                                </Card.Body>
                            </Card>
                        </div>





                    </>
                    :
                    <div className='result'>
                        <div className="result-title">
                            <img src={myImage} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt="" />
                            {loading ?
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }


                        </div>
                    </div>
                }



                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                                : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Main

