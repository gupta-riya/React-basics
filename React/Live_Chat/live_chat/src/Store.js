import React from 'react'
import io from 'socket.io-client'

export const ctx = React.createContext();

/*

    {
        fron: 'user'
        msg: 'hi'
        topic : 'general'
    }


    state {
        topic1: [
            {msg}, {msg}, {msg}
        ]
        topic2: [

        ]
    }

*/

const initState= {

    general : [
        {from:'naruto',msg:'hello'},
        {from:'sakura',msg:'hello'},
        {from:'sauske',msg:'hello'}
    ],
    topic2 : [
        {from:'lee',msg:'heyyy'},
        {from:'hinata',msg:'whats up'},
        {from:'kakashi',msg:'whats up'}
    ]

}



function reducer(state,action)
{
    const {from,msg,topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return{
                ...state,
                [topic]:[
                    ...state[topic],
                    {
                        from ,
                        msg 
                    }
                ]
            }
        default:
            return state
    }
}


let socket;

function sendChatAction(value){

    socket.emit('chat message',value);
}


export default function Store(props){

    const [allChats,dispatch] = React.useReducer(reducer,initState);

    if(!socket)
    {
        socket = io(':3001');
        socket.on('chat message',function(msg){
            dispatch({type:'RECEIVE_MESSAGE' , payload:msg})
        })
    }

    const user = 'shinobi'+Math.random(100).toFixed(2);

    return (

        <ctx.Provider value={{allChats,sendChatAction, user}}>
            {props.children}
        </ctx.Provider>
    )



}