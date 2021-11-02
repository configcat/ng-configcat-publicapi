1. Regenerate public api
Linux:
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v5.2.0 generate -i https://test-api.configcat.com/docs/v1/swagger.json -g typescript-angular --additional-properties=npmName=ng-configcat-publicapi,npmVersion=2.5.7,ngVersion=12.2.12 -o /local

Windows: 
docker run --rm -v ${PWD}:/local openapitools/openapi-generator-cli:v5.2.0 generate -i https://test-api.configcat.com/docs/v1/swagger.json -g typescript-angular --additional-properties=npmName=ng-configcat-publicapi,npmVersion=2.5.7,ngVersion=12.2.12 -o /local