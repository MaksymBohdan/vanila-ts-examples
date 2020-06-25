type Person = {
  name: string;
  age: number;
};

type ExtendedPerson = Person & {
  extendedValue: any;
};

const person: ExtendedPerson = {
  age: 22,
  extendedValue: 'aaa',
  name: 'asdsa',
};

/**
 1 interface merging vs type merging
 2 class inheritance with interfaces
 3 interface inheritance with few interfacres
 4 tsc index.ts - compiling
 5 access modificators (private, public, readonly)
 6 function overloading
 7 namespace similar to IIFE
 8 abstract class - class that might have undescribed methods, which will be described in a child classs
 9 generics
 10 keyof + extends keyof
 11 infer - only in conditional types for identifiing of type
 12 Utils Partial
 13 Utils Required opposeite to Partial
 14 Utils MyNonNullable
 15 Utils Record
 16 Utils Readonly && ReadonlyArray === as const
 17 Utils Pick <Type, prop | prop>
 18 Utils Extract take common from 2 types
 19 Utils Exclude take unique from 2 types
 20 Utils Omit opposite to Pick
 21 Parametrs cortege of fn/class params type A = typeof ClassA => type B = Parametrs <A>
  ConstructorParameters,InstanceType for gettint params and type of constructor and ReturnType fot fn
 22 bigInt = const a: bigin = 10n
 23 ?? && ? operators
 24 ! operator , keyword is 

 **/

// generics for function
interface IParams {
  name: string;
}

const printName = <T extends IParams>(params: T) => {
  console.log(params.name);
};
//

// interface IObject {
//   a: string;
//   b: string;
//   c: string;
// }
// type TKey = keyof IObject;

const getProperty = <ObjectType, KeyType extends keyof ObjectType>(
  obj: ObjectType,
  key: KeyType
) => {
  return obj[key];
};

const arr = [1, 'string', true];
type A<T> = T extends (infer U)[] ? U : never;
type ArrayType = typeof arr;
type C = A<ArrayType>;

// type check 24
class FrontedDeveloper {
  canCreateRestApi: boolean = false;
}

class BackendDeveloper {
  canCreateRestApi: boolean = true;

  createRestApi() {
    return 'api';
  }
}

function isBackendDeveloper(developer: any): developer is BackendDeveloper {
  return developer.createRestApi;
}

function createApi(developer: FrontedDeveloper | BackendDeveloper) {
  // if(developer.canCreateRestApi){
  //   developer. ???
  // }

  if (isBackendDeveloper(developer)) {
    developer.createRestApi();
  }
}
