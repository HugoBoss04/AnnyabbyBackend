"use strict";

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    let entity;
    if (ctx?.state?.user?.id) {
      ctx.request.body.data.user = ctx.state.user.id;
      ctx.request.body.data.publishedAt = new Date();
      entity = await strapi.entityService.create(
        "api::order.order",
        ctx.request.body
      );
      const sanitizedResult = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedResult);
    } else {
      entity = await strapi.entityService.create(
        "api::order.order",
        ctx.request.body
      );
      const sanitizedResult = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedResult);
    }
  },
}));
