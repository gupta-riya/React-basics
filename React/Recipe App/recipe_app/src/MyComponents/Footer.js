import React from 'react'

function Footer() {

    const styles = {

        footer_container : {

            marginBottom : '0px',
            width:'100%',
            height:'10vh',
            backgroundColor:'black',
            textAlign:'center',
            fontSize:'20px',
            

        },
        footer_text:{
            color:'white',
            paddingTop: '1vh'
            
        }

    }



    return (
        <div style = {styles.footer_container}>
            <div style={styles.footer_text}>Made By Riya ❤️</div>
        </div>
    )
}

export default Footer
