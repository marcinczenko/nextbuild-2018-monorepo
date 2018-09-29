function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

export var Grid =
/*#__PURE__*/
function () {
  function Grid(grid, modifiers) {
    _classCallCheck(this, Grid);

    this.grid = grid;
    this.modifiers = modifiers;
    this.defaultContainerStyles = {
      display: 'grid',
      gridGap: '5px',
      gridTemplateAreas: this.getGridTemplateAreas(),
      gridTemplateColumns: this.getGridTemplateColumns(),
      gridTemplateRows: this.getGridTemplateRows()
    };
    Object.assign(this, {
      container: _objectSpread({}, this.defaultContainerStyles, this.modifiers)
    });
    this.createGridAreas();
  }

  _createClass(Grid, [{
    key: "getGridTemplateAreas",
    value: function getGridTemplateAreas() {
      return this.grid.reduce(function (acc, value) {
        return "".concat(acc, " \"").concat(value, "\"");
      }, '');
    }
  }, {
    key: "getGridTemplateColumns",
    value: function getGridTemplateColumns() {
      var columns = Math.max.apply(Math, _toConsumableArray(this.grid.map(function (e) {
        return e.split(/\s+/).length;
      })));
      return _toConsumableArray(Array(columns).keys()).map(function () {
        return '1fr';
      }).join(' ');
    }
  }, {
    key: "getGridTemplateRows",
    value: function getGridTemplateRows() {
      return this.grid.map(function () {
        return '1fr';
      }).join(' ');
    }
  }, {
    key: "applyToStyles",
    value: function applyToStyles(styles) {
      var gridAreas = new Set(this.grid.join(' ').split(/\s+/));

      var gridElements = _toConsumableArray(gridAreas).reduce(function (acc, value) {
        acc[value] = {
          gridArea: value
        };
        return acc;
      }, {});

      return _objectSpread({}, styles, {
        container: _objectSpread({}, this.defaultContainerStyles, this.modifiers)
      }, gridElements);
    }
  }, {
    key: "getGridContainerStyle",
    value: function getGridContainerStyle() {
      return _objectSpread({}, this.defaultContainerStyles, this.modifiers);
    }
  }, {
    key: "createGridAreas",
    value: function createGridAreas() {
      var gridAreas = new Set(this.grid.join(' ').split(/\s+/));

      var gridElements = _toConsumableArray(gridAreas).reduce(function (acc, value) {
        acc[value] = {
          gridArea: value
        };
        return acc;
      }, {});

      Object.assign(this, gridElements);
    }
  }]);

  return Grid;
}();