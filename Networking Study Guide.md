
<h1>Networking study Guide</h1>
<h3>Table of contents</h3>
<h4>Standards & Concepts</h4>
<p1>Osi & TCP/IP Models<br>
  Network Protocols<br>
  Network Services
  <h4>Adressing & Subnetting</h4>
 <P1>Ipv4 Adressing<br>
  Ipv6 Adressing <br>
  Subnetting & VLSM
  </P1> 
  <h4>Network Infrastructure</h4>
   <p1>Network Devices<br>
   Network Topologies<br>
   Cablaing & Standards<br>
   Wireless Networking
  </p1> 
  <h4>Network Operations</h4>
  <p1>Network Documentaiton<br>
  Peformance Monitoring<br>
  Device Configuration<br>
  <h4>Network Security</h4>
  <p1> Security Fundamentals <br>
  Acess Control <br>
  Security Devices 
  </p1>
  <h4> Network Troubleshooting </h4>
  <P>Troubleshooting Methodology<br>
  Common Network Issues<br>
  Network Tools<br>
  Layer-specific Troubleshooting                                 
  </P>
    
  </h4>
  
    
  </p1>

<h2>The Seven layers of Osi Model</h2>

<h3>Layer 7:Application</h3>
  <h4>The closet layer to the end user. Provides network services diretly to applications and handles user interface and application-specific netwokring functions.</h4>
  <p1>This where network applications and their protocols operate. It is what users directly interact with- web browsers, email clients, file transfer programs. Protocols include HTTP/HTTPS</p1>
  <h5> Example: HTTP/HTTPS, FTP, SMTP, DNS, Web Browsers & Email Clients </h5>
<h3>Layer 6:Presentation Layer</h3>
<h4>Handles data formatting, encryption,compression, and translation.</h4>
<p1>Ensures Data from the application is readable by the receiving system</p1>
 <h5> Example: SSL/TLS, JPEG, GIF,ASCII,Encryption & Compression </h5>
<h3>Layer 5: Session Layer</h3>
<h4> Manages communication sessions between applications.</h4>
<p1> It establishesm, maintains, and terminates connections, handlings things like authentication and session checkpoints for recovery2</p1>
 <h5> Example:SQL Sessions,RPC,NetBIOS, PPTP, Session Managment </h5>
<h3>Layer 4:Transport Layer</h3>
<h4>Provides reliable data transfer between end systems. TCP (reliable connection-oriented) & UDP (Fast connectionless) operate here.</h4>
<p1> This layer handles segmentation,flow control and error recovery</p1>
 <h5> Example:TCP,UDP,Port Numbers,Segmentation,Flow Control </h5>
<h3>Layer 3: Network Layer</h3>
<h4>Handles routing & forwarding of data packets between different networks, Determines the best path for data to travel across networks</h4>
<p1>Reposnbile for routing data between different netwroks. IP (Internet Protocol) operates at this layer, determing the best path for data packets to reach their destinatoin across multiple networks.</p1>
 <h5> Example:IP (IPv4/Ipv6),Routers,ICMP,OSPF,BGP </h5>
<h3>Layer 2: Data Link Layer</h3>
<h4>Provides node-to-node transfer and handles error correction from the physical layer. Creates & manages connectinons between adjacent network nodes</h4>
<p1>Handles communication between adjacent network nodes on the same physical network, Ethernet opeartes here manging MAC addresses and ensuring reliable transmission over the phsyical meduim</p1>
 <h5> Example:Ethernet,Wifi (802.11), Switches, MAC Addresses & PPP </h5>
<h3>Layer 1: Physical Layer</h3>
<h4>Trasmits raw bit sreams over physical media.</h4>
<p1>The Actual hardware cables,wireless signals, voltage levels and timing it defines the electrical and physical specifications for transmitting raw bits</p1>
 <h5> Example:Cables, Fiber Optic,Radio Waves, Hubs & Electrical Signals </h5>
 <br>
  <h2> The Four Layers of TCP/IP Model</h2>
 <h3>Application Layer</h3>
 <h4>Location of operation for network applications & their protocols</h4>
 <p>
  The layer closest to the end-user & provides netowrk services directly to applications
 </p>
 <h5>
   Examples: Web browsing (HTTP/HTTPS), Email (SMTP/POP3, File transfer (FTP), Domain name resoultion (DNS) & Telnet
 </h5>
 
 <h3>Transport Layer</h3>
 <h4>Provides relaibile data transfer services between applications</h4>
 <p>Handles error recovery, flow control & ensures data intergrity</p>
 
 <h5>Examples: TCP: Web browsing, email, file downloads, (reliable) <br>
  UDP:Video streaming, Online gaming, DNS quereies (fast)
   
 <h3>Internet Layer</h3>
<h4> Handles the movement of packets around the network </h4>
<p1>Responsible for addressing,routing & packet fowarding across multiple networks</p1>
<h5>Examples: IP addressing (192.168.1.1), Routing between networks, Ping commands (ICMP), Finding MAC addresses (ARP)</h5>
 
 <h3>Network Access Layer</h3>
 <h4>Combines physical & data link functions</h4>
 <p1>Handles the physical transmission of data & local network addressing using MAc addresses</p1>
 <h5>Examples: Ethernet cables, Wifi connections, Network Swithces & Network interface cards</h5>
 <br>
 
 <h2>Network Protocols</h2>
 <h3>TCP:Transmission Control Protocol</h3>
 <h4> A reilable transport protocol that ensures data arrives complete and in order</h4>
<p>Almost like sending a registred letter, you get confimration that it was delivered</p>
   <h5> Example: When downloading a file,TCP breaks it into packets,numbers them, and snrues they all arrie correctly. If any packets arelost, TCP requests them again.
   </p>
 <h3>UDP:User Data Protocol)</h3>
 <h4> A fast but unreliable transport protocol. It sends data quickly without checking if it arried - like throwing a paper airline across the room.
 <h5> Example: Online gaming & live video streaming use UDP because speed matters more than perfect delivery. A few lost packets wont ruin the expreience. </h5>  
<h3> HTTP:HyperText Transfer Protocol </h3>
<h4>The foundation of web communication.</h4>  
<p>Everytime you vist a website, your browser uses HTTP to reqeust & receie web pages,images & other content from web servers</p>
<h5>When you type "http://example.com" in your browser,it sends a HTTP GET reqeyest to tge server, which resopnds with the websites's HTML content. </h5>   
   <h3>HTTPS:HTTP Secure</h3>
   <h4> HTTP with an extra layer of secuirty.</h4>
     <p>All data is encrypted using SSL/TLS, making it safe to send sensitie information like passwords & credit cards </p>
     <h5> Online banking websites use HTTPS (notice the padlock icon 🔒 in your browser) to ensure fiancial data is encrypted during transmission.
 <h3>FTP:File Transfer Protocol</h3>
 <h4> A protocol desinged specifically for transferring files between computers.</h4>
 <p>Conisder as a specilized delivery service for digital files, Secudre, feature rich, needs login, uses TCP</p> 
 <h5> Example: Web developers use FTP to upload website files to web servers.<br> You can connect to       ftp://files.example.com  to download or upload files.
   <h3>TFTP:Trival File Transfer Protocol</h3>
 <h4>Simple no-authentication file transfer ,
   <p1> mainly for network device booting using UDP</p1>
   <h5>Example: A Cisco router boots up -> sends TFTP reqeuest -> downloads its IOS firmware from server-> starts operating. No login needed, just "get firmware.bin"</h5>
 <h3>SMTP:Simple Mail Transfer Protocol</h3>
   <h4>The postal service of the internet</h4>
   <p>SMTP handles sending emails from your email client to mail servers & between mail servers across the internet</p>
   <h5>Example: When you hit "Send" on an email, SMTP carries it from your email app to your mail server, then to the recipient's mail server</h5>
 <h3>DNS:Domain Name System</h3>
 <h4>The Internets Phonebook</h4>  
 <p>It translates human-readable domain names (like google.com) into IP addresses (172.217.164.110) that computers can understand</p> 
   <h5>Example:When you type wwww.google.com, DNS servers lookup & return Google's IP address so your browser knows where to connect</h5>
 <h3>SSH:Secure SHell</h3>
 <h3>IMAP</h3>
 <h3>POP3</h3>
 <h3>DHCP operations</h3>
 <h3>SNMP</h3>
 <h3>Telnet</h3>
 <h3>SSH</h3>
 <h3>Port Numbers</h3>

<h2>Network Services</h2>
<h3>DHCP configuartion & troubleshooting</h3>
<h3> DNS resoultion process</h3>
<h3> NAT/PAT operations</h3>
<h3>Quality of Service (Qos) basics</h3>
<h3>Network Time Protocol (NTP)</h3> 
