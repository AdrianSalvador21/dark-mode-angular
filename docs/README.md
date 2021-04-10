# CodeChallenge - Angular
**Adrian Salvador Silva - FrontEnd Developer**

**DETALLES GENERALES**
- Se desarrolló un servicio llamado users.service.ts para la interacción con el backend.
- Se creó una interfaz que lista a los usuarios y permite ver el detalle de cada uno de manera distinta en desktop y en mobile.
- La aplicación permite cambiar el idioma entre español e inglés.
- La aplicación permite ajustar el tema de la interfaz para que sea oscura o clara.
- Se ajustó la interfaz para ser responsiva de multiples dispositivos.
- La aplicación es una PWA, capaz de ser instalada desde el navegador de un dispositivo.

**DETALLES TECNICOS**
- La arquitectura de la aplicación fue organizada siguiendo los lineamientos de 'Clean architecture'.
- Se agregó el módulo TranslateModule para poder almacenar los textos de la aplicación y cambiarlos de manera dinamica.
- Se agregó la libreria Redux, para el manejo de la información y la aplicación del patrón Flux.
- Con Redux, se maneja el cambio y la actualización del lenguaje seleccionado.
- Los componentes fueron organizados por módulos y cargados mediante rutas por lazyload. En el caso particular de esta aplicación, se creo el módulo de usuarios, el módulo para el manejo del tema, y el móduloo de componentes compartidos.
- Se agregó un módulo para el manejo del spinner, con un asset personalizado. 
- Se agregó Angular Material para el manejo del dialog commponent y del bottonSheet comoonent.
- En AppComponent y UserListPageComponent se agregaron los archivos spec de pruebas, considerando la contrucción del componente y la configuración necesaria para compilar el mismo.  (ng test)
- Se agrego el módulo de angular/pwa y se ajustó el color principal para el header.

**ENTREGA**
- El proyecto fue desplegado en https://git-example-d2907.firebaseapp.com/

**OBSERVACIONES**
- En la aplicación solo se implemento el método get. Se probó el servicio post enviando como applications/json la data, pero esta no era guardada en la base de datos. Sin embargo, los métodos del servicio fueron implementados para los principales verbos HTTP.


