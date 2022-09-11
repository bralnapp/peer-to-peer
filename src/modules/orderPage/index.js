import { useState } from 'react'
import { orders } from 'src/utils/data'
import { formatWalletAddress } from 'src/utils/helpers/wallet.helpers'
import Button from '../common/components/Button'
import AcceptOrderRiskModal from '../common/modal/AcceptOrderRiskModal'
import DashboadLayout from '../dashboard/components/layout'

const OrderPage = () => {

    const [showRiskModal, setShowRiskModal] = useState(false)
    const [transferData, setTransferData] = useState();
    const handleShowRiskModal = (item) => {
        setShowRiskModal(true)
        setTransferData(item)
    }

    return (
        <DashboadLayout>
            <>
                <AcceptOrderRiskModal
                    showRiskModal={showRiskModal}
                    setShowRiskModal={setShowRiskModal}
                    transferData={transferData}
                />
                <div className="bg-white layout-container p-6">
                    <h1 className='text-[#192839] font-bold md:text-2xl md:leading-[33px] capitalize mb-4'>open orders</h1>

                    {/* Table heading */}
                    <div className="overflow-x-auto">
                        <div className="w-[450px] md:w-full">
                            <div className="grid grid-cols-5  text-[#848E9C] capitalize text-base leading-[18px] py-[15px] border-b border-[#F0F0F0] lg:w-full">
                                <div>Sender</div>
                                <div>amount($)</div>
                                <div>Amount(₦)</div>
                                <div>bank name</div>
                                <div>Trade</div>
                            </div>
                            {/* table body */}
                            <div className="h-[400px] overflow-y-auto">
                                {
                                    orders.map((item, index) => (
                                        <div key={index} className="grid grid-cols-5 text-[#323131] capitalize text-xs md:text-base md:leading-[18px] py-[15px] border-b border-[#F0F0F0] lg:w-full items-center">
                                            <div className='text-[#2F2280] text-xs md:text-base w-[90%] overflow-hidden text-clip text-ellipsis">'>{formatWalletAddress(item.sender)}</div>
                                            <div className='text-center md:text-left'>{item.amount}</div>
                                            <div className="text-center md:text-left">{item.nairaEquivalent}</div>
                                            <div className='md:w-[90%]'>{item.bankName}</div>
                                            <Button
                                                onClick={()=>handleShowRiskModal(item)}
                                                title="accept order"
                                                className="w-[126px] h-[31px] text-[11px] leading-[15px]"
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </>
        </DashboadLayout>
    )
}

export default OrderPage