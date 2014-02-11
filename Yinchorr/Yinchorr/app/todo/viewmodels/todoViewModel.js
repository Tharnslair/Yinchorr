/*global define */
define([
    'sandbox!todo'
], function (
    sandbox
) {
    'use strict';

    return function () {
        var observable = sandbox.mvvm.observable,
            observableArray = sandbox.mvvm.observableArray,
            has = sandbox.object.has,
            //properties
            items = observableArray(),
            newItem = observable();

        function addItem() {
            var item = newItem();
            if (has(item, "trim") && item.trim()) {
                items.push(item.trim());
            }
            newItem("");
        }

        return {
            items: items,
            newItem: newItem,
            addItem: addItem
        };
    };
});