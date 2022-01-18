import { applyDecorators, Render } from '@nestjs/common';
export interface ViewPath {
  path: string;
}
// Render /views/${path}
// Eg: views/pages/account/detail
export function View(view: ViewPath) {
  return applyDecorators(Render(`${view.path}`));
}
