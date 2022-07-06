import { AccountEntities, AccountModule } from "./account/account.module";

export const AppsMeta = {
  imports: [ /* the Module containing AccountRepo */ ],
  module: [AccountModule,],
  entities: [...AccountEntities],
};
