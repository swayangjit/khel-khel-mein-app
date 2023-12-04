import { Component, OnInit } from '@angular/core';
import { ScannerService } from 'src/app/services/scanner.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    private readonly scannerService: ScannerService,) { }

  ngOnInit() {
    console.log('Registration page');
    
  }

  scan(){
    this.scannerService.checkCameraPermissionsAndActivate(
      (text) => {
        console.log('Scan Result', text);
        
      },
      (error) => {
        console.warn(error)
      }
    )
  }

}
