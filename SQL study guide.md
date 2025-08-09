<h1> Zachc0de's SQL Study guide </h1>

<h2> How to create a Table & Query an Ip Log</h2>
<P1>CREATE TABLE IF NOT EXISTS ip_log ( <br>
id SERIAL PRIMARY KEY<BR>
source_ip INET<BR>
dest_ip INET <BR>
port INTERGER<BR>
protocol VARCHAR (10)<BR>
action VARCHAR (10)<BR>
bytes INTERGER <BR>
status VARCHAR (20) <BR>
-------------------------------------------------------------{CODE SUMMARY}----------------------------------------------------------
  
</P1>
<br>
<p2> --CREATE TABLE IF NOT EXISTS: Command that will create a a new database table **only if it does not already exist**.<BR><BR>
-- (ip_log: Name of the table to be created.)<BR><BR>
-- ID SERIAL PRIMARY KEY: PostgreSQL command that creates a speccial column for uniqely identiifying each row in a table. 




</p2>
