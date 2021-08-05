import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfiguracoesqueridinhoPage } from './configuracoesqueridinho.page';

describe('ConfiguracoesqueridinhoPage', () => {
  let component: ConfiguracoesqueridinhoPage;
  let fixture: ComponentFixture<ConfiguracoesqueridinhoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracoesqueridinhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfiguracoesqueridinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
