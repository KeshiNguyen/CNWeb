<!DOCTYPE html>
<html>

<head>
    <title>Kết quả tính tuổi và số ngày chênh lệch</title>
</head>

<body>
    <h1>Kết quả tính tuổi và số ngày chênh lệch</h1>

    <?php
    if (isset($_POST["calculate"])) {
        $name1 = $_POST["name1"];
        $date1 = $_POST["date1"];
        $name2 = $_POST["name2"];
        $date2 = $_POST["date2"];

        $date1 = new DateTime($date1);
        $date2 = new DateTime($date2);

        $today = new DateTime();

        $age1 = $date1->diff($today)->y;
        $age2 = $date2->diff($today)->y;

        $diff = $date1->diff($date2);

        echo "<h2>Kết quả:</h2>";
        echo "<p>Tuổi của $name1: $age1 tuổi</p>";
        echo "<p>Tuổi của $name2: $age2 tuổi</p>";
        echo "<p>Số ngày chênh lệch giữa $name1 và $name2: " . $diff->days . " ngày</p>";
    }
    ?>
</body>

</html>