# Paymore

Projeyi Docker üzerinde tek hamlede ayağı kaldırabilir, sunucu davranışları sergileyecektir. Proje dizinine gelindiğinde Paymore klasörünün içinde `docker compose up` veya `docker compose up -d` komutlarından bir tanesi çalıştırıldığında proje ayağa kalkacaktır. Ardından projeyi görüntülemek için client kısmı `localhost:4200` json-server kısmı ise `localhost:3000` de olacaktır.


Eğer lokalde projeyi başlatacaksanız yapılması gerekenler aşağıda listelenmiştir. Ek olarak `json-server --watch paymore-case.json` çalıştırılmalıdır.

Proje Vercel üzerinde de aktif olarak erişilebilir yerel ağ erişimi ile birlikte datalara erişim olacaktır.
Client kısmı --> https://paymore-case-c3k0isp5x-aliosmandes-projects.vercel.app/

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
