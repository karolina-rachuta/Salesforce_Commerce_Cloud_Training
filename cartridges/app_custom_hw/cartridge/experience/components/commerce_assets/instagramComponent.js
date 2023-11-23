'use strict';
/* global response */

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

/**
 * Render logic for storefront.campaignBanner component.
 * @param {dw.experience.ComponentScriptContext} context The component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    model.instagramPost = content.instagramPost;
    model.altPost = content.altPost;
    model.titlePost = content.titlePost;
    model.textPost = content.textPost;
    model.width = content.width;
    model.height = content.height;

    return new Template('experience/components/commerce_assets/instagramComponent').render(model).text;
};
