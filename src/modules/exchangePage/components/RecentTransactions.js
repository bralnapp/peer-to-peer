import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import NoTransactionIcon from 'src/assests/noTransaction.png'
import { useContractContext } from 'src/context/ContractContext';
import Status from 'src/modules/dashboard/components/status'
import { orderState } from 'src/utils/constants';
import { initRadenuContract } from 'src/utils/helpers/contract.helpers';
import { formatDate, formatUnit } from 'src/utils/helpers/format.helper';

const RecentTransactions = () => {
    const [orderList, setOrderList] = useState([])
    const { account } = useContractContext()
    const navigate = useNavigate();
    const handleNavigation = (to) => navigate(to)
    const getOrders = async () => {
        try {
            const response = await initRadenuContract()
            const contract = response.contract
            const totalOrder = await contract.getTotalOrder()
            setOrderList(totalOrder)
        } catch (error) {
            toast.error('Something went wrong')
            console.log({ error })
        }
    }

    const handleSeeTransaction = (orderId) => {
        const _id = formatUnit(orderId) * (10 ** 18)
        handleNavigation(`/exchange/${_id}`)
    }

    const recentTransactions = orderList.filter((item) => item.sender.toLowerCase() === account.toLowerCase())
    console.log(orderList)
    console.log(formatUnit(
        {
            "type": "BigNumber",
            "hex": "0x15"
        }
    ))

    useEffect(() => {
        getOrders()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account]);
    return (
        <div className="bg-white mt-5 rounded-2xl p-6 h-[360px]">
            <h3 className="capitalize font-medium md:text-xl text-[#192839]">recent transactions</h3>
            {
                false ? (
                    // no transaction
                    <div className='mt-[60px]'>
                        <div className="grid place-items-center">
                            <img src={NoTransactionIcon} alt="" className="mb-4" />
                            <p className="text-[#5B616E] text-xs text-center">You have not performed any transaction </p>
                        </div>
                    </div>
                ) : (
                    // list of transactions
                    <div className='mt-6'>
                        {/* Table heading */}
                        <div className="grid grid-cols-4 capitalize pb-[14px] w-full border-b border-[#F0F0F0] text-[#5B616E] text-sm leading-[18px]">
                            <div className="">reciepient</div>
                            <div className="lg:text-center">amount</div>
                            {/* <div className="">fee</div> */}
                            <div className="">date</div>
                            <div className="lg:w-[70px] lg:mx-auto">status</div>
                        </div>

                        {/* Table body */}
                        <div className="h-[215px] text-[#1C144C] overflow-auto">
                            {
                                recentTransactions?.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleSeeTransaction(item.orderId)}
                                        // onClick={() => handleNavigation(`/exchange/${formatUnit(item.orderId) * (10 ** 18)}`)}
                                        className="grid grid-cols-4 items-center py-[10px] w-full border-b border-[#F0F0F0] text-[#5B616E] text-sm cursor-pointer leading-[18px]">
                                        <div>{item.accountName}</div>
                                        <div className='lg:text-center'>{`$${formatUnit(item.amount)}`}</div>
                                        <div>{formatDate(item?.timeInitiated)}</div>
                                        <div className="lg:mx-auto">
                                            <Status status={orderState[item?.state]} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default RecentTransactions