1. Regenerate public api
Linux:
```docker run --rm -v ${PWD}/projects/ng-configcat-publicapi/src:/local openapitools/openapi-generator-cli:v6.6.0 generate -i https://test-api.configcat.com/docs/v1/swagger.json -g typescript-angular --additional-properties=ngVersion=15.2.9 -o /local```  
Windows: 
```docker run --rm -v %CD%/projects/ng-configcat-publicapi/src:/local openapitools/openapi-generator-cli:v6.6.0 generate -i https://test-api.configcat.com/docs/v1/swagger.json -g typescript-angular --additional-properties=ngVersion=15.2.9 -o /local```