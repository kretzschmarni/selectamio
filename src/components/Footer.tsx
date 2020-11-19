import Link from 'next/link';
import {
  useColorMode,
  Container,
  Flex,
  NavLink,
  Button,
  Image,
  Box,
  Grid,
} from 'theme-ui';
// import Image from 'next/image';

export default function Footer() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    // see theme.layout.container for styles
    <Container
      as="footer"
      sx={{
        zIndex: 1,
        paddingBottom: 0,
      }}
    >
      <Grid
        as="section"
        gap={3}
        sx={{
          gridTemplateColumns: ['1fr'],
          backgroundColor: 'dark',
          clipPath: 'polygon(0% 8%,100% 0%,100% 100%,0% 100%)',
          minHeight: '300px',
          p: [3, 4],
          color: '#fff',
        }}
      >
        <Flex as="div">
          © SelectAM Oy 2020
          <br />
          VAT: FI31626479
        </Flex>
      </Grid>
    </Container>
  );
}
