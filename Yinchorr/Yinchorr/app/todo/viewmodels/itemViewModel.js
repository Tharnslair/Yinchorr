﻿/*global define */
define([
    'sandbox!todo'
], function (
    sandbox
) {
    'use strict';

    return function (item, items) {
        var observable = sandbox.mvvm.observable,
            //properties
            title = observable(item.title),
            completed = observable(item.completed),
            editMode = observable(false);

        function beginEdit() {
            editMode(true);
        }

        function endEdit() {
            var newTitle = title().trim();
            if (newTitle) {
                title(newTitle);
                editMode(false);
            } else {
                //we need to remove the item
                //if the title is an empty string
                items.remove(this);
            }
        }
        
        function remove() {
            items.remove(this);
        }

        return {
            title: title,
            completed: completed,
            editMode: editMode,
            beginEdit: beginEdit,
            endEdit: endEdit,
            remove: remove
        };
    };
});