
import React, { Component } from 'react'
import Profile from './Profile'
import Education from './Education'
import Project from './Project'
import Experience from './Experience'
import Extras from './Extras'

export default class Resume extends Component {

    state = {
        step: 1,

        //profile
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        github: '',
        linkedin: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',

        //education
        college: '',
        startyear1: '',
        endyear1: '',
        qualification1: '',
        description1: '',
        school: '',
        startyear2: '',
        endyear2: '',
        qualification2: '',
        description2: '',

        //project
        title1: '',
        link1: '',
        pdescription1: '',
        title2: '',
        link2: '',
        pdescription2: '',
        title3: '',
        link3: '',
        pdescription3: '',


        //experience
        institute1: '',
        position1: '',
        duration1: '',
        edescription1: '',
        institute2: '',
        position2: '',
        duration2: '',
        edescription2: '',

        //extras
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        skill6: '',

        interest1: '',
        interest2: '',
        interest3: '',
        interest4: '',
        interest5: '',
        interest6: '',



    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1,
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
        });
    };

    handleChange = ({ target: { value, name } }) => {
        this.setState({ [name]: value });
    };


    render() {

        const {
            firstname,
            lastname,
            email,
            phone,
            github,
            linkedin,
            facebook,
            instagram,
            twitter,
            website,

            college,
            startyear1,
            endyear1,
            qualification1,
            description1,
            school,
            startyear2,
            endyear2,
            qualification2,
            description2,


            title1,
            link1,
            pdescription1,
            title2,
            link2,
            pdescription2,
            title3,
            link3,
            pdescription3,


            //experience
            institute1,
            position1,
            duration1,
            edescription1,
            institute2,
            position2,
            duration2,
            edescription2,

            //extras
            skill1,
            skill2,
            skill3,
            skill4,
            skill5,
            skill6,

            interest1,
            interest2,
            interest3,
            interest4,
            interest5,
            interest6
        } = this.state;


        const values = {
            firstname,
            lastname,
            email,
            phone,
            github,
            linkedin,
            facebook,
            instagram,
            twitter,
            website,
            college,
            startyear1,
            endyear1,
            qualification1,
            description1,
            school,
            startyear2,
            endyear2,
            qualification2,
            description2,


            title1,
            link1,
            pdescription1,
            title2,
            link2,
            pdescription2,
            title3,
            link3,
            pdescription3,


            //experience
            institute1,
            position1,
            duration1,
            edescription1,
            institute2,
            position2,
            duration2,
            edescription2,

            //extras
            skill1,
            skill2,
            skill3,
            skill4,
            skill5,
            skill6,

            interest1,
            interest2,
            interest3,
            interest4,
            interest5,
            interest6
        }


        switch (this.state.step) {
            case 1: return (
                <div className="App mt-3">
                    <div className="container col-lg-10 mx-auto text-center">
                        <Profile
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values} />
                    </div>
                </div>
            )

            case 2: return (
                <div className="App mt-3">
                    <div className="container col-lg-10 mx-auto text-center">
                        <Education
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values} />
                    </div>
                </div>
            )

            case 3: return (
                <div className="App mt-3">
                    <div className="container col-lg-10 mx-auto text-center">
                        <Project
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values} />
                    </div>
                </div>
            )

            case 4: return (
                <div className="App mt-3">
                    <div className="container col-lg-10 mx-auto text-center">
                        <Experience
                            prevStep={this.prevStep}
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values} />
                    </div>
                </div>
            )

            case 5: return (
                <div className="App mt-3">
                    <div className="container col-lg-10 mx-auto text-center">
                        <Extras
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values} />
                    </div>
                </div>
            )

            default: return (
                <div></div>
            )
        }






    }

}