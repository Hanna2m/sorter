import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const numberCollection = new NumberCollection([1,0,-5,12,9])
numberCollection.sort();
console.log(numberCollection);

const charCollection = new CharacterCollection('XawB');
charCollection.sort();
console.log(charCollection)

const linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(-1);
linkedList.add(45);
linkedList.add(-15);

linkedList.sort()
linkedList.print()
