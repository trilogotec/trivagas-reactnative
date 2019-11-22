/**
|--------------------------------------------------
| authenticate
|--------------------------------------------------
*/
export const authenticate = dispatch => {
  const { authentication } = dispatch;

  return async (payload, rootState) => {
    // await new Promise(resolve => setTimeout(resolve, 2000))
    const logged = false; // login faker
    authentication.setLogged(logged); 
    return logged;
  };
}

export default (dispatch) => ({
  authenticate: authenticate(dispatch),
});