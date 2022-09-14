import { utils } from 'ethers'
import numeral from 'numeral'

const formatUnit = (value) => {
    if(!value) return 
    return parseFloat(utils.formatEther(value))
}

const parseUnit = (value) => utils.parseEther(value.toString(), 'ether')

const convertToNumber = (item) => numeral(item).value()

const formatDate = (value) => {
    const date = new Date(formatUnit(value) * 1000)
    return date.toUTCString()
}
export {
    formatUnit,
    parseUnit,
    convertToNumber,
    formatDate,
}