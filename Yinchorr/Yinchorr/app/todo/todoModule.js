/*global define */
define([
    'sandbox!todo',
    'app/todo/viewmodels/todoViewModel',
    'bindings!todo',
    'views!todo',
    'styles!todo'
], function (
    sandbox,
    todoViewModel
) {
    'use strict';

    return function todoModule() {
        var // imports
            root = sandbox.mvvm.root,
            template = sandbox.mvvm.template,
            registerStates = sandbox.state.registerStates,
            state = sandbox.state.builder.state,
            onEntry = sandbox.state.builder.onEntry,
            // vars
            todo = todoViewModel(sandbox);

        // Register application state for the module.
        registerStates('app',
            state('todo',
                onEntry(function () {
                    // Render viewModel using 'main_template' template 
                    // (defined in main.html) and show it in the `root` region.
                    todo.text('Hello World from todo!');
                    root(template('todo_template', todo));
                })));
    };
});
