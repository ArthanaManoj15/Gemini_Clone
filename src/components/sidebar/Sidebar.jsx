import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlus, faCircleQuestion, faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [expand, setExpand] = useState(false)
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


    return (
        <div className='sidebar'>
            <div className="top">
                <FontAwesomeIcon onClick={() => setExpand(prev => !prev)} icon={faBars} style={{ cursor: 'pointer', display: 'block', marginLeft: '10px' }} />
                <div onClick={() => newChat()} className="new-chat ">
                    {/* <FontAwesomeIcon icon={faPlus} /> */}
                    <img src={assets.plus_icon} alt="" />

                    {expand ? <p>New Chat</p> : null}
                </div>

                {expand ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0, 18)} ...</p>
                            </div>
                        )
                    })}

                </div>
                    :
                    null}

            </div>
            <div className="bottom">
                <div className="bottom-item  recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {expand ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <FontAwesomeIcon icon={faClockRotateLeft} style={{ cursor: 'pointer' }} />
                    {/* <img src={assets.history_icon} alt="" /> */}
                    {expand ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {expand ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar




