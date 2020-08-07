package edu.miu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/calculate")
public class Calculator extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();


        out.print("<html><head><title>Calculator</title></head><body>");
        out.print("<h3>Simple Calculator Lab</h3>");
        out.print("<form method='post'>");
        try {
            if ((request.getParameter("operand1") != null) && (request.getParameter("operand2") != null)) {
                int op1 = Integer.parseInt(request.getParameter("operand1"));
                int op2 = Integer.parseInt(request.getParameter("operand2"));
                int result1 = op1 + op2;
                out.print("<input " + "value=" + op1 + " name='operand1' style='width:50px' " + " />");
                out.print("+ <input " + "value=" + op2 + " name='operand2' style='width:50px' " + " />");
                out.print("= <input " + "value=" + result1 + " name='result1' style='width:50px' disabled" + " />");
            }
        }
        catch (Exception e){
            out.print("<input " + " name='operand1' style='width:50px' " + " />");
            out.print("+ <input type=number " + " name='operand2' style='width:50px' " + " />");
            out.print("= <input type=number " + " name='result1' style='width:50px' disabled" + " />");
        }
        try {
            if ((request.getParameter("operand3") != null) && (request.getParameter("operand4") != null)) {
                int op3 = Integer.parseInt(request.getParameter("operand3"));
                int op4 = Integer.parseInt(request.getParameter("operand4"));
                int result2 = op3 * op4;
                out.print("<br />" + "<input " + "value=" + op3 + " name='operand3' style='width:50px' " + " />");
                out.print("* <input " + "value=" + op4 + " name='operand4' style='width:50px' " + " />");
                out.print("= <input " + "value=" + result2 + " name='result' style='width:50px' disabled" + " />");
            }
        }
        catch (Exception e){
            out.print("<br />" + "<input " + " name='operand3' style='width:50px' " + " />");
            out.print("* <input type=number " + " name='operand4' style='width:50px' " + " />");
            out.print("= <input type=number " + " name='result2' style='width:50px' disabled" + " />");
        }
        out.print("<br />"+"<input type='submit''  value='Submit' >");
        out.print("</form>");
        out.print("</body></html>");

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


    }
}
