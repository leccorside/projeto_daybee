import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Novoqueridinho3Page } from './novoqueridinho3.page';

describe('Novoqueridinho3Page', () => {
  let component: Novoqueridinho3Page;
  let fixture: ComponentFixture<Novoqueridinho3Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Novoqueridinho3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Novoqueridinho3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
