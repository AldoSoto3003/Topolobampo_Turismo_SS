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
    <iframe width="100%" height="700px" 
        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdebateguamuchil%2Fvideos%2F1125868474932559%2F&show_text=false&width=380&t=0" title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen = "false"></iframe>
    </div>
    <div class="modal-footer">

        <div class="right-side">
            <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">CERRAR</button>
        </div>
    </div>
    `
})
export class NgbdModalContent4 {
    @Input() name;
    
    constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-video-modal4',
  templateUrl: './video-modal4.component.html'
})
export class VideoModal4Component {

  constructor(private modalService: NgbModal) {}
  
  open() {
      const modalRef = this.modalService.open(NgbdModalContent4, {size:'lg',backdropClass:'modal'});
      modalRef.componentInstance.name = "https://www.youtube.com/embed/I3Dthntjc5c";
  }
}
