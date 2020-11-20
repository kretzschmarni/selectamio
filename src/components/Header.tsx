import Link from 'next/link';
import {
  useColorMode,
  Container,
  Flex,
  NavLink,
  Button,
  Image,
} from 'theme-ui';
// import Image from 'next/image';

export default function Header() {
  // const [colorMode, setColorMode] = useColorMode();
  return (
    <Container as="header" sx={{ marginTop: [3, 4] }}>
      <Flex as="nav" sx={{ justifyContent: 'space-between' }}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo-selectam.svg"
              alt="Logo SelectAM"
              sx={{ height: ['24px', '36px'], maxWidth: ['200px', '260px'] }}
            />
          </a>
        </Link>

        <Flex sx={{ alignSelf: 'flex-end' }}>
          <Link href="/" passHref>
            <NavLink px={3} py={3}>
              Home
            </NavLink>
          </Link>
          <Link href="/" passHref>
            <NavLink px={3} py={3}>
              Features
            </NavLink>
          </Link>
          <Link href="/" passHref>
            <NavLink px={3} py={3}>
              Company
            </NavLink>
          </Link>
          <Link href="/" passHref>
            <NavLink px={3} py={3}>
              Team
            </NavLink>
          </Link>
          <Link href="/" passHref>
            <NavLink px={3} py={3}>
              Contact
            </NavLink>
          </Link>
          {/* <Link href="/style" passHref>
            <NavLink p={2}>Style Guide</NavLink>
          </Link> */}
        </Flex>

        {/* <Button
          ml="auto"
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button> */}
      </Flex>
    </Container>
  );
}
