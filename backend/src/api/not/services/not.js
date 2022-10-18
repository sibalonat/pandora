'use strict';

/**
 * not service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::not.not');
