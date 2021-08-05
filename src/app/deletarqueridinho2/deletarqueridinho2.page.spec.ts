import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deletarqueridinho2Page } from './deletarqueridinho2.page';

describe('Deletarqueridinho2Page', () => {
  let component: Deletarqueridinho2Page;
  let fixture: ComponentFixture<Deletarqueridinho2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Deletarqueridinho2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deletarqueridinho2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
