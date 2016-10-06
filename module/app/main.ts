import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BonusMilesModule} from "./bonus-miles.module";

platformBrowserDynamic().bootstrapModule(BonusMilesModule)
  .catch(err => console.error(err));
