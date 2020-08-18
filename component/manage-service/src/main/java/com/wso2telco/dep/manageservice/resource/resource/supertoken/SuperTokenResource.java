/*
 * Copyright (c) 2016, WSO2.Telco Inc. (http://www.wso2telco.com) All Rights Reserved.
 * <p>
 * WSO2.Telco Inc. licences this file to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.wso2telco.dep.manageservice.resource.resource.supertoken;

import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import com.wso2telco.core.dbutils.exception.BusinessException;
import com.wso2telco.dep.manageservice.resource.service.supertoken.SuperTokenService;
import com.wso2telco.dep.manageservice.resource.util.Environment;
import com.wso2telco.dep.manageservice.resource.util.ErrorHandler;

@Path("/super-token")
@Consumes("application/json")
@Produces("application/json")
public class SuperTokenResource {

    private static final Logger logger = Logger.getLogger(SuperTokenResource.class.getName());

    @GET
    public Response generate(@QueryParam("environment") Environment environment) {
        try {
            return Response.status(Response.Status.OK).entity(new SuperTokenService().generate(environment)).build();
        } catch (BusinessException e) {
            logger.log(Level.SEVERE, e.getMessage(), e);
            return ErrorHandler.createErrorResponse(e);
        }
    }

}