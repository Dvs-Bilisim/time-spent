'use strict';

class TimeSpent {
    constructor() {
        this.flush();
    }

    create(name = '_', overwrite = false) {
        if (!this._names.includes(name)) this._names.push(name);

        if (!this._chunks.hasOwnProperty(name) || overwrite) {
            const now = Date.now();
            this._chunks[name] = { started: now, history: [] };
        }
    }

    save(label = '', name = '_') {
        if (!this._names.includes(name) || !this._chunks.hasOwnProperty(name))
            throw new Error('INVALID_CHUNK');

        const from = this._chunks[name].saved || this._chunks[name].started;
        const saved = Date.now();
        this._chunks[name].history.push([ label, saved - from ]);
        this._chunks[name].saved = saved;
    }

    get(name = '_') {
        if (!this._chunks.hasOwnProperty(name)) return undefined;

        return {
            name,
            started: this._chunks[name].started,
            finished: this._chunks[name].saved,
            history: this._chunks[name].history
        };
    }

    all() {
        const report = [];
        for (let name of this._names) {
            const chunk = this.get(name);
            if (chunk) report.push(chunk);
        }
        return report;
    }

    destroy(name = '_') {
        if (this._names.includes(name))
            this._names.splice(this._names.indexOf(name), 1);
        if (this._chunks.hasOwnProperty(name)) delete this._chunks[name];
    }

    flush() {
        this._names = [];
        this._chunks = {};
    }
}

module.exports = TimeSpent;
