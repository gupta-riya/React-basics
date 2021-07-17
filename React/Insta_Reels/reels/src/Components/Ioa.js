import React,{useState,useEffect} from 'react'
import vid1 from './Videos/dance.mp4';
import vid2 from './Videos/water.mp4';
import vid3 from './Videos/sunset.mp4';
import vid4 from './Videos/snow.mp4';
import Video from './Video';

function Ioa() {

    const[sources,setSources] = useState([{url:vid1},{url:vid2},{url:vid3},{url:vid4}])
    const callback = (entries)=>{
        entries.forEach(element => {
            // console.log(element);
            // video play property is an async function
            // so we initialy call play for all the videos
            // but will pause if its not under the view port
            let ele = element.target.childNodes[0];
            ele.play().then(()=>{
                if(!ele.paused && !element.isIntersecting)
                    ele.pause();
            })
        });
    }


    const observer = new IntersectionObserver(callback,{
        thershold:0.9
    })

    // we want videos to get loaded as soon as we enter the page
    // we are applying effect to video class as it is easy to recognize
    useEffect(()=>{
        
        let elements = document.querySelectorAll(".videos");
        elements.forEach(ele=>{
            observer.observe(ele);
        })

    },[])


    return (
        <div className = 'video-container'>
            <div className = 'videos'>
                <Video source={sources[0].url}/>
            </div>
            <div className = 'videos'>
                <Video source={sources[1].url}/>
            </div>
            <div className = 'videos'>
                <Video source={sources[2].url}/>
            </div>
            <div className = 'videos'>
                <Video source={sources[3].url}/>
            </div>            
        </div>
    )
}
export default Ioa