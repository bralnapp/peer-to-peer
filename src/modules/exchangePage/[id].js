import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Button from '../common/components/Button';
import CopyToClipboard from '../common/components/copyToClipboard';
import ConfirmTransferModal from '../common/modal/ConfirmTransferModal';
import ExchangerDetails from '../dashboard/components/exchangerDetails';
import DashboadLayout from '../dashboard/components/layout'
import Status from '../dashboard/components/status';

const ExchangeTransactionPage = () => {
    const { state } = useLocation();

    const [showConfirmModal, setShowConfirmModal] = useState(false)

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

    const accountDetailsText = `Bank name: ${state?.bankName} \nAccount name: ${state?.transferTo} \nAccount number: ${state.accountNumber}`

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
                        <div className="flex items-center justify-between mb-6">
                            <h3 className='text-[#192839] capitalize  font-medium text-lg'>transaction details</h3>
                            <CopyToClipboard text={accountDetailsText} />
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
                                title="release payment"
                                className="w-full h-10 text-base leading-[18px]"
                            />
                            <button className='w-full h-10 text-base leading-[18px] bg-[#F5F5F5] text-[#1C144C] btn  disabled:bg-gray-700'>
                                report
                            </button>
                        </div>
                    </div>

                    <ExchangerDetails address={state.sender} />
                </div>
            </>
        </DashboadLayout>
    )
}

export default ExchangeTransactionPage