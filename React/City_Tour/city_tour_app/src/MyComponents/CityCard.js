import React,{Component} from 'react'
import './card.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 



export default class CityCard extends Component{

    state = {
        showInfo:false
    }

    handleInfo = () => {
        this.setState({
            showInfo : !this.state.showInfo
        });
    };

    render()
    {
        const {id,name,desc,info,image} = this.props.tour;
        // console.log(this.props.tour);
        // console.log(image);
       
        
        const {removeTour} = this.props;
        return(
            
            <div className="tour">
                <div className="img-container">
                <img src= {"./Images/" + image + ".jpg"} alt="" />
                
                <span
                    className="close-btn"
                    onClick={() => {
                    removeTour(id);
                    }}
                >
                <i className="fas fa-window-close" />
                </span>
                </div>
                <div className="tour-info">
                <h3>{name}</h3>
                <h4>{desc}</h4>
                <h5>
                    info{" "}
                    <span onClick={this.handleInfo}>
                    <i className="fas fa-caret-square-down" />
                    </span>
                </h5>
                {this.state.showInfo && <p>{info}</p>}
                </div>
            </div>
        )
   
    }




}