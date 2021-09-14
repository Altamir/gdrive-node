import {
    describe,
    test,
    expect
} from '@jest/globals'

import Routes from '../../scr/routes.js'

describe('#Routes test suite', () => {
    describe('#Teste set socket', () => {
        test('setSocket should store io', () => {
            const route = new Routes()
            const ioObj = {
                to: (id) => ioObj,
                emit: (event, message) => { }
            }
            route.setSocketIO(ioObj)
            expect(route.io).toStrictEqual(ioObj)
        })
    })
    test('#teste teste', () => {
        expect(true).toBeTruthy()
    })
})