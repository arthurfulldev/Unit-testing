import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'unit-testing';
	myVar = 'Hola mundo.';

	saludo(name: string): string {
		return `Hola ${name}`;
	}

	par(value: number): boolean {
		return value % 2 == 0 ? true : false;
	}
}