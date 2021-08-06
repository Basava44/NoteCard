const initState = {
    data : [
        {
            title:"Build Project",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, expedita facere ex deserunt ut sit sapiente aliquid! Porro, velit quos?",
            category:"Work"
        },
        {
            title:"Do Excercise",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, expedita facere ex deserunt ut sit sapiente aliquid! Porro, velit quos?",
            category:"Reminders"
        },
        {
            title:"Deveop Skills",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, expedita facere ex deserunt ut sit sapiente aliquid! Porro, velit quos?",
            category:"Money"
        }
    ]
}

const rootReducer = (state=initState, action) => {
    
    if(action.type == "EDIT_DATA"){
        const newnotes = initState.data.filter(note => note.title!=action.notes);
        initState.data = newnotes;
        return initState;
    }

    if(action.type == "ADD_DATA"){
        const data = state.data;
        data.push(action.notes);
        console.log(data);
        return{
            data
        }
        

    }

    return state;
}

export default rootReducer;