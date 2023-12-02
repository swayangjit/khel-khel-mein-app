
import { Injectable } from '@angular/core'
import { Capacitor } from '@capacitor/core'
import { Platform } from '@ionic/angular'

import { StatusBar, Style } from '@capacitor/status-bar'

enum Theme {
	DARK,
	LIGHT,
}

interface ThemeStorage {
	theme: Theme
}

const STORAGE_KEY = 'theme'

@Injectable({
	providedIn: 'root',
})
export default class ThemeUtils {

	private currentStatusBarColor = null

	constructor(private platform: Platform) {}

	init(splashScreenCallback: () => void) {
		// this.lock = this.storage.getObject(STORAGE_KEY).then((preferenceDarkMode) => {
		// 	this.internalInit(preferenceDarkMode as StoredTheme)
		// 	setTimeout(() => {
		// 		splashScreenCallback()
		// 		this.applyColorInitially()
		// 	}, 10)
		// 	return preferenceDarkMode as StoredTheme
		// })
	}

	private async changeStatusBarColor(color: string, isDarkThemed: boolean) {
		// let darker = isDarkThemed ? '#000000' : color.trim()
		// if (this.platform.is('android')) {
		// 	const themeColor = await this.getThemeColor()

		// 	this.setStatusBarColor(darker)
		// 	this.currentStatusBarColor = darker
		// }
	}

	setStatusBarColor(color: string) {
		try {
			if (Capacitor.isPluginAvailable('StatusBar')) {
				StatusBar.setStyle({
					style: Style.Dark,
				})
				StatusBar.setBackgroundColor({
					color: color,
				})
			} 
		} catch (e) {
			console.warn('error setting status bar color', e)
		}
	}
}

interface StoredTheme {
	theme: Theme
	themeColor: string
}