export const refreshTokenSetup=(res)=>{

  let reffreshTiming = (res.tokenObj?.expires_in || 3600 - 5 *60 ) *1000;
  const refreshToken = async() =>{
    const newAuthRes = await res.reloadAuthResponse();
    reffreshTiming = (newAuthRes.expires_in || 3600-5*60)*1000;
    console.log('newAuthRules', newAuthRes);
    console.log('new auth token ', newAuthRes.id_token);
    setTimeout(refreshToken, reffreshTiming);
  };
  setTimeout(refreshToken, reffreshTiming);
};
