
function activate(context) {
	const container = require('./container');

	const vscode = container.build('vsCodeFactory').getInstance();

	context.subscriptions.push(
		vscode.commands.registerCommand(
			'cmstead.articulate-mocha.surroundWith',
			() => container.build('surroundWith').applySurround()
		));

}

function deactivate() { }

exports.activate = activate;
exports.deactivate = deactivate;
