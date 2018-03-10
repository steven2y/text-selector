import { Injectable } from '@angular/core';

function getWindow (): any {
    return window;
}

@Injectable()
export class WindowRefService {
    public getWindow (): any {
        return getWindow();
    }
}
