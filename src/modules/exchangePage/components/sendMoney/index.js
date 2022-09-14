import { useState } from "react";
import StepOne from "./step1";
import StepTwo from "./step2";


const SendMoney = ({ setBalance }) => {

    const initialbankDetails = {
        amount: '',
        country: 'Nigeria',
        bankName: '',
        accountNumber: '',
        accountName: '',
        isTermsAccepted: false
    }
    const [formData, setFormData] = useState(initialbankDetails);

    return !formData.amount ?
        <StepOne
            setFormData={setFormData}
        /> :
        <StepTwo
            setBalance={setBalance}
            setFormData={setFormData}
            formData={formData}
            initialbankDetails={initialbankDetails}
        />
}

export default SendMoney