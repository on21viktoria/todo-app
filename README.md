# Über die einzelnen Komponenten

- StartpageComponent:
  Dient als Willkommensbildschirm, bevor die To-Do-List angezeigt wird.
  Stateful component, da sie ihren Sichtbarkeitsstatus selbst ändern muss, um zu verschwinden.

- TaskpageComponent:
  Bildet nach der StartpageComponent eine zweite Seite, auf der die Funktionalitäten der To-Do-List zusammengefasst sind.
  Stateful component, da sie die eingegeben To Dos aus der AddTaskComponent als Liste speichern muss, um sie an die TasklistComponent weiterzugeben.

- TasklistComponent:
  Zeigt die eingegebenen To Dos des Nutzers an.
  Stateless component, da die TasklistComponent nur die von der Elternkomponente übergebenen To Dos anzeigt.

- AddTaskComponent:
  Nimmt Eingaben von Nutzer entgegen.
  Stateful component, da Eingaben des Nutzers dynamisch zwischengespeichert müssen.

- TaskheaderComponent:
  Zeigt den Namen des Tasks an sowie die Checkbox zum Durchstreichen des Tasks.Verwaltet Speichern von Änderungen und Durchstreichen eines Tasks.
  Stateful component, da er den Zustand der Checkbox speichern muss.

- TaskbodyComponent:
  Verwaltet das Bearbeiten, Änderungen Speichern und Löschen von einzelnen Tasks über entsprechende Buttons.
  Stateless component, da die benötigten Daten von den Elternkomponenten übergeben werden und die Komponente selbst keine Änderungen verwalten muss.

- TaskComponent:
  Bringt die beiden Komponenten TaskheaderComponent und TaskbodyComponent zusammen.
  Stateful component, da beide Kindelemente States benötigen, die in der Elternkomponente geändert werden müssen. Sie werden an die Kindelemente weitergegeben.

- FooterComponent:
  Zeigt den Footer auf der Start- und Taskpage Seite an.

## CSS

Zu Übungszwecken wurde für die graphische Gestaltung des Projekts das Framework Bootstrap eingesetzt.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
