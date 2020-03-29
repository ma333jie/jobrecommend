# job Search 

aws deploy url http://13.59.191.227/jupiter/ 


## Summarize the important conceptualized method and big ideas of this project


## Part 1. Conceptual Questions

1. Environment 
<ul> 
	<li> Jave EE  = Jave SE(Standard Edition) + APIs + protocals </li>
	<li>  Servlet is a java class that used to send Http Request </li>
	<li> The Apache Tocat is a software that implemente Java Servlet</li>
		<ul>Servelet Example
			<li>Search</li>
			<li>Login</li>
		</ul>
</ul>
 
 2. RESTful API 
<ul>
	<li>Resource Representation State transfer API</li>
	<li>use URL uniquely identifiles</li>
	<li>build on Http request</li>
	<li>Uses a stateless request model. There is dependency between each call </li>

	<li>Server doesn't need to parse extra thing</li>
	<li>Easy to be understand by client</li>
	<li>Improve Scalability</li>
</ul>

3. Builder Pattern 
Standard construct patterrn 
if we do not use builder pattern, we would have a lot of constructor for different argument. It is called Item.java in this program

4. Database MySQL?
CAP: consistence, availiability, patition tolerance 
     relationahip, mysql, replica
relationship DB (table, mysql) makes sure it is consistence. It to update the database to aquire the data. so availiability may not be there if it must be consistant. 
no many data 
(noSQL)If you can access the database all the time, it may not be the updated version. 
MySQL high conistency, NoSQL high availability 

5. Recommendation method 
<ul>
	<li>Content base:I said I like ice cream, it recommend me ice cream</li>
	<li>User base: My friends all like ice cream, it will recommend me ice cream, similiarity between user</li>
	<li>Item base: I purchased a ruler, people who purchased a ruler also purchased ice cream. it will recomend me ice cream, similarity between item</li>
</ul>

6. Session 
 Session is a conversational state. How? request.getSession()
 session stores in server
 cookie: storer in browser, things server reply 





