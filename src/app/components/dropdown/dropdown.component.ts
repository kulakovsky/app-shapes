import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter, HostBinding,
    Input, OnDestroy,
    OnInit,
    Output,
    ViewEncapsulation
} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.sass'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
})
export class DropdownComponent implements OnInit, OnDestroy {

    @HostBinding('class.app-dropdown') private isDialogClassUsed = true;

    @Input() items: Array<string>;

    @Output() private selectItem$ = new EventEmitter();

    item: string;

    private destroy$ = new Subject();

    constructor() {
    }

    onSelectItem() {

        this.selectItem$.next(this.item);
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {

        this.destroy$.next();

        this.destroy$.unsubscribe();
    }

}
