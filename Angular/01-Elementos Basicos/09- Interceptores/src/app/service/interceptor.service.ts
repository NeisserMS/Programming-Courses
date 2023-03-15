import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class InterceptorService implements HttpInterceptor {

    // Crear un interceptor que sea capaz de atrapar cualquier petición Http y a su vez colocarle un token.
    // El interceptor es un servicio más solo que se encarga de interceptar las solicitudes.

    // EL Next es lo siguiente que debe de hacer dps que realizamos el HttpRequest
    // El observable nos ayuda a que va a retornar algo

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headers = new HttpHeaders({ // Este header se colocará en la request (req) y luego mandar a llamar al next.handle, esto es basicamente todo.
            'token-usuario': 'ABC12'
        });

        // Cuando utilizamos la request esta ya no se puede volver a utilizar, por lo cual debemos de clonarla y a la hora de hacerlo debemos de hacerlo antes de ser manipulada.
        // tambien podemos poner los params y otras cosas más.
        const reqClone = req.clone({
            headers
        });

        return next.handle(reqClone).pipe( // lo pasamos por un pipe y llamamos al metodo del error, de esta manera cuando la app dispare un error lo vamos a interceptar.
            catchError(this.manejaError));

    }

    // Manejaremos los errores en el interceptor.

    manejaError(error: HttpErrorResponse) {
        console.log('Sucedio un error');
        console.log('Registrado en el log File');
        console.warn(error);
        return throwError('Error personalizado');
    }


}

