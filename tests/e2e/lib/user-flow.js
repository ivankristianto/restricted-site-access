/**
 * External dependencies
 */
import { UserFlow as Base } from 'wp-e2e-page-objects';
import WPLogin from 'wp-e2e-page-objects';

/**
 * Internal dependencies
 */
import { PAGE } from './page-map';

export default class UserFlow extends Base {
	openLoginPage() {
		this.currentPage = this.open( PAGE.WP_LOGIN );
		return this.currentPage;
	}

	openPluginsPage() {
		this.currentPage = this.open( PAGE.WP_ADMIN_PLUGINS );
		return this.currentPage;
	}

	openRSASettings() {
		this.currentPage = this.open( PAGE.WP_ADMIN_RSA_SETTINGS );
		return this.currentPage;
	}

	openFrontpage() {
		this.currentPage = this.open( PAGE.WP_FRONT_PAGE );
		return this.currentPage;
	}

	logout(){
		this.currentPage = this.openRSASettings();
		return this.currentPage.hoverMyAccountThenClickSubmenu( 'Log Out' );
	}

	login(){
		var page = this.openLoginPage();
		return page;
	}

}
