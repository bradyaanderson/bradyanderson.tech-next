import Figure from "../../../../general/Figure";
import Paragraph from "../../../../general/Paragraph";
import ExternalLink from "../../../../general/ExternalLink";

function SE30FTPConnectionPost() {
  const imageBasePath = `/blog/categories/retro-computing/posts/se30-ftp-connection`;
  return (
    <div>
      <Figure
        path={`${imageBasePath}/ExpansionCard.jpg`}
        width={256}
        height={341}
        caption="The expansion card with ethernet that came with my SE/30."
        priority
      />

      <Paragraph>
        I got extremely lucky when I purchased my Macintosh SE/30 because it
        came with an expansion card that included an ethernet port. From what I
        can tell, these cards are hard to come by and even finding one on eBay
        can be difficult. I’m not even sure the make or model of the expansion
        card that came with my Mac. I’ve tried searching the many strings I see
        printed on the components that make up the card, but am yet to find
        anything.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/macEnvy.png`}
        width={512}
        height={342}
        caption="When the card is plugged into the logic board, I see it listed as “Ethernet A-Series” in MacEnvy, but searching for this also doesn’t bring up any results."
      />

      <Paragraph>
        A common problem I’ve been running into is getting files to and from my
        Mac. I can use floppy disks, but writing to a floppy disk is slow and
        sometimes I have trouble getting my Windows PC to read them. That’s why
        I wanted to set up an FTP connection between the SE/30 and a local FTP
        server on my network.
      </Paragraph>
      <Paragraph>
        FTP (File Transfer Protocol) is a decades-old standard that is still
        easy to set up on modern machines, so I figured this was a good place to
        start with networking. I may come back later and attempt to establish an
        internet connection, but a local connection is good enough for right
        now.
      </Paragraph>
      <Paragraph>
        I am running System 7.5.5 on my SE/30. System 7.5.5 comes with several
        tools that make it simple to get connected to a local network. I was
        also hoping System 7.5.5 would have any device drivers I may need since
        I don’t know what kind of ethernet card I have. First, I needed to
        enable communication over TCP/IP in macOS, which is not enabled by
        default. I opened the Network Software Selector application which I
        found in the “Apple Extras” folder on my machine and selected “Use Open
        Transport Networking”.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/openTransport.png`}
        width={512}
        height={342}
        caption="Selecting “Use Open Transport Networking” from the Network Software Selector enables TCP/IP communication."
      />

      <Paragraph>
        After a restart, I could now find the TCP/IP tool in the control panel.
        With this tool open, I set “Connect via:” as “Ethernet” and “Configure:”
        as “Using DHCP Server”. This would hopefully allow me to obtain an IP
        address automatically from my router.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/tcpip.png`}
        width={512}
        height={341}
        caption="For a while, this window didn’t show me as having an IP address, but I could proceed with setting up the FTP. When I came back later, I saw it had filled the IP address in."
      />

      <Paragraph>
        On the Macintosh Repository, I found{" "}
        <ExternalLink link="https://www.macintoshrepository.org/754-fetch">
          Fetch
        </ExternalLink>
        , an FTP application that runs on 68k Macs. I downloaded version 4.0.3
        and got the .sit file transferred over to my system. I uncompressed the
        file with StuffIt Expander and started up Fetch. This opened a window
        where I could set up a new FTP connection.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/FetchNewConnection.png`}
        width={512}
        height={341}
        caption="In the “Host” input, I’ve put the IP address of the FTP server I want to connect to. I’m leaving “User ID” and “Password” blank since the server doesn’t require this. Pressing the drop-down arrow provides a few more options that can be configured, such as the port you want to connect to."
      />

      <Paragraph>
        I filled in the details for my local FTP server and I pressed “OK.” The
        SE/30 started to establish a connection with my FTP server, and after a
        few seconds, it was displaying the contents of the FTP directory that I
        had connected to.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/FTPConnection.png`}
        width={512}
        height={341}
        caption="I placed a file called “HelloWorld.txt” on my FTP server so that I could verify the connection was established correctly."
      />

      <Paragraph>
        I tried uploading and downloading a few files to the FTP and it all
        worked. I was definitely expecting to struggle to get this connection
        working, but it went smoothly. Having an easy way to transfer files to
        and from my SE/30 will be super useful as I try to develop programs on
        the machine.
      </Paragraph>

      <h2>A note on my FTP server:</h2>
      <Paragraph>
        My FTP server is a modded PlayStation Vita. Why? Because it’s extremely
        easy to use, portable, and I can turn the server off and on in a matter
        of seconds. The files I’m transferring between my PC and Macintosh are
        usually no larger than 2 megabytes, so size and space are not a concern.
        Also, I just think there’s something funny about seeing a 30
        year-old-computer establishing a connection with a Vita.
      </Paragraph>

      <Figure
        path={`${imageBasePath}/PSVita.jpg`}
        width={384}
        height={512}
        caption="The PS Vita makes an amazing FTP server."
      />
    </div>
  );
}

export default SE30FTPConnectionPost;
