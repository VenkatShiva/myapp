export  function setMobileNumber(mobileNumber) {
    return async function(dispatch) {
        try {
            await dispatch({ type: "SET_MY_NUMBER", payload:mobileNumber });
        } catch(error){
            console.log(error);
        }
    };
};