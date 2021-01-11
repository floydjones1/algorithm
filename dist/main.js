/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge */ "./src/merge.js");

$(document).ready(function () {
  var arr = [];
  var myChart;

  for (var i = 0; i != 300; i++) {
    arr.push(Math.floor(Math.random() * 1000 + 1));
  }

  console.log(arr.includes(3));
  var ctx = document.getElementById("chart").getContext('2d');
  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: arr,
      datasets: [{
        label: "Number",
        data: arr,
        backgroundColor: "rgba(0,60,100,1)",
        strokeColor: "red",
        borderWidth: 1
      }]
    },
    options: {
      title: {
        display: true,
        text: "Merge Sort",
        fontSize: 22
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of Updates',
            fontSize: 15
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  (0,_merge__WEBPACK_IMPORTED_MODULE_0__.default)(arr, 0, arr.length - 1, myChart);
});

/***/ }),

/***/ "./src/merge.js":
/*!**********************!*\
  !*** ./src/merge.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var time = 100;

var mergeSort = function mergeSort(arr, low, high, myChart) {
  var middle;

  if (time > 1) {
    time += 50;
  }

  if (low < high) {
    if (high.length % 2 == 0) {
      middle = (low + high) / 2;
    } else {
      middle = (low + high) / 2;
      middle = Math.floor(middle);
    }

    mergeSort(arr, low, middle, myChart);
    mergeSort(arr, middle + 1, high, myChart);
    setTimeout(function () {
      merge(arr, low, middle, high, myChart);
    }, time);
  }
};

function merge(arr, low, middle, high, myChart) {
  var arr1 = [];
  var arr2 = [];

  for (var i = low; i <= middle; i++) {
    arr1.push(arr[i]);
  }

  for (var _i = middle + 1; _i <= high; _i++) {
    arr2.push(arr[_i]);
  }

  var firstIndex = 0;
  var secondIndex = 0;

  while (firstIndex < arr1.length && secondIndex < arr2.length) {
    if (arr1[firstIndex] <= arr2[secondIndex]) {
      arr[low] = arr1[firstIndex];
      firstIndex++;
    } else {
      arr[low] = arr2[secondIndex];
      secondIndex++;
    }

    low++;
  }

  while (firstIndex < arr1.length) {
    arr[low] = arr1[firstIndex];
    firstIndex++;
    low++;
  }

  while (secondIndex < arr2.length) {
    arr[low] = arr2[secondIndex];
    secondIndex++;
    low++;
  }

  myChart.update(); //console.log(arr);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=main.js.map