import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from '../utils/urlLIst';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  // token : token is available @ localstorage
  // token string = either we will have token or not.
  // if there is token then getITem will give us the value
  // if not then we need a ''

  // it should take us to landing page.
  // does it have constructor. : NO
  // we need router service.

  const router = inject(Router);
  const token = localStorage.getItem('token');

  // Check if the request URL is in the public URLs list
  const isPublicUrl = urls.some((url) => req.url.includes(url));

  // If it's a public URL or OPTIONS request (CORS preflight), let it through without token
  if (isPublicUrl || req.method === 'OPTIONS') {
    return next(req);
  }

  // For all other requests, check for token
  if (token) {
    // add one header X-Auth-Token : token
    // request object can't be manipulated
    /// it is immubtable.
    // req.headers.set('X-Auth-Token',token)
    console.log('inside the if token condition');
    let modifiedReq = req.clone({
      // whaterver the changes we want those things we will pass it to the json object.
      headers: req.headers.set('X-Auth-Token', token),
    });
    return next(modifiedReq);
    // response manipulation would be done via pipe method.
    // addition of token in header
  } else {
    /// bye bye to landing.
    // Only redirect to landing page for non-public URLs that require authentication
    if (!isPublicUrl) {
      router.navigate(['/']);
      throw new Error('Unauthorized access');
    }
    return next(req);
  }

  // if token is available ===> then we will add it and move to next
  // if not take the user back to landing page.
};

// req : httprequest:
// next : next interceptor or backendApp
