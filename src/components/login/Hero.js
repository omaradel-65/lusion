import React from "react"


const Hero = ({handleLogout}) =>{

    return(
<div>

<button className="signinbtn" onClick={handleLogout}>
logout
</button>
</div>
    )

}
export default Hero