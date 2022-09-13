import { utils } from 'ethers'
import numeral from 'numeral'

const formatUnit = (value) => parseFloat(utils.formatEther(value))

const parseUnit = (value) => utils.parseEther(value.toString(), 'ether')

const convertToNumber = (item) => numeral(item).value()

export {
    formatUnit,
    parseUnit,
    convertToNumber
}