"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SunmiScan = exports.PrinterStyleValue = exports.PrinterStyleKey = exports.AlignValue = void 0;
var _reactNative = require("react-native");
const {
  SunmiPrinter,
  SunmiScanModule
} = _reactNative.NativeModules;
let PrinterStyleKey = /*#__PURE__*/function (PrinterStyleKey) {
  PrinterStyleKey[PrinterStyleKey["ENABLE_DOUBLE_WIDTH"] = 1000] = "ENABLE_DOUBLE_WIDTH";
  PrinterStyleKey[PrinterStyleKey["ENABLE_DOUBLE_HEIGHT"] = 1001] = "ENABLE_DOUBLE_HEIGHT";
  PrinterStyleKey[PrinterStyleKey["ENABLE_BOLD"] = 1002] = "ENABLE_BOLD";
  PrinterStyleKey[PrinterStyleKey["ENABLE_UNDERLINE"] = 1003] = "ENABLE_UNDERLINE";
  PrinterStyleKey[PrinterStyleKey["ENABLE_ANTI_WHITE"] = 1004] = "ENABLE_ANTI_WHITE";
  PrinterStyleKey[PrinterStyleKey["ENABLE_STRIKETHROUGH"] = 1005] = "ENABLE_STRIKETHROUGH";
  PrinterStyleKey[PrinterStyleKey["ENABLE_ILALIC"] = 1006] = "ENABLE_ILALIC";
  PrinterStyleKey[PrinterStyleKey["ENABLE_INVERT"] = 1007] = "ENABLE_INVERT";
  PrinterStyleKey[PrinterStyleKey["SET_TEXT_RIGHT_SPACING"] = 2000] = "SET_TEXT_RIGHT_SPACING";
  PrinterStyleKey[PrinterStyleKey["SET_RELATIVE_POSITION"] = 2001] = "SET_RELATIVE_POSITION";
  PrinterStyleKey[PrinterStyleKey["SET_ABSOLUATE_POSITION"] = 2002] = "SET_ABSOLUATE_POSITION";
  PrinterStyleKey[PrinterStyleKey["SET_LINE_SPACING"] = 2003] = "SET_LINE_SPACING";
  PrinterStyleKey[PrinterStyleKey["SET_LEFT_SPACING"] = 2004] = "SET_LEFT_SPACING";
  PrinterStyleKey[PrinterStyleKey["SET_STRIKETHROUGH_STYLE"] = 2005] = "SET_STRIKETHROUGH_STYLE";
  return PrinterStyleKey;
}({});
exports.PrinterStyleKey = PrinterStyleKey;
let PrinterStyleValue = /*#__PURE__*/function (PrinterStyleValue) {
  PrinterStyleValue[PrinterStyleValue["ENABLE"] = 1] = "ENABLE";
  PrinterStyleValue[PrinterStyleValue["DISABLE"] = 2] = "DISABLE";
  return PrinterStyleValue;
}({});
exports.PrinterStyleValue = PrinterStyleValue;
let AlignValue = /*#__PURE__*/function (AlignValue) {
  AlignValue[AlignValue["LEFT"] = 0] = "LEFT";
  AlignValue[AlignValue["CENTER"] = 1] = "CENTER";
  AlignValue[AlignValue["RIGHT"] = 2] = "RIGHT";
  return AlignValue;
}({});
exports.AlignValue = AlignValue;
const SunmiScan = SunmiScanModule;
exports.SunmiScan = SunmiScan;
var _default = SunmiPrinter;
exports.default = _default;
//# sourceMappingURL=index.js.map