import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderSection() {
  return (
      <section>
    <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link> <a href="#contactarea">Home</a> </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link > <a href="#contactarea">About</a></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link > <a href="#contactarea">Contact</a></Nav.Link>
  </Nav.Item>
  <Nav.Item>

  </Nav.Item>
</Nav>
  
    </section>
  );
}

export default HeaderSection;