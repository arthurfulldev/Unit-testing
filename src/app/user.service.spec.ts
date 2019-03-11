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

	it('La uri debe ser https://api.github.com', ()=>{
		expect(servicio.uri).toEqual('https://api.github.com');
	})

	describe('Testing with service', ()=>{
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
	
		it( 'consumir la api y obtener el usuario con id: 3 (GET method)', ()=>{
			servicio.getUser(3).subscribe( user => {
				expect(user[2]).toBe(mockUser[2]);
			})
			let req = httpfake.expectOne(`https://api.github.com/users/3`);
			expect(req.request.method).toBe('GET');
	
			req.flush(mockUser);
		})
	})
});
