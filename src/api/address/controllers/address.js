"use strict";

/**
 * address controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::address.address", ({ strapi }) => ({
  async create(ctx) {
    let entity;
    ctx.request.body.data.user = ctx.state.user.id;
    ctx.request.body.data.publishedAt = new Date();
    entity = await strapi.entityService.create(
      "api::address.address",
      ctx.request.body
    );
    const sanitizedResult = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedResult);
  },
}));

// module.exports = createCoreController("api::address.address", ({ strapi }) => ({
//   async create(ctx) {
//     let entity;
//     ctx.request.body.data.user = ctx.state.user.id;
//     ctx.request.body.data.publishedAt = new Date();
//     entity = await strapi.entityService.create(
//       "api::address.address",
//       ctx.request.body
//     );
//     return entity;
//   },
// }));
