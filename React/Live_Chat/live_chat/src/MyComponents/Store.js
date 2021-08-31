import React from 'react' 

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

export default function Store(props){


    const reducerHook = React.useReducer(reducer,initState);

    return (

        <ctx.Provider value={reducerHook}>
            {props.children}
        </ctx.Provider>
    )



}