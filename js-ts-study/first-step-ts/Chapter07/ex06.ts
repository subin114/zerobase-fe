// 06. 전역 프로퍼티 (Static Members)

/*
- static 키워드 사용
- 인스턴스를 생성하지 않고도 클래스의 프로퍼티나 메서드에 접근할 수 있음
*/

class Student2 {
  static score = 100;

  static printScore() {
    console.log(Student2.score);
  }
}

console.log(Student2.score);
Student2.printScore();
