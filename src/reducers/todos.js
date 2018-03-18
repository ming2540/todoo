const initial = [
    { id: 1, text: 'foo' , completed : false , removed : false},
    { id: 2, text: 'bar' , completed : false , removed : false}
];
const todos = (state = initial, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {
                id: action.id,
                text: action.text
            }]
            break
        case 'TOGGLE_TODO' : 
            return state.map(t=> 
                (t.id === action.id)?   
                    {...t , completed : ! t.completed}
                    : t
            )
            break;
        case 'REMOVE_TODO' :
            console.log("removing...")
            return state.map(t=>
                (t.id === action.id)?
                    {...t , removed : ! t.removed}
                    :t
            )

        default:
            return state
    }
}
export default todos;
