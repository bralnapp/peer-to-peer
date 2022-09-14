import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { orderState } from 'src/utils/constants';
import { initRadenuContract } from 'src/utils/helpers/contract.helpers';
import { formatDate, formatUnit } from 'src/utils/helpers/format.helper';
import Button from '../common/components/Button';
import CopyToClipboard from '../common/components/copyToClipboard';
import ConfirmReceive from '../common/modal/ConfirmReceive';
import ExchangerDetails from '../dashboard/components/exchangerDetails';
import DashboadLayout from '../dashboard/components/layout'
import Status from '../dashboard/components/status';

const ExchangeTransactionPage = () => {
    const { id } = useParams()

    const [showConfirmModal, setShowConfirmModal] = useState(false)

    console.log(typeof Number(id))

    const [orderData, setOrderData] = useState([])

    const getOrderById = async () => {
        console.log('getOrder', id)
        try {
            const response = await initRadenuContract()
            const contract = response.contract
            const data = await contract.order(Number(id))
            console.log(data)
            setOrderData(data)
        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getOrderById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const accountDetailsText = `Bank name: ${orderData?.bankName} \nAccount name: ${orderData?.transferTo} \nAccount number: ${orderData.accountNumber}`

    const handleReleasePayment = () => {
        setShowConfirmModal(true)
    }

    return (
        <DashboadLayout>
            <>
                <ConfirmReceive
                    showConfirmModal={showConfirmModal}
                    setShowConfirmModal={setShowConfirmModal}
                    orderId={id}
                />
                <div className="layout-container md:grid md:grid-cols-2 md:gap-x-8">
                    <div className="bg-white p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className='text-[#192839] capitalize  font-medium text-lg'>transaction details</h3>
                            <CopyToClipboard text={accountDetailsText} />
                        </div>
                        {orderData.length > 0 ? <div className="space-y-4 mb-12">
                            <div className="flex items-center capitalize text-sm justify-between">
                                <p className="text-[#5B616E]">Transfer To</p>
                                <p className="text-[#1C144C]">{orderData?.accountName}</p>
                            </div>
                            <div className="flex items-center capitalize text-sm justify-between">
                                <p className="text-[#5B616E]">Account Details</p>
                                <p className="text-[#1C144C]">{formatUnit(orderData?.accountNumber)}</p>
                            </div>
                            <div className="flex items-center capitalize text-sm justify-between">
                                <p className="text-[#5B616E]">Bank</p>
                                <p className="text-[#1C144C]">{(orderData?.bankName)}</p>
                            </div>
                            <div className="flex items-center capitalize text-sm justify-between">
                                <p className="text-[#5B616E]">Amount</p>
                                <p className="text-[#1C144C]">${formatUnit(orderData?.amount)}</p>
                            </div>
                            <div className="flex items-center capitalize text-sm justify-between">
                                <p className="text-[#5B616E]">Rate</p>
                                <p className="text-[#1C144C]">${formatUnit(orderData?.exchangeRate)}</p>
                            </div>
                            <div className="flex items-center capitalize text-sm justify-between">
                                <p className="text-[#5B616E]">Fee</p>
                                <p className="text-[#1C144C]">$5</p>
                            </div>
                            <div className="flex items-center capitalize text-sm justify-between">
                                <p className="text-[#5B616E]">Date</p>
                                <p className="text-[#1C144C]">{formatDate(orderData?.timeInitiated)}</p>
                            </div>
                            <div className="flex items-center capitalize text-sm justify-between">
                                <p className="text-[#5B616E]">status</p>
                                <Status status={orderState[orderData?.state]} />
                            </div>
                        </div> : null
                        }
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
                    <ExchangerDetails address={orderData?.receiver} />
                </div>
            </>
        </DashboadLayout >
    )
}

export default ExchangeTransactionPage