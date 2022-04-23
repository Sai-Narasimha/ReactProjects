export const Footer = ()=>{
    const logos = [
        "https://cdn-icons-png.flaticon.com/512/174/174855.png",
        "https://cdn-icons-png.flaticon.com/128/174/174848.png",
        "https://cdn-icons-png.flaticon.com/128/174/174883.png",
        "https://cdn-icons-png.flaticon.com/128/174/174876.png"
    ]
    return (
        <>
        
        <div style = {{
            border  : "1px solid black",
            width : "100%",
            height : "100",
            marginTop : "20px"
            
        }}>
            <h1>Footer</h1>
        <p>FAQs</p>
        <p>About us</p>
        <p>Contact us</p>
            <div style = {{
                    display : "flex",
                    gap : "20px",
                    justifyContent : "center"
                }}>

            {logos.map((ele,i)=>(
                <div key = {i}><img src={ele} style = {{
                    width : "40px",
                    height : "40px"
                }}/></div>
            ))}
            
            </div>
        </div>
        
        </>
    )
}