/**
 * Created by sumudu on 1/18/17.
 */
'use strict';

var appConfig = {
  applicationContext: process.env.wm_context || 'workflow-manager',
  serverPort: process.env.workflow_wm_server_port || '3060',
  authServerURL: process.env.wm_auth_server_url || 'https://localhost:9443/services',
  businessProcessEngineBaseUrl: process.env.wm_business_process_engine_url || 'http://localhost:9763/activiti-rest/service',
  allowedRoles: process.env.wm_allowed_roles || "admin,subscriber,operator1-admin-role,operator2-admin-role,operator2-cc-role",
  apiContext: 'api'
};

module.exports = appConfig;
