
import {Link} from 'react-router-dom'


import './index.css'

const Success=()=>(
    <div className="successBackground">
        <img src="https://res.cloudinary.com/dprdrg8bk/image/upload/v1695770068/Mobile-login_re9gvv.jpg" 
        className="successLoginImage" alt="success" />
        <h1 className="welcome">Welcome To AdmitKard</h1>
        <p className="welcomeText">In order to provide you with a custom experience, <br/><span className="downSpan">we need to asy you a few questions.</span></p>

        <div className="bottomTexts">
        
        <button class="requiredButtonss">Get Started</button>
        <Link to='/'>
        <button class="requiredBtn">go to login</button>
        </Link>
        <p className="otpTexts">*This will only take 5 min.</p>
        </div>

    </div>
)

export default Success