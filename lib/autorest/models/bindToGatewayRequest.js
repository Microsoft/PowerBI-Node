/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the BindToGatewayRequest class.
 * @constructor
 * The Bind dataset to gateway request
 * @member {string} [gatewayObjectId] The gateway id
 * 
 */
function BindToGatewayRequest() {
}

/**
 * Defines the metadata of BindToGatewayRequest
 *
 * @returns {object} metadata of BindToGatewayRequest
 *
 */
BindToGatewayRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BindToGatewayRequest',
    type: {
      name: 'Composite',
      className: 'BindToGatewayRequest',
      modelProperties: {
        gatewayObjectId: {
          required: false,
          serializedName: 'gatewayObjectId',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = BindToGatewayRequest;