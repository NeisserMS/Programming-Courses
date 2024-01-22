// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './login.component';

// describe('Pruebas en el Login', () => {
// 	let component: LoginComponent;
// 	let fixture: ComponentFixture<LoginComponent>;

// 	const formBuilder: FormBuilder = new FormBuilder();

// 	beforeEach(async(() => {
// 		TestBed.configureTestingModule({
// 			declarations: [LoginComponent],
// 			imports: [ReactiveFormsModule],
// 		})
// 			.compileComponents();
// 	}));

// 	beforeEach(() => {
// 		fixture = TestBed.createComponent(LoginComponent);
// 		component = fixture.componentInstance;
// 		fixture.detectChanges();
// 	});

// 	it('Creación del componente', () => {
// 		expect(component).toBeTruthy();
// 	});

// });

	// it('Debe detectar que el formulario es válido', () => {
	// 	fixture.nativeElement.querySelector('button').click();
	// 	expect(component.login()).toEqual('invalid_form');
	// });

	// it('Debe validar usuario y contraseña correctos', () => {
	// 	component.loginForm = formBuilder.group({
	// 		email: 'test.com',
	// 		password: '123456'
	// 	});
	// 	fixture.nativeElement.querySelector('button').click();

	// 	expect(component.login()).toEqual('login_valid');
	// });

	// it('Debe denegar el acceso con contraseña incorrecta', () => {
	// 	component.loginForm = formBuilder.group({
	// 		email: 'test.com',
	// 		password: '123456'
	// 	});
	// 	fixture.nativeElement.querySelector('button').click();

	// 	expect(component.login()).toEqual('login_invalid');
	// });
// });
