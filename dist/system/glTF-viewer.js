System.register(['cc'], function (exports) {
  'use strict';
  var cc, _decorator, systemEvent, SystemEventType, Node, Quat, Vec3, math, Component, game, Scene, director, CameraComponent, Color, EffectAsset;
  return {
    setters: [function (module) {
      cc = module;
      _decorator = module._decorator;
      systemEvent = module.systemEvent;
      SystemEventType = module.SystemEventType;
      Node = module.Node;
      Quat = module.Quat;
      Vec3 = module.Vec3;
      math = module.math;
      Component = module.Component;
      game = module.game;
      Scene = module.Scene;
      director = module.director;
      CameraComponent = module.CameraComponent;
      Color = module.Color;
      EffectAsset = module.EffectAsset;
    }],
    execute: function () {

      function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function (obj) {
            return typeof obj;
          };
        } else {
          _typeof = function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

      function unwrapExports (x) {
      	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
      }

      function createCommonjsModule(fn, module) {
      	return module = { exports: {} }, fn(module, module.exports), module.exports;
      }

      var O = 'object';

      var check = function check(it) {
        return it && it.Math == Math && it;
      }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


      var global_1 = // eslint-disable-next-line no-undef
      check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == O && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == O && window) || check((typeof self === "undefined" ? "undefined" : _typeof(self)) == O && self) || check(_typeof(commonjsGlobal) == O && commonjsGlobal) || // eslint-disable-next-line no-new-func
      Function('return this')();

      var fails = function fails(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };

      var descriptors = !fails(function () {
        return Object.defineProperty({}, 'a', {
          get: function get() {
            return 7;
          }
        }).a != 7;
      });

      var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

      var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
        1: 2
      }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
      // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

      var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
      } : nativePropertyIsEnumerable;
      var objectPropertyIsEnumerable = {
        f: f
      };

      var createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };

      var toString = {}.toString;

      var classofRaw = function classofRaw(it) {
        return toString.call(it).slice(8, -1);
      };

      var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

      var indexedObject = fails(function () {
        // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
        // eslint-disable-next-line no-prototype-builtins
        return !Object('z').propertyIsEnumerable(0);
      }) ? function (it) {
        return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
      } : Object;

      // `RequireObjectCoercible` abstract operation
      // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
      var requireObjectCoercible = function requireObjectCoercible(it) {
        if (it == undefined) throw TypeError("Can't call method on " + it);
        return it;
      };

      var toIndexedObject = function toIndexedObject(it) {
        return indexedObject(requireObjectCoercible(it));
      };

      var isObject = function isObject(it) {
        return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
      };

      // https://tc39.github.io/ecma262/#sec-toprimitive
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string

      var toPrimitive = function toPrimitive(input, PREFERRED_STRING) {
        if (!isObject(input)) return input;
        var fn, val;
        if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
        if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
        throw TypeError("Can't convert object to primitive value");
      };

      var hasOwnProperty = {}.hasOwnProperty;

      var has = function has(it, key) {
        return hasOwnProperty.call(it, key);
      };

      var document$1 = global_1.document; // typeof document.createElement is 'object' in old IE

      var EXISTS = isObject(document$1) && isObject(document$1.createElement);

      var documentCreateElement = function documentCreateElement(it) {
        return EXISTS ? document$1.createElement(it) : {};
      };

      var ie8DomDefine = !descriptors && !fails(function () {
        return Object.defineProperty(documentCreateElement('div'), 'a', {
          get: function get() {
            return 7;
          }
        }).a != 7;
      });

      var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

      var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (ie8DomDefine) try {
          return nativeGetOwnPropertyDescriptor(O, P);
        } catch (error) {
          /* empty */
        }
        if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
      };
      var objectGetOwnPropertyDescriptor = {
        f: f$1
      };

      var anObject = function anObject(it) {
        if (!isObject(it)) {
          throw TypeError(String(it) + ' is not an object');
        }

        return it;
      };

      var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-object.defineproperty

      var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (ie8DomDefine) try {
          return nativeDefineProperty(O, P, Attributes);
        } catch (error) {
          /* empty */
        }
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
      var objectDefineProperty = {
        f: f$2
      };

      var hide = descriptors ? function (object, key, value) {
        return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };

      var setGlobal = function setGlobal(key, value) {
        try {
          hide(global_1, key, value);
        } catch (error) {
          global_1[key] = value;
        }

        return value;
      };

      var isPure = false;

      var shared = createCommonjsModule(function (module) {
        var SHARED = '__core-js_shared__';
        var store = global_1[SHARED] || setGlobal(SHARED, {});
        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: '3.2.1',
          mode:  'global',
          copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
        });
      });

      var functionToString = shared('native-function-to-string', Function.toString);

      var WeakMap = global_1.WeakMap;
      var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

      var id = 0;
      var postfix = Math.random();

      var uid = function uid(key) {
        return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
      };

      var keys = shared('keys');

      var sharedKey = function sharedKey(key) {
        return keys[key] || (keys[key] = uid(key));
      };

      var hiddenKeys = {};

      var WeakMap$1 = global_1.WeakMap;
      var set, get, has$1;

      var enforce = function enforce(it) {
        return has$1(it) ? get(it) : set(it, {});
      };

      var getterFor = function getterFor(TYPE) {
        return function (it) {
          var state;

          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required');
          }

          return state;
        };
      };

      if (nativeWeakMap) {
        var store = new WeakMap$1();
        var wmget = store.get;
        var wmhas = store.has;
        var wmset = store.set;

        set = function set(it, metadata) {
          wmset.call(store, it, metadata);
          return metadata;
        };

        get = function get(it) {
          return wmget.call(store, it) || {};
        };

        has$1 = function has(it) {
          return wmhas.call(store, it);
        };
      } else {
        var STATE = sharedKey('state');
        hiddenKeys[STATE] = true;

        set = function set(it, metadata) {
          hide(it, STATE, metadata);
          return metadata;
        };

        get = function get(it) {
          return has(it, STATE) ? it[STATE] : {};
        };

        has$1 = function has$1(it) {
          return has(it, STATE);
        };
      }

      var internalState = {
        set: set,
        get: get,
        has: has$1,
        enforce: enforce,
        getterFor: getterFor
      };

      var redefine = createCommonjsModule(function (module) {
        var getInternalState = internalState.get;
        var enforceInternalState = internalState.enforce;
        var TEMPLATE = String(functionToString).split('toString');
        shared('inspectSource', function (it) {
          return functionToString.call(it);
        });
        (module.exports = function (O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;

          if (typeof value == 'function') {
            if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
            enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
          }

          if (O === global_1) {
            if (simple) O[key] = value;else setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }

          if (simple) O[key] = value;else hide(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, 'toString', function toString() {
          return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
        });
      });

      var path = global_1;

      var aFunction = function aFunction(variable) {
        return typeof variable == 'function' ? variable : undefined;
      };

      var getBuiltIn = function getBuiltIn(namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
      };

      var ceil = Math.ceil;
      var floor = Math.floor; // `ToInteger` abstract operation
      // https://tc39.github.io/ecma262/#sec-tointeger

      var toInteger = function toInteger(argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
      };

      var min = Math.min; // `ToLength` abstract operation
      // https://tc39.github.io/ecma262/#sec-tolength

      var toLength = function toLength(argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
      };

      var max = Math.max;
      var min$1 = Math.min; // Helper for a popular repeating case of the spec:
      // Let integer be ? ToInteger(index).
      // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

      var toAbsoluteIndex = function toAbsoluteIndex(index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
      };

      var createMethod = function createMethod(IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIndexedObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value; // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare

          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++]; // eslint-disable-next-line no-self-compare

            if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
          } else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };

      var arrayIncludes = {
        // `Array.prototype.includes` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };

      var indexOf = arrayIncludes.indexOf;

      var objectKeysInternal = function objectKeysInternal(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;

        for (key in O) {
          !has(hiddenKeys, key) && has(O, key) && result.push(key);
        } // Don't enum bug & hidden keys


        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
          }
        }

        return result;
      };

      // IE8- don't enum bug keys
      var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

      var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

      var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return objectKeysInternal(O, hiddenKeys$1);
      };

      var objectGetOwnPropertyNames = {
        f: f$3
      };

      var f$4 = Object.getOwnPropertySymbols;
      var objectGetOwnPropertySymbols = {
        f: f$4
      };

      var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = objectGetOwnPropertyNames.f(anObject(it));
        var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
      };

      var copyConstructorProperties = function copyConstructorProperties(target, source) {
        var keys = ownKeys(source);
        var defineProperty = objectDefineProperty.f;
        var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      };

      var replacement = /#|\.prototype\./;

      var isForced = function isForced(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
      };

      var normalize = isForced.normalize = function (string) {
        return String(string).replace(replacement, '.').toLowerCase();
      };

      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = 'N';
      var POLYFILL = isForced.POLYFILL = 'P';
      var isForced_1 = isForced;

      var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
      /*
        options.target      - name of the target object
        options.global      - target is the global object
        options.stat        - export as static methods of target
        options.proto       - export as prototype methods of target
        options.real        - real prototype method for the `pure` version
        options.forced      - export even if the native feature is available
        options.bind        - bind methods to the target, required for the `pure` version
        options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
        options.unsafe      - use the simple assignment of property instead of delete + defineProperty
        options.sham        - add a flag to not completely full polyfills
        options.enumerable  - export as enumerable property
        options.noTargetGet - prevent calling a getter on target
      */

      var _export = function _export(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;

        if (GLOBAL) {
          target = global_1;
        } else if (STATIC) {
          target = global_1[TARGET] || setGlobal(TARGET, {});
        } else {
          target = (global_1[TARGET] || {}).prototype;
        }

        if (target) for (key in source) {
          sourceProperty = source[key];

          if (options.noTargetGet) {
            descriptor = getOwnPropertyDescriptor$1(target, key);
            targetProperty = descriptor && descriptor.value;
          } else targetProperty = target[key];

          FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

          if (!FORCED && targetProperty !== undefined) {
            if (_typeof(sourceProperty) === _typeof(targetProperty)) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          } // add a flag to not completely full polyfills


          if (options.sham || targetProperty && targetProperty.sham) {
            hide(sourceProperty, 'sham', true);
          } // extend global


          redefine(target, key, sourceProperty, options);
        }
      };

      var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
        // Chrome 38 Symbol has incorrect toString conversion
        // eslint-disable-next-line no-undef
        return !String(Symbol());
      });

      // https://tc39.github.io/ecma262/#sec-isarray

      var isArray = Array.isArray || function isArray(arg) {
        return classofRaw(arg) == 'Array';
      };

      // https://tc39.github.io/ecma262/#sec-toobject

      var toObject = function toObject(argument) {
        return Object(requireObjectCoercible(argument));
      };

      // https://tc39.github.io/ecma262/#sec-object.keys

      var objectKeys = Object.keys || function keys(O) {
        return objectKeysInternal(O, enumBugKeys);
      };

      // https://tc39.github.io/ecma262/#sec-object.defineproperties

      var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;

        while (length > index) {
          objectDefineProperty.f(O, key = keys[index++], Properties[key]);
        }

        return O;
      };

      var html = getBuiltIn('document', 'documentElement');

      var IE_PROTO = sharedKey('IE_PROTO');
      var PROTOTYPE = 'prototype';

      var Empty = function Empty() {
        /* empty */
      }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


      var _createDict = function createDict() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = documentCreateElement('iframe');
        var length = enumBugKeys.length;
        var lt = '<';
        var script = 'script';
        var gt = '>';
        var js = 'java' + script + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        iframe.src = String(js);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
        iframeDocument.close();
        _createDict = iframeDocument.F;

        while (length--) {
          delete _createDict[PROTOTYPE][enumBugKeys[length]];
        }

        return _createDict();
      }; // `Object.create` method
      // https://tc39.github.io/ecma262/#sec-object.create


      var objectCreate = Object.create || function create(O, Properties) {
        var result;

        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

          result[IE_PROTO] = O;
        } else result = _createDict();

        return Properties === undefined ? result : objectDefineProperties(result, Properties);
      };

      hiddenKeys[IE_PROTO] = true;

      var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;
      var toString$1 = {}.toString;
      var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      var getWindowNames = function getWindowNames(it) {
        try {
          return nativeGetOwnPropertyNames(it);
        } catch (error) {
          return windowNames.slice();
        }
      }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


      var f$5 = function getOwnPropertyNames(it) {
        return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : nativeGetOwnPropertyNames(toIndexedObject(it));
      };

      var objectGetOwnPropertyNamesExternal = {
        f: f$5
      };

      var _Symbol = global_1.Symbol;
      var store$1 = shared('wks');

      var wellKnownSymbol = function wellKnownSymbol(name) {
        return store$1[name] || (store$1[name] = nativeSymbol && _Symbol[name] || (nativeSymbol ? _Symbol : uid)('Symbol.' + name));
      };

      var f$6 = wellKnownSymbol;
      var wrappedWellKnownSymbol = {
        f: f$6
      };

      var defineProperty = objectDefineProperty.f;

      var defineWellKnownSymbol = function defineWellKnownSymbol(NAME) {
        var _Symbol = path.Symbol || (path.Symbol = {});

        if (!has(_Symbol, NAME)) defineProperty(_Symbol, NAME, {
          value: wrappedWellKnownSymbol.f(NAME)
        });
      };

      var defineProperty$1 = objectDefineProperty.f;
      var TO_STRING_TAG = wellKnownSymbol('toStringTag');

      var setToStringTag = function setToStringTag(it, TAG, STATIC) {
        if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
          defineProperty$1(it, TO_STRING_TAG, {
            configurable: true,
            value: TAG
          });
        }
      };

      var aFunction$1 = function aFunction(it) {
        if (typeof it != 'function') {
          throw TypeError(String(it) + ' is not a function');
        }

        return it;
      };

      var bindContext = function bindContext(fn, that, length) {
        aFunction$1(fn);
        if (that === undefined) return fn;

        switch (length) {
          case 0:
            return function () {
              return fn.call(that);
            };

          case 1:
            return function (a) {
              return fn.call(that, a);
            };

          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };

          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }

        return function ()
        /* ...args */
        {
          return fn.apply(that, arguments);
        };
      };

      var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
      // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

      var arraySpeciesCreate = function arraySpeciesCreate(originalArray, length) {
        var C;

        if (isArray(originalArray)) {
          C = originalArray.constructor; // cross-realm fallback

          if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null) C = undefined;
          }
        }

        return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
      };

      var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

      var createMethod$1 = function createMethod(TYPE) {
        var IS_MAP = TYPE == 1;
        var IS_FILTER = TYPE == 2;
        var IS_SOME = TYPE == 3;
        var IS_EVERY = TYPE == 4;
        var IS_FIND_INDEX = TYPE == 6;
        var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
        return function ($this, callbackfn, that, specificCreate) {
          var O = toObject($this);
          var self = indexedObject(O);
          var boundFunction = bindContext(callbackfn, that, 3);
          var length = toLength(self.length);
          var index = 0;
          var create = specificCreate || arraySpeciesCreate;
          var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
          var value, result;

          for (; length > index; index++) {
            if (NO_HOLES || index in self) {
              value = self[index];
              result = boundFunction(value, index, O);

              if (TYPE) {
                if (IS_MAP) target[index] = result; // map
                else if (result) switch (TYPE) {
                    case 3:
                      return true;
                    // some

                    case 5:
                      return value;
                    // find

                    case 6:
                      return index;
                    // findIndex

                    case 2:
                      push.call(target, value);
                    // filter
                  } else if (IS_EVERY) return false; // every
              }
            }
          }

          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };

      var arrayIteration = {
        // `Array.prototype.forEach` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
        forEach: createMethod$1(0),
        // `Array.prototype.map` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.map
        map: createMethod$1(1),
        // `Array.prototype.filter` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.filter
        filter: createMethod$1(2),
        // `Array.prototype.some` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.some
        some: createMethod$1(3),
        // `Array.prototype.every` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.every
        every: createMethod$1(4),
        // `Array.prototype.find` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.find
        find: createMethod$1(5),
        // `Array.prototype.findIndex` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod$1(6)
      };

      var $forEach = arrayIteration.forEach;
      var HIDDEN = sharedKey('hidden');
      var SYMBOL = 'Symbol';
      var PROTOTYPE$1 = 'prototype';
      var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
      var setInternalState = internalState.set;
      var getInternalState = internalState.getterFor(SYMBOL);
      var ObjectPrototype = Object[PROTOTYPE$1];
      var $Symbol = global_1.Symbol;
      var JSON$1 = global_1.JSON;
      var nativeJSONStringify = JSON$1 && JSON$1.stringify;
      var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
      var nativeDefineProperty$1 = objectDefineProperty.f;
      var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
      var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
      var AllSymbols = shared('symbols');
      var ObjectPrototypeSymbols = shared('op-symbols');
      var StringToSymbolRegistry = shared('string-to-symbol-registry');
      var SymbolToStringRegistry = shared('symbol-to-string-registry');
      var WellKnownSymbolsStore = shared('wks');
      var QObject = global_1.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

      var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

      var setSymbolDescriptor = descriptors && fails(function () {
        return objectCreate(nativeDefineProperty$1({}, 'a', {
          get: function get() {
            return nativeDefineProperty$1(this, 'a', {
              value: 7
            }).a;
          }
        })).a != 7;
      }) ? function (O, P, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
        if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
        nativeDefineProperty$1(O, P, Attributes);

        if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
          nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
        }
      } : nativeDefineProperty$1;

      var wrap = function wrap(tag, description) {
        var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
        setInternalState(symbol, {
          type: SYMBOL,
          tag: tag,
          description: description
        });
        if (!descriptors) symbol.description = description;
        return symbol;
      };

      var isSymbol = nativeSymbol && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
        return _typeof(it) == 'symbol';
      } : function (it) {
        return Object(it) instanceof $Symbol;
      };

      var $defineProperty = function defineProperty(O, P, Attributes) {
        if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
        anObject(O);
        var key = toPrimitive(P, true);
        anObject(Attributes);

        if (has(AllSymbols, key)) {
          if (!Attributes.enumerable) {
            if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
            O[HIDDEN][key] = true;
          } else {
            if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
            Attributes = objectCreate(Attributes, {
              enumerable: createPropertyDescriptor(0, false)
            });
          }

          return setSymbolDescriptor(O, key, Attributes);
        }

        return nativeDefineProperty$1(O, key, Attributes);
      };

      var $defineProperties = function defineProperties(O, Properties) {
        anObject(O);
        var properties = toIndexedObject(Properties);
        var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
        $forEach(keys, function (key) {
          if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
        });
        return O;
      };

      var $create = function create(O, Properties) {
        return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
      };

      var $propertyIsEnumerable = function propertyIsEnumerable(V) {
        var P = toPrimitive(V, true);
        var enumerable = nativePropertyIsEnumerable$1.call(this, P);
        if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
        return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
      };

      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
        var it = toIndexedObject(O);
        var key = toPrimitive(P, true);
        if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
        var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

        if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
          descriptor.enumerable = true;
        }

        return descriptor;
      };

      var $getOwnPropertyNames = function getOwnPropertyNames(O) {
        var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
        var result = [];
        $forEach(names, function (key) {
          if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
        });
        return result;
      };

      var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
        var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
        var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
        var result = [];
        $forEach(names, function (key) {
          if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
            result.push(AllSymbols[key]);
          }
        });
        return result;
      }; // `Symbol` constructor
      // https://tc39.github.io/ecma262/#sec-symbol-constructor


      if (!nativeSymbol) {
        $Symbol = function _Symbol() {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
          var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
          var tag = uid(description);

          var setter = function setter(value) {
            if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
          };

          if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
            configurable: true,
            set: setter
          });
          return wrap(tag, description);
        };

        redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
          return getInternalState(this).tag;
        });
        objectPropertyIsEnumerable.f = $propertyIsEnumerable;
        objectDefineProperty.f = $defineProperty;
        objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
        objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
        objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

        if (descriptors) {
          // https://github.com/tc39/proposal-Symbol-description
          nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
            configurable: true,
            get: function description() {
              return getInternalState(this).description;
            }
          });

          {
            redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
              unsafe: true
            });
          }
        }

        wrappedWellKnownSymbol.f = function (name) {
          return wrap(wellKnownSymbol(name), name);
        };
      }

      _export({
        global: true,
        wrap: true,
        forced: !nativeSymbol,
        sham: !nativeSymbol
      }, {
        Symbol: $Symbol
      });
      $forEach(objectKeys(WellKnownSymbolsStore), function (name) {
        defineWellKnownSymbol(name);
      });
      _export({
        target: SYMBOL,
        stat: true,
        forced: !nativeSymbol
      }, {
        // `Symbol.for` method
        // https://tc39.github.io/ecma262/#sec-symbol.for
        'for': function _for(key) {
          var string = String(key);
          if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
          var symbol = $Symbol(string);
          StringToSymbolRegistry[string] = symbol;
          SymbolToStringRegistry[symbol] = string;
          return symbol;
        },
        // `Symbol.keyFor` method
        // https://tc39.github.io/ecma262/#sec-symbol.keyfor
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
          if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
        },
        useSetter: function useSetter() {
          USE_SETTER = true;
        },
        useSimple: function useSimple() {
          USE_SETTER = false;
        }
      });
      _export({
        target: 'Object',
        stat: true,
        forced: !nativeSymbol,
        sham: !descriptors
      }, {
        // `Object.create` method
        // https://tc39.github.io/ecma262/#sec-object.create
        create: $create,
        // `Object.defineProperty` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperty
        defineProperty: $defineProperty,
        // `Object.defineProperties` method
        // https://tc39.github.io/ecma262/#sec-object.defineproperties
        defineProperties: $defineProperties,
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
      });
      _export({
        target: 'Object',
        stat: true,
        forced: !nativeSymbol
      }, {
        // `Object.getOwnPropertyNames` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
        getOwnPropertyNames: $getOwnPropertyNames,
        // `Object.getOwnPropertySymbols` method
        // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
        getOwnPropertySymbols: $getOwnPropertySymbols
      }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
      // https://bugs.chromium.org/p/v8/issues/detail?id=3443

      _export({
        target: 'Object',
        stat: true,
        forced: fails(function () {
          objectGetOwnPropertySymbols.f(1);
        })
      }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          return objectGetOwnPropertySymbols.f(toObject(it));
        }
      }); // `JSON.stringify` method behavior with symbols
      // https://tc39.github.io/ecma262/#sec-json.stringify

      JSON$1 && _export({
        target: 'JSON',
        stat: true,
        forced: !nativeSymbol || fails(function () {
          var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

          return nativeJSONStringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
          || nativeJSONStringify({
            a: symbol
          }) != '{}' // V8 throws on boxed symbols
          || nativeJSONStringify(Object(symbol)) != '{}';
        })
      }, {
        stringify: function stringify(it) {
          var args = [it];
          var index = 1;
          var replacer, $replacer;

          while (arguments.length > index) {
            args.push(arguments[index++]);
          }

          $replacer = replacer = args[1];
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

          if (!isArray(replacer)) replacer = function replacer(key, value) {
            if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
          args[1] = replacer;
          return nativeJSONStringify.apply(JSON$1, args);
        }
      }); // `Symbol.prototype[@@toPrimitive]` method
      // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive

      if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) hide($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf); // `Symbol.prototype[@@toStringTag]` property
      // https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag

      setToStringTag($Symbol, SYMBOL);
      hiddenKeys[HIDDEN] = true;

      // https://tc39.github.io/ecma262/#sec-symbol.asynciterator

      defineWellKnownSymbol('asyncIterator');

      var defineProperty$2 = objectDefineProperty.f;
      var NativeSymbol = global_1.Symbol;

      if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) || // Safari 12 bug
      NativeSymbol().description !== undefined)) {
        var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

        var SymbolWrapper = function _Symbol() {
          var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
          var result = this instanceof SymbolWrapper ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
          : description === undefined ? NativeSymbol() : NativeSymbol(description);
          if (description === '') EmptyStringDescriptionStore[result] = true;
          return result;
        };

        copyConstructorProperties(SymbolWrapper, NativeSymbol);
        var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
        symbolPrototype.constructor = SymbolWrapper;
        var symbolToString = symbolPrototype.toString;

        var _native = String(NativeSymbol('test')) == 'Symbol(test)';

        var regexp = /^Symbol\((.*)\)[^)]+$/;
        defineProperty$2(symbolPrototype, 'description', {
          configurable: true,
          get: function description() {
            var symbol = isObject(this) ? this.valueOf() : this;
            var string = symbolToString.call(symbol);
            if (has(EmptyStringDescriptionStore, symbol)) return '';
            var desc = _native ? string.slice(7, -1) : string.replace(regexp, '$1');
            return desc === '' ? undefined : desc;
          }
        });
        _export({
          global: true,
          forced: true
        }, {
          Symbol: SymbolWrapper
        });
      }

      // https://tc39.github.io/ecma262/#sec-symbol.hasinstance

      defineWellKnownSymbol('hasInstance');

      // https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable

      defineWellKnownSymbol('isConcatSpreadable');

      // https://tc39.github.io/ecma262/#sec-symbol.iterator

      defineWellKnownSymbol('iterator');

      // https://tc39.github.io/ecma262/#sec-symbol.match

      defineWellKnownSymbol('match');

      defineWellKnownSymbol('matchAll');

      // https://tc39.github.io/ecma262/#sec-symbol.replace

      defineWellKnownSymbol('replace');

      // https://tc39.github.io/ecma262/#sec-symbol.search

      defineWellKnownSymbol('search');

      // https://tc39.github.io/ecma262/#sec-symbol.species

      defineWellKnownSymbol('species');

      // https://tc39.github.io/ecma262/#sec-symbol.split

      defineWellKnownSymbol('split');

      // https://tc39.github.io/ecma262/#sec-symbol.toprimitive

      defineWellKnownSymbol('toPrimitive');

      // https://tc39.github.io/ecma262/#sec-symbol.tostringtag

      defineWellKnownSymbol('toStringTag');

      // https://tc39.github.io/ecma262/#sec-symbol.unscopables

      defineWellKnownSymbol('unscopables');

      var nativeAssign = Object.assign; // `Object.assign` method
      // https://tc39.github.io/ecma262/#sec-object.assign
      // should work with symbols and should have deterministic property order (V8 bug)

      var objectAssign = !nativeAssign || fails(function () {
        var A = {};
        var B = {}; // eslint-disable-next-line no-undef

        var symbol = Symbol();
        var alphabet = 'abcdefghijklmnopqrst';
        A[symbol] = 7;
        alphabet.split('').forEach(function (chr) {
          B[chr] = chr;
        });
        return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
      }) ? function assign(target, source) {
        // eslint-disable-line no-unused-vars
        var T = toObject(target);
        var argumentsLength = arguments.length;
        var index = 1;
        var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
        var propertyIsEnumerable = objectPropertyIsEnumerable.f;

        while (argumentsLength > index) {
          var S = indexedObject(arguments[index++]);
          var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
          var length = keys.length;
          var j = 0;
          var key;

          while (length > j) {
            key = keys[j++];
            if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
          }
        }

        return T;
      } : nativeAssign;

      // https://tc39.github.io/ecma262/#sec-object.assign

      _export({
        target: 'Object',
        stat: true,
        forced: Object.assign !== objectAssign
      }, {
        assign: objectAssign
      });

      // https://tc39.github.io/ecma262/#sec-object.create

      _export({
        target: 'Object',
        stat: true,
        sham: !descriptors
      }, {
        create: objectCreate
      });

      // https://tc39.github.io/ecma262/#sec-object.defineproperty

      _export({
        target: 'Object',
        stat: true,
        forced: !descriptors,
        sham: !descriptors
      }, {
        defineProperty: objectDefineProperty.f
      });

      // https://tc39.github.io/ecma262/#sec-object.defineproperties

      _export({
        target: 'Object',
        stat: true,
        forced: !descriptors,
        sham: !descriptors
      }, {
        defineProperties: objectDefineProperties
      });

      var propertyIsEnumerable = objectPropertyIsEnumerable.f; // `Object.{ entries, values }` methods implementation

      var createMethod$2 = function createMethod(TO_ENTRIES) {
        return function (it) {
          var O = toIndexedObject(it);
          var keys = objectKeys(O);
          var length = keys.length;
          var i = 0;
          var result = [];
          var key;

          while (length > i) {
            key = keys[i++];

            if (!descriptors || propertyIsEnumerable.call(O, key)) {
              result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
            }
          }

          return result;
        };
      };

      var objectToArray = {
        // `Object.entries` method
        // https://tc39.github.io/ecma262/#sec-object.entries
        entries: createMethod$2(true),
        // `Object.values` method
        // https://tc39.github.io/ecma262/#sec-object.values
        values: createMethod$2(false)
      };

      var $entries = objectToArray.entries; // `Object.entries` method
      // https://tc39.github.io/ecma262/#sec-object.entries

      _export({
        target: 'Object',
        stat: true
      }, {
        entries: function entries(O) {
          return $entries(O);
        }
      });

      var freezing = !fails(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });

      var internalMetadata = createCommonjsModule(function (module) {
        var defineProperty = objectDefineProperty.f;
        var METADATA = uid('meta');
        var id = 0;

        var isExtensible = Object.isExtensible || function () {
          return true;
        };

        var setMetadata = function setMetadata(it) {
          defineProperty(it, METADATA, {
            value: {
              objectID: 'O' + ++id,
              // object ID
              weakData: {} // weak collections IDs

            }
          });
        };

        var fastKey = function fastKey(it, create) {
          // return a primitive with prefix
          if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

          if (!has(it, METADATA)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return 'F'; // not necessary to add metadata

            if (!create) return 'E'; // add missing metadata

            setMetadata(it); // return object ID
          }

          return it[METADATA].objectID;
        };

        var getWeakData = function getWeakData(it, create) {
          if (!has(it, METADATA)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true; // not necessary to add metadata

            if (!create) return false; // add missing metadata

            setMetadata(it); // return the store of weak collections IDs
          }

          return it[METADATA].weakData;
        }; // add metadata on freeze-family methods calling


        var onFreeze = function onFreeze(it) {
          if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
          return it;
        };

        var meta = module.exports = {
          REQUIRED: false,
          fastKey: fastKey,
          getWeakData: getWeakData,
          onFreeze: onFreeze
        };
        hiddenKeys[METADATA] = true;
      });
      var internalMetadata_1 = internalMetadata.REQUIRED;
      var internalMetadata_2 = internalMetadata.fastKey;
      var internalMetadata_3 = internalMetadata.getWeakData;
      var internalMetadata_4 = internalMetadata.onFreeze;

      var onFreeze = internalMetadata.onFreeze;
      var nativeFreeze = Object.freeze;
      var FAILS_ON_PRIMITIVES = fails(function () {
        nativeFreeze(1);
      }); // `Object.freeze` method
      // https://tc39.github.io/ecma262/#sec-object.freeze

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES,
        sham: !freezing
      }, {
        freeze: function freeze(it) {
          return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
        }
      });

      var iterators = {};

      var ITERATOR = wellKnownSymbol('iterator');
      var ArrayPrototype = Array.prototype; // check on default Array iterator

      var isArrayIteratorMethod = function isArrayIteratorMethod(it) {
        return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };

      var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag'); // ES3 wrong here

      var CORRECT_ARGUMENTS = classofRaw(function () {
        return arguments;
      }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

      var tryGet = function tryGet(it, key) {
        try {
          return it[key];
        } catch (error) {
          /* empty */
        }
      }; // getting tag from ES6+ `Object.prototype.toString`


      var classof = function classof(it) {
        var O, tag, result;
        return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
        : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
        : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
      };

      var ITERATOR$1 = wellKnownSymbol('iterator');

      var getIteratorMethod = function getIteratorMethod(it) {
        if (it != undefined) return it[ITERATOR$1] || it['@@iterator'] || iterators[classof(it)];
      };

      var callWithSafeIterationClosing = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
        } catch (error) {
          var returnMethod = iterator['return'];
          if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
          throw error;
        }
      };

      var iterate_1 = createCommonjsModule(function (module) {
        var Result = function Result(stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };

        var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
          var boundFunction = bindContext(fn, that, AS_ENTRIES ? 2 : 1);
          var iterator, iterFn, index, length, result, step;

          if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

            if (isArrayIteratorMethod(iterFn)) {
              for (index = 0, length = toLength(iterable.length); length > index; index++) {
                result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
                if (result && result instanceof Result) return result;
              }

              return new Result(false);
            }

            iterator = iterFn.call(iterable);
          }

          while (!(step = iterator.next()).done) {
            result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
            if (result && result instanceof Result) return result;
          }

          return new Result(false);
        };

        iterate.stop = function (result) {
          return new Result(true, result);
        };
      });

      var createProperty = function createProperty(object, key, value) {
        var propertyKey = toPrimitive(key);
        if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
      };

      // https://github.com/tc39/proposal-object-from-entries

      _export({
        target: 'Object',
        stat: true
      }, {
        fromEntries: function fromEntries(iterable) {
          var obj = {};
          iterate_1(iterable, function (k, v) {
            createProperty(obj, k, v);
          }, undefined, true);
          return obj;
        }
      });

      var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
      var FAILS_ON_PRIMITIVES$1 = fails(function () {
        nativeGetOwnPropertyDescriptor$2(1);
      });
      var FORCED = !descriptors || FAILS_ON_PRIMITIVES$1; // `Object.getOwnPropertyDescriptor` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

      _export({
        target: 'Object',
        stat: true,
        forced: FORCED,
        sham: !descriptors
      }, {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
          return nativeGetOwnPropertyDescriptor$2(toIndexedObject(it), key);
        }
      });

      // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors

      _export({
        target: 'Object',
        stat: true,
        sham: !descriptors
      }, {
        getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
          var O = toIndexedObject(object);
          var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
          var keys = ownKeys(O);
          var result = {};
          var index = 0;
          var key, descriptor;

          while (keys.length > index) {
            descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
            if (descriptor !== undefined) createProperty(result, key, descriptor);
          }

          return result;
        }
      });

      var nativeGetOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f;
      var FAILS_ON_PRIMITIVES$2 = fails(function () {
        return !Object.getOwnPropertyNames(1);
      }); // `Object.getOwnPropertyNames` method
      // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES$2
      }, {
        getOwnPropertyNames: nativeGetOwnPropertyNames$2
      });

      var correctPrototypeGetter = !fails(function () {
        function F() {
          /* empty */
        }

        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F()) !== F.prototype;
      });

      var IE_PROTO$1 = sharedKey('IE_PROTO');
      var ObjectPrototype$1 = Object.prototype; // `Object.getPrototypeOf` method
      // https://tc39.github.io/ecma262/#sec-object.getprototypeof

      var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];

        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        }

        return O instanceof Object ? ObjectPrototype$1 : null;
      };

      var FAILS_ON_PRIMITIVES$3 = fails(function () {
        objectGetPrototypeOf(1);
      }); // `Object.getPrototypeOf` method
      // https://tc39.github.io/ecma262/#sec-object.getprototypeof

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES$3,
        sham: !correctPrototypeGetter
      }, {
        getPrototypeOf: function getPrototypeOf(it) {
          return objectGetPrototypeOf(toObject(it));
        }
      });

      // `SameValue` abstract operation
      // https://tc39.github.io/ecma262/#sec-samevalue
      var sameValue = Object.is || function is(x, y) {
        // eslint-disable-next-line no-self-compare
        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
      };

      // https://tc39.github.io/ecma262/#sec-object.is

      _export({
        target: 'Object',
        stat: true
      }, {
        is: sameValue
      });

      var nativeIsExtensible = Object.isExtensible;
      var FAILS_ON_PRIMITIVES$4 = fails(function () {
        nativeIsExtensible(1);
      }); // `Object.isExtensible` method
      // https://tc39.github.io/ecma262/#sec-object.isextensible

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES$4
      }, {
        isExtensible: function isExtensible(it) {
          return isObject(it) ? nativeIsExtensible ? nativeIsExtensible(it) : true : false;
        }
      });

      var nativeIsFrozen = Object.isFrozen;
      var FAILS_ON_PRIMITIVES$5 = fails(function () {
        nativeIsFrozen(1);
      }); // `Object.isFrozen` method
      // https://tc39.github.io/ecma262/#sec-object.isfrozen

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES$5
      }, {
        isFrozen: function isFrozen(it) {
          return isObject(it) ? nativeIsFrozen ? nativeIsFrozen(it) : false : true;
        }
      });

      var nativeIsSealed = Object.isSealed;
      var FAILS_ON_PRIMITIVES$6 = fails(function () {
        nativeIsSealed(1);
      }); // `Object.isSealed` method
      // https://tc39.github.io/ecma262/#sec-object.issealed

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES$6
      }, {
        isSealed: function isSealed(it) {
          return isObject(it) ? nativeIsSealed ? nativeIsSealed(it) : false : true;
        }
      });

      var FAILS_ON_PRIMITIVES$7 = fails(function () {
        objectKeys(1);
      }); // `Object.keys` method
      // https://tc39.github.io/ecma262/#sec-object.keys

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES$7
      }, {
        keys: function keys(it) {
          return objectKeys(toObject(it));
        }
      });

      var onFreeze$1 = internalMetadata.onFreeze;
      var nativePreventExtensions = Object.preventExtensions;
      var FAILS_ON_PRIMITIVES$8 = fails(function () {
        nativePreventExtensions(1);
      }); // `Object.preventExtensions` method
      // https://tc39.github.io/ecma262/#sec-object.preventextensions

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES$8,
        sham: !freezing
      }, {
        preventExtensions: function preventExtensions(it) {
          return nativePreventExtensions && isObject(it) ? nativePreventExtensions(onFreeze$1(it)) : it;
        }
      });

      var onFreeze$2 = internalMetadata.onFreeze;
      var nativeSeal = Object.seal;
      var FAILS_ON_PRIMITIVES$9 = fails(function () {
        nativeSeal(1);
      }); // `Object.seal` method
      // https://tc39.github.io/ecma262/#sec-object.seal

      _export({
        target: 'Object',
        stat: true,
        forced: FAILS_ON_PRIMITIVES$9,
        sham: !freezing
      }, {
        seal: function seal(it) {
          return nativeSeal && isObject(it) ? nativeSeal(onFreeze$2(it)) : it;
        }
      });

      var aPossiblePrototype = function aPossiblePrototype(it) {
        if (!isObject(it) && it !== null) {
          throw TypeError("Can't set " + String(it) + ' as a prototype');
        }

        return it;
      };

      // https://tc39.github.io/ecma262/#sec-object.setprototypeof
      // Works with __proto__ only. Old v8 can't work with null proto objects.

      /* eslint-disable no-proto */

      var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;

        try {
          setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
          setter.call(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
          /* empty */
        }

        return function setPrototypeOf(O, proto) {
          anObject(O);
          aPossiblePrototype(proto);
          if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
          return O;
        };
      }() : undefined);

      // https://tc39.github.io/ecma262/#sec-object.setprototypeof

      _export({
        target: 'Object',
        stat: true
      }, {
        setPrototypeOf: objectSetPrototypeOf
      });

      var $values = objectToArray.values; // `Object.values` method
      // https://tc39.github.io/ecma262/#sec-object.values

      _export({
        target: 'Object',
        stat: true
      }, {
        values: function values(O) {
          return $values(O);
        }
      });

      var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
      var test = {};
      test[TO_STRING_TAG$2] = 'z'; // `Object.prototype.toString` method implementation
      // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

      var objectToString = String(test) !== '[object z]' ? function toString() {
        return '[object ' + classof(this) + ']';
      } : test.toString;

      var ObjectPrototype$2 = Object.prototype; // `Object.prototype.toString` method
      // https://tc39.github.io/ecma262/#sec-object.prototype.tostring

      if (objectToString !== ObjectPrototype$2.toString) {
        redefine(ObjectPrototype$2, 'toString', objectToString, {
          unsafe: true
        });
      }

      var forcedObjectPrototypeAccessorsMethods =  !fails(function () {
        var key = Math.random(); // In FF throws only define methods
        // eslint-disable-next-line no-undef, no-useless-call

        __defineSetter__.call(null, key, function () {
          /* empty */
        });

        delete global_1[key];
      });

      // https://tc39.github.io/ecma262/#sec-object.prototype.__defineGetter__


      if (descriptors) {
        _export({
          target: 'Object',
          proto: true,
          forced: forcedObjectPrototypeAccessorsMethods
        }, {
          __defineGetter__: function __defineGetter__(P, getter) {
            objectDefineProperty.f(toObject(this), P, {
              get: aFunction$1(getter),
              enumerable: true,
              configurable: true
            });
          }
        });
      }

      // https://tc39.github.io/ecma262/#sec-object.prototype.__defineSetter__


      if (descriptors) {
        _export({
          target: 'Object',
          proto: true,
          forced: forcedObjectPrototypeAccessorsMethods
        }, {
          __defineSetter__: function __defineSetter__(P, setter) {
            objectDefineProperty.f(toObject(this), P, {
              set: aFunction$1(setter),
              enumerable: true,
              configurable: true
            });
          }
        });
      }

      var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupGetter__` method
      // https://tc39.github.io/ecma262/#sec-object.prototype.__lookupGetter__

      if (descriptors) {
        _export({
          target: 'Object',
          proto: true,
          forced: forcedObjectPrototypeAccessorsMethods
        }, {
          __lookupGetter__: function __lookupGetter__(P) {
            var O = toObject(this);
            var key = toPrimitive(P, true);
            var desc;

            do {
              if (desc = getOwnPropertyDescriptor$2(O, key)) return desc.get;
            } while (O = objectGetPrototypeOf(O));
          }
        });
      }

      var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupSetter__` method
      // https://tc39.github.io/ecma262/#sec-object.prototype.__lookupSetter__

      if (descriptors) {
        _export({
          target: 'Object',
          proto: true,
          forced: forcedObjectPrototypeAccessorsMethods
        }, {
          __lookupSetter__: function __lookupSetter__(P) {
            var O = toObject(this);
            var key = toPrimitive(P, true);
            var desc;

            do {
              if (desc = getOwnPropertyDescriptor$3(O, key)) return desc.set;
            } while (O = objectGetPrototypeOf(O));
          }
        });
      }

      var slice = [].slice;
      var factories = {};

      var construct = function construct(C, argsLength, args) {
        if (!(argsLength in factories)) {
          for (var list = [], i = 0; i < argsLength; i++) {
            list[i] = 'a[' + i + ']';
          } // eslint-disable-next-line no-new-func


          factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
        }

        return factories[argsLength](C, args);
      }; // `Function.prototype.bind` method implementation
      // https://tc39.github.io/ecma262/#sec-function.prototype.bind


      var functionBind = Function.bind || function bind(that
      /* , ...args */
      ) {
        var fn = aFunction$1(this);
        var partArgs = slice.call(arguments, 1);

        var boundFunction = function bound()
        /* args... */
        {
          var args = partArgs.concat(slice.call(arguments));
          return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
        };

        if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
        return boundFunction;
      };

      // https://tc39.github.io/ecma262/#sec-function.prototype.bind

      _export({
        target: 'Function',
        proto: true
      }, {
        bind: functionBind
      });

      var defineProperty$3 = objectDefineProperty.f;
      var FunctionPrototype = Function.prototype;
      var FunctionPrototypeToString = FunctionPrototype.toString;
      var nameRE = /^\s*function ([^ (]*)/;
      var NAME = 'name'; // Function instances `.name` property
      // https://tc39.github.io/ecma262/#sec-function-instances-name

      if (descriptors && !(NAME in FunctionPrototype)) {
        defineProperty$3(FunctionPrototype, NAME, {
          configurable: true,
          get: function get() {
            try {
              return FunctionPrototypeToString.call(this).match(nameRE)[1];
            } catch (error) {
              return '';
            }
          }
        });
      }

      var HAS_INSTANCE = wellKnownSymbol('hasInstance');
      var FunctionPrototype$1 = Function.prototype; // `Function.prototype[@@hasInstance]` method
      // https://tc39.github.io/ecma262/#sec-function.prototype-@@hasinstance

      if (!(HAS_INSTANCE in FunctionPrototype$1)) {
        objectDefineProperty.f(FunctionPrototype$1, HAS_INSTANCE, {
          value: function value(O) {
            if (typeof this != 'function' || !isObject(O)) return false;
            if (!isObject(this.prototype)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

            while (O = objectGetPrototypeOf(O)) {
              if (this.prototype === O) return true;
            }

            return false;
          }
        });
      }

      // https://tc39.github.io/ecma262/#sec-array.from


      var arrayFrom = function from(arrayLike
      /* , mapfn = undefined, thisArg = undefined */
      ) {
        var O = toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iteratorMethod = getIteratorMethod(O);
        var length, result, step, iterator;
        if (mapping) mapfn = bindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

        if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
          iterator = iteratorMethod.call(O);
          result = new C();

          for (; !(step = iterator.next()).done; index++) {
            createProperty(result, index, mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value);
          }
        } else {
          length = toLength(O.length);
          result = new C(length);

          for (; length > index; index++) {
            createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
          }
        }

        result.length = index;
        return result;
      };

      var ITERATOR$2 = wellKnownSymbol('iterator');
      var SAFE_CLOSING = false;

      try {
        var called = 0;
        var iteratorWithReturn = {
          next: function next() {
            return {
              done: !!called++
            };
          },
          'return': function _return() {
            SAFE_CLOSING = true;
          }
        };

        iteratorWithReturn[ITERATOR$2] = function () {
          return this;
        }; // eslint-disable-next-line no-throw-literal


        Array.from(iteratorWithReturn, function () {
          throw 2;
        });
      } catch (error) {
        /* empty */
      }

      var checkCorrectnessOfIteration = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        var ITERATION_SUPPORT = false;

        try {
          var object = {};

          object[ITERATOR$2] = function () {
            return {
              next: function next() {
                return {
                  done: ITERATION_SUPPORT = true
                };
              }
            };
          };

          exec(object);
        } catch (error) {
          /* empty */
        }

        return ITERATION_SUPPORT;
      };

      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
        Array.from(iterable);
      }); // `Array.from` method
      // https://tc39.github.io/ecma262/#sec-array.from

      _export({
        target: 'Array',
        stat: true,
        forced: INCORRECT_ITERATION
      }, {
        from: arrayFrom
      });

      // https://tc39.github.io/ecma262/#sec-array.isarray

      _export({
        target: 'Array',
        stat: true
      }, {
        isArray: isArray
      });

      var ISNT_GENERIC = fails(function () {
        function F() {
          /* empty */
        }

        return !(Array.of.call(F) instanceof F);
      }); // `Array.of` method
      // https://tc39.github.io/ecma262/#sec-array.of
      // WebKit Array.of isn't generic

      _export({
        target: 'Array',
        stat: true,
        forced: ISNT_GENERIC
      }, {
        of: function of()
        /* ...args */
        {
          var index = 0;
          var argumentsLength = arguments.length;
          var result = new (typeof this == 'function' ? this : Array)(argumentsLength);

          while (argumentsLength > index) {
            createProperty(result, index, arguments[index++]);
          }

          result.length = argumentsLength;
          return result;
        }
      });

      var SPECIES$1 = wellKnownSymbol('species');

      var arrayMethodHasSpeciesSupport = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
        return !fails(function () {
          var array = [];
          var constructor = array.constructor = {};

          constructor[SPECIES$1] = function () {
            return {
              foo: 1
            };
          };

          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };

      var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
      var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
      var IS_CONCAT_SPREADABLE_SUPPORT = !fails(function () {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });
      var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

      var isConcatSpreadable = function isConcatSpreadable(O) {
        if (!isObject(O)) return false;
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return spreadable !== undefined ? !!spreadable : isArray(O);
      };

      var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.concat
      // with adding support of @@isConcatSpreadable and @@species

      _export({
        target: 'Array',
        proto: true,
        forced: FORCED$1
      }, {
        concat: function concat(arg) {
          // eslint-disable-line no-unused-vars
          var O = toObject(this);
          var A = arraySpeciesCreate(O, 0);
          var n = 0;
          var i, k, length, len, E;

          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];

            if (isConcatSpreadable(E)) {
              len = toLength(E.length);
              if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

              for (k = 0; k < len; k++, n++) {
                if (k in E) createProperty(A, n, E[k]);
              }
            } else {
              if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
              createProperty(A, n++, E);
            }
          }

          A.length = n;
          return A;
        }
      });

      var min$2 = Math.min; // `Array.prototype.copyWithin` method implementation
      // https://tc39.github.io/ecma262/#sec-array.prototype.copywithin

      var arrayCopyWithin = [].copyWithin || function copyWithin(target
      /* = 0 */
      , start
      /* = 0, end = @length */
      ) {
        var O = toObject(this);
        var len = toLength(O.length);
        var to = toAbsoluteIndex(target, len);
        var from = toAbsoluteIndex(start, len);
        var end = arguments.length > 2 ? arguments[2] : undefined;
        var count = min$2((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
        var inc = 1;

        if (from < to && to < from + count) {
          inc = -1;
          from += count - 1;
          to += count - 1;
        }

        while (count-- > 0) {
          if (from in O) O[to] = O[from];else delete O[to];
          to += inc;
          from += inc;
        }

        return O;
      };

      var UNSCOPABLES = wellKnownSymbol('unscopables');
      var ArrayPrototype$1 = Array.prototype; // Array.prototype[@@unscopables]
      // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

      if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
        hide(ArrayPrototype$1, UNSCOPABLES, objectCreate(null));
      } // add a key to Array.prototype[@@unscopables]


      var addToUnscopables = function addToUnscopables(key) {
        ArrayPrototype$1[UNSCOPABLES][key] = true;
      };

      // https://tc39.github.io/ecma262/#sec-array.prototype.copywithin

      _export({
        target: 'Array',
        proto: true
      }, {
        copyWithin: arrayCopyWithin
      }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('copyWithin');

      var sloppyArrayMethod = function sloppyArrayMethod(METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !method || !fails(function () {
          // eslint-disable-next-line no-useless-call,no-throw-literal
          method.call(null, argument || function () {
            throw 1;
          }, 1);
        });
      };

      var $every = arrayIteration.every; // `Array.prototype.every` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.every

      _export({
        target: 'Array',
        proto: true,
        forced: sloppyArrayMethod('every')
      }, {
        every: function every(callbackfn
        /* , thisArg */
        ) {
          return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      // https://tc39.github.io/ecma262/#sec-array.prototype.fill


      var arrayFill = function fill(value
      /* , start = 0, end = @length */
      ) {
        var O = toObject(this);
        var length = toLength(O.length);
        var argumentsLength = arguments.length;
        var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
        var end = argumentsLength > 2 ? arguments[2] : undefined;
        var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

        while (endPos > index) {
          O[index++] = value;
        }

        return O;
      };

      // https://tc39.github.io/ecma262/#sec-array.prototype.fill

      _export({
        target: 'Array',
        proto: true
      }, {
        fill: arrayFill
      }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('fill');

      var $filter = arrayIteration.filter; // `Array.prototype.filter` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.filter
      // with adding support of @@species

      _export({
        target: 'Array',
        proto: true,
        forced: !arrayMethodHasSpeciesSupport('filter')
      }, {
        filter: function filter(callbackfn
        /* , thisArg */
        ) {
          return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      var $find = arrayIteration.find;
      var FIND = 'find';
      var SKIPS_HOLES = true; // Shouldn't skip holes

      if (FIND in []) Array(1)[FIND](function () {
        SKIPS_HOLES = false;
      }); // `Array.prototype.find` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.find

      _export({
        target: 'Array',
        proto: true,
        forced: SKIPS_HOLES
      }, {
        find: function find(callbackfn
        /* , that = undefined */
        ) {
          return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables(FIND);

      var $findIndex = arrayIteration.findIndex;
      var FIND_INDEX = 'findIndex';
      var SKIPS_HOLES$1 = true; // Shouldn't skip holes

      if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
        SKIPS_HOLES$1 = false;
      }); // `Array.prototype.findIndex` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.findindex

      _export({
        target: 'Array',
        proto: true,
        forced: SKIPS_HOLES$1
      }, {
        findIndex: function findIndex(callbackfn
        /* , that = undefined */
        ) {
          return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables(FIND_INDEX);

      // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray


      var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
        var targetIndex = start;
        var sourceIndex = 0;
        var mapFn = mapper ? bindContext(mapper, thisArg, 3) : false;
        var element;

        while (sourceIndex < sourceLen) {
          if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

            if (depth > 0 && isArray(element)) {
              targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
            } else {
              if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
              target[targetIndex] = element;
            }

            targetIndex++;
          }

          sourceIndex++;
        }

        return targetIndex;
      };

      var flattenIntoArray_1 = flattenIntoArray;

      // https://github.com/tc39/proposal-flatMap


      _export({
        target: 'Array',
        proto: true
      }, {
        flat: function flat()
        /* depthArg = 1 */
        {
          var depthArg = arguments.length ? arguments[0] : undefined;
          var O = toObject(this);
          var sourceLen = toLength(O.length);
          var A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
          return A;
        }
      });

      // https://github.com/tc39/proposal-flatMap


      _export({
        target: 'Array',
        proto: true
      }, {
        flatMap: function flatMap(callbackfn
        /* , thisArg */
        ) {
          var O = toObject(this);
          var sourceLen = toLength(O.length);
          var A;
          aFunction$1(callbackfn);
          A = arraySpeciesCreate(O, 0);
          A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          return A;
        }
      });

      var $forEach$1 = arrayIteration.forEach; // `Array.prototype.forEach` method implementation
      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach

      var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn
      /* , thisArg */
      ) {
        return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      } : [].forEach;

      // https://tc39.github.io/ecma262/#sec-array.prototype.foreach


      _export({
        target: 'Array',
        proto: true,
        forced: [].forEach != arrayForEach
      }, {
        forEach: arrayForEach
      });

      var $includes = arrayIncludes.includes; // `Array.prototype.includes` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.includes

      _export({
        target: 'Array',
        proto: true
      }, {
        includes: function includes(el
        /* , fromIndex = 0 */
        ) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        }
      }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('includes');

      var $indexOf = arrayIncludes.indexOf;
      var nativeIndexOf = [].indexOf;
      var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
      var SLOPPY_METHOD = sloppyArrayMethod('indexOf'); // `Array.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.indexof

      _export({
        target: 'Array',
        proto: true,
        forced: NEGATIVE_ZERO || SLOPPY_METHOD
      }, {
        indexOf: function indexOf(searchElement
        /* , fromIndex = 0 */
        ) {
          return NEGATIVE_ZERO // convert -0 to +0
          ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      var nativeJoin = [].join;
      var ES3_STRINGS = indexedObject != Object;
      var SLOPPY_METHOD$1 = sloppyArrayMethod('join', ','); // `Array.prototype.join` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.join

      _export({
        target: 'Array',
        proto: true,
        forced: ES3_STRINGS || SLOPPY_METHOD$1
      }, {
        join: function join(separator) {
          return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
        }
      });

      var min$3 = Math.min;
      var nativeLastIndexOf = [].lastIndexOf;
      var NEGATIVE_ZERO$1 = !!nativeLastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
      var SLOPPY_METHOD$2 = sloppyArrayMethod('lastIndexOf'); // `Array.prototype.lastIndexOf` method implementation
      // https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

      var arrayLastIndexOf = NEGATIVE_ZERO$1 || SLOPPY_METHOD$2 ? function lastIndexOf(searchElement
      /* , fromIndex = @[*-1] */
      ) {
        // convert -0 to +0
        if (NEGATIVE_ZERO$1) return nativeLastIndexOf.apply(this, arguments) || 0;
        var O = toIndexedObject(this);
        var length = toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1) index = min$3(index, toInteger(arguments[1]));
        if (index < 0) index = length + index;

        for (; index >= 0; index--) {
          if (index in O && O[index] === searchElement) return index || 0;
        }

        return -1;
      } : nativeLastIndexOf;

      // https://tc39.github.io/ecma262/#sec-array.prototype.lastindexof

      _export({
        target: 'Array',
        proto: true,
        forced: arrayLastIndexOf !== [].lastIndexOf
      }, {
        lastIndexOf: arrayLastIndexOf
      });

      var $map = arrayIteration.map; // `Array.prototype.map` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.map
      // with adding support of @@species

      _export({
        target: 'Array',
        proto: true,
        forced: !arrayMethodHasSpeciesSupport('map')
      }, {
        map: function map(callbackfn
        /* , thisArg */
        ) {
          return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      var createMethod$3 = function createMethod(IS_RIGHT) {
        return function (that, callbackfn, argumentsLength, memo) {
          aFunction$1(callbackfn);
          var O = toObject(that);
          var self = indexedObject(O);
          var length = toLength(O.length);
          var index = IS_RIGHT ? length - 1 : 0;
          var i = IS_RIGHT ? -1 : 1;
          if (argumentsLength < 2) while (true) {
            if (index in self) {
              memo = self[index];
              index += i;
              break;
            }

            index += i;

            if (IS_RIGHT ? index < 0 : length <= index) {
              throw TypeError('Reduce of empty array with no initial value');
            }
          }

          for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
            if (index in self) {
              memo = callbackfn(memo, self[index], index, O);
            }
          }

          return memo;
        };
      };

      var arrayReduce = {
        // `Array.prototype.reduce` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
        left: createMethod$3(false),
        // `Array.prototype.reduceRight` method
        // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
        right: createMethod$3(true)
      };

      var $reduce = arrayReduce.left; // `Array.prototype.reduce` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.reduce

      _export({
        target: 'Array',
        proto: true,
        forced: sloppyArrayMethod('reduce')
      }, {
        reduce: function reduce(callbackfn
        /* , initialValue */
        ) {
          return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      var $reduceRight = arrayReduce.right; // `Array.prototype.reduceRight` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright

      _export({
        target: 'Array',
        proto: true,
        forced: sloppyArrayMethod('reduceRight')
      }, {
        reduceRight: function reduceRight(callbackfn
        /* , initialValue */
        ) {
          return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      var nativeReverse = [].reverse;
      var test$1 = [1, 2]; // `Array.prototype.reverse` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.reverse
      // fix for Safari 12.0 bug
      // https://bugs.webkit.org/show_bug.cgi?id=188794

      _export({
        target: 'Array',
        proto: true,
        forced: String(test$1) === String(test$1.reverse())
      }, {
        reverse: function reverse() {
          if (isArray(this)) this.length = this.length;
          return nativeReverse.call(this);
        }
      });

      var SPECIES$2 = wellKnownSymbol('species');
      var nativeSlice = [].slice;
      var max$1 = Math.max; // `Array.prototype.slice` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.slice
      // fallback for not array-like ES3 strings and DOM objects

      _export({
        target: 'Array',
        proto: true,
        forced: !arrayMethodHasSpeciesSupport('slice')
      }, {
        slice: function slice(start, end) {
          var O = toIndexedObject(this);
          var length = toLength(O.length);
          var k = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

          var Constructor, result, n;

          if (isArray(O)) {
            Constructor = O.constructor; // cross-realm fallback

            if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
              Constructor = undefined;
            } else if (isObject(Constructor)) {
              Constructor = Constructor[SPECIES$2];
              if (Constructor === null) Constructor = undefined;
            }

            if (Constructor === Array || Constructor === undefined) {
              return nativeSlice.call(O, k, fin);
            }
          }

          result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));

          for (n = 0; k < fin; k++, n++) {
            if (k in O) createProperty(result, n, O[k]);
          }

          result.length = n;
          return result;
        }
      });

      var $some = arrayIteration.some; // `Array.prototype.some` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.some

      _export({
        target: 'Array',
        proto: true,
        forced: sloppyArrayMethod('some')
      }, {
        some: function some(callbackfn
        /* , thisArg */
        ) {
          return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      var nativeSort = [].sort;
      var test$2 = [1, 2, 3]; // IE8-

      var FAILS_ON_UNDEFINED = fails(function () {
        test$2.sort(undefined);
      }); // V8 bug

      var FAILS_ON_NULL = fails(function () {
        test$2.sort(null);
      }); // Old WebKit

      var SLOPPY_METHOD$3 = sloppyArrayMethod('sort');
      var FORCED$2 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD$3; // `Array.prototype.sort` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.sort

      _export({
        target: 'Array',
        proto: true,
        forced: FORCED$2
      }, {
        sort: function sort(comparefn) {
          return comparefn === undefined ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction$1(comparefn));
        }
      });

      var max$2 = Math.max;
      var min$4 = Math.min;
      var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
      var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.splice
      // with adding support of @@species

      _export({
        target: 'Array',
        proto: true,
        forced: !arrayMethodHasSpeciesSupport('splice')
      }, {
        splice: function splice(start, deleteCount
        /* , ...items */
        ) {
          var O = toObject(this);
          var len = toLength(O.length);
          var actualStart = toAbsoluteIndex(start, len);
          var argumentsLength = arguments.length;
          var insertCount, actualDeleteCount, A, k, from, to;

          if (argumentsLength === 0) {
            insertCount = actualDeleteCount = 0;
          } else if (argumentsLength === 1) {
            insertCount = 0;
            actualDeleteCount = len - actualStart;
          } else {
            insertCount = argumentsLength - 2;
            actualDeleteCount = min$4(max$2(toInteger(deleteCount), 0), len - actualStart);
          }

          if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
            throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
          }

          A = arraySpeciesCreate(O, actualDeleteCount);

          for (k = 0; k < actualDeleteCount; k++) {
            from = actualStart + k;
            if (from in O) createProperty(A, k, O[from]);
          }

          A.length = actualDeleteCount;

          if (insertCount < actualDeleteCount) {
            for (k = actualStart; k < len - actualDeleteCount; k++) {
              from = k + actualDeleteCount;
              to = k + insertCount;
              if (from in O) O[to] = O[from];else delete O[to];
            }

            for (k = len; k > len - actualDeleteCount + insertCount; k--) {
              delete O[k - 1];
            }
          } else if (insertCount > actualDeleteCount) {
            for (k = len - actualDeleteCount; k > actualStart; k--) {
              from = k + actualDeleteCount - 1;
              to = k + insertCount - 1;
              if (from in O) O[to] = O[from];else delete O[to];
            }
          }

          for (k = 0; k < insertCount; k++) {
            O[k + actualStart] = arguments[k + 2];
          }

          O.length = len - actualDeleteCount + insertCount;
          return A;
        }
      });

      var SPECIES$3 = wellKnownSymbol('species');

      var setSpecies = function setSpecies(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = objectDefineProperty.f;

        if (descriptors && Constructor && !Constructor[SPECIES$3]) {
          defineProperty(Constructor, SPECIES$3, {
            configurable: true,
            get: function get() {
              return this;
            }
          });
        }
      };

      // https://tc39.github.io/ecma262/#sec-get-array-@@species

      setSpecies('Array');

      // in popular engines, so it's moved to a separate module

      addToUnscopables('flat');

      // in popular engines, so it's moved to a separate module

      addToUnscopables('flatMap');

      var ITERATOR$3 = wellKnownSymbol('iterator');
      var BUGGY_SAFARI_ITERATORS = false;

      var returnThis = function returnThis() {
        return this;
      }; // `%IteratorPrototype%` object
      // https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object


      var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

      if ([].keys) {
        arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

        if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;else {
          PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }

      if (IteratorPrototype == undefined) IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

      if ( !has(IteratorPrototype, ITERATOR$3)) hide(IteratorPrototype, ITERATOR$3, returnThis);
      var iteratorsCore = {
        IteratorPrototype: IteratorPrototype,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
      };

      var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

      var returnThis$1 = function returnThis() {
        return this;
      };

      var createIteratorConstructor = function createIteratorConstructor(IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + ' Iterator';
        IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
          next: createPropertyDescriptor(1, next)
        });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
        iterators[TO_STRING_TAG] = returnThis$1;
        return IteratorConstructor;
      };

      var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR$4 = wellKnownSymbol('iterator');
      var KEYS = 'keys';
      var VALUES = 'values';
      var ENTRIES = 'entries';

      var returnThis$2 = function returnThis() {
        return this;
      };

      var defineIterator = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);

        var getIterationMethod = function getIterationMethod(KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];

          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };

            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };

            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }

          return function () {
            return new IteratorConstructor(this);
          };
        };

        var TO_STRING_TAG = NAME + ' Iterator';
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY; // fix native

        if (anyNativeIterator) {
          CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

          if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
            if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
              if (objectSetPrototypeOf) {
                objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
              } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
                hide(CurrentIteratorPrototype, ITERATOR$4, returnThis$2);
              }
            } // Set @@toStringTag to native iterators


            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
          }
        } // fix Array#{values, @@iterator}.name in V8 / FF


        if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          INCORRECT_VALUES_NAME = true;

          defaultIterator = function values() {
            return nativeIterator.call(this);
          };
        } // define iterator


        if ( IterablePrototype[ITERATOR$4] !== defaultIterator) {
          hide(IterablePrototype, ITERATOR$4, defaultIterator);
        }

        iterators[NAME] = defaultIterator; // export additional methods

        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED) for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              redefine(IterablePrototype, KEY, methods[KEY]);
            }
          } else _export({
            target: NAME,
            proto: true,
            forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME
          }, methods);
        }

        return methods;
      };

      var ARRAY_ITERATOR = 'Array Iterator';
      var setInternalState$1 = internalState.set;
      var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.entries
      // `Array.prototype.keys` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.keys
      // `Array.prototype.values` method
      // https://tc39.github.io/ecma262/#sec-array.prototype.values
      // `Array.prototype[@@iterator]` method
      // https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
      // `CreateArrayIterator` internal method
      // https://tc39.github.io/ecma262/#sec-createarrayiterator

      var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
        setInternalState$1(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind: kind // kind

        }); // `%ArrayIteratorPrototype%.next` method
        // https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
      }, function () {
        var state = getInternalState$1(this);
        var target = state.target;
        var kind = state.kind;
        var index = state.index++;

        if (!target || index >= target.length) {
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        }

        if (kind == 'keys') return {
          value: index,
          done: false
        };
        if (kind == 'values') return {
          value: target[index],
          done: false
        };
        return {
          value: [index, target[index]],
          done: false
        };
      }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
      // https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
      // https://tc39.github.io/ecma262/#sec-createmappedargumentsobject

      iterators.Arguments = iterators.Array; // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');

      var fromCharCode = String.fromCharCode;
      var nativeFromCodePoint = String.fromCodePoint; // length should be 1, old FF problem

      var INCORRECT_LENGTH = !!nativeFromCodePoint && nativeFromCodePoint.length != 1; // `String.fromCodePoint` method
      // https://tc39.github.io/ecma262/#sec-string.fromcodepoint

      _export({
        target: 'String',
        stat: true,
        forced: INCORRECT_LENGTH
      }, {
        fromCodePoint: function fromCodePoint(x) {
          // eslint-disable-line no-unused-vars
          var elements = [];
          var length = arguments.length;
          var i = 0;
          var code;

          while (length > i) {
            code = +arguments[i++];
            if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
            elements.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00));
          }

          return elements.join('');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.raw

      _export({
        target: 'String',
        stat: true
      }, {
        raw: function raw(template) {
          var rawTemplate = toIndexedObject(template.raw);
          var literalSegments = toLength(rawTemplate.length);
          var argumentsLength = arguments.length;
          var elements = [];
          var i = 0;

          while (literalSegments > i) {
            elements.push(String(rawTemplate[i++]));
            if (i < argumentsLength) elements.push(String(arguments[i]));
          }

          return elements.join('');
        }
      });

      var createMethod$4 = function createMethod(CONVERT_TO_STRING) {
        return function ($this, pos) {
          var S = String(requireObjectCoercible($this));
          var position = toInteger(pos);
          var size = S.length;
          var first, second;
          if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
          first = S.charCodeAt(position);
          return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
        };
      };

      var stringMultibyte = {
        // `String.prototype.codePointAt` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod$4(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod$4(true)
      };

      var codeAt = stringMultibyte.codeAt; // `String.prototype.codePointAt` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat

      _export({
        target: 'String',
        proto: true
      }, {
        codePointAt: function codePointAt(pos) {
          return codeAt(this, pos);
        }
      });

      var MATCH = wellKnownSymbol('match'); // `IsRegExp` abstract operation
      // https://tc39.github.io/ecma262/#sec-isregexp

      var isRegexp = function isRegexp(it) {
        var isRegExp;
        return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
      };

      var notARegexp = function notARegexp(it) {
        if (isRegexp(it)) {
          throw TypeError("The method doesn't accept regular expressions");
        }

        return it;
      };

      var MATCH$1 = wellKnownSymbol('match');

      var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
        var regexp = /./;

        try {
          '/./'[METHOD_NAME](regexp);
        } catch (e) {
          try {
            regexp[MATCH$1] = false;
            return '/./'[METHOD_NAME](regexp);
          } catch (f) {
            /* empty */
          }
        }

        return false;
      };

      var nativeEndsWith = ''.endsWith;
      var min$5 = Math.min; // `String.prototype.endsWith` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.endswith

      _export({
        target: 'String',
        proto: true,
        forced: !correctIsRegexpLogic('endsWith')
      }, {
        endsWith: function endsWith(searchString
        /* , endPosition = @length */
        ) {
          var that = String(requireObjectCoercible(this));
          notARegexp(searchString);
          var endPosition = arguments.length > 1 ? arguments[1] : undefined;
          var len = toLength(that.length);
          var end = endPosition === undefined ? len : min$5(toLength(endPosition), len);
          var search = String(searchString);
          return nativeEndsWith ? nativeEndsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.includes


      _export({
        target: 'String',
        proto: true,
        forced: !correctIsRegexpLogic('includes')
      }, {
        includes: function includes(searchString
        /* , position = 0 */
        ) {
          return !!~String(requireObjectCoercible(this)).indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags


      var regexpFlags = function regexpFlags() {
        var that = anObject(this);
        var result = '';
        if (that.global) result += 'g';
        if (that.ignoreCase) result += 'i';
        if (that.multiline) result += 'm';
        if (that.dotAll) result += 's';
        if (that.unicode) result += 'u';
        if (that.sticky) result += 'y';
        return result;
      };

      var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
      // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
      // which loads this file before patching the method.

      var nativeReplace = String.prototype.replace;
      var patchedExec = nativeExec;

      var UPDATES_LAST_INDEX_WRONG = function () {
        var re1 = /a/;
        var re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return re1.lastIndex !== 0 || re2.lastIndex !== 0;
      }(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


      var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
      var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

      if (PATCH) {
        patchedExec = function exec(str) {
          var re = this;
          var lastIndex, reCopy, match, i;

          if (NPCG_INCLUDED) {
            reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
          }

          if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
          match = nativeExec.call(re, str);

          if (UPDATES_LAST_INDEX_WRONG && match) {
            re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
          }

          if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            nativeReplace.call(match[0], reCopy, function () {
              for (i = 1; i < arguments.length - 2; i++) {
                if (arguments[i] === undefined) match[i] = undefined;
              }
            });
          }

          return match;
        };
      }

      var regexpExec = patchedExec;

      var SPECIES$4 = wellKnownSymbol('species');
      var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
        // #replace needs built-in support for named groups.
        // #match works fine because it just return the exec results, even if it has
        // a "grops" property.
        var re = /./;

        re.exec = function () {
          var result = [];
          result.groups = {
            a: '7'
          };
          return result;
        };

        return ''.replace(re, '$<a>') !== '7';
      }); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
      // Weex JS has frozen built-in prototypes, so use try / catch wrapper

      var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
        var re = /(?:)/;
        var originalExec = re.exec;

        re.exec = function () {
          return originalExec.apply(this, arguments);
        };

        var result = 'ab'.split(re);
        return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
      });

      var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, length, exec, sham) {
        var SYMBOL = wellKnownSymbol(KEY);
        var DELEGATES_TO_SYMBOL = !fails(function () {
          // String methods call symbol-named RegEp methods
          var O = {};

          O[SYMBOL] = function () {
            return 7;
          };

          return ''[KEY](O) != 7;
        });
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
          // Symbol-named RegExp methods call .exec
          var execCalled = false;
          var re = /a/;

          re.exec = function () {
            execCalled = true;
            return null;
          };

          if (KEY === 'split') {
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};

            re.constructor[SPECIES$4] = function () {
              return re;
            };
          }

          re[SYMBOL]('');
          return !execCalled;
        });

        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
          var nativeRegExpMethod = /./[SYMBOL];
          var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === regexpExec) {
              if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                // The native String method already delegates to @@method (this
                // polyfilled function), leasing to infinite recursion.
                // We avoid it by directly calling the native @@method method.
                return {
                  done: true,
                  value: nativeRegExpMethod.call(regexp, str, arg2)
                };
              }

              return {
                done: true,
                value: nativeMethod.call(str, regexp, arg2)
              };
            }

            return {
              done: false
            };
          });
          var stringMethod = methods[0];
          var regexMethod = methods[1];
          redefine(String.prototype, KEY, stringMethod);
          redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
          // 21.2.5.11 RegExp.prototype[@@split](string, limit)
          ? function (string, arg) {
            return regexMethod.call(string, this, arg);
          } // 21.2.5.6 RegExp.prototype[@@match](string)
          // 21.2.5.9 RegExp.prototype[@@search](string)
          : function (string) {
            return regexMethod.call(string, this);
          });
          if (sham) hide(RegExp.prototype[SYMBOL], 'sham', true);
        }
      };

      var charAt = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
      // https://tc39.github.io/ecma262/#sec-advancestringindex

      var advanceStringIndex = function advanceStringIndex(S, index, unicode) {
        return index + (unicode ? charAt(S, index).length : 1);
      };

      // https://tc39.github.io/ecma262/#sec-regexpexec

      var regexpExecAbstract = function regexpExecAbstract(R, S) {
        var exec = R.exec;

        if (typeof exec === 'function') {
          var result = exec.call(R, S);

          if (_typeof(result) !== 'object') {
            throw TypeError('RegExp exec method returned something other than an Object or null');
          }

          return result;
        }

        if (classofRaw(R) !== 'RegExp') {
          throw TypeError('RegExp#exec called on incompatible receiver');
        }

        return regexpExec.call(R, S);
      };

      fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
        return [// `String.prototype.match` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.match
        function match(regexp) {
          var O = requireObjectCoercible(this);
          var matcher = regexp == undefined ? undefined : regexp[MATCH];
          return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
        }, // `RegExp.prototype[@@match]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
        function (regexp) {
          var res = maybeCallNative(nativeMatch, regexp, this);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          if (!rx.global) return regexpExecAbstract(rx, S);
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
          var A = [];
          var n = 0;
          var result;

          while ((result = regexpExecAbstract(rx, S)) !== null) {
            var matchStr = String(result[0]);
            A[n] = matchStr;
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
            n++;
          }

          return n === 0 ? null : A;
        }];
      });

      var SPECIES$5 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
      // https://tc39.github.io/ecma262/#sec-speciesconstructor

      var speciesConstructor = function speciesConstructor(O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES$5]) == undefined ? defaultConstructor : aFunction$1(S);
      };

      var MATCH_ALL = wellKnownSymbol('matchAll');
      var REGEXP_STRING = 'RegExp String';
      var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
      var setInternalState$2 = internalState.set;
      var getInternalState$2 = internalState.getterFor(REGEXP_STRING_ITERATOR);
      var RegExpPrototype = RegExp.prototype;
      var regExpBuiltinExec = RegExpPrototype.exec;

      var regExpExec = function regExpExec(R, S) {
        var exec = R.exec;
        var result;

        if (typeof exec == 'function') {
          result = exec.call(R, S);
          if (_typeof(result) != 'object') throw TypeError('Incorrect exec result');
          return result;
        }

        return regExpBuiltinExec.call(R, S);
      }; // eslint-disable-next-line max-len


      var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, global, fullUnicode) {
        setInternalState$2(this, {
          type: REGEXP_STRING_ITERATOR,
          regexp: regexp,
          string: string,
          global: global,
          unicode: fullUnicode,
          done: false
        });
      }, REGEXP_STRING, function next() {
        var state = getInternalState$2(this);
        if (state.done) return {
          value: undefined,
          done: true
        };
        var R = state.regexp;
        var S = state.string;
        var match = regExpExec(R, S);
        if (match === null) return {
          value: undefined,
          done: state.done = true
        };

        if (state.global) {
          if (String(match[0]) == '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
          return {
            value: match,
            done: false
          };
        }

        state.done = true;
        return {
          value: match,
          done: false
        };
      });

      var $matchAll = function $matchAll(string) {
        var R = anObject(this);
        var S = String(string);
        var C, flagsValue, flags, matcher, global, fullUnicode;
        C = speciesConstructor(R, RegExp);
        flagsValue = R.flags;

        if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype)) {
          flagsValue = regexpFlags.call(R);
        }

        flags = flagsValue === undefined ? '' : String(flagsValue);
        matcher = new C(C === RegExp ? R.source : R, flags);
        global = !!~flags.indexOf('g');
        fullUnicode = !!~flags.indexOf('u');
        matcher.lastIndex = toLength(R.lastIndex);
        return new $RegExpStringIterator(matcher, S, global, fullUnicode);
      }; // `String.prototype.matchAll` method
      // https://github.com/tc39/proposal-string-matchall


      _export({
        target: 'String',
        proto: true
      }, {
        matchAll: function matchAll(regexp) {
          var O = requireObjectCoercible(this);
          var S, matcher, rx;

          if (regexp != null) {
            matcher = regexp[MATCH_ALL];
            if (matcher === undefined && isPure && classof(regexp) == 'RegExp') matcher = $matchAll;
            if (matcher != null) return aFunction$1(matcher).call(regexp, O);
          }

          S = String(O);
          rx = new RegExp(regexp, 'g');
          return  rx[MATCH_ALL](S);
        }
      });
       MATCH_ALL in RegExpPrototype || hide(RegExpPrototype, MATCH_ALL, $matchAll);

      // https://tc39.github.io/ecma262/#sec-string.prototype.repeat


      var stringRepeat = ''.repeat || function repeat(count) {
        var str = String(requireObjectCoercible(this));
        var result = '';
        var n = toInteger(count);
        if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');

        for (; n > 0; (n >>>= 1) && (str += str)) {
          if (n & 1) result += str;
        }

        return result;
      };

      var ceil$1 = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

      var createMethod$5 = function createMethod(IS_END) {
        return function ($this, maxLength, fillString) {
          var S = String(requireObjectCoercible($this));
          var stringLength = S.length;
          var fillStr = fillString === undefined ? ' ' : String(fillString);
          var intMaxLength = toLength(maxLength);
          var fillLen, stringFiller;
          if (intMaxLength <= stringLength || fillStr == '') return S;
          fillLen = intMaxLength - stringLength;
          stringFiller = stringRepeat.call(fillStr, ceil$1(fillLen / fillStr.length));
          if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
          return IS_END ? S + stringFiller : stringFiller + S;
        };
      };

      var stringPad = {
        // `String.prototype.padStart` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.padstart
        start: createMethod$5(false),
        // `String.prototype.padEnd` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.padend
        end: createMethod$5(true)
      };

      var userAgent = getBuiltIn('navigator', 'userAgent') || '';

      // eslint-disable-next-line unicorn/no-unsafe-regex

      var webkitStringPadBug = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

      var $padEnd = stringPad.end; // `String.prototype.padEnd` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.padend

      _export({
        target: 'String',
        proto: true,
        forced: webkitStringPadBug
      }, {
        padEnd: function padEnd(maxLength
        /* , fillString = ' ' */
        ) {
          return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      var $padStart = stringPad.start; // `String.prototype.padStart` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.padstart

      _export({
        target: 'String',
        proto: true,
        forced: webkitStringPadBug
      }, {
        padStart: function padStart(maxLength
        /* , fillString = ' ' */
        ) {
          return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.repeat

      _export({
        target: 'String',
        proto: true
      }, {
        repeat: stringRepeat
      });

      var max$3 = Math.max;
      var min$6 = Math.min;
      var floor$1 = Math.floor;
      var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
      var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

      var maybeToString = function maybeToString(it) {
        return it === undefined ? it : String(it);
      }; // @@replace logic


      fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
        return [// `String.prototype.replace` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.replace
        function replace(searchValue, replaceValue) {
          var O = requireObjectCoercible(this);
          var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
          return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
        }, // `RegExp.prototype[@@replace]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
        function (regexp, replaceValue) {
          var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          var functionalReplace = typeof replaceValue === 'function';
          if (!functionalReplace) replaceValue = String(replaceValue);
          var global = rx.global;

          if (global) {
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
          }

          var results = [];

          while (true) {
            var result = regexpExecAbstract(rx, S);
            if (result === null) break;
            results.push(result);
            if (!global) break;
            var matchStr = String(result[0]);
            if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
          }

          var accumulatedResult = '';
          var nextSourcePosition = 0;

          for (var i = 0; i < results.length; i++) {
            result = results[i];
            var matched = String(result[0]);
            var position = max$3(min$6(toInteger(result.index), S.length), 0);
            var captures = []; // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

            for (var j = 1; j < result.length; j++) {
              captures.push(maybeToString(result[j]));
            }

            var namedCaptures = result.groups;

            if (functionalReplace) {
              var replacerArgs = [matched].concat(captures, position, S);
              if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
              var replacement = String(replaceValue.apply(undefined, replacerArgs));
            } else {
              replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
            }

            if (position >= nextSourcePosition) {
              accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
              nextSourcePosition = position + matched.length;
            }
          }

          return accumulatedResult + S.slice(nextSourcePosition);
        }]; // https://tc39.github.io/ecma262/#sec-getsubstitution

        function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
          var tailPos = position + matched.length;
          var m = captures.length;
          var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

          if (namedCaptures !== undefined) {
            namedCaptures = toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
          }

          return nativeReplace.call(replacement, symbols, function (match, ch) {
            var capture;

            switch (ch.charAt(0)) {
              case '$':
                return '$';

              case '&':
                return matched;

              case '`':
                return str.slice(0, position);

              case "'":
                return str.slice(tailPos);

              case '<':
                capture = namedCaptures[ch.slice(1, -1)];
                break;

              default:
                // \d\d?
                var n = +ch;
                if (n === 0) return match;

                if (n > m) {
                  var f = floor$1(n / 10);
                  if (f === 0) return match;
                  if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                  return match;
                }

                capture = captures[n - 1];
            }

            return capture === undefined ? '' : capture;
          });
        }
      });

      fixRegexpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
        return [// `String.prototype.search` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.search
        function search(regexp) {
          var O = requireObjectCoercible(this);
          var searcher = regexp == undefined ? undefined : regexp[SEARCH];
          return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
        }, // `RegExp.prototype[@@search]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
        function (regexp) {
          var res = maybeCallNative(nativeSearch, regexp, this);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          var previousLastIndex = rx.lastIndex;
          if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
          var result = regexpExecAbstract(rx, S);
          if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
          return result === null ? -1 : result.index;
        }];
      });

      var arrayPush = [].push;
      var min$7 = Math.min;
      var MAX_UINT32 = 0xFFFFFFFF; // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError

      var SUPPORTS_Y = !fails(function () {
        return !RegExp(MAX_UINT32, 'y');
      }); // @@split logic

      fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
        var internalSplit;

        if ('abbc'.split(/(b)*/)[1] == 'c' || 'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
          // based on es5-shim implementation, need to rework it
          internalSplit = function internalSplit(separator, limit) {
            var string = String(requireObjectCoercible(this));
            var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
            if (lim === 0) return [];
            if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

            if (!isRegexp(separator)) {
              return nativeSplit.call(string, separator, lim);
            }

            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
            var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

            var separatorCopy = new RegExp(separator.source, flags + 'g');
            var match, lastIndex, lastLength;

            while (match = regexpExec.call(separatorCopy, string)) {
              lastIndex = separatorCopy.lastIndex;

              if (lastIndex > lastLastIndex) {
                output.push(string.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
                lastLength = match[0].length;
                lastLastIndex = lastIndex;
                if (output.length >= lim) break;
              }

              if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
            }

            if (lastLastIndex === string.length) {
              if (lastLength || !separatorCopy.test('')) output.push('');
            } else output.push(string.slice(lastLastIndex));

            return output.length > lim ? output.slice(0, lim) : output;
          }; // Chakra, V8

        } else if ('0'.split(undefined, 0).length) {
          internalSplit = function internalSplit(separator, limit) {
            return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
          };
        } else internalSplit = nativeSplit;

        return [// `String.prototype.split` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.split
        function split(separator, limit) {
          var O = requireObjectCoercible(this);
          var splitter = separator == undefined ? undefined : separator[SPLIT];
          return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
        }, // `RegExp.prototype[@@split]` method
        // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
        //
        // NOTE: This cannot be properly polyfilled in engines that don't support
        // the 'y' flag.
        function (regexp, limit) {
          var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
          if (res.done) return res.value;
          var rx = anObject(regexp);
          var S = String(this);
          var C = speciesConstructor(rx, RegExp);
          var unicodeMatching = rx.unicode;
          var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g'); // ^(? + rx + ) is needed, in combination with some S slicing, to
          // simulate the 'y' flag.

          var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
          var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
          if (lim === 0) return [];
          if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
          var p = 0;
          var q = 0;
          var A = [];

          while (q < S.length) {
            splitter.lastIndex = SUPPORTS_Y ? q : 0;
            var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
            var e;

            if (z === null || (e = min$7(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
              q = advanceStringIndex(S, q, unicodeMatching);
            } else {
              A.push(S.slice(p, q));
              if (A.length === lim) return A;

              for (var i = 1; i <= z.length - 1; i++) {
                A.push(z[i]);
                if (A.length === lim) return A;
              }

              q = p = e;
            }
          }

          A.push(S.slice(p));
          return A;
        }];
      }, !SUPPORTS_Y);

      var nativeStartsWith = ''.startsWith;
      var min$8 = Math.min; // `String.prototype.startsWith` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.startswith

      _export({
        target: 'String',
        proto: true,
        forced: !correctIsRegexpLogic('startsWith')
      }, {
        startsWith: function startsWith(searchString
        /* , position = 0 */
        ) {
          var that = String(requireObjectCoercible(this));
          notARegexp(searchString);
          var index = toLength(min$8(arguments.length > 1 ? arguments[1] : undefined, that.length));
          var search = String(searchString);
          return nativeStartsWith ? nativeStartsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
        }
      });

      // a string of all valid unicode whitespaces
      // eslint-disable-next-line max-len
      var whitespaces = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

      var whitespace = '[' + whitespaces + ']';
      var ltrim = RegExp('^' + whitespace + whitespace + '*');
      var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

      var createMethod$6 = function createMethod(TYPE) {
        return function ($this) {
          var string = String(requireObjectCoercible($this));
          if (TYPE & 1) string = string.replace(ltrim, '');
          if (TYPE & 2) string = string.replace(rtrim, '');
          return string;
        };
      };

      var stringTrim = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
        start: createMethod$6(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
        end: createMethod$6(2),
        // `String.prototype.trim` method
        // https://tc39.github.io/ecma262/#sec-string.prototype.trim
        trim: createMethod$6(3)
      };

      var non = "\u200B\x85\u180E"; // check that a method works with the correct list
      // of whitespaces and has a correct name

      var forcedStringTrimMethod = function forcedStringTrimMethod(METHOD_NAME) {
        return fails(function () {
          return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
        });
      };

      var $trim = stringTrim.trim; // `String.prototype.trim` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.trim

      _export({
        target: 'String',
        proto: true,
        forced: forcedStringTrimMethod('trim')
      }, {
        trim: function trim() {
          return $trim(this);
        }
      });

      var $trimStart = stringTrim.start;
      var FORCED$3 = forcedStringTrimMethod('trimStart');
      var trimStart = FORCED$3 ? function trimStart() {
        return $trimStart(this);
      } : ''.trimStart; // `String.prototype.{ trimStart, trimLeft }` methods
      // https://github.com/tc39/ecmascript-string-left-right-trim

      _export({
        target: 'String',
        proto: true,
        forced: FORCED$3
      }, {
        trimStart: trimStart,
        trimLeft: trimStart
      });

      var $trimEnd = stringTrim.end;
      var FORCED$4 = forcedStringTrimMethod('trimEnd');
      var trimEnd = FORCED$4 ? function trimEnd() {
        return $trimEnd(this);
      } : ''.trimEnd; // `String.prototype.{ trimEnd, trimRight }` methods
      // https://github.com/tc39/ecmascript-string-left-right-trim

      _export({
        target: 'String',
        proto: true,
        forced: FORCED$4
      }, {
        trimEnd: trimEnd,
        trimRight: trimEnd
      });

      var charAt$1 = stringMultibyte.charAt;
      var STRING_ITERATOR = 'String Iterator';
      var setInternalState$3 = internalState.set;
      var getInternalState$3 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
      // https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator

      defineIterator(String, 'String', function (iterated) {
        setInternalState$3(this, {
          type: STRING_ITERATOR,
          string: String(iterated),
          index: 0
        }); // `%StringIteratorPrototype%.next` method
        // https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
      }, function next() {
        var state = getInternalState$3(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length) return {
          value: undefined,
          done: true
        };
        point = charAt$1(string, index);
        state.index += point.length;
        return {
          value: point,
          done: false
        };
      });

      var quot = /"/g; // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
      // https://tc39.github.io/ecma262/#sec-createhtml

      var createHtml = function createHtml(string, tag, attribute, value) {
        var S = String(requireObjectCoercible(string));
        var p1 = '<' + tag;
        if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
        return p1 + '>' + S + '</' + tag + '>';
      };

      // of a tag and escaping quotes in arguments

      var forcedStringHtmlMethod = function forcedStringHtmlMethod(METHOD_NAME) {
        return fails(function () {
          var test = ''[METHOD_NAME]('"');
          return test !== test.toLowerCase() || test.split('"').length > 3;
        });
      };

      // https://tc39.github.io/ecma262/#sec-string.prototype.anchor


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('anchor')
      }, {
        anchor: function anchor(name) {
          return createHtml(this, 'a', 'name', name);
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.big


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('big')
      }, {
        big: function big() {
          return createHtml(this, 'big', '', '');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.blink


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('blink')
      }, {
        blink: function blink() {
          return createHtml(this, 'blink', '', '');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.bold


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('bold')
      }, {
        bold: function bold() {
          return createHtml(this, 'b', '', '');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.fixed


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('fixed')
      }, {
        fixed: function fixed() {
          return createHtml(this, 'tt', '', '');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.fontcolor


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('fontcolor')
      }, {
        fontcolor: function fontcolor(color) {
          return createHtml(this, 'font', 'color', color);
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.fontsize


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('fontsize')
      }, {
        fontsize: function fontsize(size) {
          return createHtml(this, 'font', 'size', size);
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.italics


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('italics')
      }, {
        italics: function italics() {
          return createHtml(this, 'i', '', '');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.link


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('link')
      }, {
        link: function link(url) {
          return createHtml(this, 'a', 'href', url);
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.small


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('small')
      }, {
        small: function small() {
          return createHtml(this, 'small', '', '');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.strike


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('strike')
      }, {
        strike: function strike() {
          return createHtml(this, 'strike', '', '');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.sub


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('sub')
      }, {
        sub: function sub() {
          return createHtml(this, 'sub', '', '');
        }
      });

      // https://tc39.github.io/ecma262/#sec-string.prototype.sup


      _export({
        target: 'String',
        proto: true,
        forced: forcedStringHtmlMethod('sup')
      }, {
        sup: function sup() {
          return createHtml(this, 'sup', '', '');
        }
      });

      var inheritIfRequired = function inheritIfRequired($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        if ( // it can work only with native `setPrototypeOf`
        objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
        typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
        return $this;
      };

      var defineProperty$4 = objectDefineProperty.f;
      var getOwnPropertyNames = objectGetOwnPropertyNames.f;
      var MATCH$2 = wellKnownSymbol('match');
      var NativeRegExp = global_1.RegExp;
      var RegExpPrototype$1 = NativeRegExp.prototype;
      var re1 = /a/g;
      var re2 = /a/g; // "new" should create a new object, old webkit bug

      var CORRECT_NEW = new NativeRegExp(re1) !== re1;
      var FORCED$5 = descriptors && isForced_1('RegExp', !CORRECT_NEW || fails(function () {
        re2[MATCH$2] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

        return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
      })); // `RegExp` constructor
      // https://tc39.github.io/ecma262/#sec-regexp-constructor

      if (FORCED$5) {
        var RegExpWrapper = function RegExp(pattern, flags) {
          var thisIsRegExp = this instanceof RegExpWrapper;
          var patternIsRegExp = isRegexp(pattern);
          var flagsAreUndefined = flags === undefined;
          return !thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined ? pattern : inheritIfRequired(CORRECT_NEW ? new NativeRegExp(patternIsRegExp && !flagsAreUndefined ? pattern.source : pattern, flags) : NativeRegExp((patternIsRegExp = pattern instanceof RegExpWrapper) ? pattern.source : pattern, patternIsRegExp && flagsAreUndefined ? regexpFlags.call(pattern) : flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);
        };

        var proxy = function proxy(key) {
          key in RegExpWrapper || defineProperty$4(RegExpWrapper, key, {
            configurable: true,
            get: function get() {
              return NativeRegExp[key];
            },
            set: function set(it) {
              NativeRegExp[key] = it;
            }
          });
        };

        var keys$1 = getOwnPropertyNames(NativeRegExp);
        var index = 0;

        while (keys$1.length > index) {
          proxy(keys$1[index++]);
        }

        RegExpPrototype$1.constructor = RegExpWrapper;
        RegExpWrapper.prototype = RegExpPrototype$1;
        redefine(global_1, 'RegExp', RegExpWrapper);
      } // https://tc39.github.io/ecma262/#sec-get-regexp-@@species


      setSpecies('RegExp');

      _export({
        target: 'RegExp',
        proto: true,
        forced: /./.exec !== regexpExec
      }, {
        exec: regexpExec
      });

      // https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags

      if (descriptors && /./g.flags != 'g') {
        objectDefineProperty.f(RegExp.prototype, 'flags', {
          configurable: true,
          get: regexpFlags
        });
      }

      var TO_STRING = 'toString';
      var RegExpPrototype$2 = RegExp.prototype;
      var nativeToString = RegExpPrototype$2[TO_STRING];
      var NOT_GENERIC = fails(function () {
        return nativeToString.call({
          source: 'a',
          flags: 'b'
        }) != '/a/b';
      }); // FF44- RegExp#toString has a wrong name

      var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring

      if (NOT_GENERIC || INCORRECT_NAME) {
        redefine(RegExp.prototype, TO_STRING, function toString() {
          var R = anObject(this);
          var p = String(R.source);
          var rf = R.flags;
          var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$2) ? regexpFlags.call(R) : rf);
          return '/' + p + '/' + f;
        }, {
          unsafe: true
        });
      }

      var trim = stringTrim.trim;
      var nativeParseInt = global_1.parseInt;
      var hex = /^[+-]?0[Xx]/;
      var FORCED$6 = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22; // `parseInt` method
      // https://tc39.github.io/ecma262/#sec-parseint-string-radix

      var _parseInt = FORCED$6 ? function parseInt(string, radix) {
        var S = trim(String(string));
        return nativeParseInt(S, radix >>> 0 || (hex.test(S) ? 16 : 10));
      } : nativeParseInt;

      // https://tc39.github.io/ecma262/#sec-parseint-string-radix

      _export({
        global: true,
        forced: parseInt != _parseInt
      }, {
        parseInt: _parseInt
      });

      var trim$1 = stringTrim.trim;
      var nativeParseFloat = global_1.parseFloat;
      var FORCED$7 = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity; // `parseFloat` method
      // https://tc39.github.io/ecma262/#sec-parsefloat-string

      var _parseFloat = FORCED$7 ? function parseFloat(string) {
        var trimmedString = trim$1(String(string));
        var result = nativeParseFloat(trimmedString);
        return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
      } : nativeParseFloat;

      // https://tc39.github.io/ecma262/#sec-parsefloat-string

      _export({
        global: true,
        forced: parseFloat != _parseFloat
      }, {
        parseFloat: _parseFloat
      });

      var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
      var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;
      var defineProperty$5 = objectDefineProperty.f;
      var trim$2 = stringTrim.trim;
      var NUMBER = 'Number';
      var NativeNumber = global_1[NUMBER];
      var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

      var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
      // https://tc39.github.io/ecma262/#sec-tonumber

      var toNumber = function toNumber(argument) {
        var it = toPrimitive(argument, false);
        var first, third, radix, maxCode, digits, length, index, code;

        if (typeof it == 'string' && it.length > 2) {
          it = trim$2(it);
          first = it.charCodeAt(0);

          if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
          } else if (first === 48) {
            switch (it.charCodeAt(1)) {
              case 66:
              case 98:
                radix = 2;
                maxCode = 49;
                break;
              // fast equal of /^0b[01]+$/i

              case 79:
              case 111:
                radix = 8;
                maxCode = 55;
                break;
              // fast equal of /^0o[0-7]+$/i

              default:
                return +it;
            }

            digits = it.slice(2);
            length = digits.length;

            for (index = 0; index < length; index++) {
              code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
              // but ToNumber should return NaN if a string contains unavailable symbols

              if (code < 48 || code > maxCode) return NaN;
            }

            return parseInt(digits, radix);
          }
        }

        return +it;
      }; // `Number` constructor
      // https://tc39.github.io/ecma262/#sec-number-constructor


      if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
        var NumberWrapper = function Number(value) {
          var it = arguments.length < 1 ? 0 : value;
          var dummy = this;
          return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
          && (BROKEN_CLASSOF ? fails(function () {
            NumberPrototype.valueOf.call(dummy);
          }) : classofRaw(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
        };

        for (var keys$2 = descriptors ? getOwnPropertyNames$1(NativeNumber) : ( // ES3:
        'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
        'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys$2.length > j; j++) {
          if (has(NativeNumber, key = keys$2[j]) && !has(NumberWrapper, key)) {
            defineProperty$5(NumberWrapper, key, getOwnPropertyDescriptor$4(NativeNumber, key));
          }
        }

        NumberWrapper.prototype = NumberPrototype;
        NumberPrototype.constructor = NumberWrapper;
        redefine(global_1, NUMBER, NumberWrapper);
      }

      // https://tc39.github.io/ecma262/#sec-number.epsilon

      _export({
        target: 'Number',
        stat: true
      }, {
        EPSILON: Math.pow(2, -52)
      });

      var globalIsFinite = global_1.isFinite; // `Number.isFinite` method
      // https://tc39.github.io/ecma262/#sec-number.isfinite

      var numberIsFinite = Number.isFinite || function isFinite(it) {
        return typeof it == 'number' && globalIsFinite(it);
      };

      // https://tc39.github.io/ecma262/#sec-number.isfinite

      _export({
        target: 'Number',
        stat: true
      }, {
        isFinite: numberIsFinite
      });

      var floor$2 = Math.floor; // `Number.isInteger` method implementation
      // https://tc39.github.io/ecma262/#sec-number.isinteger

      var isInteger = function isInteger(it) {
        return !isObject(it) && isFinite(it) && floor$2(it) === it;
      };

      // https://tc39.github.io/ecma262/#sec-number.isinteger

      _export({
        target: 'Number',
        stat: true
      }, {
        isInteger: isInteger
      });

      // https://tc39.github.io/ecma262/#sec-number.isnan

      _export({
        target: 'Number',
        stat: true
      }, {
        isNaN: function isNaN(number) {
          // eslint-disable-next-line no-self-compare
          return number != number;
        }
      });

      var abs = Math.abs; // `Number.isSafeInteger` method
      // https://tc39.github.io/ecma262/#sec-number.issafeinteger

      _export({
        target: 'Number',
        stat: true
      }, {
        isSafeInteger: function isSafeInteger(number) {
          return isInteger(number) && abs(number) <= 0x1FFFFFFFFFFFFF;
        }
      });

      // https://tc39.github.io/ecma262/#sec-number.max_safe_integer

      _export({
        target: 'Number',
        stat: true
      }, {
        MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
      });

      // https://tc39.github.io/ecma262/#sec-number.min_safe_integer

      _export({
        target: 'Number',
        stat: true
      }, {
        MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
      });

      // https://tc39.github.io/ecma262/#sec-number.parseFloat

      _export({
        target: 'Number',
        stat: true,
        forced: Number.parseFloat != _parseFloat
      }, {
        parseFloat: _parseFloat
      });

      // https://tc39.github.io/ecma262/#sec-number.parseint

      _export({
        target: 'Number',
        stat: true,
        forced: Number.parseInt != _parseInt
      }, {
        parseInt: _parseInt
      });

      // https://tc39.github.io/ecma262/#sec-thisnumbervalue

      var thisNumberValue = function thisNumberValue(value) {
        if (typeof value != 'number' && classofRaw(value) != 'Number') {
          throw TypeError('Incorrect invocation');
        }

        return +value;
      };

      var nativeToFixed = 1.0.toFixed;
      var floor$3 = Math.floor;

      var pow = function pow(x, n, acc) {
        return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
      };

      var log = function log(x) {
        var n = 0;
        var x2 = x;

        while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
        }

        while (x2 >= 2) {
          n += 1;
          x2 /= 2;
        }

        return n;
      };

      var FORCED$8 = nativeToFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !fails(function () {
        // V8 ~ Android 4.3-
        nativeToFixed.call({});
      }); // `Number.prototype.toFixed` method
      // https://tc39.github.io/ecma262/#sec-number.prototype.tofixed

      _export({
        target: 'Number',
        proto: true,
        forced: FORCED$8
      }, {
        // eslint-disable-next-line max-statements
        toFixed: function toFixed(fractionDigits) {
          var number = thisNumberValue(this);
          var fractDigits = toInteger(fractionDigits);
          var data = [0, 0, 0, 0, 0, 0];
          var sign = '';
          var result = '0';
          var e, z, j, k;

          var multiply = function multiply(n, c) {
            var index = -1;
            var c2 = c;

            while (++index < 6) {
              c2 += n * data[index];
              data[index] = c2 % 1e7;
              c2 = floor$3(c2 / 1e7);
            }
          };

          var divide = function divide(n) {
            var index = 6;
            var c = 0;

            while (--index >= 0) {
              c += data[index];
              data[index] = floor$3(c / n);
              c = c % n * 1e7;
            }
          };

          var dataToString = function dataToString() {
            var index = 6;
            var s = '';

            while (--index >= 0) {
              if (s !== '' || index === 0 || data[index] !== 0) {
                var t = String(data[index]);
                s = s === '' ? t : s + stringRepeat.call('0', 7 - t.length) + t;
              }
            }

            return s;
          };

          if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare

          if (number != number) return 'NaN';
          if (number <= -1e21 || number >= 1e21) return String(number);

          if (number < 0) {
            sign = '-';
            number = -number;
          }

          if (number > 1e-21) {
            e = log(number * pow(2, 69, 1)) - 69;
            z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
            z *= 0x10000000000000;
            e = 52 - e;

            if (e > 0) {
              multiply(0, z);
              j = fractDigits;

              while (j >= 7) {
                multiply(1e7, 0);
                j -= 7;
              }

              multiply(pow(10, j, 1), 0);
              j = e - 1;

              while (j >= 23) {
                divide(1 << 23);
                j -= 23;
              }

              divide(1 << j);
              multiply(1, 1);
              divide(2);
              result = dataToString();
            } else {
              multiply(0, z);
              multiply(1 << -e, 0);
              result = dataToString() + stringRepeat.call('0', fractDigits);
            }
          }

          if (fractDigits > 0) {
            k = result.length;
            result = sign + (k <= fractDigits ? '0.' + stringRepeat.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
          } else {
            result = sign + result;
          }

          return result;
        }
      });

      var nativeToPrecision = 1.0.toPrecision;
      var FORCED$9 = fails(function () {
        // IE7-
        return nativeToPrecision.call(1, undefined) !== '1';
      }) || !fails(function () {
        // V8 ~ Android 4.3-
        nativeToPrecision.call({});
      }); // `Number.prototype.toPrecision` method
      // https://tc39.github.io/ecma262/#sec-number.prototype.toprecision

      _export({
        target: 'Number',
        proto: true,
        forced: FORCED$9
      }, {
        toPrecision: function toPrecision(precision) {
          return precision === undefined ? nativeToPrecision.call(thisNumberValue(this)) : nativeToPrecision.call(thisNumberValue(this), precision);
        }
      });

      var log$1 = Math.log; // `Math.log1p` method implementation
      // https://tc39.github.io/ecma262/#sec-math.log1p

      var mathLog1p = Math.log1p || function log1p(x) {
        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log$1(1 + x);
      };

      var nativeAcosh = Math.acosh;
      var log$2 = Math.log;
      var sqrt = Math.sqrt;
      var LN2 = Math.LN2;
      var FORCED$a = !nativeAcosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
      || Math.floor(nativeAcosh(Number.MAX_VALUE)) != 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
      || nativeAcosh(Infinity) != Infinity; // `Math.acosh` method
      // https://tc39.github.io/ecma262/#sec-math.acosh

      _export({
        target: 'Math',
        stat: true,
        forced: FORCED$a
      }, {
        acosh: function acosh(x) {
          return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? log$2(x) + LN2 : mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
        }
      });

      var nativeAsinh = Math.asinh;
      var log$3 = Math.log;
      var sqrt$1 = Math.sqrt;

      function asinh(x) {
        return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log$3(x + sqrt$1(x * x + 1));
      } // `Math.asinh` method
      // https://tc39.github.io/ecma262/#sec-math.asinh
      // Tor Browser bug: Math.asinh(0) -> -0


      _export({
        target: 'Math',
        stat: true,
        forced: !(nativeAsinh && 1 / nativeAsinh(0) > 0)
      }, {
        asinh: asinh
      });

      var nativeAtanh = Math.atanh;
      var log$4 = Math.log; // `Math.atanh` method
      // https://tc39.github.io/ecma262/#sec-math.atanh
      // Tor Browser bug: Math.atanh(-0) -> 0

      _export({
        target: 'Math',
        stat: true,
        forced: !(nativeAtanh && 1 / nativeAtanh(-0) < 0)
      }, {
        atanh: function atanh(x) {
          return (x = +x) == 0 ? x : log$4((1 + x) / (1 - x)) / 2;
        }
      });

      // `Math.sign` method implementation
      // https://tc39.github.io/ecma262/#sec-math.sign
      var mathSign = Math.sign || function sign(x) {
        // eslint-disable-next-line no-self-compare
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };

      var abs$1 = Math.abs;
      var pow$1 = Math.pow; // `Math.cbrt` method
      // https://tc39.github.io/ecma262/#sec-math.cbrt

      _export({
        target: 'Math',
        stat: true
      }, {
        cbrt: function cbrt(x) {
          return mathSign(x = +x) * pow$1(abs$1(x), 1 / 3);
        }
      });

      var floor$4 = Math.floor;
      var log$5 = Math.log;
      var LOG2E = Math.LOG2E; // `Math.clz32` method
      // https://tc39.github.io/ecma262/#sec-math.clz32

      _export({
        target: 'Math',
        stat: true
      }, {
        clz32: function clz32(x) {
          return (x >>>= 0) ? 31 - floor$4(log$5(x + 0.5) * LOG2E) : 32;
        }
      });

      var nativeExpm1 = Math.expm1;
      var exp = Math.exp; // `Math.expm1` method implementation
      // https://tc39.github.io/ecma262/#sec-math.expm1

      var mathExpm1 = !nativeExpm1 // Old FF bug
      || nativeExpm1(10) > 22025.465794806719 || nativeExpm1(10) < 22025.4657948067165168 // Tor Browser bug
      || nativeExpm1(-2e-17) != -2e-17 ? function expm1(x) {
        return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
      } : nativeExpm1;

      var nativeCosh = Math.cosh;
      var abs$2 = Math.abs;
      var E = Math.E; // `Math.cosh` method
      // https://tc39.github.io/ecma262/#sec-math.cosh

      _export({
        target: 'Math',
        stat: true,
        forced: !nativeCosh || nativeCosh(710) === Infinity
      }, {
        cosh: function cosh(x) {
          var t = mathExpm1(abs$2(x) - 1) + 1;
          return (t + 1 / (t * E * E)) * (E / 2);
        }
      });

      // https://tc39.github.io/ecma262/#sec-math.expm1

      _export({
        target: 'Math',
        stat: true,
        forced: mathExpm1 != Math.expm1
      }, {
        expm1: mathExpm1
      });

      var abs$3 = Math.abs;
      var pow$2 = Math.pow;
      var EPSILON = pow$2(2, -52);
      var EPSILON32 = pow$2(2, -23);
      var MAX32 = pow$2(2, 127) * (2 - EPSILON32);
      var MIN32 = pow$2(2, -126);

      var roundTiesToEven = function roundTiesToEven(n) {
        return n + 1 / EPSILON - 1 / EPSILON;
      }; // `Math.fround` method implementation
      // https://tc39.github.io/ecma262/#sec-math.fround


      var mathFround = Math.fround || function fround(x) {
        var $abs = abs$3(x);
        var $sign = mathSign(x);
        var a, result;
        if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
        a = (1 + EPSILON32 / EPSILON) * $abs;
        result = a - (a - $abs); // eslint-disable-next-line no-self-compare

        if (result > MAX32 || result != result) return $sign * Infinity;
        return $sign * result;
      };

      // https://tc39.github.io/ecma262/#sec-math.fround

      _export({
        target: 'Math',
        stat: true
      }, {
        fround: mathFround
      });

      var $hypot = Math.hypot;
      var abs$4 = Math.abs;
      var sqrt$2 = Math.sqrt; // Chrome 77 bug
      // https://bugs.chromium.org/p/v8/issues/detail?id=9546

      var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
      // https://tc39.github.io/ecma262/#sec-math.hypot

      _export({
        target: 'Math',
        stat: true,
        forced: BUGGY
      }, {
        hypot: function hypot(value1, value2) {
          // eslint-disable-line no-unused-vars
          var sum = 0;
          var i = 0;
          var aLen = arguments.length;
          var larg = 0;
          var arg, div;

          while (i < aLen) {
            arg = abs$4(arguments[i++]);

            if (larg < arg) {
              div = larg / arg;
              sum = sum * div * div + 1;
              larg = arg;
            } else if (arg > 0) {
              div = arg / larg;
              sum += div * div;
            } else sum += arg;
          }

          return larg === Infinity ? Infinity : larg * sqrt$2(sum);
        }
      });

      var nativeImul = Math.imul;
      var FORCED$b = fails(function () {
        return nativeImul(0xFFFFFFFF, 5) != -5 || nativeImul.length != 2;
      }); // `Math.imul` method
      // https://tc39.github.io/ecma262/#sec-math.imul
      // some WebKit versions fails with big numbers, some has wrong arity

      _export({
        target: 'Math',
        stat: true,
        forced: FORCED$b
      }, {
        imul: function imul(x, y) {
          var UINT16 = 0xFFFF;
          var xn = +x;
          var yn = +y;
          var xl = UINT16 & xn;
          var yl = UINT16 & yn;
          return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
        }
      });

      var log$6 = Math.log;
      var LOG10E = Math.LOG10E; // `Math.log10` method
      // https://tc39.github.io/ecma262/#sec-math.log10

      _export({
        target: 'Math',
        stat: true
      }, {
        log10: function log10(x) {
          return log$6(x) * LOG10E;
        }
      });

      // https://tc39.github.io/ecma262/#sec-math.log1p

      _export({
        target: 'Math',
        stat: true
      }, {
        log1p: mathLog1p
      });

      var log$7 = Math.log;
      var LN2$1 = Math.LN2; // `Math.log2` method
      // https://tc39.github.io/ecma262/#sec-math.log2

      _export({
        target: 'Math',
        stat: true
      }, {
        log2: function log2(x) {
          return log$7(x) / LN2$1;
        }
      });

      // https://tc39.github.io/ecma262/#sec-math.sign

      _export({
        target: 'Math',
        stat: true
      }, {
        sign: mathSign
      });

      var abs$5 = Math.abs;
      var exp$1 = Math.exp;
      var E$1 = Math.E;
      var FORCED$c = fails(function () {
        return Math.sinh(-2e-17) != -2e-17;
      }); // `Math.sinh` method
      // https://tc39.github.io/ecma262/#sec-math.sinh
      // V8 near Chromium 38 has a problem with very small numbers

      _export({
        target: 'Math',
        stat: true,
        forced: FORCED$c
      }, {
        sinh: function sinh(x) {
          return abs$5(x = +x) < 1 ? (mathExpm1(x) - mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (E$1 / 2);
        }
      });

      var exp$2 = Math.exp; // `Math.tanh` method
      // https://tc39.github.io/ecma262/#sec-math.tanh

      _export({
        target: 'Math',
        stat: true
      }, {
        tanh: function tanh(x) {
          var a = mathExpm1(x = +x);
          var b = mathExpm1(-x);
          return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
        }
      });

      // https://tc39.github.io/ecma262/#sec-math-@@tostringtag

      setToStringTag(Math, 'Math', true);

      var ceil$2 = Math.ceil;
      var floor$5 = Math.floor; // `Math.trunc` method
      // https://tc39.github.io/ecma262/#sec-math.trunc

      _export({
        target: 'Math',
        stat: true
      }, {
        trunc: function trunc(it) {
          return (it > 0 ? floor$5 : ceil$2)(it);
        }
      });

      // https://tc39.github.io/ecma262/#sec-date.now

      _export({
        target: 'Date',
        stat: true
      }, {
        now: function now() {
          return new Date().getTime();
        }
      });

      var FORCED$d = fails(function () {
        return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
          toISOString: function toISOString() {
            return 1;
          }
        }) !== 1;
      }); // `Date.prototype.toJSON` method
      // https://tc39.github.io/ecma262/#sec-date.prototype.tojson

      _export({
        target: 'Date',
        proto: true,
        forced: FORCED$d
      }, {
        // eslint-disable-next-line no-unused-vars
        toJSON: function toJSON(key) {
          var O = toObject(this);
          var pv = toPrimitive(O);
          return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
        }
      });

      var padStart = stringPad.start;
      var abs$6 = Math.abs;
      var DatePrototype = Date.prototype;
      var getTime = DatePrototype.getTime;
      var nativeDateToISOString = DatePrototype.toISOString; // `Date.prototype.toISOString` method implementation
      // https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
      // PhantomJS / old WebKit fails here:

      var dateToIsoString = fails(function () {
        return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
      }) || !fails(function () {
        nativeDateToISOString.call(new Date(NaN));
      }) ? function toISOString() {
        if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
        var date = this;
        var year = date.getUTCFullYear();
        var milliseconds = date.getUTCMilliseconds();
        var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
        return sign + padStart(abs$6(year), sign ? 6 : 4, 0) + '-' + padStart(date.getUTCMonth() + 1, 2, 0) + '-' + padStart(date.getUTCDate(), 2, 0) + 'T' + padStart(date.getUTCHours(), 2, 0) + ':' + padStart(date.getUTCMinutes(), 2, 0) + ':' + padStart(date.getUTCSeconds(), 2, 0) + '.' + padStart(milliseconds, 3, 0) + 'Z';
      } : nativeDateToISOString;

      // https://tc39.github.io/ecma262/#sec-date.prototype.toisostring
      // PhantomJS / old WebKit has a broken implementations

      _export({
        target: 'Date',
        proto: true,
        forced: Date.prototype.toISOString !== dateToIsoString
      }, {
        toISOString: dateToIsoString
      });

      var DatePrototype$1 = Date.prototype;
      var INVALID_DATE = 'Invalid Date';
      var TO_STRING$1 = 'toString';
      var nativeDateToString = DatePrototype$1[TO_STRING$1];
      var getTime$1 = DatePrototype$1.getTime; // `Date.prototype.toString` method
      // https://tc39.github.io/ecma262/#sec-date.prototype.tostring

      if (new Date(NaN) + '' != INVALID_DATE) {
        redefine(DatePrototype$1, TO_STRING$1, function toString() {
          var value = getTime$1.call(this); // eslint-disable-next-line no-self-compare

          return value === value ? nativeDateToString.call(this) : INVALID_DATE;
        });
      }

      var dateToPrimitive = function dateToPrimitive(hint) {
        if (hint !== 'string' && hint !== 'number' && hint !== 'default') {
          throw TypeError('Incorrect hint');
        }

        return toPrimitive(anObject(this), hint !== 'number');
      };

      var TO_PRIMITIVE$1 = wellKnownSymbol('toPrimitive');
      var DatePrototype$2 = Date.prototype; // `Date.prototype[@@toPrimitive]` method
      // https://tc39.github.io/ecma262/#sec-date.prototype-@@toprimitive

      if (!(TO_PRIMITIVE$1 in DatePrototype$2)) hide(DatePrototype$2, TO_PRIMITIVE$1, dateToPrimitive);

      // https://tc39.github.io/ecma262/#sec-json-@@tostringtag

      setToStringTag(global_1.JSON, 'JSON', true);

      var nativePromiseConstructor = global_1.Promise;

      var redefineAll = function redefineAll(target, src, options) {
        for (var key in src) {
          redefine(target, key, src[key], options);
        }

        return target;
      };

      var anInstance = function anInstance(it, Constructor, name) {
        if (!(it instanceof Constructor)) {
          throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
        }

        return it;
      };

      var location = global_1.location;
      var set$1 = global_1.setImmediate;
      var clear = global_1.clearImmediate;
      var process = global_1.process;
      var MessageChannel = global_1.MessageChannel;
      var Dispatch = global_1.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = 'onreadystatechange';
      var defer, channel, port;

      var run = function run(id) {
        // eslint-disable-next-line no-prototype-builtins
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };

      var runner = function runner(id) {
        return function () {
          run(id);
        };
      };

      var listener = function listener(event) {
        run(event.data);
      };

      var post = function post(id) {
        // old engines have not location.origin
        global_1.postMessage(id + '', location.protocol + '//' + location.host);
      }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


      if (!set$1 || !clear) {
        set$1 = function setImmediate(fn) {
          var args = [];
          var i = 1;

          while (arguments.length > i) {
            args.push(arguments[i++]);
          }

          queue[++counter] = function () {
            // eslint-disable-next-line no-new-func
            (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
          };

          defer(counter);
          return counter;
        };

        clear = function clearImmediate(id) {
          delete queue[id];
        }; // Node.js 0.8-


        if (classofRaw(process) == 'process') {
          defer = function defer(id) {
            process.nextTick(runner(id));
          }; // Sphere (JS game engine) Dispatch API

        } else if (Dispatch && Dispatch.now) {
          defer = function defer(id) {
            Dispatch.now(runner(id));
          }; // Browsers with MessageChannel, includes WebWorkers

        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = bindContext(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global_1.addEventListener && typeof postMessage == 'function' && !global_1.importScripts && !fails(post)) {
          defer = post;
          global_1.addEventListener('message', listener, false); // IE8-
        } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
          defer = function defer(id) {
            html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run(id);
            };
          }; // Rest old browsers

        } else {
          defer = function defer(id) {
            setTimeout(runner(id), 0);
          };
        }
      }

      var task = {
        set: set$1,
        clear: clear
      };

      var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;
      var macrotask = task.set;
      var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
      var process$1 = global_1.process;
      var Promise$1 = global_1.Promise;
      var IS_NODE = classofRaw(process$1) == 'process'; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

      var queueMicrotaskDescriptor = getOwnPropertyDescriptor$5(global_1, 'queueMicrotask');
      var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
      var flush, head, last, notify, toggle, node, promise, then; // modern engines have queueMicrotask method

      if (!queueMicrotask) {
        flush = function flush() {
          var parent, fn;
          if (IS_NODE && (parent = process$1.domain)) parent.exit();

          while (head) {
            fn = head.fn;
            head = head.next;

            try {
              fn();
            } catch (error) {
              if (head) notify();else last = undefined;
              throw error;
            }
          }

          last = undefined;
          if (parent) parent.enter();
        }; // Node.js


        if (IS_NODE) {
          notify = function notify() {
            process$1.nextTick(flush);
          }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339

        } else if (MutationObserver && !/(iphone|ipod|ipad).*applewebkit/i.test(userAgent)) {
          toggle = true;
          node = document.createTextNode('');
          new MutationObserver(flush).observe(node, {
            characterData: true
          }); // eslint-disable-line no-new

          notify = function notify() {
            node.data = toggle = !toggle;
          }; // environments with maybe non-completely correct, but existent Promise

        } else if (Promise$1 && Promise$1.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          promise = Promise$1.resolve(undefined);
          then = promise.then;

          notify = function notify() {
            then.call(promise, flush);
          }; // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout

        } else {
          notify = function notify() {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global_1, flush);
          };
        }
      }

      var microtask = queueMicrotask || function (fn) {
        var task = {
          fn: fn,
          next: undefined
        };
        if (last) last.next = task;

        if (!head) {
          head = task;
          notify();
        }

        last = task;
      };

      var PromiseCapability = function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction$1(resolve);
        this.reject = aFunction$1(reject);
      }; // 25.4.1.5 NewPromiseCapability(C)


      var f$7 = function f(C) {
        return new PromiseCapability(C);
      };

      var newPromiseCapability = {
        f: f$7
      };

      var promiseResolve = function promiseResolve(C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };

      var hostReportErrors = function hostReportErrors(a, b) {
        var console = global_1.console;

        if (console && console.error) {
          arguments.length === 1 ? console.error(a) : console.error(a, b);
        }
      };

      var perform = function perform(exec) {
        try {
          return {
            error: false,
            value: exec()
          };
        } catch (error) {
          return {
            error: true,
            value: error
          };
        }
      };

      var task$1 = task.set;
      var SPECIES$6 = wellKnownSymbol('species');
      var PROMISE = 'Promise';
      var getInternalState$4 = internalState.get;
      var setInternalState$4 = internalState.set;
      var getInternalPromiseState = internalState.getterFor(PROMISE);
      var PromiseConstructor = nativePromiseConstructor;
      var TypeError$1 = global_1.TypeError;
      var document$2 = global_1.document;
      var process$2 = global_1.process;
      var $fetch = global_1.fetch;
      var versions = process$2 && process$2.versions;
      var v8 = versions && versions.v8 || '';
      var newPromiseCapability$1 = newPromiseCapability.f;
      var newGenericPromiseCapability = newPromiseCapability$1;
      var IS_NODE$1 = classofRaw(process$2) == 'process';
      var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global_1.dispatchEvent);
      var UNHANDLED_REJECTION = 'unhandledrejection';
      var REJECTION_HANDLED = 'rejectionhandled';
      var PENDING = 0;
      var FULFILLED = 1;
      var REJECTED = 2;
      var HANDLED = 1;
      var UNHANDLED = 2;
      var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
      var FORCED$e = isForced_1(PROMISE, function () {
        // correct subclassing with @@species support
        var promise = PromiseConstructor.resolve(1);

        var empty = function empty() {
          /* empty */
        };

        var FakePromise = (promise.constructor = {})[SPECIES$6] = function (exec) {
          exec(empty, empty);
        }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


        return !((IS_NODE$1 || typeof PromiseRejectionEvent == 'function') && (!isPure || promise['finally']) && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // we can't detect it synchronously, so just check versions
        && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1);
      });
      var INCORRECT_ITERATION$1 = FORCED$e || !checkCorrectnessOfIteration(function (iterable) {
        PromiseConstructor.all(iterable)['catch'](function () {
          /* empty */
        });
      }); // helpers

      var isThenable = function isThenable(it) {
        var then;
        return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };

      var notify$1 = function notify(promise, state, isReject) {
        if (state.notified) return;
        state.notified = true;
        var chain = state.reactions;
        microtask(function () {
          var value = state.value;
          var ok = state.state == FULFILLED;
          var index = 0; // variable length - can't use forEach

          while (chain.length > index) {
            var reaction = chain[index++];
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;

            try {
              if (handler) {
                if (!ok) {
                  if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
                  state.rejection = HANDLED;
                }

                if (handler === true) result = value;else {
                  if (domain) domain.enter();
                  result = handler(value); // can throw

                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }

                if (result === reaction.promise) {
                  reject(TypeError$1('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (error) {
              if (domain && !exited) domain.exit();
              reject(error);
            }
          }

          state.reactions = [];
          state.notified = false;
          if (isReject && !state.rejection) onUnhandled(promise, state);
        });
      };

      var dispatchEvent = function dispatchEvent(name, promise, reason) {
        var event, handler;

        if (DISPATCH_EVENT) {
          event = document$2.createEvent('Event');
          event.promise = promise;
          event.reason = reason;
          event.initEvent(name, false, true);
          global_1.dispatchEvent(event);
        } else event = {
          promise: promise,
          reason: reason
        };

        if (handler = global_1['on' + name]) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
      };

      var onUnhandled = function onUnhandled(promise, state) {
        task$1.call(global_1, function () {
          var value = state.value;
          var IS_UNHANDLED = isUnhandled(state);
          var result;

          if (IS_UNHANDLED) {
            result = perform(function () {
              if (IS_NODE$1) {
                process$2.emit('unhandledRejection', value, promise);
              } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
            }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

            state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
            if (result.error) throw result.value;
          }
        });
      };

      var isUnhandled = function isUnhandled(state) {
        return state.rejection !== HANDLED && !state.parent;
      };

      var onHandleUnhandled = function onHandleUnhandled(promise, state) {
        task$1.call(global_1, function () {
          if (IS_NODE$1) {
            process$2.emit('rejectionHandled', promise);
          } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
        });
      };

      var bind = function bind(fn, promise, state, unwrap) {
        return function (value) {
          fn(promise, state, value, unwrap);
        };
      };

      var internalReject = function internalReject(promise, state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;
        state.value = value;
        state.state = REJECTED;
        notify$1(promise, state, true);
      };

      var internalResolve = function internalResolve(promise, state, value, unwrap) {
        if (state.done) return;
        state.done = true;
        if (unwrap) state = unwrap;

        try {
          if (promise === value) throw TypeError$1("Promise can't be resolved itself");
          var then = isThenable(value);

          if (then) {
            microtask(function () {
              var wrapper = {
                done: false
              };

              try {
                then.call(value, bind(internalResolve, promise, wrapper, state), bind(internalReject, promise, wrapper, state));
              } catch (error) {
                internalReject(promise, wrapper, error, state);
              }
            });
          } else {
            state.value = value;
            state.state = FULFILLED;
            notify$1(promise, state, false);
          }
        } catch (error) {
          internalReject(promise, {
            done: false
          }, error, state);
        }
      }; // constructor polyfill


      if (FORCED$e) {
        // 25.4.3.1 Promise(executor)
        PromiseConstructor = function Promise(executor) {
          anInstance(this, PromiseConstructor, PROMISE);
          aFunction$1(executor);
          Internal.call(this);
          var state = getInternalState$4(this);

          try {
            executor(bind(internalResolve, this, state), bind(internalReject, this, state));
          } catch (error) {
            internalReject(this, state, error);
          }
        }; // eslint-disable-next-line no-unused-vars


        Internal = function Promise(executor) {
          setInternalState$4(this, {
            type: PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: [],
            rejection: false,
            state: PENDING,
            value: undefined
          });
        };

        Internal.prototype = redefineAll(PromiseConstructor.prototype, {
          // `Promise.prototype.then` method
          // https://tc39.github.io/ecma262/#sec-promise.prototype.then
          then: function then(onFulfilled, onRejected) {
            var state = getInternalPromiseState(this);
            var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = IS_NODE$1 ? process$2.domain : undefined;
            state.parent = true;
            state.reactions.push(reaction);
            if (state.state != PENDING) notify$1(this, state, false);
            return reaction.promise;
          },
          // `Promise.prototype.catch` method
          // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
          'catch': function _catch(onRejected) {
            return this.then(undefined, onRejected);
          }
        });

        OwnPromiseCapability = function OwnPromiseCapability() {
          var promise = new Internal();
          var state = getInternalState$4(promise);
          this.promise = promise;
          this.resolve = bind(internalResolve, promise, state);
          this.reject = bind(internalReject, promise, state);
        };

        newPromiseCapability.f = newPromiseCapability$1 = function newPromiseCapability(C) {
          return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };

        if ( typeof nativePromiseConstructor == 'function') {
          nativeThen = nativePromiseConstructor.prototype.then; // wrap native Promise#then for native async functions

          redefine(nativePromiseConstructor.prototype, 'then', function then(onFulfilled, onRejected) {
            var that = this;
            return new PromiseConstructor(function (resolve, reject) {
              nativeThen.call(that, resolve, reject);
            }).then(onFulfilled, onRejected);
          }); // wrap fetch result

          if (typeof $fetch == 'function') _export({
            global: true,
            enumerable: true,
            forced: true
          }, {
            // eslint-disable-next-line no-unused-vars
            fetch: function fetch(input) {
              return promiseResolve(PromiseConstructor, $fetch.apply(global_1, arguments));
            }
          });
        }
      }

      _export({
        global: true,
        wrap: true,
        forced: FORCED$e
      }, {
        Promise: PromiseConstructor
      });
      setToStringTag(PromiseConstructor, PROMISE, false);
      setSpecies(PROMISE);
      PromiseWrapper = path[PROMISE]; // statics

      _export({
        target: PROMISE,
        stat: true,
        forced: FORCED$e
      }, {
        // `Promise.reject` method
        // https://tc39.github.io/ecma262/#sec-promise.reject
        reject: function reject(r) {
          var capability = newPromiseCapability$1(this);
          capability.reject.call(undefined, r);
          return capability.promise;
        }
      });
      _export({
        target: PROMISE,
        stat: true,
        forced:  FORCED$e
      }, {
        // `Promise.resolve` method
        // https://tc39.github.io/ecma262/#sec-promise.resolve
        resolve: function resolve(x) {
          return promiseResolve( this, x);
        }
      });
      _export({
        target: PROMISE,
        stat: true,
        forced: INCORRECT_ITERATION$1
      }, {
        // `Promise.all` method
        // https://tc39.github.io/ecma262/#sec-promise.all
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability$1(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aFunction$1(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate_1(iterable, function (promise) {
              var index = counter++;
              var alreadyCalled = false;
              values.push(undefined);
              remaining++;
              $promiseResolve.call(C, promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        },
        // `Promise.race` method
        // https://tc39.github.io/ecma262/#sec-promise.race
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability$1(C);
          var reject = capability.reject;
          var result = perform(function () {
            var $promiseResolve = aFunction$1(C.resolve);
            iterate_1(iterable, function (promise) {
              $promiseResolve.call(C, promise).then(capability.resolve, reject);
            });
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });

      // https://github.com/tc39/proposal-promise-allSettled


      _export({
        target: 'Promise',
        stat: true
      }, {
        allSettled: function allSettled(iterable) {
          var C = this;
          var capability = newPromiseCapability.f(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function () {
            var promiseResolve = aFunction$1(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            iterate_1(iterable, function (promise) {
              var index = counter++;
              var alreadyCalled = false;
              values.push(undefined);
              remaining++;
              promiseResolve.call(C, promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = {
                  status: 'fulfilled',
                  value: value
                };
                --remaining || resolve(values);
              }, function (e) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = {
                  status: 'rejected',
                  reason: e
                };
                --remaining || resolve(values);
              });
            });
            --remaining || resolve(values);
          });
          if (result.error) reject(result.value);
          return capability.promise;
        }
      });

      // https://tc39.github.io/ecma262/#sec-promise.prototype.finally


      _export({
        target: 'Promise',
        proto: true,
        real: true
      }, {
        'finally': function _finally(onFinally) {
          var C = speciesConstructor(this, getBuiltIn('Promise'));
          var isFunction = typeof onFinally == 'function';
          return this.then(isFunction ? function (x) {
            return promiseResolve(C, onFinally()).then(function () {
              return x;
            });
          } : onFinally, isFunction ? function (e) {
            return promiseResolve(C, onFinally()).then(function () {
              throw e;
            });
          } : onFinally);
        }
      }); // patch native Promise.prototype for native async functions

      if ( typeof nativePromiseConstructor == 'function' && !nativePromiseConstructor.prototype['finally']) {
        redefine(nativePromiseConstructor.prototype, 'finally', getBuiltIn('Promise').prototype['finally']);
      }

      var collection = function collection(CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
        var NativeConstructor = global_1[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var Constructor = NativeConstructor;
        var ADDER = IS_MAP ? 'set' : 'add';
        var exported = {};

        var fixMethod = function fixMethod(KEY) {
          var nativeMethod = NativePrototype[KEY];
          redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
            nativeMethod.call(this, value === 0 ? 0 : value);
            return this;
          } : KEY == 'delete' ? function (key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'get' ? function get(key) {
            return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
          } : KEY == 'has' ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
          } : function set(key, value) {
            nativeMethod.call(this, key === 0 ? 0 : key, value);
            return this;
          });
        }; // eslint-disable-next-line max-len


        if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
          new NativeConstructor().entries().next();
        })))) {
          // create collection constructor
          Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
          internalMetadata.REQUIRED = true;
        } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
          var instance = new Constructor(); // early implementations not supports chaining

          var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

          var THROWS_ON_PRIMITIVES = fails(function () {
            instance.has(1);
          }); // most early implementations doesn't supports iterables, most modern - not close it correctly
          // eslint-disable-next-line no-new

          var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
            new NativeConstructor(iterable);
          }); // for early implementations -0 and +0 not the same

          var BUGGY_ZERO = !IS_WEAK && fails(function () {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new NativeConstructor();
            var index = 5;

            while (index--) {
              $instance[ADDER](index, index);
            }

            return !$instance.has(-0);
          });

          if (!ACCEPT_ITERABLES) {
            Constructor = wrapper(function (dummy, iterable) {
              anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
              var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
              if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
              return that;
            });
            Constructor.prototype = NativePrototype;
            NativePrototype.constructor = Constructor;
          }

          if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
          }

          if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

          if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
        }

        exported[CONSTRUCTOR_NAME] = Constructor;
        _export({
          global: true,
          forced: Constructor != NativeConstructor
        }, exported);
        setToStringTag(Constructor, CONSTRUCTOR_NAME);
        if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
        return Constructor;
      };

      var defineProperty$6 = objectDefineProperty.f;
      var fastKey = internalMetadata.fastKey;
      var setInternalState$5 = internalState.set;
      var internalStateGetterFor = internalState.getterFor;
      var collectionStrong = {
        getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState$5(that, {
              type: CONSTRUCTOR_NAME,
              index: objectCreate(null),
              first: undefined,
              last: undefined,
              size: 0
            });
            if (!descriptors) that.size = 0;
            if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
          });
          var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

          var define = function define(that, key, value) {
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            var previous, index; // change existing entry

            if (entry) {
              entry.value = value; // create new entry
            } else {
              state.last = entry = {
                index: index = fastKey(key, true),
                key: key,
                value: value,
                previous: previous = state.last,
                next: undefined,
                removed: false
              };
              if (!state.first) state.first = entry;
              if (previous) previous.next = entry;
              if (descriptors) state.size++;else that.size++; // add to index

              if (index !== 'F') state.index[index] = entry;
            }

            return that;
          };

          var getEntry = function getEntry(that, key) {
            var state = getInternalState(that); // fast case

            var index = fastKey(key);
            var entry;
            if (index !== 'F') return state.index[index]; // frozen object case

            for (entry = state.first; entry; entry = entry.next) {
              if (entry.key == key) return entry;
            }
          };

          redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
              var that = this;
              var state = getInternalState(that);
              var data = state.index;
              var entry = state.first;

              while (entry) {
                entry.removed = true;
                if (entry.previous) entry.previous = entry.previous.next = undefined;
                delete data[entry.index];
                entry = entry.next;
              }

              state.first = state.last = undefined;
              if (descriptors) state.size = 0;else that.size = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            'delete': function _delete(key) {
              var that = this;
              var state = getInternalState(that);
              var entry = getEntry(that, key);

              if (entry) {
                var next = entry.next;
                var prev = entry.previous;
                delete state.index[entry.index];
                entry.removed = true;
                if (prev) prev.next = next;
                if (next) next.previous = prev;
                if (state.first == entry) state.first = next;
                if (state.last == entry) state.last = prev;
                if (descriptors) state.size--;else that.size--;
              }

              return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach(callbackfn
            /* , that = undefined */
            ) {
              var state = getInternalState(this);
              var boundFunction = bindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
              var entry;

              while (entry = entry ? entry.next : state.first) {
                boundFunction(entry.value, entry.key, this); // revert to the last existing entry

                while (entry && entry.removed) {
                  entry = entry.previous;
                }
              }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
              return !!getEntry(this, key);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            // 23.1.3.6 Map.prototype.get(key)
            get: function get(key) {
              var entry = getEntry(this, key);
              return entry && entry.value;
            },
            // 23.1.3.9 Map.prototype.set(key, value)
            set: function set(key, value) {
              return define(this, key === 0 ? 0 : key, value);
            }
          } : {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
              return define(this, value = value === 0 ? 0 : value, value);
            }
          });
          if (descriptors) defineProperty$6(C.prototype, 'size', {
            get: function get() {
              return getInternalState(this).size;
            }
          });
          return C;
        },
        setStrong: function setStrong(C, CONSTRUCTOR_NAME, IS_MAP) {
          var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
          var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
          var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
          // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

          defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
            setInternalState$5(this, {
              type: ITERATOR_NAME,
              target: iterated,
              state: getInternalCollectionState(iterated),
              kind: kind,
              last: undefined
            });
          }, function () {
            var state = getInternalIteratorState(this);
            var kind = state.kind;
            var entry = state.last; // revert to the last existing entry

            while (entry && entry.removed) {
              entry = entry.previous;
            } // get next entry


            if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
              // or finish the iteration
              state.target = undefined;
              return {
                value: undefined,
                done: true
              };
            } // return step by kind


            if (kind == 'keys') return {
              value: entry.key,
              done: false
            };
            if (kind == 'values') return {
              value: entry.value,
              done: false
            };
            return {
              value: [entry.key, entry.value],
              done: false
            };
          }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

          setSpecies(CONSTRUCTOR_NAME);
        }
      };

      // https://tc39.github.io/ecma262/#sec-map-objects


      var es_map = collection('Map', function (get) {
        return function Map() {
          return get(this, arguments.length ? arguments[0] : undefined);
        };
      }, collectionStrong, true);

      // https://tc39.github.io/ecma262/#sec-set-objects


      var es_set = collection('Set', function (get) {
        return function Set() {
          return get(this, arguments.length ? arguments[0] : undefined);
        };
      }, collectionStrong);

      var getWeakData = internalMetadata.getWeakData;
      var setInternalState$6 = internalState.set;
      var internalStateGetterFor$1 = internalState.getterFor;
      var find = arrayIteration.find;
      var findIndex = arrayIteration.findIndex;
      var id$1 = 0; // fallback for uncaught frozen keys

      var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
        return store.frozen || (store.frozen = new UncaughtFrozenStore());
      };

      var UncaughtFrozenStore = function UncaughtFrozenStore() {
        this.entries = [];
      };

      var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
        return find(store.entries, function (it) {
          return it[0] === key;
        });
      };

      UncaughtFrozenStore.prototype = {
        get: function get(key) {
          var entry = findUncaughtFrozen(this, key);
          if (entry) return entry[1];
        },
        has: function has(key) {
          return !!findUncaughtFrozen(this, key);
        },
        set: function set(key, value) {
          var entry = findUncaughtFrozen(this, key);
          if (entry) entry[1] = value;else this.entries.push([key, value]);
        },
        'delete': function _delete(key) {
          var index = findIndex(this.entries, function (it) {
            return it[0] === key;
          });
          if (~index) this.entries.splice(index, 1);
          return !!~index;
        }
      };
      var collectionWeak = {
        getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
          var C = wrapper(function (that, iterable) {
            anInstance(that, C, CONSTRUCTOR_NAME);
            setInternalState$6(that, {
              type: CONSTRUCTOR_NAME,
              id: id$1++,
              frozen: undefined
            });
            if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
          });
          var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

          var define = function define(that, key, value) {
            var state = getInternalState(that);
            var data = getWeakData(anObject(key), true);
            if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
            return that;
          };

          redefineAll(C.prototype, {
            // 23.3.3.2 WeakMap.prototype.delete(key)
            // 23.4.3.3 WeakSet.prototype.delete(value)
            'delete': function _delete(key) {
              var state = getInternalState(this);
              if (!isObject(key)) return false;
              var data = getWeakData(key);
              if (data === true) return uncaughtFrozenStore(state)['delete'](key);
              return data && has(data, state.id) && delete data[state.id];
            },
            // 23.3.3.4 WeakMap.prototype.has(key)
            // 23.4.3.4 WeakSet.prototype.has(value)
            has: function has$1(key) {
              var state = getInternalState(this);
              if (!isObject(key)) return false;
              var data = getWeakData(key);
              if (data === true) return uncaughtFrozenStore(state).has(key);
              return data && has(data, state.id);
            }
          });
          redefineAll(C.prototype, IS_MAP ? {
            // 23.3.3.3 WeakMap.prototype.get(key)
            get: function get(key) {
              var state = getInternalState(this);

              if (isObject(key)) {
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state).get(key);
                return data ? data[state.id] : undefined;
              }
            },
            // 23.3.3.5 WeakMap.prototype.set(key, value)
            set: function set(key, value) {
              return define(this, key, value);
            }
          } : {
            // 23.4.3.1 WeakSet.prototype.add(value)
            add: function add(value) {
              return define(this, value, true);
            }
          });
          return C;
        }
      };

      var es_weakMap = createCommonjsModule(function (module) {

        var enforceIternalState = internalState.enforce;
        var IS_IE11 = !global_1.ActiveXObject && 'ActiveXObject' in global_1;
        var isExtensible = Object.isExtensible;
        var InternalWeakMap;

        var wrapper = function wrapper(get) {
          return function WeakMap() {
            return get(this, arguments.length ? arguments[0] : undefined);
          };
        }; // `WeakMap` constructor
        // https://tc39.github.io/ecma262/#sec-weakmap-constructor


        var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak, true, true); // IE11 WeakMap frozen keys fix
        // We can't use feature detection because it crash some old IE builds
        // https://github.com/zloirock/core-js/issues/485

        if (nativeWeakMap && IS_IE11) {
          InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
          internalMetadata.REQUIRED = true;
          var WeakMapPrototype = $WeakMap.prototype;
          var nativeDelete = WeakMapPrototype['delete'];
          var nativeHas = WeakMapPrototype.has;
          var nativeGet = WeakMapPrototype.get;
          var nativeSet = WeakMapPrototype.set;
          redefineAll(WeakMapPrototype, {
            'delete': function _delete(key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeDelete.call(this, key) || state.frozen['delete'](key);
              }

              return nativeDelete.call(this, key);
            },
            has: function has(key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas.call(this, key) || state.frozen.has(key);
              }

              return nativeHas.call(this, key);
            },
            get: function get(key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
              }

              return nativeGet.call(this, key);
            },
            set: function set(key, value) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
              } else nativeSet.call(this, key, value);

              return this;
            }
          });
        }
      });

      // https://tc39.github.io/ecma262/#sec-weakset-constructor


      collection('WeakSet', function (get) {
        return function WeakSet() {
          return get(this, arguments.length ? arguments[0] : undefined);
        };
      }, collectionWeak, false, true);

      var defineProperty$7 = objectDefineProperty.f;
      var DataView$1 = global_1.DataView;
      var DataViewPrototype = DataView$1 && DataView$1.prototype;
      var Int8Array$1 = global_1.Int8Array;
      var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
      var Uint8ClampedArray = global_1.Uint8ClampedArray;
      var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
      var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
      var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
      var ObjectPrototype$3 = Object.prototype;
      var isPrototypeOf = ObjectPrototype$3.isPrototypeOf;
      var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
      var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
      var NATIVE_ARRAY_BUFFER = !!(global_1.ArrayBuffer && DataView$1); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

      var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
      var TYPED_ARRAY_TAG_REQIRED = false;
      var NAME$1;
      var TypedArrayConstructorsList = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      };

      var isView = function isView(it) {
        var klass = classof(it);
        return klass === 'DataView' || has(TypedArrayConstructorsList, klass);
      };

      var isTypedArray = function isTypedArray(it) {
        return isObject(it) && has(TypedArrayConstructorsList, classof(it));
      };

      var aTypedArray = function aTypedArray(it) {
        if (isTypedArray(it)) return it;
        throw TypeError('Target is not a typed array');
      };

      var aTypedArrayConstructor = function aTypedArrayConstructor(C) {
        if (objectSetPrototypeOf) {
          if (isPrototypeOf.call(TypedArray, C)) return C;
        } else for (var ARRAY in TypedArrayConstructorsList) {
          if (has(TypedArrayConstructorsList, NAME$1)) {
            var TypedArrayConstructor = global_1[ARRAY];

            if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
              return C;
            }
          }
        }

        throw TypeError('Target is not a typed array constructor');
      };

      var exportProto = function exportProto(KEY, property, forced) {
        if (!descriptors) return;
        if (forced) for (var ARRAY in TypedArrayConstructorsList) {
          var TypedArrayConstructor = global_1[ARRAY];

          if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) {
            delete TypedArrayConstructor.prototype[KEY];
          }
        }

        if (!TypedArrayPrototype[KEY] || forced) {
          redefine(TypedArrayPrototype, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
        }
      };

      var exportStatic = function exportStatic(KEY, property, forced) {
        var ARRAY, TypedArrayConstructor;
        if (!descriptors) return;

        if (objectSetPrototypeOf) {
          if (forced) for (ARRAY in TypedArrayConstructorsList) {
            TypedArrayConstructor = global_1[ARRAY];

            if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) {
              delete TypedArrayConstructor[KEY];
            }
          }

          if (!TypedArray[KEY] || forced) {
            // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
            try {
              return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && Int8Array$1[KEY] || property);
            } catch (error) {
              /* empty */
            }
          } else return;
        }

        for (ARRAY in TypedArrayConstructorsList) {
          TypedArrayConstructor = global_1[ARRAY];

          if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
            redefine(TypedArrayConstructor, KEY, property);
          }
        }
      };

      for (NAME$1 in TypedArrayConstructorsList) {
        if (!global_1[NAME$1]) NATIVE_ARRAY_BUFFER_VIEWS = false;
      } // WebKit bug - typed arrays constructors prototype is Object.prototype


      if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
        // eslint-disable-next-line no-shadow
        TypedArray = function TypedArray() {
          throw TypeError('Incorrect invocation');
        };

        if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$1 in TypedArrayConstructorsList) {
          if (global_1[NAME$1]) objectSetPrototypeOf(global_1[NAME$1], TypedArray);
        }
      }

      if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$3) {
        TypedArrayPrototype = TypedArray.prototype;
        if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME$1 in TypedArrayConstructorsList) {
          if (global_1[NAME$1]) objectSetPrototypeOf(global_1[NAME$1].prototype, TypedArrayPrototype);
        }
      } // WebKit bug - one more object in Uint8ClampedArray prototype chain


      if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
        objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
      }

      if (descriptors && !has(TypedArrayPrototype, TO_STRING_TAG$3)) {
        TYPED_ARRAY_TAG_REQIRED = true;
        defineProperty$7(TypedArrayPrototype, TO_STRING_TAG$3, {
          get: function get() {
            return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
          }
        });

        for (NAME$1 in TypedArrayConstructorsList) {
          if (global_1[NAME$1]) {
            hide(global_1[NAME$1], TYPED_ARRAY_TAG, NAME$1);
          }
        }
      } // WebKit bug - the same parent prototype for typed arrays and data view


      if (NATIVE_ARRAY_BUFFER && objectSetPrototypeOf && objectGetPrototypeOf(DataViewPrototype) !== ObjectPrototype$3) {
        objectSetPrototypeOf(DataViewPrototype, ObjectPrototype$3);
      }

      var arrayBufferViewCore = {
        NATIVE_ARRAY_BUFFER: NATIVE_ARRAY_BUFFER,
        NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
        TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
        aTypedArray: aTypedArray,
        aTypedArrayConstructor: aTypedArrayConstructor,
        exportProto: exportProto,
        exportStatic: exportStatic,
        isView: isView,
        isTypedArray: isTypedArray,
        TypedArray: TypedArray,
        TypedArrayPrototype: TypedArrayPrototype
      };

      // https://tc39.github.io/ecma262/#sec-toindex

      var toIndex = function toIndex(it) {
        if (it === undefined) return 0;
        var number = toInteger(it);
        var length = toLength(number);
        if (number !== length) throw RangeError('Wrong length or index');
        return length;
      };

      var arrayBuffer = createCommonjsModule(function (module, exports) {

        var NATIVE_ARRAY_BUFFER = arrayBufferViewCore.NATIVE_ARRAY_BUFFER;
        var getOwnPropertyNames = objectGetOwnPropertyNames.f;
        var defineProperty = objectDefineProperty.f;
        var getInternalState = internalState.get;
        var setInternalState = internalState.set;
        var ARRAY_BUFFER = 'ArrayBuffer';
        var DATA_VIEW = 'DataView';
        var PROTOTYPE = 'prototype';
        var WRONG_LENGTH = 'Wrong length';
        var WRONG_INDEX = 'Wrong index';
        var NativeArrayBuffer = global_1[ARRAY_BUFFER];
        var $ArrayBuffer = NativeArrayBuffer;
        var $DataView = global_1[DATA_VIEW];
        var Math = global_1.Math;
        var RangeError = global_1.RangeError; // eslint-disable-next-line no-shadow-restricted-names

        var Infinity = 1 / 0;
        var abs = Math.abs;
        var pow = Math.pow;
        var floor = Math.floor;
        var log = Math.log;
        var LN2 = Math.LN2; // IEEE754 conversions based on https://github.com/feross/ieee754

        var packIEEE754 = function packIEEE754(number, mantissaLength, bytes) {
          var buffer = new Array(bytes);
          var exponentLength = bytes * 8 - mantissaLength - 1;
          var eMax = (1 << exponentLength) - 1;
          var eBias = eMax >> 1;
          var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
          var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
          var index = 0;
          var exponent, mantissa, c;
          number = abs(number); // eslint-disable-next-line no-self-compare

          if (number != number || number === Infinity) {
            // eslint-disable-next-line no-self-compare
            mantissa = number != number ? 1 : 0;
            exponent = eMax;
          } else {
            exponent = floor(log(number) / LN2);

            if (number * (c = pow(2, -exponent)) < 1) {
              exponent--;
              c *= 2;
            }

            if (exponent + eBias >= 1) {
              number += rt / c;
            } else {
              number += rt * pow(2, 1 - eBias);
            }

            if (number * c >= 2) {
              exponent++;
              c /= 2;
            }

            if (exponent + eBias >= eMax) {
              mantissa = 0;
              exponent = eMax;
            } else if (exponent + eBias >= 1) {
              mantissa = (number * c - 1) * pow(2, mantissaLength);
              exponent = exponent + eBias;
            } else {
              mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
              exponent = 0;
            }
          }

          for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8) {
          }

          exponent = exponent << mantissaLength | mantissa;
          exponentLength += mantissaLength;

          for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8) {
          }

          buffer[--index] |= sign * 128;
          return buffer;
        };

        var unpackIEEE754 = function unpackIEEE754(buffer, mantissaLength) {
          var bytes = buffer.length;
          var exponentLength = bytes * 8 - mantissaLength - 1;
          var eMax = (1 << exponentLength) - 1;
          var eBias = eMax >> 1;
          var nBits = exponentLength - 7;
          var index = bytes - 1;
          var sign = buffer[index--];
          var exponent = sign & 127;
          var mantissa;
          sign >>= 7;

          for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8) {
          }

          mantissa = exponent & (1 << -nBits) - 1;
          exponent >>= -nBits;
          nBits += mantissaLength;

          for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8) {
          }

          if (exponent === 0) {
            exponent = 1 - eBias;
          } else if (exponent === eMax) {
            return mantissa ? NaN : sign ? -Infinity : Infinity;
          } else {
            mantissa = mantissa + pow(2, mantissaLength);
            exponent = exponent - eBias;
          }

          return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
        };

        var unpackInt32 = function unpackInt32(buffer) {
          return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
        };

        var packInt8 = function packInt8(number) {
          return [number & 0xFF];
        };

        var packInt16 = function packInt16(number) {
          return [number & 0xFF, number >> 8 & 0xFF];
        };

        var packInt32 = function packInt32(number) {
          return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
        };

        var packFloat32 = function packFloat32(number) {
          return packIEEE754(number, 23, 4);
        };

        var packFloat64 = function packFloat64(number) {
          return packIEEE754(number, 52, 8);
        };

        var addGetter = function addGetter(Constructor, key) {
          defineProperty(Constructor[PROTOTYPE], key, {
            get: function get() {
              return getInternalState(this)[key];
            }
          });
        };

        var get = function get(view, count, index, isLittleEndian) {
          var numIndex = +index;
          var intIndex = toIndex(numIndex);
          var store = getInternalState(view);
          if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
          var bytes = getInternalState(store.buffer).bytes;
          var start = intIndex + store.byteOffset;
          var pack = bytes.slice(start, start + count);
          return isLittleEndian ? pack : pack.reverse();
        };

        var set = function set(view, count, index, conversion, value, isLittleEndian) {
          var numIndex = +index;
          var intIndex = toIndex(numIndex);
          var store = getInternalState(view);
          if (intIndex + count > store.byteLength) throw RangeError(WRONG_INDEX);
          var bytes = getInternalState(store.buffer).bytes;
          var start = intIndex + store.byteOffset;
          var pack = conversion(+value);

          for (var i = 0; i < count; i++) {
            bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
          }
        };

        if (!NATIVE_ARRAY_BUFFER) {
          $ArrayBuffer = function ArrayBuffer(length) {
            anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
            var byteLength = toIndex(length);
            setInternalState(this, {
              bytes: arrayFill.call(new Array(byteLength), 0),
              byteLength: byteLength
            });
            if (!descriptors) this.byteLength = byteLength;
          };

          $DataView = function DataView(buffer, byteOffset, byteLength) {
            anInstance(this, $DataView, DATA_VIEW);
            anInstance(buffer, $ArrayBuffer, DATA_VIEW);
            var bufferLength = getInternalState(buffer).byteLength;
            var offset = toInteger(byteOffset);
            if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset');
            byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
            if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
            setInternalState(this, {
              buffer: buffer,
              byteLength: byteLength,
              byteOffset: offset
            });

            if (!descriptors) {
              this.buffer = buffer;
              this.byteLength = byteLength;
              this.byteOffset = offset;
            }
          };

          if (descriptors) {
            addGetter($ArrayBuffer, 'byteLength');
            addGetter($DataView, 'buffer');
            addGetter($DataView, 'byteLength');
            addGetter($DataView, 'byteOffset');
          }

          redefineAll($DataView[PROTOTYPE], {
            getInt8: function getInt8(byteOffset) {
              return get(this, 1, byteOffset)[0] << 24 >> 24;
            },
            getUint8: function getUint8(byteOffset) {
              return get(this, 1, byteOffset)[0];
            },
            getInt16: function getInt16(byteOffset
            /* , littleEndian */
            ) {
              var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
              return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
            },
            getUint16: function getUint16(byteOffset
            /* , littleEndian */
            ) {
              var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
              return bytes[1] << 8 | bytes[0];
            },
            getInt32: function getInt32(byteOffset
            /* , littleEndian */
            ) {
              return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
            },
            getUint32: function getUint32(byteOffset
            /* , littleEndian */
            ) {
              return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
            },
            getFloat32: function getFloat32(byteOffset
            /* , littleEndian */
            ) {
              return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
            },
            getFloat64: function getFloat64(byteOffset
            /* , littleEndian */
            ) {
              return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
            },
            setInt8: function setInt8(byteOffset, value) {
              set(this, 1, byteOffset, packInt8, value);
            },
            setUint8: function setUint8(byteOffset, value) {
              set(this, 1, byteOffset, packInt8, value);
            },
            setInt16: function setInt16(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setUint16: function setUint16(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setInt32: function setInt32(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setUint32: function setUint32(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setFloat32: function setFloat32(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
            },
            setFloat64: function setFloat64(byteOffset, value
            /* , littleEndian */
            ) {
              set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
            }
          });
        } else {
          if (!fails(function () {
            NativeArrayBuffer(1);
          }) || !fails(function () {
            new NativeArrayBuffer(-1); // eslint-disable-line no-new
          }) || fails(function () {
            new NativeArrayBuffer(); // eslint-disable-line no-new

            new NativeArrayBuffer(1.5); // eslint-disable-line no-new

            new NativeArrayBuffer(NaN); // eslint-disable-line no-new

            return NativeArrayBuffer.name != ARRAY_BUFFER;
          })) {
            $ArrayBuffer = function ArrayBuffer(length) {
              anInstance(this, $ArrayBuffer);
              return new NativeArrayBuffer(toIndex(length));
            };

            var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];

            for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
              if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, NativeArrayBuffer[key]);
            }

            ArrayBufferPrototype.constructor = $ArrayBuffer;
          } // iOS Safari 7.x bug


          var testView = new $DataView(new $ArrayBuffer(2));
          var nativeSetInt8 = $DataView[PROTOTYPE].setInt8;
          testView.setInt8(0, 2147483648);
          testView.setInt8(1, 2147483649);
          if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
            setInt8: function setInt8(byteOffset, value) {
              nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
            },
            setUint8: function setUint8(byteOffset, value) {
              nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
            }
          }, {
            unsafe: true
          });
        }

        setToStringTag($ArrayBuffer, ARRAY_BUFFER);
        setToStringTag($DataView, DATA_VIEW);
        exports[ARRAY_BUFFER] = $ArrayBuffer;
        exports[DATA_VIEW] = $DataView;
      });

      var ARRAY_BUFFER = 'ArrayBuffer';
      var ArrayBuffer$1 = arrayBuffer[ARRAY_BUFFER];
      var NativeArrayBuffer = global_1[ARRAY_BUFFER]; // `ArrayBuffer` constructor
      // https://tc39.github.io/ecma262/#sec-arraybuffer-constructor

      _export({
        global: true,
        forced: NativeArrayBuffer !== ArrayBuffer$1
      }, {
        ArrayBuffer: ArrayBuffer$1
      });
      setSpecies(ARRAY_BUFFER);

      var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS; // `ArrayBuffer.isView` method
      // https://tc39.github.io/ecma262/#sec-arraybuffer.isview

      _export({
        target: 'ArrayBuffer',
        stat: true,
        forced: !NATIVE_ARRAY_BUFFER_VIEWS$1
      }, {
        isView: arrayBufferViewCore.isView
      });

      var ArrayBuffer$2 = arrayBuffer.ArrayBuffer;
      var DataView$2 = arrayBuffer.DataView;
      var nativeArrayBufferSlice = ArrayBuffer$2.prototype.slice;
      var INCORRECT_SLICE = fails(function () {
        return !new ArrayBuffer$2(2).slice(1, undefined).byteLength;
      }); // `ArrayBuffer.prototype.slice` method
      // https://tc39.github.io/ecma262/#sec-arraybuffer.prototype.slice

      _export({
        target: 'ArrayBuffer',
        proto: true,
        unsafe: true,
        forced: INCORRECT_SLICE
      }, {
        slice: function slice(start, end) {
          if (nativeArrayBufferSlice !== undefined && end === undefined) {
            return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
          }

          var length = anObject(this).byteLength;
          var first = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === undefined ? length : end, length);
          var result = new (speciesConstructor(this, ArrayBuffer$2))(toLength(fin - first));
          var viewSource = new DataView$2(this);
          var viewTarget = new DataView$2(result);
          var index = 0;

          while (first < fin) {
            viewTarget.setUint8(index++, viewSource.getUint8(first++));
          }

          return result;
        }
      });

      var NATIVE_ARRAY_BUFFER$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER; // `DataView` constructor
      // https://tc39.github.io/ecma262/#sec-dataview-constructor

      _export({
        global: true,
        forced: !NATIVE_ARRAY_BUFFER$1
      }, {
        DataView: arrayBuffer.DataView
      });

      /* eslint-disable no-new */

      var NATIVE_ARRAY_BUFFER_VIEWS$2 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
      var ArrayBuffer$3 = global_1.ArrayBuffer;
      var Int8Array$2 = global_1.Int8Array;
      var typedArraysConstructorsRequiresWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$2 || !fails(function () {
        Int8Array$2(1);
      }) || !fails(function () {
        new Int8Array$2(-1);
      }) || !checkCorrectnessOfIteration(function (iterable) {
        new Int8Array$2();
        new Int8Array$2(null);
        new Int8Array$2(1.5);
        new Int8Array$2(iterable);
      }, true) || fails(function () {
        // Safari 11 bug
        return new Int8Array$2(new ArrayBuffer$3(2), 1, undefined).length !== 1;
      });

      var toOffset = function toOffset(it, BYTES) {
        var offset = toInteger(it);
        if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset');
        return offset;
      };

      var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;

      var typedArrayFrom = function from(source
      /* , mapfn, thisArg */
      ) {
        var O = toObject(source);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var iteratorMethod = getIteratorMethod(O);
        var i, length, result, step, iterator;

        if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
          iterator = iteratorMethod.call(O);
          O = [];

          while (!(step = iterator.next()).done) {
            O.push(step.value);
          }
        }

        if (mapping && argumentsLength > 2) {
          mapfn = bindContext(mapfn, arguments[2], 2);
        }

        length = toLength(O.length);
        result = new (aTypedArrayConstructor$1(this))(length);

        for (i = 0; length > i; i++) {
          result[i] = mapping ? mapfn(O[i], i) : O[i];
        }

        return result;
      };

      var typedArrayConstructor = createCommonjsModule(function (module) {

        var getOwnPropertyNames = objectGetOwnPropertyNames.f;
        var forEach = arrayIteration.forEach;
        var getInternalState = internalState.get;
        var setInternalState = internalState.set;
        var nativeDefineProperty = objectDefineProperty.f;
        var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
        var round = Math.round;
        var RangeError = global_1.RangeError;
        var ArrayBuffer = arrayBuffer.ArrayBuffer;
        var DataView = arrayBuffer.DataView;
        var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
        var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
        var TypedArray = arrayBufferViewCore.TypedArray;
        var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
        var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
        var isTypedArray = arrayBufferViewCore.isTypedArray;
        var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
        var WRONG_LENGTH = 'Wrong length';

        var fromList = function fromList(C, list) {
          var index = 0;
          var length = list.length;
          var result = new (aTypedArrayConstructor(C))(length);

          while (length > index) {
            result[index] = list[index++];
          }

          return result;
        };

        var addGetter = function addGetter(it, key) {
          nativeDefineProperty(it, key, {
            get: function get() {
              return getInternalState(this)[key];
            }
          });
        };

        var isArrayBuffer = function isArrayBuffer(it) {
          var klass;
          return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
        };

        var isTypedArrayIndex = function isTypedArrayIndex(target, key) {
          return isTypedArray(target) && _typeof(key) != 'symbol' && key in target && String(+key) == String(key);
        };

        var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
          return isTypedArrayIndex(target, key = toPrimitive(key, true)) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
        };

        var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
          if (isTypedArrayIndex(target, key = toPrimitive(key, true)) && isObject(descriptor) && has(descriptor, 'value') && !has(descriptor, 'get') && !has(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
          && !descriptor.configurable && (!has(descriptor, 'writable') || descriptor.writable) && (!has(descriptor, 'enumerable') || descriptor.enumerable)) {
            target[key] = descriptor.value;
            return target;
          }

          return nativeDefineProperty(target, key, descriptor);
        };

        if (descriptors) {
          if (!NATIVE_ARRAY_BUFFER_VIEWS) {
            objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
            objectDefineProperty.f = wrappedDefineProperty;
            addGetter(TypedArrayPrototype, 'buffer');
            addGetter(TypedArrayPrototype, 'byteOffset');
            addGetter(TypedArrayPrototype, 'byteLength');
            addGetter(TypedArrayPrototype, 'length');
          }

          _export({
            target: 'Object',
            stat: true,
            forced: !NATIVE_ARRAY_BUFFER_VIEWS
          }, {
            getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
            defineProperty: wrappedDefineProperty
          }); // eslint-disable-next-line max-statements

          module.exports = function (TYPE, BYTES, wrapper, CLAMPED) {
            var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
            var GETTER = 'get' + TYPE;
            var SETTER = 'set' + TYPE;
            var NativeTypedArrayConstructor = global_1[CONSTRUCTOR_NAME];
            var TypedArrayConstructor = NativeTypedArrayConstructor;
            var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
            var exported = {};

            var getter = function getter(that, index) {
              var data = getInternalState(that);
              return data.view[GETTER](index * BYTES + data.byteOffset, true);
            };

            var setter = function setter(that, index, value) {
              var data = getInternalState(that);
              if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
              data.view[SETTER](index * BYTES + data.byteOffset, value, true);
            };

            var addElement = function addElement(that, index) {
              nativeDefineProperty(that, index, {
                get: function get() {
                  return getter(this, index);
                },
                set: function set(value) {
                  return setter(this, index, value);
                },
                enumerable: true
              });
            };

            if (!NATIVE_ARRAY_BUFFER_VIEWS) {
              TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
                anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
                var index = 0;
                var byteOffset = 0;
                var buffer, byteLength, length;

                if (!isObject(data)) {
                  length = toIndex(data);
                  byteLength = length * BYTES;
                  buffer = new ArrayBuffer(byteLength);
                } else if (isArrayBuffer(data)) {
                  buffer = data;
                  byteOffset = toOffset(offset, BYTES);
                  var $len = data.byteLength;

                  if ($length === undefined) {
                    if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                    byteLength = $len - byteOffset;
                    if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                  } else {
                    byteLength = toLength($length) * BYTES;
                    if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
                  }

                  length = byteLength / BYTES;
                } else if (isTypedArray(data)) {
                  return fromList(TypedArrayConstructor, data);
                } else {
                  return typedArrayFrom.call(TypedArrayConstructor, data);
                }

                setInternalState(that, {
                  buffer: buffer,
                  byteOffset: byteOffset,
                  byteLength: byteLength,
                  length: length,
                  view: new DataView(buffer)
                });

                while (index < length) {
                  addElement(that, index++);
                }
              });
              if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
              TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
            } else if (typedArraysConstructorsRequiresWrappers) {
              TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
                anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
                if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
                if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
                if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
                return typedArrayFrom.call(TypedArrayConstructor, data);
              });
              if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
              forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
                if (!(key in TypedArrayConstructor)) hide(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
              });
              TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
            }

            if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
              hide(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
            }

            if (TYPED_ARRAY_TAG) hide(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
            exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
            _export({
              global: true,
              forced: TypedArrayConstructor != NativeTypedArrayConstructor,
              sham: !NATIVE_ARRAY_BUFFER_VIEWS
            }, exported);

            if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
              hide(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
            }

            if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
              hide(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
            }

            setSpecies(CONSTRUCTOR_NAME);
          };
        } else module.exports = function () {
          /* empty */
        };
      });

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Int8', 1, function (init) {
        return function Int8Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Uint8', 1, function (init) {
        return function Uint8Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Uint8', 1, function (init) {
        return function Uint8ClampedArray(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      }, true);

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Int16', 2, function (init) {
        return function Int16Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Uint16', 2, function (init) {
        return function Uint16Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Int32', 4, function (init) {
        return function Int32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Uint32', 4, function (init) {
        return function Uint32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Float32', 4, function (init) {
        return function Float32Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      // https://tc39.github.io/ecma262/#sec-typedarray-objects

      typedArrayConstructor('Float64', 8, function (init) {
        return function Float64Array(data, byteOffset, length) {
          return init(this, data, byteOffset, length);
        };
      });

      // https://tc39.github.io/ecma262/#sec-%typedarray%.from


      arrayBufferViewCore.exportStatic('from', typedArrayFrom, typedArraysConstructorsRequiresWrappers);

      var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor; // `%TypedArray%.of` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.of

      arrayBufferViewCore.exportStatic('of', function of()
      /* ...items */
      {
        var index = 0;
        var length = arguments.length;
        var result = new (aTypedArrayConstructor$2(this))(length);

        while (length > index) {
          result[index] = arguments[index++];
        }

        return result;
      }, typedArraysConstructorsRequiresWrappers);

      var aTypedArray$1 = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.copyWithin` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.copywithin

      arrayBufferViewCore.exportProto('copyWithin', function copyWithin(target, start
      /* , end */
      ) {
        return arrayCopyWithin.call(aTypedArray$1(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      });

      var $every$1 = arrayIteration.every;
      var aTypedArray$2 = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.every` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.every

      arrayBufferViewCore.exportProto('every', function every(callbackfn
      /* , thisArg */
      ) {
        return $every$1(aTypedArray$2(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      });

      var aTypedArray$3 = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.fill` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
      // eslint-disable-next-line no-unused-vars

      arrayBufferViewCore.exportProto('fill', function fill(value
      /* , start, end */
      ) {
        return arrayFill.apply(aTypedArray$3(this), arguments);
      });

      var $filter$1 = arrayIteration.filter;
      var aTypedArray$4 = arrayBufferViewCore.aTypedArray;
      var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor; // `%TypedArray%.prototype.filter` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.filter

      arrayBufferViewCore.exportProto('filter', function filter(callbackfn
      /* , thisArg */
      ) {
        var list = $filter$1(aTypedArray$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var C = speciesConstructor(this, this.constructor);
        var index = 0;
        var length = list.length;
        var result = new (aTypedArrayConstructor$3(C))(length);

        while (length > index) {
          result[index] = list[index++];
        }

        return result;
      });

      var $find$1 = arrayIteration.find;
      var aTypedArray$5 = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.find` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.find

      arrayBufferViewCore.exportProto('find', function find(predicate
      /* , thisArg */
      ) {
        return $find$1(aTypedArray$5(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      });

      var $findIndex$1 = arrayIteration.findIndex;
      var aTypedArray$6 = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.findIndex` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.findindex

      arrayBufferViewCore.exportProto('findIndex', function findIndex(predicate
      /* , thisArg */
      ) {
        return $findIndex$1(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      });

      var $forEach$2 = arrayIteration.forEach;
      var aTypedArray$7 = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.forEach` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.foreach

      arrayBufferViewCore.exportProto('forEach', function forEach(callbackfn
      /* , thisArg */
      ) {
        $forEach$2(aTypedArray$7(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      });

      var $includes$1 = arrayIncludes.includes;
      var aTypedArray$8 = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.includes` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.includes

      arrayBufferViewCore.exportProto('includes', function includes(searchElement
      /* , fromIndex */
      ) {
        return $includes$1(aTypedArray$8(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      });

      var $indexOf$1 = arrayIncludes.indexOf;
      var aTypedArray$9 = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.indexOf` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.indexof

      arrayBufferViewCore.exportProto('indexOf', function indexOf(searchElement
      /* , fromIndex */
      ) {
        return $indexOf$1(aTypedArray$9(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      });

      var ITERATOR$5 = wellKnownSymbol('iterator');
      var Uint8Array$1 = global_1.Uint8Array;
      var arrayValues = es_array_iterator.values;
      var arrayKeys = es_array_iterator.keys;
      var arrayEntries = es_array_iterator.entries;
      var aTypedArray$a = arrayBufferViewCore.aTypedArray;
      var exportProto$1 = arrayBufferViewCore.exportProto;
      var nativeTypedArrayIterator = Uint8Array$1 && Uint8Array$1.prototype[ITERATOR$5];
      var CORRECT_ITER_NAME = !!nativeTypedArrayIterator && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

      var typedArrayValues = function values() {
        return arrayValues.call(aTypedArray$a(this));
      }; // `%TypedArray%.prototype.entries` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.entries


      exportProto$1('entries', function entries() {
        return arrayEntries.call(aTypedArray$a(this));
      }); // `%TypedArray%.prototype.keys` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.keys

      exportProto$1('keys', function keys() {
        return arrayKeys.call(aTypedArray$a(this));
      }); // `%TypedArray%.prototype.values` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.values

      exportProto$1('values', typedArrayValues, !CORRECT_ITER_NAME); // `%TypedArray%.prototype[@@iterator]` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator

      exportProto$1(ITERATOR$5, typedArrayValues, !CORRECT_ITER_NAME);

      var aTypedArray$b = arrayBufferViewCore.aTypedArray;
      var $join = [].join; // `%TypedArray%.prototype.join` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.join
      // eslint-disable-next-line no-unused-vars

      arrayBufferViewCore.exportProto('join', function join(separator) {
        return $join.apply(aTypedArray$b(this), arguments);
      });

      var aTypedArray$c = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.lastIndexOf` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.lastindexof
      // eslint-disable-next-line no-unused-vars

      arrayBufferViewCore.exportProto('lastIndexOf', function lastIndexOf(searchElement
      /* , fromIndex */
      ) {
        return arrayLastIndexOf.apply(aTypedArray$c(this), arguments);
      });

      var $map$1 = arrayIteration.map;
      var aTypedArray$d = arrayBufferViewCore.aTypedArray;
      var aTypedArrayConstructor$4 = arrayBufferViewCore.aTypedArrayConstructor; // `%TypedArray%.prototype.map` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.map

      arrayBufferViewCore.exportProto('map', function map(mapfn
      /* , thisArg */
      ) {
        return $map$1(aTypedArray$d(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
          return new (aTypedArrayConstructor$4(speciesConstructor(O, O.constructor)))(length);
        });
      });

      var $reduce$1 = arrayReduce.left;
      var aTypedArray$e = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.reduce` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduce

      arrayBufferViewCore.exportProto('reduce', function reduce(callbackfn
      /* , initialValue */
      ) {
        return $reduce$1(aTypedArray$e(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
      });

      var $reduceRight$1 = arrayReduce.right;
      var aTypedArray$f = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.reduceRicht` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reduceright

      arrayBufferViewCore.exportProto('reduceRight', function reduceRight(callbackfn
      /* , initialValue */
      ) {
        return $reduceRight$1(aTypedArray$f(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
      });

      var aTypedArray$g = arrayBufferViewCore.aTypedArray;
      var floor$6 = Math.floor; // `%TypedArray%.prototype.reverse` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.reverse

      arrayBufferViewCore.exportProto('reverse', function reverse() {
        var that = this;
        var length = aTypedArray$g(that).length;
        var middle = floor$6(length / 2);
        var index = 0;
        var value;

        while (index < middle) {
          value = that[index];
          that[index++] = that[--length];
          that[length] = value;
        }

        return that;
      });

      var aTypedArray$h = arrayBufferViewCore.aTypedArray;
      var FORCED$f = fails(function () {
        // eslint-disable-next-line no-undef
        new Int8Array(1).set({});
      }); // `%TypedArray%.prototype.set` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.set

      arrayBufferViewCore.exportProto('set', function set(arrayLike
      /* , offset */
      ) {
        aTypedArray$h(this);
        var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
        var length = this.length;
        var src = toObject(arrayLike);
        var len = toLength(src.length);
        var index = 0;
        if (len + offset > length) throw RangeError('Wrong length');

        while (index < len) {
          this[offset + index] = src[index++];
        }
      }, FORCED$f);

      var aTypedArray$i = arrayBufferViewCore.aTypedArray;
      var aTypedArrayConstructor$5 = arrayBufferViewCore.aTypedArrayConstructor;
      var $slice = [].slice;
      var FORCED$g = fails(function () {
        // eslint-disable-next-line no-undef
        new Int8Array(1).slice();
      }); // `%TypedArray%.prototype.slice` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.slice

      arrayBufferViewCore.exportProto('slice', function slice(start, end) {
        var list = $slice.call(aTypedArray$i(this), start, end);
        var C = speciesConstructor(this, this.constructor);
        var index = 0;
        var length = list.length;
        var result = new (aTypedArrayConstructor$5(C))(length);

        while (length > index) {
          result[index] = list[index++];
        }

        return result;
      }, FORCED$g);

      var $some$1 = arrayIteration.some;
      var aTypedArray$j = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.some` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some

      arrayBufferViewCore.exportProto('some', function some(callbackfn
      /* , thisArg */
      ) {
        return $some$1(aTypedArray$j(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      });

      var aTypedArray$k = arrayBufferViewCore.aTypedArray;
      var $sort = [].sort; // `%TypedArray%.prototype.sort` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.sort

      arrayBufferViewCore.exportProto('sort', function sort(comparefn) {
        return $sort.call(aTypedArray$k(this), comparefn);
      });

      var aTypedArray$l = arrayBufferViewCore.aTypedArray; // `%TypedArray%.prototype.subarray` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.subarray

      arrayBufferViewCore.exportProto('subarray', function subarray(begin, end) {
        var O = aTypedArray$l(this);
        var length = O.length;
        var beginIndex = toAbsoluteIndex(begin, length);
        return new (speciesConstructor(O, O.constructor))(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
      });

      var Int8Array$3 = global_1.Int8Array;
      var aTypedArray$m = arrayBufferViewCore.aTypedArray;
      var $toLocaleString = [].toLocaleString;
      var $slice$1 = [].slice; // iOS Safari 6.x fails here

      var TO_LOCALE_STRING_BUG = !!Int8Array$3 && fails(function () {
        $toLocaleString.call(new Int8Array$3(1));
      });
      var FORCED$h = fails(function () {
        return [1, 2].toLocaleString() != new Int8Array$3([1, 2]).toLocaleString();
      }) || !fails(function () {
        Int8Array$3.prototype.toLocaleString.call([1, 2]);
      }); // `%TypedArray%.prototype.toLocaleString` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tolocalestring

      arrayBufferViewCore.exportProto('toLocaleString', function toLocaleString() {
        return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice$1.call(aTypedArray$m(this)) : aTypedArray$m(this), arguments);
      }, FORCED$h);

      var Uint8Array$2 = global_1.Uint8Array;
      var Uint8ArrayPrototype = Uint8Array$2 && Uint8Array$2.prototype;
      var arrayToString = [].toString;
      var arrayJoin = [].join;

      if (fails(function () {
        arrayToString.call({});
      })) {
        arrayToString = function toString() {
          return arrayJoin.call(this);
        };
      } // `%TypedArray%.prototype.toString` method
      // https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.tostring


      arrayBufferViewCore.exportProto('toString', arrayToString, (Uint8ArrayPrototype || {}).toString != arrayToString);

      var nativeApply = getBuiltIn('Reflect', 'apply');
      var functionApply = Function.apply; // MS Edge argumentsList argument is optional

      var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
        nativeApply(function () {
          /* empty */
        });
      }); // `Reflect.apply` method
      // https://tc39.github.io/ecma262/#sec-reflect.apply

      _export({
        target: 'Reflect',
        stat: true,
        forced: OPTIONAL_ARGUMENTS_LIST
      }, {
        apply: function apply(target, thisArgument, argumentsList) {
          aFunction$1(target);
          anObject(argumentsList);
          return nativeApply ? nativeApply(target, thisArgument, argumentsList) : functionApply.call(target, thisArgument, argumentsList);
        }
      });

      var nativeConstruct = getBuiltIn('Reflect', 'construct'); // `Reflect.construct` method
      // https://tc39.github.io/ecma262/#sec-reflect.construct
      // MS Edge supports only 2 arguments and argumentsList argument is optional
      // FF Nightly sets third argument as `new.target`, but does not create `this` from it

      var NEW_TARGET_BUG = fails(function () {
        function F() {
          /* empty */
        }

        return !(nativeConstruct(function () {
          /* empty */
        }, [], F) instanceof F);
      });
      var ARGS_BUG = !fails(function () {
        nativeConstruct(function () {
          /* empty */
        });
      });
      var FORCED$i = NEW_TARGET_BUG || ARGS_BUG;
      _export({
        target: 'Reflect',
        stat: true,
        forced: FORCED$i,
        sham: FORCED$i
      }, {
        construct: function construct(Target, args
        /* , newTarget */
        ) {
          aFunction$1(Target);
          anObject(args);
          var newTarget = arguments.length < 3 ? Target : aFunction$1(arguments[2]);
          if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

          if (Target == newTarget) {
            // w/o altered newTarget, optimization for 0-4 arguments
            switch (args.length) {
              case 0:
                return new Target();

              case 1:
                return new Target(args[0]);

              case 2:
                return new Target(args[0], args[1]);

              case 3:
                return new Target(args[0], args[1], args[2]);

              case 4:
                return new Target(args[0], args[1], args[2], args[3]);
            } // w/o altered newTarget, lot of arguments case


            var $args = [null];
            $args.push.apply($args, args);
            return new (functionBind.apply(Target, $args))();
          } // with altered newTarget, not support built-in constructors


          var proto = newTarget.prototype;
          var instance = objectCreate(isObject(proto) ? proto : Object.prototype);
          var result = Function.apply.call(Target, instance, args);
          return isObject(result) ? result : instance;
        }
      });

      var ERROR_INSTEAD_OF_FALSE = fails(function () {
        // eslint-disable-next-line no-undef
        Reflect.defineProperty(objectDefineProperty.f({}, 1, {
          value: 1
        }), 1, {
          value: 2
        });
      }); // `Reflect.defineProperty` method
      // https://tc39.github.io/ecma262/#sec-reflect.defineproperty

      _export({
        target: 'Reflect',
        stat: true,
        forced: ERROR_INSTEAD_OF_FALSE,
        sham: !descriptors
      }, {
        defineProperty: function defineProperty(target, propertyKey, attributes) {
          anObject(target);
          var key = toPrimitive(propertyKey, true);
          anObject(attributes);

          try {
            objectDefineProperty.f(target, key, attributes);
            return true;
          } catch (error) {
            return false;
          }
        }
      });

      var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f; // `Reflect.deleteProperty` method
      // https://tc39.github.io/ecma262/#sec-reflect.deleteproperty

      _export({
        target: 'Reflect',
        stat: true
      }, {
        deleteProperty: function deleteProperty(target, propertyKey) {
          var descriptor = getOwnPropertyDescriptor$6(anObject(target), propertyKey);
          return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
        }
      });

      // https://tc39.github.io/ecma262/#sec-reflect.get

      function get$1(target, propertyKey
      /* , receiver */
      ) {
        var receiver = arguments.length < 3 ? target : arguments[2];
        var descriptor, prototype;
        if (anObject(target) === receiver) return target[propertyKey];
        if (descriptor = objectGetOwnPropertyDescriptor.f(target, propertyKey)) return has(descriptor, 'value') ? descriptor.value : descriptor.get === undefined ? undefined : descriptor.get.call(receiver);
        if (isObject(prototype = objectGetPrototypeOf(target))) return get$1(prototype, propertyKey, receiver);
      }

      _export({
        target: 'Reflect',
        stat: true
      }, {
        get: get$1
      });

      // https://tc39.github.io/ecma262/#sec-reflect.getownpropertydescriptor

      _export({
        target: 'Reflect',
        stat: true,
        sham: !descriptors
      }, {
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
          return objectGetOwnPropertyDescriptor.f(anObject(target), propertyKey);
        }
      });

      // https://tc39.github.io/ecma262/#sec-reflect.getprototypeof

      _export({
        target: 'Reflect',
        stat: true,
        sham: !correctPrototypeGetter
      }, {
        getPrototypeOf: function getPrototypeOf(target) {
          return objectGetPrototypeOf(anObject(target));
        }
      });

      // https://tc39.github.io/ecma262/#sec-reflect.has

      _export({
        target: 'Reflect',
        stat: true
      }, {
        has: function has(target, propertyKey) {
          return propertyKey in target;
        }
      });

      var objectIsExtensible = Object.isExtensible; // `Reflect.isExtensible` method
      // https://tc39.github.io/ecma262/#sec-reflect.isextensible

      _export({
        target: 'Reflect',
        stat: true
      }, {
        isExtensible: function isExtensible(target) {
          anObject(target);
          return objectIsExtensible ? objectIsExtensible(target) : true;
        }
      });

      // https://tc39.github.io/ecma262/#sec-reflect.ownkeys

      _export({
        target: 'Reflect',
        stat: true
      }, {
        ownKeys: ownKeys
      });

      // https://tc39.github.io/ecma262/#sec-reflect.preventextensions

      _export({
        target: 'Reflect',
        stat: true,
        sham: !freezing
      }, {
        preventExtensions: function preventExtensions(target) {
          anObject(target);

          try {
            var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
            if (objectPreventExtensions) objectPreventExtensions(target);
            return true;
          } catch (error) {
            return false;
          }
        }
      });

      // https://tc39.github.io/ecma262/#sec-reflect.set

      function set$2(target, propertyKey, V
      /* , receiver */
      ) {
        var receiver = arguments.length < 4 ? target : arguments[3];
        var ownDescriptor = objectGetOwnPropertyDescriptor.f(anObject(target), propertyKey);
        var existingDescriptor, prototype;

        if (!ownDescriptor) {
          if (isObject(prototype = objectGetPrototypeOf(target))) {
            return set$2(prototype, propertyKey, V, receiver);
          }

          ownDescriptor = createPropertyDescriptor(0);
        }

        if (has(ownDescriptor, 'value')) {
          if (ownDescriptor.writable === false || !isObject(receiver)) return false;

          if (existingDescriptor = objectGetOwnPropertyDescriptor.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
            existingDescriptor.value = V;
            objectDefineProperty.f(receiver, propertyKey, existingDescriptor);
          } else objectDefineProperty.f(receiver, propertyKey, createPropertyDescriptor(0, V));

          return true;
        }

        return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
      }

      _export({
        target: 'Reflect',
        stat: true
      }, {
        set: set$2
      });

      // https://tc39.github.io/ecma262/#sec-reflect.setprototypeof

      if (objectSetPrototypeOf) _export({
        target: 'Reflect',
        stat: true
      }, {
        setPrototypeOf: function setPrototypeOf(target, proto) {
          anObject(target);
          aPossiblePrototype(proto);

          try {
            objectSetPrototypeOf(target, proto);
            return true;
          } catch (error) {
            return false;
          }
        }
      });

      // iterable DOM collections
      // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
      var domIterables = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };

      for (var COLLECTION_NAME in domIterables) {
        var Collection = global_1[COLLECTION_NAME];
        var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

        if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
          hide(CollectionPrototype, 'forEach', arrayForEach);
        } catch (error) {
          CollectionPrototype.forEach = arrayForEach;
        }
      }

      var ITERATOR$6 = wellKnownSymbol('iterator');
      var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
      var ArrayValues = es_array_iterator.values;

      for (var COLLECTION_NAME$1 in domIterables) {
        var Collection$1 = global_1[COLLECTION_NAME$1];
        var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;

        if (CollectionPrototype$1) {
          // some Chrome versions have non-configurable methods on DOMTokenList
          if (CollectionPrototype$1[ITERATOR$6] !== ArrayValues) try {
            hide(CollectionPrototype$1, ITERATOR$6, ArrayValues);
          } catch (error) {
            CollectionPrototype$1[ITERATOR$6] = ArrayValues;
          }
          if (!CollectionPrototype$1[TO_STRING_TAG$4]) hide(CollectionPrototype$1, TO_STRING_TAG$4, COLLECTION_NAME$1);
          if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
              hide(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
            } catch (error) {
              CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
            }
          }
        }
      }

      var FORCED$j = !global_1.setImmediate || !global_1.clearImmediate; // http://w3c.github.io/setImmediate/

      _export({
        global: true,
        bind: true,
        enumerable: true,
        forced: FORCED$j
      }, {
        // `setImmediate` method
        // http://w3c.github.io/setImmediate/#si-setImmediate
        setImmediate: task.set,
        // `clearImmediate` method
        // http://w3c.github.io/setImmediate/#si-clearImmediate
        clearImmediate: task.clear
      });

      var process$3 = global_1.process;
      var isNode = classofRaw(process$3) == 'process'; // `queueMicrotask` method
      // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask

      _export({
        global: true,
        enumerable: true,
        noTargetGet: true
      }, {
        queueMicrotask: function queueMicrotask(fn) {
          var domain = isNode && process$3.domain;
          microtask(domain ? domain.bind(fn) : fn);
        }
      });

      var slice$1 = [].slice;
      var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

      var wrap$1 = function wrap(scheduler) {
        return function (handler, timeout
        /* , ...arguments */
        ) {
          var boundArgs = arguments.length > 2;
          var args = boundArgs ? slice$1.call(arguments, 2) : undefined;
          return scheduler(boundArgs ? function () {
            // eslint-disable-next-line no-new-func
            (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
          } : handler, timeout);
        };
      }; // ie9- setTimeout & setInterval additional parameters fix
      // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


      _export({
        global: true,
        bind: true,
        forced: MSIE
      }, {
        // `setTimeout` method
        // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
        setTimeout: wrap$1(global_1.setTimeout),
        // `setInterval` method
        // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
        setInterval: wrap$1(global_1.setInterval)
      });

      var ITERATOR$7 = wellKnownSymbol('iterator');
      var nativeUrl = !fails(function () {
        var url = new URL('b?e=1', 'http://a');
        var searchParams = url.searchParams;
        url.pathname = 'c%20d';
        return isPure && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?e=1' || searchParams.get('e') !== '1' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$7] // throws in Edge
        || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
        || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
        || new URL('http://a#б').hash !== '#%D0%B1';
      });

      var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

      var base = 36;
      var tMin = 1;
      var tMax = 26;
      var skew = 38;
      var damp = 700;
      var initialBias = 72;
      var initialN = 128; // 0x80

      var delimiter = '-'; // '\x2D'

      var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

      var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

      var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
      var baseMinusTMin = base - tMin;
      var floor$7 = Math.floor;
      var stringFromCharCode = String.fromCharCode;
      /**
       * Creates an array containing the numeric code points of each Unicode
       * character in the string. While JavaScript uses UCS-2 internally,
       * this function will convert a pair of surrogate halves (each of which
       * UCS-2 exposes as separate characters) into a single code point,
       * matching UTF-16.
       */

      var ucs2decode = function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;

        while (counter < length) {
          var value = string.charCodeAt(counter++);

          if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
            // It's a high surrogate, and there is a next character.
            var extra = string.charCodeAt(counter++);

            if ((extra & 0xFC00) == 0xDC00) {
              // Low surrogate.
              output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
            } else {
              // It's an unmatched surrogate; only append this code unit, in case the
              // next code unit is the high surrogate of a surrogate pair.
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }

        return output;
      };
      /**
       * Converts a digit/integer into a basic code point.
       */


      var digitToBasic = function digitToBasic(digit) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26);
      };
      /**
       * Bias adaptation function as per section 3.4 of RFC 3492.
       * https://tools.ietf.org/html/rfc3492#section-3.4
       */


      var adapt = function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor$7(delta / damp) : delta >> 1;
        delta += floor$7(delta / numPoints);

        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor$7(delta / baseMinusTMin);
        }

        return floor$7(k + (baseMinusTMin + 1) * delta / (delta + skew));
      };
      /**
       * Converts a string of Unicode symbols (e.g. a domain name label) to a
       * Punycode string of ASCII-only symbols.
       */
      // eslint-disable-next-line  max-statements


      var encode = function encode(input) {
        var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

        input = ucs2decode(input); // Cache the length.

        var inputLength = input.length; // Initialize the state.

        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        var i, currentValue; // Handle the basic code points.

        for (i = 0; i < input.length; i++) {
          currentValue = input[i];

          if (currentValue < 0x80) {
            output.push(stringFromCharCode(currentValue));
          }
        }

        var basicLength = output.length; // number of basic code points.

        var handledCPCount = basicLength; // number of code points that have been handled;
        // Finish the basic string with a delimiter unless it's empty.

        if (basicLength) {
          output.push(delimiter);
        } // Main encoding loop:


        while (handledCPCount < inputLength) {
          // All non-basic code points < n have been handled already. Find the next larger one:
          var m = maxInt;

          for (i = 0; i < input.length; i++) {
            currentValue = input[i];

            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


          var handledCPCountPlusOne = handledCPCount + 1;

          if (m - n > floor$7((maxInt - delta) / handledCPCountPlusOne)) {
            throw RangeError(OVERFLOW_ERROR);
          }

          delta += (m - n) * handledCPCountPlusOne;
          n = m;

          for (i = 0; i < input.length; i++) {
            currentValue = input[i];

            if (currentValue < n && ++delta > maxInt) {
              throw RangeError(OVERFLOW_ERROR);
            }

            if (currentValue == n) {
              // Represent delta as a generalized variable-length integer.
              var q = delta;

              for (var k = base;;
              /* no condition */
              k += base) {
                var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) break;
                var qMinusT = q - t;
                var baseMinusT = base - t;
                output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
                q = floor$7(qMinusT / baseMinusT);
              }

              output.push(stringFromCharCode(digitToBasic(q)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }

          ++delta;
          ++n;
        }

        return output.join('');
      };

      var punycodeToAscii = function punycodeToAscii(input) {
        var encoded = [];
        var labels = input.toLowerCase().replace(regexSeparators, ".").split('.');
        var i, label;

        for (i = 0; i < labels.length; i++) {
          label = labels[i];
          encoded.push(regexNonASCII.test(label) ? 'xn--' + encode(label) : label);
        }

        return encoded.join('.');
      };

      var getIterator = function getIterator(it) {
        var iteratorMethod = getIteratorMethod(it);

        if (typeof iteratorMethod != 'function') {
          throw TypeError(String(it) + ' is not iterable');
        }

        return anObject(iteratorMethod.call(it));
      };

      var ITERATOR$8 = wellKnownSymbol('iterator');
      var URL_SEARCH_PARAMS = 'URLSearchParams';
      var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
      var setInternalState$7 = internalState.set;
      var getInternalParamsState = internalState.getterFor(URL_SEARCH_PARAMS);
      var getInternalIteratorState = internalState.getterFor(URL_SEARCH_PARAMS_ITERATOR);
      var plus = /\+/g;
      var sequences = Array(4);

      var percentSequence = function percentSequence(bytes) {
        return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
      };

      var percentDecode = function percentDecode(sequence) {
        try {
          return decodeURIComponent(sequence);
        } catch (error) {
          return sequence;
        }
      };

      var deserialize = function deserialize(it) {
        var result = it.replace(plus, ' ');
        var bytes = 4;

        try {
          return decodeURIComponent(result);
        } catch (error) {
          while (bytes) {
            result = result.replace(percentSequence(bytes--), percentDecode);
          }

          return result;
        }
      };

      var find$1 = /[!'()~]|%20/g;
      var replace = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
      };

      var replacer = function replacer(match) {
        return replace[match];
      };

      var serialize = function serialize(it) {
        return encodeURIComponent(it).replace(find$1, replacer);
      };

      var parseSearchParams = function parseSearchParams(result, query) {
        if (query) {
          var attributes = query.split('&');
          var index = 0;
          var attribute, entry;

          while (index < attributes.length) {
            attribute = attributes[index++];

            if (attribute.length) {
              entry = attribute.split('=');
              result.push({
                key: deserialize(entry.shift()),
                value: deserialize(entry.join('='))
              });
            }
          }
        }
      };

      var updateSearchParams = function updateSearchParams(query) {
        this.entries.length = 0;
        parseSearchParams(this.entries, query);
      };

      var validateArgumentsLength = function validateArgumentsLength(passed, required) {
        if (passed < required) throw TypeError('Not enough arguments');
      };

      var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
        setInternalState$7(this, {
          type: URL_SEARCH_PARAMS_ITERATOR,
          iterator: getIterator(getInternalParamsState(params).entries),
          kind: kind
        });
      }, 'Iterator', function next() {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var step = state.iterator.next();
        var entry = step.value;

        if (!step.done) {
          step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
        }

        return step;
      }); // `URLSearchParams` constructor
      // https://url.spec.whatwg.org/#interface-urlsearchparams

      var URLSearchParamsConstructor = function URLSearchParams()
      /* init */
      {
        anInstance(this, URLSearchParamsConstructor, URL_SEARCH_PARAMS);
        var init = arguments.length > 0 ? arguments[0] : undefined;
        var that = this;
        var entries = [];
        var iteratorMethod, iterator, step, entryIterator, first, second, key;
        setInternalState$7(that, {
          type: URL_SEARCH_PARAMS,
          entries: entries,
          updateURL: function updateURL() {
            /* empty */
          },
          updateSearchParams: updateSearchParams
        });

        if (init !== undefined) {
          if (isObject(init)) {
            iteratorMethod = getIteratorMethod(init);

            if (typeof iteratorMethod === 'function') {
              iterator = iteratorMethod.call(init);

              while (!(step = iterator.next()).done) {
                entryIterator = getIterator(anObject(step.value));
                if ((first = entryIterator.next()).done || (second = entryIterator.next()).done || !entryIterator.next().done) throw TypeError('Expected sequence with length 2');
                entries.push({
                  key: first.value + '',
                  value: second.value + ''
                });
              }
            } else for (key in init) {
              if (has(init, key)) entries.push({
                key: key,
                value: init[key] + ''
              });
            }
          } else {
            parseSearchParams(entries, typeof init === 'string' ? init.charAt(0) === '?' ? init.slice(1) : init : init + '');
          }
        }
      };

      var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
      redefineAll(URLSearchParamsPrototype, {
        // `URLSearchParams.prototype.appent` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-append
        append: function append(name, value) {
          validateArgumentsLength(arguments.length, 2);
          var state = getInternalParamsState(this);
          state.entries.push({
            key: name + '',
            value: value + ''
          });
          state.updateURL();
        },
        // `URLSearchParams.prototype.delete` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
        'delete': function _delete(name) {
          validateArgumentsLength(arguments.length, 1);
          var state = getInternalParamsState(this);
          var entries = state.entries;
          var key = name + '';
          var index = 0;

          while (index < entries.length) {
            if (entries[index].key === key) entries.splice(index, 1);else index++;
          }

          state.updateURL();
        },
        // `URLSearchParams.prototype.get` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-get
        get: function get(name) {
          validateArgumentsLength(arguments.length, 1);
          var entries = getInternalParamsState(this).entries;
          var key = name + '';
          var index = 0;

          for (; index < entries.length; index++) {
            if (entries[index].key === key) return entries[index].value;
          }

          return null;
        },
        // `URLSearchParams.prototype.getAll` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
        getAll: function getAll(name) {
          validateArgumentsLength(arguments.length, 1);
          var entries = getInternalParamsState(this).entries;
          var key = name + '';
          var result = [];
          var index = 0;

          for (; index < entries.length; index++) {
            if (entries[index].key === key) result.push(entries[index].value);
          }

          return result;
        },
        // `URLSearchParams.prototype.has` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-has
        has: function has(name) {
          validateArgumentsLength(arguments.length, 1);
          var entries = getInternalParamsState(this).entries;
          var key = name + '';
          var index = 0;

          while (index < entries.length) {
            if (entries[index++].key === key) return true;
          }

          return false;
        },
        // `URLSearchParams.prototype.set` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-set
        set: function set(name, value) {
          validateArgumentsLength(arguments.length, 1);
          var state = getInternalParamsState(this);
          var entries = state.entries;
          var found = false;
          var key = name + '';
          var val = value + '';
          var index = 0;
          var entry;

          for (; index < entries.length; index++) {
            entry = entries[index];

            if (entry.key === key) {
              if (found) entries.splice(index--, 1);else {
                found = true;
                entry.value = val;
              }
            }
          }

          if (!found) entries.push({
            key: key,
            value: val
          });
          state.updateURL();
        },
        // `URLSearchParams.prototype.sort` method
        // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
        sort: function sort() {
          var state = getInternalParamsState(this);
          var entries = state.entries; // Array#sort is not stable in some engines

          var slice = entries.slice();
          var entry, entriesIndex, sliceIndex;
          entries.length = 0;

          for (sliceIndex = 0; sliceIndex < slice.length; sliceIndex++) {
            entry = slice[sliceIndex];

            for (entriesIndex = 0; entriesIndex < sliceIndex; entriesIndex++) {
              if (entries[entriesIndex].key > entry.key) {
                entries.splice(entriesIndex, 0, entry);
                break;
              }
            }

            if (entriesIndex === sliceIndex) entries.push(entry);
          }

          state.updateURL();
        },
        // `URLSearchParams.prototype.forEach` method
        forEach: function forEach(callback
        /* , thisArg */
        ) {
          var entries = getInternalParamsState(this).entries;
          var boundFunction = bindContext(callback, arguments.length > 1 ? arguments[1] : undefined, 3);
          var index = 0;
          var entry;

          while (index < entries.length) {
            entry = entries[index++];
            boundFunction(entry.value, entry.key, this);
          }
        },
        // `URLSearchParams.prototype.keys` method
        keys: function keys() {
          return new URLSearchParamsIterator(this, 'keys');
        },
        // `URLSearchParams.prototype.values` method
        values: function values() {
          return new URLSearchParamsIterator(this, 'values');
        },
        // `URLSearchParams.prototype.entries` method
        entries: function entries() {
          return new URLSearchParamsIterator(this, 'entries');
        }
      }, {
        enumerable: true
      }); // `URLSearchParams.prototype[@@iterator]` method

      redefine(URLSearchParamsPrototype, ITERATOR$8, URLSearchParamsPrototype.entries); // `URLSearchParams.prototype.toString` method
      // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

      redefine(URLSearchParamsPrototype, 'toString', function toString() {
        var entries = getInternalParamsState(this).entries;
        var result = [];
        var index = 0;
        var entry;

        while (index < entries.length) {
          entry = entries[index++];
          result.push(serialize(entry.key) + '=' + serialize(entry.value));
        }

        return result.join('&');
      }, {
        enumerable: true
      });
      setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
      _export({
        global: true,
        forced: !nativeUrl
      }, {
        URLSearchParams: URLSearchParamsConstructor
      });
      var web_urlSearchParams = {
        URLSearchParams: URLSearchParamsConstructor,
        getState: getInternalParamsState
      };

      var codeAt$1 = stringMultibyte.codeAt;
      var NativeURL = global_1.URL;
      var URLSearchParams$1 = web_urlSearchParams.URLSearchParams;
      var getInternalSearchParamsState = web_urlSearchParams.getState;
      var setInternalState$8 = internalState.set;
      var getInternalURLState = internalState.getterFor('URL');
      var floor$8 = Math.floor;
      var pow$3 = Math.pow;
      var INVALID_AUTHORITY = 'Invalid authority';
      var INVALID_SCHEME = 'Invalid scheme';
      var INVALID_HOST = 'Invalid host';
      var INVALID_PORT = 'Invalid port';
      var ALPHA = /[A-Za-z]/;
      var ALPHANUMERIC = /[\d+\-.A-Za-z]/;
      var DIGIT = /\d/;
      var HEX_START = /^(0x|0X)/;
      var OCT = /^[0-7]+$/;
      var DEC = /^\d+$/;
      var HEX = /^[\dA-Fa-f]+$/; // eslint-disable-next-line no-control-regex

      var FORBIDDEN_HOST_CODE_POINT = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/; // eslint-disable-next-line no-control-regex

      var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/; // eslint-disable-next-line no-control-regex

      var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g; // eslint-disable-next-line no-control-regex

      var TAB_AND_NEW_LINE = /[\u0009\u000A\u000D]/g;
      var EOF;

      var parseHost = function parseHost(url, input) {
        var result, codePoints, index;

        if (input.charAt(0) == '[') {
          if (input.charAt(input.length - 1) != ']') return INVALID_HOST;
          result = parseIPv6(input.slice(1, -1));
          if (!result) return INVALID_HOST;
          url.host = result; // opaque host
        } else if (!isSpecial(url)) {
          if (FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT.test(input)) return INVALID_HOST;
          result = '';
          codePoints = arrayFrom(input);

          for (index = 0; index < codePoints.length; index++) {
            result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
          }

          url.host = result;
        } else {
          input = punycodeToAscii(input);
          if (FORBIDDEN_HOST_CODE_POINT.test(input)) return INVALID_HOST;
          result = parseIPv4(input);
          if (result === null) return INVALID_HOST;
          url.host = result;
        }
      };

      var parseIPv4 = function parseIPv4(input) {
        var parts = input.split('.');
        var partsLength, numbers, index, part, radix, number, ipv4;

        if (parts.length && parts[parts.length - 1] == '') {
          parts.pop();
        }

        partsLength = parts.length;
        if (partsLength > 4) return input;
        numbers = [];

        for (index = 0; index < partsLength; index++) {
          part = parts[index];
          if (part == '') return input;
          radix = 10;

          if (part.length > 1 && part.charAt(0) == '0') {
            radix = HEX_START.test(part) ? 16 : 8;
            part = part.slice(radix == 8 ? 1 : 2);
          }

          if (part === '') {
            number = 0;
          } else {
            if (!(radix == 10 ? DEC : radix == 8 ? OCT : HEX).test(part)) return input;
            number = parseInt(part, radix);
          }

          numbers.push(number);
        }

        for (index = 0; index < partsLength; index++) {
          number = numbers[index];

          if (index == partsLength - 1) {
            if (number >= pow$3(256, 5 - partsLength)) return null;
          } else if (number > 255) return null;
        }

        ipv4 = numbers.pop();

        for (index = 0; index < numbers.length; index++) {
          ipv4 += numbers[index] * pow$3(256, 3 - index);
        }

        return ipv4;
      }; // eslint-disable-next-line max-statements


      var parseIPv6 = function parseIPv6(input) {
        var address = [0, 0, 0, 0, 0, 0, 0, 0];
        var pieceIndex = 0;
        var compress = null;
        var pointer = 0;
        var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

        var _char = function _char() {
          return input.charAt(pointer);
        };

        if (_char() == ':') {
          if (input.charAt(1) != ':') return;
          pointer += 2;
          pieceIndex++;
          compress = pieceIndex;
        }

        while (_char()) {
          if (pieceIndex == 8) return;

          if (_char() == ':') {
            if (compress !== null) return;
            pointer++;
            pieceIndex++;
            compress = pieceIndex;
            continue;
          }

          value = length = 0;

          while (length < 4 && HEX.test(_char())) {
            value = value * 16 + parseInt(_char(), 16);
            pointer++;
            length++;
          }

          if (_char() == '.') {
            if (length == 0) return;
            pointer -= length;
            if (pieceIndex > 6) return;
            numbersSeen = 0;

            while (_char()) {
              ipv4Piece = null;

              if (numbersSeen > 0) {
                if (_char() == '.' && numbersSeen < 4) pointer++;else return;
              }

              if (!DIGIT.test(_char())) return;

              while (DIGIT.test(_char())) {
                number = parseInt(_char(), 10);
                if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
                if (ipv4Piece > 255) return;
                pointer++;
              }

              address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
              numbersSeen++;
              if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
            }

            if (numbersSeen != 4) return;
            break;
          } else if (_char() == ':') {
            pointer++;
            if (!_char()) return;
          } else if (_char()) return;

          address[pieceIndex++] = value;
        }

        if (compress !== null) {
          swaps = pieceIndex - compress;
          pieceIndex = 7;

          while (pieceIndex != 0 && swaps > 0) {
            swap = address[pieceIndex];
            address[pieceIndex--] = address[compress + swaps - 1];
            address[compress + --swaps] = swap;
          }
        } else if (pieceIndex != 8) return;

        return address;
      };

      var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
        var maxIndex = null;
        var maxLength = 1;
        var currStart = null;
        var currLength = 0;
        var index = 0;

        for (; index < 8; index++) {
          if (ipv6[index] !== 0) {
            if (currLength > maxLength) {
              maxIndex = currStart;
              maxLength = currLength;
            }

            currStart = null;
            currLength = 0;
          } else {
            if (currStart === null) currStart = index;
            ++currLength;
          }
        }

        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }

        return maxIndex;
      };

      var serializeHost = function serializeHost(host) {
        var result, index, compress, ignore0; // ipv4

        if (typeof host == 'number') {
          result = [];

          for (index = 0; index < 4; index++) {
            result.unshift(host % 256);
            host = floor$8(host / 256);
          }

          return result.join('.'); // ipv6
        } else if (_typeof(host) == 'object') {
          result = '';
          compress = findLongestZeroSequence(host);

          for (index = 0; index < 8; index++) {
            if (ignore0 && host[index] === 0) continue;
            if (ignore0) ignore0 = false;

            if (compress === index) {
              result += index ? ':' : '::';
              ignore0 = true;
            } else {
              result += host[index].toString(16);
              if (index < 7) result += ':';
            }
          }

          return '[' + result + ']';
        }

        return host;
      };

      var C0ControlPercentEncodeSet = {};
      var fragmentPercentEncodeSet = objectAssign({}, C0ControlPercentEncodeSet, {
        ' ': 1,
        '"': 1,
        '<': 1,
        '>': 1,
        '`': 1
      });
      var pathPercentEncodeSet = objectAssign({}, fragmentPercentEncodeSet, {
        '#': 1,
        '?': 1,
        '{': 1,
        '}': 1
      });
      var userinfoPercentEncodeSet = objectAssign({}, pathPercentEncodeSet, {
        '/': 1,
        ':': 1,
        ';': 1,
        '=': 1,
        '@': 1,
        '[': 1,
        '\\': 1,
        ']': 1,
        '^': 1,
        '|': 1
      });

      var percentEncode = function percentEncode(_char2, set) {
        var code = codeAt$1(_char2, 0);
        return code > 0x20 && code < 0x7F && !has(set, _char2) ? _char2 : encodeURIComponent(_char2);
      };

      var specialSchemes = {
        ftp: 21,
        file: null,
        gopher: 70,
        http: 80,
        https: 443,
        ws: 80,
        wss: 443
      };

      var isSpecial = function isSpecial(url) {
        return has(specialSchemes, url.scheme);
      };

      var includesCredentials = function includesCredentials(url) {
        return url.username != '' || url.password != '';
      };

      var cannotHaveUsernamePasswordPort = function cannotHaveUsernamePasswordPort(url) {
        return !url.host || url.cannotBeABaseURL || url.scheme == 'file';
      };

      var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
        var second;
        return string.length == 2 && ALPHA.test(string.charAt(0)) && ((second = string.charAt(1)) == ':' || !normalized && second == '|');
      };

      var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
        var third;
        return string.length > 1 && isWindowsDriveLetter(string.slice(0, 2)) && (string.length == 2 || (third = string.charAt(2)) === '/' || third === '\\' || third === '?' || third === '#');
      };

      var shortenURLsPath = function shortenURLsPath(url) {
        var path = url.path;
        var pathSize = path.length;

        if (pathSize && (url.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
          path.pop();
        }
      };

      var isSingleDot = function isSingleDot(segment) {
        return segment === '.' || segment.toLowerCase() === '%2e';
      };

      var isDoubleDot = function isDoubleDot(segment) {
        segment = segment.toLowerCase();
        return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
      }; // States:


      var SCHEME_START = {};
      var SCHEME = {};
      var NO_SCHEME = {};
      var SPECIAL_RELATIVE_OR_AUTHORITY = {};
      var PATH_OR_AUTHORITY = {};
      var RELATIVE = {};
      var RELATIVE_SLASH = {};
      var SPECIAL_AUTHORITY_SLASHES = {};
      var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
      var AUTHORITY = {};
      var HOST = {};
      var HOSTNAME = {};
      var PORT = {};
      var FILE = {};
      var FILE_SLASH = {};
      var FILE_HOST = {};
      var PATH_START = {};
      var PATH = {};
      var CANNOT_BE_A_BASE_URL_PATH = {};
      var QUERY = {};
      var FRAGMENT = {}; // eslint-disable-next-line max-statements

      var parseURL = function parseURL(url, input, stateOverride, base) {
        var state = stateOverride || SCHEME_START;
        var pointer = 0;
        var buffer = '';
        var seenAt = false;
        var seenBracket = false;
        var seenPasswordToken = false;

        var codePoints, _char3, bufferCodePoints, failure;

        if (!stateOverride) {
          url.scheme = '';
          url.username = '';
          url.password = '';
          url.host = null;
          url.port = null;
          url.path = [];
          url.query = null;
          url.fragment = null;
          url.cannotBeABaseURL = false;
          input = input.replace(LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
        }

        input = input.replace(TAB_AND_NEW_LINE, '');
        codePoints = arrayFrom(input);

        while (pointer <= codePoints.length) {
          _char3 = codePoints[pointer];

          switch (state) {
            case SCHEME_START:
              if (_char3 && ALPHA.test(_char3)) {
                buffer += _char3.toLowerCase();
                state = SCHEME;
              } else if (!stateOverride) {
                state = NO_SCHEME;
                continue;
              } else return INVALID_SCHEME;

              break;

            case SCHEME:
              if (_char3 && (ALPHANUMERIC.test(_char3) || _char3 == '+' || _char3 == '-' || _char3 == '.')) {
                buffer += _char3.toLowerCase();
              } else if (_char3 == ':') {
                if (stateOverride && (isSpecial(url) != has(specialSchemes, buffer) || buffer == 'file' && (includesCredentials(url) || url.port !== null) || url.scheme == 'file' && !url.host)) return;
                url.scheme = buffer;

                if (stateOverride) {
                  if (isSpecial(url) && specialSchemes[url.scheme] == url.port) url.port = null;
                  return;
                }

                buffer = '';

                if (url.scheme == 'file') {
                  state = FILE;
                } else if (isSpecial(url) && base && base.scheme == url.scheme) {
                  state = SPECIAL_RELATIVE_OR_AUTHORITY;
                } else if (isSpecial(url)) {
                  state = SPECIAL_AUTHORITY_SLASHES;
                } else if (codePoints[pointer + 1] == '/') {
                  state = PATH_OR_AUTHORITY;
                  pointer++;
                } else {
                  url.cannotBeABaseURL = true;
                  url.path.push('');
                  state = CANNOT_BE_A_BASE_URL_PATH;
                }
              } else if (!stateOverride) {
                buffer = '';
                state = NO_SCHEME;
                pointer = 0;
                continue;
              } else return INVALID_SCHEME;

              break;

            case NO_SCHEME:
              if (!base || base.cannotBeABaseURL && _char3 != '#') return INVALID_SCHEME;

              if (base.cannotBeABaseURL && _char3 == '#') {
                url.scheme = base.scheme;
                url.path = base.path.slice();
                url.query = base.query;
                url.fragment = '';
                url.cannotBeABaseURL = true;
                state = FRAGMENT;
                break;
              }

              state = base.scheme == 'file' ? FILE : RELATIVE;
              continue;

            case SPECIAL_RELATIVE_OR_AUTHORITY:
              if (_char3 == '/' && codePoints[pointer + 1] == '/') {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
                pointer++;
              } else {
                state = RELATIVE;
                continue;
              }

              break;

            case PATH_OR_AUTHORITY:
              if (_char3 == '/') {
                state = AUTHORITY;
                break;
              } else {
                state = PATH;
                continue;
              }

            case RELATIVE:
              url.scheme = base.scheme;

              if (_char3 == EOF) {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = base.query;
              } else if (_char3 == '/' || _char3 == '\\' && isSpecial(url)) {
                state = RELATIVE_SLASH;
              } else if (_char3 == '?') {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = '';
                state = QUERY;
              } else if (_char3 == '#') {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                url.path = base.path.slice();
                url.path.pop();
                state = PATH;
                continue;
              }

              break;

            case RELATIVE_SLASH:
              if (isSpecial(url) && (_char3 == '/' || _char3 == '\\')) {
                state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              } else if (_char3 == '/') {
                state = AUTHORITY;
              } else {
                url.username = base.username;
                url.password = base.password;
                url.host = base.host;
                url.port = base.port;
                state = PATH;
                continue;
              }

              break;

            case SPECIAL_AUTHORITY_SLASHES:
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              if (_char3 != '/' || buffer.charAt(pointer + 1) != '/') continue;
              pointer++;
              break;

            case SPECIAL_AUTHORITY_IGNORE_SLASHES:
              if (_char3 != '/' && _char3 != '\\') {
                state = AUTHORITY;
                continue;
              }

              break;

            case AUTHORITY:
              if (_char3 == '@') {
                if (seenAt) buffer = '%40' + buffer;
                seenAt = true;
                bufferCodePoints = arrayFrom(buffer);

                for (var i = 0; i < bufferCodePoints.length; i++) {
                  var codePoint = bufferCodePoints[i];

                  if (codePoint == ':' && !seenPasswordToken) {
                    seenPasswordToken = true;
                    continue;
                  }

                  var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                  if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
                }

                buffer = '';
              } else if (_char3 == EOF || _char3 == '/' || _char3 == '?' || _char3 == '#' || _char3 == '\\' && isSpecial(url)) {
                if (seenAt && buffer == '') return INVALID_AUTHORITY;
                pointer -= arrayFrom(buffer).length + 1;
                buffer = '';
                state = HOST;
              } else buffer += _char3;

              break;

            case HOST:
            case HOSTNAME:
              if (stateOverride && url.scheme == 'file') {
                state = FILE_HOST;
                continue;
              } else if (_char3 == ':' && !seenBracket) {
                if (buffer == '') return INVALID_HOST;
                failure = parseHost(url, buffer);
                if (failure) return failure;
                buffer = '';
                state = PORT;
                if (stateOverride == HOSTNAME) return;
              } else if (_char3 == EOF || _char3 == '/' || _char3 == '?' || _char3 == '#' || _char3 == '\\' && isSpecial(url)) {
                if (isSpecial(url) && buffer == '') return INVALID_HOST;
                if (stateOverride && buffer == '' && (includesCredentials(url) || url.port !== null)) return;
                failure = parseHost(url, buffer);
                if (failure) return failure;
                buffer = '';
                state = PATH_START;
                if (stateOverride) return;
                continue;
              } else {
                if (_char3 == '[') seenBracket = true;else if (_char3 == ']') seenBracket = false;
                buffer += _char3;
              }

              break;

            case PORT:
              if (DIGIT.test(_char3)) {
                buffer += _char3;
              } else if (_char3 == EOF || _char3 == '/' || _char3 == '?' || _char3 == '#' || _char3 == '\\' && isSpecial(url) || stateOverride) {
                if (buffer != '') {
                  var port = parseInt(buffer, 10);
                  if (port > 0xFFFF) return INVALID_PORT;
                  url.port = isSpecial(url) && port === specialSchemes[url.scheme] ? null : port;
                  buffer = '';
                }

                if (stateOverride) return;
                state = PATH_START;
                continue;
              } else return INVALID_PORT;

              break;

            case FILE:
              url.scheme = 'file';
              if (_char3 == '/' || _char3 == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
                if (_char3 == EOF) {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = base.query;
                } else if (_char3 == '?') {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = '';
                  state = QUERY;
                } else if (_char3 == '#') {
                  url.host = base.host;
                  url.path = base.path.slice();
                  url.query = base.query;
                  url.fragment = '';
                  state = FRAGMENT;
                } else {
                  if (!startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                    url.host = base.host;
                    url.path = base.path.slice();
                    shortenURLsPath(url);
                  }

                  state = PATH;
                  continue;
                }
              } else {
                state = PATH;
                continue;
              }
              break;

            case FILE_SLASH:
              if (_char3 == '/' || _char3 == '\\') {
                state = FILE_HOST;
                break;
              }

              if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(codePoints.slice(pointer).join(''))) {
                if (isWindowsDriveLetter(base.path[0], true)) url.path.push(base.path[0]);else url.host = base.host;
              }

              state = PATH;
              continue;

            case FILE_HOST:
              if (_char3 == EOF || _char3 == '/' || _char3 == '\\' || _char3 == '?' || _char3 == '#') {
                if (!stateOverride && isWindowsDriveLetter(buffer)) {
                  state = PATH;
                } else if (buffer == '') {
                  url.host = '';
                  if (stateOverride) return;
                  state = PATH_START;
                } else {
                  failure = parseHost(url, buffer);
                  if (failure) return failure;
                  if (url.host == 'localhost') url.host = '';
                  if (stateOverride) return;
                  buffer = '';
                  state = PATH_START;
                }

                continue;
              } else buffer += _char3;

              break;

            case PATH_START:
              if (isSpecial(url)) {
                state = PATH;
                if (_char3 != '/' && _char3 != '\\') continue;
              } else if (!stateOverride && _char3 == '?') {
                url.query = '';
                state = QUERY;
              } else if (!stateOverride && _char3 == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (_char3 != EOF) {
                state = PATH;
                if (_char3 != '/') continue;
              }

              break;

            case PATH:
              if (_char3 == EOF || _char3 == '/' || _char3 == '\\' && isSpecial(url) || !stateOverride && (_char3 == '?' || _char3 == '#')) {
                if (isDoubleDot(buffer)) {
                  shortenURLsPath(url);

                  if (_char3 != '/' && !(_char3 == '\\' && isSpecial(url))) {
                    url.path.push('');
                  }
                } else if (isSingleDot(buffer)) {
                  if (_char3 != '/' && !(_char3 == '\\' && isSpecial(url))) {
                    url.path.push('');
                  }
                } else {
                  if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                    if (url.host) url.host = '';
                    buffer = buffer.charAt(0) + ':'; // normalize windows drive letter
                  }

                  url.path.push(buffer);
                }

                buffer = '';

                if (url.scheme == 'file' && (_char3 == EOF || _char3 == '?' || _char3 == '#')) {
                  while (url.path.length > 1 && url.path[0] === '') {
                    url.path.shift();
                  }
                }

                if (_char3 == '?') {
                  url.query = '';
                  state = QUERY;
                } else if (_char3 == '#') {
                  url.fragment = '';
                  state = FRAGMENT;
                }
              } else {
                buffer += percentEncode(_char3, pathPercentEncodeSet);
              }

              break;

            case CANNOT_BE_A_BASE_URL_PATH:
              if (_char3 == '?') {
                url.query = '';
                state = QUERY;
              } else if (_char3 == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (_char3 != EOF) {
                url.path[0] += percentEncode(_char3, C0ControlPercentEncodeSet);
              }

              break;

            case QUERY:
              if (!stateOverride && _char3 == '#') {
                url.fragment = '';
                state = FRAGMENT;
              } else if (_char3 != EOF) {
                if (_char3 == "'" && isSpecial(url)) url.query += '%27';else if (_char3 == '#') url.query += '%23';else url.query += percentEncode(_char3, C0ControlPercentEncodeSet);
              }

              break;

            case FRAGMENT:
              if (_char3 != EOF) url.fragment += percentEncode(_char3, fragmentPercentEncodeSet);
              break;
          }

          pointer++;
        }
      }; // `URL` constructor
      // https://url.spec.whatwg.org/#url-class


      var URLConstructor = function URL(url
      /* , base */
      ) {
        var that = anInstance(this, URLConstructor, 'URL');
        var base = arguments.length > 1 ? arguments[1] : undefined;
        var urlString = String(url);
        var state = setInternalState$8(that, {
          type: 'URL'
        });
        var baseState, failure;

        if (base !== undefined) {
          if (base instanceof URLConstructor) baseState = getInternalURLState(base);else {
            failure = parseURL(baseState = {}, String(base));
            if (failure) throw TypeError(failure);
          }
        }

        failure = parseURL(state, urlString, null, baseState);
        if (failure) throw TypeError(failure);
        var searchParams = state.searchParams = new URLSearchParams$1();
        var searchParamsState = getInternalSearchParamsState(searchParams);
        searchParamsState.updateSearchParams(state.query);

        searchParamsState.updateURL = function () {
          state.query = String(searchParams) || null;
        };

        if (!descriptors) {
          that.href = serializeURL.call(that);
          that.origin = getOrigin.call(that);
          that.protocol = getProtocol.call(that);
          that.username = getUsername.call(that);
          that.password = getPassword.call(that);
          that.host = getHost.call(that);
          that.hostname = getHostname.call(that);
          that.port = getPort.call(that);
          that.pathname = getPathname.call(that);
          that.search = getSearch.call(that);
          that.searchParams = getSearchParams.call(that);
          that.hash = getHash.call(that);
        }
      };

      var URLPrototype = URLConstructor.prototype;

      var serializeURL = function serializeURL() {
        var url = getInternalURLState(this);
        var scheme = url.scheme;
        var username = url.username;
        var password = url.password;
        var host = url.host;
        var port = url.port;
        var path = url.path;
        var query = url.query;
        var fragment = url.fragment;
        var output = scheme + ':';

        if (host !== null) {
          output += '//';

          if (includesCredentials(url)) {
            output += username + (password ? ':' + password : '') + '@';
          }

          output += serializeHost(host);
          if (port !== null) output += ':' + port;
        } else if (scheme == 'file') output += '//';

        output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
        if (query !== null) output += '?' + query;
        if (fragment !== null) output += '#' + fragment;
        return output;
      };

      var getOrigin = function getOrigin() {
        var url = getInternalURLState(this);
        var scheme = url.scheme;
        var port = url.port;
        if (scheme == 'blob') try {
          return new URL(scheme.path[0]).origin;
        } catch (error) {
          return 'null';
        }
        if (scheme == 'file' || !isSpecial(url)) return 'null';
        return scheme + '://' + serializeHost(url.host) + (port !== null ? ':' + port : '');
      };

      var getProtocol = function getProtocol() {
        return getInternalURLState(this).scheme + ':';
      };

      var getUsername = function getUsername() {
        return getInternalURLState(this).username;
      };

      var getPassword = function getPassword() {
        return getInternalURLState(this).password;
      };

      var getHost = function getHost() {
        var url = getInternalURLState(this);
        var host = url.host;
        var port = url.port;
        return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
      };

      var getHostname = function getHostname() {
        var host = getInternalURLState(this).host;
        return host === null ? '' : serializeHost(host);
      };

      var getPort = function getPort() {
        var port = getInternalURLState(this).port;
        return port === null ? '' : String(port);
      };

      var getPathname = function getPathname() {
        var url = getInternalURLState(this);
        var path = url.path;
        return url.cannotBeABaseURL ? path[0] : path.length ? '/' + path.join('/') : '';
      };

      var getSearch = function getSearch() {
        var query = getInternalURLState(this).query;
        return query ? '?' + query : '';
      };

      var getSearchParams = function getSearchParams() {
        return getInternalURLState(this).searchParams;
      };

      var getHash = function getHash() {
        var fragment = getInternalURLState(this).fragment;
        return fragment ? '#' + fragment : '';
      };

      var accessorDescriptor = function accessorDescriptor(getter, setter) {
        return {
          get: getter,
          set: setter,
          configurable: true,
          enumerable: true
        };
      };

      if (descriptors) {
        objectDefineProperties(URLPrototype, {
          // `URL.prototype.href` accessors pair
          // https://url.spec.whatwg.org/#dom-url-href
          href: accessorDescriptor(serializeURL, function (href) {
            var url = getInternalURLState(this);
            var urlString = String(href);
            var failure = parseURL(url, urlString);
            if (failure) throw TypeError(failure);
            getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
          }),
          // `URL.prototype.origin` getter
          // https://url.spec.whatwg.org/#dom-url-origin
          origin: accessorDescriptor(getOrigin),
          // `URL.prototype.protocol` accessors pair
          // https://url.spec.whatwg.org/#dom-url-protocol
          protocol: accessorDescriptor(getProtocol, function (protocol) {
            var url = getInternalURLState(this);
            parseURL(url, String(protocol) + ':', SCHEME_START);
          }),
          // `URL.prototype.username` accessors pair
          // https://url.spec.whatwg.org/#dom-url-username
          username: accessorDescriptor(getUsername, function (username) {
            var url = getInternalURLState(this);
            var codePoints = arrayFrom(String(username));
            if (cannotHaveUsernamePasswordPort(url)) return;
            url.username = '';

            for (var i = 0; i < codePoints.length; i++) {
              url.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
            }
          }),
          // `URL.prototype.password` accessors pair
          // https://url.spec.whatwg.org/#dom-url-password
          password: accessorDescriptor(getPassword, function (password) {
            var url = getInternalURLState(this);
            var codePoints = arrayFrom(String(password));
            if (cannotHaveUsernamePasswordPort(url)) return;
            url.password = '';

            for (var i = 0; i < codePoints.length; i++) {
              url.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
            }
          }),
          // `URL.prototype.host` accessors pair
          // https://url.spec.whatwg.org/#dom-url-host
          host: accessorDescriptor(getHost, function (host) {
            var url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            parseURL(url, String(host), HOST);
          }),
          // `URL.prototype.hostname` accessors pair
          // https://url.spec.whatwg.org/#dom-url-hostname
          hostname: accessorDescriptor(getHostname, function (hostname) {
            var url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            parseURL(url, String(hostname), HOSTNAME);
          }),
          // `URL.prototype.port` accessors pair
          // https://url.spec.whatwg.org/#dom-url-port
          port: accessorDescriptor(getPort, function (port) {
            var url = getInternalURLState(this);
            if (cannotHaveUsernamePasswordPort(url)) return;
            port = String(port);
            if (port == '') url.port = null;else parseURL(url, port, PORT);
          }),
          // `URL.prototype.pathname` accessors pair
          // https://url.spec.whatwg.org/#dom-url-pathname
          pathname: accessorDescriptor(getPathname, function (pathname) {
            var url = getInternalURLState(this);
            if (url.cannotBeABaseURL) return;
            url.path = [];
            parseURL(url, pathname + '', PATH_START);
          }),
          // `URL.prototype.search` accessors pair
          // https://url.spec.whatwg.org/#dom-url-search
          search: accessorDescriptor(getSearch, function (search) {
            var url = getInternalURLState(this);
            search = String(search);

            if (search == '') {
              url.query = null;
            } else {
              if ('?' == search.charAt(0)) search = search.slice(1);
              url.query = '';
              parseURL(url, search, QUERY);
            }

            getInternalSearchParamsState(url.searchParams).updateSearchParams(url.query);
          }),
          // `URL.prototype.searchParams` getter
          // https://url.spec.whatwg.org/#dom-url-searchparams
          searchParams: accessorDescriptor(getSearchParams),
          // `URL.prototype.hash` accessors pair
          // https://url.spec.whatwg.org/#dom-url-hash
          hash: accessorDescriptor(getHash, function (hash) {
            var url = getInternalURLState(this);
            hash = String(hash);

            if (hash == '') {
              url.fragment = null;
              return;
            }

            if ('#' == hash.charAt(0)) hash = hash.slice(1);
            url.fragment = '';
            parseURL(url, hash, FRAGMENT);
          })
        });
      } // `URL.prototype.toJSON` method
      // https://url.spec.whatwg.org/#dom-url-tojson


      redefine(URLPrototype, 'toJSON', function toJSON() {
        return serializeURL.call(this);
      }, {
        enumerable: true
      }); // `URL.prototype.toString` method
      // https://url.spec.whatwg.org/#URL-stringification-behavior

      redefine(URLPrototype, 'toString', function toString() {
        return serializeURL.call(this);
      }, {
        enumerable: true
      });

      if (NativeURL) {
        var nativeCreateObjectURL = NativeURL.createObjectURL;
        var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
        // eslint-disable-next-line no-unused-vars

        if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', function createObjectURL(blob) {
          return nativeCreateObjectURL.apply(NativeURL, arguments);
        }); // `URL.revokeObjectURL` method
        // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
        // eslint-disable-next-line no-unused-vars

        if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', function revokeObjectURL(url) {
          return nativeRevokeObjectURL.apply(NativeURL, arguments);
        });
      }

      setToStringTag(URLConstructor, 'URL');
      _export({
        global: true,
        forced: !nativeUrl,
        sham: !descriptors
      }, {
        URL: URLConstructor
      });

      // https://url.spec.whatwg.org/#dom-url-tojson


      _export({
        target: 'URL',
        proto: true,
        enumerable: true
      }, {
        toJSON: function toJSON() {
          return URL.prototype.toString.call(this);
        }
      });

      var runtime_1 = createCommonjsModule(function (module) {
        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        var runtime = function (exports) {

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined$1; // More compressible than void 0.

          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.

            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
          }

          exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.

          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.

          var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.

          function Generator() {}

          function GeneratorFunction() {}

          function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.


          var IteratorPrototype = {};

          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

          if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.

          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          exports.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };

          exports.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;

              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }

            genFun.prototype = Object.create(Gp);
            return genFun;
          }; // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.


          exports.awrap = function (arg) {
            return {
              __await: arg
            };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);

              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;

                if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
                  return Promise.resolve(value.__await).then(function (value) {
                    invoke("next", value, resolve, reject);
                  }, function (err) {
                    invoke("throw", err, resolve, reject);
                  });
                }

                return Promise.resolve(value).then(function (unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration.
                  result.value = unwrapped;
                  resolve(result);
                }, function (error) {
                  // If a rejected Promise was yielded, throw the rejection back
                  // into the async generator function so it can be handled there.
                  return invoke("throw", error, resolve, reject);
                });
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise = // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            } // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).


            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);

          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };

          exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.

          exports.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
            return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                } // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;

                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);

                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);

                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted; // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.

                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          } // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.


          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];

            if (method === undefined$1) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined$1;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

              context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.

              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined$1;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            } // The delegate iterator is finished, so forget it and continue with
            // the outer generator.


            context.delegate = null;
            return ContinueSentinel;
          } // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.


          defineIteratorMethods(Gp);
          Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.

          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{
              tryLoc: "root"
            }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          exports.keys = function (object) {
            var keys = [];

            for (var key in object) {
              keys.push(key);
            }

            keys.reverse(); // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.

            return function next() {
              while (keys.length) {
                var key = keys.pop();

                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              } // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.


              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];

              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined$1;
                  next.done = true;
                  return next;
                };

                return next.next = next;
              }
            } // Return an iterator with no values.


            return {
              next: doneResult
            };
          }

          exports.values = values;

          function doneResult() {
            return {
              value: undefined$1,
              done: true
            };
          }

          Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0; // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.

              this.sent = this._sent = undefined$1;
              this.done = false;
              this.delegate = null;
              this.method = "next";
              this.arg = undefined$1;
              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined$1;
                  }
                }
              }
            },
            stop: function stop() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;

              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;

              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined$1;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];

                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;

                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }

                  return thrown;
                }
              } // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.


              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined$1;
              }

              return ContinueSentinel;
            }
          }; // Regardless of whether this script is executing as a CommonJS module
          // or not, return the runtime object so that we can declare the variable
          // regeneratorRuntime in the outer scope, which allows this module to be
          // injected easily by `bin/regenerator --include-runtime script.js`.

          return exports;
        }( // If this script is executing as a CommonJS module, use module.exports
        // as the regeneratorRuntime namespace. Otherwise create a new empty
        // object. Either way, the resulting object will be used to initialize
        // the regeneratorRuntime variable at the top of this file.
         module.exports );

        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          // This module should not be running in strict mode, so the above
          // assignment should always work unless something is misconfigured. Just
          // in case runtime.js accidentally runs in strict mode, we can escape
          // strict mode using a global Function call. This could conceivably fail
          // if a Content Security Policy forbids using Function, but in that case
          // the proper solution is to fix the accidental strict mode problem. If
          // you've misconfigured your bundler to force strict mode and applied a
          // CSP to forbid Function, and you're not willing to fix either of those
          // problems, please detail your unique predicament in a GitHub issue.
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      });

      // @ts-ignore
      window.ccm = cc;

      var validDataUrl = createCommonjsModule(function (module) {
        /*global define */
        // Detecting data URLs
        // data URI - MDN https://developer.mozilla.org/en-US/docs/data_URIs
        // The "data" URL scheme: http://tools.ietf.org/html/rfc2397
        // Valid URL Characters: http://tools.ietf.org/html/rfc2396#section2
        (function (root, factory) {
          // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignore-a-umd-wrapper

          /* istanbul ignore next */
          if ( module.exports) {
            module.exports = factory();
          } else {
            root.validDataUrl = factory();
          }
        })(commonjsGlobal, function () {

          function validDataUrl(s) {
            return validDataUrl.regex.test((s || '').trim());
          }

          validDataUrl.regex = /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)$/i;
          return validDataUrl;
        });
      });

      var parseDataUrl = function parseDataUrl(s) {
        if (!validDataUrl(s)) {
          return false;
        }

        var parts = s.trim().match(validDataUrl.regex);
        var parsed = {};

        if (parts[1]) {
          parsed.mediaType = parts[1].toLowerCase();
          var mediaTypeParts = parts[1].split(';').map(function (x) {
            return x.toLowerCase();
          });
          parsed.contentType = mediaTypeParts[0];
          mediaTypeParts.slice(1).forEach(function (attribute) {
            var p = attribute.split('=');
            parsed[p[0]] = p[1];
          });
        }

        parsed.base64 = !!parts[parts.length - 2];
        parsed.data = parts[parts.length - 1] || '';

        parsed.toBuffer = function () {
          var encoding = parsed.base64 ? 'base64' : 'utf8';
          return Buffer.from(parsed.data, encoding);
        };

        return parsed;
      };

      var uri_all = createCommonjsModule(function (module, exports) {
        /** @license URI.js v4.2.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
        (function (global, factory) {
           factory(exports) ;
        })(commonjsGlobal, function (exports) {

          function merge() {
            for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
              sets[_key] = arguments[_key];
            }

            if (sets.length > 1) {
              sets[0] = sets[0].slice(0, -1);
              var xl = sets.length - 1;

              for (var x = 1; x < xl; ++x) {
                sets[x] = sets[x].slice(1, -1);
              }

              sets[xl] = sets[xl].slice(1);
              return sets.join('');
            } else {
              return sets[0];
            }
          }

          function subexp(str) {
            return "(?:" + str + ")";
          }

          function typeOf(o) {
            return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
          }

          function toUpperCase(str) {
            return str.toUpperCase();
          }

          function toArray(obj) {
            return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
          }

          function assign(target, source) {
            var obj = target;

            if (source) {
              for (var key in source) {
                obj[key] = source[key];
              }
            }

            return obj;
          }

          function buildExps(isIRI) {
            var ALPHA$$ = "[A-Za-z]",
                DIGIT$$ = "[0-9]",
                HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
                PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
                //expanded
            GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
                SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
                RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
                UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
                //subset, excludes bidi control characters
            IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
                //subset
            UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$),
                SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"),
                USERINFO$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*"),
                DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
                //relaxed parsing rules
            IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
                H16$ = subexp(HEXDIG$$ + "{1,4}"),
                LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
                IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
                //                           6( h16 ":" ) ls32
            IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
                //                      "::" 5( h16 ":" ) ls32
            IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
                //[               h16 ] "::" 4( h16 ":" ) ls32
            IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
                //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
            IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
                //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
            IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
                //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
            IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
                //[ *4( h16 ":" ) h16 ] "::"              ls32
            IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
                //[ *5( h16 ":" ) h16 ] "::"              h16
            IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
                //[ *6( h16 ":" ) h16 ] "::"
            IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
                ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+"),
                //RFC 6874, with relaxed parsing rules
            IPVFUTURE$ = subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+"),
                //RFC 6874
            REG_NAME$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*"),
                PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]")),
                SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+"),
                QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*");
            return {
              NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
              NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
              NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
              NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
              NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
              NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
              NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
              ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
              UNRESERVED: new RegExp(UNRESERVED$$, "g"),
              OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
              PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
              IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
              IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules

            };
          }

          var URI_PROTOCOL = buildExps(false);
          var IRI_PROTOCOL = buildExps(true);

          var slicedToArray = function () {
            function sliceIterator(arr, i) {
              var _arr = [];
              var _n = true;
              var _d = false;
              var _e = undefined;

              try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                  _arr.push(_s.value);

                  if (i && _arr.length === i) break;
                }
              } catch (err) {
                _d = true;
                _e = err;
              } finally {
                try {
                  if (!_n && _i["return"]) _i["return"]();
                } finally {
                  if (_d) throw _e;
                }
              }

              return _arr;
            }

            return function (arr, i) {
              if (Array.isArray(arr)) {
                return arr;
              } else if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
              } else {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
              }
            };
          }();

          var toConsumableArray = function toConsumableArray(arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
              }

              return arr2;
            } else {
              return Array.from(arr);
            }
          };
          /** Highest positive signed 32-bit float value */


          var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

          /** Bootstring parameters */

          var base = 36;
          var tMin = 1;
          var tMax = 26;
          var skew = 38;
          var damp = 700;
          var initialBias = 72;
          var initialN = 128; // 0x80

          var delimiter = '-'; // '\x2D'

          /** Regular expressions */

          var regexPunycode = /^xn--/;
          var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars

          var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

          /** Error messages */

          var errors = {
            'overflow': 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input'
          };
          /** Convenience shortcuts */

          var baseMinusTMin = base - tMin;
          var floor = Math.floor;
          var stringFromCharCode = String.fromCharCode;
          /*--------------------------------------------------------------------------*/

          /**
           * A generic error utility function.
           * @private
           * @param {String} type The error type.
           * @returns {Error} Throws a `RangeError` with the applicable error message.
           */

          function error$1(type) {
            throw new RangeError(errors[type]);
          }
          /**
           * A generic `Array#map` utility function.
           * @private
           * @param {Array} array The array to iterate over.
           * @param {Function} callback The function that gets called for every array
           * item.
           * @returns {Array} A new array of values returned by the callback function.
           */


          function map(array, fn) {
            var result = [];
            var length = array.length;

            while (length--) {
              result[length] = fn(array[length]);
            }

            return result;
          }
          /**
           * A simple `Array#map`-like wrapper to work with domain name strings or email
           * addresses.
           * @private
           * @param {String} domain The domain name or email address.
           * @param {Function} callback The function that gets called for every
           * character.
           * @returns {Array} A new string of characters returned by the callback
           * function.
           */


          function mapDomain(string, fn) {
            var parts = string.split('@');
            var result = '';

            if (parts.length > 1) {
              // In email addresses, only the domain name should be punycoded. Leave
              // the local part (i.e. everything up to `@`) intact.
              result = parts[0] + '@';
              string = parts[1];
            } // Avoid `split(regex)` for IE8 compatibility. See #17.


            string = string.replace(regexSeparators, '\x2E');
            var labels = string.split('.');
            var encoded = map(labels, fn).join('.');
            return result + encoded;
          }
          /**
           * Creates an array containing the numeric code points of each Unicode
           * character in the string. While JavaScript uses UCS-2 internally,
           * this function will convert a pair of surrogate halves (each of which
           * UCS-2 exposes as separate characters) into a single code point,
           * matching UTF-16.
           * @see `punycode.ucs2.encode`
           * @see <https://mathiasbynens.be/notes/javascript-encoding>
           * @memberOf punycode.ucs2
           * @name decode
           * @param {String} string The Unicode input string (UCS-2).
           * @returns {Array} The new array of code points.
           */


          function ucs2decode(string) {
            var output = [];
            var counter = 0;
            var length = string.length;

            while (counter < length) {
              var value = string.charCodeAt(counter++);

              if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // It's a high surrogate, and there is a next character.
                var extra = string.charCodeAt(counter++);

                if ((extra & 0xFC00) == 0xDC00) {
                  // Low surrogate.
                  output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                  // It's an unmatched surrogate; only append this code unit, in case the
                  // next code unit is the high surrogate of a surrogate pair.
                  output.push(value);
                  counter--;
                }
              } else {
                output.push(value);
              }
            }

            return output;
          }
          /**
           * Creates a string based on an array of numeric code points.
           * @see `punycode.ucs2.decode`
           * @memberOf punycode.ucs2
           * @name encode
           * @param {Array} codePoints The array of numeric code points.
           * @returns {String} The new Unicode string (UCS-2).
           */


          var ucs2encode = function ucs2encode(array) {
            return String.fromCodePoint.apply(String, toConsumableArray(array));
          };
          /**
           * Converts a basic code point into a digit/integer.
           * @see `digitToBasic()`
           * @private
           * @param {Number} codePoint The basic numeric code point value.
           * @returns {Number} The numeric value of a basic code point (for use in
           * representing integers) in the range `0` to `base - 1`, or `base` if
           * the code point does not represent a value.
           */


          var basicToDigit = function basicToDigit(codePoint) {
            if (codePoint - 0x30 < 0x0A) {
              return codePoint - 0x16;
            }

            if (codePoint - 0x41 < 0x1A) {
              return codePoint - 0x41;
            }

            if (codePoint - 0x61 < 0x1A) {
              return codePoint - 0x61;
            }

            return base;
          };
          /**
           * Converts a digit/integer into a basic code point.
           * @see `basicToDigit()`
           * @private
           * @param {Number} digit The numeric value of a basic code point.
           * @returns {Number} The basic code point whose value (when used for
           * representing integers) is `digit`, which needs to be in the range
           * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
           * used; else, the lowercase form is used. The behavior is undefined
           * if `flag` is non-zero and `digit` has no uppercase form.
           */


          var digitToBasic = function digitToBasic(digit, flag) {
            //  0..25 map to ASCII a..z or A..Z
            // 26..35 map to ASCII 0..9
            return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
          };
          /**
           * Bias adaptation function as per section 3.4 of RFC 3492.
           * https://tools.ietf.org/html/rfc3492#section-3.4
           * @private
           */


          var adapt = function adapt(delta, numPoints, firstTime) {
            var k = 0;
            delta = firstTime ? floor(delta / damp) : delta >> 1;
            delta += floor(delta / numPoints);

            for (;
            /* no initialization */
            delta > baseMinusTMin * tMax >> 1; k += base) {
              delta = floor(delta / baseMinusTMin);
            }

            return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
          };
          /**
           * Converts a Punycode string of ASCII-only symbols to a string of Unicode
           * symbols.
           * @memberOf punycode
           * @param {String} input The Punycode string of ASCII-only symbols.
           * @returns {String} The resulting string of Unicode symbols.
           */


          var decode = function decode(input) {
            // Don't use UCS-2.
            var output = [];
            var inputLength = input.length;
            var i = 0;
            var n = initialN;
            var bias = initialBias; // Handle the basic code points: let `basic` be the number of input code
            // points before the last delimiter, or `0` if there is none, then copy
            // the first basic code points to the output.

            var basic = input.lastIndexOf(delimiter);

            if (basic < 0) {
              basic = 0;
            }

            for (var j = 0; j < basic; ++j) {
              // if it's not a basic code point
              if (input.charCodeAt(j) >= 0x80) {
                error$1('not-basic');
              }

              output.push(input.charCodeAt(j));
            } // Main decoding loop: start just after the last delimiter if any basic code
            // points were copied; start at the beginning otherwise.


            for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;)
            /* no final expression */
            {
              // `index` is the index of the next character to be consumed.
              // Decode a generalized variable-length integer into `delta`,
              // which gets added to `i`. The overflow checking is easier
              // if we increase `i` as we go, then subtract off its starting
              // value at the end to obtain `delta`.
              var oldi = i;

              for (var w = 1, k = base;;
              /* no condition */
              k += base) {
                if (index >= inputLength) {
                  error$1('invalid-input');
                }

                var digit = basicToDigit(input.charCodeAt(index++));

                if (digit >= base || digit > floor((maxInt - i) / w)) {
                  error$1('overflow');
                }

                i += digit * w;
                var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                if (digit < t) {
                  break;
                }

                var baseMinusT = base - t;

                if (w > floor(maxInt / baseMinusT)) {
                  error$1('overflow');
                }

                w *= baseMinusT;
              }

              var out = output.length + 1;
              bias = adapt(i - oldi, out, oldi == 0); // `i` was supposed to wrap around from `out` to `0`,
              // incrementing `n` each time, so we'll fix that now:

              if (floor(i / out) > maxInt - n) {
                error$1('overflow');
              }

              n += floor(i / out);
              i %= out; // Insert `n` at position `i` of the output.

              output.splice(i++, 0, n);
            }

            return String.fromCodePoint.apply(String, output);
          };
          /**
           * Converts a string of Unicode symbols (e.g. a domain name label) to a
           * Punycode string of ASCII-only symbols.
           * @memberOf punycode
           * @param {String} input The string of Unicode symbols.
           * @returns {String} The resulting Punycode string of ASCII-only symbols.
           */


          var encode = function encode(input) {
            var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

            input = ucs2decode(input); // Cache the length.

            var inputLength = input.length; // Initialize the state.

            var n = initialN;
            var delta = 0;
            var bias = initialBias; // Handle the basic code points.

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _currentValue2 = _step.value;

                if (_currentValue2 < 0x80) {
                  output.push(stringFromCharCode(_currentValue2));
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"]) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            var basicLength = output.length;
            var handledCPCount = basicLength; // `handledCPCount` is the number of code points that have been handled;
            // `basicLength` is the number of basic code points.
            // Finish the basic string with a delimiter unless it's empty.

            if (basicLength) {
              output.push(delimiter);
            } // Main encoding loop:


            while (handledCPCount < inputLength) {
              // All non-basic code points < n have been handled already. Find the next
              // larger one:
              var m = maxInt;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var currentValue = _step2.value;

                  if (currentValue >= n && currentValue < m) {
                    m = currentValue;
                  }
                } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
                // but guard against overflow.

              } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                    _iterator2["return"]();
                  }
                } finally {
                  if (_didIteratorError2) {
                    throw _iteratorError2;
                  }
                }
              }

              var handledCPCountPlusOne = handledCPCount + 1;

              if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                error$1('overflow');
              }

              delta += (m - n) * handledCPCountPlusOne;
              n = m;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                  var _currentValue = _step3.value;

                  if (_currentValue < n && ++delta > maxInt) {
                    error$1('overflow');
                  }

                  if (_currentValue == n) {
                    // Represent delta as a generalized variable-length integer.
                    var q = delta;

                    for (var k = base;;
                    /* no condition */
                    k += base) {
                      var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

                      if (q < t) {
                        break;
                      }

                      var qMinusT = q - t;
                      var baseMinusT = base - t;
                      output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                      q = floor(qMinusT / baseMinusT);
                    }

                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                  }
                }
              } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
                    _iterator3["return"]();
                  }
                } finally {
                  if (_didIteratorError3) {
                    throw _iteratorError3;
                  }
                }
              }

              ++delta;
              ++n;
            }

            return output.join('');
          };
          /**
           * Converts a Punycode string representing a domain name or an email address
           * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
           * it doesn't matter if you call it on a string that has already been
           * converted to Unicode.
           * @memberOf punycode
           * @param {String} input The Punycoded domain name or email address to
           * convert to Unicode.
           * @returns {String} The Unicode representation of the given Punycode
           * string.
           */


          var toUnicode = function toUnicode(input) {
            return mapDomain(input, function (string) {
              return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
            });
          };
          /**
           * Converts a Unicode string representing a domain name or an email address to
           * Punycode. Only the non-ASCII parts of the domain name will be converted,
           * i.e. it doesn't matter if you call it with a domain that's already in
           * ASCII.
           * @memberOf punycode
           * @param {String} input The domain name or email address to convert, as a
           * Unicode string.
           * @returns {String} The Punycode representation of the given domain name or
           * email address.
           */


          var toASCII = function toASCII(input) {
            return mapDomain(input, function (string) {
              return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
            });
          };
          /*--------------------------------------------------------------------------*/

          /** Define the public API */


          var punycode = {
            /**
             * A string representing the current Punycode.js version number.
             * @memberOf punycode
             * @type String
             */
            'version': '2.1.0',

            /**
             * An object of methods to convert from JavaScript's internal character
             * representation (UCS-2) to Unicode code points, and back.
             * @see <https://mathiasbynens.be/notes/javascript-encoding>
             * @memberOf punycode
             * @type Object
             */
            'ucs2': {
              'decode': ucs2decode,
              'encode': ucs2encode
            },
            'decode': decode,
            'encode': encode,
            'toASCII': toASCII,
            'toUnicode': toUnicode
          };
          /**
           * URI.js
           *
           * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
           * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
           * @see http://github.com/garycourt/uri-js
           */

          /**
           * Copyright 2011 Gary Court. All rights reserved.
           *
           * Redistribution and use in source and binary forms, with or without modification, are
           * permitted provided that the following conditions are met:
           *
           *    1. Redistributions of source code must retain the above copyright notice, this list of
           *       conditions and the following disclaimer.
           *
           *    2. Redistributions in binary form must reproduce the above copyright notice, this list
           *       of conditions and the following disclaimer in the documentation and/or other materials
           *       provided with the distribution.
           *
           * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
           * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
           * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
           * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
           * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
           * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
           * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
           * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
           * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
           *
           * The views and conclusions contained in the software and documentation are those of the
           * authors and should not be interpreted as representing official policies, either expressed
           * or implied, of Gary Court.
           */

          var SCHEMES = {};

          function pctEncChar(chr) {
            var c = chr.charCodeAt(0);
            var e = void 0;
            if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
            return e;
          }

          function pctDecChars(str) {
            var newStr = "";
            var i = 0;
            var il = str.length;

            while (i < il) {
              var c = parseInt(str.substr(i + 1, 2), 16);

              if (c < 128) {
                newStr += String.fromCharCode(c);
                i += 3;
              } else if (c >= 194 && c < 224) {
                if (il - i >= 6) {
                  var c2 = parseInt(str.substr(i + 4, 2), 16);
                  newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
                } else {
                  newStr += str.substr(i, 6);
                }

                i += 6;
              } else if (c >= 224) {
                if (il - i >= 9) {
                  var _c = parseInt(str.substr(i + 4, 2), 16);

                  var c3 = parseInt(str.substr(i + 7, 2), 16);
                  newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
                } else {
                  newStr += str.substr(i, 9);
                }

                i += 9;
              } else {
                newStr += str.substr(i, 3);
                i += 3;
              }
            }

            return newStr;
          }

          function _normalizeComponentEncoding(components, protocol) {
            function decodeUnreserved(str) {
              var decStr = pctDecChars(str);
              return !decStr.match(protocol.UNRESERVED) ? str : decStr;
            }

            if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
            if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
            if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
            if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
            if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
            if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
            return components;
          }

          function _stripLeadingZeros(str) {
            return str.replace(/^0*(.*)/, "$1") || "0";
          }

          function _normalizeIPv4(host, protocol) {
            var matches = host.match(protocol.IPV4ADDRESS) || [];

            var _matches = slicedToArray(matches, 2),
                address = _matches[1];

            if (address) {
              return address.split(".").map(_stripLeadingZeros).join(".");
            } else {
              return host;
            }
          }

          function _normalizeIPv6(host, protocol) {
            var matches = host.match(protocol.IPV6ADDRESS) || [];

            var _matches2 = slicedToArray(matches, 3),
                address = _matches2[1],
                zone = _matches2[2];

            if (address) {
              var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
                  _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
                  last = _address$toLowerCase$2[0],
                  first = _address$toLowerCase$2[1];

              var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
              var lastFields = last.split(":").map(_stripLeadingZeros);
              var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
              var fieldCount = isLastFieldIPv4Address ? 7 : 8;
              var lastFieldsStart = lastFields.length - fieldCount;
              var fields = Array(fieldCount);

              for (var x = 0; x < fieldCount; ++x) {
                fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
              }

              if (isLastFieldIPv4Address) {
                fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
              }

              var allZeroFields = fields.reduce(function (acc, field, index) {
                if (!field || field === "0") {
                  var lastLongest = acc[acc.length - 1];

                  if (lastLongest && lastLongest.index + lastLongest.length === index) {
                    lastLongest.length++;
                  } else {
                    acc.push({
                      index: index,
                      length: 1
                    });
                  }
                }

                return acc;
              }, []);
              var longestZeroFields = allZeroFields.sort(function (a, b) {
                return b.length - a.length;
              })[0];
              var newHost = void 0;

              if (longestZeroFields && longestZeroFields.length > 1) {
                var newFirst = fields.slice(0, longestZeroFields.index);
                var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
                newHost = newFirst.join(":") + "::" + newLast.join(":");
              } else {
                newHost = fields.join(":");
              }

              if (zone) {
                newHost += "%" + zone;
              }

              return newHost;
            } else {
              return host;
            }
          }

          var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
          var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;

          function parse(uriString) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var components = {};
            var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
            if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
            var matches = uriString.match(URI_PARSE);

            if (matches) {
              if (NO_MATCH_IS_UNDEFINED) {
                //store each component
                components.scheme = matches[1];
                components.userinfo = matches[3];
                components.host = matches[4];
                components.port = parseInt(matches[5], 10);
                components.path = matches[6] || "";
                components.query = matches[7];
                components.fragment = matches[8]; //fix port number

                if (isNaN(components.port)) {
                  components.port = matches[5];
                }
              } else {
                //IE FIX for improper RegExp matching
                //store each component
                components.scheme = matches[1] || undefined;
                components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
                components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
                components.port = parseInt(matches[5], 10);
                components.path = matches[6] || "";
                components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
                components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined; //fix port number

                if (isNaN(components.port)) {
                  components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
                }
              }

              if (components.host) {
                //normalize IP hosts
                components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
              } //determine reference type


              if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
                components.reference = "same-document";
              } else if (components.scheme === undefined) {
                components.reference = "relative";
              } else if (components.fragment === undefined) {
                components.reference = "absolute";
              } else {
                components.reference = "uri";
              } //check for reference errors


              if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
                components.error = components.error || "URI is not a " + options.reference + " reference.";
              } //find scheme handler


              var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()]; //check if scheme can't handle IRIs

              if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
                //if host component is a domain name
                if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
                  //convert Unicode IDN -> ASCII IDN
                  try {
                    components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                  } catch (e) {
                    components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                  }
                } //convert IRI -> URI


                _normalizeComponentEncoding(components, URI_PROTOCOL);
              } else {
                //normalize encodings
                _normalizeComponentEncoding(components, protocol);
              } //perform scheme specific parsing


              if (schemeHandler && schemeHandler.parse) {
                schemeHandler.parse(components, options);
              }
            } else {
              components.error = components.error || "URI can not be parsed.";
            }

            return components;
          }

          function _recomposeAuthority(components, options) {
            var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
            var uriTokens = [];

            if (components.userinfo !== undefined) {
              uriTokens.push(components.userinfo);
              uriTokens.push("@");
            }

            if (components.host !== undefined) {
              //normalize IP hosts, add brackets and escape zone separator for IPv6
              uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
                return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
              }));
            }

            if (typeof components.port === "number") {
              uriTokens.push(":");
              uriTokens.push(components.port.toString(10));
            }

            return uriTokens.length ? uriTokens.join("") : undefined;
          }

          var RDS1 = /^\.\.?\//;
          var RDS2 = /^\/\.(\/|$)/;
          var RDS3 = /^\/\.\.(\/|$)/;
          var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;

          function removeDotSegments(input) {
            var output = [];

            while (input.length) {
              if (input.match(RDS1)) {
                input = input.replace(RDS1, "");
              } else if (input.match(RDS2)) {
                input = input.replace(RDS2, "/");
              } else if (input.match(RDS3)) {
                input = input.replace(RDS3, "/");
                output.pop();
              } else if (input === "." || input === "..") {
                input = "";
              } else {
                var im = input.match(RDS5);

                if (im) {
                  var s = im[0];
                  input = input.slice(s.length);
                  output.push(s);
                } else {
                  throw new Error("Unexpected dot segment condition");
                }
              }
            }

            return output.join("");
          }

          function serialize(components) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
            var uriTokens = []; //find scheme handler

            var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()]; //perform scheme specific serialization

            if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);

            if (components.host) {
              //if host component is an IPv6 address
              if (protocol.IPV6ADDRESS.test(components.host)) ; //TODO: normalize IPv6 address as per RFC 5952
              //if host component is a domain name
              else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
                  //convert IDN via punycode
                  try {
                    components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
                  } catch (e) {
                    components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                  }
                }
            } //normalize encoding


            _normalizeComponentEncoding(components, protocol);

            if (options.reference !== "suffix" && components.scheme) {
              uriTokens.push(components.scheme);
              uriTokens.push(":");
            }

            var authority = _recomposeAuthority(components, options);

            if (authority !== undefined) {
              if (options.reference !== "suffix") {
                uriTokens.push("//");
              }

              uriTokens.push(authority);

              if (components.path && components.path.charAt(0) !== "/") {
                uriTokens.push("/");
              }
            }

            if (components.path !== undefined) {
              var s = components.path;

              if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
                s = removeDotSegments(s);
              }

              if (authority === undefined) {
                s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
              }

              uriTokens.push(s);
            }

            if (components.query !== undefined) {
              uriTokens.push("?");
              uriTokens.push(components.query);
            }

            if (components.fragment !== undefined) {
              uriTokens.push("#");
              uriTokens.push(components.fragment);
            }

            return uriTokens.join(""); //merge tokens into a string
          }

          function resolveComponents(base, relative) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var skipNormalization = arguments[3];
            var target = {};

            if (!skipNormalization) {
              base = parse(serialize(base, options), options); //normalize base components

              relative = parse(serialize(relative, options), options); //normalize relative components
            }

            options = options || {};

            if (!options.tolerant && relative.scheme) {
              target.scheme = relative.scheme; //target.authority = relative.authority;

              target.userinfo = relative.userinfo;
              target.host = relative.host;
              target.port = relative.port;
              target.path = removeDotSegments(relative.path || "");
              target.query = relative.query;
            } else {
              if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
                //target.authority = relative.authority;
                target.userinfo = relative.userinfo;
                target.host = relative.host;
                target.port = relative.port;
                target.path = removeDotSegments(relative.path || "");
                target.query = relative.query;
              } else {
                if (!relative.path) {
                  target.path = base.path;

                  if (relative.query !== undefined) {
                    target.query = relative.query;
                  } else {
                    target.query = base.query;
                  }
                } else {
                  if (relative.path.charAt(0) === "/") {
                    target.path = removeDotSegments(relative.path);
                  } else {
                    if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                      target.path = "/" + relative.path;
                    } else if (!base.path) {
                      target.path = relative.path;
                    } else {
                      target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                    }

                    target.path = removeDotSegments(target.path);
                  }

                  target.query = relative.query;
                } //target.authority = base.authority;


                target.userinfo = base.userinfo;
                target.host = base.host;
                target.port = base.port;
              }

              target.scheme = base.scheme;
            }

            target.fragment = relative.fragment;
            return target;
          }

          function resolve(baseURI, relativeURI, options) {
            var schemelessOptions = assign({
              scheme: 'null'
            }, options);
            return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
          }

          function normalize(uri, options) {
            if (typeof uri === "string") {
              uri = serialize(parse(uri, options), options);
            } else if (typeOf(uri) === "object") {
              uri = parse(serialize(uri, options), options);
            }

            return uri;
          }

          function equal(uriA, uriB, options) {
            if (typeof uriA === "string") {
              uriA = serialize(parse(uriA, options), options);
            } else if (typeOf(uriA) === "object") {
              uriA = serialize(uriA, options);
            }

            if (typeof uriB === "string") {
              uriB = serialize(parse(uriB, options), options);
            } else if (typeOf(uriB) === "object") {
              uriB = serialize(uriB, options);
            }

            return uriA === uriB;
          }

          function escapeComponent(str, options) {
            return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
          }

          function unescapeComponent(str, options) {
            return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
          }

          var handler = {
            scheme: "http",
            domainHost: true,
            parse: function parse(components, options) {
              //report missing host
              if (!components.host) {
                components.error = components.error || "HTTP URIs must have a host.";
              }

              return components;
            },
            serialize: function serialize(components, options) {
              //normalize the default port
              if (components.port === (String(components.scheme).toLowerCase() !== "https" ? 80 : 443) || components.port === "") {
                components.port = undefined;
              } //normalize the empty path


              if (!components.path) {
                components.path = "/";
              } //NOTE: We do not parse query strings for HTTP URIs
              //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
              //and not the HTTP spec.


              return components;
            }
          };
          var handler$1 = {
            scheme: "https",
            domainHost: handler.domainHost,
            parse: handler.parse,
            serialize: handler.serialize
          };
          var O = {};

          var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + ( "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" ) + "]";
          var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive

          var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
          //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
          //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
          //const WSP$$ = "[\\x20\\x09]";
          //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
          //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
          //const VCHAR$$ = "[\\x21-\\x7E]";
          //const WSP$$ = "[\\x20\\x09]";
          //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
          //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
          //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
          //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');

          var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
          var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
          var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
          var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
          var UNRESERVED = new RegExp(UNRESERVED$$, "g");
          var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
          var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
          var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
          var NOT_HFVALUE = NOT_HFNAME;

          function decodeUnreserved(str) {
            var decStr = pctDecChars(str);
            return !decStr.match(UNRESERVED) ? str : decStr;
          }

          var handler$2 = {
            scheme: "mailto",
            parse: function parse$$1(components, options) {
              var mailtoComponents = components;
              var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
              mailtoComponents.path = undefined;

              if (mailtoComponents.query) {
                var unknownHeaders = false;
                var headers = {};
                var hfields = mailtoComponents.query.split("&");

                for (var x = 0, xl = hfields.length; x < xl; ++x) {
                  var hfield = hfields[x].split("=");

                  switch (hfield[0]) {
                    case "to":
                      var toAddrs = hfield[1].split(",");

                      for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                        to.push(toAddrs[_x]);
                      }

                      break;

                    case "subject":
                      mailtoComponents.subject = unescapeComponent(hfield[1], options);
                      break;

                    case "body":
                      mailtoComponents.body = unescapeComponent(hfield[1], options);
                      break;

                    default:
                      unknownHeaders = true;
                      headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                      break;
                  }
                }

                if (unknownHeaders) mailtoComponents.headers = headers;
              }

              mailtoComponents.query = undefined;

              for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
                var addr = to[_x2].split("@");

                addr[0] = unescapeComponent(addr[0]);

                if (!options.unicodeSupport) {
                  //convert Unicode IDN -> ASCII IDN
                  try {
                    addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                  } catch (e) {
                    mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                  }
                } else {
                  addr[1] = unescapeComponent(addr[1], options).toLowerCase();
                }

                to[_x2] = addr.join("@");
              }

              return mailtoComponents;
            },
            serialize: function serialize$$1(mailtoComponents, options) {
              var components = mailtoComponents;
              var to = toArray(mailtoComponents.to);

              if (to) {
                for (var x = 0, xl = to.length; x < xl; ++x) {
                  var toAddr = String(to[x]);
                  var atIdx = toAddr.lastIndexOf("@");
                  var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                  var domain = toAddr.slice(atIdx + 1); //convert IDN via punycode

                  try {
                    domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                  } catch (e) {
                    components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                  }

                  to[x] = localPart + "@" + domain;
                }

                components.path = to.join(",");
              }

              var headers = mailtoComponents.headers = mailtoComponents.headers || {};
              if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
              if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
              var fields = [];

              for (var name in headers) {
                if (headers[name] !== O[name]) {
                  fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
                }
              }

              if (fields.length) {
                components.query = fields.join("&");
              }

              return components;
            }
          };
          var URN_PARSE = /^([^\:]+)\:(.*)/; //RFC 2141

          var handler$3 = {
            scheme: "urn",
            parse: function parse$$1(components, options) {
              var matches = components.path && components.path.match(URN_PARSE);
              var urnComponents = components;

              if (matches) {
                var scheme = options.scheme || urnComponents.scheme || "urn";
                var nid = matches[1].toLowerCase();
                var nss = matches[2];
                var urnScheme = scheme + ":" + (options.nid || nid);
                var schemeHandler = SCHEMES[urnScheme];
                urnComponents.nid = nid;
                urnComponents.nss = nss;
                urnComponents.path = undefined;

                if (schemeHandler) {
                  urnComponents = schemeHandler.parse(urnComponents, options);
                }
              } else {
                urnComponents.error = urnComponents.error || "URN can not be parsed.";
              }

              return urnComponents;
            },
            serialize: function serialize$$1(urnComponents, options) {
              var scheme = options.scheme || urnComponents.scheme || "urn";
              var nid = urnComponents.nid;
              var urnScheme = scheme + ":" + (options.nid || nid);
              var schemeHandler = SCHEMES[urnScheme];

              if (schemeHandler) {
                urnComponents = schemeHandler.serialize(urnComponents, options);
              }

              var uriComponents = urnComponents;
              var nss = urnComponents.nss;
              uriComponents.path = (nid || options.nid) + ":" + nss;
              return uriComponents;
            }
          };
          var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/; //RFC 4122

          var handler$4 = {
            scheme: "urn:uuid",
            parse: function parse(urnComponents, options) {
              var uuidComponents = urnComponents;
              uuidComponents.uuid = uuidComponents.nss;
              uuidComponents.nss = undefined;

              if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
                uuidComponents.error = uuidComponents.error || "UUID is not valid.";
              }

              return uuidComponents;
            },
            serialize: function serialize(uuidComponents, options) {
              var urnComponents = uuidComponents; //normalize UUID

              urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
              return urnComponents;
            }
          };
          SCHEMES[handler.scheme] = handler;
          SCHEMES[handler$1.scheme] = handler$1;
          SCHEMES[handler$2.scheme] = handler$2;
          SCHEMES[handler$3.scheme] = handler$3;
          SCHEMES[handler$4.scheme] = handler$4;
          exports.SCHEMES = SCHEMES;
          exports.pctEncChar = pctEncChar;
          exports.pctDecChars = pctDecChars;
          exports.parse = parse;
          exports.removeDotSegments = removeDotSegments;
          exports.serialize = serialize;
          exports.resolveComponents = resolveComponents;
          exports.resolve = resolve;
          exports.normalize = normalize;
          exports.equal = equal;
          exports.escapeComponent = escapeComponent;
          exports.unescapeComponent = unescapeComponent;
          Object.defineProperty(exports, '__esModule', {
            value: true
          });
        });
      });
      unwrapExports(uri_all);

      var dataUriUtils = createCommonjsModule(function (module, exports) {

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        function decodeImageDataURI(dataURI) {
          var regExMatches = dataURI.match('data:(image/.*);base64,(.*)');

          if (regExMatches === null) {
            return regExMatches;
          }

          var dataBase64 = regExMatches[2];
          var data = Uint8Array.from(atob(dataBase64), function (c) {
            return c.charCodeAt(0);
          });
          return {
            imageType: regExMatches[1],
            dataBase64: dataBase64,
            data: data
          };
        }

        exports.decodeImageDataURI = decodeImageDataURI;
      });
      unwrapExports(dataUriUtils);
      var dataUriUtils_1 = dataUriUtils.decodeImageDataURI;

      var glTFConverter = createCommonjsModule(function (module, exports) {

        var __awaiter = commonjsGlobal && commonjsGlobal.__awaiter || function (thisArg, _arguments, P, generator) {
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
              }).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };

        var __generator = commonjsGlobal && commonjsGlobal.__generator || function (thisArg, body) {
          var _ = {
            label: 0,
            sent: function sent() {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: []
          },
              f,
              y,
              t,
              g;
          return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
          }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
          }), g;

          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }

          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");

            while (_) {
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];

                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;

                  case 4:
                    _.label++;
                    return {
                      value: op[1],
                      done: false
                    };

                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;

                  case 7:
                    op = _.ops.pop();

                    _.trys.pop();

                    continue;

                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }

                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }

                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }

                    if (t && _.label < t[2]) {
                      _.label = t[2];

                      _.ops.push(op);

                      break;
                    }

                    if (t[2]) _.ops.pop();

                    _.trys.pop();

                    continue;
                }

                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            }

            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        };

        var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
          return mod && mod.__esModule ? mod : {
            "default": mod
          };
        };

        var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) {
            if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
          }
          result["default"] = mod;
          return result;
        };

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var parse_data_url_1 = __importDefault(parseDataUrl);

        var URI = __importStar(uri_all); // tslint:disable:no-string-literal


        var AssetFinderKind;

        (function (AssetFinderKind) {
          AssetFinderKind["mesh"] = "meshes";
          AssetFinderKind["animation"] = "animations";
          AssetFinderKind["skeleton"] = "skeletons";
          AssetFinderKind["texture"] = "textures";
          AssetFinderKind["material"] = "materials";
        })(AssetFinderKind = exports.AssetFinderKind || (exports.AssetFinderKind = {}));

        function getPathFromRoot(target, root) {
          var node = target;
          var path = '';

          while (node !== null && node !== root) {
            path = node.name + "/" + path;
            node = node.parent;
          }

          return path.slice(0, -1);
        }

        exports.getPathFromRoot = getPathFromRoot;

        function getWorldTransformUntilRoot(target, root, outPos, outRot, outScale) {
          ccm.math.Vec3.set(outPos, 0, 0, 0);
          ccm.math.Quat.set(outRot, 0, 0, 0, 1);
          ccm.math.Vec3.set(outScale, 1, 1, 1);

          while (target !== root) {
            ccm.math.Vec3.multiply(outPos, outPos, target.scale);
            ccm.math.Vec3.transformQuat(outPos, outPos, target.rotation);
            ccm.math.Vec3.add(outPos, outPos, target.position);
            ccm.math.Quat.multiply(outRot, target.rotation, outRot);
            ccm.math.Vec3.multiply(outScale, target.scale, outScale);
            target = target.parent;
          }
        }

        exports.getWorldTransformUntilRoot = getWorldTransformUntilRoot;
        var GltfAssetKind;

        (function (GltfAssetKind) {
          GltfAssetKind[GltfAssetKind["Node"] = 0] = "Node";
          GltfAssetKind[GltfAssetKind["Mesh"] = 1] = "Mesh";
          GltfAssetKind[GltfAssetKind["Texture"] = 2] = "Texture";
          GltfAssetKind[GltfAssetKind["Skin"] = 3] = "Skin";
          GltfAssetKind[GltfAssetKind["Animation"] = 4] = "Animation";
          GltfAssetKind[GltfAssetKind["Image"] = 5] = "Image";
          GltfAssetKind[GltfAssetKind["Material"] = 6] = "Material";
          GltfAssetKind[GltfAssetKind["Scene"] = 7] = "Scene";
        })(GltfAssetKind || (GltfAssetKind = {}));

        var NormalImportSetting;

        (function (NormalImportSetting) {
          /**
           * 如果模型文件中包含法线信息则导出法线，否则不导出法线。
           */
          NormalImportSetting[NormalImportSetting["optional"] = 0] = "optional";
          /**
           * 不在导出的网格中包含法线信息。
           */

          NormalImportSetting[NormalImportSetting["exclude"] = 1] = "exclude";
          /**
           * 如果模型文件中包含法线信息则导出法线，否则重新计算并导出法线。
           */

          NormalImportSetting[NormalImportSetting["require"] = 2] = "require";
          /**
           * 不管模型文件中是否包含法线信息，直接重新计算并导出法线。
           */

          NormalImportSetting[NormalImportSetting["recalculate"] = 3] = "recalculate";
        })(NormalImportSetting = exports.NormalImportSetting || (exports.NormalImportSetting = {}));

        var TangentImportSetting;

        (function (TangentImportSetting) {
          /**
           * 不在导出的网格中包含正切信息。
           */
          TangentImportSetting[TangentImportSetting["exclude"] = 0] = "exclude";
          /**
           * 如果模型文件中包含正切信息则导出正切，否则不导出正切。
           */

          TangentImportSetting[TangentImportSetting["optional"] = 1] = "optional";
          /**
           * 如果模型文件中包含正切信息则导出正切，否则重新计算并导出正切。
           */

          TangentImportSetting[TangentImportSetting["require"] = 2] = "require";
          /**
           * 不管模型文件中是否包含正切信息，直接重新计算并导出正切。
           */

          TangentImportSetting[TangentImportSetting["recalculate"] = 3] = "recalculate";
        })(TangentImportSetting = exports.TangentImportSetting || (exports.TangentImportSetting = {}));

        var GltfSemantics = {
          normal: {
            name: "NORMAL"
            /* NORMAL */
            ,
            baseType: 5126
            /* FLOAT */
            ,
            type: "VEC3"
            /* VEC3 */

          },
          tangent: {
            name: "TANGENT"
            /* TANGENT */
            ,
            baseType: 5126
            /* FLOAT */
            ,
            type: "VEC3"
            /* VEC3 */

          }
        };
        var v3_1 = new ccm.math.Vec3();
        var qt_1 = new ccm.math.Quat();
        var v3_2 = new ccm.math.Vec3();
        var nd_1 = new ccm.Node();

        function getNodePathByTargetName(root, name, path) {
          for (var index = 0; index < root.children.length; index++) {
            var n = root.children[index];
            var pathN = path + "/" + n.name;

            if (n.name === name) {
              return pathN;
            } else {
              var path1 = getNodePathByTargetName(n, name, pathN);

              if (path1 !== pathN) {
                return path1;
              }
            }
          }

          return path;
        }

        exports.getNodePathByTargetName = getNodePathByTargetName;

        function do_create(sceneNode, out, model, path) {
          if (model.parent === sceneNode) {
            return;
          }

          var socket = out.find(function (s) {
            return s.path === path;
          });

          if (!socket) {
            var target = new ccm.Node();
            target.name = model.parent.name + " Socket";
            target.parent = sceneNode;
            getWorldTransformUntilRoot(model.parent, sceneNode, v3_1, qt_1, v3_2);
            target.setPosition(v3_1);
            target.setRotation(qt_1);
            target.setScale(v3_2);
            socket = new ccm.SkeletalAnimationComponent.Socket(path, target);
            out.push(socket);
          }

          model.parent = socket.target;
        }

        function createSockets(sceneNode, specialNames) {
          if (!sceneNode.getComponentInChildren(ccm.SkinningModelComponent)) {
            return [];
          }

          var renderables = sceneNode.getComponentsInChildren(ccm.RenderableComponent);
          var sockets = [];
          var specialCases = specialNames ? new RegExp(specialNames.reduce(function (acc, cur) {
            return acc ? acc + "|" + cur : cur;
          }, '')) : null;

          for (var _i = 0, renderables_1 = renderables; _i < renderables_1.length; _i++) {
            var renderable = renderables_1[_i]; // general cases

            var model = renderable.node; // handle skinning models

            if (renderable instanceof ccm.SkinningModelComponent) {
              var skinningRoot = renderable._skinningRoot;

              if (skinningRoot === sceneNode) {
                continue;
              }

              if (skinningRoot) {
                model = skinningRoot;
              }
            } // skip special cases


            var path = getPathFromRoot(model.parent, sceneNode);

            if (specialCases && specialCases.test(path)) {
              continue;
            }

            do_create(sceneNode, sockets, model, path);
          }

          if (specialNames) {
            var targets = specialNames.map(function (n) {
              return getNodePathByTargetName(sceneNode, n, '');
            });

            for (var i = 0; i < targets.length; i++) {
              var target = targets[i];

              if (!target) {
                continue;
              }

              var path = target.slice(1, -specialNames[i].length - 1);
              var model = sceneNode.getChildByPath(target);

              if (model) {
                do_create(sceneNode, sockets, model, path);
              }
            }
          }

          return sockets;
        }

        exports.createSockets = createSockets;

        var GltfConverter =
        /** @class */
        function () {
          function GltfConverter(_gltf, _buffers, _url) {
            var _this = this;

            this._gltf = _gltf;
            this._buffers = _buffers;
            this._url = _url;
            this._nodePathTable = null;
            /**
             * The parent index of each node.
             */

            this._parents = [];
            /**
             * The root node of each skin.
             */

            this._skinRoots = []; // We require the scene graph is a disjoint union of strict trees.
            // This is also the requirement in glTf 2.0.

            if (this._gltf.nodes !== undefined) {
              this._parents = new Array(this._gltf.nodes.length).fill(-1);

              this._gltf.nodes.forEach(function (node, iNode) {
                if (node.children !== undefined) {
                  for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                    var iChildNode = _a[_i];
                    _this._parents[iChildNode] = iNode;
                  }
                }
              });
            }

            if (this._gltf.skins) {
              this._skinRoots = new Array(this._gltf.skins.length).fill(-1);
            }

            this._nodePathTable = this._createNodePathTable();
          }

          Object.defineProperty(GltfConverter.prototype, "gltf", {
            get: function get() {
              return this._gltf;
            },
            enumerable: true,
            configurable: true
          });
          Object.defineProperty(GltfConverter.prototype, "url", {
            get: function get() {
              return this._url;
            },
            enumerable: true,
            configurable: true
          });

          GltfConverter.prototype.createMesh = function (iGltfMesh, options) {
            var _this = this;

            var gltfMesh = this._gltf.meshes[iGltfMesh];
            var bufferBlob = new BufferBlob();
            var vertexBundles = new Array();
            var minPosition = new ccm.math.Vec3(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
            var maxPosition = new ccm.math.Vec3(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
            var targetNodeIdx = -1;
            var targetNode = null;
            var targetCCNode = null;
            var idxMap = [];

            if (this._gltf.nodes) {
              targetNodeIdx = this._gltf.nodes.findIndex(function (n) {
                return n.mesh === iGltfMesh;
              });
              targetNode = this._gltf.nodes[targetNodeIdx];
            }

            if (targetNode && targetNode.skin !== undefined) {
              this.createSkeleton(targetNode.skin, idxMap);
              targetCCNode = this._createEmptyNode(targetNodeIdx);
            }

            var primitives = gltfMesh.primitives.map(function (gltfPrimitive, primitiveIndex) {
              var _a = _this._readPrimitiveVertices(gltfPrimitive, minPosition, maxPosition, options, targetCCNode, idxMap),
                  vertexBuffer = _a.vertexBuffer,
                  vertexCount = _a.vertexCount,
                  vertexStride = _a.vertexStride,
                  formats = _a.formats,
                  posBuffer = _a.posBuffer,
                  posBufferAlign = _a.posBufferAlign;

              bufferBlob.setNextAlignment(0);
              vertexBundles.push({
                view: {
                  offset: bufferBlob.getLength(),
                  length: vertexBuffer.byteLength,
                  count: vertexCount,
                  stride: vertexStride
                },
                attributes: formats
              });
              bufferBlob.addBuffer(vertexBuffer);
              var primitive = {
                primitiveMode: _this._getPrimitiveMode(gltfPrimitive.mode),
                vertexBundelIndices: [primitiveIndex]
              }; // geometric info for raycast purposes

              if (primitive.primitiveMode >= ccm.GFXPrimitiveMode.TRIANGLE_LIST) {
                bufferBlob.setNextAlignment(posBufferAlign);
                primitive.geometricInfo = {
                  view: {
                    offset: bufferBlob.getLength(),
                    length: posBuffer.byteLength,
                    count: posBuffer.byteLength / posBufferAlign,
                    stride: posBufferAlign
                  }
                };
                bufferBlob.addBuffer(posBuffer);
              }

              if (gltfPrimitive.indices !== undefined) {
                var indicesAccessor = _this._gltf.accessors[gltfPrimitive.indices];

                var indexStride = _this._getBytesPerAttribute(indicesAccessor);

                var indicesData = new ArrayBuffer(indexStride * indicesAccessor.count);

                _this._readAccessor(indicesAccessor, new DataView(indicesData));

                bufferBlob.setNextAlignment(indexStride);
                primitive.indexView = {
                  offset: bufferBlob.getLength(),
                  length: indicesData.byteLength,
                  count: indicesAccessor.count,
                  stride: _this._getIndexStride(indicesAccessor.componentType)
                };
                bufferBlob.addBuffer(indicesData);
              }

              return primitive;
            });
            var meshStruct = {
              primitives: primitives,
              vertexBundles: vertexBundles,
              minPosition: minPosition,
              maxPosition: maxPosition
            };
            var mesh = new ccm.Mesh();
            mesh.name = this._getGltfXXName(GltfAssetKind.Mesh, iGltfMesh);
            mesh.assign(meshStruct, bufferBlob.getCombined());
            return mesh;
          };

          GltfConverter.prototype.createSkeleton = function (iGltfSkin, sortMap) {
            var gltfSkin = this._gltf.skins[iGltfSkin];
            var skeleton = new ccm.Skeleton();
            skeleton.name = this._getGltfXXName(GltfAssetKind.Skin, iGltfSkin);
            skeleton._joints = gltfSkin.joints.map(this._getNodePath.bind(this));

            if (gltfSkin.inverseBindMatrices !== undefined) {
              var inverseBindMatricesAccessor = this._gltf.accessors[gltfSkin.inverseBindMatrices];

              if (inverseBindMatricesAccessor.componentType !== WebGLRenderingContext.FLOAT || inverseBindMatricesAccessor.type !== 'MAT4') {
                throw new Error("The inverse bind matrix should be floating-point 4x4 matrix.");
              }

              var m = new ccm.math.Mat4();

              var targetIdx = this._gltf.nodes.findIndex(function (n) {
                return n.skin === iGltfSkin;
              });

              var target = targetIdx >= 0 ? this._createEmptyNode(targetIdx) : nd_1;
              ccm.math.Mat4.invert(m, ccm.math.Mat4.fromRTS(m, target._lrot, target._lpos, target._lscale));
              var bindposes = new Array(gltfSkin.joints.length);
              var data = new Float32Array(bindposes.length * 16);

              this._readAccessor(inverseBindMatricesAccessor, createDataViewFromTypedArray(data));

              for (var i = 0; i < bindposes.length; ++i) {
                bindposes[i] = new ccm.math.Mat4(data[16 * i + 0], data[16 * i + 1], data[16 * i + 2], data[16 * i + 3], data[16 * i + 4], data[16 * i + 5], data[16 * i + 6], data[16 * i + 7], data[16 * i + 8], data[16 * i + 9], data[16 * i + 10], data[16 * i + 11], data[16 * i + 12], data[16 * i + 13], data[16 * i + 14], data[16 * i + 15]);
                ccm.math.Mat4.multiply(bindposes[i], bindposes[i], m); // for local transforms are already pre applied
              }

              skeleton._bindposes = bindposes;
            }
            /* [Optimization.1a] sort the joints array to be more cache-friendly *
            const idxMap = [...Array(joints.length).keys()].sort((a, b) => {
                if (joints[a] > joints[b]) { return 1; }
                if (joints[a] < joints[b]) { return -1; }
                return 0;
            });
            skeleton._joints = joints.map((_, idx, arr) => arr[idxMap[idx]]);
            if (skeleton._bindposes) { skeleton._bindposes = bindposes.map((_, idx, arr) => arr[idxMap[idx]]); }
            if (sortMap) { for (const i of idxMap) { sortMap.push(i); } }
            /* */


            return skeleton;
          };

          GltfConverter.prototype.getAnimationDuration = function (iGltfAnimation) {
            var _this = this;

            var gltfAnimation = this._gltf.animations[iGltfAnimation];
            var duration = 0;
            gltfAnimation.channels.forEach(function (gltfChannel) {
              var targetNode = gltfChannel.target.node;

              if (targetNode === undefined) {
                // When node isn't defined, channel should be ignored.
                return;
              }

              var sampler = gltfAnimation.samplers[gltfChannel.sampler];
              var inputAccessor = _this._gltf.accessors[sampler.input];
              var channelDuration = inputAccessor.max !== undefined && inputAccessor.max.length === 1 ? Math.fround(inputAccessor.max[0]) : 0;
              duration = Math.max(channelDuration, duration);
            });
            return duration;
          };

          GltfConverter.prototype.createAnimation = function (iGltfAnimation, span) {
            var _this = this;

            var gltfAnimation = this._gltf.animations[iGltfAnimation];
            var curveDatas = {};

            var getCurveData = function getCurveData(node) {
              var path = _this._getNodePath(node);

              var curveData = curveDatas[path];

              if (curveData === undefined) {
                curveData = {};
                curveDatas[path] = curveData;
              }

              return curveData;
            };

            var duration = 0;
            var keys = new Array();
            var keysSplitInfos = new Array();

            var floatingIndexOf = function floatingIndexOf(value, values) {
              var iPast = values.findIndex(function (v) {
                return v >= value;
              });

              if (iPast < 0) {
                return values.length - 1;
              } else if (iPast === 0) {
                return 0;
              } else {
                var iBefore = iPast - 1;
                var before = values[iBefore];
                var past = values[iPast];
                var ratio = (value - before) / (past - before);
                return iBefore + ratio;
              }
            };

            var keysMap = new Map();

            var getKeysIndex = function getKeysIndex(iInputAccessor) {
              var i = keysMap.get(iInputAccessor);

              if (i === undefined) {
                var inputAccessor = _this._gltf.accessors[iInputAccessor];

                var inputs = _this._readAccessorIntoArray(inputAccessor);

                i = keys.length;
                var intputArray = Array.from(inputs);

                if (span) {
                  var splitInfo = {
                    from: floatingIndexOf(span.from, intputArray),
                    to: floatingIndexOf(span.to, intputArray)
                  };
                  keysSplitInfos.push(splitInfo);

                  var splitKeys = _this._split(intputArray, splitInfo.from, splitInfo.to, function (from, to, ratio) {
                    return from + (to - from) * ratio;
                  });

                  keys.push(splitKeys.map(function (splitKey) {
                    return splitKey - span.from;
                  }));
                } else {
                  keys.push(intputArray);
                }

                keysMap.set(iInputAccessor, i);
              }

              return i;
            };

            gltfAnimation.channels.forEach(function (gltfChannel) {
              var targetNode = gltfChannel.target.node;

              if (targetNode === undefined) {
                // When node isn't defined, channel should be ignored.
                return;
              }

              var curveData = getCurveData(targetNode);
              var sampler = gltfAnimation.samplers[gltfChannel.sampler];
              var iKeys = getKeysIndex(sampler.input);
              var keysSplitInfo = span ? keysSplitInfos[iKeys] : undefined;

              _this._gltfChannelToCurveData(gltfAnimation, gltfChannel, curveData, iKeys, keysSplitInfo);

              var inputAccessor = _this._gltf.accessors[sampler.input];
              var channelDuration = inputAccessor.max !== undefined && inputAccessor.max.length === 1 ? Math.fround(inputAccessor.max[0]) : 0;
              duration = Math.max(channelDuration, duration);
            });

            if (this._gltf.nodes) {
              var r_1 = new ccm.math.Quat();
              var t_1 = new ccm.math.Vec3();
              var s_1 = new ccm.math.Vec3();

              this._gltf.nodes.forEach(function (node, nodeIndex) {
                var curveData = getCurveData(nodeIndex);
                curveData.props = curveData.props || {};
                var m;

                if (node.matrix) {
                  m = _this._readNodeMatrix(node.matrix);
                  ccm.math.Mat4.toRTS(m, r_1, t_1, s_1);
                }

                if (!Reflect.has(curveData.props, 'position')) {
                  var v = new ccm.math.Vec3();

                  if (node.translation) {
                    ccm.math.Vec3.set(v, node.translation[0], node.translation[1], node.translation[2]);
                  } else if (m) {
                    ccm.math.Vec3.copy(v, t_1);
                  }

                  curveData.props.position = {
                    blending: 'additive3D',
                    keys: -1,
                    values: [v]
                  };
                }

                if (!Reflect.has(curveData.props, 'scale')) {
                  var v = new ccm.math.Vec3(1, 1, 1);

                  if (node.scale) {
                    ccm.math.Vec3.set(v, node.scale[0], node.scale[1], node.scale[2]);
                  } else if (m) {
                    ccm.math.Vec3.copy(v, s_1);
                  }

                  curveData.props.scale = {
                    blending: 'additive3D',
                    keys: -1,
                    values: [v]
                  };
                }

                if (!Reflect.has(curveData.props, 'rotation')) {
                  var v = new ccm.math.Quat();

                  if (node.rotation) {
                    _this._getNodeRotation(node.rotation, v);
                  } else if (m) {
                    ccm.math.Quat.copy(v, r_1);
                  }

                  curveData.props.rotation = {
                    blending: 'additiveQuat',
                    keys: -1,
                    values: [v]
                  };
                }
              });
            }

            var animationClip = new ccm.SkeletalAnimationClip();
            animationClip.name = this._getGltfXXName(GltfAssetKind.Animation, iGltfAnimation);
            animationClip.curveDatas = curveDatas;
            animationClip.wrapMode = ccm.AnimationClip.WrapMode.Loop;
            animationClip.duration = span ? span.to - span.from : duration;
            animationClip.keys = keys;
            animationClip.sample = 30;
            return animationClip;
          };

          GltfConverter.prototype.createMaterial = function (iGltfMaterial, gltfAssetFinder, effectGetter) {
            var gltfMaterial = this._gltf.materials[iGltfMaterial];
            var material = new ccm.Material();
            material.name = this._getGltfXXName(GltfAssetKind.Material, iGltfMaterial);
            material._effectAsset = effectGetter('db://internal/effects/builtin-standard.effect');
            var defines = {};
            var props = {};
            var states = {
              rasterizerState: {},
              blendState: {
                targets: [{}]
              },
              depthStencilState: {}
            }; // glTF convention

            defines['OCCLUSION_CHANNEL'] = 'r';
            defines['ROUGHNESS_CHANNEL'] = 'g';
            defines['METALLIC_CHANNEL'] = 'b';
            /* effect asset is actually not available *
            const shaderDefines = material._effectAsset.shaders[0].defines;
            const properties = material._effectAsset.techniques[0].passes[0].properties!;
            /* just manually set them here, remember to sync when these has changed */

            var shaderDefines = [{
              name: 'ROUGHNESS_CHANNEL',
              options: ['r']
            }, {
              name: 'METALLIC_CHANNEL',
              options: ['g']
            }, {
              name: 'OCCLUSION_CHANNEL',
              options: ['b']
            }];
            var properties = {
              pbrParams: {
                value: [0.8, 0.6, 1.0, 1.0]
              },
              pbrScale: {
                value: [1.0, 1.0, 1.0, 1.0]
              },
              albedoScale: {
                value: [1.0, 1.0, 1.0, 1.0]
              }
            };
            /* */

            var _channelMap = {
              r: 0,
              g: 1,
              b: 2,
              a: 3
            };

            var O = _channelMap[shaderDefines.find(function (d) {
              return d.name === 'OCCLUSION_CHANNEL';
            }).options[0]];

            var R = _channelMap[shaderDefines.find(function (d) {
              return d.name === 'ROUGHNESS_CHANNEL';
            }).options[0]];

            var M = _channelMap[shaderDefines.find(function (d) {
              return d.name === 'METALLIC_CHANNEL';
            }).options[0]];

            var pbrParams = properties['pbrParams'].value;
            props['pbrParams'] = new ccm.math.Vec4(pbrParams[O], pbrParams[R], pbrParams[M], pbrParams[3]);
            var pbrScale = properties['pbrScale'].value;
            props['pbrScale'] = new ccm.math.Vec4(pbrScale[O], pbrScale[R], pbrScale[M], pbrScale[3]);
            var albedoScale = properties['albedoScale'].value;
            props['albedoScale'] = new ccm.math.Vec4(albedoScale[0], albedoScale[1], albedoScale[2], albedoScale[3]);

            if (gltfMaterial.pbrMetallicRoughness) {
              var pbrMetallicRoughness = gltfMaterial.pbrMetallicRoughness;

              if (pbrMetallicRoughness.baseColorTexture !== undefined) {
                defines['USE_ALBEDO_MAP'] = true;
                props['albedoMap'] = gltfAssetFinder.find(AssetFinderKind.texture, pbrMetallicRoughness.baseColorTexture.index);
              }

              if (pbrMetallicRoughness.baseColorFactor) {
                var c = pbrMetallicRoughness.baseColorFactor;
                ccm.math.Vec4.set(props['albedoScale'], c[0], c[1], c[2], c[3]);
              }

              if (pbrMetallicRoughness.metallicRoughnessTexture !== undefined) {
                defines['USE_METALLIC_ROUGHNESS_MAP'] = true;
                props['metallicRoughnessMap'] = gltfAssetFinder.find(AssetFinderKind.texture, pbrMetallicRoughness.metallicRoughnessTexture.index);
              }

              if (pbrMetallicRoughness.metallicFactor !== undefined) {
                props['pbrParams'].z = 1;
                props['pbrScale'].z = pbrMetallicRoughness.metallicFactor;
              }

              if (pbrMetallicRoughness.roughnessFactor !== undefined) {
                props['pbrParams'].y = 1;
                props['pbrScale'].y = pbrMetallicRoughness.roughnessFactor;
              }
            }

            if (gltfMaterial.occlusionTexture) {
              var pbrOcclusionTexture = gltfMaterial.occlusionTexture;

              if (pbrOcclusionTexture.index !== undefined) {
                defines['USE_OCCLUSION_MAP'] = true;
                props['occlusionMap'] = gltfAssetFinder.find(AssetFinderKind.texture, pbrOcclusionTexture.index);

                if (pbrOcclusionTexture.strength !== undefined) {
                  props['pbrParams'].x = 1;
                  props['pbrScale'].x = pbrOcclusionTexture.strength; // const strength = pbrOcclusionTexture.strength;
                  // props['pbrScale'].x = strength > 1 ? 1 / strength : 2 - strength;
                }
              }
            }

            if (gltfMaterial.normalTexture !== undefined) {
              var pbrNormalTexture = gltfMaterial.normalTexture;

              if (pbrNormalTexture.index !== undefined) {
                defines['USE_NORMAL_MAP'] = true;
                props['normalMap'] = gltfAssetFinder.find(AssetFinderKind.texture, pbrNormalTexture.index);

                if (pbrNormalTexture.scale !== undefined) {
                  props['pbrScale'].w = pbrNormalTexture.scale;
                }
              }
            }

            if (gltfMaterial.emissiveTexture !== undefined) {
              defines['USE_EMISSIVE_MAP'] = true;
              props['emissiveMap'] = gltfAssetFinder.find(AssetFinderKind.texture, gltfMaterial.emissiveTexture.index);
              props['emissive'] = new ccm.math.Vec4(1, 1, 1, 1);
            }

            if (gltfMaterial.emissiveFactor !== undefined) {
              var v = gltfMaterial.emissiveFactor;
              props['emissiveScale'] = new ccm.math.Vec4(v[0], v[1], v[2], 1);
            }

            if (gltfMaterial.doubleSided) {
              states.rasterizerState.cullMode = ccm.GFXCullMode.NONE;
            }

            switch (gltfMaterial.alphaMode) {
              case 'BLEND':
                var blendState = states.blendState.targets[0];
                blendState.blend = true;
                blendState.blendSrc = ccm.GFXBlendFactor.SRC_ALPHA;
                blendState.blendDst = ccm.GFXBlendFactor.ONE_MINUS_SRC_ALPHA;
                blendState.blendDstAlpha = ccm.GFXBlendFactor.ONE_MINUS_SRC_ALPHA;
                states.depthStencilState.depthWrite = false;
                break;

              case 'MASK':
                var alphaCutoff = gltfMaterial.alphaCutoff === undefined ? 0.5 : gltfMaterial.alphaCutoff;
                defines['USE_ALPHA_TEST'] = true;
                props['albedoScale'].w = alphaCutoff;
                break;

              case 'OPAQUE':
              case undefined:
                break;

              default:
                console.warn("Alpha mode " + gltfMaterial.alphaMode + " " + ("(for material named " + gltfMaterial.name + ", gltf-index " + iGltfMaterial + ") ") + "is not supported currently.");
                break;
            }

            material._defines = [defines];
            material._props = [props];
            material._states = [states];
            return material;
          };

          GltfConverter.prototype.getTextureParameters = function (gltfTexture) {
            var _this = this;

            var convertWrapMode = function convertWrapMode(gltfWrapMode) {
              if (gltfWrapMode === undefined) {
                gltfWrapMode = 10497
                /* __DEFAULT */
                ;
              }

              switch (gltfWrapMode) {
                case 33071
                /* CLAMP_TO_EDGE */
                :
                  return ccm.TextureBase.WrapMode.CLAMP_TO_EDGE;

                case 33648
                /* MIRRORED_REPEAT */
                :
                  return ccm.TextureBase.WrapMode.MIRRORED_REPEAT;

                case 10497
                /* REPEAT */
                :
                  return ccm.TextureBase.WrapMode.REPEAT;

                default:
                  console.error("Unsupported wrapMode: " + gltfWrapMode + ", 'repeat' is used.(in " + _this.url + ")");
                  return ccm.TextureBase.WrapMode.REPEAT;
              }
            };

            var convertMagFilter = function convertMagFilter(gltfFilter) {
              switch (gltfFilter) {
                case 9728
                /* NEAREST */
                :
                  return ccm.TextureBase.Filter.NEAREST;

                case 9729
                /* LINEAR */
                :
                  return ccm.TextureBase.Filter.LINEAR;

                default:
                  console.warn("Unsupported filter: " + gltfFilter + ", 'linear' is used.(in " + _this.url + ")");
                  return ccm.TextureBase.Filter.LINEAR;
              }
            };

            var convertMinFilter = function convertMinFilter(gltfFilter) {
              switch (gltfFilter) {
                case 9728
                /* NEAREST */
                :
                  return [ccm.TextureBase.Filter.NEAREST, ccm.TextureBase.Filter.NONE];

                case 9729
                /* LINEAR */
                :
                  return [ccm.TextureBase.Filter.LINEAR, ccm.TextureBase.Filter.NONE];

                case 9984
                /* NEAREST_MIPMAP_NEAREST */
                :
                  return [ccm.TextureBase.Filter.NEAREST, ccm.TextureBase.Filter.NEAREST];

                case 9985
                /* LINEAR_MIPMAP_NEAREST */
                :
                  return [ccm.TextureBase.Filter.LINEAR, ccm.TextureBase.Filter.NEAREST];

                case 9986
                /* NEAREST_MIPMAP_LINEAR */
                :
                  return [ccm.TextureBase.Filter.NEAREST, ccm.TextureBase.Filter.LINEAR];

                case 9987
                /* LINEAR_MIPMAP_LINEAR */
                :
                  return [ccm.TextureBase.Filter.LINEAR, ccm.TextureBase.Filter.LINEAR];

                default:
                  console.warn("Unsupported filter: " + gltfFilter + ", 'linear' is used.(in " + _this.url + ")");
                  return [ccm.TextureBase.Filter.LINEAR, ccm.TextureBase.Filter.NONE];
              }
            };

            var result = {};

            if (gltfTexture.sampler === undefined) {
              result.wrapModeS = ccm.TextureBase.WrapMode.REPEAT;
              result.wrapModeT = ccm.TextureBase.WrapMode.REPEAT;
            } else {
              var gltfSampler = this._gltf.samplers[gltfTexture.sampler];
              result.wrapModeS = convertWrapMode(gltfSampler.wrapS);
              result.wrapModeT = convertWrapMode(gltfSampler.wrapT);

              if (gltfSampler.magFilter !== undefined) {
                result.magFilter = convertMagFilter(gltfSampler.magFilter);
              }

              if (gltfSampler.minFilter !== undefined) {
                var _a = convertMinFilter(gltfSampler.minFilter),
                    min = _a[0],
                    mip = _a[1];

                result.minFilter = min;
                result.mipFilter = mip;
              }
            }

            return result;
          };

          GltfConverter.prototype.createScene = function (iGltfScene, gltfAssetFinder, withTransform) {
            if (withTransform === void 0) {
              withTransform = true;
            }

            return this._getSceneNode(iGltfScene, gltfAssetFinder, withTransform);
          };

          GltfConverter.prototype.readImage = function (gltfImage, glTFUri, glTFHost) {
            return __awaiter(this, void 0, void 0, function () {
              var imageUri, imageUriAbs, bufferView;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    imageUri = gltfImage.uri;
                    if (!(imageUri !== undefined)) return [3
                    /*break*/
                    , 5];
                    if (!!isDataUri(imageUri)) return [3
                    /*break*/
                    , 2];
                    imageUriAbs = resolveGLTFUri(glTFUri, imageUri);
                    return [4
                    /*yield*/
                    , this._readImageByFsPath(imageUriAbs, glTFHost)];

                  case 1:
                    return [2
                    /*return*/
                    , _a.sent()];

                  case 2:
                    return [4
                    /*yield*/
                    , this._readImageByDataUri(imageUri)];

                  case 3:
                    return [2
                    /*return*/
                    , _a.sent()];

                  case 4:
                    return [3
                    /*break*/
                    , 7];

                  case 5:
                    if (!(gltfImage.bufferView !== undefined)) return [3
                    /*break*/
                    , 7];
                    bufferView = this._gltf.bufferViews[gltfImage.bufferView];
                    return [4
                    /*yield*/
                    , this._readImageInBufferview(bufferView, gltfImage.mimeType)];

                  case 6:
                    return [2
                    /*return*/
                    , _a.sent()];

                  case 7:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          GltfConverter.prototype._getNodeRotation = function (rotation, out) {
            ccm.math.Quat.set(out, rotation[0], rotation[1], rotation[2], rotation[3]);
            ccm.math.Quat.normalize(out, out);
            return out;
          };

          GltfConverter.prototype._gltfChannelToCurveData = function (gltfAnimation, gltfChannel, curveData, iKeys, span) {
            var propName;

            if (gltfChannel.target.path === "translation"
            /* translation */
            ) {
                propName = 'position';
              } else if (gltfChannel.target.path === "rotation"
            /* rotation */
            ) {
                propName = 'rotation';
              } else if (gltfChannel.target.path === "scale"
            /* scale */
            ) {
                propName = 'scale';
              } else {
              console.error("Unsupported channel target path '" + gltfChannel.target.path + "'.(in " + this.url + ")");
              return 0;
            }

            var gltfSampler = gltfAnimation.samplers[gltfChannel.sampler];

            var outputs = this._readAccessorIntoArray(this._gltf.accessors[gltfSampler.output]);

            if (!(outputs instanceof Float32Array)) {
              var normalizedOutput = new Float32Array(outputs.length);

              var normalize = function () {
                if (outputs instanceof Int8Array) {
                  return function (value) {
                    return Math.max(value / 127.0, -1.0);
                  };
                } else if (outputs instanceof Uint8Array) {
                  return function (value) {
                    return value / 255.0;
                  };
                } else if (outputs instanceof Int16Array) {
                  return function (value) {
                    return Math.max(value / 32767.0, -1.0);
                  };
                } else if (outputs instanceof Uint16Array) {
                  return function (value) {
                    return value / 65535.0;
                  };
                } else {
                  return function (value) {
                    return value;
                  };
                }
              }();

              for (var i = 0; i < outputs.length; ++i) {
                normalizedOutput[i] = normalize(outputs[i]); // Do normalize.
              }

              outputs = normalizedOutput;
            }

            var values = [];
            var blendingFunctionName = null;
            var valueConstructor = null;

            if (propName === 'position' || propName === 'scale') {
              valueConstructor = ccm.math.Vec3;
              values = new Array(outputs.length / 3);

              for (var i = 0; i < values.length; ++i) {
                values[i] = new ccm.math.Vec3(outputs[i * 3 + 0], outputs[i * 3 + 1], outputs[i * 3 + 2]);
              }

              blendingFunctionName = 'additive3D';
            } else if (propName === 'rotation') {
              valueConstructor = ccm.math.Quat;
              values = new Array(outputs.length / 4);

              for (var i = 0; i < values.length; ++i) {
                values[i] = new ccm.math.Quat(outputs[i * 4 + 0], outputs[i * 4 + 1], outputs[i * 4 + 2], outputs[i * 4 + 3]);
              }

              blendingFunctionName = 'additiveQuat';
            }

            curveData.props = curveData.props || {};
            var result = {
              keys: iKeys,
              blending: blendingFunctionName,
              values: values
            };

            switch (gltfSampler.interpolation) {
              case 'STEP':
                result.interpolate = false;

                if (span) {
                  result.values = this._split(result.values, span.from, span.to, function (from) {
                    return from;
                  });
                }

                break;

              case 'CUBICSPLINE':
                if (valueConstructor) {
                  result.interpolate = true;
                  var cubicSplineValueConstructor = valueConstructor === ccm.math.Vec3 ? ccm.CubicSplineVec3Value : ccm.CubicSplineQuatValue;
                  var csValues = new Array(result.values.length / 3);

                  for (var i = 0; i < csValues.length; ++i) {
                    csValues[i] = new cubicSplineValueConstructor(result.values[i * 3 + 0], result.values[i * 3 + 1], result.values[i * 3 + 2]);
                  }

                  result.values = csValues;

                  if (span) {
                    console.error("We currently do not support split animation with cubic-spline interpolation.");
                  }
                }

                break;

              case 'LINEAR':
              default:
                result.interpolate = true;

                if (span) {
                  var lerpFx = void 0;

                  switch (propName) {
                    case 'position':
                    case 'scale':
                      lerpFx = function lerpFx(from, to, ratio) {
                        return ccm.math.Vec3.lerp(new ccm.math.Vec3(), from, to, ratio);
                      };

                      break;

                    case 'rotation':
                      lerpFx = function lerpFx(from, to, ratio) {
                        return ccm.math.Quat.lerp(new ccm.math.Quat(), from, to, ratio);
                      };

                      break;

                    default:
                      lerpFx = function lerpFx(from) {
                        return from;
                      };

                  }

                  result.values = this._split(result.values, span.from, span.to, lerpFx);
                }

                break;
            }

            curveData.props[propName] = result;
          };

          GltfConverter.prototype._split = function (array, from, to, lerp) {
            var first;
            var iNext = 0;
            {
              var before = Math.trunc(from);
              var ratio = from - before;

              if (ratio === 0) {
                iNext = before;
              } else {
                var past = before + 1;
                first = lerp(array[before], array[past], ratio);
                iNext = past;
              }
            }
            var last;
            var iEnd = 0;
            {
              var before = Math.trunc(to);
              var ratio = to - before;

              if (ratio === 0) {
                iEnd = before;
              } else {
                var past = before + 1;
                last = lerp(array[before], array[past], ratio);
                iEnd = before;
              }
            }
            var result = array.slice(iNext, iEnd + 1);

            if (first) {
              result.unshift(first);
            }

            if (last) {
              result.push(last);
            }

            return result;
          };

          GltfConverter.prototype._getParent = function (node) {
            return this._parents[node];
          };

          GltfConverter.prototype._commonRoot = function (nodes) {
            var _this = this;

            var minPathLen = Infinity;
            var paths = nodes.map(function (node) {
              var path = [];
              var curNode = node;

              while (curNode >= 0) {
                path.unshift(curNode);
                curNode = _this._getParent(curNode);
              }

              minPathLen = Math.min(minPathLen, path.length);
              return path;
            });

            if (paths.length === 0) {
              return -1;
            }

            var commonPath = [];

            var _loop_1 = function _loop_1(i) {
              var n = paths[0][i];

              if (paths.every(function (path) {
                return path[i] === n;
              })) {
                commonPath.push(n);
              } else {
                return "break";
              }
            };

            for (var i = 0; i < minPathLen; ++i) {
              var state_1 = _loop_1(i);

              if (state_1 === "break") break;
            }

            if (commonPath.length === 0) {
              return -1;
            }

            return commonPath[commonPath.length - 1];
          };

          GltfConverter.prototype._getSkinRoot = function (skin) {
            var result = this._skinRoots[skin];

            if (result < 0) {
              result = this._commonRoot(this._gltf.skins[skin].joints);

              if (result < 0) {
                throw new Error("Non-conforming glTf: skin joints do not have a common root(they are not under same scene).");
              }
            }

            return result;
          };

          GltfConverter.prototype._checkTangentImportSetting = function (setting, gltfPrimitive) {
            var recalcNeeded = setting === TangentImportSetting.recalculate || setting === TangentImportSetting.require && !Reflect.has(gltfPrimitive.attributes, "TANGENT"
            /* TANGENT */
            );

            if (recalcNeeded && !Reflect.has(gltfPrimitive.attributes, "TEXCOORD_0"
            /* TEXCOORD_0 */
            )) {
              console.warn("Tangent caculation is needed but the mesh has no uv information, " + ("the tangent attribute will be excluded therefor.(in glTf file: " + this.url + ")"));
              return TangentImportSetting.exclude;
            } else {
              return setting;
            }
          };

          GltfConverter.prototype._readPrimitiveVertices = function (gltfPrimitive, minPosition, maxPosition, options, targetNode, idxMap) {
            var _this = this;

            options.tangents = this._checkTangentImportSetting(options.tangents, gltfPrimitive);
            var attributeNames = Object.getOwnPropertyNames(gltfPrimitive.attributes); // 统计出所有需要导出的属性，并计算它们在顶点缓冲区中的偏移以及整个顶点缓冲区的容量。

            var vertexStride = 0;
            var vertexCount = 0;
            var recalcNormal = options.normals === NormalImportSetting.recalculate || options.normals === NormalImportSetting.require;
            var recalcTangent = options.tangents === TangentImportSetting.recalculate || options.tangents === TangentImportSetting.require;
            var exportingAttributes = [];

            for (var _i = 0, attributeNames_1 = attributeNames; _i < attributeNames_1.length; _i++) {
              var attributeName = attributeNames_1[_i];

              if (attributeName === 'NORMAL') {
                if (options.normals === NormalImportSetting.exclude || options.normals === NormalImportSetting.recalculate) {
                  continue;
                } else if (options.normals === NormalImportSetting.require) {
                  recalcNormal = false;
                }
              } else if (attributeName === 'TANGENT') {
                if (options.tangents === TangentImportSetting.exclude || options.tangents === TangentImportSetting.recalculate) {
                  continue;
                } else if (options.tangents === TangentImportSetting.require) {
                  recalcTangent = false;
                }
              }

              var attributeAccessor = this._gltf.accessors[gltfPrimitive.attributes[attributeName]];

              var attributeByteLength = this._getBytesPerAttribute(attributeAccessor);

              vertexStride += attributeByteLength; // Validator: MESH_PRIMITIVE_UNEQUAL_ACCESSOR_COUNT

              vertexCount = attributeAccessor.count;
              exportingAttributes.push({
                name: attributeName,
                byteLength: attributeByteLength
              });
            }

            var normalOffset = -1;

            if (recalcNormal) {
              normalOffset = vertexStride;
              vertexStride += 4 * 3;
            }

            var tangentOffset = -1;

            if (recalcTangent) {
              tangentOffset = vertexStride;
              vertexStride += 4 * 4;
            } // 创建顶点缓冲区。


            var vertexBuffer = new ArrayBuffer(vertexStride * vertexCount); // 写入属性。

            var currentByteOffset = 0;
            var posBuffer = new ArrayBuffer(0);
            var posBufferAlign = 0;
            var formats = [];
            var v3_1 = new ccm.math.Vec3();
            var m4_1 = new ccm.math.Mat4();

            for (var _a = 0, exportingAttributes_1 = exportingAttributes; _a < exportingAttributes_1.length; _a++) {
              var exportingAttribute = exportingAttributes_1[_a];
              var attributeName = exportingAttribute.name;
              var attributeAccessor = this._gltf.accessors[gltfPrimitive.attributes[attributeName]];
              var dataView = new DataView(vertexBuffer, currentByteOffset);

              this._readAccessor(attributeAccessor, dataView, vertexStride);

              currentByteOffset += exportingAttribute.byteLength;

              if (attributeName === "POSITION"
              /* POSITION */
              ) {
                  if (attributeAccessor.min) {
                    v3_1.x = Math.fround(attributeAccessor.min[0]);
                    v3_1.y = Math.fround(attributeAccessor.min[1]);
                    v3_1.z = Math.fround(attributeAccessor.min[2]);
                    ccm.math.Vec3.min(minPosition, minPosition, v3_1);
                  }

                  if (attributeAccessor.max) {
                    v3_1.x = Math.fround(attributeAccessor.max[0]);
                    v3_1.y = Math.fround(attributeAccessor.max[1]);
                    v3_1.z = Math.fround(attributeAccessor.max[2]);
                    ccm.math.Vec3.max(maxPosition, maxPosition, v3_1);
                  }

                  var comps = this._getComponentsPerAttribute(attributeAccessor.type);

                  var bytes = this._getBytesPerComponent(attributeAccessor.componentType);

                  posBuffer = new ArrayBuffer(comps * bytes * attributeAccessor.count);
                  posBufferAlign = bytes;

                  this._readAccessor(attributeAccessor, new DataView(posBuffer));
                }

              if (targetNode) {
                // pre-apply local transform to mesh
                if (attributeName === "POSITION"
                /* POSITION */
                ) {
                    var reader = this._getComponentReader(attributeAccessor.componentType);

                    var writer = this._getComponentWriter(attributeAccessor.componentType);

                    ccm.math.Mat4.fromRTS(m4_1, targetNode._lrot, targetNode._lpos, targetNode._lscale);

                    var comps = this._getComponentsPerAttribute(attributeAccessor.type);

                    var bytes = this._getBytesPerComponent(attributeAccessor.componentType);

                    var posBufferView = new DataView(posBuffer);
                    var posBufferStride = comps * bytes;

                    for (var iVert = 0; iVert < vertexCount; ++iVert) {
                      v3_1.x = reader(dataView, vertexStride * iVert);
                      v3_1.y = reader(dataView, vertexStride * iVert + bytes);
                      v3_1.z = reader(dataView, vertexStride * iVert + bytes * 2);
                      ccm.math.Vec3.transformMat4(v3_1, v3_1, m4_1);
                      writer(dataView, vertexStride * iVert, v3_1.x);
                      writer(dataView, vertexStride * iVert + bytes, v3_1.y);
                      writer(dataView, vertexStride * iVert + bytes * 2, v3_1.z);
                      writer(posBufferView, posBufferStride * iVert, v3_1.x);
                      writer(posBufferView, posBufferStride * iVert + bytes, v3_1.y);
                      writer(posBufferView, posBufferStride * iVert + bytes * 2, v3_1.z);
                    }

                    if (attributeAccessor.min || attributeAccessor.max) {
                      var aabb = ccm.geometry.aabb.fromPoints(ccm.geometry.aabb.create(), minPosition, maxPosition);
                      aabb.transform(m4_1, targetNode._lpos, targetNode._lrot, targetNode._lscale, aabb);
                      aabb.getBoundary(minPosition, maxPosition);
                    }
                  }

                if (attributeName === "NORMAL"
                /* NORMAL */
                || attributeName === "TANGENT"
                /* TANGENT */
                ) {
                    var reader = this._getComponentReader(attributeAccessor.componentType);

                    var writer = this._getComponentWriter(attributeAccessor.componentType);

                    for (var iVert = 0; iVert < vertexCount; ++iVert) {
                      v3_1.x = reader(dataView, vertexStride * iVert);
                      v3_1.y = reader(dataView, vertexStride * iVert + 4);
                      v3_1.z = reader(dataView, vertexStride * iVert + 8);
                      ccm.math.Vec3.transformQuat(v3_1, v3_1, targetNode._lrot);
                      writer(dataView, vertexStride * iVert, v3_1.x);
                      writer(dataView, vertexStride * iVert + 4, v3_1.y);
                      writer(dataView, vertexStride * iVert + 8, v3_1.z);
                    }
                  } // normalize weights


                if (attributeName.startsWith('WEIGHTS')) {
                  var ws = new Array(4);

                  var reader = this._getComponentReader(attributeAccessor.componentType);

                  var writer = this._getComponentWriter(attributeAccessor.componentType);

                  for (var iVert = 0; iVert < vertexCount; ++iVert) {
                    var sum = 0.0;

                    for (var iw = 0; iw < 4; ++iw) {
                      var w = reader(dataView, vertexStride * iVert + iw * 4);
                      ws[iw] = w;
                      sum += w;
                    }

                    if (sum !== 1.0 && sum !== 0.0) {
                      for (var iw = 0; iw < 4; ++iw) {
                        var normalizedWeight = ws[iw] / sum;
                        writer(dataView, vertexStride * iVert + iw * 4, normalizedWeight);
                      }
                    }
                  }
                }
                /* [Optimization.1b] map joint indices to match the sorted joints array *
                if (attributeName.startsWith('JOINTS')) {
                    const reader = this._getComponentReader(attributeAccessor.componentType);
                    const writer = this._getComponentWriter(attributeAccessor.componentType);
                    for (let iVert = 0; iVert < vertexCount; ++iVert) {
                        for (let iw = 0; iw < 4; ++iw) {
                            const w = reader(dataView, vertexStride * iVert + iw * 4);
                            writer(dataView, vertexStride * iVert + iw * 4, idxMap[w]);
                        }
                    }
                }
                /* */

              }

              formats.push({
                name: this._getGfxAttributeName(attributeName),
                format: this._getAttributeFormat(attributeAccessor.componentType, attributeAccessor.type),
                isNormalized: attributeAccessor.normalized || false
              });
            }

            var appendVertexStreamF = function appendVertexStreamF(semantic, offset, data) {
              var nComponent = _this._getComponentsPerAttribute(semantic.type);

              var dataView = new DataView(vertexBuffer, offset);

              for (var iVertex = 0; iVertex < vertexCount; ++iVertex) {
                for (var i = 0; i < nComponent; ++i) {
                  var v = data[iVertex * nComponent + i];
                  dataView.setFloat32(iVertex * vertexStride + i * 4, v, ccUseLittleEndian);
                }
              }

              formats.push({
                name: _this._getGfxAttributeName(semantic.name),
                format: _this._getAttributeFormat(5126
                /* FLOAT */
                , semantic.type),
                isNormalized: false
              });
            };

            var primitiveViewer;

            var getPrimitiveViewer = function getPrimitiveViewer() {
              if (primitiveViewer === undefined) {
                primitiveViewer = _this._makePrimitiveViewer(gltfPrimitive);
              }

              return primitiveViewer;
            };

            var normals;

            if (normalOffset >= 0) {
              normals = calculateNormals(getPrimitiveViewer());
              appendVertexStreamF(GltfSemantics.normal, normalOffset, normals); // consistency test
              // if (Reflect.has(gltfPrimitive.attributes, glTF.SemanticName.NORMAL)) {
              //     const embeddedNormalAccessor = this._gltf.accessors![gltfPrimitive.attributes[glTF.SemanticName.NORMAL]];
              //     const embeddedNormals = this._readAccessorIntoArray(embeddedNormalAccessor);
              //     // return embeddedNormals as Float32Array;
              //     for (let i = 0; i < Math.min(normals.length, embeddedNormals.length); ++i) {
              //         if (embeddedNormals[i] !== normals[i]) {
              //             const an = normals[i];
              //             const bn = embeddedNormals[i];
              //             if (Math.abs(an - bn) > 0.01) {
              //                 // debugger;
              //             }
              //         }
              //     }
              // }
            }

            if (tangentOffset >= 0) {
              var tangents = calculateTangents(getPrimitiveViewer(), normals);
              appendVertexStreamF(GltfSemantics.tangent, tangentOffset, tangents);
            }

            return {
              vertexBuffer: vertexBuffer,
              vertexCount: vertexCount,
              vertexStride: vertexStride,
              formats: formats,
              posBuffer: posBuffer,
              posBufferAlign: posBufferAlign
            };
          };

          GltfConverter.prototype._readImageByFsPath = function (imagePath, glTFHost) {
            return __awaiter(this, void 0, void 0, function () {
              var dot, _a, _b, error_1;

              return __generator(this, function (_c) {
                switch (_c.label) {
                  case 0:
                    _c.trys.push([0, 2,, 3]);

                    dot = imagePath.lastIndexOf('.');
                    _a = {};
                    _b = DataView.bind;
                    return [4
                    /*yield*/
                    , glTFHost.readBuffer(imagePath)];

                  case 1:
                    return [2
                    /*return*/
                    , (_a.imageData = new (_b.apply(DataView, [void 0, _c.sent()]))(), _a.extName = dot >= 0 ? imagePath.substr(dot + 1) : '', _a)];

                  case 2:
                    error_1 = _c.sent();
                    console.warn("Failed to load texture with path: " + imagePath);
                    return [2
                    /*return*/
                    , undefined];

                  case 3:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          GltfConverter.prototype._makePrimitiveViewer = function (gltfPrimitive) {
            var _this = this;

            var primitiveMode = gltfPrimitive.mode === undefined ? 4
            /* __DEFAULT */
            : gltfPrimitive.mode;

            if (primitiveMode !== 4
            /* TRIANGLES */
            ) {
                throw new Error("Normals calculation needs triangle primitive.");
              }

            var vertexCount = 0;
            var attributeNames = Object.keys(gltfPrimitive.attributes);

            if (attributeNames.length !== 0) {
              vertexCount = this._gltf.accessors[gltfPrimitive.attributes[attributeNames[0]]].count;
            }

            var faces;

            if (gltfPrimitive.indices === undefined) {
              faces = new Float32Array(vertexCount);

              for (var i = 0; i < faces.length; ++i) {
                faces[i] = i;
              }
            } else {
              var indicesAccessor = this._gltf.accessors[gltfPrimitive.indices];
              faces = this._readAccessorIntoArray(indicesAccessor);
            }

            var nFaces = Math.floor(faces.length / 3);
            var cachedAttributes = new Map();

            var getAttributes = function getAttributes(name) {
              var result = cachedAttributes.get(name);

              if (result === undefined) {
                if (!Reflect.has(gltfPrimitive.attributes, name)) {
                  throw new Error("Tangent calculation needs " + name + ".");
                }

                result = _this._readAccessorIntoArray(_this._gltf.accessors[gltfPrimitive.attributes[name]]);
                cachedAttributes.set(name, result);
              }

              return result;
            };

            var getVertexCount = function getVertexCount() {
              return vertexCount;
            };

            var getFaces = function getFaces() {
              return faces;
            };

            var getFaceCount = function getFaceCount() {
              return nFaces;
            };

            var getPositions = function getPositions() {
              return getAttributes("POSITION"
              /* POSITION */
              );
            };

            var getNormals = function getNormals() {
              return getAttributes("NORMAL"
              /* NORMAL */
              );
            };

            var getUVs = function getUVs() {
              return getAttributes("TEXCOORD_0"
              /* TEXCOORD_0 */
              );
            };

            return {
              getVertexCount: getVertexCount,
              getPositions: getPositions,
              getFaces: getFaces,
              getFaceCount: getFaceCount,
              getNormals: getNormals,
              getUVs: getUVs
            };
          };

          GltfConverter.prototype._readAccessorIntoArray = function (gltfAccessor) {
            var storageConstructor = this._getAttributeBaseTypeStorage(gltfAccessor.componentType);

            var result = new storageConstructor(gltfAccessor.count * this._getComponentsPerAttribute(gltfAccessor.type));

            this._readAccessor(gltfAccessor, createDataViewFromTypedArray(result));

            return result;
          };

          GltfConverter.prototype._readImageByDataUri = function (dataUri) {
            var result = dataUriUtils.decodeImageDataURI(dataUri);

            if (!result) {
              return undefined;
            }

            var x = result.imageType.split('/');

            if (x.length === 0) {
              console.error("Bad data uri." + dataUri);
              return undefined;
            }

            return {
              extName: "." + x[x.length - 1],
              imageData: new DataView(result.data.buffer, result.data.byteOffset, result.data.byteLength)
            };
          };

          GltfConverter.prototype._readImageInBufferview = function (bufferView, mimeType) {
            var extName = '';

            switch (mimeType) {
              case 'image/jpeg':
                extName = '.jpg';
                break;

              case 'image/png':
                extName = '.png';
                break;

              default:
                throw new Error("Bad MIME Type " + mimeType);
            }

            var buffer = this._buffers[bufferView.buffer];
            var imageData = new DataView(buffer.buffer, buffer.byteOffset + (bufferView.byteOffset || 0), bufferView.byteLength);
            return {
              extName: extName,
              imageData: imageData
            };
          };

          GltfConverter.prototype._getSceneNode = function (iGltfScene, gltfAssetFinder, withTransform) {
            var _this = this;

            if (withTransform === void 0) {
              withTransform = true;
            }

            var sceneName = this._getGltfXXName(GltfAssetKind.Scene, iGltfScene);

            var result = new ccm.Node(sceneName);
            var gltfScene = this._gltf.scenes[iGltfScene];

            if (gltfScene.nodes !== undefined) {
              var mapping_1 = new Array(this._gltf.nodes.length).fill(null);

              for (var _i = 0, _a = gltfScene.nodes; _i < _a.length; _i++) {
                var node = _a[_i];

                var root = this._createEmptyNodeRecursive(node, mapping_1, withTransform);

                root.parent = result;
              }

              mapping_1.forEach(function (node, iGltfNode) {
                _this._setupNode(iGltfNode, mapping_1, gltfAssetFinder);
              }); // update skinning root to animation root node

              result.getComponentsInChildren(ccm.SkinningModelComponent).forEach(function (comp) {
                return comp._skinningRoot = result;
              });
            }

            return result;
          };

          GltfConverter.prototype._createEmptyNodeRecursive = function (iGltfNode, mapping, withTransform) {
            if (withTransform === void 0) {
              withTransform = true;
            }

            var gltfNode = this._gltf.nodes[iGltfNode];

            var result = this._createEmptyNode(iGltfNode, withTransform);

            if (gltfNode.children !== undefined) {
              for (var _i = 0, _a = gltfNode.children; _i < _a.length; _i++) {
                var child = _a[_i];

                var childResult = this._createEmptyNodeRecursive(child, mapping, withTransform);

                childResult.parent = result;
              }
            }

            mapping[iGltfNode] = result;
            return result;
          };

          GltfConverter.prototype._setupNode = function (iGltfNode, mapping, gltfAssetFinder) {
            var node = mapping[iGltfNode];

            if (node === null) {
              return;
            }

            var gltfNode = this._gltf.nodes[iGltfNode];

            if (gltfNode.mesh !== undefined) {
              var modelComponent = null;

              if (gltfNode.skin === undefined) {
                modelComponent = node.addComponent(ccm.ModelComponent);
              } else {
                var skinningModelComponent = node.addComponent(ccm.SkinningModelComponent);
                var skeleton = gltfAssetFinder.find(AssetFinderKind.skeleton, gltfNode.skin);

                if (skeleton) {
                  skinningModelComponent._skeleton = skeleton;
                }

                var skinRoot = mapping[this._getSkinRoot(gltfNode.skin)];

                if (skinRoot === null) {
                  console.error("glTf requires that skin joints must exists in same scene as node references it.");
                } else {
                  // assign a temporary root
                  skinningModelComponent._skinningRoot = skinRoot;
                }

                modelComponent = skinningModelComponent;
              }

              var mesh = gltfAssetFinder.find(AssetFinderKind.mesh, gltfNode.mesh);

              if (mesh) {
                modelComponent._mesh = mesh;
              }

              var gltfMesh = this.gltf.meshes[gltfNode.mesh];
              var materials = gltfMesh.primitives.map(function (gltfPrimitive) {
                if (gltfPrimitive.material === undefined) {
                  return null;
                } else {
                  var material = gltfAssetFinder.find(AssetFinderKind.material, gltfPrimitive.material);

                  if (material) {
                    return material;
                  }
                }

                return null;
              });
              modelComponent._materials = materials;
            }
          };

          GltfConverter.prototype._createEmptyNode = function (iGltfNode, withTransform) {
            if (withTransform === void 0) {
              withTransform = true;
            }

            var gltfNode = this._gltf.nodes[iGltfNode];

            var nodeName = this._getGltfXXName(GltfAssetKind.Node, iGltfNode);

            var node = new ccm.Node(nodeName);

            if (!withTransform) {
              return node;
            }

            if (gltfNode.translation) {
              node.setPosition(gltfNode.translation[0], gltfNode.translation[1], gltfNode.translation[2]);
            }

            if (gltfNode.rotation) {
              node.setRotation(this._getNodeRotation(gltfNode.rotation, new ccm.math.Quat()));
            }

            if (gltfNode.scale) {
              node.setScale(gltfNode.scale[0], gltfNode.scale[1], gltfNode.scale[2]);
            }

            if (gltfNode.matrix) {
              var ns = gltfNode.matrix;

              var m = this._readNodeMatrix(ns);

              var t = new ccm.math.Vec3();
              var r = new ccm.math.Quat();
              var s = new ccm.math.Vec3();
              ccm.math.Mat4.toRTS(m, r, t, s);
              node.setPosition(t);
              node.setRotation(r);
              node.setScale(s);
            }

            return node;
          };

          GltfConverter.prototype._readNodeMatrix = function (ns) {
            return new ccm.math.Mat4(ns[0], ns[1], ns[2], ns[3], ns[4], ns[5], ns[6], ns[7], ns[8], ns[9], ns[10], ns[11], ns[12], ns[13], ns[14], ns[15]);
          };

          GltfConverter.prototype._getNodePath = function (node) {
            if (this._nodePathTable == null) {
              this._nodePathTable = this._createNodePathTable();
            }

            return this._nodePathTable[node];
          };

          GltfConverter.prototype._createNodePathTable = function () {
            var _this = this;

            if (this._gltf.nodes === undefined) {
              return [];
            }

            var parentTable = new Array(this._gltf.nodes.length).fill(-1);

            this._gltf.nodes.forEach(function (gltfNode, nodeIndex) {
              if (gltfNode.children) {
                gltfNode.children.forEach(function (iChildNode) {
                  parentTable[iChildNode] = nodeIndex;
                });
                var names = gltfNode.children.map(function (iChildNode) {
                  var childNode = _this._gltf.nodes[iChildNode];
                  var name = childNode.name;

                  if (typeof name !== 'string' || name.length === 0) {
                    name = null;
                  }

                  return name;
                });
                var uniqueNames = makeUniqueNames(names, uniqueChildNodeNameGenerator);
                uniqueNames.forEach(function (uniqueName, iUniqueName) {
                  _this._gltf.nodes[gltfNode.children[iUniqueName]].name = uniqueName;
                });
              }
            });

            var nodeNames = new Array(this._gltf.nodes.length).fill('');

            for (var iNode = 0; iNode < nodeNames.length; ++iNode) {
              nodeNames[iNode] = this._getGltfXXName(GltfAssetKind.Node, iNode);
            }

            var result = new Array(this._gltf.nodes.length).fill('');

            this._gltf.nodes.forEach(function (gltfNode, nodeIndex) {
              var segments = [];

              for (var i = nodeIndex; i >= 0; i = parentTable[i]) {
                segments.unshift(nodeNames[i]);
              }

              result[nodeIndex] = segments.join('/');
            });

            return result;
          };

          GltfConverter.prototype._readAccessor = function (gltfAccessor, outputBuffer, outputStride) {
            if (outputStride === void 0) {
              outputStride = 0;
            }

            if (gltfAccessor.bufferView === undefined) {
              console.warn("Note, there is an accessor assiociating with no buffer view in file " + this.url + ".");
              return;
            }

            var gltfBufferView = this._gltf.bufferViews[gltfAccessor.bufferView];

            var componentsPerAttribute = this._getComponentsPerAttribute(gltfAccessor.type);

            var bytesPerElement = this._getBytesPerComponent(gltfAccessor.componentType);

            if (outputStride === 0) {
              outputStride = componentsPerAttribute * bytesPerElement;
            }

            var inputStartOffset = (gltfAccessor.byteOffset !== undefined ? gltfAccessor.byteOffset : 0) + (gltfBufferView.byteOffset !== undefined ? gltfBufferView.byteOffset : 0);
            var inputBuffer = createDataViewFromBuffer(this._buffers[gltfBufferView.buffer], inputStartOffset);
            var inputStride = gltfBufferView.byteStride !== undefined ? gltfBufferView.byteStride : componentsPerAttribute * bytesPerElement;

            var componentReader = this._getComponentReader(gltfAccessor.componentType);

            var componentWriter = this._getComponentWriter(gltfAccessor.componentType);

            for (var iAttribute = 0; iAttribute < gltfAccessor.count; ++iAttribute) {
              var i = createDataViewFromTypedArray(inputBuffer, inputStride * iAttribute);
              var o = createDataViewFromTypedArray(outputBuffer, outputStride * iAttribute);

              for (var iComponent = 0; iComponent < componentsPerAttribute; ++iComponent) {
                var componentBytesOffset = bytesPerElement * iComponent;
                var value = componentReader(i, componentBytesOffset);
                componentWriter(o, componentBytesOffset, value);
              }
            }
          };

          GltfConverter.prototype._getPrimitiveMode = function (mode) {
            if (mode === undefined) {
              mode = 4
              /* __DEFAULT */
              ;
            }

            switch (mode) {
              case 0
              /* POINTS */
              :
                return ccm.GFXPrimitiveMode.POINT_LIST;

              case 1
              /* LINES */
              :
                return ccm.GFXPrimitiveMode.LINE_LIST;

              case 2
              /* LINE_LOOP */
              :
                return ccm.GFXPrimitiveMode.LINE_LOOP;

              case 3
              /* LINE_STRIP */
              :
                return ccm.GFXPrimitiveMode.LINE_STRIP;

              case 4
              /* TRIANGLES */
              :
                return ccm.GFXPrimitiveMode.TRIANGLE_LIST;

              case 5
              /* TRIANGLE_STRIP */
              :
                return ccm.GFXPrimitiveMode.TRIANGLE_STRIP;

              case 6
              /* TRIANGLE_FAN */
              :
                return ccm.GFXPrimitiveMode.TRIANGLE_FAN;

              default:
                throw new Error("Unrecognized primitive mode: " + mode + ".");
            }
          };

          GltfConverter.prototype._getAttributeFormat = function (componentType, type) {
            switch (componentType) {
              case 5120
              /* BYTE */
              :
                {
                  switch (type) {
                    case "SCALAR"
                    /* SCALAR */
                    :
                      return ccm.GFXFormat.R8SN;

                    case "VEC2"
                    /* VEC2 */
                    :
                      return ccm.GFXFormat.RG8SN;

                    case "VEC3"
                    /* VEC3 */
                    :
                      return ccm.GFXFormat.RGB8SN;

                    case "VEC4"
                    /* VEC4 */
                    :
                      return ccm.GFXFormat.RGBA8SN;

                    default:
                      throw new Error("Unrecognized attribute type: " + type + ".");
                  }
                }

              case 5121
              /* UNSIGNED_BYTE */
              :
                {
                  switch (type) {
                    case "SCALAR"
                    /* SCALAR */
                    :
                      return ccm.GFXFormat.R8;

                    case "VEC2"
                    /* VEC2 */
                    :
                      return ccm.GFXFormat.RG8;

                    case "VEC3"
                    /* VEC3 */
                    :
                      return ccm.GFXFormat.RGB8;

                    case "VEC4"
                    /* VEC4 */
                    :
                      return ccm.GFXFormat.RGBA8;

                    default:
                      throw new Error("Unrecognized attribute type: " + type + ".");
                  }
                }

              case 5122
              /* SHORT */
              :
                {
                  switch (type) {
                    case "SCALAR"
                    /* SCALAR */
                    :
                      return ccm.GFXFormat.R16I;

                    case "VEC2"
                    /* VEC2 */
                    :
                      return ccm.GFXFormat.RG16I;

                    case "VEC3"
                    /* VEC3 */
                    :
                      return ccm.GFXFormat.RGB16I;

                    case "VEC4"
                    /* VEC4 */
                    :
                      return ccm.GFXFormat.RGBA16I;

                    default:
                      throw new Error("Unrecognized attribute type: " + type + ".");
                  }
                }

              case 5123
              /* UNSIGNED_SHORT */
              :
                {
                  switch (type) {
                    case "SCALAR"
                    /* SCALAR */
                    :
                      return ccm.GFXFormat.R16UI;

                    case "VEC2"
                    /* VEC2 */
                    :
                      return ccm.GFXFormat.RG16UI;

                    case "VEC3"
                    /* VEC3 */
                    :
                      return ccm.GFXFormat.RGB16UI;

                    case "VEC4"
                    /* VEC4 */
                    :
                      return ccm.GFXFormat.RGBA16UI;

                    default:
                      throw new Error("Unrecognized attribute type: " + type + ".");
                  }
                }

              case 5125
              /* UNSIGNED_INT */
              :
                {
                  switch (type) {
                    case "SCALAR"
                    /* SCALAR */
                    :
                      return ccm.GFXFormat.R32UI;

                    case "VEC2"
                    /* VEC2 */
                    :
                      return ccm.GFXFormat.RG32UI;

                    case "VEC3"
                    /* VEC3 */
                    :
                      return ccm.GFXFormat.RGB32UI;

                    case "VEC4"
                    /* VEC4 */
                    :
                      return ccm.GFXFormat.RGBA32UI;

                    default:
                      throw new Error("Unrecognized attribute type: " + type + ".");
                  }
                }

              case 5126
              /* FLOAT */
              :
                {
                  switch (type) {
                    case "SCALAR"
                    /* SCALAR */
                    :
                      return ccm.GFXFormat.R32F;

                    case "VEC2"
                    /* VEC2 */
                    :
                      return ccm.GFXFormat.RG32F;

                    case "VEC3"
                    /* VEC3 */
                    :
                      return ccm.GFXFormat.RGB32F;

                    case "VEC4"
                    /* VEC4 */
                    :
                      return ccm.GFXFormat.RGBA32F;

                    default:
                      throw new Error("Unrecognized attribute type: " + type + ".");
                  }
                }

              default:
                throw new Error("Unrecognized component type: " + componentType + ".");
            }
          };

          GltfConverter.prototype._getAttributeBaseTypeStorage = function (componentType) {
            switch (componentType) {
              case 5120
              /* BYTE */
              :
                return Int8Array;

              case 5121
              /* UNSIGNED_BYTE */
              :
                return Uint8Array;

              case 5122
              /* SHORT */
              :
                return Int16Array;

              case 5123
              /* UNSIGNED_SHORT */
              :
                return Uint16Array;

              case 5125
              /* UNSIGNED_INT */
              :
                return Uint32Array;

              case 5126
              /* FLOAT */
              :
                return Float32Array;

              default:
                throw new Error("Unrecognized component type: " + componentType);
            }
          };

          GltfConverter.prototype._getIndexStride = function (componentType) {
            switch (componentType) {
              case 5121
              /* UNSIGNED_BYTE */
              :
                return 1;

              case 5123
              /* UNSIGNED_SHORT */
              :
                return 2;

              case 5125
              /* UNSIGNED_INT */
              :
                return 4;

              default:
                throw new Error("Unrecognized index type: " + componentType);
            }
          };

          GltfConverter.prototype._getBytesPerAttribute = function (gltfAccessor) {
            return this._getBytesPerComponent(gltfAccessor.componentType) * this._getComponentsPerAttribute(gltfAccessor.type);
          };

          GltfConverter.prototype._getComponentsPerAttribute = function (type) {
            switch (type) {
              case "SCALAR"
              /* SCALAR */
              :
                return 1;

              case "VEC2"
              /* VEC2 */
              :
                return 2;

              case "VEC3"
              /* VEC3 */
              :
                return 3;

              case "VEC4"
              /* VEC4 */
              :
              case "MAT2"
              /* MAT2 */
              :
                return 4;

              case "MAT3"
              /* MAT3 */
              :
                return 9;

              case "MAT4"
              /* MAT4 */
              :
                return 16;

              default:
                throw new Error("Unrecognized attribute type: " + type + ".");
            }
          };

          GltfConverter.prototype._getBytesPerComponent = function (componentType) {
            switch (componentType) {
              case 5120
              /* BYTE */
              :
              case 5121
              /* UNSIGNED_BYTE */
              :
                return 1;

              case 5122
              /* SHORT */
              :
              case 5123
              /* UNSIGNED_SHORT */
              :
                return 2;

              case 5125
              /* UNSIGNED_INT */
              :
              case 5126
              /* FLOAT */
              :
                return 4;

              default:
                throw new Error("Unrecognized component type: " + componentType);
            }
          };

          GltfConverter.prototype._getGfxAttributeName = function (name) {
            switch (name) {
              case "POSITION"
              /* POSITION */
              :
                return ccm.GFXAttributeName.ATTR_POSITION;

              case "NORMAL"
              /* NORMAL */
              :
                return ccm.GFXAttributeName.ATTR_NORMAL;

              case "TANGENT"
              /* TANGENT */
              :
                return ccm.GFXAttributeName.ATTR_TANGENT;

              case "COLOR_0"
              /* COLOR_0 */
              :
                return ccm.GFXAttributeName.ATTR_COLOR;

              case "TEXCOORD_0"
              /* TEXCOORD_0 */
              :
                return ccm.GFXAttributeName.ATTR_TEX_COORD;

              case "TEXCOORD_1"
              /* TEXCOORD_1 */
              :
                return ccm.GFXAttributeName.ATTR_TEX_COORD1;

              case 'TEXCOORD_2':
                return ccm.GFXAttributeName.ATTR_TEX_COORD2;

              case 'TEXCOORD_3':
                return ccm.GFXAttributeName.ATTR_TEX_COORD3;

              case "JOINTS_0"
              /* JOINTS_0 */
              :
                return ccm.GFXAttributeName.ATTR_JOINTS;

              case "WEIGHTS_0"
              /* WEIGHTS_0 */
              :
                return ccm.GFXAttributeName.ATTR_WEIGHTS;

              default:
                throw new Error("Unrecognized attribute type: " + name);
            }
          };

          GltfConverter.prototype._getComponentReader = function (componentType) {
            switch (componentType) {
              case 5120
              /* BYTE */
              :
                return function (buffer, offset) {
                  return buffer.getInt8(offset);
                };

              case 5121
              /* UNSIGNED_BYTE */
              :
                return function (buffer, offset) {
                  return buffer.getUint8(offset);
                };

              case 5122
              /* SHORT */
              :
                return function (buffer, offset) {
                  return buffer.getInt16(offset, ccUseLittleEndian);
                };

              case 5123
              /* UNSIGNED_SHORT */
              :
                return function (buffer, offset) {
                  return buffer.getUint16(offset, ccUseLittleEndian);
                };

              case 5125
              /* UNSIGNED_INT */
              :
                return function (buffer, offset) {
                  return buffer.getUint32(offset, ccUseLittleEndian);
                };

              case 5126
              /* FLOAT */
              :
                return function (buffer, offset) {
                  return buffer.getFloat32(offset, ccUseLittleEndian);
                };

              default:
                throw new Error("Unrecognized component type: " + componentType);
            }
          };

          GltfConverter.prototype._getComponentWriter = function (componentType) {
            switch (componentType) {
              case 5120
              /* BYTE */
              :
                return function (buffer, offset, value) {
                  return buffer.setInt8(offset, value);
                };

              case 5121
              /* UNSIGNED_BYTE */
              :
                return function (buffer, offset, value) {
                  return buffer.setUint8(offset, value);
                };

              case 5122
              /* SHORT */
              :
                return function (buffer, offset, value) {
                  return buffer.setInt16(offset, value, ccUseLittleEndian);
                };

              case 5123
              /* UNSIGNED_SHORT */
              :
                return function (buffer, offset, value) {
                  return buffer.setUint16(offset, value, ccUseLittleEndian);
                };

              case 5125
              /* UNSIGNED_INT */
              :
                return function (buffer, offset, value) {
                  return buffer.setUint32(offset, value, ccUseLittleEndian);
                };

              case 5126
              /* FLOAT */
              :
                return function (buffer, offset, value) {
                  return buffer.setFloat32(offset, value, ccUseLittleEndian);
                };

              default:
                throw new Error("Unrecognized component type: " + componentType);
            }
          };

          GltfConverter.prototype._getGltfXXName = function (assetKind, index) {
            var _a;

            var assetsArrayName = (_a = {}, _a[GltfAssetKind.Animation] = 'animations', _a[GltfAssetKind.Image] = 'images', _a[GltfAssetKind.Material] = 'materials', _a[GltfAssetKind.Node] = 'nodes', _a[GltfAssetKind.Skin] = 'skins', _a[GltfAssetKind.Texture] = 'textures', _a[GltfAssetKind.Scene] = 'scenes', _a);
            var assets = this._gltf[assetsArrayName[assetKind]];

            if (!assets) {
              return '';
            }

            var asset = assets[index];

            if (typeof asset.name === 'string') {
              return asset.name;
            } else {
              return GltfAssetKind[assetKind] + "-" + index;
            }
          };

          return GltfConverter;
        }();

        exports.GltfConverter = GltfConverter;

        function calculateNormals(gltfPrimitiveViewer) {
          var vertexCount = gltfPrimitiveViewer.getVertexCount();
          var positions = gltfPrimitiveViewer.getPositions();
          var indices = gltfPrimitiveViewer.getFaces();
          var nFaces = gltfPrimitiveViewer.getFaceCount();
          var normals = new Float32Array(3 * vertexCount);
          var a = new ccm.math.Vec3();
          var b = new ccm.math.Vec3();
          var c = new ccm.math.Vec3();
          var u = new ccm.math.Vec3();
          var v = new ccm.math.Vec3();
          var n = new ccm.math.Vec3();

          var getPosition = function getPosition(iVertex, out) {
            ccm.math.Vec3.set(out, positions[iVertex * 3 + 0], positions[iVertex * 3 + 1], positions[iVertex * 3 + 2]);
          };

          var addFaceNormal = function addFaceNormal(iVertex, normal) {
            normals[iVertex * 3 + 0] += normal.x;
            normals[iVertex * 3 + 1] += normal.y;
            normals[iVertex * 3 + 2] += normal.z;
          };

          for (var iFace = 0; iFace < nFaces; ++iFace) {
            var ia = indices[iFace * 3 + 0];
            var ib = indices[iFace * 3 + 1];
            var ic = indices[iFace * 3 + 2];
            getPosition(ia, a);
            getPosition(ib, b);
            getPosition(ic, c); // Calculate normal of triangle [a, b, c].

            ccm.math.Vec3.subtract(u, b, a);
            ccm.math.Vec3.subtract(v, c, a);
            ccm.math.Vec3.cross(n, u, v);
            addFaceNormal(ia, n);
            addFaceNormal(ib, n);
            addFaceNormal(ic, n);
          }

          for (var iVertex = 0; iVertex < vertexCount; ++iVertex) {
            ccm.math.Vec3.set(n, normals[iVertex * 3 + 0], normals[iVertex * 3 + 1], normals[iVertex * 3 + 2]);
            ccm.math.Vec3.normalize(n, n);
            normals[iVertex * 3 + 0] = n.x; // -n.x;

            normals[iVertex * 3 + 1] = n.y; //  n.z;

            normals[iVertex * 3 + 2] = n.z; // -n.y;
          }

          return normals;
        }

        function calculateTangents(gltfPrimitiveViewer, overrideNormals) {
          /// http://www.terathon.com/code/tangent.html
          var vertexCount = gltfPrimitiveViewer.getVertexCount();
          var positions = gltfPrimitiveViewer.getPositions();
          var indices = gltfPrimitiveViewer.getFaces();
          var nFaces = gltfPrimitiveViewer.getFaceCount();
          var normals = overrideNormals ? overrideNormals : gltfPrimitiveViewer.getNormals();
          var uvs = gltfPrimitiveViewer.getUVs();
          var tangents = new Float32Array(4 * vertexCount);
          var tan1 = new Float32Array(3 * vertexCount);
          var tan2 = new Float32Array(3 * vertexCount);
          var v0 = new ccm.math.Vec3();
          var v1 = new ccm.math.Vec3();
          var v2 = new ccm.math.Vec3();
          var uv0 = new ccm.math.Vec2();
          var uv1 = new ccm.math.Vec2();
          var uv2 = new ccm.math.Vec2();
          var sdir = new ccm.math.Vec3();
          var tdir = new ccm.math.Vec3();
          var n = new ccm.math.Vec3();
          var t = new ccm.math.Vec3();

          var getPosition = function getPosition(iVertex, out) {
            ccm.math.Vec3.set(out, positions[iVertex * 3 + 0], positions[iVertex * 3 + 1], positions[iVertex * 3 + 2]);
          };

          var getUV = function getUV(iVertex, out) {
            ccm.math.Vec2.set(out, uvs[iVertex * 2 + 0], uvs[iVertex * 2 + 1]);
          };

          var addTan = function addTan(tans, iVertex, val) {
            tans[iVertex * 3 + 0] += val.x;
            tans[iVertex * 3 + 1] += val.y;
            tans[iVertex * 3 + 2] += val.z;
          };

          for (var iFace = 0; iFace < nFaces; ++iFace) {
            var i0 = indices[iFace * 3 + 0];
            var i1 = indices[iFace * 3 + 1];
            var i2 = indices[iFace * 3 + 2];
            getPosition(i0, v0);
            getPosition(i1, v1);
            getPosition(i2, v2);
            getUV(i0, uv0);
            getUV(i1, uv1);
            getUV(i2, uv2);
            var x1 = v1.x - v0.x;
            var x2 = v2.x - v0.x;
            var y1 = v1.y - v0.y;
            var y2 = v2.y - v0.y;
            var z1 = v1.z - v0.z;
            var z2 = v2.z - v0.z;
            var s1 = uv1.x - uv0.x;
            var s2 = uv2.x - uv0.x;
            var t1 = uv1.y - uv0.y;
            var t2 = uv2.y - uv0.y;
            var div = s1 * t2 - s2 * t1;

            if (div !== 0.0) {
              var r = 1.0 / div;
              ccm.math.Vec3.set(sdir, (t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r);
              ccm.math.Vec3.set(tdir, (s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r);
            } else {
              ccm.math.Vec3.set(sdir, 1.0, 0.0, 0.0);
              ccm.math.Vec3.set(tdir, 0.0, 1.0, 0.0);
            }

            addTan(tan1, i0, sdir);
            addTan(tan1, i1, sdir);
            addTan(tan1, i2, sdir);
            addTan(tan2, i0, tdir);
            addTan(tan2, i1, tdir);
            addTan(tan2, i2, tdir);
          }

          var tan2v = new ccm.math.Vec3();
          var vv = new ccm.math.Vec3();

          for (var iVertex = 0; iVertex < vertexCount; ++iVertex) {
            // Gram-Schmidt orthogonalize
            // tangent[a] = (t - n * Dot(n, t)).Normalize();
            // Calculate handedness
            // tangent[a].w = (Dot(Cross(n, t), tan2[a]) < 0.0F) ? -1.0F : 1.0F;
            ccm.math.Vec3.set(n, normals[iVertex * 3 + 0], normals[iVertex * 3 + 1], normals[iVertex * 3 + 2]);
            ccm.math.Vec3.set(t, tan1[iVertex * 3 + 0], tan1[iVertex * 3 + 1], tan1[iVertex * 3 + 2]);
            ccm.math.Vec3.set(tan2v, tan2[iVertex * 3 + 0], tan2[iVertex * 3 + 1], tan2[iVertex * 3 + 2]);
            ccm.math.Vec3.multiplyScalar(vv, n, ccm.math.Vec3.dot(n, t));
            ccm.math.Vec3.subtract(vv, t, vv);
            ccm.math.Vec3.normalize(vv, vv);
            tangents[4 * iVertex + 0] = vv.x;
            tangents[4 * iVertex + 1] = vv.y;
            tangents[4 * iVertex + 2] = vv.z;
            var sign = ccm.math.Vec3.dot(ccm.math.Vec3.cross(vv, n, t), tan2v) < 0 ? -1 : 1;
            tangents[4 * iVertex + 3] = sign;
          }

          return tangents;
        }

        function readGltf(glTFFileUri, glTFHost) {
          return __awaiter(this, void 0, void 0, function () {
            var path, _a;

            return __generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  path = URI.parse(glTFFileUri).path;
                  if (!(path && path.endsWith('.glb'))) return [3
                  /*break*/
                  , 2];
                  return [4
                  /*yield*/
                  , readGlb(glTFFileUri, glTFHost)];

                case 1:
                  _a = _b.sent();
                  return [3
                  /*break*/
                  , 4];

                case 2:
                  return [4
                  /*yield*/
                  , readGltfJson(glTFFileUri, glTFHost)];

                case 3:
                  _a = _b.sent();
                  _b.label = 4;

                case 4:
                  return [2
                  /*return*/
                  , _a];
              }
            });
          });
        }

        exports.readGltf = readGltf;

        function readGltfJson(uri, glTFHost) {
          return __awaiter(this, void 0, void 0, function () {
            var gltf, binaryBuffers;
            return __generator(this, function (_a) {
              switch (_a.label) {
                case 0:
                  return [4
                  /*yield*/
                  , glTFHost.readJSON(uri)];

                case 1:
                  gltf = _a.sent();
                  binaryBuffers = [];
                  if (!gltf.buffers) return [3
                  /*break*/
                  , 3];
                  return [4
                  /*yield*/
                  , Promise.all(gltf.buffers.map(function (gltfBuffer) {
                    if (!gltfBuffer.uri) {
                      return new DataView(new ArrayBuffer(0));
                    }

                    return readBufferData(uri, gltfBuffer.uri, glTFHost);
                  }))];

                case 2:
                  binaryBuffers = _a.sent();
                  _a.label = 3;

                case 3:
                  return [2
                  /*return*/
                  , {
                    gltf: gltf,
                    binaryBuffers: binaryBuffers
                  }];
              }
            });
          });
        }

        function readGlb(uri, glTFHost) {
          return __awaiter(this, void 0, void 0, function () {
            var badGLBFormat, glb, _a, magic, ChunkTypeJson, ChunkTypeBin, version, length, gltf, embededBinaryBuffer, iChunk, offset, chunkLength, chunkType, payload, gltfJson, binaryBuffers;

            return __generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  badGLBFormat = function badGLBFormat() {
                    throw new Error("Bad glb format.");
                  };

                  _a = DataView.bind;
                  return [4
                  /*yield*/
                  , glTFHost.readBuffer(uri)];

                case 1:
                  glb = new (_a.apply(DataView, [void 0, _b.sent()]))();

                  if (glb.byteLength < 12) {
                    return [2
                    /*return*/
                    , badGLBFormat()];
                  }

                  magic = glb.getUint32(0, glTFUseLittleEndian);

                  if (magic !== 0x46546C67) {
                    return [2
                    /*return*/
                    , badGLBFormat()];
                  }

                  ChunkTypeJson = 0x4E4F534A;
                  ChunkTypeBin = 0x004E4942;
                  version = glb.getUint32(4, glTFUseLittleEndian);
                  length = glb.getUint32(8, glTFUseLittleEndian);

                  for (iChunk = 0, offset = 12; offset + 8 <= glb.byteLength; ++iChunk) {
                    chunkLength = glb.getUint32(offset, glTFUseLittleEndian);
                    offset += 4;
                    chunkType = glb.getUint32(offset, glTFUseLittleEndian);
                    offset += 4;

                    if (offset + chunkLength > glb.byteLength) {
                      return [2
                      /*return*/
                      , badGLBFormat()];
                    }

                    payload = new DataView(glb.buffer, offset, chunkLength);
                    offset += chunkLength;

                    if (iChunk === 0) {
                      if (chunkType !== ChunkTypeJson) {
                        return [2
                        /*return*/
                        , badGLBFormat()];
                      }

                      gltfJson = new TextDecoder('utf-8').decode(payload);
                      gltf = JSON.parse(gltfJson);
                    } else if (chunkType === ChunkTypeBin) {
                      // TODO: Should we copy?
                      // embededBinaryBuffer = payload.slice();
                      embededBinaryBuffer = payload;
                    }
                  }

                  if (!!gltf) return [3
                  /*break*/
                  , 2];
                  return [2
                  /*return*/
                  , badGLBFormat()];

                case 2:
                  binaryBuffers = [];
                  if (!gltf.buffers) return [3
                  /*break*/
                  , 4];
                  return [4
                  /*yield*/
                  , Promise.all(gltf.buffers.map(function (gltfBuffer, index) {
                    if (!gltfBuffer.uri) {
                      if (index === 0 && embededBinaryBuffer) {
                        return embededBinaryBuffer;
                      }

                      return new DataView(new ArrayBuffer(0));
                    }

                    return readBufferData(uri, gltfBuffer.uri, glTFHost);
                  }))];

                case 3:
                  binaryBuffers = _b.sent();
                  _b.label = 4;

                case 4:
                  return [2
                  /*return*/
                  , {
                    gltf: gltf,
                    binaryBuffers: binaryBuffers
                  }];
              }
            });
          });
        }

        function isDataUri(uri) {
          return uri.startsWith('data:');
        }

        exports.isDataUri = isDataUri;

        var BufferBlob =
        /** @class */
        function () {
          function BufferBlob() {
            this._arrayBufferOrPaddings = [];
            this._length = 0;
          }

          BufferBlob.prototype.setNextAlignment = function (align) {
            if (align !== 0) {
              var remainder = this._length % align;

              if (remainder !== 0) {
                var padding = align - remainder;

                this._arrayBufferOrPaddings.push(padding);

                this._length += padding;
              }
            }
          };

          BufferBlob.prototype.addBuffer = function (arrayBuffer) {
            var result = this._length;

            this._arrayBufferOrPaddings.push(arrayBuffer);

            this._length += arrayBuffer.byteLength;
            return result;
          };

          BufferBlob.prototype.getLength = function () {
            return this._length;
          };

          BufferBlob.prototype.getCombined = function () {
            var result = new Uint8Array(this._length);
            var counter = 0;

            this._arrayBufferOrPaddings.forEach(function (arrayBufferOrPadding) {
              if (typeof arrayBufferOrPadding === 'number') {
                counter += arrayBufferOrPadding;
              } else {
                result.set(new Uint8Array(arrayBufferOrPadding), counter);
                counter += arrayBufferOrPadding.byteLength;
              }
            });

            return result;
          };

          return BufferBlob;
        }();

        function readBufferData(glTFFileURI, uri, glTFHost) {
          return __awaiter(this, void 0, void 0, function () {
            var bufferURI, _a, dataUrl;

            return __generator(this, function (_b) {
              switch (_b.label) {
                case 0:
                  if (!!uri.startsWith('data:')) return [3
                  /*break*/
                  , 2];
                  bufferURI = resolveGLTFUri(glTFFileURI, uri);
                  _a = DataView.bind;
                  return [4
                  /*yield*/
                  , glTFHost.readBuffer(bufferURI)];

                case 1:
                  return [2
                  /*return*/
                  , new (_a.apply(DataView, [void 0, _b.sent()]))()];

                case 2:
                  dataUrl = parse_data_url_1["default"](uri);

                  if (!dataUrl) {
                    throw new Error("Bad data uri." + uri);
                  }

                  return [2
                  /*return*/
                  , new DataView(dataUrl.toBuffer().buffer)];
              }
            });
          });
        }

        function resolveGLTFUri(glTFFileURI, uri) {
          var result = URI.resolve(glTFFileURI, uri);
          return result;
        }

        exports.resolveGLTFUri = resolveGLTFUri;

        function createDataViewFromBuffer(buffer, offset) {
          if (offset === void 0) {
            offset = 0;
          }

          return new DataView(buffer.buffer, buffer.byteOffset + offset);
        }

        function createDataViewFromTypedArray(typedArray, offset) {
          if (offset === void 0) {
            offset = 0;
          }

          return new DataView(typedArray.buffer, typedArray.byteOffset + offset);
        }

        var ccUseLittleEndian = true;
        var glTFUseLittleEndian = true;

        function uniqueChildNodeNameGenerator(original, last, index, count) {
          var postfix = count === 0 ? '' : "-" + count;
          return (original || '') + "(__autogen " + index + postfix + ")";
        }

        function makeUniqueNames(names, generator) {
          var uniqueNames = new Array(names.length).fill('');

          var _loop_2 = function _loop_2(i) {
            var name_1 = names[i];
            var count = 0;

            while (true) {
              var isUnique = function isUnique() {
                return uniqueNames.every(function (uniqueName, index) {
                  return index === i || name_1 !== uniqueName;
                });
              };

              if (name_1 === null || !isUnique()) {
                name_1 = generator(names[i], name_1, i, count++);
              } else {
                uniqueNames[i] = name_1;
                break;
              }
            }
          };

          for (var i = 0; i < names.length; ++i) {
            _loop_2(i);
          }

          return uniqueNames;
        }
      });
      unwrapExports(glTFConverter);
      var glTFConverter_1 = glTFConverter.AssetFinderKind;
      var glTFConverter_2 = glTFConverter.getPathFromRoot;
      var glTFConverter_3 = glTFConverter.getWorldTransformUntilRoot;
      var glTFConverter_4 = glTFConverter.NormalImportSetting;
      var glTFConverter_5 = glTFConverter.TangentImportSetting;
      var glTFConverter_6 = glTFConverter.getNodePathByTargetName;
      var glTFConverter_7 = glTFConverter.createSockets;
      var glTFConverter_8 = glTFConverter.GltfConverter;
      var glTFConverter_9 = glTFConverter.readGltf;
      var glTFConverter_10 = glTFConverter.isDataUri;
      var glTFConverter_11 = glTFConverter.resolveGLTFUri;

      var cjs = createCommonjsModule(function (module, exports) {

        function __export(m) {
          for (var p in m) {
            if (!exports.hasOwnProperty(p)) exports[p] = m[p];
          }
        }

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        __export(glTFConverter);
      });
      unwrapExports(cjs);
      var cjs_1 = cjs.readGltf;
      var cjs_2 = cjs.GltfConverter;
      var cjs_3 = cjs.AssetFinderKind;
      var cjs_4 = cjs.NormalImportSetting;
      var cjs_5 = cjs.TangentImportSetting;

      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;
      var Button;

      (function (Button) {
        Button[Button["Left"] = 0] = "Left";
        Button[Button["Middle"] = 1] = "Middle";
        Button[Button["Right"] = 2] = "Right";
      })(Button || (Button = {}));

      var FirstPersonCamera = (_dec = _decorator.ccclass('FirstPersonCamera'), _dec2 = _decorator.property, _dec3 = _decorator.property, _dec4 = _decorator.property, _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(FirstPersonCamera, _Component);

        function FirstPersonCamera() {
          var _this;

          _classCallCheck(this, FirstPersonCamera);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(FirstPersonCamera).call(this));
          _this._buttonStates = {};

          _initializerDefineProperty(_this, "horizontalRotationFactor", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "verticalRotationFactor", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "translationFactor", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(FirstPersonCamera, [{
          key: "start",
          value: function start() {
            var _this2 = this;

            systemEvent.on(SystemEventType.MOUSE_WHEEL, function (eventMouse) {
              var dy = eventMouse.getScrollY();
              var dir = _this2.node.forward;
              dir.multiplyScalar(-dy * 0.001);

              _this2.node.translate(dir, Node.NodeSpace.WORLD);
            });
            systemEvent.on(SystemEventType.MOUSE_DOWN, function (eventMouse) {
              var button = eventMouse.getButton();

              if (button === null || !(button in Button)) {
                return;
              } else {
                _this2._buttonStates[button] = true;
              }
            });
            systemEvent.on(SystemEventType.MOUSE_UP, function (eventMouse) {
              var button = eventMouse.getButton();

              if (button === null || !(button in Button)) {
                return;
              } else {
                _this2._buttonStates[button] = false;
              }
            });
            systemEvent.on(SystemEventType.MOUSE_MOVE, function (eventMouse) {
              var dx = eventMouse.getDeltaX();
              var dy = eventMouse.getDeltaY();

              if (_this2._buttonStates[Button.Middle]) {
                var right = _this2._getRight();

                right.multiplyScalar(dx * _this2.translationFactor);

                var up = _this2._getUp();

                up.multiplyScalar(dy * _this2.translationFactor);

                _this2.node.translate(right.add(up), Node.NodeSpace.WORLD);
              }

              if (_this2._buttonStates[Button.Right]) {
                if (dx !== 0) {
                  _this2.node.rotate(Quat.fromAxisAngle(new Quat(), new Vec3(0, 1, 0), math.toRadian(dx * _this2.horizontalRotationFactor)));
                }
              }
            });
          }
        }, {
          key: "_getUp",
          value: function _getUp() {
            return Vec3.transformQuat(new Vec3(), Vec3.UNIT_Y, this.node.getWorldRotation());
          }
        }, {
          key: "_getRight",
          value: function _getRight() {
            return Vec3.transformQuat(new Vec3(), Vec3.UNIT_X, this.node.getWorldRotation());
          }
        }]);

        return FirstPersonCamera;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "horizontalRotationFactor", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "verticalRotationFactor", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "translationFactor", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      })), _class2)) || _class);

      var Viewer = exports('Viewer',
      /*#__PURE__*/
      function () {
        function Viewer(canvas) {
          _classCallCheck(this, Viewer);

          this._glTFHost = {
            readJSON: function () {
              var _readJSON = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee(uri) {
                var response;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch(uri);

                      case 2:
                        response = _context.sent;
                        return _context.abrupt("return", response.json());

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function readJSON(_x) {
                return _readJSON.apply(this, arguments);
              }

              return readJSON;
            }(),
            readBuffer: function () {
              var _readBuffer = _asyncToGenerator(
              /*#__PURE__*/
              regeneratorRuntime.mark(function _callee2(uri) {
                var response;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return fetch(uri);

                      case 2:
                        response = _context2.sent;
                        return _context2.abrupt("return", response.arrayBuffer());

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              function readBuffer(_x2) {
                return _readBuffer.apply(this, arguments);
              }

              return readBuffer;
            }()
          };
          game.run({
            id: canvas.id
          }, function () {
            var scene = new Scene('Viewer');
            director.runScene(scene, function () {}, function () {
              console.log("Scene lauched.");
              var cameraNode = new Node(); // @ts-ignore

              scene.addChild(cameraNode);
              var cameraComponent = cameraNode.addComponent(CameraComponent);
              cameraComponent.color = new Color(127, 127, 127);
              cameraNode.setPosition(new Vec3(0, 0, 3));
              cameraNode.addComponent(FirstPersonCamera);
            });
          });
        }

        _createClass(Viewer, [{
          key: "load",
          value: function () {
            var _load = _asyncToGenerator(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3(glTFFileUrl) {
              var _ref, gltf, binaryBuffers, glTFConverter;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return cjs_1(glTFFileUrl, this._glTFHost);

                    case 2:
                      _ref = _context3.sent;
                      gltf = _ref.gltf;
                      binaryBuffers = _ref.binaryBuffers;
                      glTFConverter = new cjs_2(gltf, binaryBuffers, glTFFileUrl);

                      this._onGlTFFileFetched(glTFConverter, glTFFileUrl);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function load(_x3) {
              return _load.apply(this, arguments);
            }

            return load;
          }()
        }, {
          key: "_onGlTFFileFetched",
          value: function _onGlTFFileFetched(glTFConverter, glTFFileUrl) {
            var _assetFinder;

            var glTF = glTFConverter.gltf;
            var assetFinder = (_assetFinder = {}, _defineProperty(_assetFinder, cjs_3.mesh, []), _defineProperty(_assetFinder, cjs_3.animation, []), _defineProperty(_assetFinder, cjs_3.skeleton, []), _defineProperty(_assetFinder, cjs_3.texture, []), _defineProperty(_assetFinder, cjs_3.material, []), _defineProperty(_assetFinder, "find", function find(kind, index) {
              return kind in assetFinder ? assetFinder[kind][index] || null : null;
            }), _assetFinder);

            if (glTF.meshes) {
              glTF.meshes.forEach(function (glTFMesh, glTFMeshIndex) {
                var ccMesh = glTFConverter.createMesh(glTFMeshIndex, {
                  normals: cjs_4.require,
                  tangents: cjs_5.require
                });
                assetFinder[cjs_3.mesh].push(ccMesh);
              });
            }

            if (glTF.materials) {
              glTF.materials.forEach(function (glTFMaterial, glTFMaterialIndex) {
                var ccMaterial = glTFConverter.createMaterial(glTFMaterialIndex, assetFinder, function (effectName) {
                  var name = effectName.split('/').pop();

                  if (name) {
                    var nameNoExt = name.split('.').shift();

                    if (nameNoExt) {
                      var effect = EffectAsset.get(nameNoExt);
                      return effect;
                    }
                  }

                  return null;
                });
                ccMaterial.onLoaded();
                assetFinder[cjs_3.material].push(ccMaterial);
              });
            }

            var ccSceneNodes = [];

            if (glTF.scenes) {
              glTF.scenes.forEach(function (glTFScene, glTFSceneIndex) {
                var ccNode = glTFConverter.createScene(glTFSceneIndex, assetFinder);
                ccSceneNodes.push(ccNode);
              });
            }

            var scene = director.getScene();

            if (scene) {
              ccSceneNodes.forEach(function (ccSceneNode) {
                // @ts-ignore
                ccSceneNode.setScale(10, 10, 10);
                scene.addChild(ccSceneNode);
              });
            }
          }
        }]);

        return Viewer;
      }());

    }
  };
});
//# sourceMappingURL=glTF-viewer.js.map
