import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import * as userActions from '../actions/usersActions';

@Injectable()
export class SaveUserEffects {
    save$ = createEffect(
        () => this.actionUnion$.pipe(
            ofType(userActions.saveUser),
            map((action) =>
                action.payload.newUser
                    ? userActions.updateUser({ payload: action.payload.user })
                    : userActions.addUsers({ payload: [action.payload.user] })
            )
        ));

    constructor(private actionUnion$: Actions) { }
}
