import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ReposService } from './repos.service';
import { reposMock } from './testClasses and mocks/mocks/repos';

describe('Testeando RepoService', () => {
	let fakeRequest: HttpTestingController;
	let service: ReposService;
	let finallyRequest;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			]
		})
		service = TestBed.get(ReposService);
		fakeRequest = TestBed.get(HttpTestingController);
	});

	afterEach(()=>{
		fakeRequest.verify();
	});

	it('Se debe de crear el servicio', () => {
		expect(service).toBeTruthy();
	});

	it('Debe retonar los 14 repositorios del usuario: arthurfulldev', () => {
		service.getAllRepos('arthurfulldev').subscribe( repos => {
			expect(repos.length).toBe(14)
		})
		finallyRequest = fakeRequest.expectOne('https://api.github.com/users/arthurfulldev/repos');
	});
	it('Comprobar conprobando de la peticio es GET', () => {
		expect(finallyRequest.request.method).toBe('GET');
		finallyRequest.flush(reposMock);
	})
	it('Comprobando la peticion no trae cabeceras', ()=>{
		let value = finallyRequest.request.headers.length;
		expect(value).toBeUndefined();
	})
});
