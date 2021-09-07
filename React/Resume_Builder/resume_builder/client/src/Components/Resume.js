
import React,{Component} from 'react'
import Profile from './Profile'

export default class Resume extends Component{

    state = {
        step: 1,
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        facebook: '',
        instagram: ''
     }

     nextStep = () => {
        const {step} = this.state;
        this.setState ({
            step: step + 1,
        });
    };
    
    prevStep = () => {
        const {step} = this.state;
        this.setState ({
          step: step - 1,
        });
    };
    
    handleChange = ({target: {value, name}}) => {
        this.setState ({[name]: value});
    };


    render(){

        const {
            firstname,
            lastname,
            email,
            phone,
            github,
            linkedin,
            facebook,
            instagram
        }  = this.state;


        const values = {
            firstname,
            lastname,
            email,
            phone,
            github,
            linkedin,
            facebook,
            instagram
        }

        return(

            <div className = "App mt-3">
                <div className = "container col-lg-10 mx-auto text-center">
                    <Profile 
                        nextStep={this.nextStep}
                        handleChange= {this.handleChange}
                        values={values}/>
                </div>
            </div>
        )



    }

}