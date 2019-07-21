#!/usr/bin/env node

'use strict';

const TimeSpent = require('..');

const time = new TimeSpent();
time.create();

test('time spent', () => {
    expect(time.get().name).toEqual('_');
});
