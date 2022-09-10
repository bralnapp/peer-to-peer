import { Link, useNavigate } from 'react-router-dom'
import NoTransactionIcon from 'src/assests/noTransaction.png'
import Status from 'src/modules/dashboard/components/status'
import { recentTransctions } from 'src/utils/data'

const RecentTransactions = () => {
    const navigate = useNavigate();
    const handleNavigation = (to, data) => {
        navigate(to, {
            state: data
        })
    }
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
                                recentTransctions.map((item, index) => (
                                    <div onClick={() => handleNavigation(`/exchange/${item.sender}`, item)} key={index} className="grid grid-cols-4 items-center py-[10px] w-full border-b border-[#F0F0F0] text-[#5B616E] text-sm cursor-pointer leading-[18px]">
                                        <div>{item.transferTo}</div>
                                        <div className='lg:text-center'>{item.amount}</div>
                                        <div>{item.date}</div>
                                        <div className="lg:mx-auto">
                                            <Status status={item.status} />
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