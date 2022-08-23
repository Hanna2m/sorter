"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
const numberCollection = new NumberCollection_1.NumberCollection([1, 0, -5, 12, 9]);
numberCollection.sort();
console.log(numberCollection);
const charCollection = new CharacterCollection_1.CharacterCollection('XawB');
charCollection.sort();
console.log(charCollection);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(2);
linkedList.add(-1);
linkedList.add(45);
linkedList.add(-15);
linkedList.sort();
linkedList.print();
