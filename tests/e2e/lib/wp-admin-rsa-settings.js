/**
 * External dependencies
 */
import { By } from 'selenium-webdriver';
import { WPAdminSettings } from 'wp-e2e-page-objects';
import { WebDriverHelper as helper } from 'wp-e2e-webdriver';

/**
 * Internal Dependencies
 */

const RSA_BLOG_SELECTOR = By.css( '#blog-restricted' );
const RSA_DISPLAY_MESSAGE_SELECTOR = By.css( '#rsa-display-message' );
const RSA_MESSAGE_EDITOR_SELECTOR = By.css( '#rsa_message' );
const RSA_SAVE_SELECTOR = By.css( '#submit' );

const defaultArgs = {
	url: '',
	visit: true,
};

export default class WPAdminRSASettings extends WPAdminSettings {
	constructor( driver, args = {} ) {
		args = Object.assign( defaultArgs, args );
		super( driver, args );
	}

	setBlogRestricted() {
		return helper.clickWhenClickable( this.driver, RSA_BLOG_SELECTOR );
	}

	setDisplayMessage( message ) {
		helper.clickWhenClickable( this.driver, RSA_DISPLAY_MESSAGE_SELECTOR );
		return helper.setWhenSettable( this.driver, RSA_MESSAGE_EDITOR_SELECTOR, message );
	}

	saveChanges(){
		return helper.clickWhenClickable( this.driver, RSA_SAVE_SELECTOR );
	}
}
