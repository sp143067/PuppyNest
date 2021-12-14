import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-customers-feedback',
  templateUrl: './customers-feedback.component.html',
  styleUrls: ['./customers-feedback.component.css']
})
export class CustomersFeedbackComponent implements OnInit {

  closeResult = '';
  @ViewChild('contentTemplate', { static: true }) contentTemplate!: TemplateRef<any>

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.open(this.contentTemplate)
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.router.navigateByUrl('./find-a-puppy');
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
