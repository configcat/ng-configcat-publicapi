1. Regenerate public api
Linux:
```docker run --rm -v ${PWD}/projects/ng-configcat-publicapi/src:/local openapitools/openapi-generator-cli:v7.12.0 generate -i https://api.configcat.com/docs/v1/swagger.json -g typescript-angular --additional-properties=ngVersion=20.0.3 -o /local```  
Windows: 
```docker run --rm -v %CD%/projects/ng-configcat-publicapi/src:/local openapitools/openapi-generator-cli:v7.12.0 generate -i https://api.configcat.com/docs/v1/swagger.json -g typescript-angular --additional-properties=ngVersion=20.0.3 -o /local```