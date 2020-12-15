import { v4 as uuidv4 } from 'uuid';

export const URL = {
  Auth: 'http://13.212.11.189:3000',
  All: 'http://13.212.11.189:3001',
  FE: 'http://13.212.11.189:5000'
}

// export const URL = {
//   Auth: 'http://localhost:3000',
//   All: 'http://localhost:3001'
// }

export const Auths = {
  API: URL.Auth,
  clientID: "application",
  clientSecret: "secret",
  grantType: "password",
  scopes: 'read'
}


export const HTTP = {
  baseURL: Auths.API,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*',
    'X-Request-ID': uuidv4()
  }
}

export const AccessBeforeLogout = {
  username: 'application',
  password: 'secret',
}

export const Base64HeaderLogout = {
  access : btoa(AccessBeforeLogout.username+':'+AccessBeforeLogout.password)
}

export const RevokeToken = {
  baseURL: Auths.API,
  headers: {
    'Authorization': `Basic ${Base64HeaderLogout.access}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*',
    'X-Request-ID': uuidv4()
  }
}

export const GetRefreshToken = () => {
  const nameEQ = 'refresh_token=';
  const ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


export const RefreshToken = {
  baseURL: Auths.API,
  header: {
    'Authorization': `Basic ${Base64HeaderLogout.access}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*',
    'X-Request-ID': uuidv4()
  },
  data: {
    refresh_token: GetRefreshToken(),
    grant_type: 'refresh_token',
    scope:'read'
  }
}

export const GetToken = () => {
  const nameEQ = 'access_token=';
  const ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

export const GetData = {
  baseURL: URL.All,
  headers: {
    'Authorization': `Basic ${Base64HeaderLogout.access}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*',
    'X-Request-ID': uuidv4()
  }
}

export const GetAllData = {
  baseURL: URL.All,
  headers: {
    'Authorization': `Bearer ${GetToken()}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*',
    'X-Request-ID': uuidv4()
  }
}

// export const GetLocation = {
//   baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
//   headers: {
//     'x-rapidapi-key': '832dcb3416msh24c662f143a2132p18a6e1jsnd9722c2ca4c4',
//     'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
//   }
// }