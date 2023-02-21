import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-header" >
        <h5 class="modal-title text-center">Video informativo</h5>
        <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body" class="responsive-video">
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/_Q98ZRKxTnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <!-- <iframe id="vidio" 
            class="embed-responsive-item" 
            src="https://www.youtube.com/watch?v=I3Dthntjc5c"
            width="100%"
            height="350"
            frameborder="0" 
            allowfullscreen>
    </iframe> -->
    </div>
    <div class="modal-footer">

        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">CERRAR</button>
        </div>
    </div>
    `
})
export class NgbdModalContent2 {
    @Input() name;
    
    constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-video-modal3',
  templateUrl: './video-modal3.component.html'
})
export class VideoModal3Component {

  constructor(private modalService: NgbModal) {}
  
  open() {
      const modalRef = this.modalService.open(NgbdModalContent2, {size:'lg',backdropClass:'modal'});
      modalRef.componentInstance.name = "https://www.youtube.com/embed/I3Dthntjc5c";
  }
}
