import { useLocation } from "react-router-dom";
import Button from "../common/components/Button";
import CopyToClipboard from "../common/components/copyToClipboard"
import ExchangerDetails from "../dashboard/components/exchangerDetails";
import DashboadLayout from "../dashboard/components/layout"
import Status from "../dashboard/components/status";
import Countdown from 'react-countdown';
import ArrowLeft from "src/assests/arrow-left.png"
import { useState } from "react";
import ConfirmTransferModal from "../common/modal/ConfirmTransferModal";

const OrderTransactionPage = () => {
    const { state } = useLocation();
    const [showConfirmModal, setShowConfirmModal] = useState(false)

    const accountDetailsText = `Bank name: ${state?.bankName} \nAccount name: ${state?.transferTo} \nAccount number: ${state.accountNumber}`
    const transactionDetails = [
        {
            name: 'Transfer to',
            value: `${state?.transferTo}`
        },
        {
            name: 'account number',
            value: `${state?.accountNumber}`
        },
        {
            name: 'bank',
            value: `${state?.bankName}`
        },
        {
            name: 'Amount',
            value: `${state?.amount}`
        },
        {
            name: 'Rate',
            value: '₦705/$1'
        },
        {
            name: 'fee',
            value: '$5'
        },
        {
            name: 'date',
            value: `${state?.date}`
        },
        {
            name: 'status',
            value: `${state?.status}`
        },

    ]

    const handleReleasePayment = () => {
        setShowConfirmModal(true)
    }
    return (
        <DashboadLayout>
            <>
                <ConfirmTransferModal
                    showConfirmModal={showConfirmModal}
                    setShowConfirmModal={setShowConfirmModal}
                />
                <div className="layout-container md:grid md:grid-cols-2 md:gap-x-8">
                    <div className="bg-white p-6">
                        <a href="/orders" className="mb-[29px] inline-block">
                            <img src={ArrowLeft} alt="" />
                        </a>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className='text-[#192839] capitalize  font-medium text-lg'>recepient details</h3>
                            <CopyToClipboard text={accountDetailsText} />
                        </div>
                        <div className="flex space-x-2 text-[#737374] text-[15px] leading-[21px]">
                            <p className="ml-auto capitalize mb-6">
                                time remaining:
                            </p>
                            <Countdown date={Date.now() + (45 * 60000)} renderer={props => <p className="text-[#9B0C14] text-[15px] leading-[21px]">{props.minutes} : {props.seconds} </p>} />
                        </div>
                        <div className="space-y-4 mb-12">
                            {
                                transactionDetails.map((item, index) => (
                                    <div key={index} className="flex items-center capitalize text-sm justify-between">
                                        <p className="text-[#5B616E]">{item?.name}</p>
                                        {
                                            item?.name?.toLowerCase() === 'status' ? <Status status={item?.value} /> : <p className="text-[#1C144C]">{item?.value}</p>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className="space-y-4">
                            <Button
                                onClick={handleReleasePayment}
                                title="confirm payment completion"
                                className="w-full h-10 text-sm md:text-base md:leading-[18px]"
                            />
                        </div>
                    </div>

                    <ExchangerDetails address={state.sender} />
                </div>
            </>
        </DashboadLayout>
    )
}

export default OrderTransactionPage