
<html>
<head>		<title>NumberQuiz</title>
</head>
<body onload='javascript:myform.txtAnswer.focus()'>
<form name='myform' action="quiz" method='post'>
    <h3>Have fun with NumberQuiz!</h3>
    <p>Your current score is 0.</p>
    <p>Guess the next number in the sequence!</p>
    <p>[3, 1, 4, 1, 5, <font style='color:red'><b> ? </b></font>]</p>
    <p>Your answer:<input type='text' name='txtAnswer' value='' /></p>
    <p><input type='submit' name='btnNext' value='Next' /><input type='submit' name='btnStart' value='Restart!' /></p>
</form>
</body>
</html>
