#  Licensed to the Apache Software Foundation (ASF) under one or more
#  contributor license agreements. See the NOTICE file distributed with
#  this work for additional information regarding copyright ownership.
#  The ASF licenses this file to You under the Apache License, Version 2.0
#  (the "License"); you may not use this file except in compliance with
#  the License. You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

# generated by datamodel-codegen:
#   filename:  schema/api/services/createDatabaseService.json
#   timestamp: 2021-07-31T17:12:10+00:00

from __future__ import annotations
from typing import Optional
from pydantic import BaseModel, Field, constr
from metadata.generated.schema.entity.services import databaseService
from metadata.generated.schema.type import jdbcConnection, schedule


class CreateDatabaseServiceEntityRequest(BaseModel):
    name: constr(min_length=1, max_length=64) = Field(
        ..., description='Name that identifies the this entity instance uniquely'
    )
    description: Optional[str] = Field(
        None, description='Description of Database entity.'
    )
    serviceType: databaseService.DatabaseServiceType
    jdbc: jdbcConnection.JdbcInfo
    ingestionSchedule: Optional[
        schedule.TypeUsedForScheduleWithStartTimeAndRepeatFrequency
    ] = Field(None, description='Schedule for running metadata ingestion jobs')
