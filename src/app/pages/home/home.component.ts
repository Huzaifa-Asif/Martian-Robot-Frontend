import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RestApiService } from 'src/app/services/api/rest-api.service';
import { HelperService } from 'src/app/services/helper/helper.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spinnerText = '';
  outputMartianRobot = '';
  instructions = '';
  constructor(
    private api: RestApiService,
    private router: Router,
    private helper: HelperService,
    private spinnerService: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    this.spinnerService.show();
    this.spinnerText = 'processing ...';

    const reqData = {
      input: this.instructions,
    }
    console.log("reqData ", reqData)
    this.api.post('martian-robot/run', reqData).then((response: any) => {
      console.log(response)
      this.spinnerService.hide();
      if (response.status) {
        this.outputMartianRobot = response.data.result
      }
      else {
        this.helper.failureBigToast('Error!', "Kindly Try Again");
      }

    }, (error: any) => {
      this.spinnerService.hide();
      this.helper.failureBigToast('Error!', 'Kindly Try Again');
    });
  }


}
