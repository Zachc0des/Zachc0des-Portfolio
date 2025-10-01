
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
  <h4>The closest layer to the end user. Provides network services directly to applications and handles user interface and application-specific networking functions.</h4>
  <p1>This is where network applications and their protocols operate. It is what users directly interact with- web browsers, email clients, and file transfer programs. Protocols include HTTP/HTTPS</p1>
  <h5> Example: HTTP/HTTPS, FTP, SMTP, DNS, Web Browsers & Email Clients </h5>
<h3>Layer 6:Presentation Layer</h3>
<h4>Handles data formatting, encryption, compression, and translation.</h4>
<p1>Ensures Data from the application is readable by the receiving system</p1>
 <h5> Example: SSL/TLS, JPEG, GIF, ASCII, Encryption & Compression </h5>
<h3>Layer 5: Session Layer</h3>
<h4> Manages communication sessions between applications.</h4>
<p1> It establishes, maintains, and terminates connections, handling things like authentication and session checkpoints for recovery2</p1>
 <h5> Example: SQL Sessions, RPC, NetBIOS, PPTP, Session Management </h5>
<h3>Layer 4:Transport Layer</h3>
<h4>Provides reliable data transfer between end systems. TCP (reliable connection-oriented) & UDP (Fast connectionless) operate here.</h4>
<p1> This layer handles segmentation, flow control, and error recovery</p1>
 <h5> Example: TCP, UDP, Port Numbers, Segmentation, Flow Control </h5>
<h3>Layer 3: Network Layer</h3>
<h4>Handles routing & forwarding of data packets between different networks, determines the best path for data to travel across networks</h4>
<p1> Responsible for routing data between different networks. IP (Internet Protocol) operates at this layer, determining the best path for data packets to reach their destination across multiple networks.</p1>
 <h5> Example:IP (IPv4/Ipv6),Routers,ICMP,OSPF,BGP </h5>
<h3>Layer 2: Data Link Layer</h3>
<h4>Provides node-to-node transfer and handles error correction from the physical layer. Creates & manages connections between adjacent network nodes</h4>
<p1>Handles communication between adjacent network nodes on the same physical network, Ethernet operates here, managing MAC addresses and ensuring reliable transmission over the physical medium </p1>
 <h5> Example: Ethernet, Wifi (802.11), Switches, MAC Addresses & PPP </h5>
<h3>Layer 1: Physical Layer</h3>
<h4> Transmits raw bit streams over physical media.</h4>
<p1>The Actual hardware cables, wireless signals, voltage levels, and timing define the electrical and physical specifications for transmitting raw bits</p1>
 <h5> Example :Cables, Fiber Optic, Radio Waves, Hubs & Electrical Signals </h5>
 <br>
  <h2> The Four Layers of TCP/IP Model</h2>
 <h3>Application Layer</h3>
 <h4>Location of operation for network applications & their protocols</h4>
 <p>
  The layer closest to the end-user & provides network services directly to applications
 </p>
 <h5>
   Examples: Web browsing (HTTP/HTTPS), Email (SMTP/POP3, File transfer (FTP), Domain name resolution (DNS), & Telnet
 </h5>
 
 <h3>Transport Layer</h3>
 <h4>Provides reliable data transfer services between applications</h4>
 <p>Handles error recovery, flow control & ensures data intergrity</p>
 
 <h5>Examples: TCP: Web browsing, email, file downloads, (reliable) <br>
  UDP: Video streaming, Online gaming, DNS queries (fast)
   
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
 <h4> A reliable transport protocol that ensures data arrives complete and in order</h4>
<p>Almost like sending a registered letter, you get confirmation that it was delivered</p>
   <h5> Example: When downloading a file, TCP breaks it into packets, numbers them, and assembles them all correctly. If any packets are lost, TCP requests them again.
   </p>
 <h3>UDP:User Data Protocol</h3>
 <h4> A fast but unreliable transport protocol. It sends data quickly without checking if it arrived - like throwing a paper airplane across the room.
 <h5> Example: Online gaming & live video streaming use UDP because speed matters more than perfect delivery. A few lost packets won't ruin the experience. </h5>  
<h3> HTTP:HyperText Transfer Protocol </h3>
<h4>Port #80 | The foundation of web communication.</h4>  
<p> Every time you visit a website, your browser uses HTTP to request & receive web pages, images & other content from web servers</p>
<h5>When you type "http://example.com" in your browser,it sends a HTTP GET request to the server, which responds with the website's HTML content. </h5>   
   <h3>HTTPS:HTTP Secure </h3>
   <h4>Port #443 | HTTP with an extra layer of security.</h4>
     <p>All data is encrypted using SSL/TLS, making it safe to send sensitive information like passwords & credit cards </p>
     <h5> Online banking websites use HTTPS (notice the padlock icon 🔒 in your browser) to ensure financial data is encrypted during transmission.
 <h3>FTP:File Transfer Protocol</h3>
 <h4>Port #21 | A protocol designed specifically for transferring files between computers.</h4>
 <p> Consider a specialized delivery service for digital files, Secure, feature-rich, needs login, uses TCP</p> 
 <h5> Example: Web developers use FTP to upload website files to web servers.<br> You can connect to       ftp://files.example.com  to download or upload files.
   <h3>TFTP:Trival File Transfer Protocol </h3>
 <h4>Port #69 | Simple no-authentication file transfer, </h4>
   <p1> mainly for network device booting using UDP</p1>
   <h5>Example: A Cisco router boots up -> sends TFTP reqeuest -> downloads its IOS firmware from server-> starts operating. No login needed, just "get firmware.bin"</h5>
 <h3>SMTP:Simple Mail Transfer Protocol </h3>
   <h4>Port #25 | The postal service of the internet  </h4>
   <p>SMTP handles sending emails from your email client to mail servers & between mail servers across the internet</p>
   <h5>Example: When you hit "Send" on an email, SMTP carries it from your email app to your mail server, then to the recipient's mail server</h5>
 <h3>DNS:Domain Name System </h3>
 <h4> Port #53 | The Internets Phonebook</h4>  
 <p>It translates human-readable domain names (like google.com) into IP addresses (172.217.164.110) that computers can understand</p> 
   <h5>Example: When you type wwww.google.com, DNS servers look up & return Google's IP address so your browser knows where to connect</h5>
 <h3>SSH:Secure Shell  </h3>
 <h4>Port #22 | A secure way to remotely access & control another computer over a network.</h4>  
 <P>It's like having a secure, encrypted remote control for a computer </P>
 <h5> Example: System administrators use SSH to securely log into servers from anywhere in the world, as if they were sitting right in front of the server </h5>
 <h3>IMAP:Internet Message Access Protocol</h3>
 <h4>Port #143/993 | Access & manage your email directly on the mail server  </h4>
  <p>Emails stay on the server & Sync all your devices<br>
  Key Features:<br>
  Emails stored on server<br>
  Multi-device synchronization<br>
  Folder management on  server<br>
  Read/unread status syncs           
  </p>
 <h3>POP3 </h3>
 <h4>Port #110/995 | </h4>
 <h3>DHCP</h3>
  <h4>Port #67/68 | </h4>
 <h3>SNMP </h3>
 <h4> Port #161/162 | </h4>
 <h3>Telnet </h3>
 <h4> Port #23 | </h4>
<h2>Network Services</h2>
<h3>DHCP configuartion & troubleshooting</h3>
<h3> DNS resoultion process</h3>
<h3> NAT/PAT operations</h3>
<h3>Quality of Service (Qos) basics</h3>
<h3>Network Time Protocol (NTP)</h3> 
<h1>Addressubg & Subnetting</h1>
<h2>Ipv4</h2>
<h2>Ipv6</h2>
<h2>Subnetting & VLSM:Variable Length Subnet Mask</h2>
<h3></h3>
