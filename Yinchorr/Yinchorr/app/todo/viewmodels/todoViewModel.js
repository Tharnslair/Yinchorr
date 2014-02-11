/*global define */
define([
    'sandbox!todo',
    'app/todo/viewmodels/itemViewModel'
], function (
    sandbox,
    // have to add any added modlels here
    itemViewModel
) {
    'use strict';

    return function () {
        var observable = sandbox.mvvm.observable,
            observableArray = sandbox.mvvm.observableArray,
            has = sandbox.object.has,
            // need to pull in computed here didn't see that one
            computed = sandbox.mvvm.computed,
            //properties
            items = observableArray(),
            newItem = observable(), // have to remember to use , instead of ; on these
            // forgot to add checkAll here
            checkAll;

        function addItem() {
            var item = newItem();
            if (has(item, "trim") && item.trim()) {
                items.push(itemViewModel({ title: item, completed: false }, items));
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