(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "nHst":
/*!*******************************************!*\
  !*** ./src/app/Services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.service */ "MMNe");







class OrderService {
    constructor(http, data) {
        this.http = http;
        this.data = data;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json; charset=utf-8',
        });
    }
    createOrder(body) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/order/create`, body);
    }
    getOrder(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/order/${id}`);
    }
    // updateOrder(id:any,body:any){
    //   return this.http.put(`${environment.BASE_URL}/order/update/${id}`,body);
    // }
    // deleteOrder(id:any){
    //   return this.http.delete(`${environment.BASE_URL}/order/delete/${id}`);
    // }
    getOrderByStoreId() {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        this.storeId = this.storeId.user.storeId;
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/order/store/${this.storeId}`, { headers: headers });
    }
    getOrderBySid() {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const sId = this.storeId.user.storeId;
        return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://valart-api.herokuapp.com/order/store/' + sId, {
            headers: {
                Authorization: token,
            },
        });
    }
    paymentDetailsById(id) {
        var currentUser = localStorage.getItem('currentUser');
        const storeId = JSON.parse(currentUser);
        var token = storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL + '/order/' + id;
        return this.http.get(url, { headers: headers });
    }
    createShiprocketOrder(orderId) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            orderId: orderId,
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/user/createShipRocketOrder`, body, { headers: headers });
    }
    generateManifest(shipment_id) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            shipment_id: shipment_id,
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/user/generateManifest`, body, { headers: headers });
    }
    generateLabels(shipment_id) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            shipment_id: [shipment_id],
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/user/generateLabel`, body, {
            headers: headers,
        });
    }
    generateInvoice(id = []) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            ids: [id],
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/user/generateInvoice`, body, { headers: headers });
    }
    downloadInvoice(orderId) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/user/fetchOrderInvoice/${orderId}`, { headers: headers });
    }
    fetchShiprocketOrder(orderid) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].BASE_URL}/user/fetchShipRocketOrder/${orderid}`, { headers: headers });
    }
    cancelOrderProduct(orderid, productid) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            productId: productid,
            reasonforCancel: 'i dont want this product now',
        };
        return this.http.post('https:valart-api.herokuapp.com/user/cancelOrderBeforeDispatch_admin/' +
            orderid, body, { headers: headers });
    }
    cancelOrderFood(orderid, foodid) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            foodId: foodid,
            reasonforCancel: 'i dont want this product now',
        };
        return this.http.post('https:valart-api.herokuapp.com/user/cancelOrderBeforeDispatch_admin/' +
            orderid, body, { headers: headers });
    }
    cancelOrderAfterDispatchProduct(orderid, productid) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            productId: productid,
            reasonforCancel: 'i dont want this product now',
        };
        return this.http.post('https:valart-api.herokuapp.com/user/cancelOrderAfterDispatch_admin/' +
            orderid, body, { headers: headers });
    }
    cancelOrderAfterDispatchFood(orderid, foodid) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            foodId: foodid,
            reasonforCancel: 'i dont want this product now',
        };
        return this.http.post('https:valart-api.herokuapp.com/user/cancelOrderAfterDispatch_admin/' +
            orderid, body, { headers: headers });
    }
    InitiateshippingProduct(orderid, productId) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            orderId: orderid,
            productId: productId,
        };
        return this.http.post('https:valart-api.herokuapp.com/user/generateAwbRequestShipmentPickup', body, { headers: headers });
    }
    InitiateshippingFood(orderid, foodId) {
        var currentUser = localStorage.getItem('currentUser');
        this.storeId = JSON.parse(currentUser);
        var token = this.storeId.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: token });
        const body = {
            orderId: orderid,
            productId: foodId,
        };
        return this.http.post('https:valart-api.herokuapp.com/user/generateAwbRequestShipmentPickup', body, { headers: headers });
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map