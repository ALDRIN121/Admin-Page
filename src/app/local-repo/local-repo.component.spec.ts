import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalRepoComponent } from './local-repo.component';

describe('LocalRepoComponent', () => {
  let component: LocalRepoComponent;
  let fixture: ComponentFixture<LocalRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
