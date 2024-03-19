// 05. getters / setters

// private으로 설정한 프로퍼티를 읽거나 새로운 값을 할당할 때 사용

class C {
  private _count = 0;
  get count() {
    return this._count;
  }
  set count(value) {
    this._count = value;
  }
}

const c = new C();
c.count = 10;
console.log(c.count); // 10
