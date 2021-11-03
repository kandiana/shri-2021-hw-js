const SINGLE_ENTRY_TYPES = ['boolean', 'string', 'number', 'object', 'function', 'symbol'];

module.exports = class {
  constructor(data) {
    this.value = [];

    if (data !== undefined || data !== null) {
      if (Array.isArray(data)) {
        data.forEach((el) => {
          if (!this.value.includes(el)) {
            this.value.push(el);
          }
        });
      } else {
        this.value.push(data);
      }
    }

    this.size = this.value.length;
  }

  [Symbol.iterator] = function () {
    let i = 0;
    return {
      next: () => {
        return {
          done: i < this.size ? false : true,
          value: this.value[i++],
        };
      },
    };
  };

  add(data) {
    if (data !== undefined || data !== null) {
      if (Array.isArray(data)) {
        data.forEach((el) => {
          if (!this.value.includes(el)) {
            this.value.push(el);
          }
        });
      } else {
        if (!this.value.includes(data)) {
          this.value.push(data);
        }
      }
    }

    this.size = this.value.length;
  }

  clear() {
    this.value = [];
    this.size = 0;
  }

  delete(data) {
    this.value = this.value.filter((el) => el !== data);
    this.size = this.length;
  }

  keys() {
    return this.value;
  }

  values() {
    return this.value;
  }

  entries() {
    return this.value.map((el) => [el, el]);
  }
};
