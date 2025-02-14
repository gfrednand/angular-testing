import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHasPermission]',
  standalone: true,
})
export class HasPermissionDirective {
  private rendered = false;

  @Input()
  set appHasPermission(val: string | string[]) {
    if (!this.rendered) {
      if (['admin', 'superadmin'].includes(val as string)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.rendered = true;
      } else {
        this.viewContainer.clear();
      }
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    console.log('HasPermission directive created');
  }
}
