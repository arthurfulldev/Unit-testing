import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
	let componente;
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
		}).compileComponents();

		componente = TestBed.createComponent(AppComponent);
	}));
	it('should create the app', async(() => {
		const app = componente.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
	it(`should have as title 'unit-testing'`, async(() => {
		const app = componente.debugElement.componentInstance;
		expect(app.title).toEqual('unit-testing');
	}));
	it('should render title in a h1 tag', async(() => {
		componente.detectChanges();
		const compiled = componente.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to unit-testing!');
	}));

	it('El valor de myVar debe ser Hola mundo', () => {
		const componentInt = new AppComponent();
		let valor = componentInt.myVar;
		expect(valor).toEqual('Hola mundo.');
	})
	it('La misma que la anterior', () => {
		let appComponent = componente.debugElement.componentInstance;
		let valor = appComponent.myVar;
		expect(valor).toEqual('Hola mundo.');
	})

	//  Tipo de datos contain
	describe('Saludando a juan', () => {
		it('Si saludo a Juan', () => {
			let component = new AppComponent();
			let valor = component.saludo('Juan');
			expect(valor).toContain('Juan');
		})
		it('No debe saludar a Juan', () => {
			let component = new AppComponent();
			let valor = component.saludo('Pedro');
			expect(valor).not.toContain('Juan');
		})
	})

	// Tipo de datos boolean
	describe('Pruebas con retornos booleanos ( TRUE | FALSE )',()=>{
		it('Se envia 44 debe retornar TRUE',()=>{
			let component = componente.debugElement.componentInstance;
			let valor = component.par(44)
			expect(valor).toBeTruthy();
		});
		it('Se envia 43 debe retornar FALSE',()=>{
			let component = componente.debugElement.componentInstance;
			let valor = component.par(43)
			expect(valor).toBeFalsy();
		});
	});
});
