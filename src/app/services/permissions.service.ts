import { Injectable } from '@angular/core'
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx'
import { Platform } from '@ionic/angular'

export enum PermissionStatus {
  GRANTED = 'GRANTED',
  NOT_REQUESTED = 'NOT_REQUESTED',
  DENIED_ALWAYS = 'DENIED_ALWAYS',
  DENIED = 'DENIED',
  UNKNOWN = 'UNKNOWN'
}

export enum PermissionTypes {
  CAMERA = 'CAMERA',
  MICROPHONE = 'MICROPHONE'
}

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  constructor(
    // private readonly uiEventElementsService: UiEventElementsService,
    private readonly platform: Platform,
    private readonly diagnostic: Diagnostic
  ) {}

  public async hasCameraPermission(): Promise<PermissionStatus> {
    const permission: PermissionStatus = await this.diagnostic.getCameraAuthorizationStatus(false)

    return this.getPermissionStatus(permission)
  }

  public async hasMicrophonePermission(): Promise<PermissionStatus> {
    const permission: PermissionStatus = await this.diagnostic.getMicrophoneAuthorizationStatus()

    return this.getPermissionStatus(permission)
  }

  public async requestPermissions(permissions: PermissionTypes[]): Promise<void> {
    if (this.platform.is('android')) {
      const permissionsToRequest: string[] = []
      if (permissions.indexOf(PermissionTypes.CAMERA) >= 0) {
        permissionsToRequest.push(this.diagnostic.permission.CAMERA)
      }
      if (permissions.indexOf(PermissionTypes.MICROPHONE) >= 0) {
        permissionsToRequest.push(this.diagnostic.permission.RECORD_AUDIO)
      }
      await this.diagnostic.requestRuntimePermissions(permissionsToRequest)
    } else if (this.platform.is('ios')) {
      if (permissions.indexOf(PermissionTypes.CAMERA) >= 0) {
        await this.diagnostic.requestCameraAuthorization(false)
      }
      if (permissions.indexOf(PermissionTypes.MICROPHONE) >= 0) {
        await this.diagnostic.requestMicrophoneAuthorization()
      }
    } else {
      // eslint-disable-next-line no-console
      console.warn('requesting permission in browser')
    }
  }

  public async userRequestsPermissions(permissions: PermissionTypes[]): Promise<void> {
    let canRequestPermission: boolean = false
    for (const p of permissions) {
      canRequestPermission = (await this.canAskForPermission(p)) || canRequestPermission
    }
    if (canRequestPermission) {
      await this.requestPermissions(permissions)
    } else {
    //   await this.uiEventElementsService.showOpenSettingsAlert(() => {
    //     // eslint-disable-next-line no-console
    //     this.diagnostic.switchToSettings().catch(console.error)
    //   })
    }
  }

  private async canAskForPermission(permission: PermissionTypes): Promise<boolean> {
    let canAskForPermission: boolean = true
    if (this.platform.is('android')) {
      if (permission === PermissionTypes.CAMERA) {
        const permissionStatus: PermissionStatus = await this.hasCameraPermission()
        canAskForPermission = !(permissionStatus === PermissionStatus.DENIED_ALWAYS)
      } else if (permission === PermissionTypes.MICROPHONE) {
        const permissionStatus: PermissionStatus = await this.hasMicrophonePermission()
        canAskForPermission = !(permissionStatus === PermissionStatus.DENIED_ALWAYS)
      }
    } else if (this.platform.is('ios')) {
      if (permission === PermissionTypes.CAMERA) {
        const permissionStatus: PermissionStatus = await this.hasCameraPermission()
        canAskForPermission = !(permissionStatus === PermissionStatus.DENIED)
      } else if (permission === PermissionTypes.MICROPHONE) {
        const permissionStatus: PermissionStatus = await this.hasMicrophonePermission()
        canAskForPermission = !(permissionStatus === PermissionStatus.DENIED)
      }
    }

    return canAskForPermission
  }

  private async getPermissionStatus(permission: PermissionStatus): Promise<PermissionStatus> {
    if (this.isGranted(permission)) {
      return PermissionStatus.GRANTED
    } else if (this.isNotRequested(permission)) {
      return PermissionStatus.NOT_REQUESTED
    } else if (this.isDeniedAlways(permission)) {
      return PermissionStatus.DENIED_ALWAYS
    } else if (this.isDenied(permission)) {
      return PermissionStatus.DENIED
    } else {
      return PermissionStatus.UNKNOWN
    }
  }

  private isGranted(permission: PermissionStatus): boolean {
    return permission === this.diagnostic.permissionStatus.GRANTED || permission === this.diagnostic.permissionStatus.GRANTED_WHEN_IN_USE
  }

  private isNotRequested(permission: PermissionStatus): boolean {
    return permission === this.diagnostic.permissionStatus.NOT_REQUESTED
  }

  private isDeniedAlways(permission: PermissionStatus): boolean {
    return permission === this.diagnostic.permissionStatus.DENIED_ALWAYS || permission === this.diagnostic.permissionStatus.RESTRICTED
  }

  private isDenied(permission: PermissionStatus): boolean {
    return !(this.isGranted(permission) || this.isNotRequested(permission))
  }
}