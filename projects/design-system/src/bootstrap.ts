import { bootstrapApplication } from '@angular/platform-browser';
import { designSystemConfig } from './app/design-system.config';
import { DesignSystemComponent } from './app/components/design-system/design-system.component';

bootstrapApplication(DesignSystemComponent, designSystemConfig).catch((err) =>
  console.error('error bootstrap design-system - ', err)
);
