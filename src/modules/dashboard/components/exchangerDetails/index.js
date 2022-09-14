import { formatWalletAddress } from 'src/utils/helpers/wallet.helpers'
import Gun from 'gun'
import Input from 'src/modules/common/components/input'
import Button from 'src/modules/common/components/Button'
import { useEffect, useReducer, useState } from 'react'
import { useContractContext } from 'src/context/ContractContext'
import { useParams } from 'react-router-dom'


const gun = Gun({
    peers: [
        `${process.env.REACT_CHAT_DAPP_SERVER_ENDPOINT}/gun`
    ]
})

// The messages array will hold the chat messages
const currentState = {
    messages: []
}

// This reducer function will edit the messages array
const reducer = (state, message) => {
    return {
        messages: [message, ...state.messages]
    }
}

const ExchangerDetails = ({ address, transactionState }) => {
    const [messageText, setMessageText] = useState('')
    const [state, dispatch] = useReducer(reducer, currentState)
    const { account } = useContractContext()
    const { id: orderId } = useParams()
    useEffect(() => {
        const messagesRef = gun.get(`${orderId}`)
        messagesRef.map().on(m => {
            dispatch({
                sender: m.sender,
                // avatar: m.avatar,
                content: m.content,
                timestamp: m.timestamp
            })
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // remove duplicate messages
    const newMessagesArray = () => {
        const formattedMessages = state.messages.filter((value, index) => {
            const _value = JSON.stringify(value)
            return (
                index ===
                state.messages.findIndex(obj => {
                    return JSON.stringify(obj) === _value
                })
            )
        })

        return formattedMessages
    }

    // save message to gun / send message
    const sendMessage = () => {
        // a reference to the current room
        const messagesRef = gun.get(`${orderId}`)

        // the message object to be sent/saved
        const messageObject = {
            sender: account,
            content: messageText,
            timestamp: Date().substring(16, 21)
        }

        // this function sends/saves the message onto the network
        messagesRef.set(messageObject)

        // clear the text field after message has been sent
        setMessageText('')
    }

    return (
        <div className='bg-white py-8 h-fit  px-6 mt-8 md:mt-0'>
            <h3 className='text-[#192839] capitalize  font-medium text-lg mb-[41px]'>exchanger</h3>

            {
                transactionState >= 1 ? 
                    <div className="mb-[49px] space-y-[26px]">
                        <div className="flex item-center justify-between">
                            <p className="text-sm text-[#5B616E] capitalize">username</p>
                            <p className="text-[#4B4B4B]">{address ? formatWalletAddress(address) : "loading..."}</p>
                        </div>
                        <div className="flex item-center justify-between">
                            <p className="text-sm text-[#5B616E] capitalize">number of Trades</p>
                            <p className="text-[#4B4B4B]">16</p>
                        </div>
                    </div> : 
                    <div className='mb-10'>No one has accepted  your order yet.</div>
            }

            <div className='error h-[200px]'>
                <ul>
                    {newMessagesArray().map((msg, index) => [
                        <li key={index} className=''>
                            <div>
                                {msg.content}
                                <span>{msg.sender}</span>
                            </div>
                        </li>
                    ])}
                </ul>
            </div>
            <div className="">
                <Input
                    onChange={e => setMessageText(e.target.value)}
                    value={messageText}
                    placeholder="type message here"
                    className="mt-5"
                />
                <Button
                    onClick={sendMessage}
                    title="send message"
                    className='ml-auto mt-5 text-sm p-2'

                />
            </div>
            {/* <button className="rounded w-full h-10 text-sm bg-[#F5F5F5] flex items-center justify-center text-[#1C144C]">
                <div className="flex items-center space-x-3">
                    <img src={ChatIcon} className="h-3 w-3" alt=""/>
                    <p>Send A Message</p>
                </div>
            </button> */}

        </div>
    )
}

export default ExchangerDetails