import './Notification.css'
import {useState,  createContext, useContext } from 'react'

const Notification = ({message , severity}) => {

const notificationStyles = {
    position: 'absolute',
    top: 100,
    right: severity === 'success' ? 5 : 0,
    width: 'auto',
    height: 'auto',
    padding: '10px 20px 10px 20px',
    color: 'white'
}

if(message === '') {
    return null
}

const Config = true ?   
{
    style: notificationStyles,
    className: `${severity === 'success' ? 'Success' : 'Error'}`
} : {}

return(
<div {...Config}>
    {message}
    </div>
)
}

export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const[message, setMessage] = useState('')
    const[severity, setSeverity] = useState('success')

    const setNotification = (sev, msg) => {
        setMessage(msg)
        setSeverity(sev)
        setTimeout(() =>{
            setMessage('')
        }, 5000)
    }

    return(
        <NotificationContext.Provider value={ {setNotification} }>
            <Notification message={message} severity={severity}/>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}