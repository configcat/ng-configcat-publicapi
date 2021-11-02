import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AuditLogsService } from './api/auditLogs.service';
import { ConfigsService } from './api/configs.service';
import { EnvironmentsService } from './api/environments.service';
import { FeatureFlagSettingValuesService } from './api/featureFlagSettingValues.service';
import { FeatureFlagSettingValuesUsingSDKKeyService } from './api/featureFlagSettingValuesUsingSDKKey.service';
import { FeatureFlagsSettingsService } from './api/featureFlagsSettings.service';
import { IntegrationLinksService } from './api/integrationLinks.service';
import { MeService } from './api/me.service';
import { MembersService } from './api/members.service';
import { OrganizationsService } from './api/organizations.service';
import { PermissionGroupsService } from './api/permissionGroups.service';
import { ProductsService } from './api/products.service';
import { SDKKeysService } from './api/sDKKeys.service';
import { TagsService } from './api/tags.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
