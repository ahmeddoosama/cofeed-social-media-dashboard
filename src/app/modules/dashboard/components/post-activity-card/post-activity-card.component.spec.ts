import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostActivityCardComponent } from './post-activity-card.component';

describe('PostActivityCardComponent', () => {
  let component: PostActivityCardComponent;
  let fixture: ComponentFixture<PostActivityCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostActivityCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostActivityCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
