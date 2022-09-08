import NoTransactionIcon from 'src/assests/noTransaction.png'

const RecentTransactions = () => {
    return (
        <div className="bg-white mt-5 rounded-2xl p-6 h-[360px]">
            <h3 className="capitalize font-medium md:text-xl text-[#192839]">recent transactions</h3>
            {
                true ? (
                    <div className='mt-[60px]'>
                        <div className="grid place-items-center">
                        <img src={NoTransactionIcon} alt="" className="mb-4"/>
                        <p className="text-[#5B616E] text-xs text-center">You have not performed any transaction </p>
                        </div>
                    </div>
                ) : (
                    <div>

                    </div>)
            }
        </div>
    )
}

export default RecentTransactions