
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>quizOver</title>
</head>
<body>
<p style="color:red">Quiz is over!</p>

            <form name='myform' method='post' action="quiz">
            <input type='text' name='txtAnswer' hidden value='' />
              <input type='submit' name="reset" value="Start Again!" />
            </form>
</body>
</html>
