import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { mockUser } from './testClasses and mocks/mocks/users'


describe('UserService', () => {
	// simular soicitudes http 
	let httpfake: HttpTestingController;
	let servicio: UserService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule
			]
		})

		// Injectamos los servicos tener acceso cada petición
		servicio = TestBed.get( UserService )
		httpfake = TestBed.get( HttpTestingController );
	});

	afterEach(() => {
		// Verificar si no hay solicitudes pendientes....
		httpfake.verify();
	});

	it('Servicio creado', () => {
		const service: UserService = TestBed.get(UserService);
		expect(service).toBeTruthy();
	});

	it('Debe retornar un Obsevable<Usuarios[]>', () => {		
		// Se ejecutar el metodo getAll
		servicio.gatAll().subscribe( users => {
			expect(users.length).toBe(3);
			expect(users).toEqual(mockUser);
			expect(users[0].login).toBeDefined();
		})

		let req = httpfake.expectOne('https://api.github.com/users');
		expect(req.request.method).toBe('GET');

		// Nos permite propocionar valores ficticios para la respuesta de las peticiones hechas.
		req.flush(mockUser)
	})
});
