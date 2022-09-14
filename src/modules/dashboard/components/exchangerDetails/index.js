import { formatWalletAddress } from 'src/utils/helpers/wallet.helpers'

import ChatIcon from 'src/assests/chat.png'

const ExchangerDetails = ({ address }) => {
    return (
        <div className='bg-white py-8 h-fit  px-6 mt-8 md:mt-0'>
            <h3 className='text-[#192839] capitalize  font-medium text-lg mb-[41px]'>exchanger</h3>

            <div className="mb-[49px] space-y-[26px]">
                <div className="flex item-center justify-between">
                    <p className="text-sm text-[#5B616E] capitalize">username</p>
                    <p className="text-[#4B4B4B]">{address ? formatWalletAddress(address): "loading..."}</p>
                </div>
                <div className="flex item-center justify-between">
                    <p className="text-sm text-[#5B616E] capitalize">number of Trades</p>
                    <p className="text-[#4B4B4B]">16</p>
                </div>
            </div>

            <button className="rounded w-full h-10 text-sm bg-[#F5F5F5] flex items-center justify-center text-[#1C144C]">
                <div className="flex items-center space-x-3">
                    <img src={ChatIcon} className="h-3 w-3" alt=""/>
                    <p>Send A Message</p>
                </div>
            </button>

        </div>
    )
}

export default ExchangerDetails