# AI Chatbot Angular Node Client

This project is an AI chatbot client built with Angular and Node.js. It leverages Angular for the frontend and Node.js with Express for the backend, integrating with Google's Generative AI for chatbot functionalities.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.1.

## Project Structure

```
.env
.gitignore
ai-chatbot-angular-node-client/
	.angular/
	.cache/
	.editorconfig
	.gitignore
	.gitmodules
	.vscode/
		extensions.json
		launch.json
		tasks.json
	angular.json
	package.json
	README.md
	src/
		app/
			app-routing.module.ts
			app.component.css
			app.component.html
			app.component.spec.ts
			app.component.ts
			services/
				chat-bot.service.ts
		assets/
		index.html
		main.ts
		styles.css
	tailwind.config.js
	tsconfig.app.json
	tsconfig.json
	tsconfig.spec.json
index.js
package.json
README.md
```

## Frontend (Angular)

### Development Server

Run [`ng serve`] in the ai-chatbot-angular-node-client

 directory for a dev server. Navigate to [`http://localhost:4200/`]. The application will automatically reload if you change any of the source files.

### Code Scaffolding

Run [`ng generate component component-name`] to generate a new component. You can also use [`ng generate directive|pipe|service|class|guard|interface|enum|module`].

### Build

Run [`ng build`] to build the project. The build artifacts will be stored in the [`dist/`] directory.

### Running Unit Tests

Run [`ng test`] to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running End-to-End Tests

Run [`ng e2e`] to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further Help

To get more help on the Angular CLI use [`ng help`] or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### ChatBot Service

The [`ChatBotService`] is located in src/app/services/chat-bot.service.ts. It uses Angular's [`HttpClient`] to send messages to the backend.

```ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';

@Injectable

({


  providedIn: 'root'
})
export class ChatBotService {
  public apiUrl = Environment.apiUrl;
  constructor(private http: HttpClient) { }
  public sendMessage(message: string) {
    return this.http.post(this.apiUrl, { message: message });
  }
}
```

## Configuration Files

### Angular Configuration

The Angular configuration is defined in angular.json. It includes build and serve configurations for both development and production environments.

### TypeScript Configuration

TypeScript configurations are defined in tsconfig.json, tsconfig.app.json, and tsconfig.spec.json.

### Tailwind CSS Configuration

Tailwind CSS configuration is defined in tailwind.config.js.

### Git Ignore

The 

.gitignore

 files in the root and 

ai-chatbot-angular-node-client

 directories specify files and directories to be ignored by Git.

## Dependencies

### Frontend Dependencies

The frontend dependencies are listed in 

package.json

.

This documentation provides an overview of the project structure, setup instructions, and key components. For more detailed information, refer to the respective files and comments within the code.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
