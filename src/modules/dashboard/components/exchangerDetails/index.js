import { formatWalletAddress } from 'src/utils/helpers/wallet.helpers'
import Input from 'src/modules/common/components/input'
import Button from 'src/modules/common/components/Button'
import { useParams } from 'react-router-dom'
import useChat from 'src/hooks/useChat'
import { useState } from 'react'



const ExchangerDetails = ({ address, transactionState }) => {
    const { id: orderId } = useParams()
    const { messages, sendMessage } = useChat("hello")
    const [userMessage, setUserMessage] = useState('');

    const handleChangeText = (e) => setUserMessage(e.target.value)
    const handleSendMessage = () => {
        sendMessage(userMessage)
        setUserMessage(' ')
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
                    {messages?.map((msg, index) => [
                        <li key={index} className=''>
                            <div>
                                {msg?.body}
                                {/* <span>{msg.sender}</span> */}
                            </div>
                        </li>
                    ])}
                </ul>
            </div>
            <div className="">
                <Input
                    onChange={handleChangeText}
                    value={userMessage}
                    placeholder="type message here"
                    className="mt-5"
                />
                <Button
                    onClick={handleSendMessage}
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