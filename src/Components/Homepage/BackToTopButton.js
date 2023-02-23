import React, { useEffect, useState } from 'react'

const BackToTopButton = () => {
    const [BackToTopButton , SetBacktoTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                SetBacktoTopButton(true)
            }else{
                SetBacktoTopButton(false)
            }
        })
    },[])
    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behaviour: "smooth"
        })
    }
  return (
    <div>
       {BackToTopButton && (
        <button style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height:"50px",
            width:"50px",
            // fontSize:"50px",
            // color:"white",
            padding: "15px",
            background: "#333",
            borderRadius:"100%",
            textAlign:"center",
            alignItems: "center",
            justifyContent:"center"
        }}
        onClick={scrollUp}>
            <img src="https://i2.sdlcdn.com/img/ic_back_to_top.png" alt="" />
        </button>
       )}
    </div>
  )
}

export default BackToTopButton