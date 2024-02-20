import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as userActions from '../actions/usersActions';
import * as modalActions from '../actions/modalActions';


@Injectable()
export class CloseModalEffects {
    close$ = createEffect(
        () => this.actionUnion$.pipe(
            ofType(...[userActions.deleteUsers]),
            map(() => modalActions.closeModal())
        ));

    constructor(private actionUnion$: Actions) { }
}
