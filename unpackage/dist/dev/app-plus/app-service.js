var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const version = "3.1.6";
  {
    formatAppLog("log", "at node_modules/uview-plus/libs/config/config.js:6", `
 %c uview-plus V${version} %c https://uiadmin.net/uview-plus 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  var config = {
    v: version,
    version,
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    unit: "px"
  };
  var actionSheet = {
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: () => [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  var album = {
    album: {
      urls: () => [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  var alert = {
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  var avatar = {
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  var avatarGroup = {
    avatarGroup: {
      urls: () => [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  var backtop = {
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: () => ({
        color: "#909399",
        fontSize: "19px"
      })
    }
  };
  var badge = {
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: () => [],
      inverted: false,
      absolute: false
    }
  };
  var button = {
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  var calendar = {
    calendar: {
      title: "\u65E5\u671F\u9009\u62E9",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "\u5F00\u59CB",
      endText: "\u7ED3\u675F",
      customList: () => [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "\u786E\u5B9A",
      confirmDisabledText: "\u786E\u5B9A",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  var carKeyboard = {
    carKeyboard: {
      random: false
    }
  };
  var cell = {
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  var cellGroup = {
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  var checkbox = {
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  var checkboxGroup = {
    checkboxGroup: {
      name: "",
      value: () => [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  var circleProgress = {
    circleProgress: {
      percentage: 30
    }
  };
  var code$1 = {
    code: {
      seconds: 60,
      startText: "\u83B7\u53D6\u9A8C\u8BC1\u7801",
      changeText: "X\u79D2\u91CD\u65B0\u83B7\u53D6",
      endText: "\u91CD\u65B0\u83B7\u53D6",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  var codeInput = {
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  var col = {
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  var collapse = {
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  var collapseItem = {
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  var columnNotice = {
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  var countDown = {
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  var countTo = {
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  var datetimePicker = {
    datetimePicker: {
      show: false,
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: () => []
    }
  };
  var divider = {
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  var empty$1 = {
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  var form = {
    form: {
      model: () => ({}),
      rules: () => ({}),
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: () => ({})
    }
  };
  var formItem = {
    formItem: {
      label: "",
      prop: "",
      borderBottom: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  var gap = {
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  var grid = {
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  var gridItem = {
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config;
  var icon = {
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  var image$1 = {
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  var indexAnchor = {
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  var indexList = {
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: () => [],
      sticky: true,
      customNavHeight: 0
    }
  };
  var input = {
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  var keyboard = {
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      autoChange: false
    }
  };
  var line = {
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  var lineProgress = {
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config;
  var link = {
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "\u94FE\u63A5\u5DF2\u590D\u5236\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u6253\u5F00",
      lineColor: "",
      text: ""
    }
  };
  var list = {
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  var listItem = {
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config;
  var loadingIcon = {
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  var loadingPage = {
    loadingPage: {
      loadingText: "\u6B63\u5728\u52A0\u8F7D",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  var loadmore = {
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "\u52A0\u8F7D\u66F4\u591A",
      loadingText: "\u6B63\u5728\u52A0\u8F7D...",
      nomoreText: "\u6CA1\u6709\u66F4\u591A\u4E86",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  var modal = {
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  var navbar = {
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  var noNetwork = {
    noNetwork: {
      tips: "\u54CE\u5440\uFF0C\u7F51\u7EDC\u4FE1\u53F7\u4E22\u5931",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  var noticeBar = {
    noticeBar: {
      text: () => [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  var notify = {
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  var numberBox = {
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  var numberKeyboard = {
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  var overlay = {
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  var parse = {
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  var picker = {
    picker: {
      show: false,
      showToolbar: true,
      title: "",
      columns: () => [],
      loading: false,
      itemHeight: 44,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u5B9A",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: () => [],
      immediateChange: false
    }
  };
  var popup = {
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: () => {
      },
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  var radio = {
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  var radioGroup = {
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  var rate = {
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  var readMore = {
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "\u5C55\u5F00\u9605\u8BFB\u5168\u6587",
      openText: "\u6536\u8D77",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  var row = {
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  var rowNotice = {
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  var scrollList = {
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  var search = {
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: () => ({}),
      actionText: "\u641C\u7D22",
      inputAlign: "left",
      inputStyle: () => ({}),
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  var section = {
    section: {
      title: "",
      subTitle: "\u66F4\u591A",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  var skeleton = {
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  var slider = {
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: () => {
      }
    }
  };
  var statusBar = {
    statusBar: {
      bgColor: "transparent"
    }
  };
  var steps = {
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  var stepsItem = {
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  var sticky = {
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  var subsection = {
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  var swipeAction = {
    swipeAction: {
      autoClose: true
    }
  };
  var swipeActionItem = {
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  var swiper = {
    swiper: {
      list: () => [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  var swipterIndicator = {
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  var _switch = {
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  var tabbar = {
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  var tabbarItem = {
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  var tabs = {
    tabs: {
      duration: 300,
      list: () => [],
      lineColor: "#3c9cff",
      activeStyle: () => ({
        color: "#303133"
      }),
      inactiveStyle: () => ({
        color: "#606266"
      }),
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: () => ({
        height: "44px"
      }),
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  var tag = {
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: ""
    }
  };
  var text = {
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: () => ({
        fontSize: "15px"
      }),
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  var textarea = {
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  var toast$1 = {
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: () => {
      },
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  var toolbar = {
    toolbar: {
      show: true,
      cancelText: "\u53D6\u6D88",
      confirmText: "\u786E\u8BA4",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  var tooltip = {
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: () => [],
      overlay: true,
      showToast: true
    }
  };
  var transition$1 = {
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  var upload = {
    upload: {
      accept: "image",
      capture: () => ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: () => ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: () => [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  var props$u = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, actionSheet), album), alert), avatar), avatarGroup), backtop), badge), button), calendar), carKeyboard), cell), cellGroup), checkbox), checkboxGroup), circleProgress), code$1), codeInput), col), collapse), collapseItem), columnNotice), countDown), countTo), datetimePicker), divider), empty$1), form), formItem), gap), grid), gridItem), icon), image$1), indexAnchor), indexList), input), keyboard), line), lineProgress), link), list), listItem), loadingIcon), loadingPage), loadmore), modal), navbar), noNetwork), noticeBar), notify), numberBox), numberKeyboard), overlay), parse), picker), popup), radio), radioGroup), rate), readMore), row), rowNotice), scrollList), search), section), skeleton), slider), statusBar), steps), stepsItem), sticky), subsection), swipeAction), swipeActionItem), swiper), swipterIndicator), _switch), tabbar), tabbarItem), tabs), tag), text), textarea), toast$1), toolbar), tooltip), transition$1), upload);
  var props$t = {
    props: {
      show: {
        type: Boolean,
        default: props$u.loadingIcon.show
      },
      color: {
        type: String,
        default: props$u.loadingIcon.color
      },
      textColor: {
        type: String,
        default: props$u.loadingIcon.textColor
      },
      vertical: {
        type: Boolean,
        default: props$u.loadingIcon.vertical
      },
      mode: {
        type: String,
        default: props$u.loadingIcon.mode
      },
      size: {
        type: [String, Number],
        default: props$u.loadingIcon.size
      },
      textSize: {
        type: [String, Number],
        default: props$u.loadingIcon.textSize
      },
      text: {
        type: [String, Number],
        default: props$u.loadingIcon.text
      },
      timingFunction: {
        type: String,
        default: props$u.loadingIcon.timingFunction
      },
      duration: {
        type: [String, Number],
        default: props$u.loadingIcon.duration
      },
      inactiveColor: {
        type: String,
        default: props$u.loadingIcon.inactiveColor
      }
    }
  };
  var mpMixin = {};
  var mixin = {
    props: {
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: ""
      },
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      $u() {
        return uni.$u.deepMerge(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = uni.$u.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && uni.$u.test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  var _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$O = {
    name: "u-loading-icon",
    mixins: [mpMixin, mixin, props$t],
    data() {
      return {
        array12: Array.from({
          length: 12
        }),
        aniAngel: 360,
        webviewHide: false,
        loading: false
      };
    },
    computed: {
      otherBorderColor() {
        const lightColor = uni.$u.colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-loading-icon", [_ctx.vertical && "u-loading-icon--vertical"]]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-loading-icon__spinner", [`u-loading-icon__spinner--${_ctx.mode}`]]),
        ref: "ani",
        style: vue.normalizeStyle({
          color: _ctx.color,
          width: _ctx.$u.addUnit(_ctx.size),
          height: _ctx.$u.addUnit(_ctx.size),
          borderTopColor: _ctx.color,
          borderBottomColor: $options.otherBorderColor,
          borderLeftColor: $options.otherBorderColor,
          borderRightColor: $options.otherBorderColor,
          "animation-duration": `${_ctx.duration}ms`,
          "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
        })
      }, [
        _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList($data.array12, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: index2,
            class: "u-loading-icon__dot"
          });
        }), 128)) : vue.createCommentVNode("v-if", true)
      ], 6)) : vue.createCommentVNode("v-if", true),
      _ctx.text ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: "u-loading-icon__text",
        style: vue.normalizeStyle({
          fontSize: _ctx.$u.addUnit(_ctx.textSize),
          color: _ctx.textColor
        })
      }, vue.toDisplayString(_ctx.text), 5)) : vue.createCommentVNode("v-if", true)
    ], 6)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_1$c = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$N], ["__scopeId", "data-v-854b5fbe"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-loading-icon/u-loading-icon.vue"]]);
  var props$s = {
    props: {
      length: {
        type: [String, Number],
        default: props$u.swiperIndicator.length
      },
      current: {
        type: [String, Number],
        default: props$u.swiperIndicator.current
      },
      indicatorActiveColor: {
        type: String,
        default: props$u.swiperIndicator.indicatorActiveColor
      },
      indicatorInactiveColor: {
        type: String,
        default: props$u.swiperIndicator.indicatorInactiveColor
      },
      indicatorMode: {
        type: String,
        default: props$u.swiperIndicator.indicatorMode
      }
    }
  };
  const _sfc_main$N = {
    name: "u-swiper-indicator",
    mixins: [mpMixin, mixin, props$s],
    data() {
      return {
        lineWidth: 22
      };
    },
    computed: {
      lineStyle() {
        let style = {};
        style.width = uni.$u.addUnit(this.lineWidth);
        style.transform = `translateX(${uni.$u.addUnit(this.current * this.lineWidth)})`;
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      dotStyle() {
        return (index2) => {
          let style = {};
          style.backgroundColor = index2 === this.current ? this.indicatorActiveColor : this.indicatorInactiveColor;
          return style;
        };
      }
    }
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-swiper-indicator" }, [
      _ctx.indicatorMode === "line" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["u-swiper-indicator__wrapper", [`u-swiper-indicator__wrapper--${_ctx.indicatorMode}`]]),
        style: vue.normalizeStyle({
          width: _ctx.$u.addUnit($data.lineWidth * _ctx.length),
          backgroundColor: _ctx.indicatorInactiveColor
        })
      }, [
        vue.createElementVNode("view", {
          class: "u-swiper-indicator__wrapper--line__bar",
          style: vue.normalizeStyle([$options.lineStyle])
        }, null, 4)
      ], 6)) : vue.createCommentVNode("v-if", true),
      _ctx.indicatorMode === "dot" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-swiper-indicator__wrapper"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.length, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["u-swiper-indicator__wrapper__dot", [index2 === _ctx.current && "u-swiper-indicator__wrapper__dot--active"]]),
            key: index2,
            style: vue.normalizeStyle([$options.dotStyle(index2)])
          }, null, 6);
        }), 128))
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_1$b = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$M], ["__scopeId", "data-v-487724be"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-swiper-indicator/u-swiper-indicator.vue"]]);
  var props$r = {
    props: {
      list: {
        type: Array,
        default: props$u.swiper.list
      },
      indicator: {
        type: Boolean,
        default: props$u.swiper.indicator
      },
      indicatorActiveColor: {
        type: String,
        default: props$u.swiper.indicatorActiveColor
      },
      indicatorInactiveColor: {
        type: String,
        default: props$u.swiper.indicatorInactiveColor
      },
      indicatorStyle: {
        type: [String, Object],
        default: props$u.swiper.indicatorStyle
      },
      indicatorMode: {
        type: String,
        default: props$u.swiper.indicatorMode
      },
      autoplay: {
        type: Boolean,
        default: props$u.swiper.autoplay
      },
      current: {
        type: [String, Number],
        default: props$u.swiper.current
      },
      currentItemId: {
        type: String,
        default: props$u.swiper.currentItemId
      },
      interval: {
        type: [String, Number],
        default: props$u.swiper.interval
      },
      duration: {
        type: [String, Number],
        default: props$u.swiper.duration
      },
      circular: {
        type: Boolean,
        default: props$u.swiper.circular
      },
      previousMargin: {
        type: [String, Number],
        default: props$u.swiper.previousMargin
      },
      nextMargin: {
        type: [String, Number],
        default: props$u.swiper.nextMargin
      },
      acceleration: {
        type: Boolean,
        default: props$u.swiper.acceleration
      },
      displayMultipleItems: {
        type: Number,
        default: props$u.swiper.displayMultipleItems
      },
      easingFunction: {
        type: String,
        default: props$u.swiper.easingFunction
      },
      keyName: {
        type: String,
        default: props$u.swiper.keyName
      },
      imgMode: {
        type: String,
        default: props$u.swiper.imgMode
      },
      height: {
        type: [String, Number],
        default: props$u.swiper.height
      },
      bgColor: {
        type: String,
        default: props$u.swiper.bgColor
      },
      radius: {
        type: [String, Number],
        default: props$u.swiper.radius
      },
      loading: {
        type: Boolean,
        default: props$u.swiper.loading
      },
      showTitle: {
        type: Boolean,
        default: props$u.swiper.showTitle
      }
    }
  };
  const _sfc_main$M = {
    name: "u-swiper",
    mixins: [mpMixin, mixin, props$r],
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val, preVal) {
        if (val === preVal)
          return;
        this.currentIndex = val;
      }
    },
    computed: {
      itemStyle() {
        return (index2) => {
          const style = {};
          if (this.nextMargin && this.previousMargin) {
            style.borderRadius = uni.$u.addUnit(this.radius);
            if (index2 !== this.currentIndex)
              style.transform = "scale(0.92)";
          }
          return style;
        };
      }
    },
    methods: {
      getItemType(item) {
        if (typeof item === "string")
          return uni.$u.test.video(this.getSource(item)) ? "video" : "image";
        if (typeof item === "object" && this.keyName) {
          if (!item.type)
            return uni.$u.test.video(this.getSource(item)) ? "video" : "image";
          if (item.type === "image")
            return "image";
          if (item.type === "video")
            return "video";
          return "image";
        }
      },
      getSource(item) {
        if (typeof item === "string")
          return item;
        if (typeof item === "object" && this.keyName)
          return item[this.keyName];
        else
          uni.$u.error("\u8BF7\u6309\u683C\u5F0F\u4F20\u9012\u5217\u8868\u53C2\u6570");
        return "";
      },
      change(e) {
        const {
          current
        } = e.detail;
        this.pauseVideo(this.currentIndex);
        this.currentIndex = current;
        this.$emit("change", e.detail);
      },
      pauseVideo(index2) {
        const lastItem = this.getSource(this.list[index2]);
        if (uni.$u.test.video(lastItem)) {
          const video2 = uni.createVideoContext(`video-${index2}`, this);
          video2.pause();
        }
      },
      getPoster(item) {
        return typeof item === "object" && item.poster ? item.poster : "";
      },
      clickHandler(index2) {
        this.$emit("click", index2);
      }
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$c);
    const _component_u_swiper_indicator = resolveEasycom(vue.resolveDynamicComponent("u-swiper-indicator"), __easycom_1$b);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-swiper",
      style: vue.normalizeStyle({
        backgroundColor: _ctx.bgColor,
        height: _ctx.$u.addUnit(_ctx.height),
        borderRadius: _ctx.$u.addUnit(_ctx.radius)
      })
    }, [
      _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-swiper__loading"
      }, [
        vue.createVNode(_component_u_loading_icon, { mode: "circle" })
      ])) : (vue.openBlock(), vue.createElementBlock("swiper", {
        key: 1,
        class: "u-swiper__wrapper",
        style: vue.normalizeStyle({
          height: _ctx.$u.addUnit(_ctx.height)
        }),
        onChange: _cache[0] || (_cache[0] = (...args) => $options.change && $options.change(...args)),
        circular: _ctx.circular,
        interval: _ctx.interval,
        duration: _ctx.duration,
        autoplay: _ctx.autoplay,
        current: _ctx.current,
        currentItemId: _ctx.currentItemId,
        previousMargin: _ctx.$u.addUnit(_ctx.previousMargin),
        nextMargin: _ctx.$u.addUnit(_ctx.nextMargin),
        acceleration: _ctx.acceleration,
        displayMultipleItems: _ctx.displayMultipleItems,
        easingFunction: _ctx.easingFunction
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            class: "u-swiper__wrapper__item",
            key: index2
          }, [
            vue.createElementVNode("view", {
              class: "u-swiper__wrapper__item__wrapper",
              style: vue.normalizeStyle([$options.itemStyle(index2)])
            }, [
              vue.createCommentVNode(" \u5728nvue\u4E2D\uFF0Cimage\u56FE\u7247\u7684\u5BBD\u5EA6\u9ED8\u8BA4\u4E3A\u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u9700\u8981\u901A\u8FC7flex:1\u6491\u5F00\uFF0C\u53E6\u5916\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u624D\u80FD\u663E\u793A\u56FE\u7247 "),
              $options.getItemType(item) === "image" ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                class: "u-swiper__wrapper__item__wrapper__image",
                src: $options.getSource(item),
                mode: _ctx.imgMode,
                onClick: ($event) => $options.clickHandler(index2),
                style: vue.normalizeStyle({
                  height: _ctx.$u.addUnit(_ctx.height),
                  borderRadius: _ctx.$u.addUnit(_ctx.radius)
                })
              }, null, 12, ["src", "mode", "onClick"])) : vue.createCommentVNode("v-if", true),
              $options.getItemType(item) === "video" ? (vue.openBlock(), vue.createElementBlock("video", {
                key: 1,
                class: "u-swiper__wrapper__item__wrapper__video",
                id: `video-${index2}`,
                "enable-progress-gesture": false,
                src: $options.getSource(item),
                poster: $options.getPoster(item),
                title: _ctx.showTitle && _ctx.$u.test.object(item) && item.title ? item.title : "",
                style: vue.normalizeStyle({
                  height: _ctx.$u.addUnit(_ctx.height)
                }),
                controls: "",
                onClick: ($event) => $options.clickHandler(index2)
              }, null, 12, ["id", "src", "poster", "title", "onClick"])) : vue.createCommentVNode("v-if", true),
              _ctx.showTitle && _ctx.$u.test.object(item) && item.title && _ctx.$u.test.image($options.getSource(item)) ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 2,
                class: "u-swiper__wrapper__item__wrapper__title u-line-1"
              }, vue.toDisplayString(item.title), 1)) : vue.createCommentVNode("v-if", true)
            ], 4)
          ]);
        }), 128))
      ], 44, ["circular", "interval", "duration", "autoplay", "current", "currentItemId", "previousMargin", "nextMargin", "acceleration", "displayMultipleItems", "easingFunction"])),
      vue.createElementVNode("view", {
        class: "u-swiper__indicator",
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.indicatorStyle)])
      }, [
        vue.renderSlot(_ctx.$slots, "indicator", {}, () => [
          !_ctx.loading && _ctx.indicator && !_ctx.showTitle ? (vue.openBlock(), vue.createBlock(_component_u_swiper_indicator, {
            key: 0,
            indicatorActiveColor: _ctx.indicatorActiveColor,
            indicatorInactiveColor: _ctx.indicatorInactiveColor,
            length: _ctx.list.length,
            current: $data.currentIndex,
            indicatorMode: _ctx.indicatorMode
          }, null, 8, ["indicatorActiveColor", "indicatorInactiveColor", "length", "current", "indicatorMode"])) : vue.createCommentVNode("v-if", true)
        ], true)
      ], 4)
    ], 4);
  }
  var __easycom_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$L], ["__scopeId", "data-v-a2b426be"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-swiper/u-swiper.vue"]]);
  var $http = {
    common: {
      baseURL: "https://www.fastmock.site/mock/74f9838477eab1de44a93ee164c0589e/hibuy",
      method: "GET",
      data: {},
      headers: {
        "Content-Type": "application/json"
      },
      dataType: "json"
    },
    request(option = {}) {
      const options = __spreadValues({}, option);
      options.url = this.common.baseURL + options.url;
      options.data = options.data || this.common.data;
      options.headers = options.headers || this.common.headers;
      options.method = options.method || this.common.method;
      options.dataType = options.dataType || this.common.dataType;
      return new Promise((res, rej) => {
        uni.request(__spreadProps(__spreadValues({}, options), {
          success: (result) => {
            if (result.statusCode !== 200) {
              return rej();
            }
            const { data } = result;
            return res(data);
          }
        }));
      });
    }
  };
  var icons = {
    "uicon-level": "\uE693",
    "uicon-column-line": "\uE68E",
    "uicon-checkbox-mark": "\uE807",
    "uicon-folder": "\uE7F5",
    "uicon-movie": "\uE7F6",
    "uicon-star-fill": "\uE669",
    "uicon-star": "\uE65F",
    "uicon-phone-fill": "\uE64F",
    "uicon-phone": "\uE622",
    "uicon-apple-fill": "\uE881",
    "uicon-chrome-circle-fill": "\uE885",
    "uicon-backspace": "\uE67B",
    "uicon-attach": "\uE632",
    "uicon-cut": "\uE948",
    "uicon-empty-car": "\uE602",
    "uicon-empty-coupon": "\uE682",
    "uicon-empty-address": "\uE646",
    "uicon-empty-favor": "\uE67C",
    "uicon-empty-permission": "\uE686",
    "uicon-empty-news": "\uE687",
    "uicon-empty-search": "\uE664",
    "uicon-github-circle-fill": "\uE887",
    "uicon-rmb": "\uE608",
    "uicon-person-delete-fill": "\uE66A",
    "uicon-reload": "\uE788",
    "uicon-order": "\uE68F",
    "uicon-server-man": "\uE6BC",
    "uicon-search": "\uE62A",
    "uicon-fingerprint": "\uE955",
    "uicon-more-dot-fill": "\uE630",
    "uicon-scan": "\uE662",
    "uicon-share-square": "\uE60B",
    "uicon-map": "\uE61D",
    "uicon-map-fill": "\uE64E",
    "uicon-tags": "\uE629",
    "uicon-tags-fill": "\uE651",
    "uicon-bookmark-fill": "\uE63B",
    "uicon-bookmark": "\uE60A",
    "uicon-eye": "\uE613",
    "uicon-eye-fill": "\uE641",
    "uicon-mic": "\uE64A",
    "uicon-mic-off": "\uE649",
    "uicon-calendar": "\uE66E",
    "uicon-calendar-fill": "\uE634",
    "uicon-trash": "\uE623",
    "uicon-trash-fill": "\uE658",
    "uicon-play-left": "\uE66D",
    "uicon-play-right": "\uE610",
    "uicon-minus": "\uE618",
    "uicon-plus": "\uE62D",
    "uicon-info": "\uE653",
    "uicon-info-circle": "\uE7D2",
    "uicon-info-circle-fill": "\uE64B",
    "uicon-question": "\uE715",
    "uicon-error": "\uE6D3",
    "uicon-close": "\uE685",
    "uicon-checkmark": "\uE6A8",
    "uicon-android-circle-fill": "\uE67E",
    "uicon-android-fill": "\uE67D",
    "uicon-ie": "\uE87B",
    "uicon-IE-circle-fill": "\uE889",
    "uicon-google": "\uE87A",
    "uicon-google-circle-fill": "\uE88A",
    "uicon-setting-fill": "\uE872",
    "uicon-setting": "\uE61F",
    "uicon-minus-square-fill": "\uE855",
    "uicon-plus-square-fill": "\uE856",
    "uicon-heart": "\uE7DF",
    "uicon-heart-fill": "\uE851",
    "uicon-camera": "\uE7D7",
    "uicon-camera-fill": "\uE870",
    "uicon-more-circle": "\uE63E",
    "uicon-more-circle-fill": "\uE645",
    "uicon-chat": "\uE620",
    "uicon-chat-fill": "\uE61E",
    "uicon-bag-fill": "\uE617",
    "uicon-bag": "\uE619",
    "uicon-error-circle-fill": "\uE62C",
    "uicon-error-circle": "\uE624",
    "uicon-close-circle": "\uE63F",
    "uicon-close-circle-fill": "\uE637",
    "uicon-checkmark-circle": "\uE63D",
    "uicon-checkmark-circle-fill": "\uE635",
    "uicon-question-circle-fill": "\uE666",
    "uicon-question-circle": "\uE625",
    "uicon-share": "\uE631",
    "uicon-share-fill": "\uE65E",
    "uicon-shopping-cart": "\uE621",
    "uicon-shopping-cart-fill": "\uE65D",
    "uicon-bell": "\uE609",
    "uicon-bell-fill": "\uE640",
    "uicon-list": "\uE650",
    "uicon-list-dot": "\uE616",
    "uicon-zhihu": "\uE6BA",
    "uicon-zhihu-circle-fill": "\uE709",
    "uicon-zhifubao": "\uE6B9",
    "uicon-zhifubao-circle-fill": "\uE6B8",
    "uicon-weixin-circle-fill": "\uE6B1",
    "uicon-weixin-fill": "\uE6B2",
    "uicon-twitter-circle-fill": "\uE6AB",
    "uicon-twitter": "\uE6AA",
    "uicon-taobao-circle-fill": "\uE6A7",
    "uicon-taobao": "\uE6A6",
    "uicon-weibo-circle-fill": "\uE6A5",
    "uicon-weibo": "\uE6A4",
    "uicon-qq-fill": "\uE6A1",
    "uicon-qq-circle-fill": "\uE6A0",
    "uicon-moments-circel-fill": "\uE69A",
    "uicon-moments": "\uE69B",
    "uicon-qzone": "\uE695",
    "uicon-qzone-circle-fill": "\uE696",
    "uicon-baidu-circle-fill": "\uE680",
    "uicon-baidu": "\uE681",
    "uicon-facebook-circle-fill": "\uE68A",
    "uicon-facebook": "\uE689",
    "uicon-car": "\uE60C",
    "uicon-car-fill": "\uE636",
    "uicon-warning-fill": "\uE64D",
    "uicon-warning": "\uE694",
    "uicon-clock-fill": "\uE638",
    "uicon-clock": "\uE60F",
    "uicon-edit-pen": "\uE612",
    "uicon-edit-pen-fill": "\uE66B",
    "uicon-email": "\uE611",
    "uicon-email-fill": "\uE642",
    "uicon-minus-circle": "\uE61B",
    "uicon-minus-circle-fill": "\uE652",
    "uicon-plus-circle": "\uE62E",
    "uicon-plus-circle-fill": "\uE661",
    "uicon-file-text": "\uE663",
    "uicon-file-text-fill": "\uE665",
    "uicon-pushpin": "\uE7E3",
    "uicon-pushpin-fill": "\uE86E",
    "uicon-grid": "\uE673",
    "uicon-grid-fill": "\uE678",
    "uicon-play-circle": "\uE647",
    "uicon-play-circle-fill": "\uE655",
    "uicon-pause-circle-fill": "\uE654",
    "uicon-pause": "\uE8FA",
    "uicon-pause-circle": "\uE643",
    "uicon-eye-off": "\uE648",
    "uicon-eye-off-outline": "\uE62B",
    "uicon-gift-fill": "\uE65C",
    "uicon-gift": "\uE65B",
    "uicon-rmb-circle-fill": "\uE657",
    "uicon-rmb-circle": "\uE677",
    "uicon-kefu-ermai": "\uE656",
    "uicon-server-fill": "\uE751",
    "uicon-coupon-fill": "\uE8C4",
    "uicon-coupon": "\uE8AE",
    "uicon-integral": "\uE704",
    "uicon-integral-fill": "\uE703",
    "uicon-home-fill": "\uE964",
    "uicon-home": "\uE965",
    "uicon-hourglass-half-fill": "\uE966",
    "uicon-hourglass": "\uE967",
    "uicon-account": "\uE628",
    "uicon-plus-people-fill": "\uE626",
    "uicon-minus-people-fill": "\uE615",
    "uicon-account-fill": "\uE614",
    "uicon-thumb-down-fill": "\uE726",
    "uicon-thumb-down": "\uE727",
    "uicon-thumb-up": "\uE733",
    "uicon-thumb-up-fill": "\uE72F",
    "uicon-lock-fill": "\uE979",
    "uicon-lock-open": "\uE973",
    "uicon-lock-opened-fill": "\uE974",
    "uicon-lock": "\uE97A",
    "uicon-red-packet-fill": "\uE690",
    "uicon-photo-fill": "\uE98B",
    "uicon-photo": "\uE98D",
    "uicon-volume-off-fill": "\uE659",
    "uicon-volume-off": "\uE644",
    "uicon-volume-fill": "\uE670",
    "uicon-volume": "\uE633",
    "uicon-red-packet": "\uE691",
    "uicon-download": "\uE63C",
    "uicon-arrow-up-fill": "\uE6B0",
    "uicon-arrow-down-fill": "\uE600",
    "uicon-play-left-fill": "\uE675",
    "uicon-play-right-fill": "\uE676",
    "uicon-rewind-left-fill": "\uE679",
    "uicon-rewind-right-fill": "\uE67A",
    "uicon-arrow-downward": "\uE604",
    "uicon-arrow-leftward": "\uE601",
    "uicon-arrow-rightward": "\uE603",
    "uicon-arrow-upward": "\uE607",
    "uicon-arrow-down": "\uE60D",
    "uicon-arrow-right": "\uE605",
    "uicon-arrow-left": "\uE60E",
    "uicon-arrow-up": "\uE606",
    "uicon-skip-back-left": "\uE674",
    "uicon-skip-forward-right": "\uE672",
    "uicon-rewind-right": "\uE66F",
    "uicon-rewind-left": "\uE671",
    "uicon-arrow-right-double": "\uE68D",
    "uicon-arrow-left-double": "\uE68C",
    "uicon-wifi-off": "\uE668",
    "uicon-wifi": "\uE667",
    "uicon-empty-data": "\uE62F",
    "uicon-empty-history": "\uE684",
    "uicon-empty-list": "\uE68B",
    "uicon-empty-page": "\uE627",
    "uicon-empty-order": "\uE639",
    "uicon-man": "\uE697",
    "uicon-woman": "\uE69C",
    "uicon-man-add": "\uE61C",
    "uicon-man-add-fill": "\uE64C",
    "uicon-man-delete": "\uE61A",
    "uicon-man-delete-fill": "\uE66A",
    "uicon-zh": "\uE70A",
    "uicon-en": "\uE692"
  };
  var props$q = {
    props: {
      name: {
        type: String,
        default: props$u.icon.name
      },
      color: {
        type: String,
        default: props$u.icon.color
      },
      size: {
        type: [String, Number],
        default: props$u.icon.size
      },
      bold: {
        type: Boolean,
        default: props$u.icon.bold
      },
      index: {
        type: [String, Number],
        default: props$u.icon.index
      },
      hoverClass: {
        type: String,
        default: props$u.icon.hoverClass
      },
      customPrefix: {
        type: String,
        default: props$u.icon.customPrefix
      },
      label: {
        type: [String, Number],
        default: props$u.icon.label
      },
      labelPos: {
        type: String,
        default: props$u.icon.labelPos
      },
      labelSize: {
        type: [String, Number],
        default: props$u.icon.labelSize
      },
      labelColor: {
        type: String,
        default: props$u.icon.labelColor
      },
      space: {
        type: [String, Number],
        default: props$u.icon.space
      },
      imgMode: {
        type: String,
        default: props$u.icon.imgMode
      },
      width: {
        type: [String, Number],
        default: props$u.icon.width
      },
      height: {
        type: [String, Number],
        default: props$u.icon.height
      },
      top: {
        type: [String, Number],
        default: props$u.icon.top
      },
      stop: {
        type: Boolean,
        default: props$u.icon.stop
      }
    }
  };
  const _sfc_main$L = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$q],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && uni.$u.config.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: uni.$u.addUnit(this.size),
          lineHeight: uni.$u.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: uni.$u.addUnit(this.top)
        };
        if (this.color && !uni.$u.config.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? uni.$u.addUnit(this.width) : uni.$u.addUnit(this.size);
        style.height = this.height ? uni.$u.addUnit(this.height) : uni.$u.addUnit(this.size);
        return style;
      },
      icon() {
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "u-icon__img",
        src: _ctx.name,
        mode: _ctx.imgMode,
        style: vue.normalizeStyle([$options.imgStyle, _ctx.$u.addStyle(_ctx.customStyle)])
      }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
        style: vue.normalizeStyle([$options.iconStyle, _ctx.$u.addStyle(_ctx.customStyle)]),
        "hover-class": _ctx.hoverClass
      }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
      vue.createCommentVNode(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
      _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "u-icon__label",
        style: vue.normalizeStyle({
          color: _ctx.labelColor,
          fontSize: _ctx.$u.addUnit(_ctx.labelSize),
          marginLeft: _ctx.labelPos == "right" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginTop: _ctx.labelPos == "bottom" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginRight: _ctx.labelPos == "left" ? _ctx.$u.addUnit(_ctx.space) : 0,
          marginBottom: _ctx.labelPos == "top" ? _ctx.$u.addUnit(_ctx.space) : 0
        })
      }, vue.toDisplayString(_ctx.label), 5)) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K], ["__scopeId", "data-v-6dbbd241"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  var props$p = {
    props: {
      show: {
        type: Boolean,
        default: props$u.transition.show
      },
      mode: {
        type: String,
        default: props$u.transition.mode
      },
      duration: {
        type: [String, Number],
        default: props$u.transition.duration
      },
      timingFunction: {
        type: String,
        default: props$u.transition.timingFunction
      }
    }
  };
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  var transition = {
    methods: {
      clickHandler() {
        this.$emit("click");
      },
      vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        this.$nextTick(async () => {
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        });
      },
      vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        this.$nextTick(() => {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        });
      },
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _sfc_main$K = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        viewStyle: {},
        status: "",
        transitionEnded: false,
        display: false,
        classes: ""
      };
    },
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return __spreadValues(__spreadValues({
          transitionDuration: `${this.duration}ms`,
          transitionTimingFunction: this.timingFunction
        }, uni.$u.addStyle(customStyle)), viewStyle);
      }
    },
    mixins: [mpMixin, mixin, transition, props$p],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        immediate: true
      }
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-transition", $data.classes]),
      ref: "u-transition",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
      style: vue.normalizeStyle([$options.mergeStyle]),
      onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 38)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_1$a = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__scopeId", "data-v-1eafea41"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-transition/u-transition.vue"]]);
  var props$o = {
    props: {
      src: {
        type: String,
        default: props$u.image.src
      },
      mode: {
        type: String,
        default: props$u.image.mode
      },
      width: {
        type: [String, Number],
        default: props$u.image.width
      },
      height: {
        type: [String, Number],
        default: props$u.image.height
      },
      shape: {
        type: String,
        default: props$u.image.shape
      },
      radius: {
        type: [String, Number],
        default: props$u.image.radius
      },
      lazyLoad: {
        type: Boolean,
        default: props$u.image.lazyLoad
      },
      showMenuByLongpress: {
        type: Boolean,
        default: props$u.image.showMenuByLongpress
      },
      loadingIcon: {
        type: String,
        default: props$u.image.loadingIcon
      },
      errorIcon: {
        type: String,
        default: props$u.image.errorIcon
      },
      showLoading: {
        type: Boolean,
        default: props$u.image.showLoading
      },
      showError: {
        type: Boolean,
        default: props$u.image.showError
      },
      fade: {
        type: Boolean,
        default: props$u.image.fade
      },
      webp: {
        type: Boolean,
        default: props$u.image.webp
      },
      duration: {
        type: [String, Number],
        default: props$u.image.duration
      },
      bgColor: {
        type: String,
        default: props$u.image.bgColor
      }
    }
  };
  const _sfc_main$J = {
    name: "u-image",
    mixins: [mpMixin, mixin, props$o],
    data() {
      return {
        isError: false,
        loading: true,
        opacity: 1,
        durationTime: this.duration,
        backgroundStyle: {},
        show: false
      };
    },
    watch: {
      src: {
        immediate: true,
        handler(n) {
          if (!n) {
            this.isError = true;
          } else {
            this.isError = false;
            this.loading = true;
          }
        }
      }
    },
    computed: {
      wrapStyle() {
        let style = {};
        style.width = this.$u.addUnit(this.width);
        style.height = this.$u.addUnit(this.height);
        style.borderRadius = this.shape == "circle" ? "10000px" : uni.$u.addUnit(this.radius);
        style.overflow = this.radius > 0 ? "hidden" : "visible";
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
      this.show = true;
    },
    emits: ["click", "error", "load"],
    methods: {
      onClick() {
        this.$emit("click");
      },
      onErrorHandler(err) {
        this.loading = false;
        this.isError = true;
        this.$emit("error", err);
      },
      onLoadHandler(event) {
        this.loading = false;
        this.isError = false;
        this.$emit("load", event);
        this.removeBgColor();
      },
      removeBgColor() {
        this.backgroundStyle = {
          backgroundColor: "transparent"
        };
      }
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$a);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      mode: "fade",
      show: $data.show,
      duration: _ctx.fade ? 1e3 : 0
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: "u-image",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onClick && $options.onClick(...args)),
          style: vue.normalizeStyle([$options.wrapStyle, $data.backgroundStyle])
        }, [
          !$data.isError ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            src: _ctx.src,
            mode: _ctx.mode,
            onError: _cache[0] || (_cache[0] = (...args) => $options.onErrorHandler && $options.onErrorHandler(...args)),
            onLoad: _cache[1] || (_cache[1] = (...args) => $options.onLoadHandler && $options.onLoadHandler(...args)),
            "show-menu-by-longpress": _ctx.showMenuByLongpress,
            "lazy-load": _ctx.lazyLoad,
            class: "u-image__image",
            style: vue.normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "10000px" : _ctx.$u.addUnit(_ctx.radius),
              width: _ctx.$u.addUnit(_ctx.width),
              height: _ctx.$u.addUnit(_ctx.height)
            })
          }, null, 44, ["src", "mode", "show-menu-by-longpress", "lazy-load"])) : vue.createCommentVNode("v-if", true),
          _ctx.showLoading && $data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-image__loading",
            style: vue.normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "50%" : _ctx.$u.addUnit(_ctx.radius),
              backgroundColor: this.bgColor,
              width: _ctx.$u.addUnit(_ctx.width),
              height: _ctx.$u.addUnit(_ctx.height)
            })
          }, [
            vue.renderSlot(_ctx.$slots, "loading", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.loadingIcon,
                width: _ctx.width,
                height: _ctx.height
              }, null, 8, ["name", "width", "height"])
            ], true)
          ], 4)) : vue.createCommentVNode("v-if", true),
          _ctx.showError && $data.isError && !$data.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "u-image__error",
            style: vue.normalizeStyle({
              borderRadius: _ctx.shape == "circle" ? "50%" : _ctx.$u.addUnit(_ctx.radius),
              width: _ctx.$u.addUnit(_ctx.width),
              height: _ctx.$u.addUnit(_ctx.height)
            })
          }, [
            vue.renderSlot(_ctx.$slots, "error", {}, () => [
              vue.createVNode(_component_u_icon, {
                name: _ctx.errorIcon,
                width: _ctx.width,
                height: _ctx.height
              }, null, 8, ["name", "width", "height"])
            ], true)
          ], 4)) : vue.createCommentVNode("v-if", true)
        ], 4)
      ]),
      _: 3
    }, 8, ["show", "duration"]);
  }
  var uvImage = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__scopeId", "data-v-558b0c2e"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-image/u-image.vue"]]);
  const _sfc_main$I = {
    name: "u--image",
    mixins: [mpMixin, props$o, mixin],
    components: {
      uvImage
    },
    emits: ["click", "error", "load"]
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvImage = vue.resolveComponent("uvImage");
    return vue.openBlock(), vue.createBlock(_component_uvImage, {
      src: _ctx.src,
      mode: _ctx.mode,
      width: _ctx.width,
      height: _ctx.height,
      shape: _ctx.shape,
      radius: _ctx.radius,
      lazyLoad: _ctx.lazyLoad,
      showMenuByLongpress: _ctx.showMenuByLongpress,
      loadingIcon: _ctx.loadingIcon,
      errorIcon: _ctx.errorIcon,
      showLoading: _ctx.showLoading,
      showError: _ctx.showError,
      fade: _ctx.fade,
      webp: _ctx.webp,
      duration: _ctx.duration,
      bgColor: _ctx.bgColor,
      customStyle: _ctx.customStyle,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click")),
      onError: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("error")),
      onLoad: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("load"))
    }, {
      loading: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "loading")
      ]),
      error: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "error")
      ]),
      _: 3
    }, 8, ["src", "mode", "width", "height", "shape", "radius", "lazyLoad", "showMenuByLongpress", "loadingIcon", "errorIcon", "showLoading", "showError", "fade", "webp", "duration", "bgColor", "customStyle"]);
  }
  var __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u--image/u--image.vue"]]);
  var props$n = {
    props: {
      name: {
        type: [String, Number, null],
        default: props$u.gridItem.name
      },
      bgColor: {
        type: String,
        default: props$u.gridItem.bgColor
      }
    }
  };
  const _sfc_main$H = {
    name: "u-grid-item",
    mixins: [mpMixin, mixin, props$n],
    data() {
      return {
        parentData: {
          col: 3,
          border: true
        },
        classes: []
      };
    },
    mounted() {
      this.init();
    },
    computed: {
      width() {
        return 100 / Number(this.parentData.col) + "%";
      },
      itemStyle() {
        const style = {
          background: this.bgColor,
          width: this.width
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      init() {
        uni.$on("$uGridItem", () => {
          this.gridItemClasses();
        });
        this.updateParentData();
        uni.$emit("$uGridItem");
        this.gridItemClasses();
      },
      updateParentData() {
        this.getParentData("u-grid");
      },
      clickHandler() {
        var _a;
        let name = this.name;
        const children = (_a = this.parent) == null ? void 0 : _a.children;
        if (children && this.name === null) {
          name = children.findIndex((child) => child === this);
        }
        this.parent && this.parent.childClick(name);
        this.$emit("click", name);
      },
      async getItemWidth() {
        let width = 0;
        if (this.parent) {
          const parentWidth = await this.getParentWidth();
          width = parentWidth / Number(this.parentData.col) + "px";
        }
        this.width = width;
      },
      getParentWidth() {
      },
      gridItemClasses() {
        if (this.parentData.border) {
          let classes = [];
          this.parent.children.map((child, index2) => {
            if (this === child) {
              const len = this.parent.children.length;
              if ((index2 + 1) % this.parentData.col !== 0 && index2 + 1 !== len) {
                classes.push("u-border-right");
              }
              const lessNum = len % this.parentData.col === 0 ? this.parentData.col : len % this.parentData.col;
              if (index2 < len - lessNum) {
                classes.push("u-border-bottom");
              }
            }
          });
          this.classes = classes;
        }
      }
    },
    beforeDestroy() {
      uni.$off("$uGridItem");
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-grid-item", $data.classes]),
      "hover-class": "u-grid-item--hover-class",
      "hover-stay-time": 200,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      style: vue.normalizeStyle([$options.itemStyle])
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6);
  }
  var __easycom_1$9 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-44282027"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-grid-item/u-grid-item.vue"]]);
  var props$m = {
    props: {
      col: {
        type: [String, Number],
        default: props$u.grid.col
      },
      border: {
        type: Boolean,
        default: props$u.grid.border
      },
      align: {
        type: String,
        default: props$u.grid.align
      }
    }
  };
  const _sfc_main$G = {
    name: "u-grid",
    mixins: [mpMixin, mixin, props$m],
    data() {
      return {
        index: 0,
        width: 0
      };
    },
    watch: {
      parentData() {
        if (this.children.length) {
          this.children.map((child) => {
            typeof child.updateParentData == "function" && child.updateParentData();
          });
        }
      }
    },
    created() {
      this.children = [];
    },
    computed: {
      parentData() {
        return [this.hoverClass, this.col, this.size, this.border];
      },
      gridStyle() {
        let style = {};
        switch (this.align) {
          case "left":
            style.justifyContent = "flex-start";
            break;
          case "center":
            style.justifyContent = "center";
            break;
          case "right":
            style.justifyContent = "flex-end";
            break;
          default:
            style.justifyContent = "flex-start";
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      childClick(name) {
        this.$emit("click", name);
      }
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-grid",
      ref: "u-grid",
      style: vue.normalizeStyle([$options.gridStyle])
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__scopeId", "data-v-50f251a1"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-grid/u-grid.vue"]]);
  var props$l = {
    props: {
      bgColor: {
        type: String,
        default: props$u.gap.bgColor
      },
      height: {
        type: [String, Number],
        default: props$u.gap.height
      },
      marginTop: {
        type: [String, Number],
        default: props$u.gap.marginTop
      },
      marginBottom: {
        type: [String, Number],
        default: props$u.gap.marginBottom
      }
    }
  };
  const _sfc_main$F = {
    name: "u-gap",
    mixins: [mpMixin, mixin, props$l],
    computed: {
      gapStyle() {
        const style = {
          backgroundColor: this.bgColor,
          height: uni.$u.addUnit(this.height),
          marginTop: uni.$u.addUnit(this.marginTop),
          marginBottom: uni.$u.addUnit(this.marginBottom)
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-gap",
      style: vue.normalizeStyle([$options.gapStyle])
    }, null, 4);
  }
  var __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__scopeId", "data-v-3171af9f"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-gap/u-gap.vue"]]);
  var props$k = {
    props: {
      show: {
        type: Boolean,
        default: props$u.overlay.show
      },
      zIndex: {
        type: [String, Number],
        default: props$u.overlay.zIndex
      },
      duration: {
        type: [String, Number],
        default: props$u.overlay.duration
      },
      opacity: {
        type: [String, Number],
        default: props$u.overlay.opacity
      }
    }
  };
  const _sfc_main$E = {
    name: "u-overlay",
    mixins: [mpMixin, mixin, props$k],
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    methods: {
      clickHandler() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$a);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      show: _ctx.show,
      "custom-class": "u-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
    }, 8, ["show", "duration", "custom-style", "onClick"]);
  }
  var __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-02151e93"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-overlay/u-overlay.vue"]]);
  const _sfc_main$D = {
    name: "u-toast",
    mixins: [mpMixin, mixin],
    data() {
      return {
        isShow: false,
        timer: null,
        config: {
          message: "",
          type: "",
          duration: 2e3,
          icon: true,
          position: "center",
          complete: null,
          overlay: false,
          loading: false
        },
        tmpConfig: {}
      };
    },
    computed: {
      iconName() {
        if (!this.tmpConfig.icon || this.tmpConfig.icon == "none") {
          return "";
        }
        if (["error", "warning", "success", "primary"].includes(this.tmpConfig.type)) {
          return uni.$u.type2icon(this.tmpConfig.type);
        } else {
          return "";
        }
      },
      overlayStyle() {
        const style = {
          justifyContent: "center",
          alignItems: "center",
          display: "flex"
        };
        style.backgroundColor = "rgba(0, 0, 0, 0)";
        return style;
      },
      iconStyle() {
        const style = {};
        style.marginRight = "4px";
        return style;
      },
      loadingIconColor() {
        let color2 = "rgb(255, 255, 255)";
        if (["error", "warning", "success", "primary"].includes(this.tmpConfig.type)) {
          color2 = uni.$u.hexToRgb(uni.$u.color[this.tmpConfig.type]);
        }
        return color2;
      },
      contentStyle() {
        const windowHeight = uni.$u.sys().windowHeight, style = {};
        let value2 = 0;
        if (this.tmpConfig.position === "top") {
          value2 = -windowHeight * 0.25;
        } else if (this.tmpConfig.position === "bottom") {
          value2 = windowHeight * 0.25;
        }
        style.transform = `translateY(${value2}px)`;
        return style;
      }
    },
    created() {
      ["primary", "success", "error", "warning", "default", "loading"].map((item) => {
        this[item] = (message) => this.show({
          type: item,
          message
        });
      });
    },
    methods: {
      show(options) {
        this.tmpConfig = uni.$u.deepMerge(this.config, options);
        this.clearTimer();
        this.isShow = true;
        this.timer = setTimeout(() => {
          this.clearTimer();
          typeof this.tmpConfig.complete === "function" && this.tmpConfig.complete();
        }, this.tmpConfig.duration);
      },
      hide() {
        this.clearTimer();
      },
      clearTimer() {
        this.isShow = false;
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    beforeDestroy() {
      this.clearTimer();
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$c);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_gap = resolveEasycom(vue.resolveDynamicComponent("u-gap"), __easycom_2$3);
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-toast" }, [
      vue.createVNode(_component_u_overlay, {
        show: $data.isShow,
        "custom-style": $options.overlayStyle
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["u-toast__content", ["u-type-" + $data.tmpConfig.type, $data.tmpConfig.type === "loading" || $data.tmpConfig.loading ? "u-toast__content--loading" : ""]]),
            style: vue.normalizeStyle([$options.contentStyle])
          }, [
            $data.tmpConfig.type === "loading" ? (vue.openBlock(), vue.createBlock(_component_u_loading_icon, {
              key: 0,
              mode: "circle",
              color: "rgb(255, 255, 255)",
              inactiveColor: "rgb(120, 120, 120)",
              size: "25"
            })) : $data.tmpConfig.type !== "defalut" && $options.iconName ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
              key: 1,
              name: $options.iconName,
              size: "17",
              color: $data.tmpConfig.type,
              customStyle: $options.iconStyle
            }, null, 8, ["name", "color", "customStyle"])) : vue.createCommentVNode("v-if", true),
            $data.tmpConfig.type === "loading" || $data.tmpConfig.loading ? (vue.openBlock(), vue.createBlock(_component_u_gap, {
              key: 2,
              height: "12",
              bgColor: "transparent"
            })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("text", {
              class: vue.normalizeClass(["u-toast__content__text", ["u-toast__content__text--" + $data.tmpConfig.type]]),
              style: { "max-width": "400rpx" }
            }, vue.toDisplayString($data.tmpConfig.message), 3)
          ], 6)
        ]),
        _: 1
      }, 8, ["show", "custom-style"])
    ]);
  }
  var __easycom_1$8 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-388388fe"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-toast/u-toast.vue"]]);
  const _sfc_main$C = {
    name: "CommonKingkong",
    data() {
      return {};
    },
    props: ["indexList"],
    options: { styleIsolation: "shared" },
    methods: {
      click(name) {
        this.$refs.uToast.success(`\u70B9\u51FB\u4E86\u7B2C${name}\u4E2A`);
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u__image = resolveEasycom(vue.resolveDynamicComponent("u--image"), __easycom_0$6);
    const _component_u_grid_item = resolveEasycom(vue.resolveDynamicComponent("u-grid-item"), __easycom_1$9);
    const _component_u_grid = resolveEasycom(vue.resolveDynamicComponent("u-grid"), __easycom_2$4);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_1$8);
    return vue.openBlock(), vue.createElementBlock("view", { class: "contentKingkong" }, [
      vue.createVNode(_component_u_grid, {
        border: false,
        col: "4"
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.indexList, (listItem2, listIndex) => {
            return vue.openBlock(), vue.createBlock(_component_u_grid_item, { key: listIndex }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_u__image, {
                  showLoading: true,
                  src: listItem2.src,
                  shape: "circle",
                  width: "112rpx",
                  height: "112rpx"
                }, null, 8, ["src"]),
                vue.createElementVNode("text", {
                  class: "grid-text",
                  style: { "font-size": "24rpx" }
                }, vue.toDisplayString(listItem2.title), 1)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      }),
      vue.createVNode(_component_u_toast, { ref: "uToast" }, null, 512)
    ]);
  }
  var CommonKingkong = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-551b604c"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/components/CommonKingkong.vue"]]);
  var props$j = {
    props: {
      indicatorWidth: {
        type: [String, Number],
        default: props$u.scrollList.indicatorWidth
      },
      indicatorBarWidth: {
        type: [String, Number],
        default: props$u.scrollList.indicatorBarWidth
      },
      indicator: {
        type: Boolean,
        default: props$u.scrollList.indicator
      },
      indicatorColor: {
        type: String,
        default: props$u.scrollList.indicatorColor
      },
      indicatorActiveColor: {
        type: String,
        default: props$u.scrollList.indicatorActiveColor
      },
      indicatorStyle: {
        type: [String, Object],
        default: props$u.scrollList.indicatorStyle
      }
    }
  };
  var block0$1 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxs");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxs"] = "3a83e0fa";
  };
  const _sfc_main$B = {
    name: "u-scroll-list",
    mixins: [mpMixin, mixin, props$j],
    data() {
      return {
        scrollInfo: {
          scrollLeft: 0,
          scrollWidth: 0
        },
        scrollWidth: 0
      };
    },
    computed: {
      barStyle() {
        const style = {};
        style.width = uni.$u.addUnit(this.indicatorBarWidth);
        style.backgroundColor = this.indicatorActiveColor;
        return style;
      },
      lineStyle() {
        const style = {};
        style.width = uni.$u.addUnit(this.indicatorWidth);
        style.backgroundColor = this.indicatorColor;
        return style;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getComponentWidth();
      },
      scrollEvent(status) {
        this.$emit(status);
      },
      async getComponentWidth() {
        await uni.$u.sleep(30);
        this.$uGetRect(".u-scroll-list").then((size) => {
          this.scrollWidth = size.width;
        });
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-scroll-list",
      ref: "u-scroll-list"
    }, [
      vue.createCommentVNode(" \u4EE5\u4E0A\u5E73\u53F0\uFF0C\u652F\u6301wxs "),
      vue.createElementVNode("scroll-view", {
        class: "u-scroll-list__scroll-view",
        "scroll-x": "",
        onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.wxs.scroll && _ctx.wxs.scroll(...args)),
        onScrolltoupper: _cache[1] || (_cache[1] = (...args) => _ctx.wxs.scrolltoupper && _ctx.wxs.scrolltoupper(...args)),
        onScrolltolower: _cache[2] || (_cache[2] = (...args) => _ctx.wxs.scrolltolower && _ctx.wxs.scrolltolower(...args)),
        "data-scrollWidth": $data.scrollWidth,
        "data-barWidth": _ctx.$u.getPx(_ctx.indicatorBarWidth),
        "data-indicatorWidth": _ctx.$u.getPx(_ctx.indicatorWidth),
        "show-scrollbar": false,
        "upper-threshold": 0,
        "lower-threshold": 0
      }, [
        vue.createElementVNode("view", { class: "u-scroll-list__scroll-view__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ], 40, ["data-scrollWidth", "data-barWidth", "data-indicatorWidth"]),
      _ctx.indicator ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-scroll-list__indicator",
        style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.indicatorStyle)])
      }, [
        vue.createElementVNode("view", {
          class: "u-scroll-list__indicator__line",
          style: vue.normalizeStyle([$options.lineStyle])
        }, [
          vue.createElementVNode("view", {
            class: "u-scroll-list__indicator__line__bar",
            style: vue.normalizeStyle([$options.barStyle]),
            ref: "u-scroll-list__indicator__line__bar"
          }, null, 4)
        ], 4)
      ], 4)) : vue.createCommentVNode("v-if", true)
    ], 512);
  }
  if (typeof block0$1 === "function")
    block0$1(_sfc_main$B);
  var __easycom_1$7 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-680f302f"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-scroll-list/u-scroll-list.vue"]]);
  const _sfc_main$A = {
    name: "CommonViparea",
    data() {
      return {};
    },
    props: ["indexList"],
    methods: {
      left() {
        formatAppLog("log", "at components/CommonViparea.vue:71", "left");
      },
      right() {
        formatAppLog("log", "at components/CommonViparea.vue:74", "right");
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_scroll_list = resolveEasycom(vue.resolveDynamicComponent("u-scroll-list"), __easycom_1$7);
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, [
      vue.createElementVNode("view", { class: "head" }, [
        vue.createElementVNode("view", { class: "head1" }, [
          vue.createElementVNode("span", { class: "span1" }),
          vue.createElementVNode("h3", null, "VIP\u4F1A\u5458\u4E13\u533A")
        ]),
        vue.createElementVNode("view", { class: "head1" }, [
          vue.createElementVNode("span", { class: "span2" }, "\u67E5\u770B\u66F4\u591A >")
        ])
      ]),
      vue.createVNode(_component_u_scroll_list, {
        onRight: $options.right,
        onLeft: $options.left
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "scroll-list",
            style: { "flex-direction": "row" }
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.indexList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["scroll-list__goods-item", [index2 === 9 && "scroll-list__goods-item--no-margin-right"]]),
                key: index2
              }, [
                vue.createElementVNode("image", {
                  class: "scroll-list__goods-item__image",
                  src: item.src
                }, null, 8, ["src"]),
                vue.createElementVNode("text", { class: "scroll-list__goods-item__text" }, vue.toDisplayString(item.price), 1),
                vue.createElementVNode("br")
              ], 2);
            }), 128)),
            vue.createElementVNode("view", { class: "scroll-list__show-more" }, [
              vue.createElementVNode("text", { class: "scroll-list__show-more__text" }, "\u67E5\u770B\u66F4\u591A"),
              vue.createVNode(_component_u_icon, {
                name: "arrow-leftward",
                color: "#f50004",
                size: "12"
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["onRight", "onLeft"])
    ]);
  }
  var CommonViparea = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-2d07ee18"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/components/CommonViparea.vue"]]);
  var props$i = {
    props: {
      isDot: {
        type: Boolean,
        default: props$u.badge.isDot
      },
      value: {
        type: [Number, String],
        default: props$u.badge.value
      },
      modelValue: {
        type: [Number, String],
        default: props$u.badge.modelValue
      },
      show: {
        type: Boolean,
        default: props$u.badge.show
      },
      max: {
        type: [Number, String],
        default: props$u.badge.max
      },
      type: {
        type: String,
        default: props$u.badge.type
      },
      showZero: {
        type: Boolean,
        default: props$u.badge.showZero
      },
      bgColor: {
        type: [String, null],
        default: props$u.badge.bgColor
      },
      color: {
        type: [String, null],
        default: props$u.badge.color
      },
      shape: {
        type: String,
        default: props$u.badge.shape
      },
      numberType: {
        type: String,
        default: props$u.badge.numberType
      },
      offset: {
        type: Array,
        default: props$u.badge.offset
      },
      inverted: {
        type: Boolean,
        default: props$u.badge.inverted
      },
      absolute: {
        type: Boolean,
        default: props$u.badge.absolute
      }
    }
  };
  const _sfc_main$z = {
    name: "u-badge",
    mixins: [mpMixin, props$i, mixin],
    computed: {
      boxStyle() {
        let style = {};
        return style;
      },
      badgeStyle() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        if (this.bgColor && !this.inverted) {
          style.backgroundColor = this.bgColor;
        }
        if (this.absolute) {
          style.position = "absolute";
          if (this.offset.length) {
            const top = this.offset[0];
            const right = this.offset[1] || top;
            style.top = uni.$u.addUnit(top);
            style.right = uni.$u.addUnit(right);
          }
        }
        return style;
      },
      showValue() {
        switch (this.numberType) {
          case "overflow":
            return Number(this.value) > Number(this.max) ? this.max + "+" : this.value;
          case "ellipsis":
            return Number(this.value) > Number(this.max) ? "..." : this.value;
          case "limit":
            return Number(this.value) > 999 ? Number(this.value) >= 9999 ? Math.floor(this.value / 1e4 * 100) / 100 + "w" : Math.floor(this.value / 1e3 * 100) / 100 + "k" : this.value;
          default:
            return Number(this.value);
        }
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show && ((Number(_ctx.value) === 0 ? _ctx.showZero : true) || _ctx.isDot) ? (vue.openBlock(), vue.createElementBlock("text", {
      key: 0,
      class: vue.normalizeClass([[_ctx.isDot ? "u-badge--dot" : "u-badge--not-dot", _ctx.inverted && "u-badge--inverted", _ctx.shape === "horn" && "u-badge--horn", `u-badge--${_ctx.type}${_ctx.inverted ? "--inverted" : ""}`], "u-badge"]),
      style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.customStyle), $options.badgeStyle])
    }, vue.toDisplayString(_ctx.isDot ? "" : $options.showValue), 7)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-64d2630e"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-badge/u-badge.vue"]]);
  var props$h = {
    props: {
      duration: {
        type: Number,
        default: props$u.tabs.duration
      },
      list: {
        type: Array,
        default: props$u.tabs.list
      },
      lineColor: {
        type: String,
        default: props$u.tabs.lineColor
      },
      activeStyle: {
        type: [String, Object],
        default: props$u.tabs.activeStyle
      },
      inactiveStyle: {
        type: [String, Object],
        default: props$u.tabs.inactiveStyle
      },
      lineWidth: {
        type: [String, Number],
        default: props$u.tabs.lineWidth
      },
      lineHeight: {
        type: [String, Number],
        default: props$u.tabs.lineHeight
      },
      lineBgSize: {
        type: String,
        default: props$u.tabs.lineBgSize
      },
      itemStyle: {
        type: [String, Object],
        default: props$u.tabs.itemStyle
      },
      scrollable: {
        type: Boolean,
        default: props$u.tabs.scrollable
      },
      current: {
        type: [Number, String],
        default: props$u.tabs.current
      },
      keyName: {
        type: String,
        default: props$u.tabs.keyName
      }
    }
  };
  const _sfc_main$y = {
    name: "u-tabs",
    mixins: [mpMixin, mixin, props$h],
    data() {
      return {
        firstTime: true,
        scrollLeft: 0,
        scrollViewWidth: 0,
        lineOffsetLeft: 0,
        tabsRect: {
          left: 0
        },
        innerCurrent: 0,
        moving: false
      };
    },
    watch: {
      current: {
        immediate: true,
        handler(newValue, oldValue) {
          if (newValue !== this.innerCurrent) {
            this.innerCurrent = newValue;
            this.$nextTick(() => {
              this.resize();
            });
          }
        }
      },
      list() {
        this.$nextTick(() => {
          this.resize();
        });
      }
    },
    computed: {
      textStyle() {
        return (index2) => {
          const style = {};
          const customeStyle = index2 === this.innerCurrent ? uni.$u.addStyle(this.activeStyle) : uni.$u.addStyle(this.inactiveStyle);
          if (this.list[index2].disabled) {
            style.color = "#c8c9cc";
          }
          return uni.$u.deepMerge(customeStyle, style);
        };
      },
      propsBadge() {
        return uni.$u.props.badge;
      }
    },
    async mounted() {
      this.init();
    },
    emits: ["click", "change"],
    methods: {
      setLineLeft() {
        const tabItem = this.list[this.innerCurrent];
        if (!tabItem) {
          return;
        }
        let lineOffsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => total + curr.rect.width, 0);
        const lineWidth = uni.$u.getPx(this.lineWidth);
        this.lineOffsetLeft = lineOffsetLeft + (tabItem.rect.width - lineWidth) / 2;
        if (this.firstTime) {
          setTimeout(() => {
            this.firstTime = false;
          }, 10);
        }
      },
      animation(x, duration = 0) {
      },
      clickHandler(item, index2) {
        this.$emit("click", __spreadProps(__spreadValues({}, item), {
          index: index2
        }));
        if (item.disabled)
          return;
        this.innerCurrent = index2;
        this.resize();
        this.$emit("change", __spreadProps(__spreadValues({}, item), {
          index: index2
        }));
      },
      init() {
        uni.$u.sleep().then(() => {
          this.resize();
        });
      },
      setScrollLeft() {
        const tabRect = this.list[this.innerCurrent];
        const offsetLeft = this.list.slice(0, this.innerCurrent).reduce((total, curr) => {
          return total + curr.rect.width;
        }, 0);
        const windowWidth = uni.$u.sys().windowWidth;
        let scrollLeft = offsetLeft - (this.tabsRect.width - tabRect.rect.width) / 2 - (windowWidth - this.tabsRect.right) / 2 + this.tabsRect.left / 2;
        scrollLeft = Math.min(scrollLeft, this.scrollViewWidth - this.tabsRect.width);
        this.scrollLeft = Math.max(0, scrollLeft);
      },
      resize() {
        if (this.list.length === 0) {
          return;
        }
        Promise.all([this.getTabsRect(), this.getAllItemRect()]).then(([tabsRect, itemRect = []]) => {
          this.tabsRect = tabsRect;
          this.scrollViewWidth = 0;
          itemRect.map((item, index2) => {
            this.scrollViewWidth += item.width;
            this.list[index2].rect = item;
          });
          this.setLineLeft();
          this.setScrollLeft();
        });
      },
      getTabsRect() {
        return new Promise((resolve) => {
          this.queryRect("u-tabs__wrapper__scroll-view").then((size) => resolve(size));
        });
      },
      getAllItemRect() {
        return new Promise((resolve) => {
          const promiseAllArr = this.list.map((item, index2) => this.queryRect(`u-tabs__wrapper__nav__item-${index2}`, true));
          Promise.all(promiseAllArr).then((sizes) => resolve(sizes));
        });
      },
      queryRect(el, item) {
        return new Promise((resolve) => {
          this.$uGetRect(`.${el}`).then((size) => {
            resolve(size);
          });
        });
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_badge = resolveEasycom(vue.resolveDynamicComponent("u-badge"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-tabs" }, [
      vue.createElementVNode("view", { class: "u-tabs__wrapper" }, [
        vue.renderSlot(_ctx.$slots, "left", {}, void 0, true),
        vue.createElementVNode("view", { class: "u-tabs__wrapper__scroll-view-wrapper" }, [
          vue.createElementVNode("scroll-view", {
            "scroll-x": _ctx.scrollable,
            "scroll-left": $data.scrollLeft,
            "scroll-with-animation": "",
            class: "u-tabs__wrapper__scroll-view",
            "show-scrollbar": false,
            ref: "u-tabs__wrapper__scroll-view"
          }, [
            vue.createElementVNode("view", {
              class: "u-tabs__wrapper__nav",
              ref: "u-tabs__wrapper__nav"
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.list, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: vue.normalizeClass(["u-tabs__wrapper__nav__item", [`u-tabs__wrapper__nav__item-${index2}`, item.disabled && "u-tabs__wrapper__nav__item--disabled"]]),
                  key: index2,
                  onClick: ($event) => $options.clickHandler(item, index2),
                  ref_for: true,
                  ref: `u-tabs__wrapper__nav__item-${index2}`,
                  style: vue.normalizeStyle([_ctx.$u.addStyle(_ctx.itemStyle), { flex: _ctx.scrollable ? "" : 1 }])
                }, [
                  vue.createElementVNode("text", {
                    class: vue.normalizeClass([[item.disabled && "u-tabs__wrapper__nav__item__text--disabled"], "u-tabs__wrapper__nav__item__text"]),
                    style: vue.normalizeStyle([$options.textStyle(index2)])
                  }, vue.toDisplayString(item[_ctx.keyName]), 7),
                  vue.createVNode(_component_u_badge, {
                    show: !!(item.badge && (item.badge.show || item.badge.isDot || item.badge.value)),
                    isDot: item.badge && item.badge.isDot || $options.propsBadge.isDot,
                    value: item.badge && item.badge.value || $options.propsBadge.value,
                    max: item.badge && item.badge.max || $options.propsBadge.max,
                    type: item.badge && item.badge.type || $options.propsBadge.type,
                    showZero: item.badge && item.badge.showZero || $options.propsBadge.showZero,
                    bgColor: item.badge && item.badge.bgColor || $options.propsBadge.bgColor,
                    color: item.badge && item.badge.color || $options.propsBadge.color,
                    shape: item.badge && item.badge.shape || $options.propsBadge.shape,
                    numberType: item.badge && item.badge.numberType || $options.propsBadge.numberType,
                    inverted: item.badge && item.badge.inverted || $options.propsBadge.inverted,
                    customStyle: "margin-left: 4px;"
                  }, null, 8, ["show", "isDot", "value", "max", "type", "showZero", "bgColor", "color", "shape", "numberType", "inverted"])
                ], 14, ["onClick"]);
              }), 128)),
              vue.createElementVNode("view", {
                class: "u-tabs__wrapper__nav__line",
                ref: "u-tabs__wrapper__nav__line",
                style: vue.normalizeStyle([{
                  width: _ctx.$u.addUnit(_ctx.lineWidth),
                  transform: `translate(${$data.lineOffsetLeft}px)`,
                  transitionDuration: `${$data.firstTime ? 0 : _ctx.duration}ms`,
                  height: _ctx.$u.addUnit(_ctx.lineHeight),
                  background: _ctx.lineColor,
                  backgroundSize: _ctx.lineBgSize
                }])
              }, null, 4)
            ], 512)
          ], 8, ["scroll-x", "scroll-left"])
        ]),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ])
    ]);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-f192babe"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-tabs/u-tabs.vue"]]);
  const _sfc_main$x = {
    name: "CommonIntrduce",
    data() {
      return {
        list1: [
          {
            name: "\u6C34\u679C"
          },
          {
            name: "\u96F6\u98DF"
          },
          {
            name: "\u670D\u9970"
          },
          {
            name: "\u5BB6\u5177"
          },
          {
            name: "\u65E5\u7528\u6E05\u6D01"
          },
          {
            name: "\u66F4\u591A"
          }
        ]
      };
    },
    props: ["indexList"],
    methods: {
      click(item) {
        formatAppLog("log", "at components/CommonIntrduce.vue:96", "item", item);
      },
      pageJump(val) {
        const detailsData = JSON.stringify(val);
        formatAppLog("log", "at components/CommonIntrduce.vue:100", detailsData);
        uni.navigateTo({
          url: `../../subpages/detailsPage/detailsPage?Data=${detailsData}`
        });
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_0$3);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "head" }, [
        vue.createElementVNode("view", { class: "head1" }, [
          vue.createElementVNode("span", { class: "span1" }),
          vue.createElementVNode("h3", null, "\u4EBA\u6C14\u63A8\u8350")
        ]),
        vue.createElementVNode("view", { class: "head2" }, [
          vue.createVNode(_component_u_tabs, {
            list: $data.list1,
            lineHeight: "0",
            lineColor: "#ff7b2e",
            activeStyle: {
              color: "#ffffff",
              transform: "scale(1.05)",
              backgroundColor: "#ff7b2e"
            },
            inactiveStyle: {
              color: "#ffffff",
              transform: "scale(1)",
              backgroundColor: "#ffab6b"
            },
            itemStyle: "height: 120rpx;"
          }, null, 8, ["list", "activeStyle", "inactiveStyle"])
        ])
      ]),
      vue.createElementVNode("view", { class: "mid" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.indexList, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "list",
            key: index2
          }, [
            vue.createElementVNode("view", {
              class: "list_text",
              onClick: ($event) => $options.pageJump(item.data)
            }, [
              vue.createElementVNode("img", {
                src: item.src,
                alt: "\u5217\u8868\u56FE"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "list_detial" }, [
                vue.createElementVNode("span", null, vue.toDisplayString(item.name), 1),
                vue.createElementVNode("p", null, vue.toDisplayString(item.intrduce), 1),
                vue.createElementVNode("view", { class: "price" }, [
                  vue.createElementVNode("b", null, vue.toDisplayString(item.price), 1),
                  vue.createElementVNode("span", null, "\u7ACB\u5373\u62A2\u8D2D")
                ])
              ])
            ], 8, ["onClick"])
          ]);
        }), 128)),
        vue.createElementVNode("view", { class: "more" }, [
          vue.createElementVNode("view", { class: "more_text" }, [
            vue.createVNode(_component_u_icon, {
              class: "btn",
              name: "arrow-left",
              color: "#fff",
              size: "14"
            }),
            vue.createElementVNode("span", null, "\u66F4\u591A"),
            vue.createVNode(_component_u_icon, {
              class: "btn",
              name: "arrow-right",
              color: "#fff",
              size: "14"
            })
          ])
        ])
      ])
    ]);
  }
  var CommonIntrduce = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-1a8b9a3c"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/components/CommonIntrduce.vue"]]);
  var props$g = {
    props: {
      time: {
        type: [String, Number],
        default: props$u.countDown.time
      },
      format: {
        type: String,
        default: props$u.countDown.format
      },
      autoStart: {
        type: Boolean,
        default: props$u.countDown.autoStart
      },
      millisecond: {
        type: Boolean,
        default: props$u.countDown.millisecond
      }
    }
  };
  function padZero$1(num, targetLength = 2) {
    let str = `${num}`;
    while (str.length < targetLength) {
      str = `0${str}`;
    }
    return str;
  }
  const SECOND = 1e3;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  function parseTimeData(time) {
    const days = Math.floor(time / DAY);
    const hours = Math.floor(time % DAY / HOUR);
    const minutes = Math.floor(time % HOUR / MINUTE);
    const seconds = Math.floor(time % MINUTE / SECOND);
    const milliseconds = Math.floor(time % SECOND);
    return {
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    };
  }
  function parseFormat(format, timeData) {
    let {
      days,
      hours,
      minutes,
      seconds,
      milliseconds
    } = timeData;
    if (format.indexOf("DD") === -1) {
      hours += days * 24;
    } else {
      format = format.replace("DD", padZero$1(days));
    }
    if (format.indexOf("HH") === -1) {
      minutes += hours * 60;
    } else {
      format = format.replace("HH", padZero$1(hours));
    }
    if (format.indexOf("mm") === -1) {
      seconds += minutes * 60;
    } else {
      format = format.replace("mm", padZero$1(minutes));
    }
    if (format.indexOf("ss") === -1) {
      milliseconds += seconds * 1e3;
    } else {
      format = format.replace("ss", padZero$1(seconds));
    }
    return format.replace("SSS", padZero$1(milliseconds, 3));
  }
  function isSameSecond(time1, time2) {
    return Math.floor(time1 / 1e3) === Math.floor(time2 / 1e3);
  }
  const _sfc_main$w = {
    name: "u-count-down",
    mixins: [mpMixin, mixin, props$g],
    data() {
      return {
        timer: null,
        timeData: parseTimeData(0),
        formattedTime: "0",
        runing: false,
        endTime: 0,
        remainTime: 0
      };
    },
    watch: {
      time(n) {
        this.reset();
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.reset();
      },
      start() {
        if (this.runing)
          return;
        this.runing = true;
        this.endTime = Date.now() + this.remainTime;
        this.toTick();
      },
      toTick() {
        if (this.millisecond) {
          this.microTick();
        } else {
          this.macroTick();
        }
      },
      macroTick() {
        this.clearTimeout();
        this.timer = setTimeout(() => {
          const remain = this.getRemainTime();
          if (!isSameSecond(remain, this.remainTime) || remain === 0) {
            this.setRemainTime(remain);
          }
          if (this.remainTime !== 0) {
            this.macroTick();
          }
        }, 30);
      },
      microTick() {
        this.clearTimeout();
        this.timer = setTimeout(() => {
          this.setRemainTime(this.getRemainTime());
          if (this.remainTime !== 0) {
            this.microTick();
          }
        }, 50);
      },
      getRemainTime() {
        return Math.max(this.endTime - Date.now(), 0);
      },
      setRemainTime(remain) {
        this.remainTime = remain;
        const timeData = parseTimeData(remain);
        this.$emit("change", timeData);
        this.formattedTime = parseFormat(this.format, timeData);
        if (remain <= 0) {
          this.pause();
          this.$emit("finish");
        }
      },
      reset() {
        this.pause();
        this.remainTime = this.time;
        this.setRemainTime(this.remainTime);
        if (this.autoStart) {
          this.start();
        }
      },
      pause() {
        this.runing = false;
        this.clearTimeout();
      },
      clearTimeout() {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    beforeDestroy() {
      this.clearTimeout();
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-count-down" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createElementVNode("text", { class: "u-count-down__text" }, vue.toDisplayString($data.formattedTime), 1)
      ], true)
    ]);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-42c6ac21"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-count-down/u-count-down.vue"]]);
  const _sfc_main$v = {
    name: "CommonLimitedsale",
    data() {
      return {
        timeData: {}
      };
    },
    props: ["indexList"],
    methods: {
      onChange(e) {
        this.timeData = e;
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_count_down = resolveEasycom(vue.resolveDynamicComponent("u-count-down"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "contentLimit" }, [
      vue.createElementVNode("view", { class: "head" }, [
        vue.createElementVNode("view", { class: "head1" }, [
          vue.createElementVNode("span", { class: "span1" }),
          vue.createElementVNode("h3", null, "\u9650\u65F6\u7279\u5356")
        ]),
        vue.createElementVNode("view", { class: "limitRight" }, [
          vue.createElementVNode("view", { class: "limitRight1" }, [
            vue.createElementVNode("span", { class: "timespan" }, "\u8DDD\u79BB\u4E0B\u6B21"),
            vue.createVNode(_component_u_count_down, {
              time: 30 * 60 * 60 * 1e3,
              format: "HH:mm:ss",
              autoStart: "",
              millisecond: "",
              onChange: $options.onChange
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "time" }, [
                  vue.createElementVNode("view", { class: "time__custom" }, [
                    vue.createElementVNode("text", { class: "time__custom__item" }, vue.toDisplayString($data.timeData.hours > 10 ? $data.timeData.hours : "0" + $data.timeData.hours), 1)
                  ]),
                  vue.createElementVNode("text", { class: "time__doc" }, ":"),
                  vue.createElementVNode("view", { class: "time__custom" }, [
                    vue.createElementVNode("text", { class: "time__custom__item" }, vue.toDisplayString($data.timeData.minutes), 1)
                  ]),
                  vue.createElementVNode("text", { class: "time__doc" }, ":"),
                  vue.createElementVNode("view", { class: "time__custom" }, [
                    vue.createElementVNode("text", { class: "time__custom__item" }, vue.toDisplayString($data.timeData.seconds), 1)
                  ])
                ])
              ]),
              _: 1
            }, 8, ["onChange"])
          ]),
          vue.createElementVNode("view", { class: "head1" }, [
            vue.createElementVNode("span", { class: "span2" }, "\u67E5\u770B\u66F4\u591A >")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "mid" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.indexList, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "list",
            key: index2
          }, [
            vue.createElementVNode("view", { class: "list_text" }, [
              vue.createElementVNode("img", {
                src: item.src,
                alt: "\u5217\u8868\u56FE"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "list_detial" }, [
                vue.createElementVNode("span", null, vue.toDisplayString(item.name), 1),
                vue.createElementVNode("p", { style: { "text-decoration": "line-through" } }, vue.toDisplayString(item.old), 1),
                vue.createElementVNode("view", { class: "price" }, [
                  vue.createElementVNode("b", null, vue.toDisplayString(item.new), 1),
                  vue.createElementVNode("span", null, "\u7ACB\u5373\u62A2\u8D2D")
                ])
              ])
            ])
          ]);
        }), 128))
      ])
    ]);
  }
  var CommonLimitedsale = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-8d8f39aa"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/components/CommonLimitedsale.vue"]]);
  var props$f = {
    props: {
      shape: {
        type: String,
        default: props$u.search.shape
      },
      bgColor: {
        type: String,
        default: props$u.search.bgColor
      },
      placeholder: {
        type: String,
        default: props$u.search.placeholder
      },
      clearabled: {
        type: Boolean,
        default: props$u.search.clearabled
      },
      focus: {
        type: Boolean,
        default: props$u.search.focus
      },
      showAction: {
        type: Boolean,
        default: props$u.search.showAction
      },
      actionStyle: {
        type: Object,
        default: props$u.search.actionStyle
      },
      actionText: {
        type: String,
        default: props$u.search.actionText
      },
      inputAlign: {
        type: String,
        default: props$u.search.inputAlign
      },
      inputStyle: {
        type: Object,
        default: props$u.search.inputStyle
      },
      disabled: {
        type: Boolean,
        default: props$u.search.disabled
      },
      borderColor: {
        type: String,
        default: props$u.search.borderColor
      },
      searchIconColor: {
        type: String,
        default: props$u.search.searchIconColor
      },
      color: {
        type: String,
        default: props$u.search.color
      },
      placeholderColor: {
        type: String,
        default: props$u.search.placeholderColor
      },
      searchIcon: {
        type: String,
        default: props$u.search.searchIcon
      },
      searchIconSize: {
        type: [Number, String],
        default: props$u.search.searchIconSize
      },
      margin: {
        type: String,
        default: props$u.search.margin
      },
      animation: {
        type: Boolean,
        default: props$u.search.animation
      },
      modelValue: {
        type: String,
        default: props$u.search.value
      },
      value: {
        type: String,
        default: props$u.search.value
      },
      maxlength: {
        type: [String, Number],
        default: props$u.search.maxlength
      },
      height: {
        type: [String, Number],
        default: props$u.search.height
      },
      label: {
        type: [String, Number, null],
        default: props$u.search.label
      }
    }
  };
  const _sfc_main$u = {
    name: "u-search",
    mixins: [mpMixin, mixin, props$f],
    data() {
      return {
        keyword: "",
        showClear: false,
        show: false,
        focused: this.focus
      };
    },
    watch: {
      keyword(nVal) {
        this.$emit("update:modelValue", nVal);
        this.$emit("change", nVal);
      },
      modelValue: {
        immediate: true,
        handler(nVal) {
          this.keyword = nVal;
        }
      }
    },
    computed: {
      showActionBtn() {
        return !this.animation && this.showAction;
      }
    },
    emits: ["clear", "search", "custom", "focus", "blur", "click", "clickIcon", "update:modelValue", "change"],
    methods: {
      inputChange(e) {
        this.keyword = e.detail.value;
      },
      clear() {
        this.keyword = "";
        this.$nextTick(() => {
          this.$emit("clear");
        });
      },
      search(e) {
        this.$emit("search", e.detail.value);
        try {
          uni.hideKeyboard();
        } catch (e2) {
        }
      },
      custom() {
        this.$emit("custom", this.keyword);
        try {
          uni.hideKeyboard();
        } catch (e) {
        }
      },
      getFocus() {
        this.focused = true;
        if (this.animation && this.showAction)
          this.show = true;
        this.$emit("focus", this.keyword);
      },
      blur() {
        setTimeout(() => {
          this.focused = false;
        }, 100);
        this.show = false;
        this.$emit("blur", this.keyword);
      },
      clickHandler() {
        if (this.disabled)
          this.$emit("click");
      },
      clickIcon() {
        this.$emit("clickIcon");
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-search",
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args)),
      style: vue.normalizeStyle([{
        margin: _ctx.margin
      }, _ctx.$u.addStyle(_ctx.customStyle)])
    }, [
      vue.createElementVNode("view", {
        class: "u-search__content",
        style: vue.normalizeStyle({
          backgroundColor: _ctx.bgColor,
          borderRadius: _ctx.shape == "round" ? "100px" : "4px",
          borderColor: _ctx.borderColor
        })
      }, [
        _ctx.$slots.label || _ctx.label !== null ? vue.renderSlot(_ctx.$slots, "label", { key: 0 }, () => [
          vue.createElementVNode("text", { class: "u-search__content__label" }, vue.toDisplayString(_ctx.label), 1)
        ], true) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "u-search__content__icon" }, [
          vue.createVNode(_component_u_icon, {
            onClick: $options.clickIcon,
            size: _ctx.searchIconSize,
            name: _ctx.searchIcon,
            color: _ctx.searchIconColor ? _ctx.searchIconColor : _ctx.color
          }, null, 8, ["onClick", "size", "name", "color"])
        ]),
        vue.createElementVNode("input", {
          "confirm-type": "search",
          onBlur: _cache[0] || (_cache[0] = (...args) => $options.blur && $options.blur(...args)),
          value: $data.keyword,
          onConfirm: _cache[1] || (_cache[1] = (...args) => $options.search && $options.search(...args)),
          onInput: _cache[2] || (_cache[2] = (...args) => $options.inputChange && $options.inputChange(...args)),
          disabled: _ctx.disabled,
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.getFocus && $options.getFocus(...args)),
          focus: _ctx.focus,
          maxlength: _ctx.maxlength,
          "placeholder-class": "u-search__content__input--placeholder",
          placeholder: _ctx.placeholder,
          "placeholder-style": `color: ${_ctx.placeholderColor}`,
          class: "u-search__content__input",
          type: "text",
          style: vue.normalizeStyle([{
            textAlign: _ctx.inputAlign,
            color: _ctx.color,
            backgroundColor: _ctx.bgColor,
            height: _ctx.$u.addUnit(_ctx.height)
          }, _ctx.inputStyle])
        }, null, 44, ["value", "disabled", "focus", "maxlength", "placeholder", "placeholder-style"]),
        $data.keyword && _ctx.clearabled && $data.focused ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "u-search__content__icon u-search__content__close",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          vue.createVNode(_component_u_icon, {
            name: "close",
            size: "11",
            color: "#ffffff",
            customStyle: "line-height: 12px"
          })
        ])) : vue.createCommentVNode("v-if", true)
      ], 4),
      vue.createElementVNode("text", {
        style: vue.normalizeStyle([_ctx.actionStyle]),
        class: vue.normalizeClass(["u-search__action", [($options.showActionBtn || $data.show) && "u-search__action--active"]]),
        onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.custom && $options.custom(...args), ["stop", "prevent"]))
      }, vue.toDisplayString(_ctx.actionText), 7)
    ], 4);
  }
  var __easycom_1$6 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-4dd4c2a1"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-search/u-search.vue"]]);
  const _sfc_main$t = {
    name: "CommonSearch",
    data() {
      return {
        history: {}
      };
    },
    onLoad() {
    },
    methods: {
      pageJump() {
        uni.navigateTo({
          url: "../../subpages/searchPage/searchPage"
        });
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_search = resolveEasycom(vue.resolveDynamicComponent("u-search"), __easycom_1$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "allsearch" }, [
      vue.createElementVNode("view", { class: "searchAll" }, [
        vue.createElementVNode("view", { class: "search" }, [
          vue.createVNode(_component_u_search, {
            placeholder: "\u641C\u7D22\u5185\u5BB9",
            disabled: true,
            clearabled: true,
            bgColor: "#f3f3f3",
            showAction: false,
            height: "64rpx",
            margin: "0 auto",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.pageJump())
          })
        ])
      ])
    ]);
  }
  var CommonSearch = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-9d624664"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/components/CommonSearch.vue"]]);
  const _sfc_main$s = {
    name: "index-page",
    components: {
      CommonKingkong,
      CommonViparea,
      CommonIntrduce,
      CommonLimitedsale,
      CommonSearch
    },
    data() {
      return {
        indexList: {}
      };
    },
    onLoad() {
      $http.request({
        url: "/index/indexList"
      }).then((res) => {
        this.indexList = res.data;
      }).catch(() => {
        uni.showToast({
          title: "\u8BF7\u6C42\u5931\u8D25\uFF01",
          icon: "none"
        });
      });
    },
    methods: {}
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_swiper = resolveEasycom(vue.resolveDynamicComponent("u-swiper"), __easycom_2$5);
    const _component_CommonSearch = vue.resolveComponent("CommonSearch");
    const _component_CommonKingkong = vue.resolveComponent("CommonKingkong");
    const _component_CommonViparea = vue.resolveComponent("CommonViparea");
    const _component_CommonIntrduce = vue.resolveComponent("CommonIntrduce");
    const _component_CommonLimitedsale = vue.resolveComponent("CommonLimitedsale");
    return vue.openBlock(), vue.createElementBlock("view", { class: "all" }, [
      vue.createVNode(_component_u_swiper, {
        class: "swiper",
        list: $data.indexList.Carousel,
        indicator: "",
        indicatorMode: "line",
        circular: "",
        height: "386rpx"
      }, null, 8, ["list"]),
      vue.createElementVNode("view", { class: "CommonSearch" }, [
        vue.createVNode(_component_CommonSearch)
      ]),
      vue.createElementVNode("view", { class: "CommonKingkong" }, [
        vue.createVNode(_component_CommonKingkong, {
          indexList: $data.indexList.navList
        }, null, 8, ["indexList"])
      ]),
      vue.createElementVNode("view", {
        class: "NewBenefits",
        style: { "text-align": "center" }
      }, [
        vue.createElementVNode("img", {
          src: $data.indexList.newList,
          alt: "\u65B0\u4EBA\u4E13\u5C5E\u670D\u52A1"
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "CommonViparea" }, [
        vue.createVNode(_component_CommonViparea, {
          indexList: $data.indexList.memberList
        }, null, 8, ["indexList"])
      ]),
      vue.createElementVNode("view", { class: "CommonIntrduce" }, [
        vue.createVNode(_component_CommonIntrduce, {
          indexList: $data.indexList.recommendList
        }, null, 8, ["indexList"])
      ]),
      vue.createElementVNode("view", { class: "CommonLimitedsale" }, [
        vue.createVNode(_component_CommonLimitedsale, {
          indexList: $data.indexList.saleList
        }, null, 8, ["indexList"])
      ])
    ]);
  }
  var PagesIndexPageIndexPage = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-89c9bdf4"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/pages/index-page/index-page.vue"]]);
  const _sfc_main$r = {
    data() {
      return {};
    },
    methods: {
      toLogin() {
        formatAppLog("log", "at pages/my-page/my-page.vue:190", this.$store.getters);
        if (!this.$store.getters.login) {
          uni.navigateTo({
            url: "/pages/login-page/login-page"
          });
        }
      },
      jumpPage(value2) {
        uni.navigateTo({
          url: value2
        });
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "headerBox" }, [
        vue.createElementVNode("view", { class: "title" }, [
          vue.createElementVNode("text", null, " \u4E2A\u4EBA\u4E2D\u5FC3 "),
          vue.createElementVNode("image", {
            src: "/static/my-img/205\u8BBE\u7F6E-\u7EBF\u6027.png",
            mode: "widthFix",
            class: "setIcon"
          })
        ]),
        vue.createElementVNode("view", {
          class: "userNews",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.toLogin && $options.toLogin(...args))
        }, [
          vue.createElementVNode("view", { class: "userInfo" }, [
            vue.createElementVNode("image", {
              src: "/static/my-img/\u5934\u50CF.png",
              mode: "widthFix",
              class: "userIcon"
            }),
            vue.createElementVNode("view", { class: "userXq" }, [
              vue.createElementVNode("view", { class: "userName" }, vue.toDisplayString(_ctx.$store.state.userName || "\u672A\u767B\u5F55 \u70B9\u51FB\u6B64\u5904\u767B\u5F55"), 1),
              vue.createElementVNode("view", { class: "userId" }, " ID:123456 ")
            ])
          ]),
          vue.createElementVNode("view", { class: "userRicon" }, [
            vue.createElementVNode("image", {
              src: "/static/my-img/\u8FDB\u5165\u7BAD\u5934.png",
              mode: "widthFix",
              class: "rIcon"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "userList" }, [
          vue.createElementVNode("ul", null, [
            vue.createElementVNode("li", { class: "userLb" }, [
              vue.createElementVNode("view", { class: "userPrice" }, " 155 "),
              vue.createElementVNode("view", { class: "userPm" }, " \u4F59\u989D\uFF08\u5143\uFF09 ")
            ]),
            vue.createElementVNode("li", { class: "userLb" }, [
              vue.createElementVNode("view", { class: "userPrice" }, " 51 "),
              vue.createElementVNode("view", { class: "userPm" }, " \u4F18\u60E0\u5238 ")
            ]),
            vue.createElementVNode("li", { class: "userLb" }, [
              vue.createElementVNode("view", { class: "userPrice" }, " 203 "),
              vue.createElementVNode("view", { class: "userPm" }, " \u7535\u5B50\u5238 ")
            ]),
            vue.createElementVNode("li", { class: "userLb" }, [
              vue.createElementVNode("view", { class: "userPrice" }, " 486 "),
              vue.createElementVNode("view", { class: "userPm" }, " \u79EF\u5206 ")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "myOder" }, [
        vue.createElementVNode("view", { class: "oderUp" }, [
          vue.createElementVNode("view", { class: "oderRight" }, [
            vue.createElementVNode("image", {
              src: "/static/my-img/_\u4FEE\u6539\u8BA2\u5355.png",
              mode: "widthFix",
              class: "oderIcon"
            }),
            vue.createElementVNode("view", { class: "oderXq" }, [
              vue.createElementVNode("view", { class: "oderTitle" }, " \u6211\u7684\u8BA2\u5355 ")
            ])
          ]),
          vue.createElementVNode("view", { class: "oderLeft" }, [
            vue.createElementVNode("text", { style: { "margin-right": "10rpx" } }, " \u5168\u90E8\u8BA2\u5355 "),
            vue.createElementVNode("image", {
              src: "/static/my-img/\u8FDB\u5165\u7BAD\u5934.png",
              mode: "widthFix",
              class: "turnRight"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "oderList" }, [
          vue.createElementVNode("ul", null, [
            vue.createElementVNode("li", null, [
              vue.createElementVNode("view", { class: "" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/\u5F85\u53D1\u8D27.png",
                  mode: "widthFix",
                  class: "listIcon"
                })
              ]),
              vue.createElementVNode("view", { class: "" }, " \u5F85\u53D1\u8D27 ")
            ]),
            vue.createElementVNode("li", null, [
              vue.createElementVNode("view", { class: "" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/\u7B49\u5F85\u786E\u8BA4.png",
                  mode: "widthFix",
                  class: "listIcon"
                })
              ]),
              vue.createElementVNode("view", { class: "" }, " \u5F85\u786E\u8BA4 ")
            ]),
            vue.createElementVNode("li", null, [
              vue.createElementVNode("view", { class: "" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/\u5F85\u6536\u8D27.png",
                  mode: "widthFix",
                  class: "listIcon"
                })
              ]),
              vue.createElementVNode("view", { class: "" }, " \u5F85\u6536\u8D27 ")
            ]),
            vue.createElementVNode("li", null, [
              vue.createElementVNode("view", { class: "" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/\u5F85\u8BC4\u4EF7.png",
                  mode: "widthFix",
                  class: "listIcon"
                })
              ]),
              vue.createElementVNode("view", { class: "" }, " \u5F85\u8BC4\u4EF7 ")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "myList" }, [
        vue.createElementVNode("ul", null, [
          vue.createElementVNode("li", null, [
            vue.createElementVNode("view", { class: "listLeft" }, [
              vue.createElementVNode("view", { class: "listLx" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/\u5BFC\u822A_\u6536\u85CF_\u5DF2\u6536\u85CF.png",
                  mode: "widthFix",
                  class: "leftIcon"
                }),
                vue.createElementVNode("text", { style: { "margin-left": "30rpx" } }, " \u6211\u7684\u5173\u6CE8 ")
              ]),
              vue.createElementVNode("image", {
                src: "/static/my-img/\u8FDB\u5165\u7BAD\u5934.png",
                mode: "widthFix",
                class: "rightIcon"
              })
            ])
          ]),
          vue.createElementVNode("li", null, [
            vue.createElementVNode("view", { class: "listLeft" }, [
              vue.createElementVNode("view", { class: "listLx" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/\u6536\u85CF-\u6536\u85CF.png",
                  mode: "widthFix",
                  class: "leftIcon"
                }),
                vue.createElementVNode("text", {
                  style: { "margin-left": "30rpx" },
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.jumpPage("../../pages/address-page/address-page"))
                }, " \u6211\u7684\u5730\u5740 ")
              ]),
              vue.createElementVNode("image", {
                src: "/static/my-img/\u8FDB\u5165\u7BAD\u5934.png",
                mode: "widthFix",
                class: "rightIcon"
              })
            ])
          ]),
          vue.createElementVNode("li", null, [
            vue.createElementVNode("view", { class: "listLeft" }, [
              vue.createElementVNode("view", { class: "listLx" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/\u8054\u7CFB\u6211\u4EEC-\u7535\u8BDD.png",
                  mode: "widthFix",
                  class: "leftIcon"
                }),
                vue.createElementVNode("text", { style: { "margin-left": "30rpx" } }, " \u8054\u7CFB\u6211\u4EEC ")
              ]),
              vue.createElementVNode("image", {
                src: "/static/my-img/\u8FDB\u5165\u7BAD\u5934.png",
                mode: "widthFix",
                class: "rightIcon"
              })
            ])
          ]),
          vue.createElementVNode("li", null, [
            vue.createElementVNode("view", { class: "listLeft" }, [
              vue.createElementVNode("view", { class: "listLx" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/\u5173\u4E8E\u6211\u4EEC.png",
                  mode: "widthFix",
                  class: "leftIcon"
                }),
                vue.createElementVNode("text", { style: { "margin-left": "30rpx" } }, " \u5173\u4E8E ")
              ]),
              vue.createElementVNode("image", {
                src: "/static/my-img/\u8FDB\u5165\u7BAD\u5934.png",
                mode: "widthFix",
                class: "rightIcon"
              })
            ])
          ]),
          vue.createElementVNode("li", null, [
            vue.createElementVNode("view", { class: "listLeft" }, [
              vue.createElementVNode("view", { class: "listLx" }, [
                vue.createElementVNode("image", {
                  src: "/static/my-img/138\u8BBE\u7F6E\u3001\u7CFB\u7EDF\u8BBE\u7F6E\u3001\u529F\u80FD\u8BBE\u7F6E\u3001\u5C5E\u6027.png",
                  mode: "widthFix",
                  class: "leftIcon"
                }),
                vue.createElementVNode("text", { style: { "margin-left": "30rpx" } }, " \u8BBE\u7F6E ")
              ]),
              vue.createElementVNode("image", {
                src: "/static/my-img/\u8FDB\u5165\u7BAD\u5934.png",
                mode: "widthFix",
                class: "rightIcon"
              })
            ])
          ])
        ])
      ])
    ]);
  }
  var PagesMyPageMyPage = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-b1deadb0"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/pages/my-page/my-page.vue"]]);
  var props$e = {
    props: {
      name: {
        type: [String, Number],
        default: props$u.numberBox.name
      },
      modelValue: {
        type: [String, Number],
        default: props$u.numberBox.value
      },
      min: {
        type: [String, Number],
        default: props$u.numberBox.min
      },
      max: {
        type: [String, Number],
        default: props$u.numberBox.max
      },
      step: {
        type: [String, Number],
        default: props$u.numberBox.step
      },
      integer: {
        type: Boolean,
        default: props$u.numberBox.integer
      },
      disabled: {
        type: Boolean,
        default: props$u.numberBox.disabled
      },
      disabledInput: {
        type: Boolean,
        default: props$u.numberBox.disabledInput
      },
      asyncChange: {
        type: Boolean,
        default: props$u.numberBox.asyncChange
      },
      inputWidth: {
        type: [String, Number],
        default: props$u.numberBox.inputWidth
      },
      showMinus: {
        type: Boolean,
        default: props$u.numberBox.showMinus
      },
      showPlus: {
        type: Boolean,
        default: props$u.numberBox.showPlus
      },
      decimalLength: {
        type: [String, Number, null],
        default: props$u.numberBox.decimalLength
      },
      longPress: {
        type: Boolean,
        default: props$u.numberBox.longPress
      },
      color: {
        type: String,
        default: props$u.numberBox.color
      },
      buttonSize: {
        type: [String, Number],
        default: props$u.numberBox.buttonSize
      },
      bgColor: {
        type: String,
        default: props$u.numberBox.bgColor
      },
      cursorSpacing: {
        type: [String, Number],
        default: props$u.numberBox.cursorSpacing
      },
      disablePlus: {
        type: Boolean,
        default: props$u.numberBox.disablePlus
      },
      disableMinus: {
        type: Boolean,
        default: props$u.numberBox.disableMinus
      },
      iconStyle: {
        type: [Object, String],
        default: props$u.numberBox.iconStyle
      }
    }
  };
  const _sfc_main$q = {
    name: "u-number-box",
    mixins: [mpMixin, mixin, props$e],
    data() {
      return {
        currentValue: "",
        longPressTimer: null
      };
    },
    watch: {
      watchChange(n) {
        this.check();
      },
      modelValue(n) {
        if (n !== this.currentValue) {
          this.currentValue = this.format(this.modelValue);
        }
      }
    },
    computed: {
      getCursorSpacing() {
        return uni.$u.getPx(this.cursorSpacing);
      },
      buttonStyle() {
        return (type) => {
          const style = {
            backgroundColor: this.bgColor,
            height: uni.$u.addUnit(this.buttonSize),
            color: this.color
          };
          if (this.isDisabled(type)) {
            style.backgroundColor = "#f7f8fa";
          }
          return style;
        };
      },
      inputStyle() {
        this.disabled || this.disabledInput;
        const style = {
          color: this.color,
          backgroundColor: this.bgColor,
          height: uni.$u.addUnit(this.buttonSize),
          width: uni.$u.addUnit(this.inputWidth)
        };
        return style;
      },
      watchChange() {
        return [this.integer, this.decimalLength, this.min, this.max];
      },
      isDisabled() {
        return (type) => {
          if (type === "plus") {
            return this.disabled || this.disablePlus || this.currentValue >= this.max;
          }
          return this.disabled || this.disableMinus || this.currentValue <= this.min;
        };
      }
    },
    mounted() {
      this.init();
    },
    emits: ["update:modelValue", "focus", "blur", "overlimit"],
    methods: {
      init() {
        this.currentValue = this.format(this.modelValue);
      },
      format(value2) {
        value2 = this.filter(value2);
        value2 = value2 === "" ? 0 : +value2;
        value2 = Math.max(Math.min(this.max, value2), this.min);
        if (this.decimalLength !== null) {
          value2 = value2.toFixed(this.decimalLength);
        }
        return value2;
      },
      filter(value2) {
        value2 = String(value2).replace(/[^0-9.-]/g, "");
        if (this.integer && value2.indexOf(".") !== -1) {
          value2 = value2.split(".")[0];
        }
        return value2;
      },
      check() {
        const val = this.format(this.currentValue);
        if (val !== this.currentValue) {
          this.currentValue = val;
        }
      },
      onFocus(event) {
        this.$emit("focus", __spreadProps(__spreadValues({}, event.detail), {
          name: this.name
        }));
      },
      onBlur(event) {
        this.format(event.detail.value);
        this.$emit("blur", __spreadProps(__spreadValues({}, event.detail), {
          name: this.name
        }));
      },
      onInput(e) {
        const {
          value: value2 = ""
        } = e.detail || {};
        if (value2 === "")
          return;
        let formatted = this.filter(value2);
        if (this.decimalLength !== null && formatted.indexOf(".") !== -1) {
          const pair = formatted.split(".");
          formatted = `${pair[0]}.${pair[1].slice(0, this.decimalLength)}`;
        }
        formatted = this.format(formatted);
        this.emitChange(formatted);
      },
      emitChange(value2) {
        if (!this.asyncChange) {
          this.$nextTick(() => {
            this.$emit("update:modelValue", value2);
            this.currentValue = value2;
            this.$forceUpdate();
          });
        }
        this.$emit("change", {
          value: value2,
          name: this.name
        });
      },
      onChange() {
        const {
          type
        } = this;
        if (this.isDisabled(type)) {
          return this.$emit("overlimit", type);
        }
        const diff = type === "minus" ? -this.step : +this.step;
        const value2 = this.format(this.add(+this.currentValue, diff));
        this.emitChange(value2);
        this.$emit(type);
      },
      add(num1, num2) {
        const cardinal = Math.pow(10, 10);
        return Math.round((num1 + num2) * cardinal) / cardinal;
      },
      clickHandler(type) {
        this.type = type;
        this.onChange();
      },
      longPressStep() {
        this.clearTimeout();
        this.longPressTimer = setTimeout(() => {
          this.onChange();
          this.longPressStep();
        }, 250);
      },
      onTouchStart(type) {
        if (!this.longPress)
          return;
        this.clearTimeout();
        this.type = type;
        this.longPressTimer = setTimeout(() => {
          this.onChange();
          this.longPressStep();
        }, 600);
      },
      onTouchEnd() {
        if (!this.longPress)
          return;
        this.clearTimeout();
      },
      clearTimeout() {
        clearTimeout(this.longPressTimer);
        this.longPressTimer = null;
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-number-box" }, [
      _ctx.showMinus && _ctx.$slots.minus ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-number-box__slot",
        onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => $options.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[1] || (_cache[1] = ($event) => $options.onTouchStart("minus")),
        onTouchend: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"]))
      }, [
        vue.renderSlot(_ctx.$slots, "minus", {}, void 0, true)
      ], 32)) : _ctx.showMinus ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["u-number-box__minus", { "u-number-box__minus--disabled": $options.isDisabled("minus") }]),
        onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => $options.clickHandler("minus"), ["stop"])),
        onTouchstart: _cache[4] || (_cache[4] = ($event) => $options.onTouchStart("minus")),
        onTouchend: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"])),
        "hover-class": "u-number-box__minus--hover",
        "hover-stay-time": "150",
        style: vue.normalizeStyle([$options.buttonStyle("minus")])
      }, [
        vue.createVNode(_component_u_icon, {
          name: "minus",
          color: $options.isDisabled("minus") ? "#c8c9cc" : "#323233",
          size: "15",
          bold: "",
          customStyle: _ctx.iconStyle
        }, null, 8, ["color", "customStyle"])
      ], 38)) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "input", {}, () => [
        vue.withDirectives(vue.createElementVNode("input", {
          disabled: _ctx.disabledInput || _ctx.disabled,
          "cursor-spacing": $options.getCursorSpacing,
          class: vue.normalizeClass([{ "u-number-box__input--disabled": _ctx.disabled || _ctx.disabledInput }, "u-number-box__input"]),
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.currentValue = $event),
          onBlur: _cache[7] || (_cache[7] = (...args) => $options.onBlur && $options.onBlur(...args)),
          onFocus: _cache[8] || (_cache[8] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onInput: _cache[9] || (_cache[9] = (...args) => $options.onInput && $options.onInput(...args)),
          type: "number",
          style: vue.normalizeStyle([$options.inputStyle])
        }, null, 46, ["disabled", "cursor-spacing"]), [
          [vue.vModelText, $data.currentValue]
        ])
      ], true),
      _ctx.showPlus && _ctx.$slots.plus ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "u-number-box__slot",
        onClick: _cache[10] || (_cache[10] = vue.withModifiers(($event) => $options.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[11] || (_cache[11] = ($event) => $options.onTouchStart("plus")),
        onTouchend: _cache[12] || (_cache[12] = vue.withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"]))
      }, [
        vue.renderSlot(_ctx.$slots, "plus", {}, void 0, true)
      ], 32)) : _ctx.showPlus ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 3,
        class: vue.normalizeClass(["u-number-box__plus", { "u-number-box__minus--disabled": $options.isDisabled("plus") }]),
        onClick: _cache[13] || (_cache[13] = vue.withModifiers(($event) => $options.clickHandler("plus"), ["stop"])),
        onTouchstart: _cache[14] || (_cache[14] = ($event) => $options.onTouchStart("plus")),
        onTouchend: _cache[15] || (_cache[15] = vue.withModifiers((...args) => $options.clearTimeout && $options.clearTimeout(...args), ["stop"])),
        "hover-class": "u-number-box__plus--hover",
        "hover-stay-time": "150",
        style: vue.normalizeStyle([$options.buttonStyle("plus")])
      }, [
        vue.createVNode(_component_u_icon, {
          name: "plus",
          color: $options.isDisabled("plus") ? "#c8c9cc" : "#323233",
          size: "15",
          bold: "",
          customStyle: _ctx.iconStyle
        }, null, 8, ["color", "customStyle"])
      ], 38)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-2f80c381"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-number-box/u-number-box.vue"]]);
  const MIN_DISTANCE = 10;
  function getDirection(x, y) {
    if (x > y && x > MIN_DISTANCE) {
      return "horizontal";
    }
    if (y > x && y > MIN_DISTANCE) {
      return "vertical";
    }
    return "";
  }
  var touch = {
    methods: {
      getTouchPoint(e) {
        if (!e) {
          return {
            x: 0,
            y: 0
          };
        }
        if (e.touches && e.touches[0]) {
          return {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
          };
        }
        if (e.changedTouches && e.changedTouches[0]) {
          return {
            x: e.changedTouches[0].pageX,
            y: e.changedTouches[0].pageY
          };
        }
        return {
          x: e.clientX || 0,
          y: e.clientY || 0
        };
      },
      resetTouchStatus() {
        this.direction = "";
        this.deltaX = 0;
        this.deltaY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
      },
      touchStart(event) {
        this.resetTouchStatus();
        const touch2 = this.getTouchPoint(event);
        this.startX = touch2.x;
        this.startY = touch2.y;
      },
      touchMove(event) {
        const touch2 = this.getTouchPoint(event);
        this.deltaX = touch2.x - this.startX;
        this.deltaY = touch2.y - this.startY;
        this.offsetX = Math.abs(this.deltaX);
        this.offsetY = Math.abs(this.deltaY);
        this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
      }
    }
  };
  var props$d = {
    props: {
      show: {
        type: Boolean,
        default: props$u.swipeActionItem.show
      },
      name: {
        type: [String, Number],
        default: props$u.swipeActionItem.name
      },
      disabled: {
        type: Boolean,
        default: props$u.swipeActionItem.disabled
      },
      autoClose: {
        type: Boolean,
        default: props$u.swipeActionItem.autoClose
      },
      threshold: {
        type: Number,
        default: props$u.swipeActionItem.threshold
      },
      options: {
        type: Array,
        default() {
          return uni.$u.props.swipeActionItem.rightOptions;
        }
      },
      duration: {
        type: [String, Number],
        default: props$u.swipeActionItem.duration
      }
    }
  };
  var wxs = {
    methods: {
      closeHandler() {
        this.status = "close";
      },
      setState(status) {
        this.status = status;
      },
      closeOther() {
        this.parent && this.parent.closeOther(this);
      }
    }
  };
  var block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("wxs");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["wxs"] = "2bc34abd";
  };
  const _sfc_main$p = {
    name: "u-swipe-action-item",
    mixins: [mpMixin, mixin, props$d, touch],
    mixins: [mpMixin, mixin, props$d, touch, wxs],
    data() {
      return {
        size: {},
        parentData: {
          autoClose: true
        },
        status: "close"
      };
    },
    watch: {
      wxsInit(newValue, oldValue) {
        this.queryRect();
      }
    },
    computed: {
      wxsInit() {
        return [this.disabled, this.autoClose, this.threshold, this.options, this.duration];
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.updateParentData();
        uni.$u.sleep().then(() => {
          this.queryRect();
        });
      },
      updateParentData() {
        this.getParentData("u-swipe-action");
      },
      queryRect() {
        this.$uGetRect(".u-swipe-action-item__right__button", true).then((buttons) => {
          this.size = {
            buttons,
            show: this.show,
            disabled: this.disabled,
            threshold: this.threshold,
            duration: this.duration
          };
        });
      },
      buttonClickHandler(item, index2) {
        this.$emit("click", {
          index: index2,
          name: this.name
        });
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-swipe-action-item",
      ref: "u-swipe-action-item"
    }, [
      vue.createElementVNode("view", { class: "u-swipe-action-item__right" }, [
        vue.renderSlot(_ctx.$slots, "button", {}, () => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index2,
              class: "u-swipe-action-item__right__button",
              ref_for: true,
              ref: `u-swipe-action-item__right__button-${index2}`,
              style: vue.normalizeStyle([{
                alignItems: item.style && item.style.borderRadius ? "center" : "stretch"
              }]),
              onClick: ($event) => $options.buttonClickHandler(item, index2)
            }, [
              vue.createElementVNode("view", {
                class: "u-swipe-action-item__right__button__wrapper",
                style: vue.normalizeStyle([{
                  backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : "#C7C6CD",
                  borderRadius: item.style && item.style.borderRadius ? item.style.borderRadius : "0",
                  padding: item.style && item.style.borderRadius ? "0" : "0 15px"
                }, item.style])
              }, [
                item.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                  key: 0,
                  name: item.icon,
                  color: item.style && item.style.color ? item.style.color : "#ffffff",
                  size: item.iconSize ? _ctx.$u.addUnit(item.iconSize) : item.style && item.style.fontSize ? _ctx.$u.getPx(item.style.fontSize) * 1.2 : 17,
                  customStyle: {
                    marginRight: item.text ? "2px" : 0
                  }
                }, null, 8, ["name", "color", "size", "customStyle"])) : vue.createCommentVNode("v-if", true),
                item.text ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 1,
                  class: "u-swipe-action-item__right__button__wrapper__text u-line-1",
                  style: vue.normalizeStyle([{
                    color: item.style && item.style.color ? item.style.color : "#ffffff",
                    fontSize: item.style && item.style.fontSize ? item.style.fontSize : "16px",
                    lineHeight: item.style && item.style.fontSize ? item.style.fontSize : "16px"
                  }])
                }, vue.toDisplayString(item.text), 5)) : vue.createCommentVNode("v-if", true)
              ], 4)
            ], 12, ["onClick"]);
          }), 128))
        ], true)
      ]),
      vue.createElementVNode("view", {
        class: "u-swipe-action-item__content",
        onTouchstart: _cache[0] || (_cache[0] = (...args) => _ctx.wxs.touchstart && _ctx.wxs.touchstart(...args)),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.wxs.touchmove && _ctx.wxs.touchmove(...args)),
        onTouchend: _cache[2] || (_cache[2] = (...args) => _ctx.wxs.touchend && _ctx.wxs.touchend(...args)),
        status: $data.status,
        "change:status": _ctx.wxs.statusChange,
        size: $data.size,
        "change:size": _ctx.wxs.sizeChange
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 40, ["status", "change:status", "size", "change:size"])
    ], 512);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$p);
  var __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-2c17f4be"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-swipe-action-item/u-swipe-action-item.vue"]]);
  var props$c = {
    props: {
      autoClose: {
        type: Boolean,
        default: props$u.swipeAction.autoClose
      }
    }
  };
  const _sfc_main$o = {
    name: "u-swipe-action",
    mixins: [mpMixin, mixin, props$c],
    data() {
      return {};
    },
    provide() {
      return {
        swipeAction: this
      };
    },
    computed: {
      parentData() {
        return [this.autoClose];
      }
    },
    watch: {
      parentData() {
        if (this.children.length) {
          this.children.map((child) => {
            typeof child.updateParentData === "function" && child.updateParentData();
          });
        }
      }
    },
    created() {
      this.children = [];
    },
    methods: {
      closeOther(child) {
        if (this.autoClose) {
          this.children.map((item, index2) => {
            if (child !== item) {
              item.closeHandler();
            }
          });
        }
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-swipe-action" }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  var __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-swipe-action/u-swipe-action.vue"]]);
  const _sfc_main$n = {
    data() {
      return {};
    },
    computed: {
      shoppingCartList() {
        formatAppLog("log", "at pages/shopping-page/shopping-page.vue:104", this.$store.state.shoppingCartList);
        return this.$store.state.shoppingCartList;
      },
      isShoppingCheckedAll() {
        return this.$store.getters.isShoppingCheckedAll;
      },
      allSale() {
        let sum = 0;
        const { shoppingCartList } = this.$store.state;
        shoppingCartList.map((item) => {
          if (item.isChecked) {
            sum += parseInt(item.detail.sale.substring(1)) * item.count;
            formatAppLog("log", "at pages/shopping-page/shopping-page.vue:118", parseInt(item.detail.sale.substring(1)), item.count);
          }
        });
        return sum;
      }
    },
    methods: {
      goDetail() {
      },
      changeCount(e, index2) {
        const { value: count } = e;
        this.$store.commit("changeShoppingItem", {
          index: index2,
          count
        });
      },
      goIndexPage() {
        uni.switchTab({
          url: "/pages/index-page/index-page"
        });
      },
      changeChecked(e, index2) {
        const isChecked = e.detail.value[0] ? true : false;
        this.$store.commit("changeShoppingItem", {
          index: index2,
          isChecked
        });
      },
      changeShoppingCheckedAll(e) {
        const isChecked = e.detail.value[0] ? true : false;
        this.$store.commit("changeShoppingCheckedAll", isChecked);
      },
      deleteShoppingItem(e) {
        if (e.index !== void 0) {
          this.$store.commit("deleteShoppingItem", e.index);
        }
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_number_box = resolveEasycom(vue.resolveDynamicComponent("u-number-box"), __easycom_4);
    const _component_u_swipe_action_item = resolveEasycom(vue.resolveDynamicComponent("u-swipe-action-item"), __easycom_1$5);
    const _component_u_swipe_action = resolveEasycom(vue.resolveDynamicComponent("u-swipe-action"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "shopping-page-container" }, [
        vue.createElementVNode("view", { class: "title" }, " \u8D2D\u7269\u8F66 "),
        $options.shoppingCartList.length <= 0 ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "empty-container"
        }, [
          vue.createElementVNode("view", { class: "empty-title" }, " \u8D2D\u7269\u8F66\u7A7A\u7A7A\u5982\u4E5F "),
          vue.createElementVNode("view", { class: "empty-sub-title" }, " \u8D76\u7D27\u7292\u52B3\u4E00\u4E0B\u81EA\u5DF1\u5427 "),
          vue.createElementVNode("view", {
            class: "empty-btn",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goIndexPage && $options.goIndexPage(...args))
          }, " \u53BB\u901B\u901B ")
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "shopping-cart-list" }, [
          vue.createVNode(_component_u_swipe_action, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.shoppingCartList, (item, index2) => {
                return vue.openBlock(), vue.createBlock(_component_u_swipe_action_item, {
                  options: [{ text: "\u5220\u9664" }],
                  key: index2,
                  onClick: $options.deleteShoppingItem
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "shopping-cart-item" }, [
                      vue.createElementVNode("checkbox-group", {
                        name: "",
                        onChange: ($event) => $options.changeChecked($event, index2)
                      }, [
                        vue.createElementVNode("checkbox", {
                          value: true,
                          checked: item.isChecked,
                          color: "#ED8F58"
                        }, null, 8, ["checked"])
                      ], 40, ["onChange"]),
                      vue.createElementVNode("view", { class: "info" }, [
                        vue.createElementVNode("view", { class: "info-cover" }, [
                          vue.createElementVNode("img", {
                            src: item.detail_img[0],
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        vue.createElementVNode("view", { class: "info-text" }, [
                          vue.createElementVNode("view", { class: "info-name" }, vue.toDisplayString(item.detail.name), 1),
                          vue.createElementVNode("view", { class: "info-type" }, vue.toDisplayString(item.type), 1),
                          vue.createElementVNode("view", { class: "info-bottom" }, [
                            vue.createElementVNode("view", { class: "info-sale" }, vue.toDisplayString(item.detail.sale), 1),
                            vue.createElementVNode("view", { class: "info-count" }, [
                              vue.createVNode(_component_u_number_box, {
                                modelValue: item.count,
                                "onUpdate:modelValue": ($event) => item.count = $event,
                                onChange: ($event) => $options.changeCount($event, index2)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                              vue.createCommentVNode(" {{item.count}} ")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        vue.createElementVNode("view", { class: "recommend-container" }, [
          vue.createElementVNode("view", { class: "recommend-title" }, [
            vue.createElementVNode("view", { class: "left" }),
            vue.createElementVNode("view", { class: "text" }, "\u4E3A\u4F60\u63A8\u8350"),
            vue.createElementVNode("view", { class: "right" })
          ]),
          vue.createElementVNode("view", { class: "recommend-content" }, [
            vue.createCommentVNode(" todo "),
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList([1, 2, 3, 4], (item) => {
              return vue.createElementVNode("view", {
                class: "recommend-item",
                key: item,
                onClick: _cache[1] || (_cache[1] = (...args) => $options.goDetail && $options.goDetail(...args))
              }, [
                vue.createElementVNode("view", { class: "item-cover" }, [
                  vue.createElementVNode("img", {
                    src: "/static/shopping-img/cover1.png",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("view", { class: "item-title" }, "\u4E91\u5357\u9999\u683C\u91CC\u62C9 \u91CE\u751F\u5C71\u6838\u6843150g*6"),
                vue.createElementVNode("view", { class: "item-label" }, [
                  vue.createElementVNode("view", null, "\u7279\u4EF7"),
                  vue.createElementVNode("view", null, "24H\u53D1\u8D27")
                ]),
                vue.createElementVNode("view", { class: "item-price" }, [
                  vue.createElementVNode("view", null, "\uFFE5"),
                  vue.createElementVNode("view", { class: "price-text" }, "39.9/\u7BB1")
                ]),
                vue.createElementVNode("view", { class: "item-icon" }, [
                  vue.createElementVNode("img", {
                    src: "/static/shopping-img/shopping-icon.png",
                    alt: ""
                  })
                ])
              ]);
            }), 64))
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "count-container" }, [
        vue.createElementVNode("view", { class: "select-all" }, [
          vue.createElementVNode("label", { class: "radio" }, [
            vue.createElementVNode("checkbox-group", {
              name: "",
              onChange: _cache[2] || (_cache[2] = (...args) => $options.changeShoppingCheckedAll && $options.changeShoppingCheckedAll(...args))
            }, [
              vue.createElementVNode("checkbox", {
                value: true,
                checked: $options.isShoppingCheckedAll,
                color: "#ED8F58"
              }, null, 8, ["checked"]),
              vue.createElementVNode("text", null, "\u5168\u9009")
            ], 32)
          ])
        ]),
        vue.createElementVNode("view", { class: "settlement" }, [
          vue.createElementVNode("view", { class: "" }, [
            vue.createElementVNode("text", null, "\u5408\u8BA1: \uFFE5"),
            vue.createElementVNode("text", null, vue.toDisplayString($options.allSale), 1)
          ]),
          vue.createElementVNode("view", { class: "settlement-btn" }, "\u53BB\u7ED3\u7B97")
        ])
      ])
    ]);
  }
  var PagesShoppingPageShoppingPage = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-7f703670"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/pages/shopping-page/shopping-page.vue"]]);
  var classifyData = [
    {
      "name": "\u5BB6\u7535",
      "foods": [
        {
          "name": "\u626B\u5730\u673A\u5668\u4EBA",
          "key": "\u626B\u5730\u673A\u5668\u4EBA",
          "icon": "https://s1.ax1x.com/2022/10/31/xoYFqP.png",
          "cat": 10
        },
        {
          "name": "\u8C46\u6D46\u673A",
          "key": "\u8C46\u6D46\u673A",
          "icon": "https://s1.ax1x.com/2022/10/31/xoYEa8.png",
          "cat": 10
        },
        {
          "name": "\u70E4\u7BB1",
          "key": "\u70E4\u7BB1",
          "icon": "https://s1.ax1x.com/2022/10/31/xoYePg.png",
          "cat": 10
        },
        {
          "name": "\u5438\u5C18\u5668",
          "key": "\u5438\u5C18\u5668",
          "icon": "https://s1.ax1x.com/2022/10/31/xoYuxs.png",
          "cat": 10
        },
        {
          "name": "\u6696\u98CE\u673A",
          "key": "\u6696\u98CE\u673A",
          "icon": "https://s1.ax1x.com/2022/10/31/xoYMMn.png",
          "cat": 10
        },
        {
          "name": "\u5145\u7535\u5668",
          "key": "\u5145\u7535\u5668",
          "icon": "https://s1.ax1x.com/2022/10/31/xoYlq0.png",
          "cat": 10
        }
      ]
    },
    {
      "name": "\u7F8E\u5986",
      "foods": [
        {
          "name": "\u5316\u5986\u5237",
          "key": "\u5316\u5986\u5237",
          "icon": "https://s1.ax1x.com/2022/10/31/xo0mTI.png",
          "cat": 3
        },
        {
          "name": "\u7C89\u5E95",
          "key": "\u7C89\u5E95",
          "icon": "https://s1.ax1x.com/2022/10/31/xo0lp8.png",
          "cat": 3
        },
        {
          "name": "\u6D17\u53D1\u62A4\u53D1",
          "key": "\u6D17\u53D1\u62A4\u53D1",
          "icon": "https://s1.ax1x.com/2022/10/31/xo0ukt.png",
          "cat": 3
        },
        {
          "name": "\u773C\u90E8\u62A4\u7406",
          "key": "\u773C\u90E8\u62A4\u7406",
          "icon": "https://cdn.uviewui.com/uview/common/classify/3/5.jpg",
          "cat": 3
        },
        {
          "name": "\u5378\u5986\u54C1",
          "key": "\u5378\u5986\u54C1",
          "icon": "https://s1.ax1x.com/2022/10/31/xo0Rtx.png",
          "cat": 3
        },
        {
          "name": "\u57FA\u7840\u62A4\u80A4",
          "key": "\u57FA\u7840\u62A4\u80A4",
          "icon": "https://s1.ax1x.com/2022/10/31/xo0h9K.png",
          "cat": 3
        }
      ]
    },
    {
      "name": "\u6C34\u679C",
      "foods": [
        {
          "name": "\u69B4\u83B2",
          "key": "\u69B4\u83B2",
          "icon": "https://s1.ax1x.com/2022/10/31/xoNE9g.png",
          "cat": 12
        },
        {
          "name": "\u8461\u8404",
          "key": "\u8461\u8404",
          "icon": "https://s1.ax1x.com/2022/10/31/xotlSH.png",
          "cat": 12
        },
        {
          "name": "\u6C34\u871C\u6843",
          "key": "\u6C34\u871C\u6843",
          "icon": "https://s1.ax1x.com/2022/10/31/xotJmt.png",
          "cat": 12
        },
        {
          "name": "\u83E0\u841D\u871C",
          "key": "\u83E0\u841D\u871C",
          "icon": "https://s1.ax1x.com/2022/10/31/xottTf.png",
          "cat": 12
        },
        {
          "name": "\u4E09\u534E\u674E",
          "key": "\u4E09\u534E\u674E",
          "icon": "https://s1.ax1x.com/2022/10/31/xotUk8.png",
          "cat": 12
        },
        {
          "name": "\u7315\u7334\u6843",
          "key": "\u7315\u7334\u6843",
          "icon": "https://s1.ax1x.com/2022/10/31/xotdfg.png",
          "cat": 12
        },
        {
          "name": "\u6BDB\u6843",
          "key": "\u6BDB\u6843",
          "icon": "https://s1.ax1x.com/2022/10/31/xotzjA.png",
          "cat": 12
        },
        {
          "name": "\u54C8\u5BC6\u74DC",
          "key": "\u54C8\u5BC6\u74DC",
          "icon": "https://s1.ax1x.com/2022/10/31/xoNCHP.png",
          "cat": 12
        },
        {
          "name": "\u84DD\u8393",
          "key": "\u84DD\u8393",
          "icon": "https://s1.ax1x.com/2022/10/31/xoNiAf.png",
          "cat": 12
        }
      ]
    },
    {
      "name": "\u96F6\u98DF",
      "foods": [
        {
          "name": "\u679C\u5E72",
          "key": "\u679C\u5E72",
          "icon": "https://s1.ax1x.com/2022/10/31/xoDRSK.png",
          "cat": 6
        },
        {
          "name": "\u7CD5\u70B9\u997C\u5E72",
          "key": "\u7CD5\u70B9\u997C\u5E72",
          "icon": "https://s1.ax1x.com/2022/10/31/xoD7FI.png",
          "cat": 6
        },
        {
          "name": "\u85AF\u7247",
          "key": "\u85AF\u7247",
          "icon": "https://s1.ax1x.com/2022/10/31/xoDOl8.png",
          "cat": 6
        }
      ]
    },
    {
      "name": "\u7BB1\u5305",
      "foods": [
        {
          "name": "\u659C\u630E\u5305",
          "key": "\u659C\u630E\u5305",
          "icon": "https://s1.ax1x.com/2022/10/31/xorCYq.png",
          "cat": 0
        },
        {
          "name": "\u80CC\u5305",
          "key": "\u80CC\u5305",
          "icon": "https://s1.ax1x.com/2022/10/31/xorPf0.png",
          "cat": 0
        },
        {
          "name": "\u65C5\u884C\u7BB1\u5305",
          "key": "\u65C5\u884C\u7BB1\u5305",
          "icon": "https://s1.ax1x.com/2022/10/31/xorSTs.png",
          "cat": 0
        }
      ]
    },
    {
      "name": "\u978B\u54C1",
      "foods": [
        {
          "name": "\u76AE\u978B",
          "key": "\u76AE\u978B",
          "icon": "https://s1.ax1x.com/2022/11/01/xT6eZF.png",
          "cat": 5
        },
        {
          "name": "\u51C9\u978B",
          "key": "\u51C9\u978B",
          "icon": "https://s1.ax1x.com/2022/11/01/xT6Ki9.png",
          "cat": 5
        },
        {
          "name": "\u4F11\u95F2\u978B",
          "key": "\u4F11\u95F2\u978B",
          "icon": "https://s1.ax1x.com/2022/11/01/xT68sK.png",
          "cat": 5
        }
      ]
    },
    {
      "name": "\u670D\u9970",
      "foods": [
        {
          "name": "\u4F11\u95F2",
          "key": "\u4F11\u95F2",
          "icon": "https://s1.ax1x.com/2022/10/31/xoBwVA.png",
          "cat": 11
        },
        {
          "name": "\u68C9\u9EBB",
          "key": "\u68C9\u9EBB",
          "icon": "https://s1.ax1x.com/2022/10/31/xoBy28.png",
          "cat": 2
        },
        {
          "name": "\u886C\u886B",
          "key": "\u886C\u886B",
          "icon": "https://s1.ax1x.com/2022/10/31/xoBrPP.png",
          "cat": 4
        }
      ]
    },
    {
      "name": "\u9996\u9970",
      "foods": [
        {
          "name": "\u592A\u9633\u955C",
          "key": "\u592A\u9633\u955C",
          "icon": "https://s1.ax1x.com/2022/11/01/xTcSOK.png",
          "cat": 0
        },
        {
          "name": "\u68D2\u7403\u5E3D",
          "key": "\u68D2\u7403\u5E3D",
          "icon": "https://s1.ax1x.com/2022/11/01/xTcCwD.png",
          "cat": 0
        },
        {
          "name": "\u624B\u8868",
          "key": "\u624B\u8868",
          "icon": "https://s1.ax1x.com/2022/11/01/xTcPTe.png",
          "cat": 0
        },
        {
          "name": "\u9879\u94FE",
          "key": "\u9879\u94FE",
          "icon": "https://s1.ax1x.com/2022/11/01/xT6xQx.png",
          "cat": 0
        }
      ]
    }
  ];
  const _sfc_main$m = {
    components: {
      CommonSearch
    },
    data() {
      return {
        scrollTop: 0,
        oldScrollTop: 0,
        current: 0,
        menuHeight: 0,
        menuItemHeight: 0,
        itemId: "",
        tabbar: classifyData,
        menuItemPos: [],
        arr: [],
        scrollRightTop: 0,
        timer: null
      };
    },
    onReady() {
      this.getMenuItemTop();
    },
    methods: {
      async swichMenu(index2) {
        if (this.arr.length == 0) {
          await this.getMenuItemTop();
        }
        if (index2 == this.current)
          return;
        this.scrollRightTop = this.oldScrollTop;
        this.$nextTick(function() {
          this.scrollRightTop = this.arr[index2];
          this.current = index2;
          this.leftMenuStatus(index2);
        });
        formatAppLog("log", "at pages/type-page/type-page.vue:90", "666");
      },
      getElRect(elClass, dataVal) {
        new Promise((resolve, reject) => {
          const query = uni.createSelectorQuery().in(this);
          query.select("." + elClass).fields({
            size: true
          }, (res) => {
            if (!res) {
              setTimeout(() => {
                this.getElRect(elClass);
              }, 10);
              return;
            }
            this[dataVal] = res.height;
            resolve();
          }).exec();
        });
      },
      async observer() {
        this.tabbar.map((val, index2) => {
          let observer = uni.createIntersectionObserver(this);
          observer.relativeTo(".right-box", {
            top: 0
          }).observe("#item" + index2, (res) => {
            if (res.intersectionRatio > 0) {
              let id = res.id.substring(4);
              this.leftMenuStatus(id);
            }
          });
        });
      },
      async leftMenuStatus(index2) {
        this.current = index2;
        if (this.menuHeight == 0 || this.menuItemHeight == 0) {
          await this.getElRect("menu-scroll-view", "menuHeight");
          await this.getElRect("u-tab-item", "menuItemHeight");
        }
        this.scrollTop = index2 * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
      },
      getMenuItemTop() {
        new Promise((resolve) => {
          let selectorQuery = uni.createSelectorQuery();
          selectorQuery.selectAll(".class-item").boundingClientRect((rects) => {
            if (!rects.length) {
              setTimeout(() => {
                this.getMenuItemTop();
              }, 10);
              return;
            }
            rects.forEach((rect) => {
              this.arr.push(rect.top - rects[0].top);
              resolve();
            });
          }).exec();
        });
      },
      async rightScroll(e) {
        this.oldScrollTop = e.detail.scrollTop;
        if (this.arr.length == 0) {
          await this.getMenuItemTop();
        }
        if (this.timer)
          return;
        if (!this.menuHeight) {
          await this.getElRect("menu-scroll-view", "menuHeight");
        }
        setTimeout(() => {
          this.timer = null;
          let scrollHeight = e.detail.scrollTop + this.menuHeight / 2;
          for (let i = 0; i < this.arr.length; i++) {
            let height1 = this.arr[i];
            if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
              this.leftMenuStatus(i);
              return;
            }
          }
        }, 10);
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_CommonSearch = vue.resolveComponent("CommonSearch");
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-wrap" }, [
      vue.createElementVNode("view", { class: "u-search-box" }, [
        vue.createElementVNode("view", { class: "u-search-inner" }, [
          vue.createElementVNode("br"),
          vue.createElementVNode("br"),
          vue.createElementVNode("br"),
          vue.createVNode(_component_CommonSearch)
        ])
      ]),
      vue.createElementVNode("view", { class: "u-menu-wrap" }, [
        vue.createElementVNode("scroll-view", {
          "scroll-y": "",
          "scroll-with-animation": "",
          class: "u-tab-view menu-scroll-view",
          "scroll-top": $data.scrollTop,
          "scroll-into-view": $data.itemId
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tabbar, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index2,
              class: vue.normalizeClass(["u-tab-item", [$data.current == index2 ? "u-tab-item-active" : ""]]),
              onClick: vue.withModifiers(($event) => $options.swichMenu(index2), ["stop"])
            }, [
              vue.createElementVNode("text", { class: "u-line-1" }, vue.toDisplayString(item.name), 1)
            ], 10, ["onClick"]);
          }), 128))
        ], 8, ["scroll-top", "scroll-into-view"]),
        vue.createElementVNode("scroll-view", {
          "scroll-top": $data.scrollRightTop,
          "scroll-y": "",
          "scroll-with-animation": "",
          class: "right-box",
          onScroll: _cache[0] || (_cache[0] = (...args) => $options.rightScroll && $options.rightScroll(...args))
        }, [
          vue.createElementVNode("view", { class: "page-view" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.tabbar, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "class-item",
                id: "item" + index2,
                key: index2
              }, [
                vue.createElementVNode("view", { class: "item-title" }, [
                  vue.createElementVNode("text", null, vue.toDisplayString(item.name), 1)
                ]),
                vue.createElementVNode("view", { class: "item-container" }, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.foods, (item1, index1) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "thumb-box",
                      key: index1
                    }, [
                      vue.createElementVNode("image", {
                        class: "item-menu-image",
                        src: item1.icon,
                        mode: ""
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "item-menu-name" }, vue.toDisplayString(item1.name), 1)
                    ]);
                  }), 128))
                ])
              ], 8, ["id"]);
            }), 128))
          ])
        ], 40, ["scroll-top"])
      ])
    ]);
  }
  var PagesTypePageTypePage = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-d857c968"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/pages/type-page/type-page.vue"]]);
  var props$b = {
    props: {
      bgColor: {
        type: String,
        default: props$u.statusBar.bgColor
      }
    }
  };
  const _sfc_main$l = {
    name: "u-status-bar",
    mixins: [mpMixin, mixin, props$b],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = uni.$u.addUnit(uni.$u.sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      style: vue.normalizeStyle([$options.style]),
      class: "u-status-bar"
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 4);
  }
  var __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-782db321"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-status-bar/u-status-bar.vue"]]);
  var props$a = {
    props: {
      top: {
        type: [String, Number],
        default: props$u.notify.top
      },
      type: {
        type: String,
        default: props$u.notify.type
      },
      color: {
        type: String,
        default: props$u.notify.color
      },
      bgColor: {
        type: String,
        default: props$u.notify.bgColor
      },
      message: {
        type: String,
        default: props$u.notify.message
      },
      duration: {
        type: [String, Number],
        default: props$u.notify.duration
      },
      fontSize: {
        type: [String, Number],
        default: props$u.notify.fontSize
      },
      safeAreaInsetTop: {
        type: Boolean,
        default: props$u.notify.safeAreaInsetTop
      }
    }
  };
  const _sfc_main$k = {
    name: "u-notify",
    mixins: [mpMixin, mixin, props$a],
    data() {
      return {
        open: false,
        timer: null,
        config: {
          top: uni.$u.props.notify.top,
          type: uni.$u.props.notify.type,
          color: uni.$u.props.notify.color,
          bgColor: uni.$u.props.notify.bgColor,
          message: uni.$u.props.notify.message,
          duration: uni.$u.props.notify.duration,
          fontSize: uni.$u.props.notify.fontSize,
          safeAreaInsetTop: uni.$u.props.notify.safeAreaInsetTop
        },
        tmpConfig: {}
      };
    },
    computed: {
      containerStyle() {
        let top = 0;
        if (this.tmpConfig.top === 0)
          ;
        const style = {
          top: uni.$u.addUnit(this.tmpConfig.top === 0 ? top : this.tmpConfig.top),
          position: "fixed",
          left: 0,
          right: 0,
          zIndex: 10076
        };
        return style;
      },
      backgroundColor() {
        const style = {};
        if (this.tmpConfig.bgColor) {
          style.backgroundColor = this.tmpConfig.bgColor;
        }
        return style;
      },
      icon() {
        let icon2;
        if (this.tmpConfig.type === "success") {
          icon2 = "checkmark-circle";
        } else if (this.tmpConfig.type === "error") {
          icon2 = "close-circle";
        } else if (this.tmpConfig.type === "warning") {
          icon2 = "error-circle";
        }
        return icon2;
      }
    },
    created() {
      ["primary", "success", "error", "warning"].map((item) => {
        this[item] = (message) => this.show({
          type: item,
          message
        });
      });
    },
    methods: {
      show(options) {
        this.tmpConfig = uni.$u.deepMerge(this.config, options);
        this.clearTimer();
        this.open = true;
        if (this.tmpConfig.duration > 0) {
          this.timer = setTimeout(() => {
            this.open = false;
            this.clearTimer();
            typeof this.tmpConfig.complete === "function" && this.tmpConfig.complete();
          }, this.tmpConfig.duration);
        }
      },
      close() {
        this.clearTimer();
      },
      clearTimer() {
        this.open = false;
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    beforeDestroy() {
      this.clearTimer();
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$4);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$a);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      mode: "slide-down",
      customStyle: $options.containerStyle,
      show: $data.open
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["u-notify", [`u-notify--${$data.tmpConfig.type}`]]),
          style: vue.normalizeStyle([$options.backgroundColor, _ctx.$u.addStyle(_ctx.customStyle)])
        }, [
          $data.tmpConfig.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "u-notify__warpper" }, [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              ["success", "warning", "error"].includes($data.tmpConfig.type) ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: $data.tmpConfig.icon,
                color: $data.tmpConfig.color,
                size: 1.3 * $data.tmpConfig.fontSize,
                customStyle: { marginRight: "4px" }
              }, null, 8, ["name", "color", "size"])) : vue.createCommentVNode("v-if", true)
            ], true),
            vue.createElementVNode("text", {
              class: "u-notify__warpper__text",
              style: vue.normalizeStyle({
                fontSize: _ctx.$u.addUnit($data.tmpConfig.fontSize),
                color: $data.tmpConfig.color
              })
            }, vue.toDisplayString($data.tmpConfig.message), 5)
          ])
        ], 6)
      ]),
      _: 3
    }, 8, ["customStyle", "show"]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-1037107e"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-notify/u-notify.vue"]]);
  const _sfc_main$j = {
    name: "imgInput",
    props: {
      value: [String],
      iSrc: {
        default: "../static/login-img/user.png"
      },
      type: {
        type: String,
        default: "text"
      },
      showPassword: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: "\u8BF7\u8F93\u5165"
      }
    },
    data() {
      return {
        passwordVisible: false
      };
    },
    computed: {
      eyeUrl: function() {
        return this.passwordVisible ? "../static/login-img/invisibility.png" : "../static/login-img/visible.png";
      }
    },
    methods: {
      handleInput(event) {
        this.$emit("update:value", event.detail.value);
      },
      handlePassword() {
        this.passwordVisible = !this.passwordVisible;
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "i-container" }, [
      vue.createElementVNode("image", {
        src: $props.iSrc,
        mode: "widthFix"
      }, null, 8, ["src"]),
      vue.createElementVNode("input", {
        type: $props.showPassword ? $data.passwordVisible ? "text" : "password" : $props.type,
        value: $props.value,
        onInput: _cache[0] || (_cache[0] = (...args) => $options.handleInput && $options.handleInput(...args)),
        placeholder: $props.placeholder
      }, null, 40, ["type", "value", "placeholder"]),
      $props.showPassword ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        onClick: _cache[1] || (_cache[1] = (...args) => $options.handlePassword && $options.handlePassword(...args)),
        src: $options.eyeUrl,
        mode: "widthFix"
      }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var imgInput = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-540aea82"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/components/imgInput.vue"]]);
  var _imports_0 = "/static/login-img/shoping.png";
  const _sfc_main$i = {
    components: {
      imgInput
    },
    data() {
      return {
        userName: "",
        password: ""
      };
    },
    methods: {
      submit() {
        if (this.userName && this.password) {
          this.$store.state.userName = this.userName;
          this.$refs.uToast.show({
            type: "success",
            message: "\u767B\u5F55\u6210\u529F",
            complete() {
              uni.switchTab({
                url: "../index-page/index-page"
              });
            }
          });
        } else {
          this.$refs.uNotify.show({
            type: "warning",
            message: "\u8BF7\u8F93\u5165\u8D26\u53F7\u6216\u5BC6\u7801",
            duration: 1500,
            safeAreaInsetTop: true
          });
        }
      },
      toRegister() {
        uni.redirectTo({
          url: "/pages/register-page/register-page"
        });
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_notify = resolveEasycom(vue.resolveDynamicComponent("u-notify"), __easycom_0$1);
    const _component_u_toast = resolveEasycom(vue.resolveDynamicComponent("u-toast"), __easycom_1$8);
    const _component_imgInput = vue.resolveComponent("imgInput");
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createVNode(_component_u_notify, {
        ref: "uNotify",
        message: "\u63D0\u793A\u6846"
      }, null, 512),
      vue.createVNode(_component_u_toast, { ref: "uToast" }, null, 512),
      vue.createElementVNode("view", { class: "head" }, [
        vue.createElementVNode("image", {
          class: "img-icon",
          src: _imports_0,
          alt: "icon"
        }),
        vue.createElementVNode("text", null, "shopping")
      ]),
      vue.createElementVNode("view", { class: "banner" }, [
        vue.createElementVNode("img", {
          src: "https://s1.ax1x.com/2022/10/27/xfZ8pj.png",
          alt: "login-banner",
          style: { "height": "480rpx" }
        })
      ]),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createVNode(_component_imgInput, {
          iSrc: "../../static/login-img/user.png",
          value: $data.userName,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => $data.userName = $event)
        }, null, 8, ["value"]),
        vue.createVNode(_component_imgInput, {
          iSrc: "../../static/login-img/password.png",
          showPassword: "",
          value: $data.password,
          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => $data.password = $event)
        }, null, 8, ["value"]),
        vue.createElementVNode("button", {
          class: "btn",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.submit && $options.submit(...args))
        }, "\u767B\u5F55")
      ]),
      vue.createElementVNode("view", { class: "select" }, [
        vue.createElementVNode("span", {
          onClick: _cache[3] || (_cache[3] = (...args) => $options.toRegister && $options.toRegister(...args))
        }, "\u7ACB\u5373\u6CE8\u518C"),
        vue.createElementVNode("span", { style: { "margin": "0 30rpx", "color": "#a6a6a6" } }, "|"),
        vue.createElementVNode("span", null, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F")
      ]),
      vue.createElementVNode("view", { class: "moreLogin" }, [
        vue.createElementVNode("view", { class: "title" }, " \u2014\u2014\u2014\u2014 \u5176\u4ED6\u767B\u5F55 \u2014\u2014\u2014\u2014 "),
        vue.createElementVNode("view", { class: "loginMode" }, [
          vue.createElementVNode("image", {
            src: "/static/login-img/wx.png",
            mode: "widthFix"
          }),
          vue.createElementVNode("image", {
            src: "/static/login-img/wb.png",
            mode: "widthFix",
            style: { "margin": "0 80rpx" }
          }),
          vue.createElementVNode("image", {
            src: "/static/login-img/QQ.png",
            mode: "widthFix"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "protocol" }, " \u767B\u5F55\u5373\u4EE3\u8868\u540C\u610F\u60A8\u5DF2\u540C\u610F\u300A\u7528\u6237\u534F\u8BAE\u300B\u4E0E\u300A\u9690\u79C1\u653F\u7B56\u300B ")
    ]);
  }
  var PagesLoginPageLoginPage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-32456966"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/pages/login-page/login-page.vue"]]);
  var props$9 = {
    props: {
      color: {
        type: String,
        default: props$u.line.color
      },
      length: {
        type: [String, Number],
        default: props$u.line.length
      },
      direction: {
        type: String,
        default: props$u.line.direction
      },
      hairline: {
        type: Boolean,
        default: props$u.line.hairline
      },
      margin: {
        type: [String, Number],
        default: props$u.line.margin
      },
      dashed: {
        type: Boolean,
        default: props$u.line.dashed
      }
    }
  };
  const _sfc_main$h = {
    name: "u-line",
    mixins: [mpMixin, mixin, props$9],
    computed: {
      lineStyle() {
        const style = {};
        style.margin = this.margin;
        if (this.direction === "row") {
          style.borderBottomWidth = "1px";
          style.borderBottomStyle = this.dashed ? "dashed" : "solid";
          style.width = uni.$u.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleY(0.5)";
        } else {
          style.borderLeftWidth = "1px";
          style.borderLeftStyle = this.dashed ? "dashed" : "solid";
          style.height = uni.$u.addUnit(this.length);
          if (this.hairline)
            style.transform = "scaleX(0.5)";
        }
        style.borderColor = this.color;
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-line",
      style: vue.normalizeStyle([$options.lineStyle])
    }, null, 4);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-059431e1"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-line/u-line.vue"]]);
  const _sfc_main$g = {
    name: "classify-page",
    data() {
      return {
        siftData: {
          list: [
            { id: "1", name: "\u7EFC\u5408" },
            { id: "2", name: "\u4EF7\u683C" },
            { id: "3", name: "\u9500\u91CF" },
            { id: "4", name: "\u7B5B\u9009" }
          ]
        },
        commodity: {}
      };
    },
    methods: {
      pageJump1(value2) {
        uni.navigateTo({
          url: value2
        });
      },
      pageJump(val) {
        const listData = JSON.stringify(val);
        formatAppLog("log", "at pages/classify-page/classify-page.vue:99", listData);
        uni.navigateTo({
          url: `../../subpages/detailsPage/detailsPage?Data=${listData}`
        });
      }
    },
    onLoad() {
      $http.request({
        url: "/list/data"
      }).then((res) => {
        formatAppLog("log", "at pages/classify-page/classify-page.vue:109", res.data);
        this.commodity = res.data;
      }).catch(() => {
        uni.showToast({
          title: "\u8BF7\u6C42\u5931\u8D25\uFF01",
          icon: "none"
        });
      });
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_search = resolveEasycom(vue.resolveDynamicComponent("u-search"), __easycom_1$6);
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "allsearch" }, [
        vue.createElementVNode("view", { class: "searchAll" }, [
          vue.createElementVNode("view", { class: "search" }, [
            vue.createVNode(_component_u_icon, {
              name: "arrow-left",
              color: "#000000",
              size: "28",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.pageJump1("../../subpages/searchPage/searchPage"))
            }),
            vue.createVNode(_component_u_search, {
              placeholder: "\u5BB6\u5177",
              disabled: true,
              clearabled: true,
              bgColor: "#f3f3f3",
              showAction: false,
              height: "64rpx",
              margin: "0 auto"
            }),
            vue.createVNode(_component_u_icon, {
              name: "grid-fill",
              color: "#636363",
              size: "36"
            })
          ]),
          vue.createVNode(_component_u_line, {
            color: "grey",
            "hair-line": "false",
            margin: "10rpx"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "siftAll" }, [
        vue.createElementVNode("view", { class: "siftContent" }, [
          vue.createElementVNode("ul", null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.siftData.list, (item) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                key: item.id,
                style: { "list-style-type": "none" }
              }, [
                vue.createElementVNode("a", null, [
                  vue.createTextVNode(vue.toDisplayString(item.name) + " ", 1),
                  vue.createElementVNode("view", { class: "click" }, [
                    vue.createElementVNode("span", { class: "top" }),
                    vue.createElementVNode("span", { class: "bottom" })
                  ])
                ])
              ]);
            }), 128))
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "history" }, [
        vue.createElementVNode("span", null, "\u6C99\u53D1"),
        vue.createElementVNode("span", null, "\u6B27\u5F0F"),
        vue.createElementVNode("span", null, "\u6C99\u53D1"),
        vue.createElementVNode("span", null, "\u6B27\u5F0F"),
        vue.createElementVNode("span", null, "\u6C99\u53D1"),
        vue.createElementVNode("span", null, "\u6B27\u5F0F"),
        vue.createVNode(_component_u_icon, {
          name: "trash",
          color: "#000000",
          size: "28"
        })
      ]),
      vue.createElementVNode("view", { class: "commodity" }, [
        vue.createElementVNode("ul", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.commodity.list, (item) => {
            return vue.openBlock(), vue.createElementBlock("li", {
              key: item.id,
              style: { "list-style-type": "none" }
            }, [
              vue.createElementVNode("view", {
                class: "content",
                onClick: ($event) => $options.pageJump(item.data)
              }, [
                vue.createElementVNode("img", {
                  src: item.src,
                  alt: ""
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "content_text" }, [
                  vue.createCommentVNode(" 				<span>\n							{{item.kind}}\n							</span> "),
                  vue.createElementVNode("p", { class: "title" }, [
                    vue.createTextVNode(vue.toDisplayString(item.title) + " ", 1),
                    vue.createElementVNode("span", null, vue.toDisplayString(item.kind), 1)
                  ]),
                  vue.createElementVNode("p", { class: "appraise" }, vue.toDisplayString(item.appraise), 1),
                  vue.createElementVNode("p", { class: "price" }, vue.toDisplayString(item.price), 1),
                  vue.createElementVNode("p", { class: "sales" }, vue.toDisplayString(item.Sales), 1)
                ])
              ], 8, ["onClick"])
            ]);
          }), 128))
        ])
      ])
    ]);
  }
  var PagesClassifyPageClassifyPage = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-e1ef3790"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/pages/classify-page/classify-page.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        detailData: {},
        showNotify: false
      };
    },
    onLoad(e) {
      this.detailData = JSON.parse(e.data);
    },
    methods: {
      payNow() {
        this.$refs.uNotify.show({
          type: "success",
          message: "\u652F\u4ED8\u6210\u529F",
          duration: 1e3 * 2,
          safeAreaInsetTop: true
        });
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_notify = resolveEasycom(vue.resolveDynamicComponent("u-notify"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "payment-page-container" }, [
      vue.createVNode(_component_u_notify, { ref: "uNotify" }, null, 512),
      vue.createElementVNode("view", { class: "title" }, "\u7B49\u5F85\u4E70\u5BB6\u652F\u4ED8"),
      vue.createCommentVNode(" \u5730\u5740\u7BA1\u7406todo "),
      vue.createElementVNode("view", { class: "" }, " \u5730\u5740\u7BA1\u7406 "),
      vue.createCommentVNode(" \u5546\u54C1\u8BE6\u60C5 "),
      vue.createElementVNode("view", { class: "detail" }, [
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("view", { class: "info-cover" }, [
            vue.createElementVNode("img", {
              src: $data.detailData.detail_img[0],
              alt: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "info-text" }, [
            vue.createElementVNode("view", { class: "info-name" }, vue.toDisplayString($data.detailData.detail.name), 1),
            vue.createElementVNode("view", { class: "info-type" }, vue.toDisplayString($data.detailData.type), 1),
            vue.createElementVNode("view", { class: "info-bottom" }, [
              vue.createElementVNode("view", { class: "info-sale" }, vue.toDisplayString($data.detailData.detail.sale), 1),
              vue.createElementVNode("view", { class: "info-count" }, " x" + vue.toDisplayString($data.detailData.count), 1)
            ])
          ])
        ])
      ]),
      vue.createCommentVNode(" \u8BA2\u5355\u8BE6\u60C5 "),
      vue.createElementVNode("view", { class: "payment-info" }, [
        vue.createElementVNode("view", { class: "" }, [
          vue.createElementVNode("view", { class: "" }, " \u5546\u54C1\u603B\u4EF7 "),
          vue.createElementVNode("view", { class: "" }, vue.toDisplayString($data.detailData.detail.sale), 1)
        ]),
        vue.createElementVNode("view", { class: "" }, [
          vue.createElementVNode("view", { class: "" }, " \u8FD0\u8D39 "),
          vue.createElementVNode("view", { class: "" }, " \uFFE5" + vue.toDisplayString($data.detailData.detail.fare), 1)
        ]),
        vue.createElementVNode("view", { class: "" }, [
          vue.createElementVNode("view", { class: "" }, " \u8BA2\u5355\u7F16\u53F7 "),
          vue.createElementVNode("view", { class: "" }, vue.toDisplayString($data.detailData.detail.id), 1)
        ])
      ]),
      vue.createElementVNode("view", {
        class: "payment-now",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.payNow && $options.payNow(...args))
      }, " \u7EE7\u7EED\u652F\u4ED8 ")
    ]);
  }
  var PagesPaymentPagePaymentPage = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-5192b7c6"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/pages/payment-page/payment-page.vue"]]);
  var props$8 = {
    props: {
      safeAreaInsetTop: {
        type: Boolean,
        default: props$u.navbar.safeAreaInsetTop
      },
      placeholder: {
        type: Boolean,
        default: props$u.navbar.placeholder
      },
      fixed: {
        type: Boolean,
        default: props$u.navbar.fixed
      },
      border: {
        type: Boolean,
        default: props$u.navbar.border
      },
      leftIcon: {
        type: String,
        default: props$u.navbar.leftIcon
      },
      leftText: {
        type: String,
        default: props$u.navbar.leftText
      },
      rightText: {
        type: String,
        default: props$u.navbar.rightText
      },
      rightIcon: {
        type: String,
        default: props$u.navbar.rightIcon
      },
      title: {
        type: [String, Number],
        default: props$u.navbar.title
      },
      bgColor: {
        type: String,
        default: props$u.navbar.bgColor
      },
      titleWidth: {
        type: [String, Number],
        default: props$u.navbar.titleWidth
      },
      height: {
        type: [String, Number],
        default: props$u.navbar.height
      },
      leftIconSize: {
        type: [String, Number],
        default: props$u.navbar.leftIconSize
      },
      leftIconColor: {
        type: String,
        default: props$u.navbar.leftIconColor
      },
      autoBack: {
        type: Boolean,
        default: props$u.navbar.autoBack
      },
      titleStyle: {
        type: [String, Object],
        default: props$u.navbar.titleStyle
      }
    }
  };
  const _sfc_main$e = {
    name: "u-navbar",
    mixins: [mpMixin, mixin, props$8],
    data() {
      return {};
    },
    methods: {
      leftClick() {
        this.$emit("leftClick");
        if (this.autoBack) {
          uni.navigateBack();
        }
      },
      rightClick() {
        this.$emit("rightClick");
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$4);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-navbar" }, [
      _ctx.fixed && _ctx.placeholder ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "u-navbar__placeholder",
        style: vue.normalizeStyle({
          height: _ctx.$u.addUnit(_ctx.$u.getPx(_ctx.height) + _ctx.$u.sys().statusBarHeight, "px")
        })
      }, null, 4)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass([_ctx.fixed && "u-navbar--fixed"])
      }, [
        _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, {
          key: 0,
          bgColor: _ctx.bgColor
        }, null, 8, ["bgColor"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["u-navbar__content", [_ctx.border && "u-border-bottom"]]),
          style: vue.normalizeStyle({
            height: _ctx.$u.addUnit(_ctx.height),
            backgroundColor: _ctx.bgColor
          })
        }, [
          vue.createElementVNode("view", {
            class: "u-navbar__content__left",
            "hover-class": "u-navbar__content__left--hover",
            "hover-start-time": "150",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "left", {}, () => [
              _ctx.leftIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: _ctx.leftIcon,
                size: _ctx.leftIconSize,
                color: _ctx.leftIconColor
              }, null, 8, ["name", "size", "color"])) : vue.createCommentVNode("v-if", true),
              _ctx.leftText ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 1,
                style: vue.normalizeStyle({
                  color: _ctx.leftIconColor
                }),
                class: "u-navbar__content__left__text"
              }, vue.toDisplayString(_ctx.leftText), 5)) : vue.createCommentVNode("v-if", true)
            ], true)
          ]),
          vue.renderSlot(_ctx.$slots, "center", {}, () => [
            vue.createElementVNode("text", {
              class: "u-line-1 u-navbar__content__title",
              style: vue.normalizeStyle([{
                width: _ctx.$u.addUnit(_ctx.titleWidth)
              }, _ctx.$u.addStyle(_ctx.titleStyle)])
            }, vue.toDisplayString(_ctx.title), 5)
          ], true),
          _ctx.$slots.right || _ctx.rightIcon || _ctx.rightText ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "u-navbar__content__right",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "right", {}, () => [
              _ctx.rightIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                key: 0,
                name: _ctx.rightIcon,
                size: "20"
              }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
              _ctx.rightText ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 1,
                class: "u-navbar__content__right__text"
              }, vue.toDisplayString(_ctx.rightText), 1)) : vue.createCommentVNode("v-if", true)
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ], 6)
      ], 2)
    ]);
  }
  var __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-0e9610be"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-navbar/u-navbar.vue"]]);
  var props$7 = {
    props: {
      color: {
        type: String,
        default: props$u.link.color
      },
      fontSize: {
        type: [String, Number],
        default: props$u.link.fontSize
      },
      underLine: {
        type: Boolean,
        default: props$u.link.underLine
      },
      href: {
        type: String,
        default: props$u.link.href
      },
      mpTips: {
        type: String,
        default: props$u.link.mpTips
      },
      lineColor: {
        type: String,
        default: props$u.link.lineColor
      },
      text: {
        type: String,
        default: props$u.link.text
      }
    }
  };
  const _sfc_main$d = {
    name: "u-link",
    mixins: [mpMixin, mixin, props$7],
    computed: {
      linkStyle() {
        const style = {
          color: this.color,
          fontSize: uni.$u.addUnit(this.fontSize),
          lineHeight: uni.$u.addUnit(uni.$u.getPx(this.fontSize) + 2),
          textDecoration: this.underLine ? "underline" : "none"
        };
        return style;
      }
    },
    methods: {
      openLink() {
        plus.runtime.openURL(this.href);
        this.$emit("click");
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      class: "u-link",
      onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.openLink && $options.openLink(...args), ["stop"])),
      style: vue.normalizeStyle([$options.linkStyle, _ctx.$u.addStyle(_ctx.customStyle)])
    }, vue.toDisplayString(_ctx.text), 5);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-34129f21"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-link/u-link.vue"]]);
  var value = {
    computed: {
      value() {
        const {
          text: text2,
          mode,
          format,
          href
        } = this;
        if (mode === "price") {
          if (!/^\d+(\.\d+)?$/.test(text2)) {
            uni.$u.error("\u91D1\u989D\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u91D1\u989D\u683C\u5F0F");
          }
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          return uni.$u.priceFormat(text2, 2);
        }
        if (mode === "date") {
          !uni.$u.test.date(text2) && uni.$u.error("\u65E5\u671F\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u65E5\u671F\u6216\u65F6\u95F4\u6233\u683C\u5F0F");
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format) {
            return uni.$u.timeFormat(text2, format);
          }
          return uni.$u.timeFormat(text2, "yyyy-mm-dd");
        }
        if (mode === "phone") {
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format === "encrypt") {
            return `${text2.substr(0, 3)}****${text2.substr(7)}`;
          }
          return text2;
        }
        if (mode === "name") {
          !(typeof text2 === "string") && uni.$u.error("\u59D3\u540D\u6A21\u5F0F\u4E0B\uFF0Ctext\u53C2\u6570\u9700\u8981\u4E3A\u5B57\u7B26\u4E32\u683C\u5F0F");
          if (uni.$u.test.func(format)) {
            return format(text2);
          }
          if (format === "encrypt") {
            return this.formatName(text2);
          }
          return text2;
        }
        if (mode === "link") {
          !uni.$u.test.url(href) && uni.$u.error("\u8D85\u94FE\u63A5\u6A21\u5F0F\u4E0B\uFF0Chref\u53C2\u6570\u9700\u8981\u4E3AURL\u683C\u5F0F");
          return text2;
        }
        return text2;
      }
    },
    methods: {
      formatName(name) {
        let value2 = "";
        if (name.length === 2) {
          value2 = name.substr(0, 1) + "*";
        } else if (name.length > 2) {
          let char = "";
          for (let i = 0, len = name.length - 2; i < len; i++) {
            char += "*";
          }
          value2 = name.substr(0, 1) + char + name.substr(-1, 1);
        } else {
          value2 = name;
        }
        return value2;
      }
    }
  };
  var props$6 = {
    props: {
      type: {
        type: String,
        default: props$u.text.type
      },
      show: {
        type: Boolean,
        default: props$u.text.show
      },
      text: {
        type: [String, Number],
        default: props$u.text.text
      },
      prefixIcon: {
        type: String,
        default: props$u.text.prefixIcon
      },
      suffixIcon: {
        type: String,
        default: props$u.text.suffixIcon
      },
      mode: {
        type: String,
        default: props$u.text.mode
      },
      href: {
        type: String,
        default: props$u.text.href
      },
      format: {
        type: [String, Function],
        default: props$u.text.format
      },
      call: {
        type: Boolean,
        default: props$u.text.call
      },
      openType: {
        type: String,
        default: props$u.text.openType
      },
      bold: {
        type: Boolean,
        default: props$u.text.bold
      },
      block: {
        type: Boolean,
        default: props$u.text.block
      },
      lines: {
        type: [String, Number],
        default: props$u.text.lines
      },
      color: {
        type: String,
        default: props$u.text.color
      },
      size: {
        type: [String, Number],
        default: props$u.text.size
      },
      iconStyle: {
        type: [Object, String],
        default: props$u.text.iconStyle
      },
      decoration: {
        tepe: String,
        default: props$u.text.decoration
      },
      margin: {
        type: [Object, String, Number],
        default: props$u.text.margin
      },
      lineHeight: {
        type: [String, Number],
        default: props$u.text.lineHeight
      },
      align: {
        type: String,
        default: props$u.text.align
      },
      wordWrap: {
        type: String,
        default: props$u.text.wordWrap
      }
    }
  };
  const _sfc_main$c = {
    name: "u--text",
    mixins: [mpMixin, mixin, value, props$6],
    emits: ["click"],
    computed: {
      valueStyle() {
        const style = {
          textDecoration: this.decoration,
          fontWeight: this.bold ? "bold" : "normal",
          wordWrap: this.wordWrap,
          fontSize: uni.$u.addUnit(this.size)
        };
        !this.type && (style.color = this.color);
        this.isNvue && this.lines && (style.lines = this.lines);
        this.lineHeight && (style.lineHeight = uni.$u.addUnit(this.lineHeight));
        !this.isNvue && this.block && (style.display = "block");
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      isNvue() {
        let nvue = false;
        return nvue;
      },
      isMp() {
        let mp = false;
        return mp;
      }
    },
    data() {
      return {};
    },
    methods: {
      clickHandler() {
        if (this.call && this.mode === "phone") {
          uni.makePhoneCall({
            phoneNumber: this.text
          });
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_link = resolveEasycom(vue.resolveDynamicComponent("u-link"), __easycom_1$2);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["u-text", []]),
      style: vue.normalizeStyle({
        margin: _ctx.margin,
        justifyContent: _ctx.align === "left" ? "flex-start" : _ctx.align === "center" ? "center" : "flex-end"
      }),
      onClick: _cache[6] || (_cache[6] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      _ctx.mode === "price" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: vue.normalizeClass(["u-text__price", _ctx.type && `u-text__value--${_ctx.type}`]),
        style: vue.normalizeStyle([$options.valueStyle])
      }, "\uFFE5", 6)) : vue.createCommentVNode("v-if", true),
      _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "u-text__prefix-icon"
      }, [
        vue.createVNode(_component_u_icon, {
          name: _ctx.prefixIcon,
          customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
        }, null, 8, ["name", "customStyle"])
      ])) : vue.createCommentVNode("v-if", true),
      _ctx.mode === "link" ? (vue.openBlock(), vue.createBlock(_component_u_link, {
        key: 2,
        text: _ctx.value,
        href: _ctx.href,
        underLine: ""
      }, null, 8, ["text", "href"])) : _ctx.openType && $options.isMp ? (vue.openBlock(), vue.createElementBlock("button", {
        key: 3,
        class: "u-reset-button u-text__value",
        style: vue.normalizeStyle([$options.valueStyle]),
        "data-index": _ctx.index,
        openType: _ctx.openType,
        onGetuserinfo: _cache[0] || (_cache[0] = (...args) => _ctx.onGetUserInfo && _ctx.onGetUserInfo(...args)),
        onContact: _cache[1] || (_cache[1] = (...args) => _ctx.onContact && _ctx.onContact(...args)),
        onGetphonenumber: _cache[2] || (_cache[2] = (...args) => _ctx.onGetPhoneNumber && _ctx.onGetPhoneNumber(...args)),
        onError: _cache[3] || (_cache[3] = (...args) => _ctx.onError && _ctx.onError(...args)),
        onLaunchapp: _cache[4] || (_cache[4] = (...args) => _ctx.onLaunchApp && _ctx.onLaunchApp(...args)),
        onOpensetting: _cache[5] || (_cache[5] = (...args) => _ctx.onOpenSetting && _ctx.onOpenSetting(...args)),
        lang: _ctx.lang,
        "session-from": _ctx.sessionFrom,
        "send-message-title": _ctx.sendMessageTitle,
        "send-message-path": _ctx.sendMessagePath,
        "send-message-img": _ctx.sendMessageImg,
        "show-message-card": _ctx.showMessageCard,
        "app-parameter": _ctx.appParameter
      }, vue.toDisplayString(_ctx.value), 45, ["data-index", "openType", "lang", "session-from", "send-message-title", "send-message-path", "send-message-img", "show-message-card", "app-parameter"])) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 4,
        class: vue.normalizeClass(["u-text__value", [
          _ctx.type && `u-text__value--${_ctx.type}`,
          _ctx.lines && `u-line-${_ctx.lines}`
        ]]),
        style: vue.normalizeStyle([$options.valueStyle])
      }, vue.toDisplayString(_ctx.value), 7)),
      _ctx.suffixIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 5,
        class: "u-text__suffix-icon"
      }, [
        vue.createVNode(_component_u_icon, {
          name: _ctx.suffixIcon,
          customStyle: _ctx.$u.addStyle(_ctx.iconStyle)
        }, null, 8, ["name", "customStyle"])
      ])) : vue.createCommentVNode("v-if", true)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var uvText = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-e258c07e"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-text/u-text.vue"]]);
  const _sfc_main$b = {
    name: "u--text",
    mixins: [mpMixin, mixin, props$6],
    components: {
      uvText
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uvText = vue.resolveComponent("uvText");
    return vue.openBlock(), vue.createBlock(_component_uvText, {
      type: _ctx.type,
      show: _ctx.show,
      text: _ctx.text,
      prefixIcon: _ctx.prefixIcon,
      suffixIcon: _ctx.suffixIcon,
      mode: _ctx.mode,
      href: _ctx.href,
      format: _ctx.format,
      call: _ctx.call,
      openType: _ctx.openType,
      bold: _ctx.bold,
      block: _ctx.block,
      lines: _ctx.lines,
      color: _ctx.color,
      decoration: _ctx.decoration,
      size: _ctx.size,
      iconStyle: _ctx.iconStyle,
      margin: _ctx.margin,
      lineHeight: _ctx.lineHeight,
      align: _ctx.align,
      wordWrap: _ctx.wordWrap,
      customStyle: _ctx.customStyle
    }, null, 8, ["type", "show", "text", "prefixIcon", "suffixIcon", "mode", "href", "format", "call", "openType", "bold", "block", "lines", "color", "decoration", "size", "iconStyle", "margin", "lineHeight", "align", "wordWrap", "customStyle"]);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u--text/u--text.vue"]]);
  var props$5 = {
    props: {
      src: {
        type: String,
        default: props$u.avatar.src
      },
      shape: {
        type: String,
        default: props$u.avatar.shape
      },
      size: {
        type: [String, Number],
        default: props$u.avatar.size
      },
      mode: {
        type: String,
        default: props$u.avatar.mode
      },
      text: {
        type: String,
        default: props$u.avatar.text
      },
      bgColor: {
        type: String,
        default: props$u.avatar.bgColor
      },
      color: {
        type: String,
        default: props$u.avatar.color
      },
      fontSize: {
        type: [String, Number],
        default: props$u.avatar.fontSize
      },
      icon: {
        type: String,
        default: props$u.avatar.icon
      },
      mpAvatar: {
        type: Boolean,
        default: props$u.avatar.mpAvatar
      },
      randomBgColor: {
        type: Boolean,
        default: props$u.avatar.randomBgColor
      },
      defaultUrl: {
        type: String,
        default: props$u.avatar.defaultUrl
      },
      colorIndex: {
        type: [String, Number],
        validator(n) {
          return uni.$u.test.range(n, [0, 19]) || n === "";
        },
        default: props$u.avatar.colorIndex
      },
      name: {
        type: String,
        default: props$u.avatar.name
      }
    }
  };
  const base64Avatar = "data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjREMEQwRkY0RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjREMEQwRkY1RjgwNDExRUE5OTY2RDgxODY3NkJFODMxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEQwRDBGRjJGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NEQwRDBGRjNGODA0MTFFQTk5NjZEODE4Njc2QkU4MzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYG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";
  const _sfc_main$a = {
    name: "u-avatar",
    mixins: [mpMixin, mixin, props$5],
    data() {
      return {
        colors: [
          "#ffb34b",
          "#f2bba9",
          "#f7a196",
          "#f18080",
          "#88a867",
          "#bfbf39",
          "#89c152",
          "#94d554",
          "#f19ec2",
          "#afaae4",
          "#e1b0df",
          "#c38cc1",
          "#72dcdc",
          "#9acdcb",
          "#77b1cc",
          "#448aca",
          "#86cefa",
          "#98d1ee",
          "#73d1f1",
          "#80a7dc"
        ],
        avatarUrl: this.src,
        allowMp: false
      };
    },
    watch: {
      src: {
        immediate: true,
        handler(newVal) {
          this.avatarUrl = newVal;
          if (!newVal) {
            this.errorHandler();
          }
        }
      }
    },
    computed: {
      imageStyle() {
        const style = {};
        return style;
      }
    },
    created() {
      this.init();
    },
    methods: {
      init() {
      },
      isImg() {
        return this.src.indexOf("/") !== -1;
      },
      errorHandler() {
        this.avatarUrl = this.defaultUrl || base64Avatar;
      },
      clickHandler() {
        this.$emit("click", this.name);
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u__text = resolveEasycom(vue.resolveDynamicComponent("u--text"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-avatar", [`u-avatar--${_ctx.shape}`]]),
      style: vue.normalizeStyle([{
        backgroundColor: _ctx.text || _ctx.icon ? _ctx.randomBgColor ? $data.colors[_ctx.colorIndex !== "" ? _ctx.colorIndex : _ctx.$u.random(0, 19)] : _ctx.bgColor : "transparent",
        width: _ctx.$u.addUnit(_ctx.size),
        height: _ctx.$u.addUnit(_ctx.size)
      }, _ctx.$u.addStyle(_ctx.customStyle)]),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        _ctx.mpAvatar && $data.allowMp ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [], 64)) : _ctx.icon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
          key: 1,
          name: _ctx.icon,
          size: _ctx.fontSize,
          color: _ctx.color
        }, null, 8, ["name", "size", "color"])) : _ctx.text ? (vue.openBlock(), vue.createBlock(_component_u__text, {
          key: 2,
          text: _ctx.text,
          size: _ctx.fontSize,
          color: _ctx.color,
          align: "center",
          customStyle: "justify-content: center"
        }, null, 8, ["text", "size", "color"])) : (vue.openBlock(), vue.createElementBlock("image", {
          key: 3,
          class: vue.normalizeClass(["u-avatar__image", [`u-avatar__image--${_ctx.shape}`]]),
          src: $data.avatarUrl || _ctx.defaultUrl,
          mode: _ctx.mode,
          onError: _cache[0] || (_cache[0] = (...args) => $options.errorHandler && $options.errorHandler(...args)),
          style: vue.normalizeStyle([{
            width: _ctx.$u.addUnit(_ctx.size),
            height: _ctx.$u.addUnit(_ctx.size)
          }])
        }, null, 46, ["src", "mode"]))
      ], true)
    ], 6);
  }
  var __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-4c1c6c7e"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-avatar/u-avatar.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        addressList: [
          {
            name: "\u674E\u94F6\u6CB3",
            phone: "13325637891",
            address: "\u91CD\u5E86\u5DF4\u5357\u533A\u5357\u6CC9"
          },
          {
            name: "\u674E\u94F6\u6CB3",
            phone: "13325637891",
            address: "\u91CD\u5E86\u5DF4\u5357\u533A\u5357\u6CC9\u90FD\u662F\u7B26\u5408\u56FD\u5BB6\u53F8\u6CD5\u548C\u6982\u62EC\u6765\u8BF4\u51E0\u4E4E\u8FD8\u662F\u5C3D\u5FEB\u7ED9\u56DE\u5BB6\u662F\u9760\u8FD1\u5BF9\u65B9\u7ED9\u91D1\u5361\u662F"
          }
        ]
      };
    },
    methods: {
      jump(item) {
        formatAppLog("log", "at pages/address-page/address-page.vue:63", item);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_1$3);
    const _component_u_avatar = resolveEasycom(vue.resolveDynamicComponent("u-avatar"), __easycom_2$1);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_u_navbar, {
        title: "\u6211\u7684\u6536\u8D27\u5730\u5740",
        height: "60",
        placeholder: true,
        autoBack: true,
        rightText: "\u8BBE\u7F6E"
      }),
      vue.createElementVNode("view", { class: "addressList" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.addressList, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "addressItem",
            key: index2
          }, [
            vue.createElementVNode("view", {
              class: "textContent",
              onClick: ($event) => $options.jump(item)
            }, [
              vue.createVNode(_component_u_avatar, {
                text: item.name[0],
                fontSize: "18",
                "bg-color": "#ffe3d8",
                color: "#eb661f",
                style: { "margin-right": "20rpx" }
              }, null, 8, ["text"]),
              vue.createElementVNode("view", null, [
                vue.createElementVNode("view", { class: "infoText" }, [
                  vue.createElementVNode("span", { style: { "font-weight": "600", "margin-right": "20rpx" } }, vue.toDisplayString(item.name), 1),
                  vue.createElementVNode("span", { style: { "font-size": "28rpx", "color": "#959595" } }, vue.toDisplayString(item.phone), 1)
                ]),
                vue.createElementVNode("view", { style: { "font-size": "30rpx" } }, vue.toDisplayString(item.address), 1)
              ])
            ], 8, ["onClick"]),
            vue.createElementVNode("view", { class: "editAddress" }, [
              vue.createVNode(_component_u_icon, {
                name: "edit-pen",
                size: "50rpx"
              })
            ])
          ]);
        }), 128))
      ]),
      vue.createElementVNode("view", { class: "addAddress" }, [
        vue.createVNode(_component_u_icon, {
          name: "plus",
          color: "#fff"
        }),
        vue.createElementVNode("text", null, "\u70B9\u51FB\u6DFB\u52A0\u65B0\u7684\u5730\u5740")
      ])
    ]);
  }
  var PagesAddressPageAddressPage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-c95085f4"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/pages/address-page/address-page.vue"]]);
  var props$4 = {
    props: {
      offsetTop: {
        type: [String, Number],
        default: props$u.sticky.offsetTop
      },
      customNavHeight: {
        type: [String, Number],
        default: props$u.sticky.customNavHeight
      },
      disabled: {
        type: Boolean,
        default: props$u.sticky.disabled
      },
      bgColor: {
        type: String,
        default: props$u.sticky.bgColor
      },
      zIndex: {
        type: [String, Number],
        default: props$u.sticky.zIndex
      },
      index: {
        type: [String, Number],
        default: props$u.sticky.index
      }
    }
  };
  const _sfc_main$8 = {
    name: "u-sticky",
    mixins: [mpMixin, mixin, props$4],
    data() {
      return {
        cssSticky: false,
        stickyTop: 0,
        elId: uni.$u.guid(),
        left: 0,
        width: "auto",
        height: "auto",
        fixed: false
      };
    },
    computed: {
      style() {
        const style = {};
        if (!this.disabled) {
          if (this.cssSticky) {
            style.position = "sticky";
            style.zIndex = this.uZindex;
            style.top = uni.$u.addUnit(this.stickyTop);
          } else {
            style.height = this.fixed ? this.height + "px" : "auto";
          }
        } else {
          style.position = "static";
        }
        style.backgroundColor = this.bgColor;
        return uni.$u.deepMerge(uni.$u.addStyle(this.customStyle), style);
      },
      stickyContent() {
        const style = {};
        if (!this.cssSticky) {
          style.position = this.fixed ? "fixed" : "static";
          style.top = this.stickyTop + "px";
          style.left = this.left + "px";
          style.width = this.width == "auto" ? "auto" : this.width + "px";
          style.zIndex = this.uZindex;
        }
        return style;
      },
      uZindex() {
        return this.zIndex ? this.zIndex : uni.$u.zIndex.sticky;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getStickyTop();
        this.checkSupportCssSticky();
        if (!this.cssSticky) {
          !this.disabled && this.initObserveContent();
        }
      },
      initObserveContent() {
        this.$uGetRect("#" + this.elId).then((res) => {
          this.height = res.height;
          this.left = res.left;
          this.width = res.width;
          this.$nextTick(() => {
            this.observeContent();
          });
        });
      },
      observeContent() {
        this.disconnectObserver("contentObserver");
        const contentObserver = uni.createIntersectionObserver({
          thresholds: [0.95, 0.98, 1]
        });
        contentObserver.relativeToViewport({
          top: -this.stickyTop
        });
        contentObserver.observe(`#${this.elId}`, (res) => {
          this.setFixed(res.boundingClientRect.top);
        });
        this.contentObserver = contentObserver;
      },
      setFixed(top) {
        const fixed = top <= this.stickyTop;
        this.fixed = fixed;
      },
      disconnectObserver(observerName) {
        const observer = this[observerName];
        observer && observer.disconnect();
      },
      getStickyTop() {
        this.stickyTop = uni.$u.getPx(this.offsetTop) + uni.$u.getPx(this.customNavHeight);
      },
      async checkSupportCssSticky() {
        if (uni.$u.os() === "android" && Number(uni.$u.sys().system) > 8) {
          this.cssSticky = true;
        }
        this.cssSticky = await this.checkComputedStyle();
        if (uni.$u.os() === "ios") {
          this.cssSticky = true;
        }
      },
      checkComputedStyle() {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this).select(".u-sticky").fields({
            computedStyle: ["position"]
          }).exec((e) => {
            resolve(e[0].position === "sticky");
          });
        });
      },
      checkCssStickyForH5() {
      }
    },
    beforeDestroy() {
      this.disconnectObserver("contentObserver");
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "u-sticky",
      id: $data.elId,
      style: vue.normalizeStyle([$options.style])
    }, [
      vue.createElementVNode("view", {
        style: vue.normalizeStyle([$options.stickyContent]),
        class: "u-sticky__content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)
    ], 12, ["id"]);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-5a43287e"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-sticky/u-sticky.vue"]]);
  var props$3 = {
    props: {}
  };
  const _sfc_main$7 = {
    name: "u-safe-bottom",
    mixins: [mpMixin, mixin, props$3],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-safe-bottom", [!$data.isNvue && "u-safe-area-inset-bottom"]]),
      style: vue.normalizeStyle([$options.style])
    }, null, 6);
  }
  var __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-4ef03a09"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-safe-bottom/u-safe-bottom.vue"]]);
  var props$2 = {
    props: {
      show: {
        type: Boolean,
        default: props$u.popup.show
      },
      overlay: {
        type: Boolean,
        default: props$u.popup.overlay
      },
      mode: {
        type: String,
        default: props$u.popup.mode
      },
      duration: {
        type: [String, Number],
        default: props$u.popup.duration
      },
      closeable: {
        type: Boolean,
        default: props$u.popup.closeable
      },
      overlayStyle: {
        type: [Object, String],
        default: props$u.popup.overlayStyle
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: props$u.popup.closeOnClickOverlay
      },
      zIndex: {
        type: [String, Number],
        default: props$u.popup.zIndex
      },
      safeAreaInsetBottom: {
        type: Boolean,
        default: props$u.popup.safeAreaInsetBottom
      },
      safeAreaInsetTop: {
        type: Boolean,
        default: props$u.popup.safeAreaInsetTop
      },
      closeIconPos: {
        type: String,
        default: props$u.popup.closeIconPos
      },
      round: {
        type: [Boolean, String, Number],
        default: props$u.popup.round
      },
      zoom: {
        type: Boolean,
        default: props$u.popup.zoom
      },
      bgColor: {
        type: String,
        default: props$u.popup.bgColor
      },
      overlayOpacity: {
        type: [Number, String],
        default: props$u.popup.overlayOpacity
      }
    }
  };
  const _sfc_main$6 = {
    name: "u-popup",
    mixins: [mpMixin, mixin, props$2],
    data() {
      return {
        overlayDuration: this.duration + 50
      };
    },
    watch: {
      show(newValue, oldValue) {
      }
    },
    computed: {
      transitionStyle() {
        const style = {
          zIndex: this.zIndex,
          position: "fixed",
          display: "flex"
        };
        style[this.mode] = 0;
        if (this.mode === "left") {
          return uni.$u.deepMerge(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "right") {
          return uni.$u.deepMerge(style, {
            bottom: 0,
            top: 0
          });
        } else if (this.mode === "top") {
          return uni.$u.deepMerge(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "bottom") {
          return uni.$u.deepMerge(style, {
            left: 0,
            right: 0
          });
        } else if (this.mode === "center") {
          return uni.$u.deepMerge(style, {
            alignItems: "center",
            "justify-content": "center",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          });
        }
      },
      contentStyle() {
        const style = {};
        uni.$u.sys();
        if (this.mode !== "center") {
          style.flex = 1;
        }
        if (this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if (this.round) {
          const value2 = uni.$u.addUnit(this.round);
          if (this.mode === "top") {
            style.borderBottomLeftRadius = value2;
            style.borderBottomRightRadius = value2;
          } else if (this.mode === "bottom") {
            style.borderTopLeftRadius = value2;
            style.borderTopRightRadius = value2;
          } else if (this.mode === "center") {
            style.borderRadius = value2;
          }
        }
        return uni.$u.deepMerge(style, uni.$u.addStyle(this.customStyle));
      },
      position() {
        if (this.mode === "center") {
          return this.zoom ? "fade-zoom" : "fade";
        }
        if (this.mode === "left") {
          return "slide-left";
        }
        if (this.mode === "right") {
          return "slide-right";
        }
        if (this.mode === "bottom") {
          return "slide-up";
        }
        if (this.mode === "top") {
          return "slide-down";
        }
      }
    },
    methods: {
      overlayClick() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      },
      close(e) {
        this.$emit("close");
      },
      afterEnter() {
        this.$emit("open");
      },
      clickHandler() {
        if (this.mode === "center") {
          this.overlayClick();
        }
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_overlay = resolveEasycom(vue.resolveDynamicComponent("u-overlay"), __easycom_0$5);
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_1$4);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("u-safe-bottom"), __easycom_3$1);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$a);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-popup" }, [
      _ctx.overlay ? (vue.openBlock(), vue.createBlock(_component_u_overlay, {
        key: 0,
        show: _ctx.show,
        onClick: $options.overlayClick,
        duration: $data.overlayDuration,
        customStyle: _ctx.overlayStyle,
        opacity: _ctx.overlayOpacity
      }, null, 8, ["show", "onClick", "duration", "customStyle", "opacity"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_u_transition, {
        show: _ctx.show,
        customStyle: $options.transitionStyle,
        mode: $options.position,
        duration: _ctx.duration,
        onAfterEnter: $options.afterEnter,
        onClick: $options.clickHandler
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "u-popup__content",
            style: vue.normalizeStyle([$options.contentStyle]),
            onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop"]))
          }, [
            _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
            _ctx.closeable ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
              class: vue.normalizeClass(["u-popup__content__close", ["u-popup__content__close--" + _ctx.closeIconPos]]),
              "hover-class": "u-popup__content__close--hover",
              "hover-stay-time": "150"
            }, [
              vue.createVNode(_component_u_icon, {
                name: "close",
                color: "#909399",
                size: "18",
                bold: ""
              })
            ], 2)) : vue.createCommentVNode("v-if", true),
            _ctx.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_u_safe_bottom, { key: 2 })) : vue.createCommentVNode("v-if", true)
          ], 4)
        ]),
        _: 3
      }, 8, ["show", "customStyle", "mode", "duration", "onAfterEnter", "onClick"])
    ]);
  }
  var __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-8b82f2ea"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-popup/u-popup.vue"]]);
  var props$1 = {
    props: {
      show: {
        type: Boolean,
        default: props$u.modal.show
      },
      title: {
        type: [String],
        default: props$u.modal.title
      },
      content: {
        type: String,
        default: props$u.modal.content
      },
      confirmText: {
        type: String,
        default: props$u.modal.confirmText
      },
      cancelText: {
        type: String,
        default: props$u.modal.cancelText
      },
      showConfirmButton: {
        type: Boolean,
        default: props$u.modal.showConfirmButton
      },
      showCancelButton: {
        type: Boolean,
        default: props$u.modal.showCancelButton
      },
      confirmColor: {
        type: String,
        default: props$u.modal.confirmColor
      },
      cancelColor: {
        type: String,
        default: props$u.modal.cancelColor
      },
      buttonReverse: {
        type: Boolean,
        default: props$u.modal.buttonReverse
      },
      zoom: {
        type: Boolean,
        default: props$u.modal.zoom
      },
      asyncClose: {
        type: Boolean,
        default: props$u.modal.asyncClose
      },
      closeOnClickOverlay: {
        type: Boolean,
        default: props$u.modal.closeOnClickOverlay
      },
      negativeTop: {
        type: [String, Number],
        default: props$u.modal.negativeTop
      },
      width: {
        type: [String, Number],
        default: props$u.modal.width
      },
      confirmButtonShape: {
        type: String,
        default: props$u.modal.confirmButtonShape
      }
    }
  };
  const _sfc_main$5 = {
    name: "u-modal",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {
        loading: false
      };
    },
    watch: {
      show(n) {
        if (n && this.loading)
          this.loading = false;
      }
    },
    methods: {
      confirmHandler() {
        if (this.asyncClose) {
          this.loading = true;
        }
        this.$emit("confirm");
      },
      cancelHandler() {
        this.$emit("cancel");
      },
      clickHandler() {
        if (this.closeOnClickOverlay) {
          this.$emit("close");
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_line = resolveEasycom(vue.resolveDynamicComponent("u-line"), __easycom_0);
    const _component_u_loading_icon = resolveEasycom(vue.resolveDynamicComponent("u-loading-icon"), __easycom_1$c);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_5);
    return vue.openBlock(), vue.createBlock(_component_u_popup, {
      mode: "center",
      zoom: _ctx.zoom,
      show: _ctx.show,
      customStyle: {
        borderRadius: "6px",
        overflow: "hidden",
        marginTop: `-${_ctx.$u.addUnit(_ctx.negativeTop)}`
      },
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      safeAreaInsetBottom: false,
      duration: 400,
      onClick: $options.clickHandler
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", {
          class: "u-modal",
          style: vue.normalizeStyle({
            width: _ctx.$u.addUnit(_ctx.width)
          })
        }, [
          _ctx.title ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "u-modal__title"
          }, vue.toDisplayString(_ctx.title), 1)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: "u-modal__content",
            style: vue.normalizeStyle({
              paddingTop: `${_ctx.title ? 12 : 25}px`
            })
          }, [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode("text", { class: "u-modal__content__text" }, vue.toDisplayString(_ctx.content), 1)
            ], true)
          ], 4),
          _ctx.$slots.confirmButton ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "u-modal__button-group--confirm-button"
          }, [
            vue.renderSlot(_ctx.$slots, "confirmButton", {}, void 0, true)
          ])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
            vue.createVNode(_component_u_line),
            vue.createElementVNode("view", {
              class: "u-modal__button-group",
              style: vue.normalizeStyle({
                flexDirection: _ctx.buttonReverse ? "row-reverse" : "row"
              })
            }, [
              _ctx.showCancelButton ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: vue.normalizeClass(["u-modal__button-group__wrapper u-modal__button-group__wrapper--cancel", [_ctx.showCancelButton && !_ctx.showConfirmButton && "u-modal__button-group__wrapper--only-cancel"]]),
                "hover-stay-time": 150,
                "hover-class": "u-modal__button-group__wrapper--hover",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.cancelHandler && $options.cancelHandler(...args))
              }, [
                vue.createElementVNode("text", {
                  class: "u-modal__button-group__wrapper__text",
                  style: vue.normalizeStyle({
                    color: _ctx.cancelColor
                  })
                }, vue.toDisplayString(_ctx.cancelText), 5)
              ], 2)) : vue.createCommentVNode("v-if", true),
              _ctx.showConfirmButton && _ctx.showCancelButton ? (vue.openBlock(), vue.createBlock(_component_u_line, {
                key: 1,
                direction: "column"
              })) : vue.createCommentVNode("v-if", true),
              _ctx.showConfirmButton ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: vue.normalizeClass(["u-modal__button-group__wrapper u-modal__button-group__wrapper--confirm", [!_ctx.showCancelButton && _ctx.showConfirmButton && "u-modal__button-group__wrapper--only-confirm"]]),
                "hover-stay-time": 150,
                "hover-class": "u-modal__button-group__wrapper--hover",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.confirmHandler && $options.confirmHandler(...args))
              }, [
                $data.loading ? (vue.openBlock(), vue.createBlock(_component_u_loading_icon, { key: 0 })) : (vue.openBlock(), vue.createElementBlock("text", {
                  key: 1,
                  class: "u-modal__button-group__wrapper__text",
                  style: vue.normalizeStyle({
                    color: _ctx.confirmColor
                  })
                }, vue.toDisplayString(_ctx.confirmText), 5))
              ], 2)) : vue.createCommentVNode("v-if", true)
            ], 4)
          ], 64))
        ], 4)
      ]),
      _: 3
    }, 8, ["zoom", "show", "customStyle", "closeOnClickOverlay", "onClick"]);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-4eb28ee6"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-modal/u-modal.vue"]]);
  var props = {
    props: {
      type: {
        type: String,
        default: props$u.tag.type
      },
      disabled: {
        type: [Boolean, String],
        default: props$u.tag.disabled
      },
      size: {
        type: String,
        default: props$u.tag.size
      },
      shape: {
        type: String,
        default: props$u.tag.shape
      },
      text: {
        type: [String, Number],
        default: props$u.tag.text
      },
      bgColor: {
        type: String,
        default: props$u.tag.bgColor
      },
      color: {
        type: String,
        default: props$u.tag.color
      },
      borderColor: {
        type: String,
        default: props$u.tag.borderColor
      },
      closeColor: {
        type: String,
        default: props$u.tag.closeColor
      },
      name: {
        type: [String, Number],
        default: props$u.tag.name
      },
      plainFill: {
        type: Boolean,
        default: props$u.tag.plainFill
      },
      plain: {
        type: Boolean,
        default: props$u.tag.plain
      },
      closable: {
        type: Boolean,
        default: props$u.tag.closable
      },
      show: {
        type: Boolean,
        default: props$u.tag.show
      },
      icon: {
        type: String,
        default: props$u.tag.icon
      }
    }
  };
  const _sfc_main$4 = {
    name: "u-tag",
    mixins: [mpMixin, mixin, props],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        if (this.bgColor) {
          style.backgroundColor = this.bgColor;
        }
        if (this.color) {
          style.color = this.color;
        }
        if (this.borderColor) {
          style.borderColor = this.borderColor;
        }
        return style;
      },
      textColor() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        return style;
      },
      imgStyle() {
        const width = this.size === "large" ? "17px" : this.size === "medium" ? "15px" : "13px";
        return {
          width,
          height: width
        };
      },
      closeSize() {
        const size = this.size === "large" ? 15 : this.size === "medium" ? 13 : 12;
        return size;
      },
      iconSize() {
        const size = this.size === "large" ? 21 : this.size === "medium" ? 19 : 16;
        return size;
      },
      elIconColor() {
        return this.iconColor ? this.iconColor : this.plain ? this.type : "#ffffff";
      }
    },
    methods: {
      closeHandler() {
        this.$emit("close", this.name);
      },
      clickHandler() {
        this.$emit("click", this.name);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$a);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      mode: "fade",
      show: _ctx.show,
      style: { "display": "inline-flex" }
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "u-tag-wrapper" }, [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["u-tag", [`u-tag--${_ctx.shape}`, !_ctx.plain && `u-tag--${_ctx.type}`, _ctx.plain && `u-tag--${_ctx.type}--plain`, `u-tag--${_ctx.size}`, _ctx.plain && _ctx.plainFill && `u-tag--${_ctx.type}--plain--fill`]]),
            onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.clickHandler && $options.clickHandler(...args), ["stop"])),
            style: vue.normalizeStyle([{
              marginRight: _ctx.closable ? "10px" : 0,
              marginTop: _ctx.closable ? "10px" : 0
            }, $options.style])
          }, [
            vue.renderSlot(_ctx.$slots, "icon", {}, () => [
              _ctx.icon ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "u-tag__icon"
              }, [
                _ctx.$u.test.image(_ctx.icon) ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  src: _ctx.icon,
                  style: vue.normalizeStyle([$options.imgStyle])
                }, null, 12, ["src"])) : (vue.openBlock(), vue.createBlock(_component_u_icon, {
                  key: 1,
                  color: $options.elIconColor,
                  name: _ctx.icon,
                  size: $options.iconSize
                }, null, 8, ["color", "name", "size"]))
              ])) : vue.createCommentVNode("v-if", true)
            ], true),
            vue.createElementVNode("text", {
              class: vue.normalizeClass(["u-tag__text", [`u-tag__text--${_ctx.type}`, _ctx.plain && `u-tag__text--${_ctx.type}--plain`, `u-tag__text--${_ctx.size}`]]),
              style: vue.normalizeStyle([$options.textColor])
            }, vue.toDisplayString(_ctx.text), 7)
          ], 6),
          _ctx.closable ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(["u-tag__close", [`u-tag__close--${_ctx.size}`]]),
            onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.closeHandler && $options.closeHandler(...args), ["stop"])),
            style: vue.normalizeStyle({ backgroundColor: _ctx.closeColor })
          }, [
            vue.createVNode(_component_u_icon, {
              name: "close",
              size: $options.closeSize,
              color: "#ffffff"
            }, null, 8, ["size"])
          ], 6)) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      _: 3
    }, 8, ["show"]);
  }
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-7d7e2bb2"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/node_modules/uview-plus/components/u-tag/u-tag.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {
        searchHistory: [],
        modelShow: false,
        content: "\u786E\u5B9A\u5220\u9664\u5168\u90E8\u5386\u53F2\u8BB0\u5F55",
        search: "",
        historyList: []
      };
    },
    onLoad() {
      $http.request({
        url: "/search/history"
      }).then((res) => {
        formatAppLog("log", "at subpages/searchPage/searchPage.vue:118", res.data);
        this.searchHistory = res.data;
      }).catch(() => {
        uni.showToast({
          title: "\u8BF7\u6C42\u5931\u8D25\uFF01",
          icon: "none"
        });
      });
    },
    computed: {
      show() {
        return this.historyList.length;
      }
    },
    methods: {
      getList() {
        formatAppLog("log", "at subpages/searchPage/searchPage.vue:134", "\u6CA1\u6709\u66F4\u591A\u4E86");
      },
      pageJump(value2) {
        uni.switchTab({
          url: value2
        });
      },
      pageJump1(value2) {
        uni.redirectTo({
          url: value2
        });
      },
      addHistory() {
        if (this.search !== "") {
          this.historyList.unshift(this.search);
        }
        formatAppLog("log", "at subpages/searchPage/searchPage.vue:156", this.search);
        formatAppLog("log", "at subpages/searchPage/searchPage.vue:157", this.historyList);
      },
      closeModel() {
        this.modelShow = !this.modelShow;
        this.historyList = [];
      },
      cancel() {
        this.modelShow = !this.modelShow;
      },
      pageJupm(val) {
        const searchData = JSON.stringify(val);
        uni.navigateTo({
          url: `?Data=${searchData}`
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_u_search = resolveEasycom(vue.resolveDynamicComponent("u-search"), __easycom_1$6);
    const _component_u_sticky = resolveEasycom(vue.resolveDynamicComponent("u-sticky"), __easycom_2);
    const _component_u_modal = resolveEasycom(vue.resolveDynamicComponent("u-modal"), __easycom_3);
    const _component_u_tag = resolveEasycom(vue.resolveDynamicComponent("u-tag"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { id: "search" }, [
      vue.createCommentVNode(" \u641C\u7D22\u680F\u76EE "),
      vue.createVNode(_component_u_sticky, null, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "search" }, [
            vue.createVNode(_component_u_icon, {
              name: "arrow-left",
              color: "#333",
              size: "28",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.pageJump("../../pages/index-page/index-page"))
            }),
            vue.createElementVNode("view", { class: "u-search" }, [
              vue.createVNode(_component_u_search, {
                modelValue: $data.search,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.search = $event),
                "show-action": true,
                actionText: "\u641C\u7D22",
                placeholder: "\u5BB6\u5177",
                bgColor: "#f3f3f3",
                actionStyle: _ctx.actionStyle,
                onSearch: _cache[2] || (_cache[2] = ($event) => $options.addHistory()),
                onCustom: _cache[3] || (_cache[3] = ($event) => $options.pageJump1("../../pages/classify-page/classify-page")),
                height: "64rpx",
                margin: "0 auto"
              }, null, 8, ["modelValue", "actionStyle"])
            ])
          ])
        ]),
        _: 1
      }),
      vue.createCommentVNode(" \u5386\u53F2\u641C\u7D22 \u6682\u672A\u5B8C\u6210"),
      vue.withDirectives(vue.createElementVNode("view", { class: "search_history" }, [
        vue.createElementVNode("view", { class: "history_title" }, [
          vue.createElementVNode("text", null, "\u5386\u53F2\u641C\u7D22"),
          vue.createVNode(_component_u_modal, {
            show: $data.modelShow,
            title: _ctx.title,
            content: $data.content,
            showCancelButton: true,
            onConfirm: $options.closeModel,
            onCancel: $options.cancel
          }, null, 8, ["show", "title", "content", "onConfirm", "onCancel"]),
          vue.createVNode(_component_u_icon, {
            name: "trash",
            onClick: _cache[4] || (_cache[4] = ($event) => $data.modelShow = true)
          })
        ]),
        vue.createElementVNode("view", { class: "history_content" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.historyList, (item, index2) => {
            return vue.openBlock(), vue.createBlock(_component_u_tag, {
              class: "utag",
              text: item,
              shape: "circle",
              color: "#464646",
              plain: "",
              size: "large",
              bgColor: "#F8F8F8",
              key: index2,
              onClick: ($event) => $options.pageJupm(item)
            }, null, 8, ["text", "onClick"]);
          }), 128))
        ])
      ], 512), [
        [vue.vShow, $options.show]
      ]),
      vue.createCommentVNode(" \u641C\u7D22\u63A8\u8350 "),
      vue.createElementVNode("view", { class: "search_advice" }, [
        vue.createElementVNode("text", null, "\u641C\u7D22\u63A8\u8350"),
        vue.createElementVNode("view", { class: "advice_content" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.searchHistory.history, (item, index2) => {
            return vue.openBlock(), vue.createBlock(_component_u_tag, {
              class: "utag",
              text: item,
              size: "large",
              shape: "circle",
              color: "#ffffff",
              plain: "",
              bgColor: "#f9ae3d",
              type: "warning",
              key: index2,
              onClick: ($event) => $options.pageJupm(item)
            }, null, 8, ["text", "onClick"]);
          }), 128))
        ])
      ]),
      vue.createCommentVNode(" \u540C\u57CE\u70ED\u641C "),
      vue.createElementVNode("view", { class: "search_advice" }, [
        vue.createElementVNode("text", null, "\u641C\u7D22\u63A8\u8350"),
        vue.createElementVNode("view", { class: "advice_content" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.searchHistory.hot, (item, index2) => {
            return vue.openBlock(), vue.createBlock(_component_u_tag, {
              class: "utag",
              text: item,
              size: "large",
              shape: "circle",
              color: "#ffffff",
              type: "warning",
              icon: item.icon,
              plain: "",
              bgColor: "#f9ae3d",
              key: index2,
              onClick: ($event) => $options.pageJupm(item)
            }, null, 8, ["text", "icon", "onClick"]);
          }), 128))
        ])
      ])
    ]);
  }
  var SubpagesSearchPageSearchPage = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-430765d2"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/subpages/searchPage/searchPage.vue"]]);
  const _sfc_main$2 = {
    name: "CommonGoods",
    data() {
      return {
        moreList: [
          {
            name: "\u5546\u54C1\u8BE6\u60C5",
            detailsType: "details_img"
          },
          {
            name: "\u5546\u54C1\u8BC4\u4EF7",
            detailsType: "details"
          }
        ],
        detailsType: "details_img"
      };
    },
    props: ["details"],
    methods: {
      click(item) {
        this.detailsType = item.detailsType;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_tabs = resolveEasycom(vue.resolveDynamicComponent("u-tabs"), __easycom_0$3);
    const _component_u_tag = resolveEasycom(vue.resolveDynamicComponent("u-tag"), __easycom_1);
    const _component_u_avatar = resolveEasycom(vue.resolveDynamicComponent("u-avatar"), __easycom_2$1);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "goodsMore" }, [
        vue.createVNode(_component_u_tabs, {
          list: $data.moreList,
          onClick: $options.click,
          lineColor: "#f5510a",
          lineWidth: "60"
        }, null, 8, ["list", "onClick"])
      ]),
      vue.withDirectives(vue.createElementVNode("view", { class: "details_img" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.details.detail_img, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("image", {
            src: item,
            mode: "",
            key: index2
          }, null, 8, ["src"]);
        }), 128))
      ], 512), [
        [vue.vShow, $data.detailsType == "details_img"]
      ]),
      vue.withDirectives(vue.createElementVNode("view", { class: "details" }, [
        vue.createElementVNode("view", { class: "detialType" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.details.appraise.summary, (item, index2) => {
            return vue.openBlock(), vue.createBlock(_component_u_tag, {
              text: item,
              color: "#827d7d",
              shape: "circle",
              bgColor: "#fef0f0",
              key: index2
            }, null, 8, ["text"]);
          }), 128))
        ]),
        vue.createElementVNode("view", { class: "commentList" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.details.appraise.user, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "commentItem",
              key: index2
            }, [
              vue.createVNode(_component_u_avatar, {
                src: item.avatar,
                size: "54"
              }, null, 8, ["src"]),
              vue.createElementVNode("view", { class: "itemContent" }, [
                vue.createElementVNode("view", { class: "itemTop" }, [
                  vue.createElementVNode("view", { class: "itemName" }, [
                    vue.createTextVNode(vue.toDisplayString(item.avatar_name) + " ", 1),
                    vue.createElementVNode("view", { class: "recommend" }, [
                      (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(5, (item2, index3) => {
                        return vue.createVNode(_component_u_icon, {
                          name: "star-fill",
                          color: "#fc6c25",
                          size: "24"
                        });
                      }), 64))
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "itemDate" }, vue.toDisplayString(item.time), 1)
                ]),
                vue.createElementVNode("view", { class: "itemText" }, [
                  vue.createTextVNode(vue.toDisplayString(item.comments) + " ", 1),
                  item.reply ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "reply"
                  }, vue.toDisplayString(item.reply), 1)) : vue.createCommentVNode("v-if", true)
                ])
              ])
            ]);
          }), 128))
        ])
      ], 512), [
        [vue.vShow, $data.detailsType == "details"]
      ])
    ]);
  }
  var CommonGoods = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-e89ce6c0"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/components/CommonGoods.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        detailsData: {},
        value1: 0,
        showPopup: false,
        count: 1,
        type: "",
        actionType: 0
      };
    },
    components: {
      CommonGoods
    },
    methods: {
      handleCountChange(e) {
        this.count = e.value;
      },
      closePopup() {
        this.showPopup = false;
      },
      selectShoppingType(type) {
        this.type = type;
      },
      handleAction(actionType) {
        this.actionType = actionType;
        this.showPopup = true;
      },
      handleAddShoppingCart() {
        if (!this.type || !this.count) {
          this.$refs.uNotify.show({
            type: "error",
            message: "\u52A0\u5165\u8D2D\u7269\u8F66\u5931\u8D25, \u8BF7\u9009\u62E9\u5546\u54C1\u7C7B\u578B",
            duration: 1e3 * 2,
            fontSize: 20,
            safeAreaInsetTop: true
          });
          return;
        }
        this.$refs.uNotify.show({
          type: "success",
          message: "\u52A0\u5165\u8D2D\u7269\u8F66\u6210\u529F",
          duration: 1e3 * 2,
          fontSize: 20,
          safeAreaInsetTop: true
        });
        const {
          count,
          type
        } = this.$data;
        const detailData = __spreadProps(__spreadValues({}, this.detailsData), {
          type,
          count
        });
        this.$store.commit("addShoppingItem", detailData);
        setTimeout(() => {
          uni.switchTab({
            url: "/pages/shopping-page/shopping-page"
          });
        }, 2e3);
      },
      handlePayNow() {
        const {
          count,
          type
        } = this.$data;
        const detailData = __spreadProps(__spreadValues({}, this.detailsData), {
          type,
          count
        });
        uni.navigateTo({
          url: `/pages/payment-page/payment-page?data=${JSON.stringify(detailData)}`
        });
      },
      handleConfirm() {
        if (this.actionType === 1) {
          this.handleAddShoppingCart();
        } else {
          this.handlePayNow();
        }
      }
    },
    onLoad: function(option) {
      this.detailsData = JSON.parse(option.Data);
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_notify = resolveEasycom(vue.resolveDynamicComponent("u-notify"), __easycom_0$1);
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_1$3);
    const _component_u_swiper = resolveEasycom(vue.resolveDynamicComponent("u-swiper"), __easycom_2$5);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_3$2);
    const _component_CommonGoods = vue.resolveComponent("CommonGoods");
    const _component_u_number_box = resolveEasycom(vue.resolveDynamicComponent("u-number-box"), __easycom_4);
    const _component_u_popup = resolveEasycom(vue.resolveDynamicComponent("u-popup"), __easycom_5);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" \u6D88\u606F\u63D0\u793A "),
      vue.createVNode(_component_u_notify, {
        ref: "uNotify",
        message: "Hi uview-plus"
      }, null, 512),
      vue.createVNode(_component_u_navbar, {
        title: "\u5546\u54C1\u8BE6\u60C5",
        height: "60",
        placeholder: true,
        autoBack: true
      }),
      vue.createElementVNode("view", { class: "detialList" }, [
        vue.createVNode(_component_u_swiper, {
          class: "swiper",
          list: $data.detailsData.img,
          indicator: "",
          height: "200",
          indicatorMode: "dot",
          circular: ""
        }, null, 8, ["list"]),
        vue.createElementVNode("view", { class: "detialTitle" }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.detailsData.detail.name), 1),
            vue.createVNode(_component_u_icon, {
              name: "heart",
              color: "#d9d9d9",
              size: "24",
              label: "\u6536\u85CF",
              labelPos: "bottom",
              labelSize: "12"
            })
          ]),
          vue.createElementVNode("view", { class: "price" }, [
            vue.createTextVNode(vue.toDisplayString($data.detailsData.detail.sale), 1),
            vue.createElementVNode("text", null, vue.toDisplayString($data.detailsData.detail.old_sale), 1)
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "detialType" }, [
        vue.createElementVNode("view", { class: "list" }, [
          vue.createElementVNode("text", null, "\u89C4\u683C"),
          vue.createElementVNode("view", { class: "lists" }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.detailsData.detail.specification), 1),
            vue.createVNode(_component_u_icon, {
              name: "arrow-right",
              color: "#d9d9d9",
              size: "14"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "list" }, [
          vue.createElementVNode("text", null, "\u4F18\u60E0"),
          vue.createElementVNode("view", { class: "lists" }, [
            vue.createElementVNode("text", { class: "preferential" }, vue.toDisplayString($data.detailsData.detail.preferential), 1),
            vue.createVNode(_component_u_icon, {
              name: "arrow-right",
              color: "#d9d9d9",
              size: "14"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "list" }, [
          vue.createElementVNode("text", null, "\u670D\u52A1"),
          vue.createElementVNode("view", { class: "lists" }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.detailsData.detail.serve), 1),
            vue.createVNode(_component_u_icon, {
              name: "arrow-right",
              color: "#d9d9d9",
              size: "14"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "list parameter" }, [
          vue.createElementVNode("text", null, "\u53C2\u6570"),
          vue.createElementVNode("view", { class: "lists" }, [
            vue.createElementVNode("text", null, vue.toDisplayString($data.detailsData.detail.parameter), 1),
            vue.createVNode(_component_u_icon, {
              name: "arrow-right",
              color: "#d9d9d9",
              size: "14"
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "CommonGoods" }, [
        vue.createVNode(_component_CommonGoods, { details: $data.detailsData }, null, 8, ["details"])
      ]),
      vue.createElementVNode("view", { class: "detialTabbar" }, [
        vue.createElementVNode("view", { class: "goodsTabbar" }, [
          vue.createElementVNode("view", { class: "goodsShare" }, [
            vue.createVNode(_component_u_icon, {
              name: "server-fill",
              color: "#363535",
              size: "28",
              label: "\u5BA2\u670D",
              labelPos: "bottom"
            }),
            vue.createTextVNode("| "),
            vue.createVNode(_component_u_icon, {
              name: "share-square",
              color: "#363535",
              size: "28",
              label: "\u5206\u4EAB",
              labelPos: "bottom"
            })
          ]),
          vue.createElementVNode("view", { class: "goodsBuy" }, [
            vue.createElementVNode("view", { class: "car" }, [
              vue.createElementVNode("text", {
                onClick: _cache[0] || (_cache[0] = ($event) => $options.handleAction(1))
              }, "\u52A0\u5165\u8D2D\u7269\u8F66")
            ]),
            vue.createElementVNode("view", { class: "buy" }, [
              vue.createElementVNode("text", {
                onClick: _cache[1] || (_cache[1] = ($event) => $options.handleAction(2))
              }, "\u7ACB\u5373\u8D2D\u4E70")
            ])
          ])
        ])
      ]),
      vue.createCommentVNode(" \u5F39\u51FA\u5C42 "),
      vue.createVNode(_component_u_popup, {
        show: $data.showPopup,
        safeAreaInsetBottom: true,
        round: 10,
        mode: "bottom",
        onClose: $options.closePopup
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "pop-container" }, [
            vue.createElementVNode("view", { class: "pop-header" }, [
              vue.createElementVNode("view", { class: "cover" }, [
                vue.createElementVNode("img", {
                  src: $data.detailsData.detail_img[0],
                  alt: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "info" }, [
                vue.createElementVNode("view", { class: "name" }, vue.toDisplayString($data.detailsData.detail.name), 1),
                vue.createElementVNode("view", { class: "sale" }, vue.toDisplayString($data.detailsData.detail.sale), 1)
              ])
            ]),
            vue.createElementVNode("view", { class: "sub-title" }, " \u7C7B\u578B "),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.detailsData.detail.options.type, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", { class: "type-list" }, [
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["type-item", { "active-type": item === $data.type }]),
                  onClick: ($event) => $options.selectShoppingType(item)
                }, vue.toDisplayString(item), 11, ["onClick"])
              ]);
            }), 256)),
            vue.createElementVNode("view", { class: "count-container" }, [
              vue.createElementVNode("view", { class: "text" }, " \u8D2D\u4E70\u6570\u91CF "),
              vue.createElementVNode("view", { class: "count-change" }, [
                vue.createVNode(_component_u_number_box, {
                  modelValue: $data.count,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.count = $event),
                  onChange: $options.handleCountChange
                }, null, 8, ["modelValue", "onChange"])
              ])
            ]),
            vue.createElementVNode("view", {
              class: "pop-footer",
              onClick: _cache[3] || (_cache[3] = (...args) => $options.handleConfirm && $options.handleConfirm(...args))
            }, vue.toDisplayString($data.actionType === 1 ? "\u786E\u8BA4" : "\u7ACB\u5373\u652F\u4ED8"), 1)
          ])
        ]),
        _: 1
      }, 8, ["show", "onClose"])
    ]);
  }
  var SubpagesDetailsPageDetailsPage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-4182cad6"], ["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/subpages/detailsPage/detailsPage.vue"]]);
  __definePage("pages/index-page/index-page", PagesIndexPageIndexPage);
  __definePage("pages/my-page/my-page", PagesMyPageMyPage);
  __definePage("pages/shopping-page/shopping-page", PagesShoppingPageShoppingPage);
  __definePage("pages/type-page/type-page", PagesTypePageTypePage);
  __definePage("pages/login-page/login-page", PagesLoginPageLoginPage);
  __definePage("pages/classify-page/classify-page", PagesClassifyPageClassifyPage);
  __definePage("pages/payment-page/payment-page", PagesPaymentPagePaymentPage);
  __definePage("pages/address-page/address-page", PagesAddressPageAddressPage);
  __definePage("subpages/searchPage/searchPage", SubpagesSearchPageSearchPage);
  __definePage("subpages/detailsPage/detailsPage", SubpagesDetailsPageDetailsPage);
  const _sfc_main = {
    onLaunch() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/\u55E8\u8D2D/higou-e-commerce-app/App.vue"]]);
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject$1(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge$1() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge$1(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge$1({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject$1(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  var adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile(__spreadValues(__spreadValues(__spreadValues({}, _config), otherConfig), mergeKeys$1(optionalKeys, config2)));
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request(__spreadValues(__spreadValues({}, _config), mergeKeys$1(optionalKeys, config2)));
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  var dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  var mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: __spreadValues(__spreadValues({}, globalsConfig.custom || {}), config2.custom || {}),
      header: deepMerge$1(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));
    if (method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = __spreadValues(__spreadValues({}, config3), mergeKeys(defaultsKeys, globalsConfig, config2));
    }
    return config3;
  };
  var defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type) {
      return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value2) {
              resolve(_clone(value2, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value2, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value2, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value2) {
            var entryChild = _clone(value2, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i);
          if (attrs) {
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at node_modules/uview-plus/libs/luch-request/core/Request.js:39", "\u8BBE\u7F6E\u5168\u5C40\u53C2\u6570\u5FC5\u987B\u63A5\u6536\u4E00\u4E2AObject");
      }
      this.config = clone(__spreadValues(__spreadValues({}, defaults), arg));
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        method: "GET"
      }, options));
    }
    post(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "POST"
      }, options));
    }
    put(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "PUT"
      }, options));
    }
    delete(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "DELETE"
      }, options));
    }
    options(url2, data, options = {}) {
      return this.middleware(__spreadValues({
        url: url2,
        data,
        method: "OPTIONS"
      }, options));
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        params: {},
        animationType: "pop-in",
        animationDuration: 300,
        intercept: false
      };
      this.route = this.route.bind(this);
    }
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = uni.$u.queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = uni.$u.queryParams(params);
      return url2 += query;
    }
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = uni.$u.deepMerge(options, this.config);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === uni.$u.page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = uni.$u.deepMerge(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  var route = new Router().route;
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  var colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  function email(value2) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value2);
  }
  function mobile(value2) {
    return /^1[23456789]\d{9}$/.test(value2);
  }
  function url(value2) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value2);
  }
  function date(value2) {
    if (!value2)
      return false;
    if (number(value2))
      value2 = +value2;
    return !/Invalid|NaN/.test(new Date(value2).toString());
  }
  function dateISO(value2) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value2);
  }
  function number(value2) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value2);
  }
  function string(value2) {
    return typeof value2 === "string";
  }
  function digits(value2) {
    return /^\d+$/.test(value2);
  }
  function idCard(value2) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value2);
  }
  function carNo(value2) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value2.length === 7) {
      return creg.test(value2);
    }
    if (value2.length === 8) {
      return xreg.test(value2);
    }
    return false;
  }
  function amount(value2) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value2);
  }
  function chinese(value2) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value2);
  }
  function letter(value2) {
    return /^[a-zA-Z]*$/.test(value2);
  }
  function enOrNum(value2) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value2);
  }
  function contains(value2, param) {
    return value2.indexOf(param) >= 0;
  }
  function range$1(value2, param) {
    return value2 >= param[0] && value2 <= param[1];
  }
  function rangeLength(value2, param) {
    return value2.length >= param[0] && value2.length <= param[1];
  }
  function landline(value2) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value2);
  }
  function empty(value2) {
    switch (typeof value2) {
      case "undefined":
        return true;
      case "string":
        if (value2.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value2)
          return true;
        break;
      case "number":
        if (value2 === 0 || isNaN(value2))
          return true;
        break;
      case "object":
        if (value2 === null || value2.length === 0)
          return true;
        for (const i in value2) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value2) {
    if (typeof value2 === "string") {
      try {
        const obj = JSON.parse(value2);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value2) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value2);
    }
    return Object.prototype.toString.call(value2) === "[object Array]";
  }
  function object(value2) {
    return Object.prototype.toString.call(value2) === "[object Object]";
  }
  function code(value2, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value2);
  }
  function func(value2) {
    return typeof value2 === "function";
  }
  function promise(value2) {
    return object(value2) && func(value2.then) && func(value2.catch);
  }
  function image(value2) {
    const newValue = value2.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value2) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value2);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  var test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  };
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at node_modules/uview-plus/libs/function/digit.js:45", `${num} \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value2 = 0) {
    return Math.max(min, Math.min(max, Number(value2)));
  }
  function getPx(value2, unit = false) {
    if (test.number(value2)) {
      return unit ? `${value2}px` : Number(value2);
    }
    if (/(rpx|upx)$/.test(value2)) {
      return unit ? `${uni.upx2px(parseInt(value2))}px` : Number(uni.upx2px(parseInt(value2)));
    }
    return unit ? `${parseInt(value2)}px` : parseInt(value2);
  }
  function sleep(value2 = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value2);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (test.empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value2 = "auto", unit = "") {
    if (!unit) {
      unit = uni.$u.config.unit || "px";
    }
    value2 = String(value2);
    return test.number(value2) ? `${value2}${unit}` : value2;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = test.array(obj) ? [] : {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at node_modules/uview-plus/libs/function/index.js:238", `uView\u63D0\u793A\uFF1A${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError("fillString must be String");
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else {
      date2 = new Date(typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      "d": date2.getDate().toString().padStart(2, "0"),
      "h": date2.getHours().toString().padStart(2, "0"),
      "M": date2.getMinutes().toString().padStart(2, "0"),
      "s": date2.getSeconds().toString().padStart(2, "0")
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = new Date().getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}\u5206\u949F\u524D`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}\u5C0F\u65F6\u524D`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}\u5929\u524D`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}\u4E2A\u6708\u524D`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}\u5E74\u524D`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value2 = data[key];
      if (["", void 0, null].indexOf(value2) >= 0) {
        continue;
      }
      if (value2.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value2.length; i++) {
              _result.push(`${key}[${i}]=${value2[i]}`);
            }
            break;
          case "brackets":
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value2.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value2.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value2.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value2}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value2, unit = true) {
    const valueNum = parseInt(value2);
    if (unit) {
      if (/s$/.test(value2))
        return value2;
      return value2 > 30 ? `${value2}ms` : `${value2}s`;
    }
    if (/ms$/.test(value2))
      return valueNum;
    if (/s$/.test(value2))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value2) {
    return `00${value2}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem2 = uni.$u.$parent.call(instance, "u-form-item");
    const form2 = uni.$u.$parent.call(instance, "u-form");
    if (formItem2 && form2) {
      form2.validateField(formItem2.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value2) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value2);
    } else {
      obj[key] = value2;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color: color2 = {},
    zIndex: zIndex2 = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$u;
    uni.$u.config = deepMerge2(uni.$u.config, config2);
    uni.$u.props = deepMerge2(uni.$u.props, props2);
    uni.$u.color = deepMerge2(uni.$u.color, color2);
    uni.$u.zIndex = deepMerge2(uni.$u.zIndex, zIndex2);
  }
  var index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages,
    setConfig
  };
  var zIndex = {
    toast: 10090,
    noNetwork: 10080,
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  var platform$1 = platform;
  const $u = __spreadProps(__spreadValues({
    route,
    date: index.timeFormat,
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: ["primary", "success", "error", "warning", "info"],
    http: new Request(),
    config,
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props: props$u
  }, index), {
    color,
    platform: platform$1
  });
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.config.globalProperties.$u = $u;
    Vue2.config.globalProperties.$nextTick = (cb) => {
      cb();
    };
    Vue2.mixin(mixin);
  };
  var uviewPlus = {
    install
  };
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = __spreadValues({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value2) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value2));
          } catch (e) {
          }
          currentSettings = value2;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value2) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value2);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list2 = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list2.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn('[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"');
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(local.state, local.getters, store3.state, store3.getters);
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin({
      id: "org.vuejs.vuex",
      app,
      label: "Vuex",
      homepage: "https://next.vuex.vuejs.org/",
      logo: "https://vuejs.org/images/icons/favicon-96x96.png",
      packageName: "vuex",
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    }, function(api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: "Vuex Mutations",
        color: COLOR_LIME_500
      });
      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: "Vuex Actions",
        color: COLOR_LIME_500
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Vuex",
        icon: "storage",
        treeFilterPlaceholder: "Filter stores..."
      });
      api.on.getInspectorTree(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store2._modules.root, "")
            ];
          }
        }
      });
      api.on.getInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store2, modulePath);
          payload.state = formatStoreForInspectorState(getStoreModule(store2._modules, modulePath), modulePath === "root" ? store2.getters : store2._makeLocalGettersCache, modulePath);
        }
      });
      api.on.editInspectorState(function(payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== "root") {
            path = modulePath.split("/").filter(Boolean).concat(path);
          }
          store2._withCommit(function() {
            payload.set(store2._state.data, path, payload.state.value);
          });
        }
      });
      store2.subscribe(function(mutation, state) {
        var data = {};
        if (mutation.payload) {
          data.payload = mutation.payload;
        }
        data.state = state;
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data
          }
        });
      });
      store2.subscribeAction({
        before: function(action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: "start",
              data
            }
          });
        },
        after: function(action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: "duration",
              display: duration + "ms",
              tooltip: "Action duration",
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;
          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: "end",
              data
            }
          });
        }
      });
    });
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(function(moduleName) {
        return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + "/");
      })
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(function(module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
      }
      return i === names.length - 1 ? child : child._children;
    }, path === "root" ? moduleMap : moduleMap.root._children);
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn("[vuex] trying to unregister module '" + key + "', which is not registered");
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed");
          }
          return;
        }
        update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
      }
    }
  }
  var functionAssert = {
    assert: function(value2) {
      return typeof value2 === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value2) {
      return typeof value2 === "function" || typeof value2 === "object" && typeof value2.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value2, type) {
        assert(assertOptions.assert(value2), makeAssertionMessage(path, key, type, value2, assertOptions.expected));
      });
    });
  }
  function makeAssertionMessage(path, key, type, value2, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value2) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install2(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools");
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error2) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error2);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error2);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const store = createStore({
    state: {
      userName: "",
      shoppingCartList: []
    },
    getters: {
      login: (state) => {
        return state.userName ? true : false;
      },
      isShoppingCheckedAll(state) {
        let flag2 = true;
        state.shoppingCartList.forEach((item) => {
          if (!item.isChecked) {
            flag2 = false;
          }
        });
        return flag2;
      }
    },
    mutations: {
      addShoppingItem({
        shoppingCartList
      }, item) {
        item.isChecked = true;
        shoppingCartList.push(item);
      },
      changeShoppingItem({
        shoppingCartList
      }, {
        index: index2,
        count,
        isChecked
      }) {
        if (count !== void 0) {
          shoppingCartList[index2].count = count;
        }
        if (isChecked !== void 0) {
          shoppingCartList[index2].isChecked = isChecked;
        }
      },
      changeShoppingCheckedAll({
        shoppingCartList
      }, isChecked) {
        shoppingCartList.forEach((item) => {
          item.isChecked = isChecked;
        });
      },
      deleteShoppingItem({
        shoppingCartList
      }, index2) {
        shoppingCartList.splice(index2, 1);
      }
    },
    actions: {},
    modules: {}
  });
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    app.use(uviewPlus);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
