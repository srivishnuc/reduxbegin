
const  toggle =  (state = {isLogged : true} , action ) => {



switch (action.type)
{

    case 'TOGGLE'  :

    //return  action.isLogged
    return {isLogged :   !state.isLogged}  

    default:

    return state

}

}

export default toggle