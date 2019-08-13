let myState = {
    myNumber : null,
    myContactsList : [],
    myConversation : {},
}
export default (state=myState,action) => {
    switch (action.type){
        case "SET_MY_NUMBER":
            return Object.assign({},state ,{myNumber : action.payload});
        case 'GET_CONTACTS':
            return Object.assign({},state ,{myContactsList : action.payload});
        default: 
            return state;
    }
}