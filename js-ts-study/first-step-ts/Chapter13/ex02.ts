// 02. Partial<T>

/*
모든 속성을 옵셔널로 변경된 타입으로 반환함
Partial : 부분적인
*/

interface User {
  id: number;
  name: string;
  username: string;
  address: {
    road_address: string;
    detail_address: string;
    zipcode: string;
    lat: number;
    lng: number;
  };
  phone: string;
  isAdmin: boolean;
  isStaff: boolean;
  level: number;
}

type UserFormType = Partial<User>;
