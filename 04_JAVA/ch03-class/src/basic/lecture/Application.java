package basic.lecture;

public class Application {

    public static void main(String[] args) {
        Student student = new Student("동현", Grade.A);

        System.out.println(student.grade);
        System.out.println(student.grade.getDescription());
    }
}
