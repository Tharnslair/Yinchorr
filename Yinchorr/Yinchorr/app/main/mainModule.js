﻿/*global define */
define([
    'sandbox!main',
    'app/main/viewmodels/mainViewModel',
    'views!main',
    'bindings!main',
    'styles!main'
], function (
    sandbox,
    mainViewModel
) {
    'use strict';

    return function main() {
        var // imports
            root = sandbox.mvvm.root,
            template = sandbox.mvvm.template,
            registerStates = sandbox.state.registerStates,
            state = sandbox.state.builder.state,
            onEntry = sandbox.state.builder.onEntry,
            // vars
            mainVM = mainViewModel();

        // Register application state for the module.
        registerStates('root',
            state('app',
                state('main',
                    onEntry(function () {
                        // create state properties for rending todo module template
                        this.todoItems = mainVM.todoItems;
                        this.todoInput = mainVM.todoInput;
                        // Render viewModel using 'main_template' template 
                        // (defined in main.html) and show it in the `root` region.
                        root(template('main_template', mainVM));
                    }))));
    };
});
