import './Sign.css'
import { useNavigate } from 'react-router-dom';
export const Signupform = () => {

    const navigate=useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/Login")
        alert("Form submitted!");
    }

    return (
        <div className='main'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="fname" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>

                <div className='form-group'>
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input type="password" id="repeat-password" name="repeat-password" required />
                </div>

                <div className='form-group'>
                    <span>Gender</span>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>
                </div>

                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
        </div>
    );
}
export default Signupform;







/*
import  './Sign.css'

export const Signup = () => {
    const handleSubmit = (event) => {
        
        event.preventDefault();
        
       
        alert("Form submitted!");
    }

    return (
        <div className='main'>
            <form>
                <div className='form-group'>
                    <label htmlFor="label1">First Name</label>
                    <input type="text" name="fname"></input>
                </div>

                <div className='form-group'>
                    <label htmlFor="label1">LastName</label>
                    <input type="text" name="lname"></input>
                </div>

                <div className='form-group'>
                    <label htmlFor="label1">Email</label>
                    <input type="email" name="email"></input>
                </div>

                <div className='form-group'>
                    <label htmlFor="label1">Password</label>
                    <input type="password" name="password" required></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="label1">Repeat Password</label>
                    <input type="Repeatpassword" name=" Repeat password"></input>
                </div>
                <div className='form-group'>
                    <label htmlFor="label1">Male</label>
                    <input type="radio" name="answer"></input>
                    <label htmlFor="label1">Female</label>
                    <input type="radio" name="answer"></input>
                  
                </div>


            </form>

            <div>
                <button type="submit">Signup</button>
            </div>
        </div>
    );
} */