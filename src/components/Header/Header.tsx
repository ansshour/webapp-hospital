import styles from "./Header.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BeforeHeader } from "./BeforeHeader/BeforeHeader";
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <BeforeHeader />
            <Navbar bg="dark" variant='dark' expand="lg" sticky='top' style={{ filter: "drop-shadow(0px 2px 8px rgba(120, 160, 190, 0.3))" }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="О больнице" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item className={styles.navdrop}><Link to="/about_clinic">Сведения о медицинской организации</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="/working_hours">Режим и график работы</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="licenses">Лицензии</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="reviews">Отзывы</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Направления" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item className={styles.navdrop}><Link to="therapy">Терапия</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="gynecology">Гинекология</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="surgery">Хирургия</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="urology">Урология</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="neurology">Неврология</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="otorhinolaryngology">Оториноларингология</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="ophthalmology">Офтальмоголия</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="dentistry">Стоматология</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Специалисты" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item className={styles.navdrop}><Link to="therapist">Терапевты</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="gynecologists">Гинекологи</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="surgeon">Хирурги</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="urologist">Урологи</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="neurologist">Неврологи</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="otolaryngologist">Оториноларингологи</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="ophthalmologist">Офтальмологи</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="dentist">Стоматологи</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Платные услуги" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item className={styles.navdrop}><Link to="">Консультации</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="">Лучевая диагностика</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="">Эндоскопическая диагностика</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="">Ультразвуковая диагностика</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item className={styles.navdrop}><Link to="">Молекулярная-генитическое исследование</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link to="contacts" className={styles.nav1}>Контакты</Link></Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
