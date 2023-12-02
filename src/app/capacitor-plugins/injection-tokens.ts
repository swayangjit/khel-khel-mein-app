import { InjectionToken } from '@angular/core'
import { StatusBarPlugin } from '@capacitor/status-bar'

export const STATUS_BAR_PLUGIN = new InjectionToken<StatusBarPlugin>('StatusBarPlugin')