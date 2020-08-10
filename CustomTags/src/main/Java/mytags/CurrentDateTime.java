package mytags;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class CurrentDateTime extends SimpleTagSupport{
	String color;
	String size;
	@Override
	public void doTag() throws JspException, IOException {
		JspWriter out = getJspContext().getOut();
		if (color != null && size !=null) {
			Date now = new Date();
			SimpleDateFormat ft = new SimpleDateFormat ("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
			out.write(String.format("<span style='color:%s; font-size:%s'>%s </span>", color, size,ft.format(now)));
			System.out.println("Current Date: " + ft.format(now));
		} else {
			out.write(String.format("<span>%s</span>", size));
		}
		
	}
	public void setColor(String color) {
		this.color = color;
	}

	public void setSize(String size) {
		this.size = size;
	}
}
