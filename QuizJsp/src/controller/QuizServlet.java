package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Quiz;

/**
 * Servlet implementation class QuizServlet
 */
@WebServlet("/quiz")
public class QuizServlet extends HttpServlet {
	 /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
	            throws IOException, ServletException {
	
	       doPost(request,response);
	    }

	    protected void doPost(HttpServletRequest request, HttpServletResponse response)
	            throws IOException, ServletException {
	        String btn = request.getParameter("reset");
	        if (btn != null) {
	            HttpSession session = request.getSession();
	            session.removeAttribute("quiz");

	        }
	        String answer = request.getParameter("txtAnswer");
	        HttpSession session = request.getSession();
	        Quiz quiz = (Quiz) session.getAttribute("quiz");
	        RequestDispatcher dis=request.getRequestDispatcher("/WEB-INF/Views/quizPage.jsp");

	       try {
	    	   if (quiz == null) {
	      
	            quiz = new Quiz();
	            session.setAttribute("quiz", quiz);
	            dis.forward(request,response);
	        }
	    	boolean check = quiz.isCorrect(answer);
	        if(quiz.getCurrentQuesitionIndex()>4 && check==true ) {
	        	dis=request.getRequestDispatcher("/WEB-INF/Views/QuizOverPage.jsp");
	        	dis.forward(request, response);
	        }
	       
	       
	        if(check==true && quiz.getCurrentQuesitionIndex()<=4) {
	        	request.setAttribute("wrongAnswer", "");         	
            	 dis.forward(request, response);
            }else {
            	request.setAttribute("wrongAnswer", "Your last answer was not correct! Please try again");
            	dis.forward(request,response);
            }
       
	        if (btn != null) {
	            check = false;
	        }
	       }
	       catch(Exception e) {
	    	   
	       }
	    }
	}