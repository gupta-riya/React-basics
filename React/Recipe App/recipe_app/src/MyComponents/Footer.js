import React from 'react'

function Footer() {

    const styles = {

        footer_container : {

           
            width:'100%',
            marginTop: "calc(100vh - 300px)",
            height:"100px",
            backgroundColor:'black',
            textAlign:'center',
            fontSize:'20px',
            

        },
        footer_text:{
            color:'white',
            paddingTop:'5vh'
            
        }

    }



    return (
        <div style = {styles.footer_container}>
            <div style={styles.footer_text}>Made By Riya ❤️</div>
        </div>
    )
}

export default Footer
