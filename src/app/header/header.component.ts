import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'

})

export class HeaderComponent implements OnInit , OnDestroy {
    isAuthenticated = false ;

    private userSub : Subscription;

    // @Output() selectedFeature = new EventEmitter<string>();

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService) { }

    ngOnInit(): void {
        this.userSub = this.authService.user.subscribe(user =>{
            this.isAuthenticated= !!user ;
        });
    }

    // onSelect(feature: string) {
    //     this.selectedFeature.emit(feature);
    // }

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchData().subscribe();
    }

    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
}