// 12. Required<T>

/*
모든 속성이 required로 변경된 타입을 반환함
Partial과 반대됨
*/

interface AddressType {
  road_address: string;
  detail_address?: string;
  zipcode: string;
  lat?: number;
  lng?: number;
}

interface User {
  id1: number;
  name1?: string;
  username1: string;
  address1?: AddressType;
  phone1?: string;
  isAdmin1: boolean;
  isStaff1: boolean;
  level1?: number;
}

type UserDataType = Required<User> & {
  address: Required<AddressType>;
};
