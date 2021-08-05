import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Deletarqueridinho1Page } from './deletarqueridinho1.page';

describe('Deletarqueridinho1Page', () => {
  let component: Deletarqueridinho1Page;
  let fixture: ComponentFixture<Deletarqueridinho1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Deletarqueridinho1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Deletarqueridinho1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
