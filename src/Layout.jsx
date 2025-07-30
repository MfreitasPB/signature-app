import {  useState  } from 'react'

import SignatureForm from './SignatureForm'
import SignatureInfo from './SignatureInfo'
import Signature from './Signature'

const Layout = () =>{

    const [formData, setFormData] = useState({
        name: '',
        jobTitle: '',
        officeAddress: '',
        officeNumbers: '',
        directLine: '',
        extension: '',
        emailAddress: '',
        fax: '',
        map:'',
    })
 
    const handleFormSubmit = (data) => {
        setFormData(data)
    }



    return(
        <div className='signature-container'>
            <div className='signature-container__signature-form'>
                <SignatureForm onSubmit={handleFormSubmit} />
                <SignatureInfo />
            </div>
            <div className='signature-container__signature'>
                <Signature data={formData} />
            </div>
        </div>
    )
}

export default Layout