# time-spent

It's a simple library to measure time spent by series of processes.

## Install

```bash
npm i --save time-spent
```

You can also clone this repository and make use of it yourself.

```bash
git clone https://github.com/Dvs-Bilisim/time-spent.git
cd time-spent
npm i
npm test
```

## Methods

- **create(name = '_', overwrite = false) :** Creates a new chunk with given name. If you set overwrite true, it will reset the chunk
- **save(label = '', name = '_') :** Calculates spending time and puts it into history. You can give it a label if you want
- **get(name = '_') :** Returns report for a single chunk
- **destroy(name = '_') :** Deletes a single chunk
- **flush() :** Deletes all chunks
- **all() :** Returns reports for all chunks

## Error Types

- **INVALID_CHUNK :** If you call save method with a non-existent chunk name (2nd parameter) this error will be fired.

## Simple Usage Example

```js
const TimeSpent = require('time-spent');

const time = new TimeSpent();
time.create(); // creates default chunk

// do some work #1
time.save('How long did #1 take?');

// do some work #2
time.save('How long did #2 take?');

console.log(JSON.stringify(time.all(), null, 4));
```

## Simple Usage Example for Multiple Chunks

```js
const TimeSpent = require('time-spent');

const time = new TimeSpent();
time.create('work1');
time.create('work2');

// do some work #1
time.save('How long did #1 take?', 'work1');

// do some work #2
time.save('How long did #2 take?', 'work2');

console.log(JSON.stringify(time.all(), null, 4));
```