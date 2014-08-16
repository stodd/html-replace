(function () {
    "use strict";
    var parseQueryString, replaceInBody;

    parseQueryString = function (queryString) {
        var params = {}, queries, temp, i, l;

        // Split into key/value pairs
        queries = queryString.split("&");

        // Convert the array of strings into an object
        for (i = 0, l = queries.length; i < l; i++) {
            temp = queries[i].split('=');
            params[temp[0]] = temp[1];
        }

        return params;
    };

    replaceInBody = function (find, replace) {
        if (document.body.innerHTML.indexOf(find) > 0) {
            document.body.innerHTML = document.body.innerHTML.replace(find, replace);
        }
    };

    document.addEventListener("DOMContentLoaded", function () {
        var queryString, params, replace;
        queryString = decodeURI(window.location.search);
        queryString = queryString.substring(1);
        params = parseQueryString(queryString);

        if ('replace' in params && params.replace.indexOf(':') > 0) {
            replace = params.replace.split(':');
            replaceInBody(replace[0], replace[1]);
        }

    }, false);
}());
