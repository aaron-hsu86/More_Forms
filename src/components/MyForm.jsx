import React, {useState} from 'react'

const MyForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const [firstErr, setFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passErr, setPassErr] = useState("")
    const [confirmPassErr, setConfirmPassErr] = useState("")

    const submitForm = e => {
        e.preventDefault();

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    }


    const handleChange = e => {
        const {name, value} = e.target

        setFormData( (currentData) => ({...currentData, [name]: value}))

        if (name == 'firstName' && value.length < 1){
            setFirstErr("")
        } else if (name == 'firstName' && value.length < 2){
            setFirstErr("First Name mubt be at least 2 characters!")
        } else if (name == 'firstName'){
            setFirstErr("")
        }

        if (name == 'lastName' && value.length < 1){
            setLastErr("")
        } else if (name == 'lastName' && value.length < 2){
            setLastErr("Last Name mubt be at least 2 characters!")
        } else if (name == 'lastName'){
            setLastErr("")
        }
        
        if (name == 'email' && value.length < 1){
            setEmailErr("")
        } else if (name == 'email' && value.length < 5){
            setEmailErr("Email must be at least 5 characters!")
        } else if (name == 'email'){
            setEmailErr("")
        }
        
        if (name == 'password' && value.length < 1){
            setPassErr("")
        } else if (name == 'password' && value.length < 8){
            setPassErr("Password must be at least 8 characters!")
        } else if (name == 'password'){
            setPassErr("")
        }
        
        if (name == 'confirmPassword' && value.length < 1){
            setConfirmPassErr("")
        } else if (name == 'confirmPassword' && value != formData.password){
            setConfirmPassErr("Password does not match!")
        } else if (name == 'confirmPassword'){
            setConfirmPassErr("")
        }


    }

    const errStyle = {
        margin: 0,
        padding: 0,
        color: "red",
        fontWeight: "bold"
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <fieldset>
                    <div>
                        <label>First Name:</label>
                        <input type='text' onChange={handleChange} name='firstName' value={formData.firstName}/>
                        <p style={errStyle}>{firstErr}</p>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type='text' onChange={handleChange} name='lastName' value={formData.lastName}/>
                        <p style={errStyle}>{lastErr}</p>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type='text' onChange={handleChange} name='email' value={formData.email}/>
                        <p style={errStyle}>{emailErr}</p>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='text' onChange={handleChange} name='password' value={formData.password}/>
                        <p style={errStyle}>{passErr}</p>
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type='text' onChange={handleChange} name='confirmPassword' value={formData.confirmPassword}/>
                        <p style={errStyle}>{confirmPassErr}</p>
                    </div>
                </fieldset>
                <p>Your form Data</p>
                <div>
                    <p>First Name: {formData.firstName}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                    <p>Confirm Password: {formData.confirmPassword}</p>
                </div>

            </form>
        </>
    )
}

export default MyForm