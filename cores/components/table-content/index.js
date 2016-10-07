import { tableContentComponent } from './table-content.component';
import { tableContentService } from './services/table-content.service';

export * from './table-content.component';
export * from './services/table-content.service';

export var TABLE_CONTENT_DIRECTIVES = [ tableContentComponent ];
export var TABLE_CONTENT_PROVIDERS = [ tableContentService ];