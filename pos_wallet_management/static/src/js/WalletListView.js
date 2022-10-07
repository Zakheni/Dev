/* Copyright (c) 2016-Present Webkul Software Pvt. Ltd. (<https://webkul.com/>) */
/* See LICENSE file for full copyright and licensing details. */
/* License URL : <https://store.webkul.com/license.html/> */
odoo.define('pos_wallet_management.WalletListView', function (require) {
    'use strict';

    var ListRenderer = require('web.ListRenderer');
    var BasicRenderer = require('web.BasicRenderer');
    var ListController = require('web.ListController');
    var ListView = require('web.ListView');
    var viewRegistry = require('web.view_registry');
    var rpc = require('web.rpc');
    var viewRegistry = require('web.view_registry');
    var superListController = ListController;
   
    var wk_code = superListController.prototype._onButtonClicked;  

    // ListController.include({
    //     events: _.extend({}, ListController.prototype.events, {
    //         'click .wk_generate_wallet': 'generate_wallets',
    //     }),
    //     generate_wallets: function (ev) {
    //         var self = this;
    //         console.log("_onButtonClicked-------111---")

    //     }

    // })


});
