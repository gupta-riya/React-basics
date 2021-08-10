import React,{Component} from 'react'
import CityCard from './CityCard'
import styles from './tour.module.css'
import {tourData} from './tourData'


export default class Tour extends Component
{
    state = {
        tours : tourData
    }
    removeTour = id => {
        console.log(id);
    
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
          tours: sortedTours
        });
      };
      render() {
        const { tours } = this.state;
    
        return (
          <div className={styles.container_block}>
            {tours.map(tour => (
              <CityCard key={tour.id} tour={tour} removeTour={this.removeTour} />
            ))}
          </div>
        );
      }

}
