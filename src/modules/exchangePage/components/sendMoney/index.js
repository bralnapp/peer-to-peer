import { useState } from "react";
import StepOne from "./step1";
import StepTwo from "./step2";


const SendMoney = () => {

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
            setFormData={setFormData}
            formData={formData}
            initialbankDetails={initialbankDetails}
        />
}

export default SendMoney