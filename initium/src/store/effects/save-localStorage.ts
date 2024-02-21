import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import * as userActions from '../actions/usersActions';
import * as modalActions from '../actions/modalActions';
import { UsersService } from "src/app/users/services/users.service";


@Injectable()
export class SaveLocalEffects {
    close$ = createEffect(
        () => this.actionUnion$.pipe(
            ofType(...[userActions.deleteUsers, userActions.addUsers, userActions.updateUser]),
            tap(() => this.userService.setLocalStorage())),
            { dispatch: false }
        );

    constructor(private actionUnion$: Actions, private userService: UsersService) { }
}



