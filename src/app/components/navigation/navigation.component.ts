import { Component, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  @ViewChild('drawer') drawer!: MatSidenav;
  searchValue: string = '';
  @Output() searchValueChanged = new EventEmitter<string>();


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  toggleSidenav() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }

  onSearch() {
    this.searchValueChanged.emit(this.searchValue);
  }
}