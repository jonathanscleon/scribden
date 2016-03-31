var jade = require("jadum/runtime");
module.exports = function nav(locals) {
var jade_debug = [{ lineno: 1, filename: "views/nav.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (model) {
jade_debug.unshift({ lineno: 0, filename: "views/nav.jade" });
jade_debug.unshift({ lineno: 1, filename: "views/nav.jade" });
if ( model.navType === 'main' || (model.navType === 'thread' && !model.thread))
{
jade_debug.unshift({ lineno: 2, filename: "views/nav.jade" });
jade_debug.unshift({ lineno: 2, filename: "views/nav.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "views/nav.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "views/nav.jade" });
buf.push("<a href=\"/recent\" aria-label=\"See recently updated threads\" class=\"sd-o-nav-icon sd-o-home-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("R");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: "views/nav.jade" });
buf.push("<a href=\"/tracked\" aria-label=\"See tracked threads\" class=\"sd-o-nav-icon sd-o-thread-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("T");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "views/nav.jade" });
buf.push("<a href=\"/notifications\" aria-label=\"See user notifications\" class=\"sd-o-nav-icon sd-o-notification-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: jade_debug[0].filename });
buf.push("N");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "views/nav.jade" });
buf.push("<a href=\"/settings\" aria-label=\"Modify user settings\" class=\"sd-o-nav-icon sd-o-settings-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: jade_debug[0].filename });
buf.push("S");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</nav>");
jade_debug.shift();
jade_debug.shift();
}
else if ( model.navType === 'thread' && model.thread)
{
jade_debug.unshift({ lineno: 13, filename: "views/nav.jade" });
jade_debug.unshift({ lineno: 13, filename: "views/nav.jade" });
buf.push("<nav role=\"navigation\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "views/nav.jade" });
buf.push("<ul class=\"sd-c-nav\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "views/nav.jade" });
buf.push("<a href=\"/recent\" aria-label=\"Go back\" class=\"sd-t-wire sd-o-back-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "views/nav.jade" });
buf.push("<li class=\"sd-c-nav-compose\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "views/nav.jade" });
buf.push("<a" + (jade.attr("href", '/compose/' + model.thread.id, true, false)) + " aria-label=\"Make a new post\" class=\"sd-t-wire sd-o-compose-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: jade_debug[0].filename });
buf.push("Compose");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
buf.push("</ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("</nav>");
jade_debug.shift();
jade_debug.shift();
}
else
{
jade_debug.unshift({ lineno: 20, filename: "views/nav.jade" });
jade_debug.unshift({ lineno: 20, filename: "views/nav.jade" });
buf.push("<h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: "views/nav.jade" });
buf.push("<a href=\"/\" aria-label=\"Go to home\" class=\"sd-t-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 21, filename: jade_debug[0].filename });
buf.push("ScribDen");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "views/nav.jade" });
buf.push("<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("The minimalist forum.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();}.call(this,"model" in locals_for_with?locals_for_with.model:typeof model!=="undefined"?model:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "if model.navType === 'main' || (model.navType === 'thread' && !model.thread)\n    nav(role='navigation')\n      ul.sd-c-nav\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-home-icon(href='/recent', aria-label='See recently updated threads') R\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-thread-icon(href='/tracked', aria-label='See tracked threads') T\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-notification-icon(href='/notifications', aria-label='See user notifications') N\n        li.sd-c-nav-item\n          a.sd-o-nav-icon.sd-o-settings-icon(href='/settings', aria-label='Modify user settings') S\n  else if model.navType === 'thread' && model.thread\n    nav(role='navigation')\n      ul.sd-c-nav\n        li.sd-c-nav-item\n          a.sd-t-wire.sd-o-back-icon(href='/recent', aria-label='Go back') Back\n        li.sd-c-nav-compose\n          a.sd-t-wire.sd-o-compose-icon(href='/compose/' + model.thread.id, aria-label='Make a new post') Compose\n  else\n    h1\n      a.sd-t-link(href='/', aria-label='Go to home') ScribDen\n    h2 The minimalist forum.");
}
}