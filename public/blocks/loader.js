'use strict';

import _ from 'lodash';
import $ from 'jquery';

alert(1);

class Loader {
    constructor() {
        console.log('Loader contructor.');
        // noop
    }
    load(block) {
        $.ajax();
    }
}
