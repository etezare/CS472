package edu.miu.cs472;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {
    /**
     *
     */

    private static final long serialVersionUID = -4827943494714182705L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {

        doPost(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        String btn = request.getParameter("reset");
        if (btn != null) {
            HttpSession session = request.getSession();
            session.removeAttribute("quiz");
        }
        String answer = request.getParameter("txtAnswer");
        HttpSession session = request.getSession();
        Quiz quiz = (Quiz) session.getAttribute("quiz");

        if (quiz == null) {
            quiz = new Quiz();
            session.setAttribute("quiz", quiz);
        }
        PrintWriter out = response.getWriter();
        boolean check = quiz.isCorrect(answer);
        if (btn != null) {
            check = true;
        }
        if (quiz.getCurrentQuesitionIndex() > 4) {
            genQuizOverPage(out);
        }

        genQuizOverPage(quiz, out, quiz.getCurrentQuestion()[quiz.getCurrentQuesitionIndex()], check, answer);
    }

    private void genQuizOverPage(Quiz sessQuiz, PrintWriter out, String currQuest, boolean error, String answer) {
        out.print("<html>");
        out.print("<head>");
        out.print("</head>");
        out.print("<body>");
        out.print("	<form method='post'>");
        out.print("	<title>NumberQuiz</title>");
        out.print("		<h3>Have fun with NumberQuiz!</h3>");
        out.print("<p>Your current score is: ");
        out.print(sessQuiz.getNumCorrect() + "<br/>");
        out.print("<p>Guess the next number in the sequence!</p> ");
        out.print("<p>" + currQuest + "<span style=\"color: red\"> ?</span>]</p>");

        out.print("<p>Your answer:<input type='text' name='txtAnswer' value='' /></p> ");

        /* if incorrect, then print out error message */
        if (!error && (answer != null)) {  //REFACTOR?-- assumes answer null only when first open page
            out.print("<p style='color:red'>Your last answer was not correct! Please try again</p> ");
        }
        out.print("<p><input type='submit' name='btnNext' value='Next' /> <input type='submit' name='reset' value='Restart!' /></p>\n" +
                "\t</form></p> ");

        out.print("</form>");
        out.print("</body></html>");
    }

    private void genQuizOverPage(PrintWriter out) {
        out.print("<html> ");
        out.print("<head >");
        out.print("<title>NumberQuiz is over</title> ");
        out.print("</head> ");
        out.print("<body> ");
        out.print("<p style='color:red'>The number quiz is over!</p>");
        out.print("	<form method='post'>");
        out.print("<input type='text' name='txtAnswer' hidden value='' />");
        out.print("<input type='submit' name='reset' value='Start Again!' />");
        out.print("</form>  </body> ");
        out.print("</html> ");
    }
}
