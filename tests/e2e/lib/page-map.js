/**
 * External dependencies
 */
import { PageMap } from 'wp-e2e-page-objects';
import { FrontPage } from 'wp-e2e-page-objects';
import { ComponentLoginForm as LoginForm } from 'wp-e2e-page-objects';

import WPAdminRSASettings from './wp-admin-rsa-settings';

export const PAGE = Object.assign(
	PageMap.PAGE,
	{
		WP_ADMIN_RSA_SETTINGS: {
			object: WPAdminRSASettings,
			path: '/wp-admin/options-reading.php'
		},
		WP_FRONT_PAGE: {
			object: FrontPage,
			path: '/'
		},
		WP_ADMIN_LOGIN: {
			object: LoginForm,
			path: '/wp-login.php'
		}
	}
);

export function getPageUrl( baseUrl, page, ...args ) {
	return PageMap.getPageUrl( baseUrl, page.path, ...args );
}
