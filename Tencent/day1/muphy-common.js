(function(window, $) {

    var muphy = Object.create({

        isNull: function(data) {

            if (data === null || data === undefined) {

                return true;

            }

            if (typeof data === "String" && data.trim() === '') {

                return true;

            }

            if (data instanceof Array && data.length == 0) {

                return true;

            }

            return false;

        },

        nvl: function(data, obj) {

            if (obj === 0) return 0;

            return data || obj || '';

        },

        each: function(obj, fun) {

            for (var key in obj) {

                if (fun.call(obj[key], key, obj[key]) === false) {

                    break;

                }

            }

        },

        addEvent: function(ele, type, handler) {

            if (ele.addEventListener) {

                ele.addEventListener(type, handler, false);

            } else if (ele.attachEvent) {

                ele.attachEvent("on" + type, handler);

            } else {

                ele["on" + type] = handler;

            }

        },

        removeEvent: function(ele, type, handler) {

            if (ele.removeEventListener) {

                ele.removeEventListener(type, handler, false);

            } else if (ele.detachEvent) {

                ele.detachEvent("on" + type, handler);

            } else {

                ele["on" + type] = null;

            }

        },

        _dragEvent: function(ele) {

            var drag = null,

                diffx = 0,

                diffy = 0,

                $e = null;

            if ($.isNull(ele)) return;

            if (!($e = $(ele))) return;

            $(document).bind("mousedown", handleEvent);

            $(document).bind("mousemove", handleEvent);

            //$(document).bind("mouseup",handleEvent);

            $.muphy.addEevent(document, "mouseup", handleEvent);



            function handleEvent(event) {

                event = event || window.event;

                var target = $e[0];

                switch (event.type) {

                    case "mousedown":

                        if ($m.nvl(target.className).indexOf("draggable") > -1) {

                            drag = target;

                            diffx = event.clientX - target.offsetLeft;

                            diffy = event.clientY - target.offsetTop;

                        }

                        break;

                    case "mousemove":

                        if (drag !== null) {

                            drag.style.left = (event.clientX - diffx) + "px";

                            drag.style.top = (event.clientY - diffy) + "px";

                        }

                        break;

                    case "mouseup":

                        drag = null;

                        break;

                }

            }

        },

        dragEvent: function() {

            var drag = null,

                ce = new muphy.costomEvent();

            diffx = 0,

                diffy = 0;

            $(document).unbind("mousedown", handleEvent);

            $(document).unbind("mousemove", handleEvent);

            $(document).unbind("mouseup", handleEvent);

            $(document).bind("mousedown", handleEvent);

            $(document).bind("mousemove", handleEvent);

            $(document).bind("mouseup", handleEvent);



            function handleEvent(event) {

                event = event || window.event;

                var target = event.target || event.srcElement;

                switch (event.type) {

                    case "mousedown":

                        if ($m.nvl(target.className).indexOf("draggable") > -1) {

                            drag = target;

                            diffx = event.clientX - target.offsetLeft;

                            diffy = event.clientY - target.offsetTop;

                            event.type = "dragstart";

                            ce.fire(event)

                        }

                        break;

                    case "mousemove":

                        if (drag !== null) {

                            drag.style.left = (event.clientX - diffx) + "px";

                            drag.style.top = (event.clientY - diffy) + "px";

                            event.type = "drag";

                            ce.fire(event)

                        }

                        break;

                    case "mouseup":

                        if (drag != null) {

                            drag = null;

                            event.type = "dragend";

                            ce.fire(event)

                        }

                        break;

                }

            }

            return ce;

        },

        _costomEvent: function() {

            var handlers = {};

            this.addEvent = function(type, handler) {

                if (typeof handlers[type] === 'undefined') {

                    handlers[type] = [];

                }

                handlers[type].push(handler);

            }

            this.removeEvent = function(type, handler) {

                if (handlers[type] instanceof Array) {

                    muphy.each(handlers[type], function(i) {

                        if (this === handler) {

                            handlers[type].splice(i, 1);

                            return false;

                        }

                    });

                }

            }

            this.fire = function(event) {

                if (!event.target) {

                    event.target = this;

                }

                if (handlers[event.type] instanceof Array) {

                    muphy.each(handlers[event.type], function() {

                        this(event);

                    })

                }

            }

        },

        costomEvent: function() {}

    });

    (function(muphy) {

        muphy.costomEvent.prototype = {

            constructor: muphy.costomEvent1,

            handlers: {},

            addEvent: function(type, handler) {

                if (typeof this.handlers[type] === 'undefined') {

                    this.handlers[type] = [];

                }

                this.handlers[type].push(handler);

            },

            removeEvent: function(type, handler) {

                if (this.handlers[type] instanceof Array) {

                    var handlers = this.handlers[type];

                    muphy.each(handlers, function(i) {

                        if (this === handler) {

                            handlers.splice(i, 1);

                            return false;

                        }

                    });

                }

            },

            fire: function(event) {

                if (!event.target) {

                    event.target = this;

                }

                if (this.handlers[event.type] instanceof Array) {

                    muphy.each(this.handlers[event.type], function() {

                        this(event);

                    })

                }

            }

        }

    })(muphy);

    window.$m = muphy;

})(window, jQuery);