﻿/*global define */
/*jslint sloppy: true,unparam: true*/
define(function () {
    var ENTER_KEY = 13;
    return {
        'todo-visible': function () {
            return {
                visible: this.items().length > 0
            };
        },
        'todo-input': function () {
            var addItem = this.addItem;
            return {
                value: this.newItem,
                valueUpdate: 'afterkeydown',
                event: {
                    keyup: function (data, e) {
                        if (e.keyCode === ENTER_KEY) {
                            addItem();
                        }
                    }
                },
                hasFocus: this.editMode
            };
        },
        
        'todo-item': function() {
            return {
                css: {
                    completed: this.completed,
                    editing: this.editMode
                },

                event: {
                    dblclick: this.beginEdit
                }
            };
        }

    };
});
