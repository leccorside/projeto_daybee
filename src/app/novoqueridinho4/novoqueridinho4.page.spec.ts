import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Novoqueridinho4Page } from './novoqueridinho4.page';

describe('Novoqueridinho4Page', () => {
  let component: Novoqueridinho4Page;
  let fixture: ComponentFixture<Novoqueridinho4Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Novoqueridinho4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Novoqueridinho4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
