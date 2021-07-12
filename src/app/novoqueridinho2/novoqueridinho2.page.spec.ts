import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Novoqueridinho2Page } from './novoqueridinho2.page';

describe('Novoqueridinho2Page', () => {
  let component: Novoqueridinho2Page;
  let fixture: ComponentFixture<Novoqueridinho2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Novoqueridinho2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Novoqueridinho2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
