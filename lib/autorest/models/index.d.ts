/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */


/**
 * @class
 * Initializes a new instance of the ImportModel class.
 * @constructor
 * The import object
 * @member {string} [id] The import id
 * 
 * @member {string} [name] The import name name
 * 
 * @member {string} [importState] The import upload state
 * 
 * @member {array} [reports] The reports associated with this import
 * 
 * @member {array} [datasets] The datasets associated with this import
 * 
 */
export interface ImportModel {
    id?: string;
    name?: string;
    importState?: string;
    reports?: Report[];
    datasets?: Dataset[];
}

/**
 * @class
 * Initializes a new instance of the Report class.
 * @constructor
 * A Power BI Report
 * @member {string} [id] The report id
 * 
 * @member {string} [name] The report name
 * 
 * @member {string} [webUrl] The report web url
 * 
 * @member {string} [embedUrl] The report embed url
 * 
 */
export interface Report {
    id?: string;
    name?: string;
    webUrl?: string;
    embedUrl?: string;
}

/**
 * @class
 * Initializes a new instance of the Dataset class.
 * @constructor
 * A Power BI Dataset
 * @member {string} [id] The dataset id
 * 
 * @member {string} name The dataset name
 * 
 * @member {string} [defaultRetentionPolicy] The dataset default data
 * retention policy
 * 
 * @member {array} tables The dataset tables
 * 
 * @member {string} [webUrl] The dataset web url
 * 
 * @member {array} [datasources] The datasources associated with this dataset
 * 
 * @member {string} [defaultMode] The dataset mode or type. Possible values
 * include: 'AsAzure', 'AsOnPrem', 'Push', 'Streaming', 'PushStreaming'
 * 
 */
export interface Dataset {
    id?: string;
    name: string;
    defaultRetentionPolicy?: string;
    tables: Table[];
    webUrl?: string;
    datasources?: Datasource[];
    defaultMode?: string;
}

/**
 * @class
 * Initializes a new instance of the Table class.
 * @constructor
 * A dataset table
 * @member {string} name The table name
 * 
 * @member {array} columns The column schema for this table
 * 
 * @member {array} [rows] The data rows within this tabe
 * 
 */
export interface Table {
    name: string;
    columns: Column[];
    rows?: Row[];
}

/**
 * @class
 * Initializes a new instance of the Column class.
 * @constructor
 * A Power BI Column
 * @member {string} name The column name
 * 
 * @member {string} dataType The column data type
 * 
 */
export interface Column {
    name: string;
    dataType: string;
}

/**
 * @class
 * Initializes a new instance of the Row class.
 * @constructor
 * A Power BI data row
 * @member {string} [id] The unique row id
 * 
 */
export interface Row {
    id?: string;
}

/**
 * @class
 * Initializes a new instance of the Datasource class.
 * @constructor
 * A Power BI datasource
 * @member {string} [name] The datasource name
 * 
 * @member {string} [connectionString] The datasource connection string
 * 
 */
export interface Datasource {
    name?: string;
    connectionString?: string;
}

/**
 * @class
 * Initializes a new instance of the ImportInfo class.
 * @constructor
 * The import info
 * @member {string} [filePath] The file path to import
 * 
 * @member {string} [connectionType] The import connection type
 * 
 */
export interface ImportInfo {
    filePath?: string;
    connectionType?: string;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListDataset class.
 * @constructor
 * A dataset odata list wrapper
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The datasets
 * 
 */
export interface ODataResponseListDataset {
    odatacontext?: string;
    value?: Dataset[];
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListTable class.
 * @constructor
 * Odata response wrapper for a Power BI Table collection
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The Power BI tables
 * 
 */
export interface ODataResponseListTable {
    odatacontext?: string;
    value?: Table[];
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListGatewayDatasource class.
 * @constructor
 * Odata response wrapper for a Power BI Gateway datasource collection
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The gateway datasources
 * 
 */
export interface ODataResponseListGatewayDatasource {
    odatacontext?: string;
    value?: GatewayDatasource[];
}

/**
 * @class
 * Initializes a new instance of the GatewayDatasource class.
 * @constructor
 * A Power BI gateway datasource
 * @member {string} [id] The unique id for this gateway datasource
 * 
 * @member {string} [gatewayId] The associated gateway id
 * 
 * @member {string} [datasourceType] The datasource type
 * 
 * @member {string} [connectionDetails] The datasource connection details
 * 
 * @member {string} [credentialType] The datasource credential type
 * 
 * @member {object} [basicCredentials]
 * 
 * @member {string} [basicCredentials.username] Username required to access
 * the datasource
 * 
 * @member {string} [basicCredentials.password] Password required to access
 * the datasource
 * 
 */
export interface GatewayDatasource {
    id?: string;
    gatewayId?: string;
    datasourceType?: string;
    connectionDetails?: string;
    credentialType?: string;
    basicCredentials?: BasicCredentials;
}

/**
 * @class
 * Initializes a new instance of the BasicCredentials class.
 * @constructor
 * Object representing basic authentication credentials
 * @member {string} [username] Username required to access the datasource
 * 
 * @member {string} [password] Password required to access the datasource
 * 
 */
export interface BasicCredentials {
    username?: string;
    password?: string;
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListDatasource class.
 * @constructor
 * Odata response wrapper for a Power BI datasource collection
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The datasource collection
 * 
 */
export interface ODataResponseListDatasource {
    odatacontext?: string;
    value?: Datasource[];
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListReport class.
 * @constructor
 * Odata response wrapper for a Power BI Report collection
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The report collection
 * 
 */
export interface ODataResponseListReport {
    odatacontext?: string;
    value?: Report[];
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListImport class.
 * @constructor
 * Odata response wrapper for a Power BI Import collection
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The imports collection
 * 
 */
export interface ODataResponseListImport {
    odatacontext?: string;
    value?: ImportModel[];
}

/**
 * @class
 * Initializes a new instance of the ODataResponseListWorkspace class.
 * @constructor
 * Odata response wrapper for a Power BI Workspace list
 * @member {string} [odatacontext]
 * 
 * @member {array} [value] The workspaces
 * 
 */
export interface ODataResponseListWorkspace {
    odatacontext?: string;
    value?: Workspace[];
}

/**
 * @class
 * Initializes a new instance of the Workspace class.
 * @constructor
 * A Power BI Workspace
 * @member {string} [workspaceId] The workspace id
 * 
 * @member {string} [workspaceCollectionName] The workspace collection name
 * 
 * @member {string} [displayName] The workspace display name
 * 
 */
export interface Workspace {
    workspaceId?: string;
    workspaceCollectionName?: string;
    displayName?: string;
}

/**
 * @class
 * Initializes a new instance of the CreateWorkspaceRequest class.
 * @constructor
 * A Create Workspace Request
 * @member {string} [name] The workspace name
 * 
 */
export interface CreateWorkspaceRequest {
    name?: string;
}

/**
 * @class
 * Initializes a new instance of the CloneReportRequest class.
 * @constructor
 * Power BI Clone Report Request
 * @member {string} [name] The requested report name
 * 
 * @member {string} [targetWorkspaceId] Optional parameter for specifying the
 * target workspace id
 * 
 * @member {string} [targetModelId] Optional parameter for specifying the
 * target associated model (dataset) id
 * 
 */
export interface CloneReportRequest {
    name?: string;
    targetWorkspaceId?: string;
    targetModelId?: string;
}

/**
 * @class
 * Initializes a new instance of the RebindReportRequest class.
 * @constructor
 * Power BI Rebind Report Request
 * @member {string} [datasetId] The new dataset of the rebinded report
 * 
 */
export interface RebindReportRequest {
    datasetId?: string;
}
