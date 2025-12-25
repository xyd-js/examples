# Custom Scripts Example

This example demonstrates how to add and use custom JavaScript in your documentation site using the xyd-js docs engine.

## What is this?
This project shows how to inject your own JavaScript to enhance your docs. For example, you can display modals, add analytics, or create interactive widgets.

## How it works
- The file `scripts/helloWorld.ts` contains a script that displays a modal when loaded, confirming that your custom JavaScript is running.
- The script is referenced in `docs.json` under the `theme.scripts` array:
	```json
	"scripts": [
		"./scripts/helloWorld.ts"
	]
	```

## Example: Show a Modal
When the docs site loads, a modal appears with the message:

> ✅ Your feature 'custom javascript' works!

This is implemented in [`scripts/helloWorld.ts`](scripts/helloWorld.ts).

## How to add your own scripts
1. Add your JavaScript or TypeScript file to the `scripts/` directory.
2. Reference it in the `docs.json` file under `theme.scripts`.
3. Reload your docs site to see your script in action.

