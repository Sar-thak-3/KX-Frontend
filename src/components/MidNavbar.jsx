import { Button, Navbar } from 'flowbite-react';

function MidNavbar() {
  return (
    <Navbar fluid rounded style={{backgroundColor: "transparent"}}>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Overview
        </Navbar.Link>
        <Navbar.Link href="#">Fundamentals</Navbar.Link>
        <Navbar.Link href="#">News Insights</Navbar.Link>
        <Navbar.Link href="#">Sentiments</Navbar.Link>
        <Navbar.Link href="#">Team</Navbar.Link>
        <Navbar.Link href="#">Technicals</Navbar.Link>
        <Navbar.Link href="#">Tokenomics</Navbar.Link>
      </Navbar.Collapse>
      <div className="bg-divider opacity-60 w-full h-[1px] my-[15px]"></div>
    </Navbar>
  );
}

export default MidNavbar;