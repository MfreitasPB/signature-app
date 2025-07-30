/* eslint-disable react/prop-types */
import { useState } from "react"

const SignatureForm = ({onSubmit}) =>{

    const [formState, setFormState] = useState({
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        onSubmit(formState)
    }

    return(
    <div className='form-container'>
        <h1>Create Email Signature</h1>
        <form onSubmit={handleSubmit} className='form-container__form'>
            <div className='form-container__form--item'>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name} 
                    onChange={handleChange} 
                />
            </div>
            <div className='form-container__form--item'>
                <label htmlFor='jobTitle'>Job Title:</label>
                <input
                    type='text'
                    id='jobTitle'
                    name='jobTitle'
                    value={formState.jobTitle}
                    onChange={handleChange}
            />
            </div>
            <div className='form-container__form--item'>
                <label htmlFor='jobTitle'>Office Address:</label>
                <input
                    type='text'
                    id='officeAddress'
                    name='officeAddress'
                    value={formState.officeAddress}
                    onChange={handleChange}
            />
            </div>


            <div className='form-container__form--item'>
                <label htmlFor='directLine'>Office Phone Number:</label>
                <input
                    type='text'
                    id='officeNumbers'
                    name='officeNumbers'
                    value={formState.officeNumbers}
                    onChange={handleChange}
                />
            </div>


            <div className='form-container__form--item'>
                <label htmlFor='directLine'>Direct Line:</label>
                <input
                    type='text'
                    id='directLine'
                    name='directLine'
                    value={formState.directLine}
                    onChange={handleChange}
                />
            </div>
            <div className='form-container__form--item'>
            <label htmlFor='jobTitle'>Extension:</label>
            <input
                type='text'
                id='extension'
                name='extension'
                value={formState.extension}
                onChange={handleChange}
            />
            </div>
            <div className='form-container__form--item'>
            <label htmlFor='jobTitle'>Email: </label>
            <input
                type='email'
                id='email'
                name='emailAddress'
                value={formState.emailAddress}
                onChange={handleChange}
            />
            </div>
            <div className='form-container__form--item'>
            <label htmlFor='jobTitle'>Fax:</label>
            <input
                type='text'
                id='fax'
                name='fax'
                value={formState.fax}
                onChange={handleChange}
            />
            </div>
            <div className='form-container__form--item'>
            <label htmlFor='jobTitle'>Map:</label>
            <input
                type='text'
                id='map'
                name='map'
                value={formState.map}
                onChange={handleChange}
            />
            </div>
            <button type='submit'>
                Generate Signature
            </button>
        </form>
    </div>
    )
}

export default SignatureForm