/*!
 * d3-group
 * MIT License (MIT)
 * Copyright (c) 2015 Lachlan McDonald
 */

d3.group = function() {
    var data = [],
        matches = [];

    function group() {}

    group.entries = function(entries) {
        if (!arguments.length) {
            return entries;
        }
        if (Array.isArray(entries)) {
            data = entries;
        }
        return group;
    };

    group.on = function(fn) {
        data = data.filter(function(d) {
            if (fn.apply(null, arguments) === true) {
                matches.push(d);
                return false;
            } else {
                return true;
            }
        });
        return group;
    };

    group.by = function(fn) {
        data.push(fn.call(null, matches));
        return data;
    };

    return group;
};
