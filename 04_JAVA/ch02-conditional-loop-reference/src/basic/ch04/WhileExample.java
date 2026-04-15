package basic.ch04;

import java.util.Scanner;

public class WhileExample {
    public static void main(String[] args) {
        // while(조건) {반복시킬 코드}
        //

        Scanner scanner = new Scanner(System.in); // 키보드의 입력값을 받아옴

        int speed = 0;
        boolean run = false;

//        while (run) {
//            System.out.println("1. 증속 | 2. 감속 | 3. 중지");
//            System.out.print("선택 : ");
//            String strNum = scanner.nextLine(); // 키보드에서 입력한 내용을 읽음
//
//            if (strNum.equals("1")) {
//                speed++;
//                System.out.println("현재 속도 : " + speed);
//            } else if (strNum.equals("2")) {
//                speed--;
//                System.out.println("현재 속도 : " + speed);
//            } else if (strNum.equals("3")) {
//                run = false; // while문의 조건을 false
//            } else {
//                System.out.println("올바른 키를 입력하세요.");
//            }
//        }

        // do-while
        // 일단 1번은 무조건 실행 이후 조건 확인
        do {
            System.out.println("1. 증속 | 2. 감속 | 3. 중지");
            System.out.print("선택 : ");
            String strNum = scanner.nextLine(); // 키보드에서 입력한 내용을 읽음

            if (strNum.equals("1")) {
                speed++;
                System.out.println("현재 속도 : " + speed);
            } else if (strNum.equals("2")) {
                speed--;
                System.out.println("현재 속도 : " + speed);
            } else if (strNum.equals("3")) {
                run = false; // while문의 조건을 false
            } else {
                System.out.println("올바른 키를 입력하세요.");
            }
        } while (run);

        System.out.println("프로그램 종료");
    }
}
