import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ShowReposComponent } from './show-repos.component';
import { ReposService } from './repos.service';
import { of } from 'rxjs';
import { reposMock } from './testClasses and mocks/mocks/repos';

describe('ShowReposComponent', () => {
  let component: ShowReposComponent;
  let fixture: ComponentFixture<ShowReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReposComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Comprobando show()', ()=>{
      expect(component.show()).toBe('Muestra 1');
  })

  it('Comprobando show2() que contenga 2', ()=>{
    expect(component.show2()).toContain('2');
  });

  it('Comprobar que se traen los 14 repositorios', ()=>{
    let rs = TestBed.get(ReposService)
  let repos = spyOn(rs, 'getAllRepos').and.callFake( repos => {
    console.log('Algo: ' +repos);
      
    //return of(reposMock)
    });

    
  })
});
