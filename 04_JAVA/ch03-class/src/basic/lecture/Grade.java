package basic.lecture;

public enum Grade {

    //권한 인증인가설정시 USER / ADMIN

    //객체 형태로 쓰인다.
    A(95, "최우수"),
    B(85, "우수"),
    C(75, "보통");

    private final int score;
    private final String description;

    Grade(int score, String description) {
        this.score = score;
        this.description = description;
    }

    public int getScore() {
        return score;
    }

    public String getDescription() {
        return description;
    }
}
