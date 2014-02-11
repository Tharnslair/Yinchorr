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
                items.push(itemViewModel({ title: item, completed: false }));
            }
            newItem("");
        }

        checkAll = computed({
            read: function() {
                return items().all("$.completed()");
            },
            write: function(value) {
                items().forEach(function(item) { item.completed(value); });
            }
        });

        return {
            items: items,
            newItem: newItem,
            addItem: addItem,
            checkAll: checkAll
        };
    };
});