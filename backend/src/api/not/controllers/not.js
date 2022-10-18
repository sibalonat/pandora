'use strict';

/**
 * not controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::not.not');
