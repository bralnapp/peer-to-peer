const formatWalletAddress = (address) =>
    `${address.slice(0, 6)}...${address.slice(38)}`;


export {
    formatWalletAddress
}