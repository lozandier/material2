/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatCommonModule} from '@angular/material/core';
import {SimpleSnackBar} from './simple-snack-bar';
import {MatSnackBar} from './snack-bar';
import {MatSnackBarContainer} from './snack-bar-container';


@NgModule({
  imports: [
    OverlayModule,
    PortalModule,
    CommonModule,
    MatCommonModule,
  ],
  exports: [MatSnackBarContainer, MatCommonModule],
  declarations: [MatSnackBarContainer, SimpleSnackBar],
  entryComponents: [MatSnackBarContainer, SimpleSnackBar],
  providers: [MatSnackBar]
})
export class MatSnackBarModule {}
