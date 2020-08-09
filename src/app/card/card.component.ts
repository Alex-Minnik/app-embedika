import {Component, OnInit} from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { Ships, Query } from '../types';

@Component ({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
    ships: Observable<Ships[]>;
    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.ships = this.apollo.watchQuery<Query>({
            query: gql`
                query allShips {
                    allShips {
                        type
                        name
                        home_port
                    }
                }
            `
        })
            .valueChanges
            .pipe(
                map(result => result.data.allShips)
            );
    }
}