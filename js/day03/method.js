const printer = {
  incoin: function (coin) {
    console.long(`${coin}이 추가되었습니다`);
  },

  print: () => {
    console.long('복사되었습니다');
  },

  off() {
    console.log('종료되었습니다');
  },
};

printer.incoin(300);
printer.print();
printer.off();
