import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { environment } from 'src/environments/environment';

export function getClientSettings() :UserManagerSettings {
  return environment.clientSettings
}
  
@Injectable({
  providedIn: 'root'
})
export class OdicOpenService {
  public manager = new UserManager(getClientSettings())
	
	  public user: User = null
	
	  constructor() {
	        this.manager.getUser().then(user => {
			  this.user = user;
			}); 
	   }
	
	   isLoggedIn(): boolean {
	    return this.user != null && !this.user.expired;
	  }
	
	  getClaims(): any {
	    return this.user.profile;
	  }
	
	  getAuthorizationHeaderValue(): string {
	    return `${this.user.token_type} ${this.user.access_token}`;
	  }
	
	  startAuthentication(): Promise<void> {
	    return this.manager.signinRedirect();
	  }
	
	  completeAuthentication(): Promise<void> {
	    return this.manager.signinRedirectCallback().then(user => {        
	        console.log(user)
	        this.user = user;
	    }).catch(err => {
	      console.log('error')
	    });
	  }
	
	}
  