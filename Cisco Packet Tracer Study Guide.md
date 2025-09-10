<H1> Zachc0des Cisco Packet Tracer Study Guide </h1><BR>
<p1> Sources: Cisco Networking Academy </p1>
<H1>File Types</H1>
<p1>
.Pka: Activity File;Built in Instruction Window  <BR>
.Pkt: Created when Simulated network is built  <BR>
.Pksz: Packet Tracer Tutored Activities  <BR>
.Pkx: Depricated File type for previously used images/embeds & other files in a packet tracer file  <BR>
</p1>

<H1>Logical Workspace </H1> <BR>
<H2>Device Types</H2>
<p1>Network Devices</p1><br>
<p1>Components</p1><br>
<p1>Connections</p1><br>
<p1>Miscellaneous</p1><br>
<p1>Multi User Connections</p1><br>

<h1> Part #1 Create a Network</h1>
<h2>Step 1: Add Network Devices to the Workspace</h2>
<p1>Locating End Devices:</p1><br>
<p1>PC: [End Devices]->PC</p1><br>
<p1>Laptop: [End Devices]->Laptop</p1><br>
<p1>Cable Modem: [Network Devices]->[WAN Emulator]->Cable Modem</p1><br>
<p1>Wireless Router [Network Devices]->[Wireless Devices]-> Home Router</p1>


<h2>Step 2: (Optional) Change Display name</h2>
<p1>Click the device icon in the logical workspace</p1><br>
<p1>Click the configuration tab in the device confugration window</p1><br>
<p1>Enter the name of the newly added device into the Display name field</p1>

<h2>Step 3: Add the physcial cabling between devices on the workspaces.</h3>
<h4>Using the device-type selection Box, add the physical cabaling between devices in the workspace</h4>

<p1>[Device Type selection box]->Connections->[Device Specfic Box]->Copper-Straight-Through</p1>
<h4>Interface Connection Types</h4>
<p1>Fast Ethernet0 for PC<br>
Ethernet1 for Wireless Router
</p1><br>

<h4> A: The PC & Laptop will need a copper-straight through Cable to connect to the Wire Router:</h4>
<p1>[Device-Type selection]->Connections-[Device Specific Box]->Copper-Straight-Through</p1>
<h5>Attach  to the FastEthernet0 interface of the PC and the Ethernet 1 interface of the wireless router.</h5>


<h4> B: The wireless router will need a copper straight-through cable to connect to the cable modem </h4>
<p1>[Device-Type selection]->Connections-[Device Specific Box]->Copper-Straight-Through</p1>
<h5>Attach to the internet interface of the wireless router and the Port 1 interface of the cable modem.</h5>

<h4> C: The Cable Modem will need a Coaxial cable to connect to the internet cloud.</h4>
<p1>[Device-Type-Selection]->Connections-[Device Specific Box]-> Coaxial Cable </p>
<h5>Attach to the Port 0 interface of the cable modem and the Coaxial 7 interface of the internet cloud.</h5>

<h1>Part 2: Configure the End Devices and verify Connectivity</h1>
<h2>In this Part you will be connecting a PC and a Laptop to the Wireless Router:</h2>
<h4>The PC will be connected to the network using an Ethernet Cable<h4>
<h4>The Laptop will undergo a chip replacment in order to connect to the Network Wirelessly</h4>
<p1> The Wired Ethernet Network Interface Card [NIC] will be replaced with a [Wireless NIC] and will sustain a connection to the router wirelessly </P1>
<H4>After both end devices are connected to the network, you will verify the connectivity to Cisco.SRV</h4>
<p1>The PC and the Laptop wil each be Assinged an IP (Internet Protocol) address The Internet Protocol is a set of rules for routing and addressing data on the Internet<BR><br>
The IP addresses are used to identify the devices on a network and allow devices to connect and transfer on a network</p1>
<h2>Step 1 Configure the PC</h2>
<P>In this step you will configure the PC for the wired Network</P>
<h4> A) Click the PC in the Desktop Tab, Navigate to the Ip Configuration to verify that DHCP is enabled and the PC has reieved an IP address</h4>
<p1>Select DHCP for the IP configuartion heading if you do not see an IP address for the IPv4 Address filed. Observe the process as the PC is reiveiwing an IP address from the DHCP Server</p1>
<h4> B) Close IP configuration, in the Desktop tab click Command Prompt</h4>
<h4> C) At the Prompt, Enter ipconfig/all to review the IPv4 addressing infomration from the DHCP server. The PC should have received an IPv4 Address in the 202.168.0.x range</h4>
<h4>D) Test Connectivtiy to the Cisco.Srv from the PC. From the command prompt issue the commandm [img Cisco.srv. It may take a few econds for the ping to return, 4 replies should be received</h4>
<h2> Step 2 Configure the Laptop</h2>
<p1>In this step you will configure the Laptop to acess the Wireless network</p1>
<h4>B) In the Physical tab you will need to remove the ethernet copper module and replace it with the Wireless "WPC300N" Module</h4>
  
<p>
1) Power off the Laptop by clicking the power button on the side of the laptop<BR><BR>
2) Remove the currently installed Ethernet copper moudlue by clicking on the module on the side of the laptop and dragging it to the Modules pane on the left of the laptop window <BR><BR>
3) Install the WIreless "WPC300N" Module by clicking itin the Moudles pane and dragging it to the empty mouse port on the side of the Laptop<br><BR>
4) Power on the Laptop by clicking the Laptop power button again.
</p>

<h4>C) With the wireless module isntalledm connect the laptop to the wireless network, Click the Desktop tab and select the PC wireless</h4>
<p>Select the Connect Tab. After a slight delay, the wireless network "HomeNetwork" will be invisible in the list of wirieless networks. Click refresh if necessary to see the list of available networks. Select HomeNetwork, Click Connect</p>
<h4>E) Close PC Wireless, Select Web Browser in the Desktop Tab</h4>
<h4>F) In the Web browser, navigate to Cisco.srv</h5>
<h1>Understanding the Properties of an IP addressing Table</h1>
<h3> The Ip config commmand displays your computers network configuartion infomration including the following:<BR></h3>
<h4>IP address:</h4>
<h4>Subnet Mask:</h4>
<h4>Gate way settings</h4>
