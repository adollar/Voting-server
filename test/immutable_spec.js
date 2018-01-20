import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }

        describe('A list', () => {
            function addMovie(currentState, movie) {
                return currentState.update('movies', movies => movies.push(movie))
            }

            it('is immutable', () => {
                let state = Map({
                    movies: List.of('Tran', 'Blo')
                });
                let nextState = addMovie(state, 'Sunsh');

                expect(nextState).to.equal(Map({
                    movies: List.of(
                        'Tran',
                        'Blo',
                        'Sunsh'
                    )
                }));
            })
        })
    });
});