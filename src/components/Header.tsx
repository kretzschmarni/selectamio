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
  const [colorMode, setColorMode] = useColorMode();
  return (
    // see theme.layout.container for styles
    <Container as="header" sx={{ marginTop: [3, 4] }}>
      <Flex as="nav">
        {/* <Image
          src="/images/logo-selectam-v1.png"
          alt="Logo SelectAM"
          width={500}
          height={500}
        /> */}
        <Image
          src="/images/logo-selectam.svg"
          alt="Logo SelectAM"
          sx={{ height: ['24px', '32px'], maxWidth: ['200px', '260px'] }}
        />

        {/* passHref is required with NavLink */}
        {/* <Link href="/" passHref>
          <NavLink p={2}>Home</NavLink>
        </Link>
        <Link href="/style" passHref>
          <NavLink p={2}>Style Guide</NavLink>
        </Link> */}
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
