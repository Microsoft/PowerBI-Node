/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the WorkspaceId class.
 * @constructor
 * A Power BI Workspace id
 * @member {string} [id] The workspace id
 * 
 */
function WorkspaceId() {
}

/**
 * Defines the metadata of WorkspaceId
 *
 * @returns {object} metadata of WorkspaceId
 *
 */
WorkspaceId.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'WorkspaceId',
    type: {
      name: 'Composite',
      className: 'WorkspaceId',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = WorkspaceId;