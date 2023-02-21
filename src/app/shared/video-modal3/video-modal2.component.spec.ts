import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoModal2Component } from './video-modal2.component';

describe('VideoModal2Component', () => {
  let component: VideoModal2Component;
  let fixture: ComponentFixture<VideoModal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoModal2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
