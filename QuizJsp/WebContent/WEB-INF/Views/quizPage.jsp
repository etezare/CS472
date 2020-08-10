<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Number Quiz - JSP Version</title>
</head>
<body>
            <form name='myform' method='post' action="quiz">

                <h3>Have fun with Number Quiz!</h3>
                <p>Your current score is ${quiz.score}.</p>
                  <p>Guess the next number in the sequence!</p>
                <p>
                    <%-- Displays the question in a formatted form --%>
                    ${quiz.getQuestion()}<font style='color:red'><b> ? </b></font>]</br>
                </p>
                <p>Your answer:<input type='text' name='txtAnswer' value='' /></p>
                <font style='color:red'><b>${wrongAnswer}</b></font>
                <p>
                    <input type='submit' name="submit" value="Next" />
                    <input type='submit' name="reset" value="Reset" />
                </p>
            </form>
        </body>
</html>
