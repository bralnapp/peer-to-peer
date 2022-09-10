
const Status = ({status}) => {
  return (
    <div className={`flex items-center justify-center w-[70px] text-xs h-7 rounded-lg capitalize ${status.toLowerCase() === 'complete' ? 'complete' : status.toLowerCase() === 'pending' ? 'pending' : 'cancelled' } `}>{status}</div>
  )
}

export default Status